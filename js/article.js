'use strict';

var GenereteIframe = {

    init: function() {
        var all = jQuery("article iframe, article object, article embed, article video");
        (all.length) ? this.replace(all) : false;
    },

    replace: function(all) {
        all.each(function(index, element) {
            jQuery(element).wrap("<div class='flex-video'></div>");
        });
    }

}

var GenereteTable = {

    init: function() {
        var all = jQuery('article table');
        (all.length) ? GenereteTable.replace(all) : false;
    },

    replace: function(all) {
        //clear in article table inline style
        all.each(function(index, element) {
            var $this = jQuery(element);

            $this.removeAttr('style').removeAttr('border').removeAttr('cellspacing').removeAttr('cellpadding');
            $this.find('thead, tbody, tfooter, tr, td, th, p').removeAttr('style').removeAttr('border').removeAttr('cellspacing').removeAttr('cellpadding').removeAttr('rel');
            $this.wrap("<div class='table-container'></div>");
        });
    }

}

jQuery(function() {
    GenereteIframe.init();
    GenereteTable.init();
});
