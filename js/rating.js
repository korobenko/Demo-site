'use strict';

var Rating = {

    init: function () {
        jQuery('[data-jq-rating]').jqRating();
    },

    change: function (_this) {
        var data = {},
        value = _this.find('.rating-input').val();

        data['value'] = value;

        jQuery.post("/", {data: data}, function (response) {
            if (response.status == "error") {
                _this.find('.message').html(response.error_messages);
            } else {
                _this.find('.message').html(response.ok_messages);
            }
        }, "json");
    },

    events: function () {
        jQuery('.jq-rating-star').on('click', function () {
            var _this = jQuery(this).closest('.rating');
            Rating.change(_this);
        });
    }
}

jQuery(function () {
    Rating.init();

    jQuery('.jq-rating').on('click', function () {
        Rating.change(jQuery(this).closest('.rating'));
    });
});
