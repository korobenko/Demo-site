'use strict';

jQuery.validator.addMethod("onlyLetters",
    function(value, element, regexp) {
    	var re = new RegExp(/\d+/);
    	return !(re.test(value));
    },
    "Please enter a valid value."
);
jQuery.validator.addMethod("birthday",
    function(value, element, regexp) {
    	var re = new RegExp(/^[\d]{2}(\.|-|\/)[\d]{2}\1[\d]{4}$/i);
    	return re.test(value);
    },
    "Please enter a valid value."
);

var Search = {

    init: function() {
        jQuery('.header-search button[type=submit]').val('').prop('disabled', true);
        this.events();
    },

    goUp : function() {
        var list = $('.live-search'),
            options = list.find('.search-item'),
            selected = list.find('.search-item.selected');

        if (selected.index() == 0) {
            options.removeClass('selected');
            options.eq(0).addClass('selected');
            list.scrollTop(0);
            return false;
        }

        selected.removeClass('selected');
        options.eq(selected.index() - 1).addClass('selected').focus();

        list.scrollTop(list.scrollTop() - options.eq(selected.index()).innerHeight());
    },

    goDown : function() {
        var list = $('.live-search'),
            options = list.find('.search-item'),
            selected = list.find('.search-item.selected'),
            next = options.eq(selected.index() + 1);

        if (!next.length) {
            return false;
        }

        selected.removeClass('selected');
        next.addClass('selected').focus();

        list.scrollTop(list.scrollTop() + next.position().top);
    },

    events : function() {
        jQuery('input[name="q"]').on('input', function(event) {
            if ( jQuery(this).val().length > 3 ){
                /*jQuery.ajax({
                    type: "POST",
                    url: '/search/live',
                    cache: false,
                    data: { q : jQuery('input[name="q"]').val() },
                    dataType: 'json',
                    success: function(response) {
                        if (response.status) {
                            jQuery('.live-search-container').html(jQuery(response.html));
                            jQuery('.live-search').show();
                        } else {
                            jQuery('.live-search').hide();
                        }
                    },
                    error: function () {
                    }
                });*/
                jQuery('.live-search').show();
            }

            if (jQuery(this).val() && jQuery('.header-search button').prop('disabled')) {
                jQuery('.header-search button').prop('disabled', false);
            } else if (!jQuery(this).val()) {
                jQuery('.header-search button').prop('disabled', true);
                jQuery('.live-search').hide();
            }
        });

        jQuery('input[name="q"]').on('keydown', function(event) {
            if (event.keyCode == 38) {
                Search.goUp();
            } else if (event.keyCode == 40) {
                Search.goDown();
            }

            if (event.keyCode == 13) {
                if ( $('.search-item.selected').length ) {
                    var href = $('.search-item.selected').find('.search-item-title a').attr('href');
                    location.href = href;
                    return false;
                }
            }
        });
    } //end events
};

