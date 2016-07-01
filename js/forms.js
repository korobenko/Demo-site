'use strict';

jQuery(function() {

    jQuery('#show-password-popup').click(function(event) {
        event.preventDefault();
        Popup.hide('#login-popup');
        Popup.show('#password-popup');
    });

    jQuery('#show-registration-popup').click(function(event) {
        event.preventDefault();
        Popup.hide('#login-popup');
        Popup.show('#registration-popup');
    });

    jQuery('#show-login-popup').click(function(event) {
        event.preventDefault();
        Popup.hide('#password-popup');
        Popup.show('#login-popup');
    });

});
