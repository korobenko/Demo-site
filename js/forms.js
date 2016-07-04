'use strict';

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
					required : true
				},
                surname : {
					required : true
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
					required : ''
				},
                surname : {
					required : ''
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

var Feedback = {
	init: function () {
		this.validateForm();
	},

	validateForm : function() {
		jQuery("[name=feedback-form]").validate({
			rules : {
				name : {
					required : true
				},
                tel : {
					required : true
				}
			},
			messages : {
                name : {
					required : ''
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
					required : true
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
					required : ''
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
					required : true
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
					required : ''
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
					required : true
				},
                surname : {
					required : true
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
					required : ''
				},
                surname : {
					required : ''
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
