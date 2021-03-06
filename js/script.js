'use strict';

    /*mobile*/
    var useragents=['android','astel','audiovox','blackberry','chtml','docomo','ericsson','hand','iphone ','ipod','2me','ava','j-phone','kddi','lg','midp','mini','minimo','mobi','mobile','mobileexplorer','mot-e','motorola','mot-v','netfront','nokia', 'palm','palmos','palmsource','pda','pdxgw','phone','plucker','portable','portalmmm','sagem','samsung','sanyo','sgh','sharp','sie-m','sie-s','smartphone','softbank','sprint','symbian','telit','tsm','vodafone','wap','windowsce','wml','xiino'];

    var agt=navigator.userAgent.toLowerCase();
    var is_mobile=false;
    for(var i=0;i<useragents.length;i++){
        if(agt.indexOf(useragents[i])!=-1){
            is_mobile=true;
            var user_agent=agt; break;
        }
    }
    /*!mobile*/

    function throttle (callback, limit) {
        var wait = false;                  // Initially, we're not waiting

        return function () {               // We return a throttled function
            if (!wait) {                   // If we're not waiting
                callback.call();           // Execute users function
                wait = true;               // Prevent future invocations
                setTimeout(function () {   // After a period of time
                    wait = false;          // And allow future invocations
                }, limit);
            }
        }
    };

    jQuery(function() {

        if (typeof toastr != 'undefined') {
            toastr.options = {
                "closeButton": false,
                "debug": false,
                "newestOnTop": false,
                "progressBar": false,
                "positionClass": "toast-top-right",
                "preventDuplicates": false,
                "onclick": null,
                "showDuration": "300",
                "hideDuration": "1000",
                "timeOut": "5000",
                "extendedTimeOut": "1000",
                "showEasing": "swing",
                "hideEasing": "linear",
                "showMethod": "fadeIn",
                "hideMethod": "fadeOut"
            }
        }

        Header.init();
        Search.init();
        Popup.init();
        Rating.init();
        Auth.init();
        Callback.init();
        Feedback.init();
        BuyOneClick.init();
        ProductReview.init();
        Checkout.init();
        Profile.init();

        jQuery('.dropdown').dropdown();
        jQuery('.tabs').tabs();
        jQuery('.counter').counter();

        jQuery("input[type='tel']").mask("+38 (999) 999-99-99");

    });
