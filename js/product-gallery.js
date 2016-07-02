'use strict';

jQuery(function() {

    if (jQuery('#product-gallery-additional').length) {
        var carousel = jQuery('#product-gallery-additional'),
            slides_to_show = carousel.data('show'),
            slides_to_scroll = carousel.data('scroll');

        carousel.slick({
          dots: true,
          arrows: false,
          infinite: true,
          speed: 300,
          slidesToShow: slides_to_show || 4,
          slidesToScroll: slides_to_scroll || 3
        });

        carousel.find('.product-gallery-small').click(function() {
            var src = jQuery(this).data('zoom');

            carousel.find('.product-gallery-small').removeClass('active');
            jQuery(this).addClass('active');
            jQuery('#product-gallery-main img').attr('src', src);
        });
    }
});
