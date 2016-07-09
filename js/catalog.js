'use strict';

jQuery(function() {

    if ( jQuery("#catalog-price").length ) {
        jQuery("#catalog-price").slider({
          range: true,
          min: 1000,
          max: 20000,
          values: [ 1000, 5000 ],
          slide: function( event, ui ) {
            jQuery("#catalog-price-lower").val(ui.values[ 0 ]);
            jQuery("#catalog-price-upper").val(ui.values[ 1 ]);
          }
        });
    }

    jQuery('#catalog-price-lower').keyup(function() {
      jQuery("#catalog-price").slider('values',0, jQuery(this).val());
      jQuery("#catalog-price").slider('values',1, jQuery('#catalog-price-upper').val());
   });

    jQuery('#catalog-price-upper').keyup(function() {
      jQuery("#catalog-price").slider('values',1, jQuery(this).val());
      jQuery("#catalog-price").slider('values',0, jQuery('#catalog-price-lower').val());
   });

});
