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
	
	        var gallery = (0, _jquery2.default)('#js-gallery');
	
	        //=== Gallery Object ===//
	        var Gallery = {
	            zoom: function zoom(imgContainer, img) {
	                var containerHeight = imgContainer.outerHeight(),
	                    src = img.attr('src');
	
	                if (src.indexOf('/products/normal/') != -1) {
	                    // Set height of container
	                    imgContainer.css("height", containerHeight);
	
	                    // Switch hero image src with large version
	                    img.attr('src', src.replace('/products/normal/', '/products/zoom/'));
	
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
	
	                    // Switch hero image src with normal version
	                    img.attr('src', src.replace('/products/zoom/', '/products/normal/'));
	
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNGYyNGZlN2I5NDU1MzM5MDMwMDIiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NyYy9qYXZhc2NyaXB0cy9jb21tb24uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NyYy9qYXZhc2NyaXB0cy9tb2R1bGVzL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NyYy9qYXZhc2NyaXB0cy9tb2R1bGVzL3BvcHVwLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImpRdWVyeVwiIiwid2VicGFjazovLy8uL2Fzc2V0cy9zcmMvamF2YXNjcmlwdHMvbW9kdWxlcy92YXJpYXRpb25zLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zcmMvamF2YXNjcmlwdHMvbW9kdWxlcy92YWxpZGF0aW9uLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zcmMvamF2YXNjcmlwdHMvbW9kdWxlcy9nYWxsZXJ5LmpzIl0sIm5hbWVzIjpbIiQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJiaW5kIiwiJCQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiTm9kZSIsInByb3RvdHlwZSIsIm9uIiwid2luZG93IiwibmFtZSIsImZuIiwiYWRkRXZlbnRMaXN0ZW5lciIsIk5vZGVMaXN0IiwiX19wcm90b19fIiwiQXJyYXkiLCJEb2N1bWVudCIsImZvckVhY2giLCJlbGVtIiwialF1ZXJ5Iiwic3R5bGUiLCJkaXNwbGF5IiwibmF2YmFyVG9EZWZhdWx0IiwiYmFja2dyb3VuZENvbG9yIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwibWVudUl0ZW0iLCJpIiwibGVuZ3RoIiwibmF2YmFyVG9GbG9hdCIsImFkZCIsInNldE5hdlN0eWxlIiwicGFnZVlPZmZzZXQiLCJ0b2dnbGVTZWN0aW9ucyIsImJ1dHRvbiIsImRhdGFBdHRyaWJ1dGUiLCJnZXRBdHRyaWJ1dGUiLCJzZWN0aW9uIiwiY29sbGFwc2VTZWN0aW9ucyIsImlkIiwidG9nZ2xlIiwiY2hlY2tvdXRCdG4iLCJlbCIsInNjcm9sbEVsZW0iLCJkYXRhSUQiLCJ1c2VyQ2hvaWNlVGV4dCIsImNob2ljZVByaWNlIiwiZ2V0RWxlbWVudEJ5SWQiLCJjb250ZW50IiwidXNlckNob2ljZSIsImlubmVySFRNTCIsImFuaW1hdGUiLCJzY3JvbGxUb3AiLCJvZmZzZXRUb3AiLCJvdXRlcldpZHRoIiwiY2xpY2siLCJsYXp5U2Nyb2xsIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIm9mZnNldCIsInNlY3Rpb25zIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsInNlbGVjdE9uQ2xpY2siLCJjbGlja2VkRWxlbWVudERhdGFJZCIsImFsbFNlbGVjdHMiLCJpc05hTiIsIml0ZW1TZWxlY3QiLCJzZWxlY3REYXRhIiwiYXR0cmlidXRlcyIsImRhdGEiLCJ2YWx1ZSIsIm9wdGlvbnMiLCJzZWxlY3RlZEluZGV4IiwiY29uc29sZSIsImxvZyIsImNvbXBhcmUiLCJwcmludFByaWNlIiwicHJpbnRNZXNzYWdlIiwiY2hlY2tvdXRCdXR0b24iLCJwYXJhbWV0ZXIiLCJzZXRBdHRyaWJ1dGUiLCJkaXNhYmxlZCIsInZhcmlhdGlvbnMiLCJ2YXJpYXRpb25zT2JqZWN0IiwiZGF0YUJ5SWQiLCJ2YXJpYXRpb24iLCJ2YXJpYXRpb25zV2l0aG91dFByaWNlIiwicHJpY2UiLCJKU09OIiwic3RyaW5naWZ5IiwiYWRkVG9DYXJ0IiwiY29udGFpbnMiLCJlbGVtZW50SHJlZiIsInVzZXJPcmRlclRleHQiLCJpbnB1dE5hbWUiLCJpbnB1dExhc3ROYW1lIiwiaW5wdXRFbWFpbCIsImlucHV0UGhvbmUiLCJ0aXRsZSIsInRleHRDb250ZW50IiwicHJpY2VUYWciLCJyYW5kb21JZCIsIk1hdGgiLCJ0cnVuYyIsInJhbmRvbSIsInByb2R1Y3REYXRhIiwicGFyYW1fcHJpY2UiLCJpbmZvX2ZpcnN0X25hbWUiLCJpbmZvX2xhc3RfbmFtZSIsImluZm9fcGhvbmUiLCJjcmVhdGVQb3N0IiwiWE1MSHR0cFJlcXVlc3QiLCJvcGVuIiwibG9jYXRpb24iLCJvcmlnaW4iLCJzZXRSZXF1ZXN0SGVhZGVyIiwid3BBcGlTZXR0aW5ncyIsIm5vbmNlIiwic2VuZCIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsInJlYWR5U3RhdGUiLCJzdGF0dXMiLCJzdGF0dXNUZXh0IiwiYWxlcnQiLCJjYXJvdXNlbCIsInZhbGlkYXRvciIsIkNvbnN0cnVjdG9yIiwiVkVSU0lPTiIsImZvY3VzIiwiQXBwIiwiZ2FsbGVyeSIsIkdhbGxlcnkiLCJ6b29tIiwiaW1nQ29udGFpbmVyIiwiaW1nIiwiY29udGFpbmVySGVpZ2h0Iiwib3V0ZXJIZWlnaHQiLCJzcmMiLCJhdHRyIiwiaW5kZXhPZiIsImNzcyIsInJlcGxhY2UiLCJkcmFnZ2FibGUiLCJkcmFnIiwidWkiLCJwb3NpdGlvbiIsImxlZnQiLCJtaW4iLCJ0b3AiLCJzd2l0Y2giLCJ0cmlnZ2VyIiwidGh1bWJzIiwic2libGluZ3MiLCJwYXJlbnQiLCJwcmV2IiwiY2hpbGRyZW4iLCJlYWNoIiwiaGFzQ2xhc3MiLCJpbml0IiwiZGVsZWdhdGUiLCJ0cmlnZ2VyRGF0YSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7OztBQ25CQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUF2QkE7O0FBRUEsS0FBTUEsSUFBSUMsU0FBU0MsYUFBVCxDQUF1QkMsSUFBdkIsQ0FBNEJGLFFBQTVCLENBQVY7QUFDQSxLQUFNRyxLQUFLSCxTQUFTSSxnQkFBVCxDQUEwQkYsSUFBMUIsQ0FBK0JGLFFBQS9CLENBQVg7O0FBRUFLLE1BQUtDLFNBQUwsQ0FBZUMsRUFBZixHQUFvQkMsT0FBT0QsRUFBUCxHQUFZLFVBQVVFLElBQVYsRUFB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LHFCQUFJVSxjQUFjVixRQUFRakYsSUFBUixDQUFhLFNBQWIsQ0FBbEI7O0FBRUEscUJBQUkyRixnQkFBZ0IsTUFBcEIsRUFBNEI7QUFDeEIseUJBQUkzQixlQUFlaUIsUUFBUUcsTUFBUixFQUFuQjtBQUFBLHlCQUNJbkIsTUFBTWdCLFFBQVFFLFFBQVIsRUFEVjtBQUVBckIsNkJBQVFDLElBQVIsQ0FBYUMsWUFBYixFQUEyQkMsR0FBM0I7QUFDSCxrQkFKRCxNQUlPLElBQUkwQixnQkFBZ0IsT0FBcEIsRUFBNkI7QUFDaEMseUJBQUkzQixlQUFlaUIsUUFBUUcsTUFBUixHQUFpQkQsUUFBakIsRUFBbkI7QUFDQXJCLDZCQUFRa0IsTUFBUixDQUFlQyxPQUFmLEVBQXdCakIsWUFBeEI7QUFDSCxrQkFITSxNQUdBO0FBQ0g7QUFDSDs7QUFFRDdFLHVCQUFNQyxjQUFOO0FBQ0gsY0FoQkQ7QUFrQkg7O0FBRUQ7QUFDQSxnQkFBTztBQUNIcUcsbUJBQU1BO0FBREgsVUFBUDtBQUlILE1BbEdTLEVBQVY7O0FBb0dBN0IsU0FBSTZCLElBQUo7QUFDSCxFIiwiZmlsZSI6ImNvbW1vbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDRmMjRmZTdiOTQ1NTMzOTAzMDAyIiwiLy8gaW1wb3J0ICQgZnJvbSBcImpxdWVyeVwiO1xuXG5jb25zdCAkID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvci5iaW5kKGRvY3VtZW50KTtcbmNvbnN0ICQkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbC5iaW5kKGRvY3VtZW50KTtcblxuTm9kZS5wcm90b3R5cGUub24gPSB3aW5kb3cub24gPSBmdW5jdGlvbiAobmFtZSwgZm4pIHtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIobmFtZSwgZm4pO1xufTtcblxuTm9kZUxpc3QucHJvdG90eXBlLl9fcHJvdG9fXyA9IEFycmF5LnByb3RvdHlwZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuTm9kZUxpc3QucHJvdG90eXBlLl9fcHJvdG9fXyA9IERvY3VtZW50LnByb3RvdHlwZTtcblxuTm9kZUxpc3QucHJvdG90eXBlLm9uID0gTm9kZUxpc3QucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbiAobmFtZSwgZm4pIHtcbiAgICB0aGlzLmZvckVhY2goKGVsZW0pID0+IHtcbiAgICAgICAgZWxlbS5vbihuYW1lLCBmbik7XG4gICAgfSk7XG59O1xuLy9leHBvcnQgeyQsICQkfTtcblxuaW1wb3J0IG1haW4gZnJvbSBcIi4vbW9kdWxlcy9tYWluXCI7XG5pbXBvcnQgcG9wdXAgZnJvbSBcIi4vbW9kdWxlcy9wb3B1cFwiO1xuaW1wb3J0IHZhcmlhdGlvbnMgZnJvbSBcIi4vbW9kdWxlcy92YXJpYXRpb25zXCI7XG5pbXBvcnQgdmFsaWRhdGlvbiBmcm9tIFwiLi9tb2R1bGVzL3ZhbGlkYXRpb25cIjtcbmltcG9ydCBnYWxsZXJ5IGZyb20gXCIuL21vZHVsZXMvZ2FsbGVyeVwiO1xuXG5cbi8vIGltcG9ydCBcIi4vcGx1Z2lucy9pbmZpbml0ZS1zY3JvbGxcIjtcblxualF1ZXJ5KGZ1bmN0aW9uICgpIHtcbiAgICBtYWluKCQsICQkKTtcbiAgICBwb3B1cCgpO1xuICAgIHZhcmlhdGlvbnMoJCk7XG4gICAgdmFsaWRhdGlvbigpO1xuICAgIGdhbGxlcnkoKTtcbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9zcmMvamF2YXNjcmlwdHMvY29tbW9uLmpzIiwiLy8gaW1wb3J0ICQgZnJvbSBcImpxdWVyeVwiO1xuXG5leHBvcnQgZGVmYXVsdCAoJCwgJCQpID0+IHtcblxuICAgIHdpbmRvdy5vbignbG9hZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnLmxvYWRlcl9pbm5lcicpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgJCgnLmxvYWRlcicpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIG5hdmJhclRvRGVmYXVsdCgpIHtcbiAgICAgICAgJCgnLm5hdmJhci1kZWZhdWx0Jykuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3RyYW5zcGFyZW50JztcbiAgICAgICAgJCgnLm5hdmJhci1icmFuZCBpbWcnKS5jbGFzc0xpc3QucmVtb3ZlKCdpbWdfcmVzcG9uc2l2ZScpO1xuICAgICAgICAkKCcubmF2YmFyLWZpeGVkLXRvcCcpLmNsYXNzTGlzdC5yZW1vdmUoJ3RvcC1uYXYtY29sbGFwc2UnKTtcbiAgICAgICAgbGV0IG1lbnVJdGVtID0gJCQoJy5uYXZiYXItbmF2IGEnKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtZW51SXRlbS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbWVudUl0ZW1baV0uY2xhc3NMaXN0LnJlbW92ZSgnd2hpdGUnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG5hdmJhclRvRmxvYXQoKSB7XG4gICAgICAgICQoJy5uYXZiYXItZGVmYXVsdCcpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZ2JhKDQ4LCA0OCwgNDgsIDAuNSknO1xuICAgICAgICAkKCcubmF2YmFyLWRlZmF1bHQnKS5jbGFzc0xpc3QuYWRkKCd0b3AtbmF2LWNvbGxhcHNlJyk7XG4gICAgICAgICQoJy5uYXZiYXItYnJhbmQgaW1nJykuY2xhc3NMaXN0LmFkZCgnaW1nX3Jlc3BvbnNpdmUnKTtcbiAgICAgICAgbGV0IG1lbnVJdGVtID0gJCQoJy5uYXZiYXItbmF2IGEnKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtZW51SXRlbS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbWVudUl0ZW1baV0uY2xhc3NMaXN0LmFkZCgnd2hpdGUnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldE5hdlN0eWxlKCkge1xuICAgICAgICBuYXZiYXJUb0Zsb2F0KCk7XG4gICAgICAgIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPCA1MCkge1xuICAgICAgICAgICAgbmF2YmFyVG9EZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB3aW5kb3cudG9nZ2xlU2VjdGlvbnMgPSBmdW5jdGlvbiAoYnV0dG9uKSB7XG4gICAgICAgICQoJy5jbG9zZS1idG4nKS5jbGFzc0xpc3QuYWRkKCdzaG93aW5nJyk7XG4gICAgICAgIGlmICgkJCgnLmNvbGxhcHNlLXNlY3Rpb24uc2hvd2luZycpLmxlbmd0aCkge1xuICAgICAgICAgICAgJCgnLmNsb3NlLWJ0bicpLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3dpbmcnKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGRhdGFBdHRyaWJ1dGUgPSBidXR0b24uZ2V0QXR0cmlidXRlKCdkYXRhLWF0dHInKTtcbiAgICAgICAgbGV0IHNlY3Rpb24gPSAkKCcjc2VjdGlvbi0nICsgZGF0YUF0dHJpYnV0ZSk7XG4gICAgICAgIC8vIHNlY3Rpb24ub2Zmc2V0VG9wID0gMjA7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHNlY3Rpb24ub2Zmc2V0VG9wKTtcbiAgICAgICAgbGV0IGNvbGxhcHNlU2VjdGlvbnMgPSAkJCgnLmNvbGxhcHNlLXNlY3Rpb24nKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2xsYXBzZVNlY3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoIShjb2xsYXBzZVNlY3Rpb25zW2ldLmlkID09PSBzZWN0aW9uLmlkKSkge1xuICAgICAgICAgICAgICAgIGNvbGxhcHNlU2VjdGlvbnNbaV0uY2xhc3NMaXN0LnJlbW92ZSgnc2hvd2luZycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHNlY3Rpb24uY2xhc3NMaXN0LnRvZ2dsZSgnc2hvd2luZycpO1xuICAgICAgICBpZiAoJCQoJy5jb2xsYXBzZS1zZWN0aW9uLnNob3dpbmcnKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICQoJy5jbG9zZS1idG4nKS5jbGFzc0xpc3QuYWRkKCdzaG93aW5nJyk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgd2luZG93LmNoZWNrb3V0QnRuID0gZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgIHNjcm9sbEVsZW0oKTtcblxuICAgICAgICBsZXQgZGF0YUlEID0gZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWNoZWNrb3V0Jyk7XG4gICAgICAgIGxldCB1c2VyQ2hvaWNlVGV4dCA9ICQoJyNzZWN0aW9uLScgKyBkYXRhSUQgKyAnIC51c2VyLWNob2ljZScpO1xuICAgICAgICBsZXQgY2hvaWNlUHJpY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkYXRhSUQgKyAnLXByaWNlJykuZ2V0QXR0cmlidXRlKCdkYXRhLXByaWNlJyk7XG4gICAgICAgIGxldCBjb250ZW50ID0gJyc7XG4gICAgICAgIGZvciAobGV0IGkgaW4gdXNlckNob2ljZSkge1xuICAgICAgICAgICAgY29udGVudCArPSBcIjxwPlwiICsgaSArIFwiOiBcIiArIHVzZXJDaG9pY2VbaV0gKyBcIjwvcD5cIjtcbiAgICAgICAgfVxuICAgICAgICBjb250ZW50ICs9IFwiPHA+UHJpY2U6IFwiICsgY2hvaWNlUHJpY2U7XG4gICAgICAgIHVzZXJDaG9pY2VUZXh0LmlubmVySFRNTCA9IGNvbnRlbnQ7XG4gICAgfTtcbiAgICBcbiAgICBmdW5jdGlvbiBzY3JvbGxFbGVtKCkge1xuICAgICAgICBqUXVlcnkoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcbiAgICAgICAgICAgIHNjcm9sbFRvcDogJChcIiNjaG9vc2VcIikub2Zmc2V0VG9wIC0gNTBcbiAgICAgICAgfSwgMTAwKTtcbiAgICB9XG5cbiAgICB3aW5kb3cub24oJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNldE5hdlN0eWxlKCk7XG4gICAgICAgIC8vTmF2YmFyIHN0eWxlIHN3aXRjaGVyXG4gICAgICAgIHdpbmRvdy5vbignc2Nyb2xsJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc2V0TmF2U3R5bGUoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHdpbmRvdy5vdXRlcldpZHRoIDwgNzY4KSB7XG5cbiAgICAgICAgICAgIC8vU0FORFdJQ0ggQlVUVE9OXG4gICAgICAgICAgICAkKCcubmF2YmFyLXRvZ2dsZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBuYXZiYXJUb0Zsb2F0KCk7XG4gICAgICAgICAgICAgICAgJCgnLnNhbmR3aWNoJykuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy9ISURFIE1FTlUgQ0xJQ0tJTkcgTElcbiAgICAgICAgICAgICQkKCcubmF2YmFyLWNvbGxhcHNlIHVsIGxpIGEnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgJCgnLm5hdmJhci10b2dnbGUnKS5jbGljaygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvL0xBWlkgQU5JTUFUSU5HIEZPUiBCVVRUT05TIEFORCBNRU5VIElURU1TXG4gICAgICAgICQkKCcuc2Nyb2xsX2J0bicpLm9uKCdjbGljaycsIGxhenlTY3JvbGwpO1xuICAgICAgICAkJCgnLm5hdiBhJykub24oJ2NsaWNrJywgbGF6eVNjcm9sbCk7XG5cbiAgICAgICAgZnVuY3Rpb24gbGF6eVNjcm9sbCgpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBsZXQgaWQgPSB0aGlzLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuICAgICAgICAgICAgbGV0IG9mZnNldCA9ICQoaWQpLm9mZnNldFRvcDtcbiAgICAgICAgICAgIC8vZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2h0bWwnKVswXS5hbmltYXRlKHtcbiAgICAgICAgICAgIGlmIChpZCA9PT0gXCIjY2hvb3NlXCIpIHtcbiAgICAgICAgICAgICAgICBvZmZzZXQgLT0gNTA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGpRdWVyeSgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgIHNjcm9sbFRvcDogb2Zmc2V0XG4gICAgICAgICAgICB9LCA3MDApO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZnVuY3Rpb24gbGF6eVNjcm9sbCgpIHtcbiAgICAgICAgLy8gICAgICAgICBsZXQgaWQgPSB0aGlzLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuICAgICAgICAvLyAgICAgICAgIGxldCBvZmZzZXQgPSAkKGlkKS5vZmZzZXRUb3A7XG4gICAgICAgIC8vICAgICBpZiAodGhpcy5oYXNoICE9PSBcIlwiKSB7XG4gICAgICAgIC8vICAgICAgICAgLy8gUHJldmVudCBkZWZhdWx0IGFuY2hvciBjbGljayBiZWhhdmlvclxuICAgICAgICAvLyAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIC8vXG4gICAgICAgIC8vICAgICAgICAgLy8gU3RvcmUgaGFzaFxuICAgICAgICAvLyAgICAgICAgIHZhciBoYXNoID0gdGhpcy5oYXNoO1xuICAgICAgICAvL1xuICAgICAgICAvLyAgICAgICAgIC8vIFVzaW5nIGpRdWVyeSdzIGFuaW1hdGUoKSBtZXRob2QgdG8gYWRkIHNtb290aCBwYWdlIHNjcm9sbFxuICAgICAgICAvLyAgICAgICAgIC8vIFRoZSBvcHRpb25hbCBudW1iZXIgKDgwMCkgc3BlY2lmaWVzIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGl0IHRha2VzIHRvIHNjcm9sbCB0byB0aGUgc3BlY2lmaWVkIGFyZWFcbiAgICAgICAgLy8gICAgICAgICBqUXVlcnkoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcbiAgICAgICAgLy8gICAgICAgICAgICAgc2Nyb2xsVG9wOiBvZmZzZXRcbiAgICAgICAgLy8gICAgICAgICB9LCAzMDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gICAgICAgICAgICAgLy8gQWRkIGhhc2ggKCMpIHRvIFVSTCB3aGVuIGRvbmUgc2Nyb2xsaW5nIChkZWZhdWx0IGNsaWNrIGJlaGF2aW9yKVxuICAgICAgICAvLyAgICAgICAgICAgICAvL3dpbmRvdy5sb2NhdGlvbi5oYXNoID0gaGFzaDtcbiAgICAgICAgLy8gICAgICAgICB9KTtcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfVxuXG4gICAgICAgIC8vIE1ha2Ugc3VyZSB0aGlzLmhhc2ggaGFzIGEgdmFsdWUgYmVmb3JlIG92ZXJyaWRpbmcgZGVmYXVsdCBiZWhhdmlvclxuXG5cbiAgICAgICAgJCgnLmNsb3NlLWJ0bicpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGxldCBzZWN0aW9ucyA9ICQkKCcuY29sbGFwc2Utc2VjdGlvbicpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHNlY3Rpb25zW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3dpbmcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY2xhc3NMaXN0LnJlbW92ZSgnc2hvd2luZycpO1xuICAgICAgICB9KTtcblxuICAgICAgICBqUXVlcnkoJ1tkYXRhLXNsaWRlPVwicHJldlwiXScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHNjcm9sbEVsZW0oKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL3NyYy9qYXZhc2NyaXB0cy9tb2R1bGVzL21haW4uanMiLCJpbXBvcnQgJCBmcm9tIFwianF1ZXJ5XCI7XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgICAkKCcjbmV4dC1wZXJzb25hbCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnI2pzLXByb2R1Y3QtaW5mbycpLmFkZENsYXNzKCdzbGlkZS1vdXQtbGVmdCcpO1xuICAgICAgICAkKCcjanMtcGVyc29uYWwtaW5mbycpLmFkZENsYXNzKCdzbGlkZS1pbi1yaWdodCcpO1xuICAgIH0pO1xuICAgICQoJyNwcmV2LXByb2R1Y3QtaW5mbycpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnI2pzLXBlcnNvbmFsLWluZm8nKS5yZW1vdmVDbGFzcygnc2xpZGUtaW4tcmlnaHQnKTtcbiAgICAgICAgJCgnI2pzLXByb2R1Y3QtaW5mbycpLnJlbW92ZUNsYXNzKCdzbGlkZS1vdXQtbGVmdCcpO1xuICAgIH0pO1xufTtcblxuXG5cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL3NyYy9qYXZhc2NyaXB0cy9tb2R1bGVzL3BvcHVwLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBqUXVlcnk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJqUXVlcnlcIlxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBpbXBvcnQgJCBmcm9tIFwianF1ZXJ5XCI7XG5cbmV4cG9ydCBkZWZhdWx0ICgkKSA9PiB7XG4gICAgd2luZG93LnVzZXJDaG9pY2UgPSB7fTtcblxuICAgIHdpbmRvdy5zZWxlY3RPbkNsaWNrID0gZnVuY3Rpb24gKGVsKSB7XG5cbiAgICAgICAgbGV0IGNsaWNrZWRFbGVtZW50RGF0YUlkID0gZWwuZ2V0QXR0cmlidXRlKCdkYXRhJyk7XG4gICAgICAgIGxldCBhbGxTZWxlY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGFdJyk7XG5cbiAgICAgICAgZm9yIChsZXQgaSBpbiBhbGxTZWxlY3RzKSB7XG5cbiAgICAgICAgICAgIGlmIChpc05hTihpKSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgaXRlbVNlbGVjdCA9IGFsbFNlbGVjdHNbaV07XG4gICAgICAgICAgICBsZXQgc2VsZWN0RGF0YSA9IGl0ZW1TZWxlY3QuYXR0cmlidXRlcy5kYXRhLnZhbHVlO1xuXG4gICAgICAgICAgICBpZiAoc2VsZWN0RGF0YSA9PT0gY2xpY2tlZEVsZW1lbnREYXRhSWQpIHtcbiAgICAgICAgICAgICAgICB1c2VyQ2hvaWNlW2l0ZW1TZWxlY3QubmFtZV0gPSBpdGVtU2VsZWN0Lm9wdGlvbnNbaXRlbVNlbGVjdC5zZWxlY3RlZEluZGV4XS52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKCdUaGlzIGlzIHVzZXIgY2hvaWNlJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKHVzZXJDaG9pY2UpO1xuXG4gICAgICAgIGNvbXBhcmUodXNlckNob2ljZSwgY2xpY2tlZEVsZW1lbnREYXRhSWQpO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBjb21wYXJlKHVzZXJDaG9pY2UsIGRhdGFJRCkge1xuXG4gICAgICAgIGxldCBwcmludFByaWNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZGF0YUlEICsgJy1wcmljZScpO1xuICAgICAgICBsZXQgcHJpbnRNZXNzYWdlID0gJCgnI21lc3NhZ2UtJyArIGRhdGFJRCk7XG4gICAgICAgIGxldCBjaGVja291dEJ1dHRvbiA9ICQoXCIjc2VjdGlvbi1cIiArIGRhdGFJRCArIFwiIGJ1dHRvbltkYXRhLXNsaWRlPSduZXh0J11cIik7XG5cbiAgICAgICAgZm9yIChsZXQgcGFyYW1ldGVyIGluIHVzZXJDaG9pY2UpIHtcbiAgICAgICAgICAgIGlmICh1c2VyQ2hvaWNlW3BhcmFtZXRlcl0gPT09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICBwcmludFByaWNlLnNldEF0dHJpYnV0ZSgnZGF0YS1wcmljZScsICcnKTtcbiAgICAgICAgICAgICAgICBwcmludFByaWNlLmlubmVySFRNTCA9IFwiJm5ic3A7XCI7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1NlbGVjdCB0aGUgJyArIHBhcmFtZXRlcik7XG4gICAgICAgICAgICAgICAgcHJpbnRNZXNzYWdlLmlubmVySFRNTCA9ICdTZWxlY3QgdGhlICcgKyBwYXJhbWV0ZXI7XG4gICAgICAgICAgICAgICAgY2hlY2tvdXRCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB2YXJpYXRpb25zID0gdmFyaWF0aW9uc09iamVjdC5kYXRhQnlJZFtkYXRhSURdO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCdUaGlzIGlzIFZhcmlhdGlvbnMnKTtcbiAgICAgICAgY29uc29sZS5sb2codmFyaWF0aW9ucyk7XG5cbiAgICAgICAgZm9yIChsZXQgaSBpbiB2YXJpYXRpb25zKSB7XG4gICAgICAgICAgICBsZXQgdmFyaWF0aW9uID0gdmFyaWF0aW9uc1tpXTtcbiAgICAgICAgICAgIGxldCB2YXJpYXRpb25zV2l0aG91dFByaWNlID0ge307XG5cbiAgICAgICAgICAgIGZvciAobGV0IHBhcmFtZXRlciBpbiB2YXJpYXRpb24pIHtcbiAgICAgICAgICAgICAgICB2YXJpYXRpb25zV2l0aG91dFByaWNlW3BhcmFtZXRlcl0gPSB2YXJpYXRpb25bcGFyYW1ldGVyXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZGVsZXRlIHZhcmlhdGlvbnNXaXRob3V0UHJpY2UucHJpY2U7XG5cbiAgICAgICAgICAgIGlmIChKU09OLnN0cmluZ2lmeSh1c2VyQ2hvaWNlKSA9PT0gSlNPTi5zdHJpbmdpZnkodmFyaWF0aW9uc1dpdGhvdXRQcmljZSkpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh2YXJpYXRpb24ucHJpY2UpO1xuICAgICAgICAgICAgICAgIHByaW50UHJpY2Uuc2V0QXR0cmlidXRlKCdkYXRhLXByaWNlJywgdmFyaWF0aW9uLnByaWNlKTtcbiAgICAgICAgICAgICAgICBwcmludFByaWNlLmlubmVySFRNTCA9ICc8aDMgY2xhc3M9XCJyZWQtcHJpY2VcIj4nICsgdmFyaWF0aW9uLnByaWNlICsgJyQ8L2gzPic7XG4gICAgICAgICAgICAgICAgcHJpbnRNZXNzYWdlLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgICAgICAgICAgY2hlY2tvdXRCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHByaW50UHJpY2Uuc2V0QXR0cmlidXRlKCdkYXRhLXByaWNlJywgJycpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdWYXJpYXRpb24gaXMgbm90IGZvdW5kJyk7XG4gICAgICAgICAgICAgICAgcHJpbnRQcmljZS5pbm5lckhUTUwgPSAnPGgzPi0gLTwvaDM+JztcbiAgICAgICAgICAgICAgICBwcmludE1lc3NhZ2UuaW5uZXJIVE1MID0gJ1ZhcmlhdGlvbiBpcyBub3QgZm91bmQnO1xuICAgICAgICAgICAgICAgIGNoZWNrb3V0QnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuLy9DbGljayB0byBDaGVja291dCAtIFNsaWRlIGJ1dHRvblxuXG5cbi8vQ3JlYXRlIG5ldyBwb3N0XG4gICAgd2luZG93LmFkZFRvQ2FydCA9IGZ1bmN0aW9uIChlbCkge1xuXG4gICAgICAgIGlmIChlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2Rpc2FibGVkJykpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGpRdWVyeSgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xuICAgICAgICAgICAgc2Nyb2xsVG9wOiAkKFwiI2Nob29zZVwiKS5vZmZzZXRUb3AgLSA1MFxuICAgICAgICB9LCAxMDApO1xuXG4gICAgICAgIGxldCBjbGlja2VkRWxlbWVudERhdGFJZCA9IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1hdHRyJyk7XG4gICAgICAgIGxldCBlbGVtZW50SHJlZiA9IGVsLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuICAgICAgICBsZXQgdXNlck9yZGVyVGV4dCA9ICQoJyNzZWN0aW9uLScgKyBjbGlja2VkRWxlbWVudERhdGFJZCArICcgLnVzZXItb3JkZXInKTtcbiAgICAgICAgbGV0IGlucHV0TmFtZSA9ICQoJyNmb3JtLScgKyBjbGlja2VkRWxlbWVudERhdGFJZCArICcgaW5wdXRbbmFtZT1cImZpcnN0X25hbWVcIl0nKTtcbiAgICAgICAgbGV0IGlucHV0TGFzdE5hbWUgPSAkKCcjZm9ybS0nICsgY2xpY2tlZEVsZW1lbnREYXRhSWQgKyAnIGlucHV0W25hbWU9XCJsYXN0X25hbWVcIl0nKTtcbiAgICAgICAgbGV0IGlucHV0RW1haWwgPSAkKCcjZm9ybS0nICsgY2xpY2tlZEVsZW1lbnREYXRhSWQgKyAnIGlucHV0W25hbWU9XCJlbWFpbFwiXScpO1xuICAgICAgICBsZXQgaW5wdXRQaG9uZSA9ICQoJyNmb3JtLScgKyBjbGlja2VkRWxlbWVudERhdGFJZCArICcgaW5wdXRbbmFtZT1cInBob25lXCJdJyk7XG5cbiAgICAgICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWwubmFtZSkudGV4dENvbnRlbnQ7XG5cbiAgICAgICAgbGV0IHByaWNlVGFnID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY2xpY2tlZEVsZW1lbnREYXRhSWQgKyAnLXByaWNlJyk7XG4gICAgICAgIGxldCBwcmljZSA9IHByaWNlVGFnLmdldEF0dHJpYnV0ZSgnZGF0YS1wcmljZScpO1xuICAgICAgICBsZXQgcmFuZG9tSWQgPSBNYXRoLnRydW5jKChNYXRoLnJhbmRvbSgpKjEwMDAwMCkpO1xuICAgICAgICBsZXQgcHJvZHVjdERhdGEgPSB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IHRpdGxlICsgJyBbJyArIHJhbmRvbUlkICsgJ10nLFxuICAgICAgICAgICAgXCJjb250ZW50XCI6IEpTT04uc3RyaW5naWZ5KHVzZXJDaG9pY2UpICsgJ3tcInByaWNlXCI6JyArIHByaWNlICsgJ30nLFxuICAgICAgICAgICAgXCJzdGF0dXNcIjogJ3B1Ymxpc2gnXG4gICAgICAgIH07XG5cbiAgICAgICAgZm9yIChsZXQgaSBpbiB1c2VyQ2hvaWNlKSB7XG4gICAgICAgICAgICBwcm9kdWN0RGF0YVsncGFyYW1fJyArIGldID0gdXNlckNob2ljZVtpXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHByb2R1Y3REYXRhWydwYXJhbV9wcmljZSddID0gcHJpY2U7XG5cbiAgICAgICAgcHJvZHVjdERhdGFbJ2luZm9fZmlyc3RfbmFtZSddID0gaW5wdXROYW1lLnZhbHVlO1xuICAgICAgICBwcm9kdWN0RGF0YVsnaW5mb19sYXN0X25hbWUnXSA9IGlucHV0TGFzdE5hbWUudmFsdWU7XG4gICAgICAgIHByb2R1Y3REYXRhWydpbmZvX2VtYWlsJ10gPSBpbnB1dEVtYWlsLnZhbHVlO1xuICAgICAgICBwcm9kdWN0RGF0YVsnaW5mb19waG9uZSddID0gaW5wdXRQaG9uZS52YWx1ZTtcblxuICAgICAgICBjb25zb2xlLmxvZyhwcm9kdWN0RGF0YSk7XG5cbiAgICAgICAgbGV0IGNvbnRlbnQgPSAnJztcblxuICAgICAgICBmb3IgKGxldCBpIGluIHVzZXJDaG9pY2UpIHtcbiAgICAgICAgICAgIGNvbnRlbnQgKz0gXCI8cD5cIiArIGkgKyBcIjogXCIgKyB1c2VyQ2hvaWNlW2ldICsgXCI8L3A+XCI7XG4gICAgICAgIH1cbiAgICAgICAgY29udGVudCArPSBcIjxwPlByaWNlOiBcIiArIHByb2R1Y3REYXRhLnBhcmFtX3ByaWNlICsgXCI8L3A+XCI7XG4gICAgICAgIGNvbnRlbnQgKz0gXCI8cD5GaXJzdCBuYW1lOiBcIiArIHByb2R1Y3REYXRhLmluZm9fZmlyc3RfbmFtZSArIFwiPC9wPlwiO1xuICAgICAgICBjb250ZW50ICs9IFwiPHA+TGFzdCBuYW1lOiBcIiArIHByb2R1Y3REYXRhLmluZm9fbGFzdF9uYW1lICsgXCI8L3A+XCI7XG4gICAgICAgIGNvbnRlbnQgKz0gXCI8cD5QaG9uZTogXCIgKyBwcm9kdWN0RGF0YS5pbmZvX3Bob25lICsgXCI8L3A+XCI7XG5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBsZXQgY3JlYXRlUG9zdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICBjcmVhdGVQb3N0Lm9wZW4oJ1BPU1QnLCBsb2NhdGlvbi5vcmlnaW4gKyAnL3dwLWpzb24vd3AvdjIvc2hvcF9vcmRlcicsIHRydWUpO1xuICAgICAgICBjcmVhdGVQb3N0LnNldFJlcXVlc3RIZWFkZXIoJ1gtV1AtTm9uY2UnLCB3cEFwaVNldHRpbmdzLm5vbmNlKTtcbiAgICAgICAgLy8gdmFyIEJhc2U2ND17X2tleVN0cjpcIkFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky89XCIsZW5jb2RlOmZ1bmN0aW9uKGUpe3ZhciB0PVwiXCI7dmFyIG4scixpLHMsbyx1LGE7dmFyIGY9MDtlPUJhc2U2NC5fdXRmOF9lbmNvZGUoZSk7d2hpbGUoZjxlLmxlbmd0aCl7bj1lLmNoYXJDb2RlQXQoZisrKTtyPWUuY2hhckNvZGVBdChmKyspO2k9ZS5jaGFyQ29kZUF0KGYrKyk7cz1uPj4yO289KG4mMyk8PDR8cj4+NDt1PShyJjE1KTw8MnxpPj42O2E9aSY2MztpZihpc05hTihyKSl7dT1hPTY0fWVsc2UgaWYoaXNOYU4oaSkpe2E9NjR9dD10K3RoaXMuX2tleVN0ci5jaGFyQXQocykrdGhpcy5fa2V5U3RyLmNoYXJBdChvKSt0aGlzLl9rZXlTdHIuY2hhckF0KHUpK3RoaXMuX2tleVN0ci5jaGFyQXQoYSl9cmV0dXJuIHR9LGRlY29kZTpmdW5jdGlvbihlKXt2YXIgdD1cIlwiO3ZhciBuLHIsaTt2YXIgcyxvLHUsYTt2YXIgZj0wO2U9ZS5yZXBsYWNlKC9bXkEtWmEtejAtOVxcK1xcL1xcPV0vZyxcIlwiKTt3aGlsZShmPGUubGVuZ3RoKXtzPXRoaXMuX2tleVN0ci5pbmRleE9mKGUuY2hhckF0KGYrKykpO289dGhpcy5fa2V5U3RyLmluZGV4T2YoZS5jaGFyQXQoZisrKSk7dT10aGlzLl9rZXlTdHIuaW5kZXhPZihlLmNoYXJBdChmKyspKTthPXRoaXMuX2tleVN0ci5pbmRleE9mKGUuY2hhckF0KGYrKykpO249czw8MnxvPj40O3I9KG8mMTUpPDw0fHU+PjI7aT0odSYzKTw8NnxhO3Q9dCtTdHJpbmcuZnJvbUNoYXJDb2RlKG4pO2lmKHUhPTY0KXt0PXQrU3RyaW5nLmZyb21DaGFyQ29kZShyKX1pZihhIT02NCl7dD10K1N0cmluZy5mcm9tQ2hhckNvZGUoaSl9fXQ9QmFzZTY0Ll91dGY4X2RlY29kZSh0KTtyZXR1cm4gdH0sX3V0ZjhfZW5jb2RlOmZ1bmN0aW9uKGUpe2U9ZS5yZXBsYWNlKC9cXHJcXG4vZyxcIlxcblwiKTt2YXIgdD1cIlwiO2Zvcih2YXIgbj0wO248ZS5sZW5ndGg7bisrKXt2YXIgcj1lLmNoYXJDb2RlQXQobik7aWYocjwxMjgpe3QrPVN0cmluZy5mcm9tQ2hhckNvZGUocil9ZWxzZSBpZihyPjEyNyYmcjwyMDQ4KXt0Kz1TdHJpbmcuZnJvbUNoYXJDb2RlKHI+PjZ8MTkyKTt0Kz1TdHJpbmcuZnJvbUNoYXJDb2RlKHImNjN8MTI4KX1lbHNle3QrPVN0cmluZy5mcm9tQ2hhckNvZGUocj4+MTJ8MjI0KTt0Kz1TdHJpbmcuZnJvbUNoYXJDb2RlKHI+PjYmNjN8MTI4KTt0Kz1TdHJpbmcuZnJvbUNoYXJDb2RlKHImNjN8MTI4KX19cmV0dXJuIHR9LF91dGY4X2RlY29kZTpmdW5jdGlvbihlKXt2YXIgdD1cIlwiO3ZhciBuPTA7dmFyIHI9YzE9YzI9MDt3aGlsZShuPGUubGVuZ3RoKXtyPWUuY2hhckNvZGVBdChuKTtpZihyPDEyOCl7dCs9U3RyaW5nLmZyb21DaGFyQ29kZShyKTtuKyt9ZWxzZSBpZihyPjE5MSYmcjwyMjQpe2MyPWUuY2hhckNvZGVBdChuKzEpO3QrPVN0cmluZy5mcm9tQ2hhckNvZGUoKHImMzEpPDw2fGMyJjYzKTtuKz0yfWVsc2V7YzI9ZS5jaGFyQ29kZUF0KG4rMSk7YzM9ZS5jaGFyQ29kZUF0KG4rMik7dCs9U3RyaW5nLmZyb21DaGFyQ29kZSgociYxNSk8PDEyfChjMiY2Myk8PDZ8YzMmNjMpO24rPTN9fXJldHVybiB0fX07XG4gICAgICAgIC8vY3JlYXRlUG9zdC5zZXRSZXF1ZXN0SGVhZGVyKCAnQXV0aG9yaXphdGlvbicsICdCYXNpYyAnICsgQmFzZTY0LmVuY29kZSggJ3Rlc3Q6MDAwMCcgKSApO1xuICAgICAgICBjcmVhdGVQb3N0LnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9VVRGLThcIik7XG4gICAgICAgIGNyZWF0ZVBvc3Quc2VuZChKU09OLnN0cmluZ2lmeShwcm9kdWN0RGF0YSkpO1xuICAgICAgICBjcmVhdGVQb3N0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnJlYWR5U3RhdGUgIT09IDQpIHJldHVybjtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMucmVhZHlTdGF0ZSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXR1cyk7XG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0dXMgIT09IDIwMSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdOb3QgMjAxOiAnICsgdGhpcy5zdGF0dXMgKyAnICcgKyB0aGlzLnN0YXR1c1RleHQpO1xuICAgICAgICAgICAgICAgIGFsZXJ0KCdOb3QgMjAxOiAnICsgdGhpcy5zdGF0dXMgKyAnICcgKyB0aGlzLnN0YXR1c1RleHQpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMucmVhZHlTdGF0ZSA9PT0gNCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXR1cyA9PT0gMjAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQgKz0gJzxicj4nICsgdGhpcy5zdGF0dXNUZXh0ICsgJyBzdGF0dXM6IHBvc3QgYWRkZWQnO1xuICAgICAgICAgICAgICAgICAgICBqUXVlcnkoZWxlbWVudEhyZWYpLmNhcm91c2VsKCduZXh0Jyk7XG4gICAgICAgICAgICAgICAgICAgIHVzZXJPcmRlclRleHQuaW5uZXJIVE1MID0gY29udGVudDtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0dXNUZXh0ICsgJyBzdGF0dXM6IHBvc3QgYWRkZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQodGhpcy5zdGF0dXNUZXh0ICsgJyBzdGF0dXM6IHBvc3QgYWRkZWQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfTtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL3NyYy9qYXZhc2NyaXB0cy9tb2R1bGVzL3ZhcmlhdGlvbnMuanMiLCJpbXBvcnQgJCBmcm9tIFwianF1ZXJ5XCI7XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcImJvb3N0cmFwLXZhbGlkYXRvciB2ZXJzaW9uOlwiLCBqUXVlcnkuZm4udmFsaWRhdG9yLkNvbnN0cnVjdG9yLlZFUlNJT04pO1xuICAgICQoJ2Zvcm0nKS52YWxpZGF0b3Ioe1xuICAgICAgICBmb2N1czogZmFsc2UsXG4gICAgICAgIC8vIGRlbGF5OiAzMDAwXG4gICAgfSk7XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9zcmMvamF2YXNjcmlwdHMvbW9kdWxlcy92YWxpZGF0aW9uLmpzIiwiaW1wb3J0ICQgZnJvbSBcImpxdWVyeVwiO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gICAgdmFyIEFwcCA9IChmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgLy89PT0gVXNlIFN0cmljdCA9PT0vL1xuICAgICAgICAndXNlIHN0cmljdCc7XG5cbiAgICAgICAgLy89PT0gUHJpdmF0ZSBWYXJpYWJsZXMgPT09Ly9cbiAgICAgICAgdmFyIGdhbGxlcnkgPSAkKCcjanMtZ2FsbGVyeScpO1xuXG4gICAgICAgIC8vPT09IEdhbGxlcnkgT2JqZWN0ID09PS8vXG4gICAgICAgIHZhciBHYWxsZXJ5ID0ge1xuICAgICAgICAgICAgem9vbTogZnVuY3Rpb24gKGltZ0NvbnRhaW5lciwgaW1nKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvbnRhaW5lckhlaWdodCA9IGltZ0NvbnRhaW5lci5vdXRlckhlaWdodCgpLFxuICAgICAgICAgICAgICAgICAgICBzcmMgPSBpbWcuYXR0cignc3JjJyk7XG5cbiAgICAgICAgICAgICAgICBpZiAoc3JjLmluZGV4T2YoJy9wcm9kdWN0cy9ub3JtYWwvJykgIT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gU2V0IGhlaWdodCBvZiBjb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgaW1nQ29udGFpbmVyLmNzcyhcImhlaWdodFwiLCBjb250YWluZXJIZWlnaHQpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgLy8gU3dpdGNoIGhlcm8gaW1hZ2Ugc3JjIHdpdGggbGFyZ2UgdmVyc2lvblxuICAgICAgICAgICAgICAgICAgICBpbWcuYXR0cignc3JjJywgc3JjLnJlcGxhY2UoJy9wcm9kdWN0cy9ub3JtYWwvJywgJy9wcm9kdWN0cy96b29tLycpKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBBZGQgem9vbWVkIGNsYXNzIHRvIGdhbGxlcnkgY29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAgIGdhbGxlcnkuYWRkQ2xhc3MoJ2lzLXpvb21lZCcpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIEVuYWJsZSBpbWFnZSB0byBiZSBkcmFnZ2FibGVcbiAgICAgICAgICAgICAgICAgICAgaW1nLmRyYWdnYWJsZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBkcmFnOiBmdW5jdGlvbiAoZXZlbnQsIHVpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdWkucG9zaXRpb24ubGVmdCA9IE1hdGgubWluKDEwMCwgdWkucG9zaXRpb24ubGVmdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdWkucG9zaXRpb24udG9wID0gTWF0aC5taW4oMTAwLCB1aS5wb3NpdGlvbi50b3ApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBFbnN1cmUgaGVpZ2h0IG9mIGNvbnRhaW5lciBmaXRzIGltYWdlXG4gICAgICAgICAgICAgICAgICAgIGltZ0NvbnRhaW5lci5jc3MoXCJoZWlnaHRcIiwgXCJhdXRvXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIFN3aXRjaCBoZXJvIGltYWdlIHNyYyB3aXRoIG5vcm1hbCB2ZXJzaW9uXG4gICAgICAgICAgICAgICAgICAgIGltZy5hdHRyKCdzcmMnLCBzcmMucmVwbGFjZSgnL3Byb2R1Y3RzL3pvb20vJywgJy9wcm9kdWN0cy9ub3JtYWwvJykpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIFJlbW92ZSB6b29tZWQgY2xhc3MgdG8gZ2FsbGVyeSBjb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgZ2FsbGVyeS5yZW1vdmVDbGFzcygnaXMtem9vbWVkJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN3aXRjaDogZnVuY3Rpb24gKHRyaWdnZXIsIGltZ0NvbnRhaW5lcikge1xuICAgICAgICAgICAgICAgIHZhciBzcmMgPSB0cmlnZ2VyLmF0dHIoJ2hyZWYnKSxcbiAgICAgICAgICAgICAgICAgICAgdGh1bWJzID0gdHJpZ2dlci5zaWJsaW5ncygpLFxuICAgICAgICAgICAgICAgICAgICBpbWcgPSB0cmlnZ2VyLnBhcmVudCgpLnByZXYoKS5jaGlsZHJlbigpO1xuXG4gICAgICAgICAgICAgICAgLy8gQWRkIGFjdGl2ZSBjbGFzcyB0byB0aHVtYlxuICAgICAgICAgICAgICAgIHRyaWdnZXIuYWRkQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuXG4gICAgICAgICAgICAgICAgLy8gUmVtb3ZlIGFjdGl2ZSBjbGFzcyBmcm9tIHRodW1ic1xuICAgICAgICAgICAgICAgIHRodW1icy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoJ2lzLWFjdGl2ZScpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgLy8gUmVzZXQgY29udGFpbmVyIGlmIGluIHpvb20gc3RhdGVcbiAgICAgICAgICAgICAgICBpZiAoZ2FsbGVyeS5oYXNDbGFzcygnaXMtem9vbWVkJykpIHtcbiAgICAgICAgICAgICAgICAgICAgZ2FsbGVyeS5yZW1vdmVDbGFzcygnaXMtem9vbWVkJyk7XG4gICAgICAgICAgICAgICAgICAgIGltZ0NvbnRhaW5lci5jc3MoXCJoZWlnaHRcIiwgXCJhdXRvXCIpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIFN3aXRjaCBpbWFnZSBzb3VyY2VcbiAgICAgICAgICAgICAgICBpbWcuYXR0cignc3JjJywgc3JjKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAvLz09PSBQdWJsaWMgTWV0aG9kcyA9PT0vL1xuICAgICAgICBmdW5jdGlvbiBpbml0KCkge1xuXG4gICAgICAgICAgICAvLyBMaXN0ZW4gZm9yIGNsaWNrcyBvbiBhbmNob3JzIHdpdGhpbiBnYWxsZXJ5XG4gICAgICAgICAgICBnYWxsZXJ5LmRlbGVnYXRlKCdhJywgJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgdmFyIHRyaWdnZXIgPSAkKHRoaXMpO1xuICAgICAgICAgICAgICAgIHZhciB0cmlnZ2VyRGF0YSA9IHRyaWdnZXIuZGF0YShcImdhbGxlcnlcIik7XG5cbiAgICAgICAgICAgICAgICBpZiAodHJpZ2dlckRhdGEgPT09ICd6b29tJykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaW1nQ29udGFpbmVyID0gdHJpZ2dlci5wYXJlbnQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZyA9IHRyaWdnZXIuc2libGluZ3MoKTtcbiAgICAgICAgICAgICAgICAgICAgR2FsbGVyeS56b29tKGltZ0NvbnRhaW5lciwgaW1nKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRyaWdnZXJEYXRhID09PSAndGh1bWInKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpbWdDb250YWluZXIgPSB0cmlnZ2VyLnBhcmVudCgpLnNpYmxpbmdzKCk7XG4gICAgICAgICAgICAgICAgICAgIEdhbGxlcnkuc3dpdGNoKHRyaWdnZXIsIGltZ0NvbnRhaW5lcik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9XG5cbiAgICAgICAgLy89PT0gTWFrZSBNZXRob2RzIFB1YmxpYyA9PT0vL1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaW5pdDogaW5pdFxuICAgICAgICB9O1xuXG4gICAgfSkoKTtcblxuICAgIEFwcC5pbml0KCk7XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9zcmMvamF2YXNjcmlwdHMvbW9kdWxlcy9nYWxsZXJ5LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==