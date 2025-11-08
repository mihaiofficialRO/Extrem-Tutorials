function skinhl(t) {
    my_setcookie("theme_changer", t, 1), laycookie()
}

function skinhl_none() {
    my_setcookie("theme_changer", "none", 1), laycookie()
}

function laycookie() {
    my_getcookie("theme_changer") ? (soskin = my_getcookie("theme_changer"), "none" == soskin ? $("body").attr("id", "") : "1" == soskin ? $("body").attr("id", "skin1") : "2" == soskin ? $("body").attr("id", "skin2") : "3" == soskin ? $("body").attr("id", "skin3") : "4" == soskin ? $("body").attr("id", "skin4") : "5" == soskin ? $("body").attr("id", "skin5") : "6" == soskin && $("body").attr("id", "skin6")) : (skinbandau = 1 + Math.floor(12 * Math.random()), 1 == skinbandau && skinhl(1), 2 == skinbandau && skinhl(2), 3 == skinbandau && skinhl(3), 4 == skinbandau && skinhl(4), 5 == skinbandau && skinhl(5), 6 == skinbandau && skinhl(6))
}
$(document).ready(function() {
    $(".ET_likes").html(_userdata.point_reputation), laycookie(), $("#skin-1").click(function() {
        skinhl(1)
    }), $("#skin-2").click(function() {
        skinhl(2)
    }), $("#skin-3").click(function() {
        skinhl(3)
    }), $("#skin-4").click(function() {
        skinhl(4)
    }), $("#skin-5").click(function() {
        skinhl(5)
    }), $("#skin-6").click(function() {
        skinhl(6)
    }), $("#skin-none").click(function() {
        skinhl_none()
    })
}), $(document).ready(function() {
    $("#nav a").each(function() {
        $(this).attr("href") === window.location.pathname && $(this).attr("id", "current")
    })
}), /www.extrem-tutorials.com/.test(location.host) && jQuery(function(t) {
    t(function() {
        function t(t) {
            my_setcookie("schimbare_stil_editor", t, 1), n()
        }

        function i() {
            my_setcookie("schimbare_stil_editor", "none", 1), n()
        }

        function n() {
            my_getcookie("schimbare_stil_editor") ? (soskin = my_getcookie("schimbare_stil_editor"), "none" == soskin ? (jQuery(".punbb-forum-software .sceditor-container").attr("id", ""), jQuery(".punbb-forum-software .stil-actual").html("" + f + " v" + d + " (" + u + ")")) : "1" == soskin ? (jQuery(".punbb-forum-software .sceditor-container").attr("id", "editor_skin1"), jQuery(".punbb-forum-software .stil-actual").html("" + f + " v" + d + " (" + s + ")")) : "2" == soskin ? (jQuery(".punbb-forum-software .sceditor-container").attr("id", "editor_skin2"), jQuery(".punbb-forum-software .stil-actual").html("" + f + " v" + d + " (" + a + ")")) : "3" == soskin ? (jQuery(".punbb-forum-software .sceditor-container").attr("id", "editor_skin3"), jQuery(".punbb-forum-software .stil-actual").html("Ã?ÂŠ ET_SCEditor (" + c + ")")) : "4" == soskin ? (jQuery(".punbb-forum-software .sceditor-container").attr("id", "editor_skin4"), jQuery(".punbb-forum-software .stil-actual").html("" + f + " v" + d + " (" + r + ")")) : "5" == soskin && (jQuery(".punbb-forum-software .sceditor-container").attr("id", "editor_skin5"), jQuery(".punbb-forum-software .stil-actual").html("" + f + " v" + d + " (" + l + ")"))) : (editor_skin = 1 + Math.floor("+ durata_cookie +" * Math.random()), 1 == editor_skin && t(1), 2 == editor_skin && t(2), 3 == editor_skin && t(3), 4 == editor_skin && t(4), 5 == editor_skin && t(5))
        }
        var o = "https://i.servimg.com/u/f39/18/74/45/05/color_10.png",
            e = "Selecteaza stilul dorit",
            s = "Stil modern",
            a = "Stil office",
            c = "Stil simplu",
            r = "Stil dark",
            l = "Stil profesional",
            u = "Stil standard",
            d = "1.0",
            f = "ÂŠ ET_Editor",
            k = "stefan_smekerul2008@yahoo.com",
            b = "540",
            m = "230";
        location.host && ($("form").find(".punbb-forum-software .sceditor-toolbar + iframe + textarea").each(function() {
            $(this).val() || $(this).attr("placeholder", "Continut...")
        }), $('<div class="sceditor-group schimba-stil active"><a class="sceditor-button hover" style="opacity: 1.0 !important;" unselectable="on" title="' + e + '"><div unselectable="on" style="background-image:url(' + o + ')"></div></a></div>').insertBefore(".punbb-forum-software .sceditor-group:last-child").click(function() {
            $(".punbb-forum-software .sceditor-change-style").toggle()
        }), $(".sceditor-container").after('<div class="stil-actual">' + f + " v" + d + " " + u + "</div>"), $(".punbb-forum-software .schimba-stil a").before('<div style="display: none;position: absolute;margin-top: 26px;" class="sceditor-dropdown sceditor-change-style sceditor-font-picker"><div class="url"><ul class="hovers"><li><a class="style1" unselectable="on" class="sceditor-fontsize-option"><span style="font-size: 11px;" unselectable="on">' + s + '</span></a></li><li><a class="style2" unselectable="on" class="sceditor-fontsize-option"><span style="font-size: 11px;" unselectable="on">' + a + '</span></a></li><li><a class="style3" unselectable="on" class="sceditor-fontsize-option"><span style="font-size: 11px;" unselectable="on">' + c + '</span></li><li><a class="style5" unselectable="on" class="sceditor-fontsize-option"><span style="font-size: 11px;" unselectable="on">' + l + '</span></li><li><a class="style4" unselectable="on" class="sceditor-fontsize-option"><span style="font-size: 11px;" unselectable="on">' + r + '</span></li><li><a class="reset" unselectable="on" class="sceditor-fontsize-option"><span style="font-size: 11px;" unselectable="on">' + u + '</span></a></li></ul></div></div><div class="sceditor-change-style" style="position: absolute;"></div>'), console.log("Script-ul s-a incarcat cu succes."), n(), $(".style1").click(function() {
            t(1)
        }), $(".style2").click(function() {
            t(2)
        }), $(".style3").click(function() {
            t(3)
        }), $(".style4").click(function() {
            t(4)
        }), $(".style5").click(function() {
            t(5)
        }), $(".reset").click(function() {
            i()
        }), $(".punbb-forum-software .sceditor-button-servimg").click(function() {
            $(".punbb-forum-software .sceditor-servimg").html('<iframe id="obj_servimg" src="https://web.archive.org/web/20171105081231/https://servimg.com/forum_upload.php?account=' + k + '&id=9c12de6c4558d9d5bf1ac81c520f3ba4&f=11117201" width="' + b + '" height="' + m + '" border="0" scrolling="no" frameborder="0"></iframe>')
        }))
    })
}), $(function() {
    if (0 === _userdata.user_level) {
        var t = function() {};
        $("#footer, .sky-tabs, #left, .pun, .table-frms, #disk-player-container_1216").bind("contextmenu", function() {
            return t(), !1
        }), $(document).keydown(function(i) {
            return 85 == i.keyCode && i.ctrlKey || 123 == i.keyCode ? (t(), !1) : void 0
        })
    }
});

