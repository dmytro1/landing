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
	        var userChoiceText = $('#section-' + dataID + ' .user-choice');
	        var choicePrice = document.getElementById(dataID + '-price').getAttribute('data-price');
	        var content = '';
	        for (var i in userChoice) {
	            content += "<p>" + i + ": " + userChoice[i] + "</p>";
	        }
	        content += "<p>Price: " + choicePrice;
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
	            "content": JSON.stringify(userChoice) + '{"price":' + price + '}',
	            "status": 'publish'
	        };
	
	        for (var i in userChoice) {
	            productData['param_' + i] = userChoice[i];
	        }
	
	        productData['param_price'] = price;
	
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
	        content += "<p>First name: " + productData.info_first_name + "</p>";
	        content += "<p>Last name: " + productData.info_last_name + "</p>";
	        content += "<p>Phone: " + productData.info_phone + "</p>";
	
	        event.preventDefault();
	
	        var createPost = new XMLHttpRequest();
	        createPost.open('POST', location.origin + '/wp-json/wp/v2/shop_order', true);
	        createPost.setRequestHeader('X-WP-Nonce', wpApiSettings.nonce);
	        // var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=Base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)}return t},decode:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=Base64._utf8_decode(t);return t},_utf8_encode:function(e){e=e.replace(/\r\n/g,"\n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t},_utf8_decode:function(e){var t="";var n=0;var r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}};
	        //createPost.setRequestHeader( 'Authorization', 'Basic ' + Base64.encode( 'test:0000' ) );
	        createPost.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
	        createPost.send(JSON.stringify(productData));
	        createPost.onreadystatechange = function () {
	            if (this.readyState !== 4) return;
	            console.log(this.readyState);
	            console.log(this.status);
	            if (this.status !== 201) {
	                console.log('Not 201: ' + this.status + ' ' + this.statusText);
	                alert('Not 201: ' + this.status + ' ' + this.statusText);
	                return;
	            }
	
	            if (this.readyState === 4) {
	                if (this.status === 201) {
	                    content += '<br>' + this.statusText + ' status: post added';
	                    jQuery(elementHref).carousel('next');
	                    userOrderText.innerHTML = content;
	                    console.log(this.statusText + ' status: post added');
	                    alert(this.statusText + ' status: post added');
	                }
	            }
	        };
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
	
	        //=== Use Strict ===//
	        'use strict';
	
	        //=== Private Variables ===//
	
	        var gallery = (0, _jquery2.default)('.gallery');
	
	        //=== Gallery Object ===//
	        var Gallery = {
	            zoom: function zoom(imgContainer, img) {
	                var containerHeight = imgContainer.outerHeight(),
	                    src = img.attr('src');
	                if (!gallery.hasClass('is-zoomed')) {
	                    // Set height of container
	                    imgContainer.css("height", containerHeight);
	
	                    // Add zoomed class to gallery container
	                    gallery.addClass('is-zoomed');
	
	                    // Enable image to be draggable
	                    img.draggable({
	                        drag: function drag(event, ui) {
	                            ui.position.left = Math.min(100, ui.position.left);
	                            ui.position.top = Math.min(100, ui.position.top);
	                        }
	                    });
	                } else {
	                    // Ensure height of container fits image
	                    imgContainer.css("height", "auto");
	
	                    // Remove zoomed class to gallery container
	                    gallery.removeClass('is-zoomed');
	                }
	            },
	            switch: function _switch(trigger, imgContainer) {
	                var src = trigger.attr('href'),
	                    thumbs = trigger.siblings(),
	                    img = trigger.parent().prev().children();
	
	                // Add active class to thumb
	                trigger.addClass('is-active');
	
	                // Remove active class from thumbs
	                thumbs.each(function () {
	                    if ((0, _jquery2.default)(this).hasClass('is-active')) {
	                        (0, _jquery2.default)(this).removeClass('is-active');
	                    }
	                });
	
	                // Reset container if in zoom state
	                if (gallery.hasClass('is-zoomed')) {
	                    gallery.removeClass('is-zoomed');
	                    imgContainer.css("height", "auto");
	                }
	
	                // Switch image source
	                img.attr('src', src);
	            }
	        };
	
	        //=== Public Methods ===//
	        function init() {
	
	            // Listen for clicks on anchors within gallery
	            gallery.delegate('a', 'click', function (event) {
	                var trigger = (0, _jquery2.default)(this);
	                var triggerData = trigger.data("gallery");
	
	                if (triggerData === 'zoom') {
	                    var imgContainer = trigger.parent(),
	                        img = trigger.siblings();
	                    Gallery.zoom(imgContainer, img);
	                } else if (triggerData === 'thumb') {
	                    var imgContainer = trigger.parent().siblings();
	                    Gallery.switch(trigger, imgContainer);
	                } else {
	                    return;
	                }
	
	                event.preventDefault();
	            });
	        }
	
	        //=== Make Methods Public ===//
	        return {
	            init: init
	        };
	    }();
	
	    App.init();
	};

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYjhkZmI5NjI5ZTE5MmUyMmNhYmQiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NyYy9qYXZhc2NyaXB0cy9jb21tb24uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NyYy9qYXZhc2NyaXB0cy9tb2R1bGVzL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NyYy9qYXZhc2NyaXB0cy9tb2R1bGVzL3BvcHVwLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImpRdWVyeVwiIiwid2VicGFjazovLy8uL2Fzc2V0cy9zcmMvamF2YXNjcmlwdHMvbW9kdWxlcy92YXJpYXRpb25zLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zcmMvamF2YXNjcmlwdHMvbW9kdWxlcy92YWxpZGF0aW9uLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zcmMvamF2YXNjcmlwdHMvbW9kdWxlcy9nYWxsZXJ5LmpzIl0sIm5hbWVzIjpbIiQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJiaW5kIiwiJCQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiTm9kZSIsInByb3RvdHlwZSIsIm9uIiwid2luZG93IiwibmFtZSIsImZuIiwiYWRkRXZlbnRMaXN0ZW5lciIsIk5vZGVMaXN0IiwiX19wcm90b19fIiwiQXJyYXkiLCJEb2N1bWVudCIsImZvckVhY2giLCJlbGVtIiwialF1ZXJ5Iiwic3R5bGUiLCJkaXNwbGF5IiwibmF2YmFyVG9EZWZhdWx0IiwiYmFja2dyb3VuZENvbG9yIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwibWVudUl0ZW0iLCJpIiwibGVuZ3RoIiwibmF2YmFyVG9GbG9hdCIsImFkZCIsInNldE5hdlN0eWxlIiwicGFnZVlPZmZzZXQiLCJ0b2dnbGVTZWN0aW9ucyIsImJ1dHRvbiIsImRhdGFBdHRyaWJ1dGUiLCJnZXRBdHRyaWJ1dGUiLCJzZWN0aW9uIiwiY29sbGFwc2VTZWN0aW9ucyIsImlkIiwidG9nZ2xlIiwiY2hlY2tvdXRCdG4iLCJlbCIsInNjcm9sbEVsZW0iLCJkYXRhSUQiLCJ1c2VyQ2hvaWNlVGV4dCIsImNob2ljZVByaWNlIiwiZ2V0RWxlbWVudEJ5SWQiLCJjb250ZW50IiwidXNlckNob2ljZSIsImlubmVySFRNTCIsImFuaW1hdGUiLCJzY3JvbGxUb3AiLCJvZmZzZXRUb3AiLCJvdXRlcldpZHRoIiwiY2xpY2siLCJsYXp5U2Nyb2xsIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIm9mZnNldCIsInNlY3Rpb25zIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsInNlbGVjdE9uQ2xpY2siLCJjbGlja2VkRWxlbWVudERhdGFJZCIsImFsbFNlbGVjdHMiLCJpc05hTiIsIml0ZW1TZWxlY3QiLCJzZWxlY3REYXRhIiwiYXR0cmlidXRlcyIsImRhdGEiLCJ2YWx1ZSIsIm9wdGlvbnMiLCJzZWxlY3RlZEluZGV4IiwiY29uc29sZSIsImxvZyIsImNvbXBhcmUiLCJwcmludFByaWNlIiwicHJpbnRNZXNzYWdlIiwiY2hlY2tvdXRCdXR0b24iLCJwYXJhbWV0ZXIiLCJzZXRBdHRyaWJ1dGUiLCJkaXNhYmxlZCIsInZhcmlhdGlvbnMiLCJ2YXJpYXRpb25zT2JqZWN0IiwiZGF0YUJ5SWQiLCJ2YXJpYXRpb24iLCJ2YXJpYXRpb25zV2l0aG91dFByaWNlIiwicHJpY2UiLCJKU09OIiwic3RyaW5naWZ5IiwiYWRkVG9DYXJ0IiwiY29udGFpbnMiLCJlbGVtZW50SHJlZiIsInVzZXJPcmRlclRleHQiLCJpbnB1dE5hbWUiLCJpbnB1dExhc3ROYW1lIiwiaW5wdXRFbWFpbCIsImlucHV0UGhvbmUiLCJ0aXRsZSIsInRleHRDb250ZW50IiwicHJpY2VUYWciLCJyYW5kb21JZCIsIk1hdGgiLCJ0cnVuYyIsInJhbmRvbSIsInByb2R1Y3REYXRhIiwicGFyYW1fcHJpY2UiLCJpbmZvX2ZpcnN0X25hbWUiLCJpbmZvX2xhc3RfbmFtZSIsImluZm9fcGhvbmUiLCJjcmVhdGVQb3N0IiwiWE1MSHR0cFJlcXVlc3QiLCJvcGVuIiwibG9jYXRpb24iLCJvcmlnaW4iLCJzZXRSZXF1ZXN0SGVhZGVyIiwid3BBcGlTZXR0aW5ncyIsIm5vbmNlIiwic2VuZCIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsInJlYWR5U3RhdGUiLCJzdGF0dXMiLCJzdGF0dXNUZXh0IiwiYWxlcnQiLCJjYXJvdXNlbCIsInZhbGlkYXRvciIsIkNvbnN0cnVjdG9yIiwiVkVSU0lPTiIsImZvY3VzIiwiQXBwIiwiZ2FsbGVyeSIsIkdhbGxlcnkiLCJ6b29tIiwiaW1nQ29udGFpbmVyIiwiaW1nIiwiY29udGFpbmVySGVpZ2h0Iiwib3V0ZXJIZWlnaHQiLCJzcmMiLCJhdHRyIiwiaGFzQ2xhc3MiLCJjc3MiLCJkcmFnZ2FibGUiLCJkcmFnIiwidWkiLCJwb3NpdGlvbiIsImxlZnQiLCJtaW4iLCJ0b3AiLCJzd2l0Y2giLCJ0cmlnZ2VyIiwidGh1bWJzIiwic2libGluZ3MiLCJwYXJlbnQiLCJwcmV2IiwiY2hpbGRyZW4iLCJlYWNoIiwiaW5pdCIsImRlbGVnYXRlIiwidHJpZ2dlckRhdGEiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7QUNuQkE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBdkJBOztBQUVBLEtBQU1BLElBQUlDLFNBQVNDLGFBQVQsQ0FBdUJDLElBQXZCLENBQTRCRixRQUE1QixDQUFWO0FBQ0EsS0FBTUcsS0FBS0gsU0FBU0ksZ0JBQVQsQ0FBMEJGLElBQTFCLENBQStCRixRQUEvQixDQUFYOztBQUVBSyxNQUFLQyxTQUFMLENBQWVDLEVBQWYsR0FBb0JDLE9BQU9ELEVBQVAsR0FBWSxVQUFVRSxJQUFWLEVBQWdCQyxFQUFoQixFQUFvQjtBQUNo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LGtCQUpELE1BSU8sSUFBSXdCLGdCQUFnQixPQUFwQixFQUE2QjtBQUNoQyx5QkFBSXpCLGVBQWVnQixRQUFRRyxNQUFSLEdBQWlCRCxRQUFqQixFQUFuQjtBQUNBcEIsNkJBQVFpQixNQUFSLENBQWVDLE9BQWYsRUFBd0JoQixZQUF4QjtBQUNILGtCQUhNLE1BR0E7QUFDSDtBQUNIOztBQUVEN0UsdUJBQU1DLGNBQU47QUFDSCxjQWhCRDtBQWtCSDs7QUFFRDtBQUNBLGdCQUFPO0FBQ0htRyxtQkFBTUE7QUFESCxVQUFQO0FBSUgsTUExRlMsRUFBVjs7QUE0RkEzQixTQUFJMkIsSUFBSjtBQUNILEUiLCJmaWxlIjoiY29tbW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgYjhkZmI5NjI5ZTE5MmUyMmNhYmQiLCIvLyBpbXBvcnQgJCBmcm9tIFwianF1ZXJ5XCI7XHJcblxyXG5jb25zdCAkID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvci5iaW5kKGRvY3VtZW50KTtcclxuY29uc3QgJCQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsLmJpbmQoZG9jdW1lbnQpO1xyXG5cclxuTm9kZS5wcm90b3R5cGUub24gPSB3aW5kb3cub24gPSBmdW5jdGlvbiAobmFtZSwgZm4pIHtcclxuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihuYW1lLCBmbik7XHJcbn07XHJcblxyXG5Ob2RlTGlzdC5wcm90b3R5cGUuX19wcm90b19fID0gQXJyYXkucHJvdG90eXBlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXHJcbk5vZGVMaXN0LnByb3RvdHlwZS5fX3Byb3RvX18gPSBEb2N1bWVudC5wcm90b3R5cGU7XHJcblxyXG5Ob2RlTGlzdC5wcm90b3R5cGUub24gPSBOb2RlTGlzdC5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uIChuYW1lLCBmbikge1xyXG4gICAgdGhpcy5mb3JFYWNoKChlbGVtKSA9PiB7XHJcbiAgICAgICAgZWxlbS5vbihuYW1lLCBmbik7XHJcbiAgICB9KTtcclxufTtcclxuLy9leHBvcnQgeyQsICQkfTtcclxuXHJcbmltcG9ydCBtYWluIGZyb20gXCIuL21vZHVsZXMvbWFpblwiO1xyXG5pbXBvcnQgcG9wdXAgZnJvbSBcIi4vbW9kdWxlcy9wb3B1cFwiO1xyXG5pbXBvcnQgdmFyaWF0aW9ucyBmcm9tIFwiLi9tb2R1bGVzL3ZhcmlhdGlvbnNcIjtcclxuaW1wb3J0IHZhbGlkYXRpb24gZnJvbSBcIi4vbW9kdWxlcy92YWxpZGF0aW9uXCI7XHJcbmltcG9ydCBnYWxsZXJ5IGZyb20gXCIuL21vZHVsZXMvZ2FsbGVyeVwiO1xyXG5cclxuXHJcbi8vIGltcG9ydCBcIi4vcGx1Z2lucy9pbmZpbml0ZS1zY3JvbGxcIjtcclxuXHJcbmpRdWVyeShmdW5jdGlvbiAoKSB7XHJcbiAgICBtYWluKCQsICQkKTtcclxuICAgIHBvcHVwKCk7XHJcbiAgICB2YXJpYXRpb25zKCQpO1xyXG4gICAgdmFsaWRhdGlvbigpO1xyXG4gICAgZ2FsbGVyeSgpO1xyXG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvc3JjL2phdmFzY3JpcHRzL2NvbW1vbi5qcyIsIi8vIGltcG9ydCAkIGZyb20gXCJqcXVlcnlcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICgkLCAkJCkgPT4ge1xyXG5cclxuICAgIHdpbmRvdy5vbignbG9hZCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKCcubG9hZGVyX2lubmVyJykuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICQoJy5sb2FkZXInKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICB9KTtcclxuXHJcbiAgICBmdW5jdGlvbiBuYXZiYXJUb0RlZmF1bHQoKSB7XHJcbiAgICAgICAgJCgnLm5hdmJhci1kZWZhdWx0Jykuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3RyYW5zcGFyZW50JztcclxuICAgICAgICAkKCcubmF2YmFyLWJyYW5kIGltZycpLmNsYXNzTGlzdC5yZW1vdmUoJ2ltZ19yZXNwb25zaXZlJyk7XHJcbiAgICAgICAgJCgnLm5hdmJhci1maXhlZC10b3AnKS5jbGFzc0xpc3QucmVtb3ZlKCd0b3AtbmF2LWNvbGxhcHNlJyk7XHJcbiAgICAgICAgbGV0IG1lbnVJdGVtID0gJCQoJy5uYXZiYXItbmF2IGEnKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1lbnVJdGVtLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIG1lbnVJdGVtW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ3doaXRlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG5hdmJhclRvRmxvYXQoKSB7XHJcbiAgICAgICAgJCgnLm5hdmJhci1kZWZhdWx0Jykuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JnYmEoNDgsIDQ4LCA0OCwgMC41KSc7XHJcbiAgICAgICAgJCgnLm5hdmJhci1kZWZhdWx0JykuY2xhc3NMaXN0LmFkZCgndG9wLW5hdi1jb2xsYXBzZScpO1xyXG4gICAgICAgICQoJy5uYXZiYXItYnJhbmQgaW1nJykuY2xhc3NMaXN0LmFkZCgnaW1nX3Jlc3BvbnNpdmUnKTtcclxuICAgICAgICBsZXQgbWVudUl0ZW0gPSAkJCgnLm5hdmJhci1uYXYgYScpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWVudUl0ZW0ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbWVudUl0ZW1baV0uY2xhc3NMaXN0LmFkZCgnd2hpdGUnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0TmF2U3R5bGUoKSB7XHJcbiAgICAgICAgbmF2YmFyVG9GbG9hdCgpO1xyXG4gICAgICAgIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPCA1MCkge1xyXG4gICAgICAgICAgICBuYXZiYXJUb0RlZmF1bHQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgd2luZG93LnRvZ2dsZVNlY3Rpb25zID0gZnVuY3Rpb24gKGJ1dHRvbikge1xyXG4gICAgICAgICQoJy5jbG9zZS1idG4nKS5jbGFzc0xpc3QuYWRkKCdzaG93aW5nJyk7XHJcbiAgICAgICAgaWYgKCQkKCcuY29sbGFwc2Utc2VjdGlvbi5zaG93aW5nJykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICQoJy5jbG9zZS1idG4nKS5jbGFzc0xpc3QucmVtb3ZlKCdzaG93aW5nJyk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGRhdGFBdHRyaWJ1dGUgPSBidXR0b24uZ2V0QXR0cmlidXRlKCdkYXRhLWF0dHInKTtcclxuICAgICAgICBsZXQgc2VjdGlvbiA9ICQoJyNzZWN0aW9uLScgKyBkYXRhQXR0cmlidXRlKTtcclxuICAgICAgICAvLyBzZWN0aW9uLm9mZnNldFRvcCA9IDIwO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHNlY3Rpb24ub2Zmc2V0VG9wKTtcclxuICAgICAgICBsZXQgY29sbGFwc2VTZWN0aW9ucyA9ICQkKCcuY29sbGFwc2Utc2VjdGlvbicpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29sbGFwc2VTZWN0aW9ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoIShjb2xsYXBzZVNlY3Rpb25zW2ldLmlkID09PSBzZWN0aW9uLmlkKSkge1xyXG4gICAgICAgICAgICAgICAgY29sbGFwc2VTZWN0aW9uc1tpXS5jbGFzc0xpc3QucmVtb3ZlKCdzaG93aW5nJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgc2VjdGlvbi5jbGFzc0xpc3QudG9nZ2xlKCdzaG93aW5nJyk7XHJcbiAgICAgICAgaWYgKCQkKCcuY29sbGFwc2Utc2VjdGlvbi5zaG93aW5nJykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICQoJy5jbG9zZS1idG4nKS5jbGFzc0xpc3QuYWRkKCdzaG93aW5nJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB3aW5kb3cuY2hlY2tvdXRCdG4gPSBmdW5jdGlvbiAoZWwpIHtcclxuICAgICAgICBzY3JvbGxFbGVtKCk7XHJcblxyXG4gICAgICAgIGxldCBkYXRhSUQgPSBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtY2hlY2tvdXQnKTtcclxuICAgICAgICBsZXQgdXNlckNob2ljZVRleHQgPSAkKCcjc2VjdGlvbi0nICsgZGF0YUlEICsgJyAudXNlci1jaG9pY2UnKTtcclxuICAgICAgICBsZXQgY2hvaWNlUHJpY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkYXRhSUQgKyAnLXByaWNlJykuZ2V0QXR0cmlidXRlKCdkYXRhLXByaWNlJyk7XHJcbiAgICAgICAgbGV0IGNvbnRlbnQgPSAnJztcclxuICAgICAgICBmb3IgKGxldCBpIGluIHVzZXJDaG9pY2UpIHtcclxuICAgICAgICAgICAgY29udGVudCArPSBcIjxwPlwiICsgaSArIFwiOiBcIiArIHVzZXJDaG9pY2VbaV0gKyBcIjwvcD5cIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29udGVudCArPSBcIjxwPlByaWNlOiBcIiArIGNob2ljZVByaWNlO1xyXG4gICAgICAgIHVzZXJDaG9pY2VUZXh0LmlubmVySFRNTCA9IGNvbnRlbnQ7XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICBmdW5jdGlvbiBzY3JvbGxFbGVtKCkge1xyXG4gICAgICAgIGpRdWVyeSgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICBzY3JvbGxUb3A6ICQoXCIjY2hvb3NlXCIpLm9mZnNldFRvcCAtIDUwXHJcbiAgICAgICAgfSwgMTAwKTtcclxuICAgIH1cclxuXHJcbiAgICB3aW5kb3cub24oJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgc2V0TmF2U3R5bGUoKTtcclxuICAgICAgICAvL05hdmJhciBzdHlsZSBzd2l0Y2hlclxyXG4gICAgICAgIHdpbmRvdy5vbignc2Nyb2xsJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBzZXROYXZTdHlsZSgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAod2luZG93Lm91dGVyV2lkdGggPCA3NjgpIHtcclxuXHJcbiAgICAgICAgICAgIC8vU0FORFdJQ0ggQlVUVE9OXHJcbiAgICAgICAgICAgICQoJy5uYXZiYXItdG9nZ2xlJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgbmF2YmFyVG9GbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgJCgnLnNhbmR3aWNoJykuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy9ISURFIE1FTlUgQ0xJQ0tJTkcgTElcclxuICAgICAgICAgICAgJCQoJy5uYXZiYXItY29sbGFwc2UgdWwgbGkgYScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICQoJy5uYXZiYXItdG9nZ2xlJykuY2xpY2soKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL0xBWlkgQU5JTUFUSU5HIEZPUiBCVVRUT05TIEFORCBNRU5VIElURU1TXHJcbiAgICAgICAgJCQoJy5zY3JvbGxfYnRuJykub24oJ2NsaWNrJywgbGF6eVNjcm9sbCk7XHJcbiAgICAgICAgJCQoJy5uYXYgYScpLm9uKCdjbGljaycsIGxhenlTY3JvbGwpO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBsYXp5U2Nyb2xsKCkge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBsZXQgaWQgPSB0aGlzLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xyXG4gICAgICAgICAgICBsZXQgb2Zmc2V0ID0gJChpZCkub2Zmc2V0VG9wO1xyXG4gICAgICAgICAgICAvL2RvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdodG1sJylbMF0uYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgIGlmIChpZCA9PT0gXCIjY2hvb3NlXCIpIHtcclxuICAgICAgICAgICAgICAgIG9mZnNldCAtPSA1MDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgalF1ZXJ5KCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICBzY3JvbGxUb3A6IG9mZnNldFxyXG4gICAgICAgICAgICB9LCA3MDApO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBmdW5jdGlvbiBsYXp5U2Nyb2xsKCkge1xyXG4gICAgICAgIC8vICAgICAgICAgbGV0IGlkID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcclxuICAgICAgICAvLyAgICAgICAgIGxldCBvZmZzZXQgPSAkKGlkKS5vZmZzZXRUb3A7XHJcbiAgICAgICAgLy8gICAgIGlmICh0aGlzLmhhc2ggIT09IFwiXCIpIHtcclxuICAgICAgICAvLyAgICAgICAgIC8vIFByZXZlbnQgZGVmYXVsdCBhbmNob3IgY2xpY2sgYmVoYXZpb3JcclxuICAgICAgICAvLyAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyAgICAgICAgIC8vIFN0b3JlIGhhc2hcclxuICAgICAgICAvLyAgICAgICAgIHZhciBoYXNoID0gdGhpcy5oYXNoO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gICAgICAgICAvLyBVc2luZyBqUXVlcnkncyBhbmltYXRlKCkgbWV0aG9kIHRvIGFkZCBzbW9vdGggcGFnZSBzY3JvbGxcclxuICAgICAgICAvLyAgICAgICAgIC8vIFRoZSBvcHRpb25hbCBudW1iZXIgKDgwMCkgc3BlY2lmaWVzIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGl0IHRha2VzIHRvIHNjcm9sbCB0byB0aGUgc3BlY2lmaWVkIGFyZWFcclxuICAgICAgICAvLyAgICAgICAgIGpRdWVyeSgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIHNjcm9sbFRvcDogb2Zmc2V0XHJcbiAgICAgICAgLy8gICAgICAgICB9LCAzMDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIC8vIEFkZCBoYXNoICgjKSB0byBVUkwgd2hlbiBkb25lIHNjcm9sbGluZyAoZGVmYXVsdCBjbGljayBiZWhhdmlvcilcclxuICAgICAgICAvLyAgICAgICAgICAgICAvL3dpbmRvdy5sb2NhdGlvbi5oYXNoID0gaGFzaDtcclxuICAgICAgICAvLyAgICAgICAgIH0pO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAvLyBNYWtlIHN1cmUgdGhpcy5oYXNoIGhhcyBhIHZhbHVlIGJlZm9yZSBvdmVycmlkaW5nIGRlZmF1bHQgYmVoYXZpb3JcclxuXHJcblxyXG4gICAgICAgICQoJy5jbG9zZS1idG4nKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGxldCBzZWN0aW9ucyA9ICQkKCcuY29sbGFwc2Utc2VjdGlvbicpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlY3Rpb25zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBzZWN0aW9uc1tpXS5jbGFzc0xpc3QucmVtb3ZlKCdzaG93aW5nJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5jbGFzc0xpc3QucmVtb3ZlKCdzaG93aW5nJyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGpRdWVyeSgnW2RhdGEtc2xpZGU9XCJwcmV2XCJdJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBzY3JvbGxFbGVtKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL3NyYy9qYXZhc2NyaXB0cy9tb2R1bGVzL21haW4uanMiLCJpbXBvcnQgJCBmcm9tIFwianF1ZXJ5XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcbiAgICAkKCcjbmV4dC1wZXJzb25hbCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKCcjanMtcHJvZHVjdC1pbmZvJykuYWRkQ2xhc3MoJ3NsaWRlLW91dC1sZWZ0Jyk7XHJcbiAgICAgICAgJCgnI2pzLXBlcnNvbmFsLWluZm8nKS5hZGRDbGFzcygnc2xpZGUtaW4tcmlnaHQnKTtcclxuICAgIH0pO1xyXG4gICAgJCgnI3ByZXYtcHJvZHVjdC1pbmZvJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoJyNqcy1wZXJzb25hbC1pbmZvJykucmVtb3ZlQ2xhc3MoJ3NsaWRlLWluLXJpZ2h0Jyk7XHJcbiAgICAgICAgJCgnI2pzLXByb2R1Y3QtaW5mbycpLnJlbW92ZUNsYXNzKCdzbGlkZS1vdXQtbGVmdCcpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5cclxuXHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvc3JjL2phdmFzY3JpcHRzL21vZHVsZXMvcG9wdXAuanMiLCJtb2R1bGUuZXhwb3J0cyA9IGpRdWVyeTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImpRdWVyeVwiXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGltcG9ydCAkIGZyb20gXCJqcXVlcnlcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICgkKSA9PiB7XHJcbiAgICB3aW5kb3cudXNlckNob2ljZSA9IHt9O1xyXG5cclxuICAgIHdpbmRvdy5zZWxlY3RPbkNsaWNrID0gZnVuY3Rpb24gKGVsKSB7XHJcblxyXG4gICAgICAgIGxldCBjbGlja2VkRWxlbWVudERhdGFJZCA9IGVsLmdldEF0dHJpYnV0ZSgnZGF0YScpO1xyXG4gICAgICAgIGxldCBhbGxTZWxlY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGFdJyk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgaW4gYWxsU2VsZWN0cykge1xyXG5cclxuICAgICAgICAgICAgaWYgKGlzTmFOKGkpKSB7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IGl0ZW1TZWxlY3QgPSBhbGxTZWxlY3RzW2ldO1xyXG4gICAgICAgICAgICBsZXQgc2VsZWN0RGF0YSA9IGl0ZW1TZWxlY3QuYXR0cmlidXRlcy5kYXRhLnZhbHVlO1xyXG5cclxuICAgICAgICAgICAgaWYgKHNlbGVjdERhdGEgPT09IGNsaWNrZWRFbGVtZW50RGF0YUlkKSB7XHJcbiAgICAgICAgICAgICAgICB1c2VyQ2hvaWNlW2l0ZW1TZWxlY3QubmFtZV0gPSBpdGVtU2VsZWN0Lm9wdGlvbnNbaXRlbVNlbGVjdC5zZWxlY3RlZEluZGV4XS52YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ1RoaXMgaXMgdXNlciBjaG9pY2UnKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh1c2VyQ2hvaWNlKTtcclxuXHJcbiAgICAgICAgY29tcGFyZSh1c2VyQ2hvaWNlLCBjbGlja2VkRWxlbWVudERhdGFJZCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIGNvbXBhcmUodXNlckNob2ljZSwgZGF0YUlEKSB7XHJcblxyXG4gICAgICAgIGxldCBwcmludFByaWNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZGF0YUlEICsgJy1wcmljZScpO1xyXG4gICAgICAgIGxldCBwcmludE1lc3NhZ2UgPSAkKCcjbWVzc2FnZS0nICsgZGF0YUlEKTtcclxuICAgICAgICBsZXQgY2hlY2tvdXRCdXR0b24gPSAkKFwiI3NlY3Rpb24tXCIgKyBkYXRhSUQgKyBcIiBidXR0b25bZGF0YS1zbGlkZT0nbmV4dCddXCIpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBwYXJhbWV0ZXIgaW4gdXNlckNob2ljZSkge1xyXG4gICAgICAgICAgICBpZiAodXNlckNob2ljZVtwYXJhbWV0ZXJdID09PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICBwcmludFByaWNlLnNldEF0dHJpYnV0ZSgnZGF0YS1wcmljZScsICcnKTtcclxuICAgICAgICAgICAgICAgIHByaW50UHJpY2UuaW5uZXJIVE1MID0gXCImbmJzcDtcIjtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTZWxlY3QgdGhlICcgKyBwYXJhbWV0ZXIpO1xyXG4gICAgICAgICAgICAgICAgcHJpbnRNZXNzYWdlLmlubmVySFRNTCA9ICdTZWxlY3QgdGhlICcgKyBwYXJhbWV0ZXI7XHJcbiAgICAgICAgICAgICAgICBjaGVja291dEJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCB2YXJpYXRpb25zID0gdmFyaWF0aW9uc09iamVjdC5kYXRhQnlJZFtkYXRhSURdO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZygnVGhpcyBpcyBWYXJpYXRpb25zJyk7XHJcbiAgICAgICAgY29uc29sZS5sb2codmFyaWF0aW9ucyk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgaW4gdmFyaWF0aW9ucykge1xyXG4gICAgICAgICAgICBsZXQgdmFyaWF0aW9uID0gdmFyaWF0aW9uc1tpXTtcclxuICAgICAgICAgICAgbGV0IHZhcmlhdGlvbnNXaXRob3V0UHJpY2UgPSB7fTtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IHBhcmFtZXRlciBpbiB2YXJpYXRpb24pIHtcclxuICAgICAgICAgICAgICAgIHZhcmlhdGlvbnNXaXRob3V0UHJpY2VbcGFyYW1ldGVyXSA9IHZhcmlhdGlvbltwYXJhbWV0ZXJdO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBkZWxldGUgdmFyaWF0aW9uc1dpdGhvdXRQcmljZS5wcmljZTtcclxuXHJcbiAgICAgICAgICAgIGlmIChKU09OLnN0cmluZ2lmeSh1c2VyQ2hvaWNlKSA9PT0gSlNPTi5zdHJpbmdpZnkodmFyaWF0aW9uc1dpdGhvdXRQcmljZSkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHZhcmlhdGlvbi5wcmljZSk7XHJcbiAgICAgICAgICAgICAgICBwcmludFByaWNlLnNldEF0dHJpYnV0ZSgnZGF0YS1wcmljZScsIHZhcmlhdGlvbi5wcmljZSk7XHJcbiAgICAgICAgICAgICAgICBwcmludFByaWNlLmlubmVySFRNTCA9ICc8aDMgY2xhc3M9XCJyZWQtcHJpY2VcIj4nICsgdmFyaWF0aW9uLnByaWNlICsgJyQ8L2gzPic7XHJcbiAgICAgICAgICAgICAgICBwcmludE1lc3NhZ2UuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIGNoZWNrb3V0QnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBwcmludFByaWNlLnNldEF0dHJpYnV0ZSgnZGF0YS1wcmljZScsICcnKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdWYXJpYXRpb24gaXMgbm90IGZvdW5kJyk7XHJcbiAgICAgICAgICAgICAgICBwcmludFByaWNlLmlubmVySFRNTCA9ICc8aDM+LSAtPC9oMz4nO1xyXG4gICAgICAgICAgICAgICAgcHJpbnRNZXNzYWdlLmlubmVySFRNTCA9ICdWYXJpYXRpb24gaXMgbm90IGZvdW5kJztcclxuICAgICAgICAgICAgICAgIGNoZWNrb3V0QnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbi8vQ2xpY2sgdG8gQ2hlY2tvdXQgLSBTbGlkZSBidXR0b25cclxuXHJcblxyXG4vL0NyZWF0ZSBuZXcgcG9zdFxyXG4gICAgd2luZG93LmFkZFRvQ2FydCA9IGZ1bmN0aW9uIChlbCkge1xyXG5cclxuICAgICAgICBpZiAoZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdkaXNhYmxlZCcpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGpRdWVyeSgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICBzY3JvbGxUb3A6ICQoXCIjY2hvb3NlXCIpLm9mZnNldFRvcCAtIDUwXHJcbiAgICAgICAgfSwgMTAwKTtcclxuXHJcbiAgICAgICAgbGV0IGNsaWNrZWRFbGVtZW50RGF0YUlkID0gZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWF0dHInKTtcclxuICAgICAgICBsZXQgZWxlbWVudEhyZWYgPSBlbC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcclxuICAgICAgICBsZXQgdXNlck9yZGVyVGV4dCA9ICQoJyNzZWN0aW9uLScgKyBjbGlja2VkRWxlbWVudERhdGFJZCArICcgLnVzZXItb3JkZXInKTtcclxuICAgICAgICBsZXQgaW5wdXROYW1lID0gJCgnI2Zvcm0tJyArIGNsaWNrZWRFbGVtZW50RGF0YUlkICsgJyBpbnB1dFtuYW1lPVwiZmlyc3RfbmFtZVwiXScpO1xyXG4gICAgICAgIGxldCBpbnB1dExhc3ROYW1lID0gJCgnI2Zvcm0tJyArIGNsaWNrZWRFbGVtZW50RGF0YUlkICsgJyBpbnB1dFtuYW1lPVwibGFzdF9uYW1lXCJdJyk7XHJcbiAgICAgICAgbGV0IGlucHV0RW1haWwgPSAkKCcjZm9ybS0nICsgY2xpY2tlZEVsZW1lbnREYXRhSWQgKyAnIGlucHV0W25hbWU9XCJlbWFpbFwiXScpO1xyXG4gICAgICAgIGxldCBpbnB1dFBob25lID0gJCgnI2Zvcm0tJyArIGNsaWNrZWRFbGVtZW50RGF0YUlkICsgJyBpbnB1dFtuYW1lPVwicGhvbmVcIl0nKTtcclxuXHJcbiAgICAgICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWwubmFtZSkudGV4dENvbnRlbnQ7XHJcblxyXG4gICAgICAgIGxldCBwcmljZVRhZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNsaWNrZWRFbGVtZW50RGF0YUlkICsgJy1wcmljZScpO1xyXG4gICAgICAgIGxldCBwcmljZSA9IHByaWNlVGFnLmdldEF0dHJpYnV0ZSgnZGF0YS1wcmljZScpO1xyXG4gICAgICAgIGxldCByYW5kb21JZCA9IE1hdGgudHJ1bmMoKE1hdGgucmFuZG9tKCkqMTAwMDAwKSk7XHJcbiAgICAgICAgbGV0IHByb2R1Y3REYXRhID0ge1xyXG4gICAgICAgICAgICBcInRpdGxlXCI6IHRpdGxlICsgJyBbJyArIHJhbmRvbUlkICsgJ10nLFxyXG4gICAgICAgICAgICBcImNvbnRlbnRcIjogSlNPTi5zdHJpbmdpZnkodXNlckNob2ljZSkgKyAne1wicHJpY2VcIjonICsgcHJpY2UgKyAnfScsXHJcbiAgICAgICAgICAgIFwic3RhdHVzXCI6ICdwdWJsaXNoJ1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgaW4gdXNlckNob2ljZSkge1xyXG4gICAgICAgICAgICBwcm9kdWN0RGF0YVsncGFyYW1fJyArIGldID0gdXNlckNob2ljZVtpXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb2R1Y3REYXRhWydwYXJhbV9wcmljZSddID0gcHJpY2U7XHJcblxyXG4gICAgICAgIHByb2R1Y3REYXRhWydpbmZvX2ZpcnN0X25hbWUnXSA9IGlucHV0TmFtZS52YWx1ZTtcclxuICAgICAgICBwcm9kdWN0RGF0YVsnaW5mb19sYXN0X25hbWUnXSA9IGlucHV0TGFzdE5hbWUudmFsdWU7XHJcbiAgICAgICAgcHJvZHVjdERhdGFbJ2luZm9fZW1haWwnXSA9IGlucHV0RW1haWwudmFsdWU7XHJcbiAgICAgICAgcHJvZHVjdERhdGFbJ2luZm9fcGhvbmUnXSA9IGlucHV0UGhvbmUudmFsdWU7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKHByb2R1Y3REYXRhKTtcclxuXHJcbiAgICAgICAgbGV0IGNvbnRlbnQgPSAnJztcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSBpbiB1c2VyQ2hvaWNlKSB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQgKz0gXCI8cD5cIiArIGkgKyBcIjogXCIgKyB1c2VyQ2hvaWNlW2ldICsgXCI8L3A+XCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnRlbnQgKz0gXCI8cD5QcmljZTogXCIgKyBwcm9kdWN0RGF0YS5wYXJhbV9wcmljZSArIFwiPC9wPlwiO1xyXG4gICAgICAgIGNvbnRlbnQgKz0gXCI8cD5GaXJzdCBuYW1lOiBcIiArIHByb2R1Y3REYXRhLmluZm9fZmlyc3RfbmFtZSArIFwiPC9wPlwiO1xyXG4gICAgICAgIGNvbnRlbnQgKz0gXCI8cD5MYXN0IG5hbWU6IFwiICsgcHJvZHVjdERhdGEuaW5mb19sYXN0X25hbWUgKyBcIjwvcD5cIjtcclxuICAgICAgICBjb250ZW50ICs9IFwiPHA+UGhvbmU6IFwiICsgcHJvZHVjdERhdGEuaW5mb19waG9uZSArIFwiPC9wPlwiO1xyXG5cclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBsZXQgY3JlYXRlUG9zdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgIGNyZWF0ZVBvc3Qub3BlbignUE9TVCcsIGxvY2F0aW9uLm9yaWdpbiArICcvd3AtanNvbi93cC92Mi9zaG9wX29yZGVyJywgdHJ1ZSk7XHJcbiAgICAgICAgY3JlYXRlUG9zdC5zZXRSZXF1ZXN0SGVhZGVyKCdYLVdQLU5vbmNlJywgd3BBcGlTZXR0aW5ncy5ub25jZSk7XHJcbiAgICAgICAgLy8gdmFyIEJhc2U2ND17X2tleVN0cjpcIkFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky89XCIsZW5jb2RlOmZ1bmN0aW9uKGUpe3ZhciB0PVwiXCI7dmFyIG4scixpLHMsbyx1LGE7dmFyIGY9MDtlPUJhc2U2NC5fdXRmOF9lbmNvZGUoZSk7d2hpbGUoZjxlLmxlbmd0aCl7bj1lLmNoYXJDb2RlQXQoZisrKTtyPWUuY2hhckNvZGVBdChmKyspO2k9ZS5jaGFyQ29kZUF0KGYrKyk7cz1uPj4yO289KG4mMyk8PDR8cj4+NDt1PShyJjE1KTw8MnxpPj42O2E9aSY2MztpZihpc05hTihyKSl7dT1hPTY0fWVsc2UgaWYoaXNOYU4oaSkpe2E9NjR9dD10K3RoaXMuX2tleVN0ci5jaGFyQXQocykrdGhpcy5fa2V5U3RyLmNoYXJBdChvKSt0aGlzLl9rZXlTdHIuY2hhckF0KHUpK3RoaXMuX2tleVN0ci5jaGFyQXQoYSl9cmV0dXJuIHR9LGRlY29kZTpmdW5jdGlvbihlKXt2YXIgdD1cIlwiO3ZhciBuLHIsaTt2YXIgcyxvLHUsYTt2YXIgZj0wO2U9ZS5yZXBsYWNlKC9bXkEtWmEtejAtOVxcK1xcL1xcPV0vZyxcIlwiKTt3aGlsZShmPGUubGVuZ3RoKXtzPXRoaXMuX2tleVN0ci5pbmRleE9mKGUuY2hhckF0KGYrKykpO289dGhpcy5fa2V5U3RyLmluZGV4T2YoZS5jaGFyQXQoZisrKSk7dT10aGlzLl9rZXlTdHIuaW5kZXhPZihlLmNoYXJBdChmKyspKTthPXRoaXMuX2tleVN0ci5pbmRleE9mKGUuY2hhckF0KGYrKykpO249czw8MnxvPj40O3I9KG8mMTUpPDw0fHU+PjI7aT0odSYzKTw8NnxhO3Q9dCtTdHJpbmcuZnJvbUNoYXJDb2RlKG4pO2lmKHUhPTY0KXt0PXQrU3RyaW5nLmZyb21DaGFyQ29kZShyKX1pZihhIT02NCl7dD10K1N0cmluZy5mcm9tQ2hhckNvZGUoaSl9fXQ9QmFzZTY0Ll91dGY4X2RlY29kZSh0KTtyZXR1cm4gdH0sX3V0ZjhfZW5jb2RlOmZ1bmN0aW9uKGUpe2U9ZS5yZXBsYWNlKC9cXHJcXG4vZyxcIlxcblwiKTt2YXIgdD1cIlwiO2Zvcih2YXIgbj0wO248ZS5sZW5ndGg7bisrKXt2YXIgcj1lLmNoYXJDb2RlQXQobik7aWYocjwxMjgpe3QrPVN0cmluZy5mcm9tQ2hhckNvZGUocil9ZWxzZSBpZihyPjEyNyYmcjwyMDQ4KXt0Kz1TdHJpbmcuZnJvbUNoYXJDb2RlKHI+PjZ8MTkyKTt0Kz1TdHJpbmcuZnJvbUNoYXJDb2RlKHImNjN8MTI4KX1lbHNle3QrPVN0cmluZy5mcm9tQ2hhckNvZGUocj4+MTJ8MjI0KTt0Kz1TdHJpbmcuZnJvbUNoYXJDb2RlKHI+PjYmNjN8MTI4KTt0Kz1TdHJpbmcuZnJvbUNoYXJDb2RlKHImNjN8MTI4KX19cmV0dXJuIHR9LF91dGY4X2RlY29kZTpmdW5jdGlvbihlKXt2YXIgdD1cIlwiO3ZhciBuPTA7dmFyIHI9YzE9YzI9MDt3aGlsZShuPGUubGVuZ3RoKXtyPWUuY2hhckNvZGVBdChuKTtpZihyPDEyOCl7dCs9U3RyaW5nLmZyb21DaGFyQ29kZShyKTtuKyt9ZWxzZSBpZihyPjE5MSYmcjwyMjQpe2MyPWUuY2hhckNvZGVBdChuKzEpO3QrPVN0cmluZy5mcm9tQ2hhckNvZGUoKHImMzEpPDw2fGMyJjYzKTtuKz0yfWVsc2V7YzI9ZS5jaGFyQ29kZUF0KG4rMSk7YzM9ZS5jaGFyQ29kZUF0KG4rMik7dCs9U3RyaW5nLmZyb21DaGFyQ29kZSgociYxNSk8PDEyfChjMiY2Myk8PDZ8YzMmNjMpO24rPTN9fXJldHVybiB0fX07XHJcbiAgICAgICAgLy9jcmVhdGVQb3N0LnNldFJlcXVlc3RIZWFkZXIoICdBdXRob3JpemF0aW9uJywgJ0Jhc2ljICcgKyBCYXNlNjQuZW5jb2RlKCAndGVzdDowMDAwJyApICk7XHJcbiAgICAgICAgY3JlYXRlUG9zdC5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvbjtjaGFyc2V0PVVURi04XCIpO1xyXG4gICAgICAgIGNyZWF0ZVBvc3Quc2VuZChKU09OLnN0cmluZ2lmeShwcm9kdWN0RGF0YSkpO1xyXG4gICAgICAgIGNyZWF0ZVBvc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5yZWFkeVN0YXRlICE9PSA0KSByZXR1cm47XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMucmVhZHlTdGF0ZSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdHVzKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdHVzICE9PSAyMDEpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdOb3QgMjAxOiAnICsgdGhpcy5zdGF0dXMgKyAnICcgKyB0aGlzLnN0YXR1c1RleHQpO1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoJ05vdCAyMDE6ICcgKyB0aGlzLnN0YXR1cyArICcgJyArIHRoaXMuc3RhdHVzVGV4dCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnJlYWR5U3RhdGUgPT09IDQpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXR1cyA9PT0gMjAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudCArPSAnPGJyPicgKyB0aGlzLnN0YXR1c1RleHQgKyAnIHN0YXR1czogcG9zdCBhZGRlZCc7XHJcbiAgICAgICAgICAgICAgICAgICAgalF1ZXJ5KGVsZW1lbnRIcmVmKS5jYXJvdXNlbCgnbmV4dCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJPcmRlclRleHQuaW5uZXJIVE1MID0gY29udGVudDtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXR1c1RleHQgKyAnIHN0YXR1czogcG9zdCBhZGRlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KHRoaXMuc3RhdHVzVGV4dCArICcgc3RhdHVzOiBwb3N0IGFkZGVkJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfTtcclxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvc3JjL2phdmFzY3JpcHRzL21vZHVsZXMvdmFyaWF0aW9ucy5qcyIsImltcG9ydCAkIGZyb20gXCJqcXVlcnlcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiYm9vc3RyYXAtdmFsaWRhdG9yIHZlcnNpb246XCIsIGpRdWVyeS5mbi52YWxpZGF0b3IuQ29uc3RydWN0b3IuVkVSU0lPTik7XHJcbiAgICAkKCdmb3JtJykudmFsaWRhdG9yKHtcclxuICAgICAgICBmb2N1czogZmFsc2UsXHJcbiAgICAgICAgLy8gZGVsYXk6IDMwMDBcclxuICAgIH0pO1xyXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9zcmMvamF2YXNjcmlwdHMvbW9kdWxlcy92YWxpZGF0aW9uLmpzIiwiaW1wb3J0ICQgZnJvbSBcImpxdWVyeVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xyXG4gICAgdmFyIEFwcCA9IChmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIC8vPT09IFVzZSBTdHJpY3QgPT09Ly9cclxuICAgICAgICAndXNlIHN0cmljdCc7XHJcblxyXG4gICAgICAgIC8vPT09IFByaXZhdGUgVmFyaWFibGVzID09PS8vXHJcbiAgICAgICAgdmFyIGdhbGxlcnkgPSAkKCcuZ2FsbGVyeScpO1xyXG5cclxuICAgICAgICAvLz09PSBHYWxsZXJ5IE9iamVjdCA9PT0vL1xyXG4gICAgICAgIHZhciBHYWxsZXJ5ID0ge1xyXG4gICAgICAgICAgICB6b29tOiBmdW5jdGlvbiAoaW1nQ29udGFpbmVyLCBpbWcpIHtcclxuICAgICAgICAgICAgICAgIHZhciBjb250YWluZXJIZWlnaHQgPSBpbWdDb250YWluZXIub3V0ZXJIZWlnaHQoKSxcclxuICAgICAgICAgICAgICAgICAgICBzcmMgPSBpbWcuYXR0cignc3JjJyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWdhbGxlcnkuaGFzQ2xhc3MoJ2lzLXpvb21lZCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gU2V0IGhlaWdodCBvZiBjb250YWluZXJcclxuICAgICAgICAgICAgICAgICAgICBpbWdDb250YWluZXIuY3NzKFwiaGVpZ2h0XCIsIGNvbnRhaW5lckhlaWdodCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIEFkZCB6b29tZWQgY2xhc3MgdG8gZ2FsbGVyeSBjb250YWluZXJcclxuICAgICAgICAgICAgICAgICAgICBnYWxsZXJ5LmFkZENsYXNzKCdpcy16b29tZWQnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gRW5hYmxlIGltYWdlIHRvIGJlIGRyYWdnYWJsZVxyXG4gICAgICAgICAgICAgICAgICAgIGltZy5kcmFnZ2FibGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkcmFnOiBmdW5jdGlvbiAoZXZlbnQsIHVpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1aS5wb3NpdGlvbi5sZWZ0ID0gTWF0aC5taW4oMTAwLCB1aS5wb3NpdGlvbi5sZWZ0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVpLnBvc2l0aW9uLnRvcCA9IE1hdGgubWluKDEwMCwgdWkucG9zaXRpb24udG9wKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBFbnN1cmUgaGVpZ2h0IG9mIGNvbnRhaW5lciBmaXRzIGltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgaW1nQ29udGFpbmVyLmNzcyhcImhlaWdodFwiLCBcImF1dG9cIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIFJlbW92ZSB6b29tZWQgY2xhc3MgdG8gZ2FsbGVyeSBjb250YWluZXJcclxuICAgICAgICAgICAgICAgICAgICBnYWxsZXJ5LnJlbW92ZUNsYXNzKCdpcy16b29tZWQnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3dpdGNoOiBmdW5jdGlvbiAodHJpZ2dlciwgaW1nQ29udGFpbmVyKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc3JjID0gdHJpZ2dlci5hdHRyKCdocmVmJyksXHJcbiAgICAgICAgICAgICAgICAgICAgdGh1bWJzID0gdHJpZ2dlci5zaWJsaW5ncygpLFxyXG4gICAgICAgICAgICAgICAgICAgIGltZyA9IHRyaWdnZXIucGFyZW50KCkucHJldigpLmNoaWxkcmVuKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gQWRkIGFjdGl2ZSBjbGFzcyB0byB0aHVtYlxyXG4gICAgICAgICAgICAgICAgdHJpZ2dlci5hZGRDbGFzcygnaXMtYWN0aXZlJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gUmVtb3ZlIGFjdGl2ZSBjbGFzcyBmcm9tIHRodW1ic1xyXG4gICAgICAgICAgICAgICAgdGh1bWJzLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKCdpcy1hY3RpdmUnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBSZXNldCBjb250YWluZXIgaWYgaW4gem9vbSBzdGF0ZVxyXG4gICAgICAgICAgICAgICAgaWYgKGdhbGxlcnkuaGFzQ2xhc3MoJ2lzLXpvb21lZCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2FsbGVyeS5yZW1vdmVDbGFzcygnaXMtem9vbWVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaW1nQ29udGFpbmVyLmNzcyhcImhlaWdodFwiLCBcImF1dG9cIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gU3dpdGNoIGltYWdlIHNvdXJjZVxyXG4gICAgICAgICAgICAgICAgaW1nLmF0dHIoJ3NyYycsIHNyYyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvLz09PSBQdWJsaWMgTWV0aG9kcyA9PT0vL1xyXG4gICAgICAgIGZ1bmN0aW9uIGluaXQoKSB7XHJcblxyXG4gICAgICAgICAgICAvLyBMaXN0ZW4gZm9yIGNsaWNrcyBvbiBhbmNob3JzIHdpdGhpbiBnYWxsZXJ5XHJcbiAgICAgICAgICAgIGdhbGxlcnkuZGVsZWdhdGUoJ2EnLCAnY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgIHZhciB0cmlnZ2VyID0gJCh0aGlzKTtcclxuICAgICAgICAgICAgICAgIHZhciB0cmlnZ2VyRGF0YSA9IHRyaWdnZXIuZGF0YShcImdhbGxlcnlcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRyaWdnZXJEYXRhID09PSAnem9vbScpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaW1nQ29udGFpbmVyID0gdHJpZ2dlci5wYXJlbnQoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1nID0gdHJpZ2dlci5zaWJsaW5ncygpO1xyXG4gICAgICAgICAgICAgICAgICAgIEdhbGxlcnkuem9vbShpbWdDb250YWluZXIsIGltZyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRyaWdnZXJEYXRhID09PSAndGh1bWInKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGltZ0NvbnRhaW5lciA9IHRyaWdnZXIucGFyZW50KCkuc2libGluZ3MoKTtcclxuICAgICAgICAgICAgICAgICAgICBHYWxsZXJ5LnN3aXRjaCh0cmlnZ2VyLCBpbWdDb250YWluZXIpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy89PT0gTWFrZSBNZXRob2RzIFB1YmxpYyA9PT0vL1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGluaXQ6IGluaXRcclxuICAgICAgICB9O1xyXG5cclxuICAgIH0pKCk7XHJcblxyXG4gICAgQXBwLmluaXQoKTtcclxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvc3JjL2phdmFzY3JpcHRzL21vZHVsZXMvZ2FsbGVyeS5qcyJdLCJzb3VyY2VSb290IjoiIn0=