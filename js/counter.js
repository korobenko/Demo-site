'use strict';

(function ($) {

    var methods = {

        init : function(options) {
            return this.each(function() {
                //var settings = $.extend({}, options);
                var self = $(this);

                self.find('.counter-nav').click(function(event) {
                    event.preventDefault();

                    var val,
                        $this = $(this),
                        oper = $this.attr('data-rel'),
                        obj = $this.closest('.counter').find('.counter-val'),
                        obj_input = ( obj.get(0).tagName == 'INPUT' ) ? true : false;

                    (obj_input) ? val = parseInt( obj.val() ) : val = parseInt( obj.html() );

                    ( isNaN(val) ) ? val = 0 : false;

                    switch ( oper ) {
                        case "+1":
                            val++;
                            break;
                        case "-1":
                            if ( val > 1 ) {
                                val--;
                                break;
                            }
                    }

                    ( val==1 ) ? $this.closest('.counter').find('.counter-nav.prev').addClass('default') : $this.closest('.counter').find('.counter-nav.prev').removeClass('default');

                    (obj_input) ? obj.val( val ) : obj.html( val );
                });

                self.find('input.counter-val').keyup(function() {
                    var val = $(this).val().replace(/[^0-9]/, '');
                    $(this).val(val);
                });

            });
        }
    };

    $.fn.counter = function (method) {
        if ( methods[method] ) {
            return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else if ( typeof method === 'object' || ! method ) {
            return methods.init.apply( this, arguments );
        } else {
            $.error( 'Метод с именем ' +  method + ' не существует для jQuery.counter' );
        }
    };

})(jQuery);
