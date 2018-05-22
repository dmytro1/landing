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
	//NodeList.prototype.__proto__ = jQuery.prototype.animate();
	
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
	            var navbar = $('.navbar-default');
	            navbar.style.backgroundColor = 'rgba(48, 48, 48, 0.5)';
	            navbar.classList.add('top-nav-collapse');
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
	        var closeBtn = $('.close-btn');
	        closeBtn.classList.add('showing');
	        if ($$('.collapse-section.showing').length) {
	            closeBtn.classList.remove('showing');
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
	            closeBtn.classList.add('showing');
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
	            if (userChoice.hasOwnProperty(parameter) && userChoice[parameter] === "") {
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
	                if (variation.hasOwnProperty(_parameter)) {
	                    variationsWithoutPrice[_parameter] = variation[_parameter];
	                }
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
	        var userChoice = window.userChoice;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNGQ0NTkxMTE1MmQ0ODU5YmQwNmEiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NyYy9qYXZhc2NyaXB0cy9jb21tb24uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NyYy9qYXZhc2NyaXB0cy9tb2R1bGVzL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NyYy9qYXZhc2NyaXB0cy9tb2R1bGVzL3RvZ2dsZUNob29zZVNlY3Rpb25zLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zcmMvamF2YXNjcmlwdHMvbW9kdWxlcy9vbkNoYW5nZVNlbGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3JjL2phdmFzY3JpcHRzL21vZHVsZXMvY2hlY2tvdXRCdG4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NyYy9qYXZhc2NyaXB0cy9tb2R1bGVzL2FkZE9yZGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zcmMvamF2YXNjcmlwdHMvbW9kdWxlcy92YWxpZGF0aW9uLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zcmMvamF2YXNjcmlwdHMvbW9kdWxlcy9nYWxsZXJ5LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImpRdWVyeVwiIl0sIm5hbWVzIjpbIiQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJiaW5kIiwiJCQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiTm9kZSIsInByb3RvdHlwZSIsIm9uIiwid2luZG93IiwibmFtZSIsImZuIiwiYWRkRXZlbnRMaXN0ZW5lciIsIk5vZGVMaXN0IiwiX19wcm90b19fIiwiQXJyYXkiLCJEb2N1bWVudCIsImZvckVhY2giLCJlbGVtIiwialF1ZXJ5IiwiTWFpbk1ldGhvZHMiLCJzY3JvbGxFbGVtIiwicHJvcGVydHkiLCJkdXJhdGlvbiIsImFuaW1hdGUiLCJzY3JvbGxUb3AiLCJsYXp5U2Nyb2xsIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImlkIiwiZ2V0QXR0cmlidXRlIiwib2Zmc2V0Iiwib2Zmc2V0VG9wIiwibmF2YmFyVG9EZWZhdWx0Iiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJtZW51SXRlbSIsImkiLCJsZW5ndGgiLCJuYXZiYXJUb0Zsb2F0IiwibmF2YmFyIiwiYWRkIiwic2V0TmF2U3R5bGUiLCJwYWdlWU9mZnNldCIsImRpc3BsYXkiLCJvdXRlcldpZHRoIiwidG9nZ2xlIiwiY2xpY2siLCJzZWN0aW9ucyIsInRvZ2dsZUNob29zZVNlY3Rpb25zIiwiZWwiLCJjbG9zZUJ0biIsImRhdGFJRCIsInNlY3Rpb24iLCJjb2xsYXBzZVNlY3Rpb25zIiwidXNlckNob2ljZSIsIm9uQ2hhbmdlU2VsZWN0IiwiYWxsU2VsZWN0cyIsImlzTmFOIiwiaXRlbVNlbGVjdCIsInNlbGVjdERhdGEiLCJhdHRyaWJ1dGVzIiwiZGF0YSIsInZhbHVlIiwib3B0aW9ucyIsInNlbGVjdGVkSW5kZXgiLCJjb25zb2xlIiwibG9nIiwiY29tcGFyZSIsInByaW50UHJpY2UiLCJnZXRFbGVtZW50QnlJZCIsInByaW50TWVzc2FnZSIsImNoZWNrb3V0QnV0dG9uIiwicGFyYW1ldGVyIiwiaGFzT3duUHJvcGVydHkiLCJzZXRBdHRyaWJ1dGUiLCJpbm5lckhUTUwiLCJkaXNhYmxlZCIsInZhcmlhdGlvbnMiLCJ2YXJpYXRpb25zT2JqZWN0IiwiZGF0YUJ5SWQiLCJ2YXJpYXRpb24iLCJ2YXJpYXRpb25zV2l0aG91dFByaWNlIiwicHJpY2UiLCJKU09OIiwic3RyaW5naWZ5IiwiY2hlY2tvdXRCdG4iLCJxdWFudGl0eSIsInVzZXJDaG9pY2VUZXh0IiwiY2hvaWNlUHJpY2UiLCJjb250ZW50IiwiYWRkT3JkZXIiLCJjb250YWlucyIsImVsZW1lbnRIcmVmIiwidXNlck9yZGVyVGV4dCIsImlucHV0TmFtZSIsImlucHV0TGFzdE5hbWUiLCJpbnB1dEVtYWlsIiwiaW5wdXRQaG9uZSIsInRpdGxlIiwidGV4dENvbnRlbnQiLCJwcmljZVRhZyIsInJhbmRvbUlkIiwiTWF0aCIsInRydW5jIiwicmFuZG9tIiwicHJvZHVjdERhdGEiLCJwYXJhbV9wcmljZSIsImluZm9fZmlyc3RfbmFtZSIsImluZm9fbGFzdF9uYW1lIiwiaW5mb19waG9uZSIsImZldGNoIiwiYm9keSIsImhlYWRlcnMiLCJ3cEFwaVNldHRpbmdzIiwibm9uY2UiLCJtZXRob2QiLCJ0aGVuIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJzdGF0dXNUZXh0IiwiYWxlcnQiLCJjYXJvdXNlbCIsImNhdGNoIiwidmFsaWRhdG9yIiwiQ29uc3RydWN0b3IiLCJWRVJTSU9OIiwiZm9jdXMiLCJHYWxsZXJ5Iiwiem9vbSIsImltZ0NvbnRhaW5lciIsImltZyIsImdhbGxlcnkiLCJjb250YWluZXJIZWlnaHQiLCJvdXRlckhlaWdodCIsImhhc0NsYXNzIiwiY3NzIiwiYWRkQ2xhc3MiLCJkcmFnZ2FibGUiLCJkcmFnIiwidWkiLCJwb3NpdGlvbiIsImxlZnQiLCJtaW4iLCJ0b3AiLCJyZW1vdmVDbGFzcyIsInN3aXRjaCIsInRyaWdnZXIiLCJzcmMiLCJhdHRyIiwidGh1bWJzIiwic2libGluZ3MiLCJwYXJlbnQiLCJwcmV2IiwiY2hpbGRyZW4iLCJlYWNoIiwidHJpZ2dlckRhdGEiLCJnYWxsZXJ5SWQiLCJkZWxlZ2F0ZVRhcmdldCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7OztBQ2xCQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBMUJBOztBQUVBLEtBQU1BLElBQUlDLFNBQVNDLGFBQVQsQ0FBdUJDLElBQXZCLENBQTRCRixRQUE1QixDQUFWO0FBQ0EsS0FBTUcsS0FBS0gsU0FBU0ksZ0JBQVQsQ0FBMEJGLElBQTFCLENBQStCRixRQUEvQixDQUFYOztBQUVBSyxNQUFLQyxTQUFMLENBQWVDLEVBQWYsR0FBb0JDLE9BQU9ELEVBQVAsR0FBWSxVQUFVRSxJQUFWLEVBQWdCQyxFQUFoQixFQUFvQjtBQUNoRCxVQUFLQyxnQkFBTCxDQUFzQkYsSUFBdEIsRUFBNEJDLEVBQTVCO0FBQ0gsRUFGRDs7QUFJQUUsVUFBU04sU0FBVCxDQUFtQk8sU0FBbkIsR0FBK0JDLE1BQU1SLFNBQXJDLEMsQ0FBZ0Q7QUFDaERNLFVBQVNOLFNBQVQsQ0FBbUJPLFNBQW5CLEdBQStCRSxTQUFTVCxTQUF4QztBQUNBOztBQUVBTSxVQUFTTixTQUFULENBQW1CQyxFQUFuQixHQUF3QkssU0FBU04sU0FBVCxDQUFtQkssZ0JBQW5CLEdBQXNDLFVBQVVGLElBQVYsRUFBZ0JDLEVBQWhCLEVBQW9CO0FBQzlFLFVBQUtNLE9BQUwsQ0FBYSxVQUFDQyxJQUFELEVBQVU7QUFDbkJBLGNBQUtWLEVBQUwsQ0FBUUUsSUFBUixFQUFjQyxFQUFkO0FBQ0gsTUFGRDtBQUdILEVBSkQ7QUFLQTs7QUFXQVEsUUFBTyxZQUFZO0FBQ2YseUJBQUtuQixDQUFMLEVBQVFJLEVBQVI7QUFDQSx5Q0FBcUJKLENBQXJCLEVBQXdCSSxFQUF4QjtBQUNBLG1DQUFlSixDQUFmO0FBQ0EsZ0NBQVlBLENBQVo7QUFDQSw2QkFBU0EsQ0FBVDtBQUNBLCtCQUFXQSxDQUFYO0FBQ0E7QUFDSCxFQVJELEU7Ozs7Ozs7Ozs7OzttQkM3QmUsVUFBQ0EsQ0FBRCxFQUFJSSxFQUFKLEVBQVc7O0FBRXRCSyxZQUFPVyxXQUFQLEdBQXFCO0FBQ2pCQyxxQkFBWSxvQkFBVUMsUUFBVixFQUFvQkMsUUFBcEIsRUFBOEI7QUFDdENKLG9CQUFPLFlBQVAsRUFBcUJLLE9BQXJCLENBQTZCO0FBQ3pCQyw0QkFBV0g7QUFEYyxjQUE3QixFQUVHQyxRQUZIO0FBR0gsVUFMZ0I7QUFNakJHLHFCQUFZLHNCQUFZO0FBQ3BCQyxtQkFBTUMsY0FBTjtBQUNBLGlCQUFJQyxLQUFLLEtBQUtDLFlBQUwsQ0FBa0IsTUFBbEIsQ0FBVDtBQUNBLGlCQUFJQyxTQUFTL0IsRUFBRTZCLEVBQUYsRUFBTUcsU0FBbkI7QUFDQTtBQUNBLGlCQUFJSCxPQUFPLFNBQVgsRUFBc0I7QUFDbEJFLDJCQUFVLEVBQVY7QUFDSDtBQUNEWCx5QkFBWUMsVUFBWixDQUF1QlUsTUFBdkIsRUFBK0IsR0FBL0I7O0FBRUEsb0JBQU8sS0FBUDtBQUNILFVBakJnQjtBQWtCakJFLDBCQUFpQiwyQkFBWTtBQUN6QmpDLGVBQUUsaUJBQUYsRUFBcUJrQyxLQUFyQixDQUEyQkMsZUFBM0IsR0FBNkMsYUFBN0M7QUFDQW5DLGVBQUUsbUJBQUYsRUFBdUJvQyxTQUF2QixDQUFpQ0MsTUFBakMsQ0FBd0MsZ0JBQXhDO0FBQ0FyQyxlQUFFLG1CQUFGLEVBQXVCb0MsU0FBdkIsQ0FBaUNDLE1BQWpDLENBQXdDLGtCQUF4QztBQUNBLGlCQUFJQyxXQUFXbEMsR0FBRyxlQUFILENBQWY7QUFDQSxrQkFBSyxJQUFJbUMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJRCxTQUFTRSxNQUE3QixFQUFxQ0QsR0FBckMsRUFBMEM7QUFDdENELDBCQUFTQyxDQUFULEVBQVlILFNBQVosQ0FBc0JDLE1BQXRCLENBQTZCLE9BQTdCO0FBQ0g7QUFDSixVQTFCZ0I7QUEyQmpCSSx3QkFBZSx5QkFBWTtBQUN2QixpQkFBSUMsU0FBUzFDLEVBQUUsaUJBQUYsQ0FBYjtBQUNBMEMsb0JBQU9SLEtBQVAsQ0FBYUMsZUFBYixHQUErQix1QkFBL0I7QUFDQU8sb0JBQU9OLFNBQVAsQ0FBaUJPLEdBQWpCLENBQXFCLGtCQUFyQjtBQUNBM0MsZUFBRSxtQkFBRixFQUF1Qm9DLFNBQXZCLENBQWlDTyxHQUFqQyxDQUFxQyxnQkFBckM7QUFDQSxpQkFBSUwsV0FBV2xDLEdBQUcsZUFBSCxDQUFmO0FBQ0Esa0JBQUssSUFBSW1DLElBQUksQ0FBYixFQUFnQkEsSUFBSUQsU0FBU0UsTUFBN0IsRUFBcUNELEdBQXJDLEVBQTBDO0FBQ3RDRCwwQkFBU0MsQ0FBVCxFQUFZSCxTQUFaLENBQXNCTyxHQUF0QixDQUEwQixPQUExQjtBQUNIO0FBQ0osVUFwQ2dCO0FBcUNqQkMsc0JBQWEsdUJBQVk7QUFDckIsa0JBQUtILGFBQUw7QUFDQSxpQkFBSWhDLE9BQU9vQyxXQUFQLEdBQXFCLEVBQXpCLEVBQTZCO0FBQ3pCekIsNkJBQVlhLGVBQVo7QUFDSDtBQUNKO0FBMUNnQixNQUFyQjs7QUE2Q0F4QixZQUFPRCxFQUFQLENBQVUsTUFBVixFQUFrQixZQUFZO0FBQzFCUixXQUFFLGVBQUYsRUFBbUJrQyxLQUFuQixDQUF5QlksT0FBekIsR0FBbUMsTUFBbkM7QUFDQTlDLFdBQUUsU0FBRixFQUFha0MsS0FBYixDQUFtQlksT0FBbkIsR0FBNkIsTUFBN0I7QUFDSCxNQUhEOztBQUtBckMsWUFBT0QsRUFBUCxDQUFVLGtCQUFWLEVBQThCLFlBQVk7QUFDdEM7QUFDQVkscUJBQVl3QixXQUFaO0FBQ0FuQyxnQkFBT0QsRUFBUCxDQUFVLFFBQVYsRUFBb0IsWUFBWTtBQUM1QlkseUJBQVl3QixXQUFaO0FBQ0gsVUFGRDs7QUFJQTtBQUNBLGFBQUluQyxPQUFPc0MsVUFBUCxHQUFvQixHQUF4QixFQUE2QjtBQUN6QjtBQUNBL0MsZUFBRSxnQkFBRixFQUFvQlEsRUFBcEIsQ0FBdUIsT0FBdkIsRUFBZ0MsWUFBWTtBQUN4Q1ksNkJBQVlxQixhQUFaO0FBQ0F6QyxtQkFBRSxXQUFGLEVBQWVvQyxTQUFmLENBQXlCWSxNQUF6QixDQUFnQyxRQUFoQztBQUNILGNBSEQ7O0FBS0E7QUFDQTVDLGdCQUFHLDBCQUFILEVBQStCSSxFQUEvQixDQUFrQyxPQUFsQyxFQUEyQyxZQUFZO0FBQ25EUixtQkFBRSxnQkFBRixFQUFvQmlELEtBQXBCO0FBQ0gsY0FGRDtBQUdIOztBQUVEO0FBQ0E3QyxZQUFHLGFBQUgsRUFBa0JJLEVBQWxCLENBQXFCLE9BQXJCLEVBQThCWSxZQUFZTSxVQUExQztBQUNBdEIsWUFBRyxRQUFILEVBQWFJLEVBQWIsQ0FBZ0IsT0FBaEIsRUFBeUJZLFlBQVlNLFVBQXJDOztBQUVBO0FBQ0ExQixXQUFFLFlBQUYsRUFBZ0JRLEVBQWhCLENBQW1CLE9BQW5CLEVBQTRCLFlBQVk7QUFDcEMsaUJBQUkwQyxXQUFXOUMsR0FBRyxtQkFBSCxDQUFmO0FBQ0Esa0JBQUssSUFBSW1DLElBQUksQ0FBYixFQUFnQkEsSUFBSVcsU0FBU1YsTUFBN0IsRUFBcUNELEdBQXJDLEVBQTBDO0FBQ3RDVywwQkFBU1gsQ0FBVCxFQUFZSCxTQUFaLENBQXNCQyxNQUF0QixDQUE2QixTQUE3QjtBQUNIO0FBQ0Qsa0JBQUtELFNBQUwsQ0FBZUMsTUFBZixDQUFzQixTQUF0QjtBQUNILFVBTkQ7O0FBUUFsQixnQkFBTyxxQkFBUCxFQUE4QlgsRUFBOUIsQ0FBaUMsT0FBakMsRUFBMEMsWUFBWTtBQUNsRFkseUJBQVlDLFVBQVosQ0FBdUJyQixFQUFFLFNBQUYsRUFBYWdDLFNBQWIsR0FBeUIsRUFBaEQsRUFBb0QsR0FBcEQ7QUFDSCxVQUZEO0FBR0gsTUFyQ0Q7QUFzQ0gsRTs7Ozs7Ozs7Ozs7O21CQzFGYyxVQUFDaEMsQ0FBRCxFQUFJSSxFQUFKLEVBQVc7QUFDdEJLLFlBQU8wQyxvQkFBUCxHQUE4QixVQUFVQyxFQUFWLEVBQWM7QUFDeEMsYUFBSUMsV0FBV3JELEVBQUUsWUFBRixDQUFmO0FBQ0FxRCxrQkFBU2pCLFNBQVQsQ0FBbUJPLEdBQW5CLENBQXVCLFNBQXZCO0FBQ0EsYUFBSXZDLEdBQUcsMkJBQUgsRUFBZ0NvQyxNQUFwQyxFQUE0QztBQUN4Q2Esc0JBQVNqQixTQUFULENBQW1CQyxNQUFuQixDQUEwQixTQUExQjtBQUNIOztBQUVELGFBQUlpQixTQUFTRixHQUFHdEIsWUFBSCxDQUFnQixTQUFoQixDQUFiO0FBQ0EsYUFBSXlCLFVBQVV2RCxFQUFFLGNBQWNzRCxNQUFoQixDQUFkO0FBQ0EsYUFBSUUsbUJBQW1CcEQsR0FBRyxtQkFBSCxDQUF2QjtBQUNBLGNBQUssSUFBSW1DLElBQUksQ0FBYixFQUFnQkEsSUFBSWlCLGlCQUFpQmhCLE1BQXJDLEVBQTZDRCxHQUE3QyxFQUFrRDtBQUM5QyxpQkFBSSxFQUFFaUIsaUJBQWlCakIsQ0FBakIsRUFBb0JWLEVBQXBCLEtBQTJCMEIsUUFBUTFCLEVBQXJDLENBQUosRUFBOEM7QUFDMUMyQixrQ0FBaUJqQixDQUFqQixFQUFvQkgsU0FBcEIsQ0FBOEJDLE1BQTlCLENBQXFDLFNBQXJDO0FBQ0g7QUFDSjtBQUNEa0IsaUJBQVFuQixTQUFSLENBQWtCWSxNQUFsQixDQUF5QixTQUF6QjtBQUNBLGFBQUk1QyxHQUFHLDJCQUFILEVBQWdDb0MsTUFBcEMsRUFBNEM7QUFDeENhLHNCQUFTakIsU0FBVCxDQUFtQk8sR0FBbkIsQ0FBdUIsU0FBdkI7QUFDSDtBQUNKLE1BbkJEO0FBb0JILEU7Ozs7Ozs7Ozs7OzttQkNyQmMsVUFBQzNDLENBQUQsRUFBTztBQUNsQlMsWUFBT2dELFVBQVAsR0FBb0IsRUFBcEI7O0FBRUFoRCxZQUFPaUQsY0FBUCxHQUF3QixVQUFVTixFQUFWLEVBQWM7QUFDbEMsYUFBSUssYUFBYWhELE9BQU9nRCxVQUF4QjtBQUNBLGFBQUlILFNBQVNGLEdBQUd0QixZQUFILENBQWdCLE1BQWhCLENBQWI7QUFDQSxhQUFJNkIsYUFBYTFELFNBQVNJLGdCQUFULENBQTBCLFFBQTFCLENBQWpCOztBQUVBLGNBQUssSUFBSWtDLENBQVQsSUFBY29CLFVBQWQsRUFBMEI7O0FBRXRCLGlCQUFJQyxNQUFNckIsQ0FBTixDQUFKLEVBQWM7QUFDVjtBQUNIOztBQUVELGlCQUFJc0IsYUFBYUYsV0FBV3BCLENBQVgsQ0FBakI7QUFDQSxpQkFBSXVCLGFBQWFELFdBQVdFLFVBQVgsQ0FBc0JDLElBQXRCLENBQTJCQyxLQUE1Qzs7QUFFQSxpQkFBSUgsZUFBZVIsTUFBbkIsRUFBMkI7QUFDdkJHLDRCQUFXSSxXQUFXbkQsSUFBdEIsSUFBOEJtRCxXQUFXSyxPQUFYLENBQW1CTCxXQUFXTSxhQUE5QixFQUE2Q0YsS0FBM0U7QUFDSDtBQUNKOztBQUVERyxpQkFBUUMsR0FBUixDQUFZLHFCQUFaO0FBQ0FELGlCQUFRQyxHQUFSLENBQVlaLFVBQVo7O0FBRUFhLGlCQUFRYixVQUFSLEVBQW9CSCxNQUFwQjtBQUNILE1BdkJEOztBQXlCQSxjQUFTZ0IsT0FBVCxDQUFpQmIsVUFBakIsRUFBNkJILE1BQTdCLEVBQXFDOztBQUVqQyxhQUFJaUIsYUFBYXRFLFNBQVN1RSxjQUFULENBQXdCbEIsU0FBUyxRQUFqQyxDQUFqQjtBQUNBLGFBQUltQixlQUFlekUsRUFBRSxjQUFjc0QsTUFBaEIsQ0FBbkI7QUFDQSxhQUFJb0IsaUJBQWlCMUUsRUFBRSxjQUFjc0QsTUFBZCxHQUF1Qiw0QkFBekIsQ0FBckI7O0FBRUEsY0FBSyxJQUFJcUIsU0FBVCxJQUFzQmxCLFVBQXRCLEVBQWtDO0FBQzlCLGlCQUFJQSxXQUFXbUIsY0FBWCxDQUEwQkQsU0FBMUIsS0FBd0NsQixXQUFXa0IsU0FBWCxNQUEwQixFQUF0RSxFQUEwRTtBQUN0RUosNEJBQVdNLFlBQVgsQ0FBd0IsWUFBeEIsRUFBc0MsRUFBdEM7QUFDQU4sNEJBQVdPLFNBQVgsR0FBdUIsUUFBdkI7QUFDQVYseUJBQVFDLEdBQVIsQ0FBWSxnQkFBZ0JNLFNBQTVCO0FBQ0FGLDhCQUFhSyxTQUFiLEdBQXlCLGdCQUFnQkgsU0FBekM7QUFDQUQsZ0NBQWVLLFFBQWYsR0FBMEIsSUFBMUI7QUFDQTtBQUNIO0FBQ0o7O0FBRUQsYUFBSUMsYUFBYUMsaUJBQWlCQyxRQUFqQixDQUEwQjVCLE1BQTFCLENBQWpCOztBQUVBYyxpQkFBUUMsR0FBUixDQUFZLG9CQUFaO0FBQ0FELGlCQUFRQyxHQUFSLENBQVlXLFVBQVo7O0FBRUEsY0FBSyxJQUFJekMsQ0FBVCxJQUFjeUMsVUFBZCxFQUEwQjtBQUN0QixpQkFBSUcsWUFBWUgsV0FBV3pDLENBQVgsQ0FBaEI7QUFDQSxpQkFBSTZDLHlCQUF5QixFQUE3Qjs7QUFFQSxrQkFBSyxJQUFJVCxVQUFULElBQXNCUSxTQUF0QixFQUFpQztBQUM3QixxQkFBSUEsVUFBVVAsY0FBVixDQUF5QkQsVUFBekIsQ0FBSixFQUF5QztBQUNyQ1MsNENBQXVCVCxVQUF2QixJQUFvQ1EsVUFBVVIsVUFBVixDQUFwQztBQUNIO0FBQ0o7O0FBRUQsb0JBQU9TLHVCQUF1QkMsS0FBOUI7O0FBRUEsaUJBQUlDLEtBQUtDLFNBQUwsQ0FBZTlCLFVBQWYsTUFBK0I2QixLQUFLQyxTQUFMLENBQWVILHNCQUFmLENBQW5DLEVBQTJFO0FBQ3ZFaEIseUJBQVFDLEdBQVIsQ0FBWWMsVUFBVUUsS0FBdEI7QUFDQWQsNEJBQVdNLFlBQVgsQ0FBd0IsWUFBeEIsRUFBc0NNLFVBQVVFLEtBQWhEO0FBQ0FkLDRCQUFXTyxTQUFYLEdBQXVCLDJCQUEyQkssVUFBVUUsS0FBckMsR0FBNkMsUUFBcEU7QUFDQVosOEJBQWFLLFNBQWIsR0FBeUIsRUFBekI7QUFDQUosZ0NBQWVLLFFBQWYsR0FBMEIsS0FBMUI7QUFDQTtBQUNILGNBUEQsTUFPTztBQUNIUiw0QkFBV00sWUFBWCxDQUF3QixZQUF4QixFQUFzQyxFQUF0QztBQUNBVCx5QkFBUUMsR0FBUixDQUFZLHdCQUFaO0FBQ0FFLDRCQUFXTyxTQUFYLEdBQXVCLGNBQXZCO0FBQ0FMLDhCQUFhSyxTQUFiLEdBQXlCLHdCQUF6QjtBQUNBSixnQ0FBZUssUUFBZixHQUEwQixJQUExQjtBQUNIO0FBQ0o7QUFDSjtBQUNKLEU7Ozs7Ozs7Ozs7OzttQkM5RWMsVUFBQy9FLENBQUQsRUFBTztBQUNsQlMsWUFBTytFLFdBQVAsR0FBcUIsVUFBVXBDLEVBQVYsRUFBYztBQUMvQixhQUFJSyxhQUFhaEQsT0FBT2dELFVBQXhCO0FBQ0FyQyxxQkFBWUMsVUFBWixDQUF1QnJCLEVBQUUsU0FBRixFQUFhZ0MsU0FBYixHQUF5QixFQUFoRCxFQUFvRCxHQUFwRDtBQUNBLGFBQUlzQixTQUFTRixHQUFHdEIsWUFBSCxDQUFnQixTQUFoQixDQUFiO0FBQ0EsYUFBSTJELFdBQVd6RixFQUFFLGNBQWNzRCxNQUFkLEdBQXVCLFlBQXpCLENBQWY7QUFDQSxhQUFJb0MsaUJBQWlCMUYsRUFBRSxjQUFjc0QsTUFBZCxHQUF1QixlQUF6QixDQUFyQjtBQUNBLGFBQUlxQyxjQUFjMUYsU0FBU3VFLGNBQVQsQ0FBd0JsQixTQUFTLFFBQWpDLEVBQTJDeEIsWUFBM0MsQ0FBd0QsWUFBeEQsQ0FBbEI7QUFDQSxhQUFJOEQsVUFBVSxFQUFkO0FBQ0EsY0FBSyxJQUFJckQsQ0FBVCxJQUFja0IsVUFBZCxFQUEwQjtBQUN0Qm1DLHdCQUFXLFFBQVFyRCxDQUFSLEdBQVksSUFBWixHQUFtQmtCLFdBQVdsQixDQUFYLENBQW5CLEdBQW1DLE1BQTlDO0FBQ0g7QUFDRHFELG9CQUFXLGVBQWVELFdBQTFCO0FBQ0FDLG9CQUFXLGtCQUFrQkgsU0FBU3hCLEtBQXRDO0FBQ0F5Qix3QkFBZVosU0FBZixHQUEyQmMsT0FBM0I7QUFDSCxNQWREO0FBZUgsRTs7Ozs7Ozs7Ozs7O21CQ2hCYyxVQUFDNUYsQ0FBRCxFQUFPO0FBQ2xCUyxZQUFPb0YsUUFBUCxHQUFrQixVQUFVekMsRUFBVixFQUFjO0FBQzVCLGFBQUlLLGFBQWFoRCxPQUFPZ0QsVUFBeEI7QUFDQSxhQUFJTCxHQUFHaEIsU0FBSCxDQUFhMEQsUUFBYixDQUFzQixVQUF0QixDQUFKLEVBQXVDO0FBQ25DO0FBQ0g7QUFDRDFFLHFCQUFZQyxVQUFaLENBQXVCckIsRUFBRSxTQUFGLEVBQWFnQyxTQUFiLEdBQXlCLEVBQWhELEVBQW9ELEdBQXBEOztBQUVBLGFBQUlzQixTQUFTRixHQUFHdEIsWUFBSCxDQUFnQixTQUFoQixDQUFiO0FBQ0EsYUFBSTJELFdBQVd6RixFQUFFLGNBQWNzRCxNQUFkLEdBQXVCLFlBQXpCLENBQWY7QUFDQSxhQUFJeUMsY0FBYzNDLEdBQUd0QixZQUFILENBQWdCLE1BQWhCLENBQWxCO0FBQ0EsYUFBSWtFLGdCQUFnQmhHLEVBQUUsY0FBY3NELE1BQWQsR0FBdUIsY0FBekIsQ0FBcEI7QUFDQSxhQUFJMkMsWUFBWWpHLEVBQUUsV0FBV3NELE1BQVgsR0FBb0IsMkJBQXRCLENBQWhCO0FBQ0EsYUFBSTRDLGdCQUFnQmxHLEVBQUUsV0FBV3NELE1BQVgsR0FBb0IsMEJBQXRCLENBQXBCO0FBQ0EsYUFBSTZDLGFBQWFuRyxFQUFFLFdBQVdzRCxNQUFYLEdBQW9CLHNCQUF0QixDQUFqQjtBQUNBLGFBQUk4QyxhQUFhcEcsRUFBRSxXQUFXc0QsTUFBWCxHQUFvQixzQkFBdEIsQ0FBakI7O0FBRUEsYUFBSStDLFFBQVFwRyxTQUFTdUUsY0FBVCxDQUF3QnBCLEdBQUcxQyxJQUEzQixFQUFpQzRGLFdBQTdDOztBQUVBLGFBQUlDLFdBQVd0RyxTQUFTdUUsY0FBVCxDQUF3QmxCLFNBQVMsUUFBakMsQ0FBZjtBQUNBLGFBQUkrQixRQUFRa0IsU0FBU3pFLFlBQVQsQ0FBc0IsWUFBdEIsQ0FBWjtBQUNBLGFBQUkwRSxXQUFXQyxLQUFLQyxLQUFMLENBQVlELEtBQUtFLE1BQUwsS0FBZ0IsTUFBNUIsQ0FBZjtBQUNBLGFBQUlDLGNBQWM7QUFDZCxzQkFBU1AsUUFBUSxJQUFSLEdBQWVHLFFBQWYsR0FBMEIsR0FEckI7QUFFZCx3QkFBV2xCLEtBQUtDLFNBQUwsQ0FBZTlCLFVBQWYsSUFBNkIsV0FBN0IsR0FBMkM0QixLQUEzQyxHQUFtRCxlQUFuRCxHQUFxRUksU0FBU3hCLEtBQTlFLEdBQXNGLEdBRm5GO0FBR2QsdUJBQVU7QUFISSxVQUFsQjs7QUFNQSxjQUFLLElBQUkxQixDQUFULElBQWNrQixVQUFkLEVBQTBCO0FBQ3RCbUQseUJBQVksV0FBV3JFLENBQXZCLElBQTRCa0IsV0FBV2xCLENBQVgsQ0FBNUI7QUFDSDs7QUFFRHFFLHFCQUFZLGFBQVosSUFBNkJ2QixLQUE3QjtBQUNBdUIscUJBQVksZ0JBQVosSUFBZ0NuQixTQUFTeEIsS0FBekM7QUFDQTJDLHFCQUFZLGlCQUFaLElBQWlDWCxVQUFVaEMsS0FBM0M7QUFDQTJDLHFCQUFZLGdCQUFaLElBQWdDVixjQUFjakMsS0FBOUM7QUFDQTJDLHFCQUFZLFlBQVosSUFBNEJULFdBQVdsQyxLQUF2QztBQUNBMkMscUJBQVksWUFBWixJQUE0QlIsV0FBV25DLEtBQXZDOztBQUVBRyxpQkFBUUMsR0FBUixDQUFZdUMsV0FBWjs7QUFFQSxhQUFJaEIsVUFBVSxFQUFkOztBQUVBLGNBQUssSUFBSXJELEVBQVQsSUFBY2tCLFVBQWQsRUFBMEI7QUFDdEJtQyx3QkFBVyxRQUFRckQsRUFBUixHQUFZLElBQVosR0FBbUJrQixXQUFXbEIsRUFBWCxDQUFuQixHQUFtQyxNQUE5QztBQUNIO0FBQ0RxRCxvQkFBVyxlQUFlZ0IsWUFBWUMsV0FBM0IsR0FBeUMsTUFBcEQ7QUFDQWpCLG9CQUFXLGtCQUFrQkgsU0FBU3hCLEtBQTNCLEdBQW1DLE1BQTlDO0FBQ0EyQixvQkFBVyxxQkFBc0JILFNBQVN4QixLQUFULEdBQWlCMkMsWUFBWUMsV0FBbkQsR0FBa0UsTUFBN0U7QUFDQWpCLG9CQUFXLG9CQUFvQmdCLFlBQVlFLGVBQWhDLEdBQWtELE1BQTdEO0FBQ0FsQixvQkFBVyxtQkFBbUJnQixZQUFZRyxjQUEvQixHQUFnRCxNQUEzRDtBQUNBbkIsb0JBQVcsZUFBZWdCLFlBQVlJLFVBQTNCLEdBQXdDLE1BQW5EOztBQUVBckYsZUFBTUMsY0FBTjs7QUFHQXFGLGVBQU0sMkJBQU4sRUFBbUM7QUFDL0JDLG1CQUFNNUIsS0FBS0MsU0FBTCxDQUFlcUIsV0FBZixDQUR5QjtBQUUvQjtBQUNBO0FBQ0FPLHNCQUFTO0FBQ0wsK0JBQWNDLGNBQWNDLEtBRHZCO0FBRUwsaUNBQWdCO0FBRlgsY0FKc0I7QUFRL0JDLHFCQUFRO0FBUnVCLFVBQW5DLEVBVUtDLElBVkwsQ0FVVSxVQUFVQyxRQUFWLEVBQW9CO0FBQ3RCcEQscUJBQVFDLEdBQVIsQ0FBWW1ELFFBQVo7O0FBRUEsaUJBQUlBLFNBQVNDLE1BQVQsS0FBb0IsR0FBeEIsRUFBNkI7QUFDekJyRCx5QkFBUUMsR0FBUixDQUFZLGNBQWNtRCxTQUFTQyxNQUF2QixHQUFnQyxHQUFoQyxHQUFzQ0QsU0FBU0UsVUFBM0Q7QUFDQUMsdUJBQU0sY0FBY0gsU0FBU0MsTUFBdkIsR0FBZ0MsR0FBaEMsR0FBc0NELFNBQVNFLFVBQXJEO0FBQ0E7QUFDSDs7QUFFRCxpQkFBSUYsU0FBU0MsTUFBVCxLQUFvQixHQUF4QixFQUE2QjtBQUN6QjdCLDRCQUFXLFNBQVM0QixTQUFTRSxVQUFsQixHQUErQixxQkFBMUM7QUFDQXZHLHdCQUFPNEUsV0FBUCxFQUFvQjZCLFFBQXBCLENBQTZCLE1BQTdCO0FBQ0E1QiwrQkFBY2xCLFNBQWQsR0FBMEJjLE9BQTFCO0FBQ0F4Qix5QkFBUUMsR0FBUixDQUFZbUQsU0FBU0UsVUFBVCxHQUFzQixxQkFBbEM7QUFDQUMsdUJBQU1ILFNBQVNFLFVBQVQsR0FBc0IscUJBQTVCO0FBQ0g7QUFDSixVQTFCTCxFQTJCS0csS0EzQkwsQ0EyQldGLEtBM0JYO0FBNEJILE1BbkZEO0FBb0ZILEU7Ozs7Ozs7Ozs7OzttQkNyRmMsWUFBTTtBQUNqQnZELGFBQVFDLEdBQVIsQ0FBWSw2QkFBWixFQUEyQ2xELE9BQU9SLEVBQVAsQ0FBVW1ILFNBQVYsQ0FBb0JDLFdBQXBCLENBQWdDQyxPQUEzRTtBQUNBN0csWUFBTyxNQUFQLEVBQWUyRyxTQUFmLENBQXlCO0FBQ3JCRyxnQkFBTztBQUNQO0FBRnFCLE1BQXpCO0FBSUgsRTs7Ozs7Ozs7Ozs7O0FDTkQ7Ozs7OzttQkFFZSxZQUFNO0FBQ2pCLFNBQUlDLFVBQVU7QUFDVkMsZUFBTSxjQUFVQyxZQUFWLEVBQXdCQyxHQUF4QixFQUE2QkMsT0FBN0IsRUFBc0M7QUFDeEMsaUJBQUlDLGtCQUFrQkgsYUFBYUksV0FBYixFQUF0QjtBQUNBLGlCQUFJLENBQUNGLFFBQVFHLFFBQVIsQ0FBaUIsV0FBakIsQ0FBTCxFQUFvQztBQUNoQ0wsOEJBQWFNLEdBQWIsQ0FBaUIsUUFBakIsRUFBMkJILGVBQTNCO0FBQ0FELHlCQUFRSyxRQUFSLENBQWlCLFdBQWpCOztBQUVBTixxQkFBSU8sU0FBSixDQUFjO0FBQ1ZDLDJCQUFNLGNBQVVsSCxLQUFWLEVBQWlCbUgsRUFBakIsRUFBcUI7QUFDdkJBLDRCQUFHQyxRQUFILENBQVlDLElBQVosR0FBbUJ2QyxLQUFLd0MsR0FBTCxDQUFTLEdBQVQsRUFBY0gsR0FBR0MsUUFBSCxDQUFZQyxJQUExQixDQUFuQjtBQUNBRiw0QkFBR0MsUUFBSCxDQUFZRyxHQUFaLEdBQWtCekMsS0FBS3dDLEdBQUwsQ0FBUyxHQUFULEVBQWNILEdBQUdDLFFBQUgsQ0FBWUcsR0FBMUIsQ0FBbEI7QUFDSDtBQUpTLGtCQUFkO0FBTUgsY0FWRCxNQVVPO0FBQ0hkLDhCQUFhTSxHQUFiLENBQWlCLFFBQWpCLEVBQTJCLE1BQTNCO0FBQ0FKLHlCQUFRYSxXQUFSLENBQW9CLFdBQXBCO0FBQ0g7QUFDSixVQWpCUztBQWtCVkMsaUJBQVEsaUJBQVVDLE9BQVYsRUFBbUJqQixZQUFuQixFQUFpQ0UsT0FBakMsRUFBMEM7QUFDOUMsaUJBQUlnQixNQUFNRCxRQUFRRSxJQUFSLENBQWEsTUFBYixDQUFWO0FBQUEsaUJBQ0lDLFNBQVNILFFBQVFJLFFBQVIsRUFEYjtBQUFBLGlCQUVJcEIsTUFBTWdCLFFBQVFLLE1BQVIsR0FBaUJDLElBQWpCLEdBQXdCQyxRQUF4QixFQUZWOztBQUlBUCxxQkFBUVYsUUFBUixDQUFpQixXQUFqQjs7QUFFQWEsb0JBQU9LLElBQVAsQ0FBWSxZQUFZO0FBQ3BCLHFCQUFJLHNCQUFFLElBQUYsRUFBUXBCLFFBQVIsQ0FBaUIsV0FBakIsQ0FBSixFQUFtQztBQUMvQiwyQ0FBRSxJQUFGLEVBQVFVLFdBQVIsQ0FBb0IsV0FBcEI7QUFDSDtBQUNKLGNBSkQ7O0FBTUEsaUJBQUliLFFBQVFHLFFBQVIsQ0FBaUIsV0FBakIsQ0FBSixFQUFtQztBQUMvQkgseUJBQVFhLFdBQVIsQ0FBb0IsV0FBcEI7QUFDQWYsOEJBQWFNLEdBQWIsQ0FBaUIsUUFBakIsRUFBMkIsTUFBM0I7QUFDSDs7QUFFRDtBQUNBTCxpQkFBSWtCLElBQUosQ0FBUyxLQUFULEVBQWdCRCxHQUFoQjtBQUNIO0FBdENTLE1BQWQ7O0FBeUNBLFNBQUloQixVQUFVLHNCQUFFLFVBQUYsQ0FBZDtBQUNBQSxhQUFROUgsRUFBUixDQUFXLE9BQVgsRUFBb0IsR0FBcEIsRUFBeUIsVUFBVW1CLEtBQVYsRUFBaUI7QUFDdEMsYUFBSTBILFVBQVUsc0JBQUUsSUFBRixDQUFkO0FBQ0EsYUFBSVMsY0FBY1QsUUFBUXJGLElBQVIsQ0FBYSxTQUFiLENBQWxCO0FBQ0EsYUFBSStGLFlBQVlwSSxNQUFNcUksY0FBTixDQUFxQm5JLEVBQXJDO0FBQ0F5RyxtQkFBVSxzQkFBRSxNQUFNeUIsU0FBUixDQUFWOztBQUVBLGFBQUlELGdCQUFnQixNQUFwQixFQUE0QjtBQUN4QixpQkFBSTFCLGVBQWVpQixRQUFRSyxNQUFSLEVBQW5CO0FBQUEsaUJBQ0lyQixNQUFNZ0IsUUFBUUksUUFBUixFQURWO0FBRUF2QixxQkFBUUMsSUFBUixDQUFhQyxZQUFiLEVBQTJCQyxHQUEzQixFQUFnQ0MsT0FBaEM7QUFDSCxVQUpELE1BSU8sSUFBSXdCLGdCQUFnQixPQUFwQixFQUE2QjtBQUNoQyxpQkFBSTFCLGdCQUFlaUIsUUFBUUssTUFBUixHQUFpQkQsUUFBakIsRUFBbkI7QUFDQXZCLHFCQUFRa0IsTUFBUixDQUFlQyxPQUFmLEVBQXdCakIsYUFBeEIsRUFBc0NFLE9BQXRDO0FBQ0gsVUFITSxNQUdBO0FBQ0g7QUFDSDtBQUNEM0csZUFBTUMsY0FBTjtBQUNILE1BakJEO0FBa0JILEU7Ozs7OztBQy9ERCx5QiIsImZpbGUiOiJjb21tb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA0ZDQ1OTExMTUyZDQ4NTliZDA2YSIsIi8vIGltcG9ydCAkIGZyb20gXCJqcXVlcnlcIjtcclxuXHJcbmNvbnN0ICQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yLmJpbmQoZG9jdW1lbnQpO1xyXG5jb25zdCAkJCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwuYmluZChkb2N1bWVudCk7XHJcblxyXG5Ob2RlLnByb3RvdHlwZS5vbiA9IHdpbmRvdy5vbiA9IGZ1bmN0aW9uIChuYW1lLCBmbikge1xyXG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKG5hbWUsIGZuKTtcclxufTtcclxuXHJcbk5vZGVMaXN0LnByb3RvdHlwZS5fX3Byb3RvX18gPSBBcnJheS5wcm90b3R5cGU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcclxuTm9kZUxpc3QucHJvdG90eXBlLl9fcHJvdG9fXyA9IERvY3VtZW50LnByb3RvdHlwZTtcclxuLy9Ob2RlTGlzdC5wcm90b3R5cGUuX19wcm90b19fID0galF1ZXJ5LnByb3RvdHlwZS5hbmltYXRlKCk7XHJcblxyXG5Ob2RlTGlzdC5wcm90b3R5cGUub24gPSBOb2RlTGlzdC5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uIChuYW1lLCBmbikge1xyXG4gICAgdGhpcy5mb3JFYWNoKChlbGVtKSA9PiB7XHJcbiAgICAgICAgZWxlbS5vbihuYW1lLCBmbik7XHJcbiAgICB9KTtcclxufTtcclxuLy9leHBvcnQgeyQsICQkfTtcclxuXHJcbmltcG9ydCBtYWluIGZyb20gXCIuL21vZHVsZXMvbWFpblwiO1xyXG5pbXBvcnQgdG9nZ2xlQ2hvb3NlU2VjdGlvbnMgZnJvbSBcIi4vbW9kdWxlcy90b2dnbGVDaG9vc2VTZWN0aW9uc1wiO1xyXG5pbXBvcnQgb25DaGFuZ2VTZWxlY3QgZnJvbSBcIi4vbW9kdWxlcy9vbkNoYW5nZVNlbGVjdFwiO1xyXG5pbXBvcnQgY2hlY2tvdXRCdG4gZnJvbSBcIi4vbW9kdWxlcy9jaGVja291dEJ0blwiO1xyXG5pbXBvcnQgYWRkT3JkZXIgZnJvbSBcIi4vbW9kdWxlcy9hZGRPcmRlclwiO1xyXG5pbXBvcnQgdmFsaWRhdGlvbiBmcm9tIFwiLi9tb2R1bGVzL3ZhbGlkYXRpb25cIjtcclxuaW1wb3J0IGdhbGxlcnkgZnJvbSBcIi4vbW9kdWxlcy9nYWxsZXJ5XCI7XHJcblxyXG5cclxualF1ZXJ5KGZ1bmN0aW9uICgpIHtcclxuICAgIG1haW4oJCwgJCQpO1xyXG4gICAgdG9nZ2xlQ2hvb3NlU2VjdGlvbnMoJCwgJCQpO1xyXG4gICAgb25DaGFuZ2VTZWxlY3QoJCk7XHJcbiAgICBjaGVja291dEJ0bigkKTtcclxuICAgIGFkZE9yZGVyKCQpO1xyXG4gICAgdmFsaWRhdGlvbigkKTtcclxuICAgIGdhbGxlcnkoKTtcclxufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL3NyYy9qYXZhc2NyaXB0cy9jb21tb24uanMiLCJleHBvcnQgZGVmYXVsdCAoJCwgJCQpID0+IHtcclxuXHJcbiAgICB3aW5kb3cuTWFpbk1ldGhvZHMgPSB7XHJcbiAgICAgICAgc2Nyb2xsRWxlbTogZnVuY3Rpb24gKHByb3BlcnR5LCBkdXJhdGlvbikge1xyXG4gICAgICAgICAgICBqUXVlcnkoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcclxuICAgICAgICAgICAgICAgIHNjcm9sbFRvcDogcHJvcGVydHlcclxuICAgICAgICAgICAgfSwgZHVyYXRpb24pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbGF6eVNjcm9sbDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBsZXQgaWQgPSB0aGlzLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xyXG4gICAgICAgICAgICBsZXQgb2Zmc2V0ID0gJChpZCkub2Zmc2V0VG9wO1xyXG4gICAgICAgICAgICAvL2RvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdodG1sJylbMF0uYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgIGlmIChpZCA9PT0gXCIjY2hvb3NlXCIpIHtcclxuICAgICAgICAgICAgICAgIG9mZnNldCAtPSA1MDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBNYWluTWV0aG9kcy5zY3JvbGxFbGVtKG9mZnNldCwgNzAwKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG5hdmJhclRvRGVmYXVsdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKCcubmF2YmFyLWRlZmF1bHQnKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAndHJhbnNwYXJlbnQnO1xyXG4gICAgICAgICAgICAkKCcubmF2YmFyLWJyYW5kIGltZycpLmNsYXNzTGlzdC5yZW1vdmUoJ2ltZ19yZXNwb25zaXZlJyk7XHJcbiAgICAgICAgICAgICQoJy5uYXZiYXItZml4ZWQtdG9wJykuY2xhc3NMaXN0LnJlbW92ZSgndG9wLW5hdi1jb2xsYXBzZScpO1xyXG4gICAgICAgICAgICBsZXQgbWVudUl0ZW0gPSAkJCgnLm5hdmJhci1uYXYgYScpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1lbnVJdGVtLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBtZW51SXRlbVtpXS5jbGFzc0xpc3QucmVtb3ZlKCd3aGl0ZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBuYXZiYXJUb0Zsb2F0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGxldCBuYXZiYXIgPSAkKCcubmF2YmFyLWRlZmF1bHQnKTtcclxuICAgICAgICAgICAgbmF2YmFyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZ2JhKDQ4LCA0OCwgNDgsIDAuNSknO1xyXG4gICAgICAgICAgICBuYXZiYXIuY2xhc3NMaXN0LmFkZCgndG9wLW5hdi1jb2xsYXBzZScpO1xyXG4gICAgICAgICAgICAkKCcubmF2YmFyLWJyYW5kIGltZycpLmNsYXNzTGlzdC5hZGQoJ2ltZ19yZXNwb25zaXZlJyk7XHJcbiAgICAgICAgICAgIGxldCBtZW51SXRlbSA9ICQkKCcubmF2YmFyLW5hdiBhJyk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWVudUl0ZW0ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIG1lbnVJdGVtW2ldLmNsYXNzTGlzdC5hZGQoJ3doaXRlJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldE5hdlN0eWxlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMubmF2YmFyVG9GbG9hdCgpO1xyXG4gICAgICAgICAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0IDwgNTApIHtcclxuICAgICAgICAgICAgICAgIE1haW5NZXRob2RzLm5hdmJhclRvRGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgIH07XHJcblxyXG4gICAgd2luZG93Lm9uKCdsb2FkJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoJy5sb2FkZXJfaW5uZXInKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgJCgnLmxvYWRlcicpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIH0pO1xyXG5cclxuICAgIHdpbmRvdy5vbignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvL05hdmJhciBzdHlsZSBzd2l0Y2hlclxyXG4gICAgICAgIE1haW5NZXRob2RzLnNldE5hdlN0eWxlKCk7XHJcbiAgICAgICAgd2luZG93Lm9uKCdzY3JvbGwnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIE1haW5NZXRob2RzLnNldE5hdlN0eWxlKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vRk9SIE1PQklMRVxyXG4gICAgICAgIGlmICh3aW5kb3cub3V0ZXJXaWR0aCA8IDc2OCkge1xyXG4gICAgICAgICAgICAvL1NBTkRXSUNIIEJVVFRPTlxyXG4gICAgICAgICAgICAkKCcubmF2YmFyLXRvZ2dsZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIE1haW5NZXRob2RzLm5hdmJhclRvRmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICQoJy5zYW5kd2ljaCcpLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vSElERSBNRU5VIENMSUNLSU5HIExJXHJcbiAgICAgICAgICAgICQkKCcubmF2YmFyLWNvbGxhcHNlIHVsIGxpIGEnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAkKCcubmF2YmFyLXRvZ2dsZScpLmNsaWNrKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9MQVpZIEFOSU1BVElORyBGT1IgQlVUVE9OUyBBTkQgTUVOVSBJVEVNU1xyXG4gICAgICAgICQkKCcuc2Nyb2xsX2J0bicpLm9uKCdjbGljaycsIE1haW5NZXRob2RzLmxhenlTY3JvbGwpO1xyXG4gICAgICAgICQkKCcubmF2IGEnKS5vbignY2xpY2snLCBNYWluTWV0aG9kcy5sYXp5U2Nyb2xsKTtcclxuXHJcbiAgICAgICAgLy9DTE9TRSBCVVRUT04gWFxyXG4gICAgICAgICQoJy5jbG9zZS1idG4nKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGxldCBzZWN0aW9ucyA9ICQkKCcuY29sbGFwc2Utc2VjdGlvbicpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlY3Rpb25zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBzZWN0aW9uc1tpXS5jbGFzc0xpc3QucmVtb3ZlKCdzaG93aW5nJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5jbGFzc0xpc3QucmVtb3ZlKCdzaG93aW5nJyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGpRdWVyeSgnW2RhdGEtc2xpZGU9XCJwcmV2XCJdJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBNYWluTWV0aG9kcy5zY3JvbGxFbGVtKCQoXCIjY2hvb3NlXCIpLm9mZnNldFRvcCAtIDUwLCAxMDApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL3NyYy9qYXZhc2NyaXB0cy9tb2R1bGVzL21haW4uanMiLCJleHBvcnQgZGVmYXVsdCAoJCwgJCQpID0+IHtcclxuICAgIHdpbmRvdy50b2dnbGVDaG9vc2VTZWN0aW9ucyA9IGZ1bmN0aW9uIChlbCkge1xyXG4gICAgICAgIGxldCBjbG9zZUJ0biA9ICQoJy5jbG9zZS1idG4nKTtcclxuICAgICAgICBjbG9zZUJ0bi5jbGFzc0xpc3QuYWRkKCdzaG93aW5nJyk7XHJcbiAgICAgICAgaWYgKCQkKCcuY29sbGFwc2Utc2VjdGlvbi5zaG93aW5nJykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGNsb3NlQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3dpbmcnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBkYXRhSUQgPSBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcclxuICAgICAgICBsZXQgc2VjdGlvbiA9ICQoJyNzZWN0aW9uLScgKyBkYXRhSUQpO1xyXG4gICAgICAgIGxldCBjb2xsYXBzZVNlY3Rpb25zID0gJCQoJy5jb2xsYXBzZS1zZWN0aW9uJyk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2xsYXBzZVNlY3Rpb25zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICghKGNvbGxhcHNlU2VjdGlvbnNbaV0uaWQgPT09IHNlY3Rpb24uaWQpKSB7XHJcbiAgICAgICAgICAgICAgICBjb2xsYXBzZVNlY3Rpb25zW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3dpbmcnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBzZWN0aW9uLmNsYXNzTGlzdC50b2dnbGUoJ3Nob3dpbmcnKTtcclxuICAgICAgICBpZiAoJCQoJy5jb2xsYXBzZS1zZWN0aW9uLnNob3dpbmcnKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgY2xvc2VCdG4uY2xhc3NMaXN0LmFkZCgnc2hvd2luZycpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvc3JjL2phdmFzY3JpcHRzL21vZHVsZXMvdG9nZ2xlQ2hvb3NlU2VjdGlvbnMuanMiLCJleHBvcnQgZGVmYXVsdCAoJCkgPT4ge1xyXG4gICAgd2luZG93LnVzZXJDaG9pY2UgPSB7fTtcclxuXHJcbiAgICB3aW5kb3cub25DaGFuZ2VTZWxlY3QgPSBmdW5jdGlvbiAoZWwpIHtcclxuICAgICAgICBsZXQgdXNlckNob2ljZSA9IHdpbmRvdy51c2VyQ2hvaWNlO1xyXG4gICAgICAgIGxldCBkYXRhSUQgPSBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEnKTtcclxuICAgICAgICBsZXQgYWxsU2VsZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhXScpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpIGluIGFsbFNlbGVjdHMpIHtcclxuXHJcbiAgICAgICAgICAgIGlmIChpc05hTihpKSkge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBpdGVtU2VsZWN0ID0gYWxsU2VsZWN0c1tpXTtcclxuICAgICAgICAgICAgbGV0IHNlbGVjdERhdGEgPSBpdGVtU2VsZWN0LmF0dHJpYnV0ZXMuZGF0YS52YWx1ZTtcclxuXHJcbiAgICAgICAgICAgIGlmIChzZWxlY3REYXRhID09PSBkYXRhSUQpIHtcclxuICAgICAgICAgICAgICAgIHVzZXJDaG9pY2VbaXRlbVNlbGVjdC5uYW1lXSA9IGl0ZW1TZWxlY3Qub3B0aW9uc1tpdGVtU2VsZWN0LnNlbGVjdGVkSW5kZXhdLnZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZygnVGhpcyBpcyB1c2VyIGNob2ljZScpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHVzZXJDaG9pY2UpO1xyXG5cclxuICAgICAgICBjb21wYXJlKHVzZXJDaG9pY2UsIGRhdGFJRCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIGNvbXBhcmUodXNlckNob2ljZSwgZGF0YUlEKSB7XHJcblxyXG4gICAgICAgIGxldCBwcmludFByaWNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZGF0YUlEICsgJy1wcmljZScpO1xyXG4gICAgICAgIGxldCBwcmludE1lc3NhZ2UgPSAkKCcjbWVzc2FnZS0nICsgZGF0YUlEKTtcclxuICAgICAgICBsZXQgY2hlY2tvdXRCdXR0b24gPSAkKFwiI3NlY3Rpb24tXCIgKyBkYXRhSUQgKyBcIiBidXR0b25bZGF0YS1zbGlkZT0nbmV4dCddXCIpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBwYXJhbWV0ZXIgaW4gdXNlckNob2ljZSkge1xyXG4gICAgICAgICAgICBpZiAodXNlckNob2ljZS5oYXNPd25Qcm9wZXJ0eShwYXJhbWV0ZXIpICYmIHVzZXJDaG9pY2VbcGFyYW1ldGVyXSA9PT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgcHJpbnRQcmljZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtcHJpY2UnLCAnJyk7XHJcbiAgICAgICAgICAgICAgICBwcmludFByaWNlLmlubmVySFRNTCA9IFwiJm5ic3A7XCI7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnU2VsZWN0IHRoZSAnICsgcGFyYW1ldGVyKTtcclxuICAgICAgICAgICAgICAgIHByaW50TWVzc2FnZS5pbm5lckhUTUwgPSAnU2VsZWN0IHRoZSAnICsgcGFyYW1ldGVyO1xyXG4gICAgICAgICAgICAgICAgY2hlY2tvdXRCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgdmFyaWF0aW9ucyA9IHZhcmlhdGlvbnNPYmplY3QuZGF0YUJ5SWRbZGF0YUlEXTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ1RoaXMgaXMgVmFyaWF0aW9ucycpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHZhcmlhdGlvbnMpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpIGluIHZhcmlhdGlvbnMpIHtcclxuICAgICAgICAgICAgbGV0IHZhcmlhdGlvbiA9IHZhcmlhdGlvbnNbaV07XHJcbiAgICAgICAgICAgIGxldCB2YXJpYXRpb25zV2l0aG91dFByaWNlID0ge307XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBwYXJhbWV0ZXIgaW4gdmFyaWF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFyaWF0aW9uLmhhc093blByb3BlcnR5KHBhcmFtZXRlcikpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXJpYXRpb25zV2l0aG91dFByaWNlW3BhcmFtZXRlcl0gPSB2YXJpYXRpb25bcGFyYW1ldGVyXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZGVsZXRlIHZhcmlhdGlvbnNXaXRob3V0UHJpY2UucHJpY2U7XHJcblxyXG4gICAgICAgICAgICBpZiAoSlNPTi5zdHJpbmdpZnkodXNlckNob2ljZSkgPT09IEpTT04uc3RyaW5naWZ5KHZhcmlhdGlvbnNXaXRob3V0UHJpY2UpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh2YXJpYXRpb24ucHJpY2UpO1xyXG4gICAgICAgICAgICAgICAgcHJpbnRQcmljZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtcHJpY2UnLCB2YXJpYXRpb24ucHJpY2UpO1xyXG4gICAgICAgICAgICAgICAgcHJpbnRQcmljZS5pbm5lckhUTUwgPSAnPGgzIGNsYXNzPVwicmVkLXByaWNlXCI+JyArIHZhcmlhdGlvbi5wcmljZSArICckPC9oMz4nO1xyXG4gICAgICAgICAgICAgICAgcHJpbnRNZXNzYWdlLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICBjaGVja291dEJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcHJpbnRQcmljZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtcHJpY2UnLCAnJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnVmFyaWF0aW9uIGlzIG5vdCBmb3VuZCcpO1xyXG4gICAgICAgICAgICAgICAgcHJpbnRQcmljZS5pbm5lckhUTUwgPSAnPGgzPi0gLTwvaDM+JztcclxuICAgICAgICAgICAgICAgIHByaW50TWVzc2FnZS5pbm5lckhUTUwgPSAnVmFyaWF0aW9uIGlzIG5vdCBmb3VuZCc7XHJcbiAgICAgICAgICAgICAgICBjaGVja291dEJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL3NyYy9qYXZhc2NyaXB0cy9tb2R1bGVzL29uQ2hhbmdlU2VsZWN0LmpzIiwiZXhwb3J0IGRlZmF1bHQgKCQpID0+IHtcclxuICAgIHdpbmRvdy5jaGVja291dEJ0biA9IGZ1bmN0aW9uIChlbCkge1xyXG4gICAgICAgIGxldCB1c2VyQ2hvaWNlID0gd2luZG93LnVzZXJDaG9pY2U7XHJcbiAgICAgICAgTWFpbk1ldGhvZHMuc2Nyb2xsRWxlbSgkKFwiI2Nob29zZVwiKS5vZmZzZXRUb3AgLSA1MCwgMTAwKTtcclxuICAgICAgICBsZXQgZGF0YUlEID0gZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XHJcbiAgICAgICAgbGV0IHF1YW50aXR5ID0gJCgnI3NlY3Rpb24tJyArIGRhdGFJRCArICcgLnF1YW50aXR5Jyk7XHJcbiAgICAgICAgbGV0IHVzZXJDaG9pY2VUZXh0ID0gJCgnI3NlY3Rpb24tJyArIGRhdGFJRCArICcgLnVzZXItY2hvaWNlJyk7XHJcbiAgICAgICAgbGV0IGNob2ljZVByaWNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZGF0YUlEICsgJy1wcmljZScpLmdldEF0dHJpYnV0ZSgnZGF0YS1wcmljZScpO1xyXG4gICAgICAgIGxldCBjb250ZW50ID0gJyc7XHJcbiAgICAgICAgZm9yIChsZXQgaSBpbiB1c2VyQ2hvaWNlKSB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQgKz0gXCI8cD5cIiArIGkgKyBcIjogXCIgKyB1c2VyQ2hvaWNlW2ldICsgXCI8L3A+XCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnRlbnQgKz0gXCI8cD5QcmljZTogXCIgKyBjaG9pY2VQcmljZTtcclxuICAgICAgICBjb250ZW50ICs9IFwiPHA+UXVhbnRpdHk6IFwiICsgcXVhbnRpdHkudmFsdWU7XHJcbiAgICAgICAgdXNlckNob2ljZVRleHQuaW5uZXJIVE1MID0gY29udGVudDtcclxuICAgIH07XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvc3JjL2phdmFzY3JpcHRzL21vZHVsZXMvY2hlY2tvdXRCdG4uanMiLCJleHBvcnQgZGVmYXVsdCAoJCkgPT4ge1xyXG4gICAgd2luZG93LmFkZE9yZGVyID0gZnVuY3Rpb24gKGVsKSB7XHJcbiAgICAgICAgbGV0IHVzZXJDaG9pY2UgPSB3aW5kb3cudXNlckNob2ljZTtcclxuICAgICAgICBpZiAoZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdkaXNhYmxlZCcpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgTWFpbk1ldGhvZHMuc2Nyb2xsRWxlbSgkKFwiI2Nob29zZVwiKS5vZmZzZXRUb3AgLSA1MCwgMTAwKTtcclxuXHJcbiAgICAgICAgbGV0IGRhdGFJRCA9IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xyXG4gICAgICAgIGxldCBxdWFudGl0eSA9ICQoJyNzZWN0aW9uLScgKyBkYXRhSUQgKyAnIC5xdWFudGl0eScpO1xyXG4gICAgICAgIGxldCBlbGVtZW50SHJlZiA9IGVsLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xyXG4gICAgICAgIGxldCB1c2VyT3JkZXJUZXh0ID0gJCgnI3NlY3Rpb24tJyArIGRhdGFJRCArICcgLnVzZXItb3JkZXInKTtcclxuICAgICAgICBsZXQgaW5wdXROYW1lID0gJCgnI2Zvcm0tJyArIGRhdGFJRCArICcgaW5wdXRbbmFtZT1cImZpcnN0X25hbWVcIl0nKTtcclxuICAgICAgICBsZXQgaW5wdXRMYXN0TmFtZSA9ICQoJyNmb3JtLScgKyBkYXRhSUQgKyAnIGlucHV0W25hbWU9XCJsYXN0X25hbWVcIl0nKTtcclxuICAgICAgICBsZXQgaW5wdXRFbWFpbCA9ICQoJyNmb3JtLScgKyBkYXRhSUQgKyAnIGlucHV0W25hbWU9XCJlbWFpbFwiXScpO1xyXG4gICAgICAgIGxldCBpbnB1dFBob25lID0gJCgnI2Zvcm0tJyArIGRhdGFJRCArICcgaW5wdXRbbmFtZT1cInBob25lXCJdJyk7XHJcblxyXG4gICAgICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsLm5hbWUpLnRleHRDb250ZW50O1xyXG5cclxuICAgICAgICBsZXQgcHJpY2VUYWcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkYXRhSUQgKyAnLXByaWNlJyk7XHJcbiAgICAgICAgbGV0IHByaWNlID0gcHJpY2VUYWcuZ2V0QXR0cmlidXRlKCdkYXRhLXByaWNlJyk7XHJcbiAgICAgICAgbGV0IHJhbmRvbUlkID0gTWF0aC50cnVuYygoTWF0aC5yYW5kb20oKSAqIDEwMDAwMCkpO1xyXG4gICAgICAgIGxldCBwcm9kdWN0RGF0YSA9IHtcclxuICAgICAgICAgICAgXCJ0aXRsZVwiOiB0aXRsZSArICcgWycgKyByYW5kb21JZCArICddJyxcclxuICAgICAgICAgICAgXCJjb250ZW50XCI6IEpTT04uc3RyaW5naWZ5KHVzZXJDaG9pY2UpICsgJ3tcInByaWNlXCI6JyArIHByaWNlICsgJywgXCJxdWFudGl0eVwiOicgKyBxdWFudGl0eS52YWx1ZSArICd9JyxcclxuICAgICAgICAgICAgXCJzdGF0dXNcIjogJ3B1Ymxpc2gnXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSBpbiB1c2VyQ2hvaWNlKSB7XHJcbiAgICAgICAgICAgIHByb2R1Y3REYXRhWydwYXJhbV8nICsgaV0gPSB1c2VyQ2hvaWNlW2ldO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvZHVjdERhdGFbJ3BhcmFtX3ByaWNlJ10gPSBwcmljZTtcclxuICAgICAgICBwcm9kdWN0RGF0YVsncGFyYW1fcXVhbnRpdHknXSA9IHF1YW50aXR5LnZhbHVlO1xyXG4gICAgICAgIHByb2R1Y3REYXRhWydpbmZvX2ZpcnN0X25hbWUnXSA9IGlucHV0TmFtZS52YWx1ZTtcclxuICAgICAgICBwcm9kdWN0RGF0YVsnaW5mb19sYXN0X25hbWUnXSA9IGlucHV0TGFzdE5hbWUudmFsdWU7XHJcbiAgICAgICAgcHJvZHVjdERhdGFbJ2luZm9fZW1haWwnXSA9IGlucHV0RW1haWwudmFsdWU7XHJcbiAgICAgICAgcHJvZHVjdERhdGFbJ2luZm9fcGhvbmUnXSA9IGlucHV0UGhvbmUudmFsdWU7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKHByb2R1Y3REYXRhKTtcclxuXHJcbiAgICAgICAgbGV0IGNvbnRlbnQgPSAnJztcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSBpbiB1c2VyQ2hvaWNlKSB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQgKz0gXCI8cD5cIiArIGkgKyBcIjogXCIgKyB1c2VyQ2hvaWNlW2ldICsgXCI8L3A+XCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnRlbnQgKz0gXCI8cD5QcmljZTogXCIgKyBwcm9kdWN0RGF0YS5wYXJhbV9wcmljZSArIFwiPC9wPlwiO1xyXG4gICAgICAgIGNvbnRlbnQgKz0gXCI8cD5RdWFudGl0eTogXCIgKyBxdWFudGl0eS52YWx1ZSArIFwiPC9wPlwiO1xyXG4gICAgICAgIGNvbnRlbnQgKz0gXCI8cD5Ub3RhbCBwcmljZTogXCIgKyAocXVhbnRpdHkudmFsdWUgKiBwcm9kdWN0RGF0YS5wYXJhbV9wcmljZSkgKyBcIjwvcD5cIjtcclxuICAgICAgICBjb250ZW50ICs9IFwiPHA+Rmlyc3QgbmFtZTogXCIgKyBwcm9kdWN0RGF0YS5pbmZvX2ZpcnN0X25hbWUgKyBcIjwvcD5cIjtcclxuICAgICAgICBjb250ZW50ICs9IFwiPHA+TGFzdCBuYW1lOiBcIiArIHByb2R1Y3REYXRhLmluZm9fbGFzdF9uYW1lICsgXCI8L3A+XCI7XHJcbiAgICAgICAgY29udGVudCArPSBcIjxwPlBob25lOiBcIiArIHByb2R1Y3REYXRhLmluZm9fcGhvbmUgKyBcIjwvcD5cIjtcclxuXHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcblxyXG4gICAgICAgIGZldGNoKCcvd3AtanNvbi93cC92Mi9zaG9wX29yZGVyJywge1xyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwcm9kdWN0RGF0YSksXHJcbiAgICAgICAgICAgIC8vIHZhciBCYXNlNjQ9e19rZXlTdHI6XCJBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvPVwiLGVuY29kZTpmdW5jdGlvbihlKXt2YXIgdD1cIlwiO3ZhciBuLHIsaSxzLG8sdSxhO3ZhciBmPTA7ZT1CYXNlNjQuX3V0ZjhfZW5jb2RlKGUpO3doaWxlKGY8ZS5sZW5ndGgpe249ZS5jaGFyQ29kZUF0KGYrKyk7cj1lLmNoYXJDb2RlQXQoZisrKTtpPWUuY2hhckNvZGVBdChmKyspO3M9bj4+MjtvPShuJjMpPDw0fHI+PjQ7dT0ociYxNSk8PDJ8aT4+NjthPWkmNjM7aWYoaXNOYU4ocikpe3U9YT02NH1lbHNlIGlmKGlzTmFOKGkpKXthPTY0fXQ9dCt0aGlzLl9rZXlTdHIuY2hhckF0KHMpK3RoaXMuX2tleVN0ci5jaGFyQXQobykrdGhpcy5fa2V5U3RyLmNoYXJBdCh1KSt0aGlzLl9rZXlTdHIuY2hhckF0KGEpfXJldHVybiB0fSxkZWNvZGU6ZnVuY3Rpb24oZSl7dmFyIHQ9XCJcIjt2YXIgbixyLGk7dmFyIHMsbyx1LGE7dmFyIGY9MDtlPWUucmVwbGFjZSgvW15BLVphLXowLTlcXCtcXC9cXD1dL2csXCJcIik7d2hpbGUoZjxlLmxlbmd0aCl7cz10aGlzLl9rZXlTdHIuaW5kZXhPZihlLmNoYXJBdChmKyspKTtvPXRoaXMuX2tleVN0ci5pbmRleE9mKGUuY2hhckF0KGYrKykpO3U9dGhpcy5fa2V5U3RyLmluZGV4T2YoZS5jaGFyQXQoZisrKSk7YT10aGlzLl9rZXlTdHIuaW5kZXhPZihlLmNoYXJBdChmKyspKTtuPXM8PDJ8bz4+NDtyPShvJjE1KTw8NHx1Pj4yO2k9KHUmMyk8PDZ8YTt0PXQrU3RyaW5nLmZyb21DaGFyQ29kZShuKTtpZih1IT02NCl7dD10K1N0cmluZy5mcm9tQ2hhckNvZGUocil9aWYoYSE9NjQpe3Q9dCtTdHJpbmcuZnJvbUNoYXJDb2RlKGkpfX10PUJhc2U2NC5fdXRmOF9kZWNvZGUodCk7cmV0dXJuIHR9LF91dGY4X2VuY29kZTpmdW5jdGlvbihlKXtlPWUucmVwbGFjZSgvXFxyXFxuL2csXCJcXG5cIik7dmFyIHQ9XCJcIjtmb3IodmFyIG49MDtuPGUubGVuZ3RoO24rKyl7dmFyIHI9ZS5jaGFyQ29kZUF0KG4pO2lmKHI8MTI4KXt0Kz1TdHJpbmcuZnJvbUNoYXJDb2RlKHIpfWVsc2UgaWYocj4xMjcmJnI8MjA0OCl7dCs9U3RyaW5nLmZyb21DaGFyQ29kZShyPj42fDE5Mik7dCs9U3RyaW5nLmZyb21DaGFyQ29kZShyJjYzfDEyOCl9ZWxzZXt0Kz1TdHJpbmcuZnJvbUNoYXJDb2RlKHI+PjEyfDIyNCk7dCs9U3RyaW5nLmZyb21DaGFyQ29kZShyPj42JjYzfDEyOCk7dCs9U3RyaW5nLmZyb21DaGFyQ29kZShyJjYzfDEyOCl9fXJldHVybiB0fSxfdXRmOF9kZWNvZGU6ZnVuY3Rpb24oZSl7dmFyIHQ9XCJcIjt2YXIgbj0wO3ZhciByPWMxPWMyPTA7d2hpbGUobjxlLmxlbmd0aCl7cj1lLmNoYXJDb2RlQXQobik7aWYocjwxMjgpe3QrPVN0cmluZy5mcm9tQ2hhckNvZGUocik7bisrfWVsc2UgaWYocj4xOTEmJnI8MjI0KXtjMj1lLmNoYXJDb2RlQXQobisxKTt0Kz1TdHJpbmcuZnJvbUNoYXJDb2RlKChyJjMxKTw8NnxjMiY2Myk7bis9Mn1lbHNle2MyPWUuY2hhckNvZGVBdChuKzEpO2MzPWUuY2hhckNvZGVBdChuKzIpO3QrPVN0cmluZy5mcm9tQ2hhckNvZGUoKHImMTUpPDwxMnwoYzImNjMpPDw2fGMzJjYzKTtuKz0zfX1yZXR1cm4gdH19O1xyXG4gICAgICAgICAgICAvL2NyZWF0ZVBvc3Quc2V0UmVxdWVzdEhlYWRlciggJ0F1dGhvcml6YXRpb24nLCAnQmFzaWMgJyArIEJhc2U2NC5lbmNvZGUoICd0ZXN0OjAwMDAnICkgKTtcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgJ1gtV1AtTm9uY2UnOiB3cEFwaVNldHRpbmdzLm5vbmNlLFxyXG4gICAgICAgICAgICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJ1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgIT09IDIwMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdOb3QgMjAxOiAnICsgcmVzcG9uc2Uuc3RhdHVzICsgJyAnICsgcmVzcG9uc2Uuc3RhdHVzVGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ05vdCAyMDE6ICcgKyByZXNwb25zZS5zdGF0dXMgKyAnICcgKyByZXNwb25zZS5zdGF0dXNUZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudCArPSAnPGJyPicgKyByZXNwb25zZS5zdGF0dXNUZXh0ICsgJyBzdGF0dXM6IHBvc3QgYWRkZWQnO1xyXG4gICAgICAgICAgICAgICAgICAgIGpRdWVyeShlbGVtZW50SHJlZikuY2Fyb3VzZWwoJ25leHQnKTtcclxuICAgICAgICAgICAgICAgICAgICB1c2VyT3JkZXJUZXh0LmlubmVySFRNTCA9IGNvbnRlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2Uuc3RhdHVzVGV4dCArICcgc3RhdHVzOiBwb3N0IGFkZGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQocmVzcG9uc2Uuc3RhdHVzVGV4dCArICcgc3RhdHVzOiBwb3N0IGFkZGVkJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChhbGVydCk7XHJcbiAgICB9O1xyXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9zcmMvamF2YXNjcmlwdHMvbW9kdWxlcy9hZGRPcmRlci5qcyIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiYm9vc3RyYXAtdmFsaWRhdG9yIHZlcnNpb246XCIsIGpRdWVyeS5mbi52YWxpZGF0b3IuQ29uc3RydWN0b3IuVkVSU0lPTik7XHJcbiAgICBqUXVlcnkoJ2Zvcm0nKS52YWxpZGF0b3Ioe1xyXG4gICAgICAgIGZvY3VzOiBmYWxzZSxcclxuICAgICAgICAvLyBkZWxheTogMzAwMFxyXG4gICAgfSk7XHJcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL3NyYy9qYXZhc2NyaXB0cy9tb2R1bGVzL3ZhbGlkYXRpb24uanMiLCJpbXBvcnQgJCBmcm9tIFwianF1ZXJ5XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcbiAgICBsZXQgR2FsbGVyeSA9IHtcclxuICAgICAgICB6b29tOiBmdW5jdGlvbiAoaW1nQ29udGFpbmVyLCBpbWcsIGdhbGxlcnkpIHtcclxuICAgICAgICAgICAgbGV0IGNvbnRhaW5lckhlaWdodCA9IGltZ0NvbnRhaW5lci5vdXRlckhlaWdodCgpO1xyXG4gICAgICAgICAgICBpZiAoIWdhbGxlcnkuaGFzQ2xhc3MoJ2lzLXpvb21lZCcpKSB7XHJcbiAgICAgICAgICAgICAgICBpbWdDb250YWluZXIuY3NzKFwiaGVpZ2h0XCIsIGNvbnRhaW5lckhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICBnYWxsZXJ5LmFkZENsYXNzKCdpcy16b29tZWQnKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpbWcuZHJhZ2dhYmxlKHtcclxuICAgICAgICAgICAgICAgICAgICBkcmFnOiBmdW5jdGlvbiAoZXZlbnQsIHVpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVpLnBvc2l0aW9uLmxlZnQgPSBNYXRoLm1pbigxMDAsIHVpLnBvc2l0aW9uLmxlZnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1aS5wb3NpdGlvbi50b3AgPSBNYXRoLm1pbigxMDAsIHVpLnBvc2l0aW9uLnRvcCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpbWdDb250YWluZXIuY3NzKFwiaGVpZ2h0XCIsIFwiYXV0b1wiKTtcclxuICAgICAgICAgICAgICAgIGdhbGxlcnkucmVtb3ZlQ2xhc3MoJ2lzLXpvb21lZCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzd2l0Y2g6IGZ1bmN0aW9uICh0cmlnZ2VyLCBpbWdDb250YWluZXIsIGdhbGxlcnkpIHtcclxuICAgICAgICAgICAgbGV0IHNyYyA9IHRyaWdnZXIuYXR0cignaHJlZicpLFxyXG4gICAgICAgICAgICAgICAgdGh1bWJzID0gdHJpZ2dlci5zaWJsaW5ncygpLFxyXG4gICAgICAgICAgICAgICAgaW1nID0gdHJpZ2dlci5wYXJlbnQoKS5wcmV2KCkuY2hpbGRyZW4oKTtcclxuXHJcbiAgICAgICAgICAgIHRyaWdnZXIuYWRkQ2xhc3MoJ2lzLWFjdGl2ZScpO1xyXG5cclxuICAgICAgICAgICAgdGh1bWJzLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoJ2lzLWFjdGl2ZScpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnaXMtYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKGdhbGxlcnkuaGFzQ2xhc3MoJ2lzLXpvb21lZCcpKSB7XHJcbiAgICAgICAgICAgICAgICBnYWxsZXJ5LnJlbW92ZUNsYXNzKCdpcy16b29tZWQnKTtcclxuICAgICAgICAgICAgICAgIGltZ0NvbnRhaW5lci5jc3MoXCJoZWlnaHRcIiwgXCJhdXRvXCIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBTd2l0Y2ggaW1hZ2Ugc291cmNlXHJcbiAgICAgICAgICAgIGltZy5hdHRyKCdzcmMnLCBzcmMpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgbGV0IGdhbGxlcnkgPSAkKCcuZ2FsbGVyeScpO1xyXG4gICAgZ2FsbGVyeS5vbignY2xpY2snLCAnYScsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIGxldCB0cmlnZ2VyID0gJCh0aGlzKTtcclxuICAgICAgICBsZXQgdHJpZ2dlckRhdGEgPSB0cmlnZ2VyLmRhdGEoXCJnYWxsZXJ5XCIpO1xyXG4gICAgICAgIGxldCBnYWxsZXJ5SWQgPSBldmVudC5kZWxlZ2F0ZVRhcmdldC5pZDtcclxuICAgICAgICBnYWxsZXJ5ID0gJCgnIycgKyBnYWxsZXJ5SWQpO1xyXG5cclxuICAgICAgICBpZiAodHJpZ2dlckRhdGEgPT09ICd6b29tJykge1xyXG4gICAgICAgICAgICBsZXQgaW1nQ29udGFpbmVyID0gdHJpZ2dlci5wYXJlbnQoKSxcclxuICAgICAgICAgICAgICAgIGltZyA9IHRyaWdnZXIuc2libGluZ3MoKTtcclxuICAgICAgICAgICAgR2FsbGVyeS56b29tKGltZ0NvbnRhaW5lciwgaW1nLCBnYWxsZXJ5KTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRyaWdnZXJEYXRhID09PSAndGh1bWInKSB7XHJcbiAgICAgICAgICAgIGxldCBpbWdDb250YWluZXIgPSB0cmlnZ2VyLnBhcmVudCgpLnNpYmxpbmdzKCk7XHJcbiAgICAgICAgICAgIEdhbGxlcnkuc3dpdGNoKHRyaWdnZXIsIGltZ0NvbnRhaW5lciwgZ2FsbGVyeSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfSk7XHJcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL3NyYy9qYXZhc2NyaXB0cy9tb2R1bGVzL2dhbGxlcnkuanMiLCJtb2R1bGUuZXhwb3J0cyA9IGpRdWVyeTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImpRdWVyeVwiXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=