/*
Plugins and codes !
*/

/* Only developers */
document.write('<script src="https://web.archive.org/web/20171105081231/https://147.ip-51-255-166.eu/red_cdn/extremtuts/js/cookies.js" type="text/javascript" async="true"></script>');

/* Members, admins and moderators file ! */
jQuery(function() {
    1 != _userdata.session_logged_in && 1 != _userdata.user_level && 2 != _userdata.user_level && $('a[href*="&mode=delete"], a[href*="&mode=editpost"').remove()
});

function et_notification(text, color, time, icon) {
    var icon_markup = "<i class='fa fa-info'></i><i class='fa fa-check'></i> ",
        html,
        $container = $('#ET_notifications');

    if (icon) {
        icon_markup = "<span class='" + icon + "'></span> ";
    }

    // Generate the HTML
    html = $('<div class="alerta alerta-' + color + '">' + icon_markup + text + '</div>').fadeIn('fast');

    // Append the label to the container
    $container.append(html);

    // Remove the notification on click
    html.on('click', function() {
        ohSnapX($(this));
    });

    // After 'time' seconds, the animation fades out
    setTimeout(function() {
        ohSnapX($container.children('.alerta').first());
    }, time);
}

function ohSnapX(element) {
    // Called without argument, the function removes all alerts
    // element must be a jQuery object

    if (typeof element !== "undefined") {
        element.fadeOut('fast', function() {
            $(this).remove();
        });
    } else {
        $('.alerta').fadeOut('fast', function() {
            $(this).remove();
        });
    }
}

$(function() {
    var d = $('a[href="/privmsg?folder=inbox"]').attr('alt').match(/\d+/g);
    if ($('a[href="/privmsg?folder=inbox"]').attr('alt') === "" + d + " mesaj nou" || $('a[href="/privmsg?folder=inbox"]').attr('alt') === "" + d + " mesaje noi") {
        et_notification('Salut ' + _userdata.username + ', ai ' + d + ' mesaje private necitite ! Verificati inbox-ul de pe forum', 'blue', 10000);
    }
});

$(function() {
    $(".total_users").each(function() {
        var a = [];
        a[0] = $(this).text().match(/\d+/g)[0];
        a[1] = $(this).text().match(/\d+/g)[1];
        a[2] = $(this).text().match(/\d+/g)[2];
        a[3] = $(this).text().match(/\d+/g)[3];
        a[4] = $(this).text().match(/\d+/g)[4];
        a[4] || parseInt(a[4]) ? (a[6] = parseInt(a[0]) + parseInt(a[4]), a[7] = parseInt(a[1]) + parseInt(a[4]), a[5] = "In total sunt <strong>" + a[6] + "</strong> utilizatori conectati: " + a[7] + " Inregistrati, " + a[2] + " Invizibil si " + a[3] + " Vizitatori <br />") : a[5] = "In total sunt <strong>" +
            a[0] + "</strong> utilizatori conectati: " + a[1] + " Inregistrati, " + a[2] + " Invizibil si " + a[3] + " Vizitatori <br />";
        $(this).replaceWith(a[5])
    })
});
}
