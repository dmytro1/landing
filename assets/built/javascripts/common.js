/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _main = __webpack_require__(1);
	
	var _main2 = _interopRequireDefault(_main);
	
	var _toggleChooseSections = __webpack_require__(2);
	
	var _toggleChooseSections2 = _interopRequireDefault(_toggleChooseSections);
	
	var _onChangeSelect = __webpack_require__(3);
	
	var _onChangeSelect2 = _interopRequireDefault(_onChangeSelect);
	
	var _checkoutBtn = __webpack_require__(4);
	
	var _checkoutBtn2 = _interopRequireDefault(_checkoutBtn);
	
	var _addOrder = __webpack_require__(5);
	
	var _addOrder2 = _interopRequireDefault(_addOrder);
	
	var _validation = __webpack_require__(6);
	
	var _validation2 = _interopRequireDefault(_validation);
	
	var _gallery = __webpack_require__(7);
	
	var _gallery2 = _interopRequireDefault(_gallery);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// import $ from "jquery";
	
	var $ = document.querySelector.bind(document);
	var $$ = document.querySelectorAll.bind(document);
	
	Node.prototype.on = window.on = function (name, fn) {
	    this.addEventListener(name, fn);
	};
	
	NodeList.prototype.__proto__ = Array.prototype; // eslint-disable-line
	NodeList.prototype.__proto__ = Document.prototype;
	
	NodeList.prototype.on = NodeList.prototype.addEventListener = function (name, fn) {
	    this.forEach(function (elem) {
	        elem.on(name, fn);
	    });
	};
	//export {$, $$};
	
	jQuery(function () {
	    (0, _main2.default)($, $$);
	    (0, _toggleChooseSections2.default)($, $$);
	    (0, _onChangeSelect2.default)($);
	    (0, _checkoutBtn2.default)($);
	    (0, _addOrder2.default)($);
	    (0, _validation2.default)($);
	    (0, _gallery2.default)();
	});

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	// import $ from "jquery";
	
	exports.default = function ($, $$) {
	
	    window.MainMethods = {
	        scrollElem: function scrollElem(property, duration) {
	            jQuery('html, body').animate({
	                scrollTop: property
	            }, duration);
	        },
	        lazyScroll: function lazyScroll() {
	            event.preventDefault();
	            var id = this.getAttribute('href');
	            var offset = $(id).offsetTop;
	            //document.getElementsByTagName('html')[0].animate({
	            if (id === "#choose") {
	                offset -= 50;
	            }
	            MainMethods.scrollElem(offset, 700);
	
	            return false;
	        },
	        navbarToDefault: function navbarToDefault() {
	            $('.navbar-default').style.backgroundColor = 'transparent';
	            $('.navbar-brand img').classList.remove('img_responsive');
	            $('.navbar-fixed-top').classList.remove('top-nav-collapse');
	            var menuItem = $$('.navbar-nav a');
	            for (var i = 0; i < menuItem.length; i++) {
	                menuItem[i].classList.remove('white');
	            }
	        },
	        navbarToFloat: function navbarToFloat() {
	            $('.navbar-default').style.backgroundColor = 'rgba(48, 48, 48, 0.5)';
	            $('.navbar-default').classList.add('top-nav-collapse');
	            $('.navbar-brand img').classList.add('img_responsive');
	            var menuItem = $$('.navbar-nav a');
	            for (var i = 0; i < menuItem.length; i++) {
	                menuItem[i].classList.add('white');
	            }
	        },
	        setNavStyle: function setNavStyle() {
	            this.navbarToFloat();
	            if (window.pageYOffset < 50) {
	                MainMethods.navbarToDefault();
	            }
	        }
	    };
	
	    window.on('load', function () {
	        $('.loader_inner').style.display = "none";
	        $('.loader').style.display = "none";
	    });
	
	    window.on('DOMContentLoaded', function () {
	        //Navbar style switcher
	        MainMethods.setNavStyle();
	        window.on('scroll', function () {
	            MainMethods.setNavStyle();
	        });
	
	        //FOR MOBILE
	        if (window.outerWidth < 768) {
	            //SANDWICH BUTTON
	            $('.navbar-toggle').on('click', function () {
	                MainMethods.navbarToFloat();
	                $('.sandwich').classList.toggle('active');
	            });
	
	            //HIDE MENU CLICKING LI
	            $$('.navbar-collapse ul li a').on('click', function () {
	                $('.navbar-toggle').click();
	            });
	        }
	
	        //LAZY ANIMATING FOR BUTTONS AND MENU ITEMS
	        $$('.scroll_btn').on('click', MainMethods.lazyScroll);
	        $$('.nav a').on('click', MainMethods.lazyScroll);
	
	        //CLOSE BUTTON X
	        $('.close-btn').on('click', function () {
	            var sections = $$('.collapse-section');
	            for (var i = 0; i < sections.length; i++) {
	                sections[i].classList.remove('showing');
	            }
	            this.classList.remove('showing');
	        });
	
	        jQuery('[data-slide="prev"]').on('click', function () {
	            MainMethods.scrollElem($("#choose").offsetTop - 50, 100);
	        });
	    });
	};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	exports.default = function ($, $$) {
	    window.toggleChooseSections = function (el) {
	        $('.close-btn').classList.add('showing');
	        if ($$('.collapse-section.showing').length) {
	            $('.close-btn').classList.remove('showing');
	        }
	
	        var dataID = el.getAttribute('data-id');
	        var section = $('#section-' + dataID);
	        var collapseSections = $$('.collapse-section');
	        for (var i = 0; i < collapseSections.length; i++) {
	            if (!(collapseSections[i].id === section.id)) {
	                collapseSections[i].classList.remove('showing');
	            }
	        }
	        section.classList.toggle('showing');
	        if ($$('.collapse-section.showing').length) {
	            $('.close-btn').classList.add('showing');
	        }
	    };
	};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	exports.default = function ($) {
	    window.userChoice = {};
	
	    window.onChangeSelect = function (el) {
	        var userChoice = window.userChoice;
	        var dataID = el.getAttribute('data');
	        var allSelects = document.querySelectorAll('[data]');
	
	        for (var i in allSelects) {
	
	            if (isNaN(i)) {
	                continue;
	            }
	
	            var itemSelect = allSelects[i];
	            var selectData = itemSelect.attributes.data.value;
	
	            if (selectData === dataID) {
	                userChoice[itemSelect.name] = itemSelect.options[itemSelect.selectedIndex].value;
	            }
	        }
	
	        console.log('This is user choice');
	        console.log(userChoice);
	
	        compare(userChoice, dataID);
	    };
	
	    function compare(userChoice, dataID) {
	
	        var printPrice = document.getElementById(dataID + '-price');
	        var printMessage = $('#message-' + dataID);
	        var checkoutButton = $("#section-" + dataID + " button[data-slide='next']");
	
	        for (var parameter in userChoice) {
	            if (userChoice[parameter] === "") {
	                printPrice.setAttribute('data-price', '');
	                printPrice.innerHTML = "&nbsp;";
	                console.log('Select the ' + parameter);
	                printMessage.innerHTML = 'Select the ' + parameter;
	                checkoutButton.disabled = true;
	                return;
	            }
	        }
	
	        var variations = variationsObject.dataById[dataID];
	
	        console.log('This is Variations');
	        console.log(variations);
	
	        for (var i in variations) {
	            var variation = variations[i];
	            var variationsWithoutPrice = {};
	
	            for (var _parameter in variation) {
	                variationsWithoutPrice[_parameter] = variation[_parameter];
	            }
	
	            delete variationsWithoutPrice.price;
	
	            if (JSON.stringify(userChoice) === JSON.stringify(variationsWithoutPrice)) {
	                console.log(variation.price);
	                printPrice.setAttribute('data-price', variation.price);
	                printPrice.innerHTML = '<h3 class="red-price">' + variation.price + '$</h3>';
	                printMessage.innerHTML = "";
	                checkoutButton.disabled = false;
	                return;
	            } else {
	                printPrice.setAttribute('data-price', '');
	                console.log('Variation is not found');
	                printPrice.innerHTML = '<h3>- -</h3>';
	                printMessage.innerHTML = 'Variation is not found';
	                checkoutButton.disabled = true;
	            }
	        }
	    }
	};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	exports.default = function ($) {
	    window.checkoutBtn = function (el) {
	        var userChoice = window.userChoice;
	        MainMethods.scrollElem($("#choose").offsetTop - 50, 100);
	        var dataID = el.getAttribute('data-id');
	        var quantity = $('#section-' + dataID + ' .quantity');
	        var userChoiceText = $('#section-' + dataID + ' .user-choice');
	        var choicePrice = document.getElementById(dataID + '-price').getAttribute('data-price');
	        var content = '';
	        for (var i in userChoice) {
	            content += "<p>" + i + ": " + userChoice[i] + "</p>";
	        }
	        content += "<p>Price: " + choicePrice;
	        content += "<p>Quantity: " + quantity.value;
	        userChoiceText.innerHTML = content;
	    };
	};

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	        value: true
	});
	
	exports.default = function ($) {
	        window.addOrder = function (el) {
	
	                if (el.classList.contains('disabled')) {
	                        return;
	                }
	                MainMethods.scrollElem($("#choose").offsetTop - 50, 100);
	
	                var dataID = el.getAttribute('data-id');
	                var quantity = $('#section-' + dataID + ' .quantity');
	                var elementHref = el.getAttribute('href');
	                var userOrderText = $('#section-' + dataID + ' .user-order');
	                var inputName = $('#form-' + dataID + ' input[name="first_name"]');
	                var inputLastName = $('#form-' + dataID + ' input[name="last_name"]');
	                var inputEmail = $('#form-' + dataID + ' input[name="email"]');
	                var inputPhone = $('#form-' + dataID + ' input[name="phone"]');
	
	                var title = document.getElementById(el.name).textContent;
	
	                var priceTag = document.getElementById(dataID + '-price');
	                var price = priceTag.getAttribute('data-price');
	                var randomId = Math.trunc(Math.random() * 100000);
	                var productData = {
	                        "title": title + ' [' + randomId + ']',
	                        "content": JSON.stringify(userChoice) + '{"price":' + price + ', "quantity":' + quantity.value + '}',
	                        "status": 'publish'
	                };
	
	                for (var i in userChoice) {
	                        productData['param_' + i] = userChoice[i];
	                }
	
	                productData['param_price'] = price;
	                productData['param_quantity'] = quantity.value;
	                productData['info_first_name'] = inputName.value;
	                productData['info_last_name'] = inputLastName.value;
	                productData['info_email'] = inputEmail.value;
	                productData['info_phone'] = inputPhone.value;
	
	                console.log(productData);
	
	                var content = '';
	
	                for (var _i in userChoice) {
	                        content += "<p>" + _i + ": " + userChoice[_i] + "</p>";
	                }
	                content += "<p>Price: " + productData.param_price + "</p>";
	                content += "<p>Quantity: " + quantity.value + "</p>";
	                content += "<p>Total price: " + quantity.value * productData.param_price + "</p>";
	                content += "<p>First name: " + productData.info_first_name + "</p>";
	                content += "<p>Last name: " + productData.info_last_name + "</p>";
	                content += "<p>Phone: " + productData.info_phone + "</p>";
	
	                event.preventDefault();
	
	                fetch('/wp-json/wp/v2/shop_order', {
	                        body: JSON.stringify(productData),
	                        // var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=Base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)}return t},decode:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=Base64._utf8_decode(t);return t},_utf8_encode:function(e){e=e.replace(/\r\n/g,"\n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t},_utf8_decode:function(e){var t="";var n=0;var r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}};
	                        //createPost.setRequestHeader( 'Authorization', 'Basic ' + Base64.encode( 'test:0000' ) );
	                        headers: {
	                                'X-WP-Nonce': wpApiSettings.nonce,
	                                'content-type': 'application/json'
	                        },
	                        method: 'POST'
	                }).then(function (response) {
	                        console.log(response);
	
	                        if (response.status !== 201) {
	                                console.log('Not 201: ' + response.status + ' ' + response.statusText);
	                                alert('Not 201: ' + response.status + ' ' + response.statusText);
	                                return;
	                        }
	
	                        if (response.status === 201) {
	                                content += '<br>' + response.statusText + ' status: post added';
	                                jQuery(elementHref).carousel('next');
	                                userOrderText.innerHTML = content;
	                                console.log(response.statusText + ' status: post added');
	                                alert(response.statusText + ' status: post added');
	                        }
	                }).catch(alert);
	        };
	};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	exports.default = function () {
	    console.log("boostrap-validator version:", jQuery.fn.validator.Constructor.VERSION);
	    jQuery('form').validator({
	        focus: false
	        // delay: 3000
	    });
	};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _jquery = __webpack_require__(8);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function () {
	    var Gallery = {
	        zoom: function zoom(imgContainer, img, gallery) {
	            var containerHeight = imgContainer.outerHeight();
	            if (!gallery.hasClass('is-zoomed')) {
	                imgContainer.css("height", containerHeight);
	                gallery.addClass('is-zoomed');
	
	                img.draggable({
	                    drag: function drag(event, ui) {
	                        ui.position.left = Math.min(100, ui.position.left);
	                        ui.position.top = Math.min(100, ui.position.top);
	                    }
	                });
	            } else {
	                imgContainer.css("height", "auto");
	                gallery.removeClass('is-zoomed');
	            }
	        },
	        switch: function _switch(trigger, imgContainer, gallery) {
	            var src = trigger.attr('href'),
	                thumbs = trigger.siblings(),
	                img = trigger.parent().prev().children();
	
	            trigger.addClass('is-active');
	
	            thumbs.each(function () {
	                if ((0, _jquery2.default)(this).hasClass('is-active')) {
	                    (0, _jquery2.default)(this).removeClass('is-active');
	                }
	            });
	
	            if (gallery.hasClass('is-zoomed')) {
	                gallery.removeClass('is-zoomed');
	                imgContainer.css("height", "auto");
	            }
	
	            // Switch image source
	            img.attr('src', src);
	        }
	    };
	
	    var gallery = (0, _jquery2.default)('.gallery');
	    gallery.on('click', 'a', function (event) {
	        var trigger = (0, _jquery2.default)(this);
	        var triggerData = trigger.data("gallery");
	        var galleryId = event.delegateTarget.id;
	        gallery = (0, _jquery2.default)('#' + galleryId);
	
	        if (triggerData === 'zoom') {
	            var imgContainer = trigger.parent(),
	                img = trigger.siblings();
	            Gallery.zoom(imgContainer, img, gallery);
	        } else if (triggerData === 'thumb') {
	            var _imgContainer = trigger.parent().siblings();
	            Gallery.switch(trigger, _imgContainer, gallery);
	        } else {
	            return;
	        }
	        event.preventDefault();
	    });
	};

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	module.exports = jQuery;

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgN2NmMTFmODY0OTJiYjhmYzg0ODMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NyYy9qYXZhc2NyaXB0cy9jb21tb24uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NyYy9qYXZhc2NyaXB0cy9tb2R1bGVzL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NyYy9qYXZhc2NyaXB0cy9tb2R1bGVzL3RvZ2dsZUNob29zZVNlY3Rpb25zLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zcmMvamF2YXNjcmlwdHMvbW9kdWxlcy9vbkNoYW5nZVNlbGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3JjL2phdmFzY3JpcHRzL21vZHVsZXMvY2hlY2tvdXRCdG4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NyYy9qYXZhc2NyaXB0cy9tb2R1bGVzL2FkZE9yZGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zcmMvamF2YXNjcmlwdHMvbW9kdWxlcy92YWxpZGF0aW9uLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zcmMvamF2YXNjcmlwdHMvbW9kdWxlcy9nYWxsZXJ5LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImpRdWVyeVwiIl0sIm5hbWVzIjpbIiQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJiaW5kIiwiJCQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiTm9kZSIsInByb3RvdHlwZSIsIm9uIiwid2luZG93IiwibmFtZSIsImZuIiwiYWRkRXZlbnRMaXN0ZW5lciIsIk5vZGVMaXN0IiwiX19wcm90b19fIiwiQXJyYXkiLCJEb2N1bWVudCIsImZvckVhY2giLCJlbGVtIiwialF1ZXJ5IiwiTWFpbk1ldGhvZHMiLCJzY3JvbGxFbGVtIiwicHJvcGVydHkiLCJkdXJhdGlvbiIsImFuaW1hdGUiLCJzY3JvbGxUb3AiLCJsYXp5U2Nyb2xsIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImlkIiwiZ2V0QXR0cmlidXRlIiwib2Zmc2V0Iiwib2Zmc2V0VG9wIiwibmF2YmFyVG9EZWZhdWx0Iiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJtZW51SXRlbSIsImkiLCJsZW5ndGgiLCJuYXZiYXJUb0Zsb2F0IiwiYWRkIiwic2V0TmF2U3R5bGUiLCJwYWdlWU9mZnNldCIsImRpc3BsYXkiLCJvdXRlcldpZHRoIiwidG9nZ2xlIiwiY2xpY2siLCJzZWN0aW9ucyIsInRvZ2dsZUNob29zZVNlY3Rpb25zIiwiZWwiLCJkYXRhSUQiLCJzZWN0aW9uIiwiY29sbGFwc2VTZWN0aW9ucyIsInVzZXJDaG9pY2UiLCJvbkNoYW5nZVNlbGVjdCIsImFsbFNlbGVjdHMiLCJpc05hTiIsIml0ZW1TZWxlY3QiLCJzZWxlY3REYXRhIiwiYXR0cmlidXRlcyIsImRhdGEiLCJ2YWx1ZSIsIm9wdGlvbnMiLCJzZWxlY3RlZEluZGV4IiwiY29uc29sZSIsImxvZyIsImNvbXBhcmUiLCJwcmludFByaWNlIiwiZ2V0RWxlbWVudEJ5SWQiLCJwcmludE1lc3NhZ2UiLCJjaGVja291dEJ1dHRvbiIsInBhcmFtZXRlciIsInNldEF0dHJpYnV0ZSIsImlubmVySFRNTCIsImRpc2FibGVkIiwidmFyaWF0aW9ucyIsInZhcmlhdGlvbnNPYmplY3QiLCJkYXRhQnlJZCIsInZhcmlhdGlvbiIsInZhcmlhdGlvbnNXaXRob3V0UHJpY2UiLCJwcmljZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJjaGVja291dEJ0biIsInF1YW50aXR5IiwidXNlckNob2ljZVRleHQiLCJjaG9pY2VQcmljZSIsImNvbnRlbnQiLCJhZGRPcmRlciIsImNvbnRhaW5zIiwiZWxlbWVudEhyZWYiLCJ1c2VyT3JkZXJUZXh0IiwiaW5wdXROYW1lIiwiaW5wdXRMYXN0TmFtZSIsImlucHV0RW1haWwiLCJpbnB1dFBob25lIiwidGl0bGUiLCJ0ZXh0Q29udGVudCIsInByaWNlVGFnIiwicmFuZG9tSWQiLCJNYXRoIiwidHJ1bmMiLCJyYW5kb20iLCJwcm9kdWN0RGF0YSIsInBhcmFtX3ByaWNlIiwiaW5mb19maXJzdF9uYW1lIiwiaW5mb19sYXN0X25hbWUiLCJpbmZvX3Bob25lIiwiZmV0Y2giLCJib2R5IiwiaGVhZGVycyIsIndwQXBpU2V0dGluZ3MiLCJub25jZSIsIm1ldGhvZCIsInRoZW4iLCJyZXNwb25zZSIsInN0YXR1cyIsInN0YXR1c1RleHQiLCJhbGVydCIsImNhcm91c2VsIiwiY2F0Y2giLCJ2YWxpZGF0b3IiLCJDb25zdHJ1Y3RvciIsIlZFUlNJT04iLCJmb2N1cyIsIkdhbGxlcnkiLCJ6b29tIiwiaW1nQ29udGFpbmVyIiwiaW1nIiwiZ2FsbGVyeSIsImNvbnRhaW5lckhlaWdodCIsIm91dGVySGVpZ2h0IiwiaGFzQ2xhc3MiLCJjc3MiLCJhZGRDbGFzcyIsImRyYWdnYWJsZSIsImRyYWciLCJ1aSIsInBvc2l0aW9uIiwibGVmdCIsIm1pbiIsInRvcCIsInJlbW92ZUNsYXNzIiwic3dpdGNoIiwidHJpZ2dlciIsInNyYyIsImF0dHIiLCJ0aHVtYnMiLCJzaWJsaW5ncyIsInBhcmVudCIsInByZXYiLCJjaGlsZHJlbiIsImVhY2giLCJ0cmlnZ2VyRGF0YSIsImdhbGxlcnlJZCIsImRlbGVnYXRlVGFyZ2V0Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7O0FDbkJBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUF6QkE7O0FBRUEsS0FBTUEsSUFBSUMsU0FBU0MsYUFBVCxDQUF1QkMsSUFBdkIsQ0FBNEJGLFFBQTVCLENBQVY7QUFDQSxLQUFNRyxLQUFLSCxTQUFTSSxnQkFBVCxDQUEwQkYsSUFBMUIsQ0FBK0JGLFFBQS9CLENBQVg7O0FBRUFLLE1BQUtDLFNBQUwsQ0FBZUMsRUFBZixHQUFvQkMsT0FBT0QsRUFBUCxHQUFZLFVBQVVFLElBQVYsRUFBZ0JDLEVBQWhCLEVBQW9CO0FBQ2hELFVBQUtDLGdCQUFMLENBQXNCRixJQUF0QixFQUE0QkMsRUFBNUI7QUFDSCxFQUZEOztBQUlBRSxVQUFTTixTQUFULENBQW1CTyxTQUFuQixHQUErQkMsTUFBTVIsU0FBckMsQyxDQUFnRDtBQUNoRE0sVUFBU04sU0FBVCxDQUFtQk8sU0FBbkIsR0FBK0JFLFNBQVNULFNBQXhDOztBQUVBTSxVQUFTTixTQUFULENBQW1CQyxFQUFuQixHQUF3QkssU0FBU04sU0FBVCxDQUFtQkssZ0JBQW5CLEdBQXNDLFVBQVVGLElBQVYsRUFBZ0JDLEVBQWhCLEVBQW9CO0FBQzlFLFVBQUtNLE9BQUwsQ0FBYSxVQUFDQyxJQUFELEVBQVU7QUFDbkJBLGNBQUtWLEVBQUwsQ0FBUUUsSUFBUixFQUFjQyxFQUFkO0FBQ0gsTUFGRDtBQUdILEVBSkQ7QUFLQTs7QUFXQVEsUUFBTyxZQUFZO0FBQ2YseUJBQUtuQixDQUFMLEVBQVFJLEVBQVI7QUFDQSx5Q0FBcUJKLENBQXJCLEVBQXdCSSxFQUF4QjtBQUNBLG1DQUFlSixDQUFmO0FBQ0EsZ0NBQVlBLENBQVo7QUFDQSw2QkFBU0EsQ0FBVDtBQUNBLCtCQUFXQSxDQUFYO0FBQ0E7QUFDSCxFQVJELEU7Ozs7Ozs7Ozs7OztBQzVCQTs7bUJBRWUsVUFBQ0EsQ0FBRCxFQUFJSSxFQUFKLEVBQVc7O0FBRXRCSyxZQUFPVyxXQUFQLEdBQXFCO0FBQ2pCQyxxQkFBWSxvQkFBVUMsUUFBVixFQUFvQkMsUUFBcEIsRUFBOEI7QUFDdENKLG9CQUFPLFlBQVAsRUFBcUJLLE9BQXJCLENBQTZCO0FBQ3pCQyw0QkFBV0g7QUFEYyxjQUE3QixFQUVHQyxRQUZIO0FBR0gsVUFMZ0I7QUFNakJHLHFCQUFZLHNCQUFZO0FBQ3BCQyxtQkFBTUMsY0FBTjtBQUNBLGlCQUFJQyxLQUFLLEtBQUtDLFlBQUwsQ0FBa0IsTUFBbEIsQ0FBVDtBQUNBLGlCQUFJQyxTQUFTL0IsRUFBRTZCLEVBQUYsRUFBTUcsU0FBbkI7QUFDQTtBQUNBLGlCQUFJSCxPQUFPLFNBQVgsRUFBc0I7QUFDbEJFLDJCQUFVLEVBQVY7QUFDSDtBQUNEWCx5QkFBWUMsVUFBWixDQUF1QlUsTUFBdkIsRUFBK0IsR0FBL0I7O0FBRUEsb0JBQU8sS0FBUDtBQUNILFVBakJnQjtBQWtCakJFLDBCQUFpQiwyQkFBWTtBQUN6QmpDLGVBQUUsaUJBQUYsRUFBcUJrQyxLQUFyQixDQUEyQkMsZUFBM0IsR0FBNkMsYUFBN0M7QUFDQW5DLGVBQUUsbUJBQUYsRUFBdUJvQyxTQUF2QixDQUFpQ0MsTUFBakMsQ0FBd0MsZ0JBQXhDO0FBQ0FyQyxlQUFFLG1CQUFGLEVBQXVCb0MsU0FBdkIsQ0FBaUNDLE1BQWpDLENBQXdDLGtCQUF4QztBQUNBLGlCQUFJQyxXQUFXbEMsR0FBRyxlQUFILENBQWY7QUFDQSxrQkFBSyxJQUFJbUMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJRCxTQUFTRSxNQUE3QixFQUFxQ0QsR0FBckMsRUFBMEM7QUFDdENELDBCQUFTQyxDQUFULEVBQVlILFNBQVosQ0FBc0JDLE1BQXRCLENBQTZCLE9BQTdCO0FBQ0g7QUFDSixVQTFCZ0I7QUEyQmpCSSx3QkFBZSx5QkFBWTtBQUN2QnpDLGVBQUUsaUJBQUYsRUFBcUJrQyxLQUFyQixDQUEyQkMsZUFBM0IsR0FBNkMsdUJBQTdDO0FBQ0FuQyxlQUFFLGlCQUFGLEVBQXFCb0MsU0FBckIsQ0FBK0JNLEdBQS9CLENBQW1DLGtCQUFuQztBQUNBMUMsZUFBRSxtQkFBRixFQUF1Qm9DLFNBQXZCLENBQWlDTSxHQUFqQyxDQUFxQyxnQkFBckM7QUFDQSxpQkFBSUosV0FBV2xDLEdBQUcsZUFBSCxDQUFmO0FBQ0Esa0JBQUssSUFBSW1DLElBQUksQ0FBYixFQUFnQkEsSUFBSUQsU0FBU0UsTUFBN0IsRUFBcUNELEdBQXJDLEVBQTBDO0FBQ3RDRCwwQkFBU0MsQ0FBVCxFQUFZSCxTQUFaLENBQXNCTSxHQUF0QixDQUEwQixPQUExQjtBQUNIO0FBQ0osVUFuQ2dCO0FBb0NqQkMsc0JBQWEsdUJBQVk7QUFDckIsa0JBQUtGLGFBQUw7QUFDQSxpQkFBSWhDLE9BQU9tQyxXQUFQLEdBQXFCLEVBQXpCLEVBQTZCO0FBQ3pCeEIsNkJBQVlhLGVBQVo7QUFDSDtBQUNKO0FBekNnQixNQUFyQjs7QUE0Q0F4QixZQUFPRCxFQUFQLENBQVUsTUFBVixFQUFrQixZQUFZO0FBQzFCUixXQUFFLGVBQUYsRUFBbUJrQyxLQUFuQixDQUF5QlcsT0FBekIsR0FBbUMsTUFBbkM7QUFDQTdDLFdBQUUsU0FBRixFQUFha0MsS0FBYixDQUFtQlcsT0FBbkIsR0FBNkIsTUFBN0I7QUFDSCxNQUhEOztBQUtBcEMsWUFBT0QsRUFBUCxDQUFVLGtCQUFWLEVBQThCLFlBQVk7QUFDdEM7QUFDQVkscUJBQVl1QixXQUFaO0FBQ0FsQyxnQkFBT0QsRUFBUCxDQUFVLFFBQVYsRUFBb0IsWUFBWTtBQUM1QlkseUJBQVl1QixXQUFaO0FBQ0gsVUFGRDs7QUFJQTtBQUNBLGFBQUlsQyxPQUFPcUMsVUFBUCxHQUFvQixHQUF4QixFQUE2QjtBQUN6QjtBQUNBOUMsZUFBRSxnQkFBRixFQUFvQlEsRUFBcEIsQ0FBdUIsT0FBdkIsRUFBZ0MsWUFBWTtBQUN4Q1ksNkJBQVlxQixhQUFaO0FBQ0F6QyxtQkFBRSxXQUFGLEVBQWVvQyxTQUFmLENBQXlCVyxNQUF6QixDQUFnQyxRQUFoQztBQUNILGNBSEQ7O0FBS0E7QUFDQTNDLGdCQUFHLDBCQUFILEVBQStCSSxFQUEvQixDQUFrQyxPQUFsQyxFQUEyQyxZQUFZO0FBQ25EUixtQkFBRSxnQkFBRixFQUFvQmdELEtBQXBCO0FBQ0gsY0FGRDtBQUdIOztBQUVEO0FBQ0E1QyxZQUFHLGFBQUgsRUFBa0JJLEVBQWxCLENBQXFCLE9BQXJCLEVBQThCWSxZQUFZTSxVQUExQztBQUNBdEIsWUFBRyxRQUFILEVBQWFJLEVBQWIsQ0FBZ0IsT0FBaEIsRUFBeUJZLFlBQVlNLFVBQXJDOztBQUVBO0FBQ0ExQixXQUFFLFlBQUYsRUFBZ0JRLEVBQWhCLENBQW1CLE9BQW5CLEVBQTRCLFlBQVk7QUFDcEMsaUJBQUl5QyxXQUFXN0MsR0FBRyxtQkFBSCxDQUFmO0FBQ0Esa0JBQUssSUFBSW1DLElBQUksQ0FBYixFQUFnQkEsSUFBSVUsU0FBU1QsTUFBN0IsRUFBcUNELEdBQXJDLEVBQTBDO0FBQ3RDVSwwQkFBU1YsQ0FBVCxFQUFZSCxTQUFaLENBQXNCQyxNQUF0QixDQUE2QixTQUE3QjtBQUNIO0FBQ0Qsa0JBQUtELFNBQUwsQ0FBZUMsTUFBZixDQUFzQixTQUF0QjtBQUNILFVBTkQ7O0FBUUFsQixnQkFBTyxxQkFBUCxFQUE4QlgsRUFBOUIsQ0FBaUMsT0FBakMsRUFBMEMsWUFBWTtBQUNsRFkseUJBQVlDLFVBQVosQ0FBdUJyQixFQUFFLFNBQUYsRUFBYWdDLFNBQWIsR0FBeUIsRUFBaEQsRUFBb0QsR0FBcEQ7QUFDSCxVQUZEO0FBR0gsTUFyQ0Q7QUFzQ0gsRTs7Ozs7Ozs7Ozs7O21CQzNGYyxVQUFDaEMsQ0FBRCxFQUFJSSxFQUFKLEVBQVc7QUFDdEJLLFlBQU95QyxvQkFBUCxHQUE4QixVQUFVQyxFQUFWLEVBQWM7QUFDeENuRCxXQUFFLFlBQUYsRUFBZ0JvQyxTQUFoQixDQUEwQk0sR0FBMUIsQ0FBOEIsU0FBOUI7QUFDQSxhQUFJdEMsR0FBRywyQkFBSCxFQUFnQ29DLE1BQXBDLEVBQTRDO0FBQ3hDeEMsZUFBRSxZQUFGLEVBQWdCb0MsU0FBaEIsQ0FBMEJDLE1BQTFCLENBQWlDLFNBQWpDO0FBQ0g7O0FBRUQsYUFBSWUsU0FBU0QsR0FBR3JCLFlBQUgsQ0FBZ0IsU0FBaEIsQ0FBYjtBQUNBLGFBQUl1QixVQUFVckQsRUFBRSxjQUFjb0QsTUFBaEIsQ0FBZDtBQUNBLGFBQUlFLG1CQUFtQmxELEdBQUcsbUJBQUgsQ0FBdkI7QUFDQSxjQUFLLElBQUltQyxJQUFJLENBQWIsRUFBZ0JBLElBQUllLGlCQUFpQmQsTUFBckMsRUFBNkNELEdBQTdDLEVBQWtEO0FBQzlDLGlCQUFJLEVBQUVlLGlCQUFpQmYsQ0FBakIsRUFBb0JWLEVBQXBCLEtBQTJCd0IsUUFBUXhCLEVBQXJDLENBQUosRUFBOEM7QUFDMUN5QixrQ0FBaUJmLENBQWpCLEVBQW9CSCxTQUFwQixDQUE4QkMsTUFBOUIsQ0FBcUMsU0FBckM7QUFDSDtBQUNKO0FBQ0RnQixpQkFBUWpCLFNBQVIsQ0FBa0JXLE1BQWxCLENBQXlCLFNBQXpCO0FBQ0EsYUFBSTNDLEdBQUcsMkJBQUgsRUFBZ0NvQyxNQUFwQyxFQUE0QztBQUN4Q3hDLGVBQUUsWUFBRixFQUFnQm9DLFNBQWhCLENBQTBCTSxHQUExQixDQUE4QixTQUE5QjtBQUNIO0FBQ0osTUFsQkQ7QUFtQkgsRTs7Ozs7Ozs7Ozs7O21CQ3BCYyxVQUFDMUMsQ0FBRCxFQUFPO0FBQ2xCUyxZQUFPOEMsVUFBUCxHQUFvQixFQUFwQjs7QUFFQTlDLFlBQU8rQyxjQUFQLEdBQXdCLFVBQVVMLEVBQVYsRUFBYztBQUNsQyxhQUFJSSxhQUFhOUMsT0FBTzhDLFVBQXhCO0FBQ0EsYUFBSUgsU0FBU0QsR0FBR3JCLFlBQUgsQ0FBZ0IsTUFBaEIsQ0FBYjtBQUNBLGFBQUkyQixhQUFheEQsU0FBU0ksZ0JBQVQsQ0FBMEIsUUFBMUIsQ0FBakI7O0FBRUEsY0FBSyxJQUFJa0MsQ0FBVCxJQUFja0IsVUFBZCxFQUEwQjs7QUFFdEIsaUJBQUlDLE1BQU1uQixDQUFOLENBQUosRUFBYztBQUNWO0FBQ0g7O0FBRUQsaUJBQUlvQixhQUFhRixXQUFXbEIsQ0FBWCxDQUFqQjtBQUNBLGlCQUFJcUIsYUFBYUQsV0FBV0UsVUFBWCxDQUFzQkMsSUFBdEIsQ0FBMkJDLEtBQTVDOztBQUVBLGlCQUFJSCxlQUFlUixNQUFuQixFQUEyQjtBQUN2QkcsNEJBQVdJLFdBQVdqRCxJQUF0QixJQUE4QmlELFdBQVdLLE9BQVgsQ0FBbUJMLFdBQVdNLGFBQTlCLEVBQTZDRixLQUEzRTtBQUNIO0FBQ0o7O0FBRURHLGlCQUFRQyxHQUFSLENBQVkscUJBQVo7QUFDQUQsaUJBQVFDLEdBQVIsQ0FBWVosVUFBWjs7QUFFQWEsaUJBQVFiLFVBQVIsRUFBb0JILE1BQXBCO0FBQ0gsTUF2QkQ7O0FBeUJBLGNBQVNnQixPQUFULENBQWlCYixVQUFqQixFQUE2QkgsTUFBN0IsRUFBcUM7O0FBRWpDLGFBQUlpQixhQUFhcEUsU0FBU3FFLGNBQVQsQ0FBd0JsQixTQUFTLFFBQWpDLENBQWpCO0FBQ0EsYUFBSW1CLGVBQWV2RSxFQUFFLGNBQWNvRCxNQUFoQixDQUFuQjtBQUNBLGFBQUlvQixpQkFBaUJ4RSxFQUFFLGNBQWNvRCxNQUFkLEdBQXVCLDRCQUF6QixDQUFyQjs7QUFFQSxjQUFLLElBQUlxQixTQUFULElBQXNCbEIsVUFBdEIsRUFBa0M7QUFDOUIsaUJBQUlBLFdBQVdrQixTQUFYLE1BQTBCLEVBQTlCLEVBQWtDO0FBQzlCSiw0QkFBV0ssWUFBWCxDQUF3QixZQUF4QixFQUFzQyxFQUF0QztBQUNBTCw0QkFBV00sU0FBWCxHQUF1QixRQUF2QjtBQUNBVCx5QkFBUUMsR0FBUixDQUFZLGdCQUFnQk0sU0FBNUI7QUFDQUYsOEJBQWFJLFNBQWIsR0FBeUIsZ0JBQWdCRixTQUF6QztBQUNBRCxnQ0FBZUksUUFBZixHQUEwQixJQUExQjtBQUNBO0FBQ0g7QUFDSjs7QUFFRCxhQUFJQyxhQUFhQyxpQkFBaUJDLFFBQWpCLENBQTBCM0IsTUFBMUIsQ0FBakI7O0FBRUFjLGlCQUFRQyxHQUFSLENBQVksb0JBQVo7QUFDQUQsaUJBQVFDLEdBQVIsQ0FBWVUsVUFBWjs7QUFFQSxjQUFLLElBQUl0QyxDQUFULElBQWNzQyxVQUFkLEVBQTBCO0FBQ3RCLGlCQUFJRyxZQUFZSCxXQUFXdEMsQ0FBWCxDQUFoQjtBQUNBLGlCQUFJMEMseUJBQXlCLEVBQTdCOztBQUVBLGtCQUFLLElBQUlSLFVBQVQsSUFBc0JPLFNBQXRCLEVBQWlDO0FBQzdCQyx3Q0FBdUJSLFVBQXZCLElBQW9DTyxVQUFVUCxVQUFWLENBQXBDO0FBQ0g7O0FBRUQsb0JBQU9RLHVCQUF1QkMsS0FBOUI7O0FBRUEsaUJBQUlDLEtBQUtDLFNBQUwsQ0FBZTdCLFVBQWYsTUFBK0I0QixLQUFLQyxTQUFMLENBQWVILHNCQUFmLENBQW5DLEVBQTJFO0FBQ3ZFZix5QkFBUUMsR0FBUixDQUFZYSxVQUFVRSxLQUF0QjtBQUNBYiw0QkFBV0ssWUFBWCxDQUF3QixZQUF4QixFQUFzQ00sVUFBVUUsS0FBaEQ7QUFDQWIsNEJBQVdNLFNBQVgsR0FBdUIsMkJBQTJCSyxVQUFVRSxLQUFyQyxHQUE2QyxRQUFwRTtBQUNBWCw4QkFBYUksU0FBYixHQUF5QixFQUF6QjtBQUNBSCxnQ0FBZUksUUFBZixHQUEwQixLQUExQjtBQUNBO0FBQ0gsY0FQRCxNQU9PO0FBQ0hQLDRCQUFXSyxZQUFYLENBQXdCLFlBQXhCLEVBQXNDLEVBQXRDO0FBQ0FSLHlCQUFRQyxHQUFSLENBQVksd0JBQVo7QUFDQUUsNEJBQVdNLFNBQVgsR0FBdUIsY0FBdkI7QUFDQUosOEJBQWFJLFNBQWIsR0FBeUIsd0JBQXpCO0FBQ0FILGdDQUFlSSxRQUFmLEdBQTBCLElBQTFCO0FBQ0g7QUFDSjtBQUNKO0FBQ0osRTs7Ozs7Ozs7Ozs7O21CQzVFYyxVQUFDNUUsQ0FBRCxFQUFPO0FBQ2xCUyxZQUFPNEUsV0FBUCxHQUFxQixVQUFVbEMsRUFBVixFQUFjO0FBQy9CLGFBQUlJLGFBQWE5QyxPQUFPOEMsVUFBeEI7QUFDQW5DLHFCQUFZQyxVQUFaLENBQXVCckIsRUFBRSxTQUFGLEVBQWFnQyxTQUFiLEdBQXlCLEVBQWhELEVBQW9ELEdBQXBEO0FBQ0EsYUFBSW9CLFNBQVNELEdBQUdyQixZQUFILENBQWdCLFNBQWhCLENBQWI7QUFDQSxhQUFJd0QsV0FBV3RGLEVBQUUsY0FBY29ELE1BQWQsR0FBdUIsWUFBekIsQ0FBZjtBQUNBLGFBQUltQyxpQkFBaUJ2RixFQUFFLGNBQWNvRCxNQUFkLEdBQXVCLGVBQXpCLENBQXJCO0FBQ0EsYUFBSW9DLGNBQWN2RixTQUFTcUUsY0FBVCxDQUF3QmxCLFNBQVMsUUFBakMsRUFBMkN0QixZQUEzQyxDQUF3RCxZQUF4RCxDQUFsQjtBQUNBLGFBQUkyRCxVQUFVLEVBQWQ7QUFDQSxjQUFLLElBQUlsRCxDQUFULElBQWNnQixVQUFkLEVBQTBCO0FBQ3RCa0Msd0JBQVcsUUFBUWxELENBQVIsR0FBWSxJQUFaLEdBQW1CZ0IsV0FBV2hCLENBQVgsQ0FBbkIsR0FBbUMsTUFBOUM7QUFDSDtBQUNEa0Qsb0JBQVcsZUFBZUQsV0FBMUI7QUFDQUMsb0JBQVcsa0JBQWtCSCxTQUFTdkIsS0FBdEM7QUFDQXdCLHdCQUFlWixTQUFmLEdBQTJCYyxPQUEzQjtBQUNILE1BZEQ7QUFlSCxFOzs7Ozs7Ozs7Ozs7bUJDaEJjLFVBQUN6RixDQUFELEVBQU87QUFDbEJTLGdCQUFPaUYsUUFBUCxHQUFrQixVQUFVdkMsRUFBVixFQUFjOztBQUU1QixxQkFBSUEsR0FBR2YsU0FBSCxDQUFhdUQsUUFBYixDQUFzQixVQUF0QixDQUFKLEVBQXVDO0FBQ25DO0FBQ0g7QUFDRHZFLDZCQUFZQyxVQUFaLENBQXVCckIsRUFBRSxTQUFGLEVBQWFnQyxTQUFiLEdBQXlCLEVBQWhELEVBQW9ELEdBQXBEOztBQUVBLHFCQUFJb0IsU0FBU0QsR0FBR3JCLFlBQUgsQ0FBZ0IsU0FBaEIsQ0FBYjtBQUNBLHFCQUFJd0QsV0FBV3RGLEVBQUUsY0FBY29ELE1BQWQsR0FBdUIsWUFBekIsQ0FBZjtBQUNBLHFCQUFJd0MsY0FBY3pDLEdBQUdyQixZQUFILENBQWdCLE1BQWhCLENBQWxCO0FBQ0EscUJBQUkrRCxnQkFBZ0I3RixFQUFFLGNBQWNvRCxNQUFkLEdBQXVCLGNBQXpCLENBQXBCO0FBQ0EscUJBQUkwQyxZQUFZOUYsRUFBRSxXQUFXb0QsTUFBWCxHQUFvQiwyQkFBdEIsQ0FBaEI7QUFDQSxxQkFBSTJDLGdCQUFnQi9GLEVBQUUsV0FBV29ELE1BQVgsR0FBb0IsMEJBQXRCLENBQXBCO0FBQ0EscUJBQUk0QyxhQUFhaEcsRUFBRSxXQUFXb0QsTUFBWCxHQUFvQixzQkFBdEIsQ0FBakI7QUFDQSxxQkFBSTZDLGFBQWFqRyxFQUFFLFdBQVdvRCxNQUFYLEdBQW9CLHNCQUF0QixDQUFqQjs7QUFFQSxxQkFBSThDLFFBQVFqRyxTQUFTcUUsY0FBVCxDQUF3Qm5CLEdBQUd6QyxJQUEzQixFQUFpQ3lGLFdBQTdDOztBQUVBLHFCQUFJQyxXQUFXbkcsU0FBU3FFLGNBQVQsQ0FBd0JsQixTQUFTLFFBQWpDLENBQWY7QUFDQSxxQkFBSThCLFFBQVFrQixTQUFTdEUsWUFBVCxDQUFzQixZQUF0QixDQUFaO0FBQ0EscUJBQUl1RSxXQUFXQyxLQUFLQyxLQUFMLENBQVlELEtBQUtFLE1BQUwsS0FBZ0IsTUFBNUIsQ0FBZjtBQUNBLHFCQUFJQyxjQUFjO0FBQ2Qsa0NBQVNQLFFBQVEsSUFBUixHQUFlRyxRQUFmLEdBQTBCLEdBRHJCO0FBRWQsb0NBQVdsQixLQUFLQyxTQUFMLENBQWU3QixVQUFmLElBQTZCLFdBQTdCLEdBQTJDMkIsS0FBM0MsR0FBbUQsZUFBbkQsR0FBcUVJLFNBQVN2QixLQUE5RSxHQUFzRixHQUZuRjtBQUdkLG1DQUFVO0FBSEksa0JBQWxCOztBQU1BLHNCQUFLLElBQUl4QixDQUFULElBQWNnQixVQUFkLEVBQTBCO0FBQ3RCa0QscUNBQVksV0FBV2xFLENBQXZCLElBQTRCZ0IsV0FBV2hCLENBQVgsQ0FBNUI7QUFDSDs7QUFFRGtFLDZCQUFZLGFBQVosSUFBNkJ2QixLQUE3QjtBQUNBdUIsNkJBQVksZ0JBQVosSUFBZ0NuQixTQUFTdkIsS0FBekM7QUFDQTBDLDZCQUFZLGlCQUFaLElBQWlDWCxVQUFVL0IsS0FBM0M7QUFDQTBDLDZCQUFZLGdCQUFaLElBQWdDVixjQUFjaEMsS0FBOUM7QUFDQTBDLDZCQUFZLFlBQVosSUFBNEJULFdBQVdqQyxLQUF2QztBQUNBMEMsNkJBQVksWUFBWixJQUE0QlIsV0FBV2xDLEtBQXZDOztBQUVBRyx5QkFBUUMsR0FBUixDQUFZc0MsV0FBWjs7QUFFQSxxQkFBSWhCLFVBQVUsRUFBZDs7QUFFQSxzQkFBSyxJQUFJbEQsRUFBVCxJQUFjZ0IsVUFBZCxFQUEwQjtBQUN0QmtDLG9DQUFXLFFBQVFsRCxFQUFSLEdBQVksSUFBWixHQUFtQmdCLFdBQVdoQixFQUFYLENBQW5CLEdBQW1DLE1BQTlDO0FBQ0g7QUFDRGtELDRCQUFXLGVBQWVnQixZQUFZQyxXQUEzQixHQUF5QyxNQUFwRDtBQUNBakIsNEJBQVcsa0JBQWtCSCxTQUFTdkIsS0FBM0IsR0FBbUMsTUFBOUM7QUFDQTBCLDRCQUFXLHFCQUFzQkgsU0FBU3ZCLEtBQVQsR0FBaUIwQyxZQUFZQyxXQUFuRCxHQUFrRSxNQUE3RTtBQUNBakIsNEJBQVcsb0JBQW9CZ0IsWUFBWUUsZUFBaEMsR0FBa0QsTUFBN0Q7QUFDQWxCLDRCQUFXLG1CQUFtQmdCLFlBQVlHLGNBQS9CLEdBQWdELE1BQTNEO0FBQ0FuQiw0QkFBVyxlQUFlZ0IsWUFBWUksVUFBM0IsR0FBd0MsTUFBbkQ7O0FBRUFsRix1QkFBTUMsY0FBTjs7QUFHQWtGLHVCQUFNLDJCQUFOLEVBQW1DO0FBQy9CQywrQkFBTTVCLEtBQUtDLFNBQUwsQ0FBZXFCLFdBQWYsQ0FEeUI7QUFFL0I7QUFDQTtBQUNBTyxrQ0FBUztBQUNMLCtDQUFjQyxjQUFjQyxLQUR2QjtBQUVMLGlEQUFnQjtBQUZYLDBCQUpzQjtBQVEvQkMsaUNBQVE7QUFSdUIsa0JBQW5DLEVBVUtDLElBVkwsQ0FVVSxVQUFVQyxRQUFWLEVBQW9CO0FBQ3RCbkQsaUNBQVFDLEdBQVIsQ0FBWWtELFFBQVo7O0FBRUEsNkJBQUlBLFNBQVNDLE1BQVQsS0FBb0IsR0FBeEIsRUFBNkI7QUFDekJwRCx5Q0FBUUMsR0FBUixDQUFZLGNBQWNrRCxTQUFTQyxNQUF2QixHQUFnQyxHQUFoQyxHQUFzQ0QsU0FBU0UsVUFBM0Q7QUFDQUMsdUNBQU0sY0FBY0gsU0FBU0MsTUFBdkIsR0FBZ0MsR0FBaEMsR0FBc0NELFNBQVNFLFVBQXJEO0FBQ0E7QUFDSDs7QUFFRCw2QkFBSUYsU0FBU0MsTUFBVCxLQUFvQixHQUF4QixFQUE2QjtBQUN6QjdCLDRDQUFXLFNBQVM0QixTQUFTRSxVQUFsQixHQUErQixxQkFBMUM7QUFDQXBHLHdDQUFPeUUsV0FBUCxFQUFvQjZCLFFBQXBCLENBQTZCLE1BQTdCO0FBQ0E1QiwrQ0FBY2xCLFNBQWQsR0FBMEJjLE9BQTFCO0FBQ0F2Qix5Q0FBUUMsR0FBUixDQUFZa0QsU0FBU0UsVUFBVCxHQUFzQixxQkFBbEM7QUFDQUMsdUNBQU1ILFNBQVNFLFVBQVQsR0FBc0IscUJBQTVCO0FBQ0g7QUFDSixrQkExQkwsRUEyQktHLEtBM0JMLENBMkJXRixLQTNCWDtBQTRCSCxVQW5GRDtBQW9GSCxFOzs7Ozs7Ozs7Ozs7bUJDckZjLFlBQU07QUFDakJ0RCxhQUFRQyxHQUFSLENBQVksNkJBQVosRUFBMkNoRCxPQUFPUixFQUFQLENBQVVnSCxTQUFWLENBQW9CQyxXQUFwQixDQUFnQ0MsT0FBM0U7QUFDQTFHLFlBQU8sTUFBUCxFQUFld0csU0FBZixDQUF5QjtBQUNyQkcsZ0JBQU87QUFDUDtBQUZxQixNQUF6QjtBQUlILEU7Ozs7Ozs7Ozs7OztBQ05EOzs7Ozs7bUJBRWUsWUFBTTtBQUNqQixTQUFJQyxVQUFVO0FBQ1ZDLGVBQU0sY0FBVUMsWUFBVixFQUF3QkMsR0FBeEIsRUFBNkJDLE9BQTdCLEVBQXNDO0FBQ3hDLGlCQUFJQyxrQkFBa0JILGFBQWFJLFdBQWIsRUFBdEI7QUFDQSxpQkFBSSxDQUFDRixRQUFRRyxRQUFSLENBQWlCLFdBQWpCLENBQUwsRUFBb0M7QUFDaENMLDhCQUFhTSxHQUFiLENBQWlCLFFBQWpCLEVBQTJCSCxlQUEzQjtBQUNBRCx5QkFBUUssUUFBUixDQUFpQixXQUFqQjs7QUFFQU4scUJBQUlPLFNBQUosQ0FBYztBQUNWQywyQkFBTSxjQUFVL0csS0FBVixFQUFpQmdILEVBQWpCLEVBQXFCO0FBQ3ZCQSw0QkFBR0MsUUFBSCxDQUFZQyxJQUFaLEdBQW1CdkMsS0FBS3dDLEdBQUwsQ0FBUyxHQUFULEVBQWNILEdBQUdDLFFBQUgsQ0FBWUMsSUFBMUIsQ0FBbkI7QUFDQUYsNEJBQUdDLFFBQUgsQ0FBWUcsR0FBWixHQUFrQnpDLEtBQUt3QyxHQUFMLENBQVMsR0FBVCxFQUFjSCxHQUFHQyxRQUFILENBQVlHLEdBQTFCLENBQWxCO0FBQ0g7QUFKUyxrQkFBZDtBQU1ILGNBVkQsTUFVTztBQUNIZCw4QkFBYU0sR0FBYixDQUFpQixRQUFqQixFQUEyQixNQUEzQjtBQUNBSix5QkFBUWEsV0FBUixDQUFvQixXQUFwQjtBQUNIO0FBQ0osVUFqQlM7QUFrQlZDLGlCQUFRLGlCQUFVQyxPQUFWLEVBQW1CakIsWUFBbkIsRUFBaUNFLE9BQWpDLEVBQTBDO0FBQzlDLGlCQUFJZ0IsTUFBTUQsUUFBUUUsSUFBUixDQUFhLE1BQWIsQ0FBVjtBQUFBLGlCQUNJQyxTQUFTSCxRQUFRSSxRQUFSLEVBRGI7QUFBQSxpQkFFSXBCLE1BQU1nQixRQUFRSyxNQUFSLEdBQWlCQyxJQUFqQixHQUF3QkMsUUFBeEIsRUFGVjs7QUFJQVAscUJBQVFWLFFBQVIsQ0FBaUIsV0FBakI7O0FBRUFhLG9CQUFPSyxJQUFQLENBQVksWUFBWTtBQUNwQixxQkFBSSxzQkFBRSxJQUFGLEVBQVFwQixRQUFSLENBQWlCLFdBQWpCLENBQUosRUFBbUM7QUFDL0IsMkNBQUUsSUFBRixFQUFRVSxXQUFSLENBQW9CLFdBQXBCO0FBQ0g7QUFDSixjQUpEOztBQU1BLGlCQUFJYixRQUFRRyxRQUFSLENBQWlCLFdBQWpCLENBQUosRUFBbUM7QUFDL0JILHlCQUFRYSxXQUFSLENBQW9CLFdBQXBCO0FBQ0FmLDhCQUFhTSxHQUFiLENBQWlCLFFBQWpCLEVBQTJCLE1BQTNCO0FBQ0g7O0FBRUQ7QUFDQUwsaUJBQUlrQixJQUFKLENBQVMsS0FBVCxFQUFnQkQsR0FBaEI7QUFDSDtBQXRDUyxNQUFkOztBQXlDQSxTQUFJaEIsVUFBVSxzQkFBRSxVQUFGLENBQWQ7QUFDQUEsYUFBUTNILEVBQVIsQ0FBVyxPQUFYLEVBQW9CLEdBQXBCLEVBQXlCLFVBQVVtQixLQUFWLEVBQWlCO0FBQ3RDLGFBQUl1SCxVQUFVLHNCQUFFLElBQUYsQ0FBZDtBQUNBLGFBQUlTLGNBQWNULFFBQVFwRixJQUFSLENBQWEsU0FBYixDQUFsQjtBQUNBLGFBQUk4RixZQUFZakksTUFBTWtJLGNBQU4sQ0FBcUJoSSxFQUFyQztBQUNBc0csbUJBQVUsc0JBQUUsTUFBTXlCLFNBQVIsQ0FBVjs7QUFFQSxhQUFJRCxnQkFBZ0IsTUFBcEIsRUFBNEI7QUFDeEIsaUJBQUkxQixlQUFlaUIsUUFBUUssTUFBUixFQUFuQjtBQUFBLGlCQUNJckIsTUFBTWdCLFFBQVFJLFFBQVIsRUFEVjtBQUVBdkIscUJBQVFDLElBQVIsQ0FBYUMsWUFBYixFQUEyQkMsR0FBM0IsRUFBZ0NDLE9BQWhDO0FBQ0gsVUFKRCxNQUlPLElBQUl3QixnQkFBZ0IsT0FBcEIsRUFBNkI7QUFDaEMsaUJBQUkxQixnQkFBZWlCLFFBQVFLLE1BQVIsR0FBaUJELFFBQWpCLEVBQW5CO0FBQ0F2QixxQkFBUWtCLE1BQVIsQ0FBZUMsT0FBZixFQUF3QmpCLGFBQXhCLEVBQXNDRSxPQUF0QztBQUNILFVBSE0sTUFHQTtBQUNIO0FBQ0g7QUFDRHhHLGVBQU1DLGNBQU47QUFDSCxNQWpCRDtBQWtCSCxFOzs7Ozs7QUMvREQseUIiLCJmaWxlIjoiY29tbW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgN2NmMTFmODY0OTJiYjhmYzg0ODMiLCIvLyBpbXBvcnQgJCBmcm9tIFwianF1ZXJ5XCI7XHJcblxyXG5jb25zdCAkID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvci5iaW5kKGRvY3VtZW50KTtcclxuY29uc3QgJCQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsLmJpbmQoZG9jdW1lbnQpO1xyXG5cclxuTm9kZS5wcm90b3R5cGUub24gPSB3aW5kb3cub24gPSBmdW5jdGlvbiAobmFtZSwgZm4pIHtcclxuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihuYW1lLCBmbik7XHJcbn07XHJcblxyXG5Ob2RlTGlzdC5wcm90b3R5cGUuX19wcm90b19fID0gQXJyYXkucHJvdG90eXBlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXHJcbk5vZGVMaXN0LnByb3RvdHlwZS5fX3Byb3RvX18gPSBEb2N1bWVudC5wcm90b3R5cGU7XHJcblxyXG5Ob2RlTGlzdC5wcm90b3R5cGUub24gPSBOb2RlTGlzdC5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uIChuYW1lLCBmbikge1xyXG4gICAgdGhpcy5mb3JFYWNoKChlbGVtKSA9PiB7XHJcbiAgICAgICAgZWxlbS5vbihuYW1lLCBmbik7XHJcbiAgICB9KTtcclxufTtcclxuLy9leHBvcnQgeyQsICQkfTtcclxuXHJcbmltcG9ydCBtYWluIGZyb20gXCIuL21vZHVsZXMvbWFpblwiO1xyXG5pbXBvcnQgdG9nZ2xlQ2hvb3NlU2VjdGlvbnMgZnJvbSBcIi4vbW9kdWxlcy90b2dnbGVDaG9vc2VTZWN0aW9uc1wiO1xyXG5pbXBvcnQgb25DaGFuZ2VTZWxlY3QgZnJvbSBcIi4vbW9kdWxlcy9vbkNoYW5nZVNlbGVjdFwiO1xyXG5pbXBvcnQgY2hlY2tvdXRCdG4gZnJvbSBcIi4vbW9kdWxlcy9jaGVja291dEJ0blwiO1xyXG5pbXBvcnQgYWRkT3JkZXIgZnJvbSBcIi4vbW9kdWxlcy9hZGRPcmRlclwiO1xyXG5pbXBvcnQgdmFsaWRhdGlvbiBmcm9tIFwiLi9tb2R1bGVzL3ZhbGlkYXRpb25cIjtcclxuaW1wb3J0IGdhbGxlcnkgZnJvbSBcIi4vbW9kdWxlcy9nYWxsZXJ5XCI7XHJcblxyXG5cclxualF1ZXJ5KGZ1bmN0aW9uICgpIHtcclxuICAgIG1haW4oJCwgJCQpO1xyXG4gICAgdG9nZ2xlQ2hvb3NlU2VjdGlvbnMoJCwgJCQpO1xyXG4gICAgb25DaGFuZ2VTZWxlY3QoJCk7XHJcbiAgICBjaGVja291dEJ0bigkKTtcclxuICAgIGFkZE9yZGVyKCQpO1xyXG4gICAgdmFsaWRhdGlvbigkKTtcclxuICAgIGdhbGxlcnkoKTtcclxufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL3NyYy9qYXZhc2NyaXB0cy9jb21tb24uanMiLCIvLyBpbXBvcnQgJCBmcm9tIFwianF1ZXJ5XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoJCwgJCQpID0+IHtcclxuXHJcbiAgICB3aW5kb3cuTWFpbk1ldGhvZHMgPSB7XHJcbiAgICAgICAgc2Nyb2xsRWxlbTogZnVuY3Rpb24gKHByb3BlcnR5LCBkdXJhdGlvbikge1xyXG4gICAgICAgICAgICBqUXVlcnkoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcclxuICAgICAgICAgICAgICAgIHNjcm9sbFRvcDogcHJvcGVydHlcclxuICAgICAgICAgICAgfSwgZHVyYXRpb24pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbGF6eVNjcm9sbDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBsZXQgaWQgPSB0aGlzLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xyXG4gICAgICAgICAgICBsZXQgb2Zmc2V0ID0gJChpZCkub2Zmc2V0VG9wO1xyXG4gICAgICAgICAgICAvL2RvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdodG1sJylbMF0uYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgIGlmIChpZCA9PT0gXCIjY2hvb3NlXCIpIHtcclxuICAgICAgICAgICAgICAgIG9mZnNldCAtPSA1MDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBNYWluTWV0aG9kcy5zY3JvbGxFbGVtKG9mZnNldCwgNzAwKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG5hdmJhclRvRGVmYXVsdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKCcubmF2YmFyLWRlZmF1bHQnKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAndHJhbnNwYXJlbnQnO1xyXG4gICAgICAgICAgICAkKCcubmF2YmFyLWJyYW5kIGltZycpLmNsYXNzTGlzdC5yZW1vdmUoJ2ltZ19yZXNwb25zaXZlJyk7XHJcbiAgICAgICAgICAgICQoJy5uYXZiYXItZml4ZWQtdG9wJykuY2xhc3NMaXN0LnJlbW92ZSgndG9wLW5hdi1jb2xsYXBzZScpO1xyXG4gICAgICAgICAgICBsZXQgbWVudUl0ZW0gPSAkJCgnLm5hdmJhci1uYXYgYScpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1lbnVJdGVtLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBtZW51SXRlbVtpXS5jbGFzc0xpc3QucmVtb3ZlKCd3aGl0ZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBuYXZiYXJUb0Zsb2F0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICQoJy5uYXZiYXItZGVmYXVsdCcpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZ2JhKDQ4LCA0OCwgNDgsIDAuNSknO1xyXG4gICAgICAgICAgICAkKCcubmF2YmFyLWRlZmF1bHQnKS5jbGFzc0xpc3QuYWRkKCd0b3AtbmF2LWNvbGxhcHNlJyk7XHJcbiAgICAgICAgICAgICQoJy5uYXZiYXItYnJhbmQgaW1nJykuY2xhc3NMaXN0LmFkZCgnaW1nX3Jlc3BvbnNpdmUnKTtcclxuICAgICAgICAgICAgbGV0IG1lbnVJdGVtID0gJCQoJy5uYXZiYXItbmF2IGEnKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtZW51SXRlbS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbWVudUl0ZW1baV0uY2xhc3NMaXN0LmFkZCgnd2hpdGUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0TmF2U3R5bGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy5uYXZiYXJUb0Zsb2F0KCk7XHJcbiAgICAgICAgICAgIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPCA1MCkge1xyXG4gICAgICAgICAgICAgICAgTWFpbk1ldGhvZHMubmF2YmFyVG9EZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgfTtcclxuXHJcbiAgICB3aW5kb3cub24oJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCgnLmxvYWRlcl9pbm5lcicpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAkKCcubG9hZGVyJykuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgfSk7XHJcblxyXG4gICAgd2luZG93Lm9uKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vTmF2YmFyIHN0eWxlIHN3aXRjaGVyXHJcbiAgICAgICAgTWFpbk1ldGhvZHMuc2V0TmF2U3R5bGUoKTtcclxuICAgICAgICB3aW5kb3cub24oJ3Njcm9sbCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgTWFpbk1ldGhvZHMuc2V0TmF2U3R5bGUoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy9GT1IgTU9CSUxFXHJcbiAgICAgICAgaWYgKHdpbmRvdy5vdXRlcldpZHRoIDwgNzY4KSB7XHJcbiAgICAgICAgICAgIC8vU0FORFdJQ0ggQlVUVE9OXHJcbiAgICAgICAgICAgICQoJy5uYXZiYXItdG9nZ2xlJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgTWFpbk1ldGhvZHMubmF2YmFyVG9GbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgJCgnLnNhbmR3aWNoJykuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy9ISURFIE1FTlUgQ0xJQ0tJTkcgTElcclxuICAgICAgICAgICAgJCQoJy5uYXZiYXItY29sbGFwc2UgdWwgbGkgYScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICQoJy5uYXZiYXItdG9nZ2xlJykuY2xpY2soKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL0xBWlkgQU5JTUFUSU5HIEZPUiBCVVRUT05TIEFORCBNRU5VIElURU1TXHJcbiAgICAgICAgJCQoJy5zY3JvbGxfYnRuJykub24oJ2NsaWNrJywgTWFpbk1ldGhvZHMubGF6eVNjcm9sbCk7XHJcbiAgICAgICAgJCQoJy5uYXYgYScpLm9uKCdjbGljaycsIE1haW5NZXRob2RzLmxhenlTY3JvbGwpO1xyXG5cclxuICAgICAgICAvL0NMT1NFIEJVVFRPTiBYXHJcbiAgICAgICAgJCgnLmNsb3NlLWJ0bicpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgbGV0IHNlY3Rpb25zID0gJCQoJy5jb2xsYXBzZS1zZWN0aW9uJyk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VjdGlvbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHNlY3Rpb25zW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3dpbmcnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3dpbmcnKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgalF1ZXJ5KCdbZGF0YS1zbGlkZT1cInByZXZcIl0nKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIE1haW5NZXRob2RzLnNjcm9sbEVsZW0oJChcIiNjaG9vc2VcIikub2Zmc2V0VG9wIC0gNTAsIDEwMCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvc3JjL2phdmFzY3JpcHRzL21vZHVsZXMvbWFpbi5qcyIsImV4cG9ydCBkZWZhdWx0ICgkLCAkJCkgPT4ge1xyXG4gICAgd2luZG93LnRvZ2dsZUNob29zZVNlY3Rpb25zID0gZnVuY3Rpb24gKGVsKSB7XHJcbiAgICAgICAgJCgnLmNsb3NlLWJ0bicpLmNsYXNzTGlzdC5hZGQoJ3Nob3dpbmcnKTtcclxuICAgICAgICBpZiAoJCQoJy5jb2xsYXBzZS1zZWN0aW9uLnNob3dpbmcnKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgJCgnLmNsb3NlLWJ0bicpLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3dpbmcnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBkYXRhSUQgPSBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcclxuICAgICAgICBsZXQgc2VjdGlvbiA9ICQoJyNzZWN0aW9uLScgKyBkYXRhSUQpO1xyXG4gICAgICAgIGxldCBjb2xsYXBzZVNlY3Rpb25zID0gJCQoJy5jb2xsYXBzZS1zZWN0aW9uJyk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2xsYXBzZVNlY3Rpb25zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICghKGNvbGxhcHNlU2VjdGlvbnNbaV0uaWQgPT09IHNlY3Rpb24uaWQpKSB7XHJcbiAgICAgICAgICAgICAgICBjb2xsYXBzZVNlY3Rpb25zW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3dpbmcnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBzZWN0aW9uLmNsYXNzTGlzdC50b2dnbGUoJ3Nob3dpbmcnKTtcclxuICAgICAgICBpZiAoJCQoJy5jb2xsYXBzZS1zZWN0aW9uLnNob3dpbmcnKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgJCgnLmNsb3NlLWJ0bicpLmNsYXNzTGlzdC5hZGQoJ3Nob3dpbmcnKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL3NyYy9qYXZhc2NyaXB0cy9tb2R1bGVzL3RvZ2dsZUNob29zZVNlY3Rpb25zLmpzIiwiZXhwb3J0IGRlZmF1bHQgKCQpID0+IHtcclxuICAgIHdpbmRvdy51c2VyQ2hvaWNlID0ge307XHJcblxyXG4gICAgd2luZG93Lm9uQ2hhbmdlU2VsZWN0ID0gZnVuY3Rpb24gKGVsKSB7XHJcbiAgICAgICAgbGV0IHVzZXJDaG9pY2UgPSB3aW5kb3cudXNlckNob2ljZTtcclxuICAgICAgICBsZXQgZGF0YUlEID0gZWwuZ2V0QXR0cmlidXRlKCdkYXRhJyk7XHJcbiAgICAgICAgbGV0IGFsbFNlbGVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YV0nKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSBpbiBhbGxTZWxlY3RzKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoaXNOYU4oaSkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgaXRlbVNlbGVjdCA9IGFsbFNlbGVjdHNbaV07XHJcbiAgICAgICAgICAgIGxldCBzZWxlY3REYXRhID0gaXRlbVNlbGVjdC5hdHRyaWJ1dGVzLmRhdGEudmFsdWU7XHJcblxyXG4gICAgICAgICAgICBpZiAoc2VsZWN0RGF0YSA9PT0gZGF0YUlEKSB7XHJcbiAgICAgICAgICAgICAgICB1c2VyQ2hvaWNlW2l0ZW1TZWxlY3QubmFtZV0gPSBpdGVtU2VsZWN0Lm9wdGlvbnNbaXRlbVNlbGVjdC5zZWxlY3RlZEluZGV4XS52YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ1RoaXMgaXMgdXNlciBjaG9pY2UnKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh1c2VyQ2hvaWNlKTtcclxuXHJcbiAgICAgICAgY29tcGFyZSh1c2VyQ2hvaWNlLCBkYXRhSUQpO1xyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBjb21wYXJlKHVzZXJDaG9pY2UsIGRhdGFJRCkge1xyXG5cclxuICAgICAgICBsZXQgcHJpbnRQcmljZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRhdGFJRCArICctcHJpY2UnKTtcclxuICAgICAgICBsZXQgcHJpbnRNZXNzYWdlID0gJCgnI21lc3NhZ2UtJyArIGRhdGFJRCk7XHJcbiAgICAgICAgbGV0IGNoZWNrb3V0QnV0dG9uID0gJChcIiNzZWN0aW9uLVwiICsgZGF0YUlEICsgXCIgYnV0dG9uW2RhdGEtc2xpZGU9J25leHQnXVwiKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgcGFyYW1ldGVyIGluIHVzZXJDaG9pY2UpIHtcclxuICAgICAgICAgICAgaWYgKHVzZXJDaG9pY2VbcGFyYW1ldGVyXSA9PT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgcHJpbnRQcmljZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtcHJpY2UnLCAnJyk7XHJcbiAgICAgICAgICAgICAgICBwcmludFByaWNlLmlubmVySFRNTCA9IFwiJm5ic3A7XCI7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnU2VsZWN0IHRoZSAnICsgcGFyYW1ldGVyKTtcclxuICAgICAgICAgICAgICAgIHByaW50TWVzc2FnZS5pbm5lckhUTUwgPSAnU2VsZWN0IHRoZSAnICsgcGFyYW1ldGVyO1xyXG4gICAgICAgICAgICAgICAgY2hlY2tvdXRCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgdmFyaWF0aW9ucyA9IHZhcmlhdGlvbnNPYmplY3QuZGF0YUJ5SWRbZGF0YUlEXTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ1RoaXMgaXMgVmFyaWF0aW9ucycpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHZhcmlhdGlvbnMpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpIGluIHZhcmlhdGlvbnMpIHtcclxuICAgICAgICAgICAgbGV0IHZhcmlhdGlvbiA9IHZhcmlhdGlvbnNbaV07XHJcbiAgICAgICAgICAgIGxldCB2YXJpYXRpb25zV2l0aG91dFByaWNlID0ge307XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBwYXJhbWV0ZXIgaW4gdmFyaWF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICB2YXJpYXRpb25zV2l0aG91dFByaWNlW3BhcmFtZXRlcl0gPSB2YXJpYXRpb25bcGFyYW1ldGVyXTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZGVsZXRlIHZhcmlhdGlvbnNXaXRob3V0UHJpY2UucHJpY2U7XHJcblxyXG4gICAgICAgICAgICBpZiAoSlNPTi5zdHJpbmdpZnkodXNlckNob2ljZSkgPT09IEpTT04uc3RyaW5naWZ5KHZhcmlhdGlvbnNXaXRob3V0UHJpY2UpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh2YXJpYXRpb24ucHJpY2UpO1xyXG4gICAgICAgICAgICAgICAgcHJpbnRQcmljZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtcHJpY2UnLCB2YXJpYXRpb24ucHJpY2UpO1xyXG4gICAgICAgICAgICAgICAgcHJpbnRQcmljZS5pbm5lckhUTUwgPSAnPGgzIGNsYXNzPVwicmVkLXByaWNlXCI+JyArIHZhcmlhdGlvbi5wcmljZSArICckPC9oMz4nO1xyXG4gICAgICAgICAgICAgICAgcHJpbnRNZXNzYWdlLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICBjaGVja291dEJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcHJpbnRQcmljZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtcHJpY2UnLCAnJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnVmFyaWF0aW9uIGlzIG5vdCBmb3VuZCcpO1xyXG4gICAgICAgICAgICAgICAgcHJpbnRQcmljZS5pbm5lckhUTUwgPSAnPGgzPi0gLTwvaDM+JztcclxuICAgICAgICAgICAgICAgIHByaW50TWVzc2FnZS5pbm5lckhUTUwgPSAnVmFyaWF0aW9uIGlzIG5vdCBmb3VuZCc7XHJcbiAgICAgICAgICAgICAgICBjaGVja291dEJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL3NyYy9qYXZhc2NyaXB0cy9tb2R1bGVzL29uQ2hhbmdlU2VsZWN0LmpzIiwiZXhwb3J0IGRlZmF1bHQgKCQpID0+IHtcclxuICAgIHdpbmRvdy5jaGVja291dEJ0biA9IGZ1bmN0aW9uIChlbCkge1xyXG4gICAgICAgIGxldCB1c2VyQ2hvaWNlID0gd2luZG93LnVzZXJDaG9pY2U7XHJcbiAgICAgICAgTWFpbk1ldGhvZHMuc2Nyb2xsRWxlbSgkKFwiI2Nob29zZVwiKS5vZmZzZXRUb3AgLSA1MCwgMTAwKTtcclxuICAgICAgICBsZXQgZGF0YUlEID0gZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XHJcbiAgICAgICAgbGV0IHF1YW50aXR5ID0gJCgnI3NlY3Rpb24tJyArIGRhdGFJRCArICcgLnF1YW50aXR5Jyk7XHJcbiAgICAgICAgbGV0IHVzZXJDaG9pY2VUZXh0ID0gJCgnI3NlY3Rpb24tJyArIGRhdGFJRCArICcgLnVzZXItY2hvaWNlJyk7XHJcbiAgICAgICAgbGV0IGNob2ljZVByaWNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZGF0YUlEICsgJy1wcmljZScpLmdldEF0dHJpYnV0ZSgnZGF0YS1wcmljZScpO1xyXG4gICAgICAgIGxldCBjb250ZW50ID0gJyc7XHJcbiAgICAgICAgZm9yIChsZXQgaSBpbiB1c2VyQ2hvaWNlKSB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQgKz0gXCI8cD5cIiArIGkgKyBcIjogXCIgKyB1c2VyQ2hvaWNlW2ldICsgXCI8L3A+XCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnRlbnQgKz0gXCI8cD5QcmljZTogXCIgKyBjaG9pY2VQcmljZTtcclxuICAgICAgICBjb250ZW50ICs9IFwiPHA+UXVhbnRpdHk6IFwiICsgcXVhbnRpdHkudmFsdWU7XHJcbiAgICAgICAgdXNlckNob2ljZVRleHQuaW5uZXJIVE1MID0gY29udGVudDtcclxuICAgIH07XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvc3JjL2phdmFzY3JpcHRzL21vZHVsZXMvY2hlY2tvdXRCdG4uanMiLCJleHBvcnQgZGVmYXVsdCAoJCkgPT4ge1xyXG4gICAgd2luZG93LmFkZE9yZGVyID0gZnVuY3Rpb24gKGVsKSB7XHJcblxyXG4gICAgICAgIGlmIChlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2Rpc2FibGVkJykpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBNYWluTWV0aG9kcy5zY3JvbGxFbGVtKCQoXCIjY2hvb3NlXCIpLm9mZnNldFRvcCAtIDUwLCAxMDApO1xyXG5cclxuICAgICAgICBsZXQgZGF0YUlEID0gZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XHJcbiAgICAgICAgbGV0IHF1YW50aXR5ID0gJCgnI3NlY3Rpb24tJyArIGRhdGFJRCArICcgLnF1YW50aXR5Jyk7XHJcbiAgICAgICAgbGV0IGVsZW1lbnRIcmVmID0gZWwuZ2V0QXR0cmlidXRlKCdocmVmJyk7XHJcbiAgICAgICAgbGV0IHVzZXJPcmRlclRleHQgPSAkKCcjc2VjdGlvbi0nICsgZGF0YUlEICsgJyAudXNlci1vcmRlcicpO1xyXG4gICAgICAgIGxldCBpbnB1dE5hbWUgPSAkKCcjZm9ybS0nICsgZGF0YUlEICsgJyBpbnB1dFtuYW1lPVwiZmlyc3RfbmFtZVwiXScpO1xyXG4gICAgICAgIGxldCBpbnB1dExhc3ROYW1lID0gJCgnI2Zvcm0tJyArIGRhdGFJRCArICcgaW5wdXRbbmFtZT1cImxhc3RfbmFtZVwiXScpO1xyXG4gICAgICAgIGxldCBpbnB1dEVtYWlsID0gJCgnI2Zvcm0tJyArIGRhdGFJRCArICcgaW5wdXRbbmFtZT1cImVtYWlsXCJdJyk7XHJcbiAgICAgICAgbGV0IGlucHV0UGhvbmUgPSAkKCcjZm9ybS0nICsgZGF0YUlEICsgJyBpbnB1dFtuYW1lPVwicGhvbmVcIl0nKTtcclxuXHJcbiAgICAgICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWwubmFtZSkudGV4dENvbnRlbnQ7XHJcblxyXG4gICAgICAgIGxldCBwcmljZVRhZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRhdGFJRCArICctcHJpY2UnKTtcclxuICAgICAgICBsZXQgcHJpY2UgPSBwcmljZVRhZy5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJpY2UnKTtcclxuICAgICAgICBsZXQgcmFuZG9tSWQgPSBNYXRoLnRydW5jKChNYXRoLnJhbmRvbSgpICogMTAwMDAwKSk7XHJcbiAgICAgICAgbGV0IHByb2R1Y3REYXRhID0ge1xyXG4gICAgICAgICAgICBcInRpdGxlXCI6IHRpdGxlICsgJyBbJyArIHJhbmRvbUlkICsgJ10nLFxyXG4gICAgICAgICAgICBcImNvbnRlbnRcIjogSlNPTi5zdHJpbmdpZnkodXNlckNob2ljZSkgKyAne1wicHJpY2VcIjonICsgcHJpY2UgKyAnLCBcInF1YW50aXR5XCI6JyArIHF1YW50aXR5LnZhbHVlICsgJ30nLFxyXG4gICAgICAgICAgICBcInN0YXR1c1wiOiAncHVibGlzaCdcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpIGluIHVzZXJDaG9pY2UpIHtcclxuICAgICAgICAgICAgcHJvZHVjdERhdGFbJ3BhcmFtXycgKyBpXSA9IHVzZXJDaG9pY2VbaV07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm9kdWN0RGF0YVsncGFyYW1fcHJpY2UnXSA9IHByaWNlO1xyXG4gICAgICAgIHByb2R1Y3REYXRhWydwYXJhbV9xdWFudGl0eSddID0gcXVhbnRpdHkudmFsdWU7XHJcbiAgICAgICAgcHJvZHVjdERhdGFbJ2luZm9fZmlyc3RfbmFtZSddID0gaW5wdXROYW1lLnZhbHVlO1xyXG4gICAgICAgIHByb2R1Y3REYXRhWydpbmZvX2xhc3RfbmFtZSddID0gaW5wdXRMYXN0TmFtZS52YWx1ZTtcclxuICAgICAgICBwcm9kdWN0RGF0YVsnaW5mb19lbWFpbCddID0gaW5wdXRFbWFpbC52YWx1ZTtcclxuICAgICAgICBwcm9kdWN0RGF0YVsnaW5mb19waG9uZSddID0gaW5wdXRQaG9uZS52YWx1ZTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2cocHJvZHVjdERhdGEpO1xyXG5cclxuICAgICAgICBsZXQgY29udGVudCA9ICcnO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpIGluIHVzZXJDaG9pY2UpIHtcclxuICAgICAgICAgICAgY29udGVudCArPSBcIjxwPlwiICsgaSArIFwiOiBcIiArIHVzZXJDaG9pY2VbaV0gKyBcIjwvcD5cIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29udGVudCArPSBcIjxwPlByaWNlOiBcIiArIHByb2R1Y3REYXRhLnBhcmFtX3ByaWNlICsgXCI8L3A+XCI7XHJcbiAgICAgICAgY29udGVudCArPSBcIjxwPlF1YW50aXR5OiBcIiArIHF1YW50aXR5LnZhbHVlICsgXCI8L3A+XCI7XHJcbiAgICAgICAgY29udGVudCArPSBcIjxwPlRvdGFsIHByaWNlOiBcIiArIChxdWFudGl0eS52YWx1ZSAqIHByb2R1Y3REYXRhLnBhcmFtX3ByaWNlKSArIFwiPC9wPlwiO1xyXG4gICAgICAgIGNvbnRlbnQgKz0gXCI8cD5GaXJzdCBuYW1lOiBcIiArIHByb2R1Y3REYXRhLmluZm9fZmlyc3RfbmFtZSArIFwiPC9wPlwiO1xyXG4gICAgICAgIGNvbnRlbnQgKz0gXCI8cD5MYXN0IG5hbWU6IFwiICsgcHJvZHVjdERhdGEuaW5mb19sYXN0X25hbWUgKyBcIjwvcD5cIjtcclxuICAgICAgICBjb250ZW50ICs9IFwiPHA+UGhvbmU6IFwiICsgcHJvZHVjdERhdGEuaW5mb19waG9uZSArIFwiPC9wPlwiO1xyXG5cclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHJcbiAgICAgICAgZmV0Y2goJy93cC1qc29uL3dwL3YyL3Nob3Bfb3JkZXInLCB7XHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHByb2R1Y3REYXRhKSxcclxuICAgICAgICAgICAgLy8gdmFyIEJhc2U2ND17X2tleVN0cjpcIkFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky89XCIsZW5jb2RlOmZ1bmN0aW9uKGUpe3ZhciB0PVwiXCI7dmFyIG4scixpLHMsbyx1LGE7dmFyIGY9MDtlPUJhc2U2NC5fdXRmOF9lbmNvZGUoZSk7d2hpbGUoZjxlLmxlbmd0aCl7bj1lLmNoYXJDb2RlQXQoZisrKTtyPWUuY2hhckNvZGVBdChmKyspO2k9ZS5jaGFyQ29kZUF0KGYrKyk7cz1uPj4yO289KG4mMyk8PDR8cj4+NDt1PShyJjE1KTw8MnxpPj42O2E9aSY2MztpZihpc05hTihyKSl7dT1hPTY0fWVsc2UgaWYoaXNOYU4oaSkpe2E9NjR9dD10K3RoaXMuX2tleVN0ci5jaGFyQXQocykrdGhpcy5fa2V5U3RyLmNoYXJBdChvKSt0aGlzLl9rZXlTdHIuY2hhckF0KHUpK3RoaXMuX2tleVN0ci5jaGFyQXQoYSl9cmV0dXJuIHR9LGRlY29kZTpmdW5jdGlvbihlKXt2YXIgdD1cIlwiO3ZhciBuLHIsaTt2YXIgcyxvLHUsYTt2YXIgZj0wO2U9ZS5yZXBsYWNlKC9bXkEtWmEtejAtOVxcK1xcL1xcPV0vZyxcIlwiKTt3aGlsZShmPGUubGVuZ3RoKXtzPXRoaXMuX2tleVN0ci5pbmRleE9mKGUuY2hhckF0KGYrKykpO289dGhpcy5fa2V5U3RyLmluZGV4T2YoZS5jaGFyQXQoZisrKSk7dT10aGlzLl9rZXlTdHIuaW5kZXhPZihlLmNoYXJBdChmKyspKTthPXRoaXMuX2tleVN0ci5pbmRleE9mKGUuY2hhckF0KGYrKykpO249czw8MnxvPj40O3I9KG8mMTUpPDw0fHU+PjI7aT0odSYzKTw8NnxhO3Q9dCtTdHJpbmcuZnJvbUNoYXJDb2RlKG4pO2lmKHUhPTY0KXt0PXQrU3RyaW5nLmZyb21DaGFyQ29kZShyKX1pZihhIT02NCl7dD10K1N0cmluZy5mcm9tQ2hhckNvZGUoaSl9fXQ9QmFzZTY0Ll91dGY4X2RlY29kZSh0KTtyZXR1cm4gdH0sX3V0ZjhfZW5jb2RlOmZ1bmN0aW9uKGUpe2U9ZS5yZXBsYWNlKC9cXHJcXG4vZyxcIlxcblwiKTt2YXIgdD1cIlwiO2Zvcih2YXIgbj0wO248ZS5sZW5ndGg7bisrKXt2YXIgcj1lLmNoYXJDb2RlQXQobik7aWYocjwxMjgpe3QrPVN0cmluZy5mcm9tQ2hhckNvZGUocil9ZWxzZSBpZihyPjEyNyYmcjwyMDQ4KXt0Kz1TdHJpbmcuZnJvbUNoYXJDb2RlKHI+PjZ8MTkyKTt0Kz1TdHJpbmcuZnJvbUNoYXJDb2RlKHImNjN8MTI4KX1lbHNle3QrPVN0cmluZy5mcm9tQ2hhckNvZGUocj4+MTJ8MjI0KTt0Kz1TdHJpbmcuZnJvbUNoYXJDb2RlKHI+PjYmNjN8MTI4KTt0Kz1TdHJpbmcuZnJvbUNoYXJDb2RlKHImNjN8MTI4KX19cmV0dXJuIHR9LF91dGY4X2RlY29kZTpmdW5jdGlvbihlKXt2YXIgdD1cIlwiO3ZhciBuPTA7dmFyIHI9YzE9YzI9MDt3aGlsZShuPGUubGVuZ3RoKXtyPWUuY2hhckNvZGVBdChuKTtpZihyPDEyOCl7dCs9U3RyaW5nLmZyb21DaGFyQ29kZShyKTtuKyt9ZWxzZSBpZihyPjE5MSYmcjwyMjQpe2MyPWUuY2hhckNvZGVBdChuKzEpO3QrPVN0cmluZy5mcm9tQ2hhckNvZGUoKHImMzEpPDw2fGMyJjYzKTtuKz0yfWVsc2V7YzI9ZS5jaGFyQ29kZUF0KG4rMSk7YzM9ZS5jaGFyQ29kZUF0KG4rMik7dCs9U3RyaW5nLmZyb21DaGFyQ29kZSgociYxNSk8PDEyfChjMiY2Myk8PDZ8YzMmNjMpO24rPTN9fXJldHVybiB0fX07XHJcbiAgICAgICAgICAgIC8vY3JlYXRlUG9zdC5zZXRSZXF1ZXN0SGVhZGVyKCAnQXV0aG9yaXphdGlvbicsICdCYXNpYyAnICsgQmFzZTY0LmVuY29kZSggJ3Rlc3Q6MDAwMCcgKSApO1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAnWC1XUC1Ob25jZSc6IHdwQXBpU2V0dGluZ3Mubm9uY2UsXHJcbiAgICAgICAgICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnXHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyAhPT0gMjAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ05vdCAyMDE6ICcgKyByZXNwb25zZS5zdGF0dXMgKyAnICcgKyByZXNwb25zZS5zdGF0dXNUZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICBhbGVydCgnTm90IDIwMTogJyArIHJlc3BvbnNlLnN0YXR1cyArICcgJyArIHJlc3BvbnNlLnN0YXR1c1RleHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50ICs9ICc8YnI+JyArIHJlc3BvbnNlLnN0YXR1c1RleHQgKyAnIHN0YXR1czogcG9zdCBhZGRlZCc7XHJcbiAgICAgICAgICAgICAgICAgICAgalF1ZXJ5KGVsZW1lbnRIcmVmKS5jYXJvdXNlbCgnbmV4dCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJPcmRlclRleHQuaW5uZXJIVE1MID0gY29udGVudDtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5zdGF0dXNUZXh0ICsgJyBzdGF0dXM6IHBvc3QgYWRkZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICBhbGVydChyZXNwb25zZS5zdGF0dXNUZXh0ICsgJyBzdGF0dXM6IHBvc3QgYWRkZWQnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGFsZXJ0KTtcclxuICAgIH07XHJcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL3NyYy9qYXZhc2NyaXB0cy9tb2R1bGVzL2FkZE9yZGVyLmpzIiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJib29zdHJhcC12YWxpZGF0b3IgdmVyc2lvbjpcIiwgalF1ZXJ5LmZuLnZhbGlkYXRvci5Db25zdHJ1Y3Rvci5WRVJTSU9OKTtcclxuICAgIGpRdWVyeSgnZm9ybScpLnZhbGlkYXRvcih7XHJcbiAgICAgICAgZm9jdXM6IGZhbHNlLFxyXG4gICAgICAgIC8vIGRlbGF5OiAzMDAwXHJcbiAgICB9KTtcclxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvc3JjL2phdmFzY3JpcHRzL21vZHVsZXMvdmFsaWRhdGlvbi5qcyIsImltcG9ydCAkIGZyb20gXCJqcXVlcnlcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuICAgIGxldCBHYWxsZXJ5ID0ge1xyXG4gICAgICAgIHpvb206IGZ1bmN0aW9uIChpbWdDb250YWluZXIsIGltZywgZ2FsbGVyeSkge1xyXG4gICAgICAgICAgICBsZXQgY29udGFpbmVySGVpZ2h0ID0gaW1nQ29udGFpbmVyLm91dGVySGVpZ2h0KCk7XHJcbiAgICAgICAgICAgIGlmICghZ2FsbGVyeS5oYXNDbGFzcygnaXMtem9vbWVkJykpIHtcclxuICAgICAgICAgICAgICAgIGltZ0NvbnRhaW5lci5jc3MoXCJoZWlnaHRcIiwgY29udGFpbmVySGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgIGdhbGxlcnkuYWRkQ2xhc3MoJ2lzLXpvb21lZCcpO1xyXG5cclxuICAgICAgICAgICAgICAgIGltZy5kcmFnZ2FibGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGRyYWc6IGZ1bmN0aW9uIChldmVudCwgdWkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdWkucG9zaXRpb24ubGVmdCA9IE1hdGgubWluKDEwMCwgdWkucG9zaXRpb24ubGVmdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVpLnBvc2l0aW9uLnRvcCA9IE1hdGgubWluKDEwMCwgdWkucG9zaXRpb24udG9wKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGltZ0NvbnRhaW5lci5jc3MoXCJoZWlnaHRcIiwgXCJhdXRvXCIpO1xyXG4gICAgICAgICAgICAgICAgZ2FsbGVyeS5yZW1vdmVDbGFzcygnaXMtem9vbWVkJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHN3aXRjaDogZnVuY3Rpb24gKHRyaWdnZXIsIGltZ0NvbnRhaW5lciwgZ2FsbGVyeSkge1xyXG4gICAgICAgICAgICBsZXQgc3JjID0gdHJpZ2dlci5hdHRyKCdocmVmJyksXHJcbiAgICAgICAgICAgICAgICB0aHVtYnMgPSB0cmlnZ2VyLnNpYmxpbmdzKCksXHJcbiAgICAgICAgICAgICAgICBpbWcgPSB0cmlnZ2VyLnBhcmVudCgpLnByZXYoKS5jaGlsZHJlbigpO1xyXG5cclxuICAgICAgICAgICAgdHJpZ2dlci5hZGRDbGFzcygnaXMtYWN0aXZlJyk7XHJcblxyXG4gICAgICAgICAgICB0aHVtYnMuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcygnaXMtYWN0aXZlJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZ2FsbGVyeS5oYXNDbGFzcygnaXMtem9vbWVkJykpIHtcclxuICAgICAgICAgICAgICAgIGdhbGxlcnkucmVtb3ZlQ2xhc3MoJ2lzLXpvb21lZCcpO1xyXG4gICAgICAgICAgICAgICAgaW1nQ29udGFpbmVyLmNzcyhcImhlaWdodFwiLCBcImF1dG9cIik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIFN3aXRjaCBpbWFnZSBzb3VyY2VcclxuICAgICAgICAgICAgaW1nLmF0dHIoJ3NyYycsIHNyYyk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBsZXQgZ2FsbGVyeSA9ICQoJy5nYWxsZXJ5Jyk7XHJcbiAgICBnYWxsZXJ5Lm9uKCdjbGljaycsICdhJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgbGV0IHRyaWdnZXIgPSAkKHRoaXMpO1xyXG4gICAgICAgIGxldCB0cmlnZ2VyRGF0YSA9IHRyaWdnZXIuZGF0YShcImdhbGxlcnlcIik7XHJcbiAgICAgICAgbGV0IGdhbGxlcnlJZCA9IGV2ZW50LmRlbGVnYXRlVGFyZ2V0LmlkO1xyXG4gICAgICAgIGdhbGxlcnkgPSAkKCcjJyArIGdhbGxlcnlJZCk7XHJcblxyXG4gICAgICAgIGlmICh0cmlnZ2VyRGF0YSA9PT0gJ3pvb20nKSB7XHJcbiAgICAgICAgICAgIGxldCBpbWdDb250YWluZXIgPSB0cmlnZ2VyLnBhcmVudCgpLFxyXG4gICAgICAgICAgICAgICAgaW1nID0gdHJpZ2dlci5zaWJsaW5ncygpO1xyXG4gICAgICAgICAgICBHYWxsZXJ5Lnpvb20oaW1nQ29udGFpbmVyLCBpbWcsIGdhbGxlcnkpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodHJpZ2dlckRhdGEgPT09ICd0aHVtYicpIHtcclxuICAgICAgICAgICAgbGV0IGltZ0NvbnRhaW5lciA9IHRyaWdnZXIucGFyZW50KCkuc2libGluZ3MoKTtcclxuICAgICAgICAgICAgR2FsbGVyeS5zd2l0Y2godHJpZ2dlciwgaW1nQ29udGFpbmVyLCBnYWxsZXJ5KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9KTtcclxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvc3JjL2phdmFzY3JpcHRzL21vZHVsZXMvZ2FsbGVyeS5qcyIsIm1vZHVsZS5leHBvcnRzID0galF1ZXJ5O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwialF1ZXJ5XCJcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==