var Auth = {

	init : function () {
		this.login();
        this.registration();
		this.forgotPass()
		this.events();
	},

	login : function() {
		jQuery("[name=login-form]").validate({
			rules : {
				email : {
					required : true,
					email : true
				},
				password : {
					required : true,
					minlength : 5,
					maxlength : 20
				}
			},
			messages : {
				email : {
					required : '',
					email : ''
				},
				password : {
					required : '',
					minlength : '',
					maxlength : ''
				}
			},
			errorPlacement : function(error, element) {
				//error.insertAfter(element);
			},
			submitHandler: function(form) {
                if (true) {
                    Popup.hide('#login-popup');
                    toastr.success('Успех');
                } else {
                    toastr.success('Ошибка');
                }
			}
		});
	},

    registration : function() {
        jQuery("[name=registration-form]").validate({
			rules : {
				email : {
					required : true,
					email : true
				},
                name : {
					required : true,
					onlyLetters : true
				},
                surname : {
					required : true,
					onlyLetters : true
				},
				password : {
					required : true,
					minlength : 5,
					maxlength : 20
				},
                password_2 : {
					required : true,
					minlength : 5,
					maxlength : 20
				}
			},
			messages : {
				email : {
					required : '',
					email : ''
				},
                name : {
					required : '',
					onlyLetters : ''
				},
                surname : {
					required : '',
					onlyLetters : ''
				},
				password : {
					required : '',
					minlength : '',
					maxlength : ''
				},
                password_2 : {
					required : '',
					minlength : '',
					maxlength : ''
				}
			},
			errorPlacement : function(error, element) {
				//error.insertAfter(element);
			},
			submitHandler: function(form) {
                if (true) {
                    Popup.hide('#registration-popup');
                    toastr.success('Успех');
                } else {
                    toastr.success('Ошибка');
                }
			}
		});
    },

	forgotPass : function() {
		jQuery("[name=password-form]").validate({
			rules : {
				email : {
					required : true,
					email : true
				}
			},
			messages : {
				email : {
					required : '',
					email : ''
				}
			},
			errorPlacement : function(error, element) {
				//error.insertAfter(element);
			},
			submitHandler: function(form) {
                if (true) {
                    Popup.hide('#password-popup');
                    toastr.success('Успех');
                } else {
                    toastr.success('Ошибка');
                }
			}
		});
	},

	events: function() {
        jQuery('#show-password-popup').click(function(event) {
            event.preventDefault();
            Popup.hide('#login-popup');
            Popup.show('#password-popup');
        });

        jQuery('#show-registration-popup').click(function(event) {
            event.preventDefault();
            Popup.hide('#login-popup');
            Popup.show('#registration-popup');
        });

        jQuery('#show-login-popup').click(function(event) {
            event.preventDefault();
            Popup.hide('#password-popup');
            Popup.show('#login-popup');
        });
	}
};

var Callback = {

	init: function () {
		this.validateForm();
	},

	validateForm : function() {
		jQuery("[name=callback-form]").validate({
			rules : {
				name : {
					required : true,
					onlyLetters : true
				},
                tel : {
					required : true
				}
			},
			messages : {
                name : {
					required : '',
					onlyLetters : ''
				},
                tel : {
					required : ''
				}
			},
			errorPlacement : function(error, element) {
				//error.insertAfter(element);
			},
			submitHandler: function(form) {
                if (true) {
                    toastr.success('Успех');
                } else {
                    toastr.success('Ошибка');
                }
			}
		});
	}
};

var Feedback = {

	init: function () {
		this.validateForm();
	},

	validateForm : function() {
		jQuery("[name=feedback-form]").validate({
			rules : {
				name : {
					required : true,
					onlyLetters : true
				},
                tel : {
					required : true
				}
			},
			messages : {
                name : {
					required : '',
					onlyLetters : ''
				},
                tel : {
					required : ''
				}
			},
			errorPlacement : function(error, element) {
				//error.insertAfter(element);
			},
			submitHandler: function(form) {
                if (true) {
                    toastr.success('Успех');
                } else {
                    toastr.success('Ошибка');
                }
			}
		});
	}
};

var BuyOneClick = {

	init: function () {
		this.validateForm();
	},

	validateForm : function() {
		jQuery("[name=buy-one-click-form]").validate({
			rules : {
                tel : {
					required : true
				}
			},
			messages : {
                tel : {
					required : ''
				}
			},
			errorPlacement : function(error, element) {
				//error.insertAfter(element);
			},
			submitHandler: function(form) {
                if (true) {
                    Popup.hide('#buy-one-click-popup');
                    toastr.success('Успех');
                } else {
                    toastr.success('Ошибка');
                }
			}
		});
	}
};

