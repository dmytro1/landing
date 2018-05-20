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
	
	var _popup = __webpack_require__(2);
	
	var _popup2 = _interopRequireDefault(_popup);
	
	var _variations = __webpack_require__(4);
	
	var _variations2 = _interopRequireDefault(_variations);
	
	var _validation = __webpack_require__(5);
	
	var _validation2 = _interopRequireDefault(_validation);
	
	var _gallery = __webpack_require__(6);
	
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
	
	// import "./plugins/infinite-scroll";
	
	jQuery(function () {
	    (0, _main2.default)($, $$);
	    (0, _popup2.default)();
	    (0, _variations2.default)($);
	    (0, _validation2.default)();
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
	
	    window.on('load', function () {
	        $('.loader_inner').style.display = "none";
	        $('.loader').style.display = "none";
	    });
	
	    function navbarToDefault() {
	        $('.navbar-default').style.backgroundColor = 'transparent';
	        $('.navbar-brand img').classList.remove('img_responsive');
	        $('.navbar-fixed-top').classList.remove('top-nav-collapse');
	        var menuItem = $$('.navbar-nav a');
	        for (var i = 0; i < menuItem.length; i++) {
	            menuItem[i].classList.remove('white');
	        }
	    }
	
	    function navbarToFloat() {
	        $('.navbar-default').style.backgroundColor = 'rgba(48, 48, 48, 0.5)';
	        $('.navbar-default').classList.add('top-nav-collapse');
	        $('.navbar-brand img').classList.add('img_responsive');
	        var menuItem = $$('.navbar-nav a');
	        for (var i = 0; i < menuItem.length; i++) {
	            menuItem[i].classList.add('white');
	        }
	    }
	
	    function setNavStyle() {
	        navbarToFloat();
	        if (window.pageYOffset < 50) {
	            navbarToDefault();
	        }
	    }
	
	    window.toggleSections = function (button) {
	        $('.close-btn').classList.add('showing');
	        if ($$('.collapse-section.showing').length) {
	            $('.close-btn').classList.remove('showing');
	        }
	
	        var dataAttribute = button.getAttribute('data-attr');
	        var section = $('#section-' + dataAttribute);
	        // section.offsetTop = 20;
	        // console.log(section.offsetTop);
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
	
	    window.checkoutBtn = function (el) {
	        scrollElem();
	
	        var dataID = el.getAttribute('data-checkout');
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
	
	    function scrollElem() {
	        jQuery('html, body').animate({
	            scrollTop: $("#choose").offsetTop - 50
	        }, 100);
	    }
	
	    window.on('DOMContentLoaded', function () {
	        setNavStyle();
	        //Navbar style switcher
	        window.on('scroll', function () {
	            setNavStyle();
	        });
	
	        if (window.outerWidth < 768) {
	
	            //SANDWICH BUTTON
	            $('.navbar-toggle').on('click', function () {
	                navbarToFloat();
	                $('.sandwich').classList.toggle('active');
	            });
	
	            //HIDE MENU CLICKING LI
	            $$('.navbar-collapse ul li a').on('click', function () {
	                $('.navbar-toggle').click();
	            });
	        }
	
	        //LAZY ANIMATING FOR BUTTONS AND MENU ITEMS
	        $$('.scroll_btn').on('click', lazyScroll);
	        $$('.nav a').on('click', lazyScroll);
	
	        function lazyScroll() {
	            event.preventDefault();
	            var id = this.getAttribute('href');
	            var offset = $(id).offsetTop;
	            //document.getElementsByTagName('html')[0].animate({
	            if (id === "#choose") {
	                offset -= 50;
	            }
	
	            jQuery('html, body').animate({
	                scrollTop: offset
	            }, 700);
	            return false;
	        }
	
	        // function lazyScroll() {
	        //         let id = this.getAttribute('href');
	        //         let offset = $(id).offsetTop;
	        //     if (this.hash !== "") {
	        //         // Prevent default anchor click behavior
	        //         event.preventDefault();
	        //
	        //         // Store hash
	        //         var hash = this.hash;
	        //
	        //         // Using jQuery's animate() method to add smooth page scroll
	        //         // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
	        //         jQuery('html, body').animate({
	        //             scrollTop: offset
	        //         }, 300, function () {
	        //
	        //             // Add hash (#) to URL when done scrolling (default click behavior)
	        //             //window.location.hash = hash;
	        //         });
	        //     }
	        // }
	
	        // Make sure this.hash has a value before overriding default behavior
	
	
	        $('.close-btn').on('click', function () {
	            var sections = $$('.collapse-section');
	            for (var i = 0; i < sections.length; i++) {
	                sections[i].classList.remove('showing');
	            }
	            this.classList.remove('showing');
	        });
	
	        jQuery('[data-slide="prev"]').click(function () {
	            scrollElem();
	        });
	    });
	};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _jquery = __webpack_require__(3);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function () {
	    (0, _jquery2.default)('#next-personal').on('click', function () {
	        (0, _jquery2.default)('#js-product-info').addClass('slide-out-left');
	        (0, _jquery2.default)('#js-personal-info').addClass('slide-in-right');
	    });
	    (0, _jquery2.default)('#prev-product-info').on('click', function () {
	        (0, _jquery2.default)('#js-personal-info').removeClass('slide-in-right');
	        (0, _jquery2.default)('#js-product-info').removeClass('slide-out-left');
	    });
	};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports = jQuery;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	// import $ from "jquery";
	
	exports.default = function ($) {
	    window.userChoice = {};
	
	    window.selectOnClick = function (el) {
	
	        var clickedElementDataId = el.getAttribute('data');
	        var allSelects = document.querySelectorAll('[data]');
	
	        for (var i in allSelects) {
	
	            if (isNaN(i)) {
	                continue;
	            }
	
	            var itemSelect = allSelects[i];
	            var selectData = itemSelect.attributes.data.value;
	
	            if (selectData === clickedElementDataId) {
	                userChoice[itemSelect.name] = itemSelect.options[itemSelect.selectedIndex].value;
	            }
	        }
	
	        console.log('This is user choice');
	        console.log(userChoice);
	
	        compare(userChoice, clickedElementDataId);
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
	
	    //Click to Checkout - Slide button
	
	
	    //Create new post
	    window.addToCart = function (el) {
	
	        if (el.classList.contains('disabled')) {
	            return;
	        }
	
	        jQuery('html, body').animate({
	            scrollTop: $("#choose").offsetTop - 50
	        }, 100);
	
	        var clickedElementDataId = el.getAttribute('data-attr');
	        var quantity = $('#section-' + clickedElementDataId + ' .quantity');
	        var elementHref = el.getAttribute('href');
	        var userOrderText = $('#section-' + clickedElementDataId + ' .user-order');
	        var inputName = $('#form-' + clickedElementDataId + ' input[name="first_name"]');
	        var inputLastName = $('#form-' + clickedElementDataId + ' input[name="last_name"]');
	        var inputEmail = $('#form-' + clickedElementDataId + ' input[name="email"]');
	        var inputPhone = $('#form-' + clickedElementDataId + ' input[name="phone"]');
	
	        var title = document.getElementById(el.name).textContent;
	
	        var priceTag = document.getElementById(clickedElementDataId + '-price');
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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _jquery = __webpack_require__(3);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function () {
	    console.log("boostrap-validator version:", jQuery.fn.validator.Constructor.VERSION);
	    (0, _jquery2.default)('form').validator({
	        focus: false
	        // delay: 3000
	    });
	};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _jquery = __webpack_require__(3);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function () {
	
	    var App = function () {
	        var gallery = (0, _jquery2.default)('.gallery');
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
	
	        //=== Public Methods ===//
	        function initHandler() {
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
	        }
	
	        //=== Make Methods Public ===//
	        return {
	            init: initHandler
	        };
	    }();
	
	    App.init();
	};

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYmY0MTkzNDhhNDJmMGUwZDI2OWQiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NyYy9qYXZhc2NyaXB0cy9jb21tb24uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NyYy9qYXZhc2NyaXB0cy9tb2R1bGVzL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NyYy9qYXZhc2NyaXB0cy9tb2R1bGVzL3BvcHVwLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImpRdWVyeVwiIiwid2VicGFjazovLy8uL2Fzc2V0cy9zcmMvamF2YXNjcmlwdHMvbW9kdWxlcy92YXJpYXRpb25zLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zcmMvamF2YXNjcmlwdHMvbW9kdWxlcy92YWxpZGF0aW9uLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zcmMvamF2YXNjcmlwdHMvbW9kdWxlcy9nYWxsZXJ5LmpzIl0sIm5hbWVzIjpbIiQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJiaW5kIiwiJCQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiTm9kZSIsInByb3RvdHlwZSIsIm9uIiwid2luZG93IiwibmFtZSIsImZuIiwiYWRkRXZlbnRMaXN0ZW5lciIsIk5vZGVMaXN0IiwiX19wcm90b19fIiwiQXJyYXkiLCJEb2N1bWVudCIsImZvckVhY2giLCJlbGVtIiwialF1ZXJ5Iiwic3R5bGUiLCJkaXNwbGF5IiwibmF2YmFyVG9EZWZhdWx0IiwiYmFja2dyb3VuZENvbG9yIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwibWVudUl0ZW0iLCJpIiwibGVuZ3RoIiwibmF2YmFyVG9GbG9hdCIsImFkZCIsInNldE5hdlN0eWxlIiwicGFnZVlPZmZzZXQiLCJ0b2dnbGVTZWN0aW9ucyIsImJ1dHRvbiIsImRhdGFBdHRyaWJ1dGUiLCJnZXRBdHRyaWJ1dGUiLCJzZWN0aW9uIiwiY29sbGFwc2VTZWN0aW9ucyIsImlkIiwidG9nZ2xlIiwiY2hlY2tvdXRCdG4iLCJlbCIsInNjcm9sbEVsZW0iLCJkYXRhSUQiLCJxdWFudGl0eSIsInVzZXJDaG9pY2VUZXh0IiwiY2hvaWNlUHJpY2UiLCJnZXRFbGVtZW50QnlJZCIsImNvbnRlbnQiLCJ1c2VyQ2hvaWNlIiwidmFsdWUiLCJpbm5lckhUTUwiLCJhbmltYXRlIiwic2Nyb2xsVG9wIiwib2Zmc2V0VG9wIiwib3V0ZXJXaWR0aCIsImNsaWNrIiwibGF6eVNjcm9sbCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJvZmZzZXQiLCJzZWN0aW9ucyIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJzZWxlY3RPbkNsaWNrIiwiY2xpY2tlZEVsZW1lbnREYXRhSWQiLCJhbGxTZWxlY3RzIiwiaXNOYU4iLCJpdGVtU2VsZWN0Iiwic2VsZWN0RGF0YSIsImF0dHJpYnV0ZXMiLCJkYXRhIiwib3B0aW9ucyIsInNlbGVjdGVkSW5kZXgiLCJjb25zb2xlIiwibG9nIiwiY29tcGFyZSIsInByaW50UHJpY2UiLCJwcmludE1lc3NhZ2UiLCJjaGVja291dEJ1dHRvbiIsInBhcmFtZXRlciIsInNldEF0dHJpYnV0ZSIsImRpc2FibGVkIiwidmFyaWF0aW9ucyIsInZhcmlhdGlvbnNPYmplY3QiLCJkYXRhQnlJZCIsInZhcmlhdGlvbiIsInZhcmlhdGlvbnNXaXRob3V0UHJpY2UiLCJwcmljZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJhZGRUb0NhcnQiLCJjb250YWlucyIsImVsZW1lbnRIcmVmIiwidXNlck9yZGVyVGV4dCIsImlucHV0TmFtZSIsImlucHV0TGFzdE5hbWUiLCJpbnB1dEVtYWlsIiwiaW5wdXRQaG9uZSIsInRpdGxlIiwidGV4dENvbnRlbnQiLCJwcmljZVRhZyIsInJhbmRvbUlkIiwiTWF0aCIsInRydW5jIiwicmFuZG9tIiwicHJvZHVjdERhdGEiLCJwYXJhbV9wcmljZSIsImluZm9fZmlyc3RfbmFtZSIsImluZm9fbGFzdF9uYW1lIiwiaW5mb19waG9uZSIsImZldGNoIiwiYm9keSIsImhlYWRlcnMiLCJ3cEFwaVNldHRpbmdzIiwibm9uY2UiLCJtZXRob2QiLCJ0aGVuIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJzdGF0dXNUZXh0IiwiYWxlcnQiLCJjYXJvdXNlbCIsImNhdGNoIiwidmFsaWRhdG9yIiwiQ29uc3RydWN0b3IiLCJWRVJTSU9OIiwiZm9jdXMiLCJBcHAiLCJnYWxsZXJ5IiwiR2FsbGVyeSIsInpvb20iLCJpbWdDb250YWluZXIiLCJpbWciLCJjb250YWluZXJIZWlnaHQiLCJvdXRlckhlaWdodCIsImhhc0NsYXNzIiwiY3NzIiwiZHJhZ2dhYmxlIiwiZHJhZyIsInVpIiwicG9zaXRpb24iLCJsZWZ0IiwibWluIiwidG9wIiwic3dpdGNoIiwidHJpZ2dlciIsInNyYyIsImF0dHIiLCJ0aHVtYnMiLCJzaWJsaW5ncyIsInBhcmVudCIsInByZXYiLCJjaGlsZHJlbiIsImVhY2giLCJpbml0SGFuZGxlciIsInRyaWdnZXJEYXRhIiwiZ2FsbGVyeUlkIiwiZGVsZWdhdGVUYXJnZXQiLCJpbml0Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7O0FDbkJBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQXZCQTs7QUFFQSxLQUFNQSxJQUFJQyxTQUFTQyxhQUFULENBQXVCQyxJQUF2QixDQUE0QkYsUUFBNUIsQ0FBVjtBQUNBLEtBQU1HLEtBQUtILFNBQVNJLGdCQUFULENBQTBCRixJQUExQixDQUErQkYsUUFBL0IsQ0FBWDs7QUFFQUssTUFBS0MsU0FBTCxDQUFlQyxFQUFmLEdBQW9CQyxPQUFPRCxFQUFQLEdBQVksVUFBVUUsSUFBVixFQUFnQkMsRUFBaEIsRUFBb0I7QUFDaEQsVUFBS0MsZ0JBQUws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eEIsZUFBZWMsUUFBUUssTUFBUixFQUFuQjtBQUFBLHlCQUNJbEIsTUFBTWEsUUFBUUksUUFBUixFQURWO0FBRUFwQiw2QkFBUUMsSUFBUixDQUFhQyxZQUFiLEVBQTJCQyxHQUEzQixFQUFnQ0osT0FBaEM7QUFDSCxrQkFKRCxNQUlPLElBQUkyQixnQkFBZ0IsT0FBcEIsRUFBNkI7QUFDaEMseUJBQUl4QixnQkFBZWMsUUFBUUssTUFBUixHQUFpQkQsUUFBakIsRUFBbkI7QUFDQXBCLDZCQUFRZSxNQUFSLENBQWVDLE9BQWYsRUFBd0JkLGFBQXhCLEVBQXNDSCxPQUF0QztBQUNILGtCQUhNLE1BR0E7QUFDSDtBQUNIO0FBQ0R2RSx1QkFBTUMsY0FBTjtBQUNILGNBakJEO0FBa0JIOztBQUVEO0FBQ0EsZ0JBQU87QUFDSG9HLG1CQUFNSjtBQURILFVBQVA7QUFHSCxNQXJFUyxFQUFWOztBQXVFQTNCLFNBQUkrQixJQUFKO0FBQ0gsRSIsImZpbGUiOiJjb21tb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBiZjQxOTM0OGE0MmYwZTBkMjY5ZCIsIi8vIGltcG9ydCAkIGZyb20gXCJqcXVlcnlcIjtcblxuY29uc3QgJCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IuYmluZChkb2N1bWVudCk7XG5jb25zdCAkJCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwuYmluZChkb2N1bWVudCk7XG5cbk5vZGUucHJvdG90eXBlLm9uID0gd2luZG93Lm9uID0gZnVuY3Rpb24gKG5hbWUsIGZuKSB7XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKG5hbWUsIGZuKTtcbn07XG5cbk5vZGVMaXN0LnByb3RvdHlwZS5fX3Byb3RvX18gPSBBcnJheS5wcm90b3R5cGU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbk5vZGVMaXN0LnByb3RvdHlwZS5fX3Byb3RvX18gPSBEb2N1bWVudC5wcm90b3R5cGU7XG5cbk5vZGVMaXN0LnByb3RvdHlwZS5vbiA9IE5vZGVMaXN0LnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyID0gZnVuY3Rpb24gKG5hbWUsIGZuKSB7XG4gICAgdGhpcy5mb3JFYWNoKChlbGVtKSA9PiB7XG4gICAgICAgIGVsZW0ub24obmFtZSwgZm4pO1xuICAgIH0pO1xufTtcbi8vZXhwb3J0IHskLCAkJH07XG5cbmltcG9ydCBtYWluIGZyb20gXCIuL21vZHVsZXMvbWFpblwiO1xuaW1wb3J0IHBvcHVwIGZyb20gXCIuL21vZHVsZXMvcG9wdXBcIjtcbmltcG9ydCB2YXJpYXRpb25zIGZyb20gXCIuL21vZHVsZXMvdmFyaWF0aW9uc1wiO1xuaW1wb3J0IHZhbGlkYXRpb24gZnJvbSBcIi4vbW9kdWxlcy92YWxpZGF0aW9uXCI7XG5pbXBvcnQgZ2FsbGVyeSBmcm9tIFwiLi9tb2R1bGVzL2dhbGxlcnlcIjtcblxuXG4vLyBpbXBvcnQgXCIuL3BsdWdpbnMvaW5maW5pdGUtc2Nyb2xsXCI7XG5cbmpRdWVyeShmdW5jdGlvbiAoKSB7XG4gICAgbWFpbigkLCAkJCk7XG4gICAgcG9wdXAoKTtcbiAgICB2YXJpYXRpb25zKCQpO1xuICAgIHZhbGlkYXRpb24oKTtcbiAgICBnYWxsZXJ5KCk7XG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvc3JjL2phdmFzY3JpcHRzL2NvbW1vbi5qcyIsIi8vIGltcG9ydCAkIGZyb20gXCJqcXVlcnlcIjtcblxuZXhwb3J0IGRlZmF1bHQgKCQsICQkKSA9PiB7XG5cbiAgICB3aW5kb3cub24oJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoJy5sb2FkZXJfaW5uZXInKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICQoJy5sb2FkZXInKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfSk7XG5cbiAgICBmdW5jdGlvbiBuYXZiYXJUb0RlZmF1bHQoKSB7XG4gICAgICAgICQoJy5uYXZiYXItZGVmYXVsdCcpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd0cmFuc3BhcmVudCc7XG4gICAgICAgICQoJy5uYXZiYXItYnJhbmQgaW1nJykuY2xhc3NMaXN0LnJlbW92ZSgnaW1nX3Jlc3BvbnNpdmUnKTtcbiAgICAgICAgJCgnLm5hdmJhci1maXhlZC10b3AnKS5jbGFzc0xpc3QucmVtb3ZlKCd0b3AtbmF2LWNvbGxhcHNlJyk7XG4gICAgICAgIGxldCBtZW51SXRlbSA9ICQkKCcubmF2YmFyLW5hdiBhJyk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWVudUl0ZW0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIG1lbnVJdGVtW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ3doaXRlJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBuYXZiYXJUb0Zsb2F0KCkge1xuICAgICAgICAkKCcubmF2YmFyLWRlZmF1bHQnKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmdiYSg0OCwgNDgsIDQ4LCAwLjUpJztcbiAgICAgICAgJCgnLm5hdmJhci1kZWZhdWx0JykuY2xhc3NMaXN0LmFkZCgndG9wLW5hdi1jb2xsYXBzZScpO1xuICAgICAgICAkKCcubmF2YmFyLWJyYW5kIGltZycpLmNsYXNzTGlzdC5hZGQoJ2ltZ19yZXNwb25zaXZlJyk7XG4gICAgICAgIGxldCBtZW51SXRlbSA9ICQkKCcubmF2YmFyLW5hdiBhJyk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWVudUl0ZW0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIG1lbnVJdGVtW2ldLmNsYXNzTGlzdC5hZGQoJ3doaXRlJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXROYXZTdHlsZSgpIHtcbiAgICAgICAgbmF2YmFyVG9GbG9hdCgpO1xuICAgICAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0IDwgNTApIHtcbiAgICAgICAgICAgIG5hdmJhclRvRGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgd2luZG93LnRvZ2dsZVNlY3Rpb25zID0gZnVuY3Rpb24gKGJ1dHRvbikge1xuICAgICAgICAkKCcuY2xvc2UtYnRuJykuY2xhc3NMaXN0LmFkZCgnc2hvd2luZycpO1xuICAgICAgICBpZiAoJCQoJy5jb2xsYXBzZS1zZWN0aW9uLnNob3dpbmcnKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICQoJy5jbG9zZS1idG4nKS5jbGFzc0xpc3QucmVtb3ZlKCdzaG93aW5nJyk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBkYXRhQXR0cmlidXRlID0gYnV0dG9uLmdldEF0dHJpYnV0ZSgnZGF0YS1hdHRyJyk7XG4gICAgICAgIGxldCBzZWN0aW9uID0gJCgnI3NlY3Rpb24tJyArIGRhdGFBdHRyaWJ1dGUpO1xuICAgICAgICAvLyBzZWN0aW9uLm9mZnNldFRvcCA9IDIwO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhzZWN0aW9uLm9mZnNldFRvcCk7XG4gICAgICAgIGxldCBjb2xsYXBzZVNlY3Rpb25zID0gJCQoJy5jb2xsYXBzZS1zZWN0aW9uJyk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29sbGFwc2VTZWN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKCEoY29sbGFwc2VTZWN0aW9uc1tpXS5pZCA9PT0gc2VjdGlvbi5pZCkpIHtcbiAgICAgICAgICAgICAgICBjb2xsYXBzZVNlY3Rpb25zW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3dpbmcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzZWN0aW9uLmNsYXNzTGlzdC50b2dnbGUoJ3Nob3dpbmcnKTtcbiAgICAgICAgaWYgKCQkKCcuY29sbGFwc2Utc2VjdGlvbi5zaG93aW5nJykubGVuZ3RoKSB7XG4gICAgICAgICAgICAkKCcuY2xvc2UtYnRuJykuY2xhc3NMaXN0LmFkZCgnc2hvd2luZycpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHdpbmRvdy5jaGVja291dEJ0biA9IGZ1bmN0aW9uIChlbCkge1xuICAgICAgICBzY3JvbGxFbGVtKCk7XG5cbiAgICAgICAgbGV0IGRhdGFJRCA9IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1jaGVja291dCcpO1xuICAgICAgICBsZXQgcXVhbnRpdHkgPSAkKCcjc2VjdGlvbi0nICsgZGF0YUlEICsgJyAucXVhbnRpdHknKTtcbiAgICAgICAgbGV0IHVzZXJDaG9pY2VUZXh0ID0gJCgnI3NlY3Rpb24tJyArIGRhdGFJRCArICcgLnVzZXItY2hvaWNlJyk7XG4gICAgICAgIGxldCBjaG9pY2VQcmljZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRhdGFJRCArICctcHJpY2UnKS5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJpY2UnKTtcbiAgICAgICAgbGV0IGNvbnRlbnQgPSAnJztcbiAgICAgICAgZm9yIChsZXQgaSBpbiB1c2VyQ2hvaWNlKSB7XG4gICAgICAgICAgICBjb250ZW50ICs9IFwiPHA+XCIgKyBpICsgXCI6IFwiICsgdXNlckNob2ljZVtpXSArIFwiPC9wPlwiO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRlbnQgKz0gXCI8cD5QcmljZTogXCIgKyBjaG9pY2VQcmljZTtcbiAgICAgICAgY29udGVudCArPSBcIjxwPlF1YW50aXR5OiBcIiArIHF1YW50aXR5LnZhbHVlO1xuICAgICAgICB1c2VyQ2hvaWNlVGV4dC5pbm5lckhUTUwgPSBjb250ZW50O1xuICAgIH07XG4gICAgXG4gICAgZnVuY3Rpb24gc2Nyb2xsRWxlbSgpIHtcbiAgICAgICAgalF1ZXJ5KCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XG4gICAgICAgICAgICBzY3JvbGxUb3A6ICQoXCIjY2hvb3NlXCIpLm9mZnNldFRvcCAtIDUwXG4gICAgICAgIH0sIDEwMCk7XG4gICAgfVxuXG4gICAgd2luZG93Lm9uKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBzZXROYXZTdHlsZSgpO1xuICAgICAgICAvL05hdmJhciBzdHlsZSBzd2l0Y2hlclxuICAgICAgICB3aW5kb3cub24oJ3Njcm9sbCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHNldE5hdlN0eWxlKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh3aW5kb3cub3V0ZXJXaWR0aCA8IDc2OCkge1xuXG4gICAgICAgICAgICAvL1NBTkRXSUNIIEJVVFRPTlxuICAgICAgICAgICAgJCgnLm5hdmJhci10b2dnbGUnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgbmF2YmFyVG9GbG9hdCgpO1xuICAgICAgICAgICAgICAgICQoJy5zYW5kd2ljaCcpLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vSElERSBNRU5VIENMSUNLSU5HIExJXG4gICAgICAgICAgICAkJCgnLm5hdmJhci1jb2xsYXBzZSB1bCBsaSBhJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICQoJy5uYXZiYXItdG9nZ2xlJykuY2xpY2soKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9MQVpZIEFOSU1BVElORyBGT1IgQlVUVE9OUyBBTkQgTUVOVSBJVEVNU1xuICAgICAgICAkJCgnLnNjcm9sbF9idG4nKS5vbignY2xpY2snLCBsYXp5U2Nyb2xsKTtcbiAgICAgICAgJCQoJy5uYXYgYScpLm9uKCdjbGljaycsIGxhenlTY3JvbGwpO1xuXG4gICAgICAgIGZ1bmN0aW9uIGxhenlTY3JvbGwoKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgbGV0IGlkID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcbiAgICAgICAgICAgIGxldCBvZmZzZXQgPSAkKGlkKS5vZmZzZXRUb3A7XG4gICAgICAgICAgICAvL2RvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdodG1sJylbMF0uYW5pbWF0ZSh7XG4gICAgICAgICAgICBpZiAoaWQgPT09IFwiI2Nob29zZVwiKSB7XG4gICAgICAgICAgICAgICAgb2Zmc2V0IC09IDUwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBqUXVlcnkoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICBzY3JvbGxUb3A6IG9mZnNldFxuICAgICAgICAgICAgfSwgNzAwKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGZ1bmN0aW9uIGxhenlTY3JvbGwoKSB7XG4gICAgICAgIC8vICAgICAgICAgbGV0IGlkID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcbiAgICAgICAgLy8gICAgICAgICBsZXQgb2Zmc2V0ID0gJChpZCkub2Zmc2V0VG9wO1xuICAgICAgICAvLyAgICAgaWYgKHRoaXMuaGFzaCAhPT0gXCJcIikge1xuICAgICAgICAvLyAgICAgICAgIC8vIFByZXZlbnQgZGVmYXVsdCBhbmNob3IgY2xpY2sgYmVoYXZpb3JcbiAgICAgICAgLy8gICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAvL1xuICAgICAgICAvLyAgICAgICAgIC8vIFN0b3JlIGhhc2hcbiAgICAgICAgLy8gICAgICAgICB2YXIgaGFzaCA9IHRoaXMuaGFzaDtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gICAgICAgICAvLyBVc2luZyBqUXVlcnkncyBhbmltYXRlKCkgbWV0aG9kIHRvIGFkZCBzbW9vdGggcGFnZSBzY3JvbGxcbiAgICAgICAgLy8gICAgICAgICAvLyBUaGUgb3B0aW9uYWwgbnVtYmVyICg4MDApIHNwZWNpZmllcyB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBpdCB0YWtlcyB0byBzY3JvbGwgdG8gdGhlIHNwZWNpZmllZCBhcmVhXG4gICAgICAgIC8vICAgICAgICAgalF1ZXJ5KCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XG4gICAgICAgIC8vICAgICAgICAgICAgIHNjcm9sbFRvcDogb2Zmc2V0XG4gICAgICAgIC8vICAgICAgICAgfSwgMzAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vXG4gICAgICAgIC8vICAgICAgICAgICAgIC8vIEFkZCBoYXNoICgjKSB0byBVUkwgd2hlbiBkb25lIHNjcm9sbGluZyAoZGVmYXVsdCBjbGljayBiZWhhdmlvcilcbiAgICAgICAgLy8gICAgICAgICAgICAgLy93aW5kb3cubG9jYXRpb24uaGFzaCA9IGhhc2g7XG4gICAgICAgIC8vICAgICAgICAgfSk7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH1cblxuICAgICAgICAvLyBNYWtlIHN1cmUgdGhpcy5oYXNoIGhhcyBhIHZhbHVlIGJlZm9yZSBvdmVycmlkaW5nIGRlZmF1bHQgYmVoYXZpb3JcblxuXG4gICAgICAgICQoJy5jbG9zZS1idG4nKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBsZXQgc2VjdGlvbnMgPSAkJCgnLmNvbGxhcHNlLXNlY3Rpb24nKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VjdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBzZWN0aW9uc1tpXS5jbGFzc0xpc3QucmVtb3ZlKCdzaG93aW5nJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3dpbmcnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgalF1ZXJ5KCdbZGF0YS1zbGlkZT1cInByZXZcIl0nKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzY3JvbGxFbGVtKCk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9zcmMvamF2YXNjcmlwdHMvbW9kdWxlcy9tYWluLmpzIiwiaW1wb3J0ICQgZnJvbSBcImpxdWVyeVwiO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gICAgJCgnI25leHQtcGVyc29uYWwnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoJyNqcy1wcm9kdWN0LWluZm8nKS5hZGRDbGFzcygnc2xpZGUtb3V0LWxlZnQnKTtcbiAgICAgICAgJCgnI2pzLXBlcnNvbmFsLWluZm8nKS5hZGRDbGFzcygnc2xpZGUtaW4tcmlnaHQnKTtcbiAgICB9KTtcbiAgICAkKCcjcHJldi1wcm9kdWN0LWluZm8nKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoJyNqcy1wZXJzb25hbC1pbmZvJykucmVtb3ZlQ2xhc3MoJ3NsaWRlLWluLXJpZ2h0Jyk7XG4gICAgICAgICQoJyNqcy1wcm9kdWN0LWluZm8nKS5yZW1vdmVDbGFzcygnc2xpZGUtb3V0LWxlZnQnKTtcbiAgICB9KTtcbn07XG5cblxuXG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9zcmMvamF2YXNjcmlwdHMvbW9kdWxlcy9wb3B1cC5qcyIsIm1vZHVsZS5leHBvcnRzID0galF1ZXJ5O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwialF1ZXJ5XCJcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gaW1wb3J0ICQgZnJvbSBcImpxdWVyeVwiO1xuXG5leHBvcnQgZGVmYXVsdCAoJCkgPT4ge1xuICAgIHdpbmRvdy51c2VyQ2hvaWNlID0ge307XG5cbiAgICB3aW5kb3cuc2VsZWN0T25DbGljayA9IGZ1bmN0aW9uIChlbCkge1xuXG4gICAgICAgIGxldCBjbGlja2VkRWxlbWVudERhdGFJZCA9IGVsLmdldEF0dHJpYnV0ZSgnZGF0YScpO1xuICAgICAgICBsZXQgYWxsU2VsZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhXScpO1xuXG4gICAgICAgIGZvciAobGV0IGkgaW4gYWxsU2VsZWN0cykge1xuXG4gICAgICAgICAgICBpZiAoaXNOYU4oaSkpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IGl0ZW1TZWxlY3QgPSBhbGxTZWxlY3RzW2ldO1xuICAgICAgICAgICAgbGV0IHNlbGVjdERhdGEgPSBpdGVtU2VsZWN0LmF0dHJpYnV0ZXMuZGF0YS52YWx1ZTtcblxuICAgICAgICAgICAgaWYgKHNlbGVjdERhdGEgPT09IGNsaWNrZWRFbGVtZW50RGF0YUlkKSB7XG4gICAgICAgICAgICAgICAgdXNlckNob2ljZVtpdGVtU2VsZWN0Lm5hbWVdID0gaXRlbVNlbGVjdC5vcHRpb25zW2l0ZW1TZWxlY3Quc2VsZWN0ZWRJbmRleF0udmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmxvZygnVGhpcyBpcyB1c2VyIGNob2ljZScpO1xuICAgICAgICBjb25zb2xlLmxvZyh1c2VyQ2hvaWNlKTtcblxuICAgICAgICBjb21wYXJlKHVzZXJDaG9pY2UsIGNsaWNrZWRFbGVtZW50RGF0YUlkKTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gY29tcGFyZSh1c2VyQ2hvaWNlLCBkYXRhSUQpIHtcblxuICAgICAgICBsZXQgcHJpbnRQcmljZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRhdGFJRCArICctcHJpY2UnKTtcbiAgICAgICAgbGV0IHByaW50TWVzc2FnZSA9ICQoJyNtZXNzYWdlLScgKyBkYXRhSUQpO1xuICAgICAgICBsZXQgY2hlY2tvdXRCdXR0b24gPSAkKFwiI3NlY3Rpb24tXCIgKyBkYXRhSUQgKyBcIiBidXR0b25bZGF0YS1zbGlkZT0nbmV4dCddXCIpO1xuXG4gICAgICAgIGZvciAobGV0IHBhcmFtZXRlciBpbiB1c2VyQ2hvaWNlKSB7XG4gICAgICAgICAgICBpZiAodXNlckNob2ljZVtwYXJhbWV0ZXJdID09PSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgcHJpbnRQcmljZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtcHJpY2UnLCAnJyk7XG4gICAgICAgICAgICAgICAgcHJpbnRQcmljZS5pbm5lckhUTUwgPSBcIiZuYnNwO1wiO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTZWxlY3QgdGhlICcgKyBwYXJhbWV0ZXIpO1xuICAgICAgICAgICAgICAgIHByaW50TWVzc2FnZS5pbm5lckhUTUwgPSAnU2VsZWN0IHRoZSAnICsgcGFyYW1ldGVyO1xuICAgICAgICAgICAgICAgIGNoZWNrb3V0QnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgdmFyaWF0aW9ucyA9IHZhcmlhdGlvbnNPYmplY3QuZGF0YUJ5SWRbZGF0YUlEXTtcblxuICAgICAgICBjb25zb2xlLmxvZygnVGhpcyBpcyBWYXJpYXRpb25zJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKHZhcmlhdGlvbnMpO1xuXG4gICAgICAgIGZvciAobGV0IGkgaW4gdmFyaWF0aW9ucykge1xuICAgICAgICAgICAgbGV0IHZhcmlhdGlvbiA9IHZhcmlhdGlvbnNbaV07XG4gICAgICAgICAgICBsZXQgdmFyaWF0aW9uc1dpdGhvdXRQcmljZSA9IHt9O1xuXG4gICAgICAgICAgICBmb3IgKGxldCBwYXJhbWV0ZXIgaW4gdmFyaWF0aW9uKSB7XG4gICAgICAgICAgICAgICAgdmFyaWF0aW9uc1dpdGhvdXRQcmljZVtwYXJhbWV0ZXJdID0gdmFyaWF0aW9uW3BhcmFtZXRlcl07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRlbGV0ZSB2YXJpYXRpb25zV2l0aG91dFByaWNlLnByaWNlO1xuXG4gICAgICAgICAgICBpZiAoSlNPTi5zdHJpbmdpZnkodXNlckNob2ljZSkgPT09IEpTT04uc3RyaW5naWZ5KHZhcmlhdGlvbnNXaXRob3V0UHJpY2UpKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codmFyaWF0aW9uLnByaWNlKTtcbiAgICAgICAgICAgICAgICBwcmludFByaWNlLnNldEF0dHJpYnV0ZSgnZGF0YS1wcmljZScsIHZhcmlhdGlvbi5wcmljZSk7XG4gICAgICAgICAgICAgICAgcHJpbnRQcmljZS5pbm5lckhUTUwgPSAnPGgzIGNsYXNzPVwicmVkLXByaWNlXCI+JyArIHZhcmlhdGlvbi5wcmljZSArICckPC9oMz4nO1xuICAgICAgICAgICAgICAgIHByaW50TWVzc2FnZS5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICAgICAgICAgIGNoZWNrb3V0QnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwcmludFByaWNlLnNldEF0dHJpYnV0ZSgnZGF0YS1wcmljZScsICcnKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnVmFyaWF0aW9uIGlzIG5vdCBmb3VuZCcpO1xuICAgICAgICAgICAgICAgIHByaW50UHJpY2UuaW5uZXJIVE1MID0gJzxoMz4tIC08L2gzPic7XG4gICAgICAgICAgICAgICAgcHJpbnRNZXNzYWdlLmlubmVySFRNTCA9ICdWYXJpYXRpb24gaXMgbm90IGZvdW5kJztcbiAgICAgICAgICAgICAgICBjaGVja291dEJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbi8vQ2xpY2sgdG8gQ2hlY2tvdXQgLSBTbGlkZSBidXR0b25cblxuXG4vL0NyZWF0ZSBuZXcgcG9zdFxuICAgIHdpbmRvdy5hZGRUb0NhcnQgPSBmdW5jdGlvbiAoZWwpIHtcblxuICAgICAgICBpZiAoZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdkaXNhYmxlZCcpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBqUXVlcnkoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcbiAgICAgICAgICAgIHNjcm9sbFRvcDogJChcIiNjaG9vc2VcIikub2Zmc2V0VG9wIC0gNTBcbiAgICAgICAgfSwgMTAwKTtcblxuICAgICAgICBsZXQgY2xpY2tlZEVsZW1lbnREYXRhSWQgPSBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYXR0cicpO1xuICAgICAgICBsZXQgcXVhbnRpdHkgPSAkKCcjc2VjdGlvbi0nICsgY2xpY2tlZEVsZW1lbnREYXRhSWQgKyAnIC5xdWFudGl0eScpO1xuICAgICAgICBsZXQgZWxlbWVudEhyZWYgPSBlbC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcbiAgICAgICAgbGV0IHVzZXJPcmRlclRleHQgPSAkKCcjc2VjdGlvbi0nICsgY2xpY2tlZEVsZW1lbnREYXRhSWQgKyAnIC51c2VyLW9yZGVyJyk7XG4gICAgICAgIGxldCBpbnB1dE5hbWUgPSAkKCcjZm9ybS0nICsgY2xpY2tlZEVsZW1lbnREYXRhSWQgKyAnIGlucHV0W25hbWU9XCJmaXJzdF9uYW1lXCJdJyk7XG4gICAgICAgIGxldCBpbnB1dExhc3ROYW1lID0gJCgnI2Zvcm0tJyArIGNsaWNrZWRFbGVtZW50RGF0YUlkICsgJyBpbnB1dFtuYW1lPVwibGFzdF9uYW1lXCJdJyk7XG4gICAgICAgIGxldCBpbnB1dEVtYWlsID0gJCgnI2Zvcm0tJyArIGNsaWNrZWRFbGVtZW50RGF0YUlkICsgJyBpbnB1dFtuYW1lPVwiZW1haWxcIl0nKTtcbiAgICAgICAgbGV0IGlucHV0UGhvbmUgPSAkKCcjZm9ybS0nICsgY2xpY2tlZEVsZW1lbnREYXRhSWQgKyAnIGlucHV0W25hbWU9XCJwaG9uZVwiXScpO1xuXG4gICAgICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsLm5hbWUpLnRleHRDb250ZW50O1xuXG4gICAgICAgIGxldCBwcmljZVRhZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNsaWNrZWRFbGVtZW50RGF0YUlkICsgJy1wcmljZScpO1xuICAgICAgICBsZXQgcHJpY2UgPSBwcmljZVRhZy5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJpY2UnKTtcbiAgICAgICAgbGV0IHJhbmRvbUlkID0gTWF0aC50cnVuYygoTWF0aC5yYW5kb20oKSAqIDEwMDAwMCkpO1xuICAgICAgICBsZXQgcHJvZHVjdERhdGEgPSB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IHRpdGxlICsgJyBbJyArIHJhbmRvbUlkICsgJ10nLFxuICAgICAgICAgICAgXCJjb250ZW50XCI6IEpTT04uc3RyaW5naWZ5KHVzZXJDaG9pY2UpICsgJ3tcInByaWNlXCI6JyArIHByaWNlICsgJywgXCJxdWFudGl0eVwiOicgKyBxdWFudGl0eS52YWx1ZSArICd9JyxcbiAgICAgICAgICAgIFwic3RhdHVzXCI6ICdwdWJsaXNoJ1xuICAgICAgICB9O1xuXG4gICAgICAgIGZvciAobGV0IGkgaW4gdXNlckNob2ljZSkge1xuICAgICAgICAgICAgcHJvZHVjdERhdGFbJ3BhcmFtXycgKyBpXSA9IHVzZXJDaG9pY2VbaV07XG4gICAgICAgIH1cblxuICAgICAgICBwcm9kdWN0RGF0YVsncGFyYW1fcHJpY2UnXSA9IHByaWNlO1xuICAgICAgICBwcm9kdWN0RGF0YVsncGFyYW1fcXVhbnRpdHknXSA9IHF1YW50aXR5LnZhbHVlO1xuICAgICAgICBwcm9kdWN0RGF0YVsnaW5mb19maXJzdF9uYW1lJ10gPSBpbnB1dE5hbWUudmFsdWU7XG4gICAgICAgIHByb2R1Y3REYXRhWydpbmZvX2xhc3RfbmFtZSddID0gaW5wdXRMYXN0TmFtZS52YWx1ZTtcbiAgICAgICAgcHJvZHVjdERhdGFbJ2luZm9fZW1haWwnXSA9IGlucHV0RW1haWwudmFsdWU7XG4gICAgICAgIHByb2R1Y3REYXRhWydpbmZvX3Bob25lJ10gPSBpbnB1dFBob25lLnZhbHVlO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKHByb2R1Y3REYXRhKTtcblxuICAgICAgICBsZXQgY29udGVudCA9ICcnO1xuXG4gICAgICAgIGZvciAobGV0IGkgaW4gdXNlckNob2ljZSkge1xuICAgICAgICAgICAgY29udGVudCArPSBcIjxwPlwiICsgaSArIFwiOiBcIiArIHVzZXJDaG9pY2VbaV0gKyBcIjwvcD5cIjtcbiAgICAgICAgfVxuICAgICAgICBjb250ZW50ICs9IFwiPHA+UHJpY2U6IFwiICsgcHJvZHVjdERhdGEucGFyYW1fcHJpY2UgKyBcIjwvcD5cIjtcbiAgICAgICAgY29udGVudCArPSBcIjxwPlF1YW50aXR5OiBcIiArIHF1YW50aXR5LnZhbHVlICsgXCI8L3A+XCI7XG4gICAgICAgIGNvbnRlbnQgKz0gXCI8cD5Ub3RhbCBwcmljZTogXCIgKyAocXVhbnRpdHkudmFsdWUgKiBwcm9kdWN0RGF0YS5wYXJhbV9wcmljZSkgKyBcIjwvcD5cIjtcbiAgICAgICAgY29udGVudCArPSBcIjxwPkZpcnN0IG5hbWU6IFwiICsgcHJvZHVjdERhdGEuaW5mb19maXJzdF9uYW1lICsgXCI8L3A+XCI7XG4gICAgICAgIGNvbnRlbnQgKz0gXCI8cD5MYXN0IG5hbWU6IFwiICsgcHJvZHVjdERhdGEuaW5mb19sYXN0X25hbWUgKyBcIjwvcD5cIjtcbiAgICAgICAgY29udGVudCArPSBcIjxwPlBob25lOiBcIiArIHByb2R1Y3REYXRhLmluZm9fcGhvbmUgKyBcIjwvcD5cIjtcblxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cbiAgICAgICAgZmV0Y2goJy93cC1qc29uL3dwL3YyL3Nob3Bfb3JkZXInLCB7XG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwcm9kdWN0RGF0YSksXG4gICAgICAgICAgICAvLyB2YXIgQmFzZTY0PXtfa2V5U3RyOlwiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLz1cIixlbmNvZGU6ZnVuY3Rpb24oZSl7dmFyIHQ9XCJcIjt2YXIgbixyLGkscyxvLHUsYTt2YXIgZj0wO2U9QmFzZTY0Ll91dGY4X2VuY29kZShlKTt3aGlsZShmPGUubGVuZ3RoKXtuPWUuY2hhckNvZGVBdChmKyspO3I9ZS5jaGFyQ29kZUF0KGYrKyk7aT1lLmNoYXJDb2RlQXQoZisrKTtzPW4+PjI7bz0obiYzKTw8NHxyPj40O3U9KHImMTUpPDwyfGk+PjY7YT1pJjYzO2lmKGlzTmFOKHIpKXt1PWE9NjR9ZWxzZSBpZihpc05hTihpKSl7YT02NH10PXQrdGhpcy5fa2V5U3RyLmNoYXJBdChzKSt0aGlzLl9rZXlTdHIuY2hhckF0KG8pK3RoaXMuX2tleVN0ci5jaGFyQXQodSkrdGhpcy5fa2V5U3RyLmNoYXJBdChhKX1yZXR1cm4gdH0sZGVjb2RlOmZ1bmN0aW9uKGUpe3ZhciB0PVwiXCI7dmFyIG4scixpO3ZhciBzLG8sdSxhO3ZhciBmPTA7ZT1lLnJlcGxhY2UoL1teQS1aYS16MC05XFwrXFwvXFw9XS9nLFwiXCIpO3doaWxlKGY8ZS5sZW5ndGgpe3M9dGhpcy5fa2V5U3RyLmluZGV4T2YoZS5jaGFyQXQoZisrKSk7bz10aGlzLl9rZXlTdHIuaW5kZXhPZihlLmNoYXJBdChmKyspKTt1PXRoaXMuX2tleVN0ci5pbmRleE9mKGUuY2hhckF0KGYrKykpO2E9dGhpcy5fa2V5U3RyLmluZGV4T2YoZS5jaGFyQXQoZisrKSk7bj1zPDwyfG8+PjQ7cj0obyYxNSk8PDR8dT4+MjtpPSh1JjMpPDw2fGE7dD10K1N0cmluZy5mcm9tQ2hhckNvZGUobik7aWYodSE9NjQpe3Q9dCtTdHJpbmcuZnJvbUNoYXJDb2RlKHIpfWlmKGEhPTY0KXt0PXQrU3RyaW5nLmZyb21DaGFyQ29kZShpKX19dD1CYXNlNjQuX3V0ZjhfZGVjb2RlKHQpO3JldHVybiB0fSxfdXRmOF9lbmNvZGU6ZnVuY3Rpb24oZSl7ZT1lLnJlcGxhY2UoL1xcclxcbi9nLFwiXFxuXCIpO3ZhciB0PVwiXCI7Zm9yKHZhciBuPTA7bjxlLmxlbmd0aDtuKyspe3ZhciByPWUuY2hhckNvZGVBdChuKTtpZihyPDEyOCl7dCs9U3RyaW5nLmZyb21DaGFyQ29kZShyKX1lbHNlIGlmKHI+MTI3JiZyPDIwNDgpe3QrPVN0cmluZy5mcm9tQ2hhckNvZGUocj4+NnwxOTIpO3QrPVN0cmluZy5mcm9tQ2hhckNvZGUociY2M3wxMjgpfWVsc2V7dCs9U3RyaW5nLmZyb21DaGFyQ29kZShyPj4xMnwyMjQpO3QrPVN0cmluZy5mcm9tQ2hhckNvZGUocj4+NiY2M3wxMjgpO3QrPVN0cmluZy5mcm9tQ2hhckNvZGUociY2M3wxMjgpfX1yZXR1cm4gdH0sX3V0ZjhfZGVjb2RlOmZ1bmN0aW9uKGUpe3ZhciB0PVwiXCI7dmFyIG49MDt2YXIgcj1jMT1jMj0wO3doaWxlKG48ZS5sZW5ndGgpe3I9ZS5jaGFyQ29kZUF0KG4pO2lmKHI8MTI4KXt0Kz1TdHJpbmcuZnJvbUNoYXJDb2RlKHIpO24rK31lbHNlIGlmKHI+MTkxJiZyPDIyNCl7YzI9ZS5jaGFyQ29kZUF0KG4rMSk7dCs9U3RyaW5nLmZyb21DaGFyQ29kZSgociYzMSk8PDZ8YzImNjMpO24rPTJ9ZWxzZXtjMj1lLmNoYXJDb2RlQXQobisxKTtjMz1lLmNoYXJDb2RlQXQobisyKTt0Kz1TdHJpbmcuZnJvbUNoYXJDb2RlKChyJjE1KTw8MTJ8KGMyJjYzKTw8NnxjMyY2Myk7bis9M319cmV0dXJuIHR9fTtcbiAgICAgICAgICAgIC8vY3JlYXRlUG9zdC5zZXRSZXF1ZXN0SGVhZGVyKCAnQXV0aG9yaXphdGlvbicsICdCYXNpYyAnICsgQmFzZTY0LmVuY29kZSggJ3Rlc3Q6MDAwMCcgKSApO1xuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdYLVdQLU5vbmNlJzogd3BBcGlTZXR0aW5ncy5ub25jZSxcbiAgICAgICAgICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCdcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcblxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgIT09IDIwMSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnTm90IDIwMTogJyArIHJlc3BvbnNlLnN0YXR1cyArICcgJyArIHJlc3BvbnNlLnN0YXR1c1RleHQpO1xuICAgICAgICAgICAgICAgICAgICBhbGVydCgnTm90IDIwMTogJyArIHJlc3BvbnNlLnN0YXR1cyArICcgJyArIHJlc3BvbnNlLnN0YXR1c1RleHQpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQgKz0gJzxicj4nICsgcmVzcG9uc2Uuc3RhdHVzVGV4dCArICcgc3RhdHVzOiBwb3N0IGFkZGVkJztcbiAgICAgICAgICAgICAgICAgICAgalF1ZXJ5KGVsZW1lbnRIcmVmKS5jYXJvdXNlbCgnbmV4dCcpO1xuICAgICAgICAgICAgICAgICAgICB1c2VyT3JkZXJUZXh0LmlubmVySFRNTCA9IGNvbnRlbnQ7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLnN0YXR1c1RleHQgKyAnIHN0YXR1czogcG9zdCBhZGRlZCcpO1xuICAgICAgICAgICAgICAgICAgICBhbGVydChyZXNwb25zZS5zdGF0dXNUZXh0ICsgJyBzdGF0dXM6IHBvc3QgYWRkZWQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGFsZXJ0KTtcbiAgICB9O1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvc3JjL2phdmFzY3JpcHRzL21vZHVsZXMvdmFyaWF0aW9ucy5qcyIsImltcG9ydCAkIGZyb20gXCJqcXVlcnlcIjtcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiYm9vc3RyYXAtdmFsaWRhdG9yIHZlcnNpb246XCIsIGpRdWVyeS5mbi52YWxpZGF0b3IuQ29uc3RydWN0b3IuVkVSU0lPTik7XG4gICAgJCgnZm9ybScpLnZhbGlkYXRvcih7XG4gICAgICAgIGZvY3VzOiBmYWxzZSxcbiAgICAgICAgLy8gZGVsYXk6IDMwMDBcbiAgICB9KTtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL3NyYy9qYXZhc2NyaXB0cy9tb2R1bGVzL3ZhbGlkYXRpb24uanMiLCJpbXBvcnQgJCBmcm9tIFwianF1ZXJ5XCI7XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcblxuICAgIGxldCBBcHAgPSAoZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgZ2FsbGVyeSA9ICQoJy5nYWxsZXJ5Jyk7XG4gICAgICAgIGxldCBHYWxsZXJ5ID0ge1xuICAgICAgICAgICAgem9vbTogZnVuY3Rpb24gKGltZ0NvbnRhaW5lciwgaW1nLCBnYWxsZXJ5KSB7XG4gICAgICAgICAgICAgICAgbGV0IGNvbnRhaW5lckhlaWdodCA9IGltZ0NvbnRhaW5lci5vdXRlckhlaWdodCgpO1xuICAgICAgICAgICAgICAgIGlmICghZ2FsbGVyeS5oYXNDbGFzcygnaXMtem9vbWVkJykpIHtcbiAgICAgICAgICAgICAgICAgICAgaW1nQ29udGFpbmVyLmNzcyhcImhlaWdodFwiLCBjb250YWluZXJIZWlnaHQpO1xuICAgICAgICAgICAgICAgICAgICBnYWxsZXJ5LmFkZENsYXNzKCdpcy16b29tZWQnKTtcblxuICAgICAgICAgICAgICAgICAgICBpbWcuZHJhZ2dhYmxlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRyYWc6IGZ1bmN0aW9uIChldmVudCwgdWkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1aS5wb3NpdGlvbi5sZWZ0ID0gTWF0aC5taW4oMTAwLCB1aS5wb3NpdGlvbi5sZWZ0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1aS5wb3NpdGlvbi50b3AgPSBNYXRoLm1pbigxMDAsIHVpLnBvc2l0aW9uLnRvcCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGltZ0NvbnRhaW5lci5jc3MoXCJoZWlnaHRcIiwgXCJhdXRvXCIpO1xuICAgICAgICAgICAgICAgICAgICBnYWxsZXJ5LnJlbW92ZUNsYXNzKCdpcy16b29tZWQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3dpdGNoOiBmdW5jdGlvbiAodHJpZ2dlciwgaW1nQ29udGFpbmVyLCBnYWxsZXJ5KSB7XG4gICAgICAgICAgICAgICAgbGV0IHNyYyA9IHRyaWdnZXIuYXR0cignaHJlZicpLFxuICAgICAgICAgICAgICAgICAgICB0aHVtYnMgPSB0cmlnZ2VyLnNpYmxpbmdzKCksXG4gICAgICAgICAgICAgICAgICAgIGltZyA9IHRyaWdnZXIucGFyZW50KCkucHJldigpLmNoaWxkcmVuKCk7XG5cbiAgICAgICAgICAgICAgICB0cmlnZ2VyLmFkZENsYXNzKCdpcy1hY3RpdmUnKTtcblxuICAgICAgICAgICAgICAgIHRodW1icy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoJ2lzLWFjdGl2ZScpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgaWYgKGdhbGxlcnkuaGFzQ2xhc3MoJ2lzLXpvb21lZCcpKSB7XG4gICAgICAgICAgICAgICAgICAgIGdhbGxlcnkucmVtb3ZlQ2xhc3MoJ2lzLXpvb21lZCcpO1xuICAgICAgICAgICAgICAgICAgICBpbWdDb250YWluZXIuY3NzKFwiaGVpZ2h0XCIsIFwiYXV0b1wiKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBTd2l0Y2ggaW1hZ2Ugc291cmNlXG4gICAgICAgICAgICAgICAgaW1nLmF0dHIoJ3NyYycsIHNyYyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgLy89PT0gUHVibGljIE1ldGhvZHMgPT09Ly9cbiAgICAgICAgZnVuY3Rpb24gaW5pdEhhbmRsZXIoKSB7XG4gICAgICAgICAgICBnYWxsZXJ5Lm9uKCdjbGljaycsICdhJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgbGV0IHRyaWdnZXIgPSAkKHRoaXMpO1xuICAgICAgICAgICAgICAgIGxldCB0cmlnZ2VyRGF0YSA9IHRyaWdnZXIuZGF0YShcImdhbGxlcnlcIik7XG4gICAgICAgICAgICAgICAgbGV0IGdhbGxlcnlJZCA9IGV2ZW50LmRlbGVnYXRlVGFyZ2V0LmlkO1xuICAgICAgICAgICAgICAgIGdhbGxlcnkgPSAkKCcjJyArIGdhbGxlcnlJZCk7XG5cbiAgICAgICAgICAgICAgICBpZiAodHJpZ2dlckRhdGEgPT09ICd6b29tJykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgaW1nQ29udGFpbmVyID0gdHJpZ2dlci5wYXJlbnQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZyA9IHRyaWdnZXIuc2libGluZ3MoKTtcbiAgICAgICAgICAgICAgICAgICAgR2FsbGVyeS56b29tKGltZ0NvbnRhaW5lciwgaW1nLCBnYWxsZXJ5KTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRyaWdnZXJEYXRhID09PSAndGh1bWInKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBpbWdDb250YWluZXIgPSB0cmlnZ2VyLnBhcmVudCgpLnNpYmxpbmdzKCk7XG4gICAgICAgICAgICAgICAgICAgIEdhbGxlcnkuc3dpdGNoKHRyaWdnZXIsIGltZ0NvbnRhaW5lciwgZ2FsbGVyeSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLz09PSBNYWtlIE1ldGhvZHMgUHVibGljID09PS8vXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpbml0OiBpbml0SGFuZGxlclxuICAgICAgICB9O1xuICAgIH0pKCk7XG5cbiAgICBBcHAuaW5pdCgpO1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvc3JjL2phdmFzY3JpcHRzL21vZHVsZXMvZ2FsbGVyeS5qcyJdLCJzb3VyY2VSb290IjoiIn0=