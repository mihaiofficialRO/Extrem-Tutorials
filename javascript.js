function newMemberAdd() {
    $(".span9").each(function() {
        this.innerHTML = this.innerHTML.replace(/<.?br>Motoare de cautare:/g, ", ");
        this.innerHTML = this.innerHTML.replace(/ :: (\d+) Motoar de cautare | :: (\d+) Motoare de cautare /g, "");
        $('span:contains("Google")', this).replaceWith('<span style="color: #9E8DA7; font-weight: 800;" class="username-coloured">Google [Bot]</span>');
        $('span:contains("bing")', this).replaceWith('<span style="color: #9E8DA7; font-weight: 800;" class="username-coloured">Bing [Bot]</span>');
        this.innerHTML = this.innerHTML.replace(/Nici unul, /g, "")
    })
}
$(function($) {
    newMemberAdd()
});
var ET_Plugins = {
    debug: function() {
        console.log("Init a plugin: ajax.min.js")
    },
    ajaxP: {
        init: function() {
            ET_Plugins.ajaxP.exec()
        },
        exec: function() {}
    },
    staffx: [1, 1968, 2564, 2968],
    premium: [1, 2968, 1968],
    commands: {},
    checkStaff: function(user_id) {
        for (var i = 0; i < ET_Plugins.staffx.length; i++)
            if (ET_Plugins.staffx[i] == user_id) console.log("[Staff Check User] ID: " + user_id + " | Status: ♔ Activated")
    },
    checkPremium: function(user_id) {
        for (var i = 0; i < ET_Plugins.premium.length; i++)
            if (ET_Plugins.premium[i] == user_id) console.log("[Premium Check User] ID: " + user_id + " | Status: ★ Activated")
    }
};
var etp = window.ET_Plugins;
$(function() {
    var links = $('a[href^="/u"]'),
        usersinfo = {};
    links.tooltipster && links.not('.mentiontag, .tooltipstered').tooltipster({
        animation: 'fade',
        interactive: true,
        contentAsHTML: true,
        minWidth: 300,
        maxWidth: 300,
        delay: 500,
        arrowColor: "#EEE",
        autoClose: true,
        content: 'Loading...',
        functionBefore: function(origin, continueTooltip) {
            continueTooltip();
            var userid = $(this).attr('href').replace(/.*?\/u(\d+).*/, '$1');
            if (origin.data('ajax') !== 'cached') {
                if (usersinfo[userid] != undefined) {
                    origin.tooltipster('content', usersinfo[userid]).data('ajax', 'cached')
                } else {
                    $.ajax({
                        type: 'GET',
                        url: "/ajax/index.php",
                        dataType: "html",
                        data: {
                            f: "m",
                            user_id: userid
                        },
                        success: function(html) {
                            usersinfo[userid] = html;
                            origin.tooltipster('content', html).data('ajax', 'cached')
                        }
                    })
                }
            }
        }
    })
});
$(function() {
    var i = 0,
        y = 0,
        x = $('#extrem-tutorials .recent-topics .eq');
    for (i; i < x.length; i++) {
        link = $('a[href^="/u"]', x[i]).attr('href');
        $(x[i]).prepend('<a href="' + link + '" class="lastpost-avatar"><img src="https://i.servimg.com/u/f32/15/42/26/78/th/oaspet11.png" /></a>')
    }
    var t = $('#extrem-tutorials .recent-topics .eq').length;
    for (z = 0; z < t; z++) {
        if ($('.lastpost-avatar', z[i]).lenght) {
            console.log("Detected !");
            data = $('.lastpost-avatar', z[i]);
            for (k = 0; k < data.length; k++) {
                var url = data[k].attr('href');
                $.get(url, function(data) {
                    var avatar = $('.main-content2 .avatars img', data).attr('src');
                    $('img', data[k]).addClass('loaded').attr('src', avatar);
                    console.log("Data: [" + url + " " + avatar + "] ")
                })
            }
        } else console.log("Not detected !")
    }
});
$(function() {
    if ("?f=1&mode=newtopic" == location.search) {
        $('input[name="post"]').click(function(e) {
            e.preventDefault();
            var form = $('form[action="/post"]'),
                datax = [];
            datax['username'] = _userdata.username;
            datax['topic_image'] = 'https://i.servimg.com/u/f39/15/42/26/78/import10.png';
            datax['topic_content'] = $('.sceditor-container textarea', form).val();
            datax['topic_title'] = $('input[name="subject"]', form).val();
            datax['topic_url'] = "";
            if (datax.username !== "Zeus" || datax.username !== "SSYT") datax['author'] = "Zeus" ? "Zeus" : "SSYT";
            else datax['author'] = datax.username;
            $.post("/post", {
                mode: "newtopic",
                f: "1",
                subject: $('input[name="subject"]', form).val(),
                message: $('.sceditor-container textarea').val(),
                post: "Ok"
            }, function(t) {
                if ($(t).find("#main-content .no-radius.alert-info a:first").attr('href').length > 1) {
                    console.log($(t).find("#main-content .no-radius.alert-info a:first").attr('href'));
                    datax['topic_url'] = $(t).find("#main-content .no-radius.alert-info a:first").attr('href');
                    datax['data'] = "&topic_image=" + datax.topic_image + "&content=" + $('.sceditor-container textarea').val() + "&topic_title=" + datax.topic_title + "&author=" + datax.author + "&topic_url=" + datax.topic_url;
                    $.ajax({
                        url: "https://web.archive.org/web/20171103155953/http://cdn.openpro.ro/extremtutorials/modules/inc/news_blog.php",
                        type: "post",
                        data: datax.data,
                        beforeSend: function() {
                            $("body").before('Se incarca...')
                        },
                        complete: function(r) {
                            console.log(r.responseText);
                            if (r.responseText == "Inserted") {
                                setTimeout(function() {
                                    location.href = datax.topic_url
                                }, 2000)
                            }
                        }
                    })
                }
            })
        })
    }
});

function getStaffPost() {
    $('.main-content.topic .table tr').each(function() {
        var x = $('td:has(".subiect") div', this).attr('id');
        var ts = $('td.boxes .principal', this),
            staff = [1, 1617, 2968],
            f = 0;
        for (f; f < staff.length; f++) {
            if ($(ts).has('a[href="/u' + staff[f] + '"]').length != 0) {
                console.log("Post " + x + " is a staff");
                $('td:has(".subiect") div', this).addClass('staff')
            }
        }
    })
};
$(function() {
    $('.punbb-forum-software').attr('id', 'skin2');
    new getStaffPost()
});
