'use strict';

var Header = {

    init: function() {
        this.fixed();
        this.events();
    },

    fixed: function() {
        jQuery('.header-top').addClass('fixed').css('top', 0);
        jQuery('body').css('paddingTop', $('.header-top').innerHeight()+'px');
    },

    events: function() {
        if (!is_mobile) {
            $(window).on('resize', function() {
                Header.fixed();
            });
        } else {
            $(window).on('orientationchange', function() {
                setTimeout(function() {
                    Header.fixed();
                }, 500);
            });
        }
    }

}
