(function() {
    var it_id = 3490739;
    var html = "<div id=\"xf_MODAL\">\r\n    <div id=\"xfMODALCONTENT\">\r\n        <div id=\"xfMODALHEADER\"> <button type=\"button\" class=\"close\" id=\"xf_MODAL_CLOSE\" aria-label=\"Close\"><i id=\"xf_MODAL_ICON\" class=\"fa fa-lock\"><\/i><\/button>\r\n            <div id=\"xfMODALTITLE\"><\/div> <\/div>\r\n        <div id=\"xfMODALBODY\">\r\n            <iframe id=\"xfOFFERS\" scrolling=\"no\" src=\"\"><\/iframe>\r\n        <\/div>\r\n        <div id=\"xfMODALFOOTER\">\r\n            <p id=\"xfMODALFOOTERTEXT\"><\/p>\r\n        <\/div>\r\n    <\/div>\r\n<\/div>\r\n";
    var css = "\/content_lockers\/HumanVerification\/css.css";
    var cssDIR = "HumanVerification";
    var defaultSettings = {
        "primary_color": {
            "title": "Primary Color",
            "default": "#00a8ff",
            "type": "color",
            "small": "Color for button, spinner, and bold text.",
            "for": "html",
            "css": {
                "target": "strong",
                "rule": "color"
            }
        },
        "title_color": {
            "title": "Title Color",
            "default": "#272727",
            "type": "color",
            "for": "html",
            "css": {
                "target": "#xfMODALTITLE",
                "rule": "color"
            }
        },
        "footer_color": {
            "title": "Footer Color",
            "default": "#000000",
            "type": "color",
            "for": "html",
            "css": {
                "target": "#xfMODALFOOTER",
                "rule": "color"
            }
        },
        "font_family": {
            "title": "Title\/Footer Font",
            "default": "Arial",
            "type": "text",
            "for": "html",
            "css": {
                "target": "#xf_MODAL",
                "rule": "font-family"
            }
        },
        "locker_icon": {
            "title": "Locker Icon",
            "default": "lock",
            "type": "icon"
        },
        "offer_box_title": {
            "title": "Offer Box Title",
            "default": "Surveys",
            "type": "text"
        },
        "offer_box_sub_title": {
            "title": "Offer Box Sub-Title",
            "default": "Human Verification",
            "type": "text"
        },
        "content_locker_title_text": {
            "title": "Content Locker Title",
            "default": "Human Verification Required",
            "type": "text",
            "small": "May be overwritten by template settings."
        },
        "content_locker_footer_text": {
            "title": "Content Locker Footer Text",
            "default": "Verification concluded <strong>automatically<\/strong> upon survey completion. Surveys for your country typically take 2-3 minutes.",
            "type": "text",
            "small": "May be overwritten by template settings."
        },
        "overlay_color": {
            "title": "BG Overlay Color",
            "default": "#000000",
            "type": "color",
            "small": "Background color of overlay"
        },
        "overlay_opacity": {
            "title": "Overlay Opacity",
            "default": "0.4",
            "type": "text",
            "small": "Overlay Opacity (0 for transparent, 1 for opaque)"
        },
        "animation": {
            "title": "Entrance Animation",
            "default": "xf_animateTop",
            "type": "select",
            "options": {
                "Drop From Top": "xf_animateTop",
                "Fade In": "xf_fadeIn",
                "Slide From Right": "xf_slideRight",
                "Slide Up": "xf_slideUp",
                "Slide From Right (3D)": "xf_slideFall",
                "Spin In": "xf_spinIn"
            }
        },
        "animation_duration": {
            "title": "Animation Duration (ms)",
            "default": "600",
            "type": "number",
            "small": "1000ms = 1 second"
        },
        "number_offers_required": {
            "title": "Offers Required",
            "default": 1,
            "type": "number",
            "small": "Max 10."
        },
        "payout_required": {
            "title": "Payout Required (Cents)",
            "default": 1,
            "type": "number",
            "small": "Payout required (in cents). 500 = $5.00"
        },
        "onClose": {
            "title": "On Offer Complete",
            "default": "redirect",
            "type": "select",
            "options": {
                "Close Locker": "close_locker",
                "Redirect to URL": "redirect"
            }
        },
        "onCloseURL": {
            "title": "Redirect URL",
            "default": "https:\/\/google.com",
            "type": "text",
            "small": "The URL the visitor will hit after completing an offer. Only enabled if option above is set to redirect."
        },
        "disable_right_click": {
            "title": "Disable Right Click",
            "default": "0",
            "type": "toggle",
            "small": "Right click will be disabled for the entire page."
        },
        "verification_captcha": {
            "title": "Verification Captcha",
            "default": "1",
            "type": "toggle",
            "small": "Show fake captcha box before offers"
        },
        "verification_captcha_button": {
            "title": "Captcha Button Text",
            "default": "Verify Through Survey",
            "type": "text"
        },
        "escape_key_close": {
            "title": "Escape Key Close",
            "default": "0",
            "type": "toggle",
            "small": "If enabled, user can exit content locker with escape key."
        },
        "button_close": {
            "title": "Button Close",
            "default": "0",
            "type": "toggle",
            "small": "If enabled, user can exit content with top-right button\/icon."
        },
        "tooltips": {
            "title": "Offer Tooltips",
            "default": "1",
            "type": "toggle",
            "small": "Shows offer requirements when hovering over it."
        }
    };
    var userSettings = {
        "primary_color": "#ff00c8",
        "title_color": "#f5003d",
        "footer_color": "#000000",
        "font_family": "Arial",
        "locker_icon": "lock",
        "offer_box_title": "Just Complete An Offer To Finish Verification",
        "offer_box_sub_title": "",
        "content_locker_title_text": "<b>Human Verification Required<\/b>",
        "content_locker_footer_text": "Verification concluded <strong>automatically<\/strong> upon survey completion. Surveys for your country typically take 2-3 minutes.",
        "overlay_color": "#000000",
        "overlay_opacity": "0.4",
        "animation": "xf_animateTop",
        "animation_duration": 600,
        "number_offers_required": 1,
        "payout_required": 100,
        "onClose": "redirect",
        "onCloseURL": "https:\/\/epicplayloft.com\/verify",
        "disable_right_click": 0,
        "verification_captcha": 1,
        "verification_captcha_button": "Verify Through Completing Offer",
        "escape_key_close": 0,
        "button_close": 0,
        "tooltips": 1
    };
    var dmcaRemoved = 0;
    xfExecuteWithBody();

    function xfExecuteWithBody() {
        if (typeof document.getElementsByTagName("body")[0] == "undefined") {
            setTimeout(xfExecuteWithBody, 1);
            return;
        }
        if (dmcaRemoved === 1) {
            document.getElementsByTagName("body")[0].innerHTML = "This content has been removed";
            document.getElementsByTagName("body")[0].style.background = "#fff";
            return;
        }

        if (window['xfContentLocker']) {
            //Old locker
            //Specific CSS
            xfContentLocker.setTemplateCSSDir(cssDIR);
            xfContentLocker.removeElByID("xf_MODAL_CONTAINER");


            //HTML
            xfContentLocker.removeElByID("xf_MODAL_CONTAINER");
            var d = document.createElement("div");
            d.style = "display:none;";
            d.id = "xf_MODAL_CONTAINER";
            d.innerHTML = html;
            document.getElementsByTagName("body")[0].appendChild(d);
            xfContentLocker.defaultSettings = defaultSettings;
            xfContentLocker.userSettings = userSettings;
            for (var property in userSettings) {
                var val = userSettings[property];
                if (typeof val === 'string') {
                    userSettings[property] = val.replace(/cpabuild_/ig, 'xf_');
                }
            }
            xfContentLocker.onVarsChange();


        }

    }
    if (window['xfContentLocker']) {
        var lockerIcon = xfContentLocker.getValue("locker_icon");
        document.getElementById("xf_MODAL_ICON").className = "fa fa-" + lockerIcon;

        //Close Button
        if (xfContentLocker.getValue("button_close") == 1) {
            document.getElementById("xf_MODAL_CLOSE").addEventListener('click', function() {
                xfContentLocker.closeLocker();
                // return false;
            }, false);
        }
    }
})();