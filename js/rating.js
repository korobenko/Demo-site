'use strict';

var Rating = {

    init: function () {
        jQuery('[data-jq-rating]').jqRating();
        this.events();
    },

    change: function (_this) {
        var data = {},
        value = _this.find('.rating-input').val();

        data['value'] = value;
        console.log(data);

        /*jQuery.ajax({
            type: "POST",
            url: '/rating',
            cache: false,
            data: data,
            dataType: 'json',
            success: function(response) {
                if (response.status) {
                    _this.find('.message').html(response.ok_messages);
                } else {
                    _this.find('.message').html(response.error_messages);
                }
            },
            error: function () {

            }
        });*/
    },

    events: function () {
        jQuery('.jq-rating').on('click', function () {
            Rating.change(jQuery(this).closest('.rating'));
        });
    }
};
