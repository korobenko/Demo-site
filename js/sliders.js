'use strict';

jQuery(function() {

    if (jQuery('#main-slider').length) {
        jQuery('#main-slider').slick({
            fade: true,
            autoplay: true,
            autoplaySpeed: 3000,
            infinite: true,
            slidesToShow: 1,
            adaptiveHeight: true,
            arrows: false,
            dots: true
        });
    }

    if (jQuery('.carousel').length) {
        jQuery('.carousel').each(function(index, element) {
            var slides_to_show = jQuery(element).data('show'),
                slides_to_scroll = jQuery(element).data('scroll');

            jQuery(element).slick({
                infinite: true,
                slidesToShow: slides_to_show || 4,
                slidesToScroll: slides_to_scroll || 3,
                adaptiveHeight: true,
                arrows: false,
                dots: true
            });
        });
    }

});
