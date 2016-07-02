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

        jQuery.post("/", {data: data}, function (response) {
            if (response.status == "error") {
                _this.find('.message').html(response.error_messages);
            } else {
                _this.find('.message').html(response.ok_messages);
            }
        }, "json");
    },

    events: function () {
        jQuery('.jq-rating').on('click', function () {
            Rating.change(jQuery(this).closest('.rating'));
        });
    }
};
