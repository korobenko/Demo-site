'use strict';

(function ($) {

    var methods = {

        init : function(options) {
            return this.each(function() {
                //var settings = $.extend({}, options);
                var self = $(this);

                self.find('li a').click(function() {
                    var $this = $(this),
                        ids = $this.attr('data-id').split(',');

                    self.find('li').removeClass('active');
                    $this.closest('li').addClass('active');

                    $('.tab-container[ data-parent-id = "'+self.attr('id')+'" ]').removeClass('active');

                    for (var i in ids) {
                        var id = ids[i].replace(' ','');
                        $('#'+id).addClass('active');
                    }
                });

            });
        }
    };

    $.fn.tabs = function (method) {
        if ( methods[method] ) {
            return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else if ( typeof method === 'object' || ! method ) {
            return methods.init.apply( this, arguments );
        } else {
            $.error( 'Метод с именем ' +  method + ' не существует для jQuery.tabs' );
        }
    };

})(jQuery);