var ProductReview = {

	init: function () {
		this.addReview();
        this.answerReview();
	},

	addReview : function() {
		jQuery("[name=product-review-form]").validate({
			rules : {
                text : {
					required : true
				}
			},
			messages : {
                text : {
					required : ''
				}
			},
			errorPlacement : function(error, element) {
				//error.insertAfter(element);
			},
			submitHandler: function(form) {
                if (true) {
                    Popup.hide('#product-review-popup');
                    toastr.success('Успех');
                } else {
                    toastr.success('Ошибка');
                }
			}
		});
	},

    answerReview : function() {
		jQuery("[name=product-answer-review-form]").validate({
			rules : {
                email : {
					required : true,
                    email : true
				},
                name : {
					required : true,
					onlyLetters : true
				},
                text : {
					required : true
				}
			},
			messages : {
                email : {
					required : '',
                    email : ''
				},
                name : {
					required : '',
					onlyLetters : ''
				},
                text : {
					required : ''
				}
			},
			errorPlacement : function(error, element) {
				//error.insertAfter(element);
			},
			submitHandler: function(form) {
                if (true) {
                    Popup.hide('#product-answer-review-popup');
                    toastr.success('Успех');
                } else {
                    toastr.success('Ошибка');
                }
			}
		});
	}
};

var Checkout = {

	init: function () {
		this.validateForm();
        this.events();
	},

	validateForm : function() {
		jQuery("[name=checkout-form]").validate({
			rules : {
                name : {
					required : true,
					onlyLetters : true
				},
                city : {
					required : true
				},
                tel : {
					required : true
				},
                email : {
					required : true,
                    email : true
				}
			},
			messages : {
                name : {
					required : '',
					onlyLetters : true
				},
                city : {
					required : ''
				},
                tel : {
					required : ''
				},
                email : {
					required : '',
                    email : ''
				}
			},
			errorPlacement : function(error, element) {
				//error.insertAfter(element);
			},
			submitHandler: function(form) {
                if (true) {
                    toastr.success('Успех');
                } else {
                    toastr.success('Ошибка');
                }
			}
		});
	},

    events : function() {
        jQuery('#checkout-button').click(function(event) {
            event.preventDefault();
            jQuery("[name=checkout-form]").submit();
        });
    }
};

var Profile = {

	init: function () {
		this.validateForm();
        this.validatePasswordForm();
	},

	validateForm : function() {
		jQuery("[name=profile-form]").validate({
            rules : {
				email : {
					required : true,
					email : true
				},
                name : {
					required : true,
					onlyLetters : true
				},
                surname : {
					required : true,
					onlyLetters : true
				},
				password : {
					required : true,
					minlength : 5,
					maxlength : 20
				},
                password_2 : {
					required : true,
					minlength : 5,
					maxlength : 20
				}
			},
			messages : {
				email : {
					required : '',
					email : ''
				},
                name : {
					required : '',
					onlyLetters : ''
				},
                surname : {
					required : '',
					onlyLetters : ''
				},
				password : {
					required : '',
					minlength : '',
					maxlength : ''
				},
                password_2 : {
					required : '',
					minlength : '',
					maxlength : ''
				}
			},
			errorPlacement : function(error, element) {
				//error.insertAfter(element);
			},
			submitHandler: function(form) {
                if (true) {
                    toastr.success('Успех');
                } else {
                    toastr.success('Ошибка');
                }
			}
		});
	},

    validatePasswordForm : function() {
		jQuery("[name=profile-password-form]").validate({
            rules : {
				old_password : {
					required : true,
					minlength : 5,
					maxlength : 20
				},
                new_password : {
					required : true,
					minlength : 5,
					maxlength : 20
				},
                retry_password : {
					required : true,
					minlength : 5,
					maxlength : 20
				}
			},
			messages : {
				old_password : {
					required : '',
					minlength : '',
					maxlength : ''
				},
                new_password : {
					required : '',
					minlength : '',
					maxlength : ''
				},
                retry_password : {
					required : '',
					minlength : '',
					maxlength : ''
				}
			},
			errorPlacement : function(error, element) {
				//error.insertAfter(element);
			},
			submitHandler: function(form) {
                if (true) {
                    toastr.success('Успех');
                } else {
                    toastr.success('Ошибка');
                }
			}
		});
	}
};
