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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNzQ1ZjQyMzhhNDE1MzE0NjczZmUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NyYy9qYXZhc2NyaXB0cy9jb21tb24uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NyYy9qYXZhc2NyaXB0cy9tb2R1bGVzL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NyYy9qYXZhc2NyaXB0cy9tb2R1bGVzL3BvcHVwLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImpRdWVyeVwiIiwid2VicGFjazovLy8uL2Fzc2V0cy9zcmMvamF2YXNjcmlwdHMvbW9kdWxlcy92YXJpYXRpb25zLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zcmMvamF2YXNjcmlwdHMvbW9kdWxlcy92YWxpZGF0aW9uLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zcmMvamF2YXNjcmlwdHMvbW9kdWxlcy9nYWxsZXJ5LmpzIl0sIm5hbWVzIjpbIiQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJiaW5kIiwiJCQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiTm9kZSIsInByb3RvdHlwZSIsIm9uIiwid2luZG93IiwibmFtZSIsImZuIiwiYWRkRXZlbnRMaXN0ZW5lciIsIk5vZGVMaXN0IiwiX19wcm90b19fIiwiQXJyYXkiLCJEb2N1bWVudCIsImZvckVhY2giLCJlbGVtIiwialF1ZXJ5Iiwic3R5bGUiLCJkaXNwbGF5IiwibmF2YmFyVG9EZWZhdWx0IiwiYmFja2dyb3VuZENvbG9yIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwibWVudUl0ZW0iLCJpIiwibGVuZ3RoIiwibmF2YmFyVG9GbG9hdCIsImFkZCIsInNldE5hdlN0eWxlIiwicGFnZVlPZmZzZXQiLCJ0b2dnbGVTZWN0aW9ucyIsImJ1dHRvbiIsImRhdGFBdHRyaWJ1dGUiLCJnZXRBdHRyaWJ1dGUiLCJzZWN0aW9uIiwiY29sbGFwc2VTZWN0aW9ucyIsImlkIiwidG9nZ2xlIiwiY2hlY2tvdXRCdG4iLCJlbCIsInNjcm9sbEVsZW0iLCJkYXRhSUQiLCJ1c2VyQ2hvaWNlVGV4dCIsImNob2ljZVByaWNlIiwiZ2V0RWxlbWVudEJ5SWQiLCJjb250ZW50IiwidXNlckNob2ljZSIsImlubmVySFRNTCIsImFuaW1hdGUiLCJzY3JvbGxUb3AiLCJvZmZzZXRUb3AiLCJvdXRlcldpZHRoIiwiY2xpY2siLCJsYXp5U2Nyb2xsIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIm9mZnNldCIsInNlY3Rpb25zIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsInNlbGVjdE9uQ2xpY2siLCJjbGlja2VkRWxlbWVudERhdGFJZCIsImFsbFNlbGVjdHMiLCJpc05hTiIsIml0ZW1TZWxlY3QiLCJzZWxlY3REYXRhIiwiYXR0cmlidXRlcyIsImRhdGEiLCJ2YWx1ZSIsIm9wdGlvbnMiLCJzZWxlY3RlZEluZGV4IiwiY29uc29sZSIsImxvZyIsImNvbXBhcmUiLCJwcmludFByaWNlIiwicHJpbnRNZXNzYWdlIiwiY2hlY2tvdXRCdXR0b24iLCJwYXJhbWV0ZXIiLCJzZXRBdHRyaWJ1dGUiLCJkaXNhYmxlZCIsInZhcmlhdGlvbnMiLCJ2YXJpYXRpb25zT2JqZWN0IiwiZGF0YUJ5SWQiLCJ2YXJpYXRpb24iLCJ2YXJpYXRpb25zV2l0aG91dFByaWNlIiwicHJpY2UiLCJKU09OIiwic3RyaW5naWZ5IiwiYWRkVG9DYXJ0IiwiY29udGFpbnMiLCJlbGVtZW50SHJlZiIsInVzZXJPcmRlclRleHQiLCJpbnB1dE5hbWUiLCJpbnB1dExhc3ROYW1lIiwiaW5wdXRFbWFpbCIsImlucHV0UGhvbmUiLCJ0aXRsZSIsInRleHRDb250ZW50IiwicHJpY2VUYWciLCJyYW5kb21JZCIsIk1hdGgiLCJ0cnVuYyIsInJhbmRvbSIsInByb2R1Y3REYXRhIiwicGFyYW1fcHJpY2UiLCJpbmZvX2ZpcnN0X25hbWUiLCJpbmZvX2xhc3RfbmFtZSIsImluZm9fcGhvbmUiLCJmZXRjaCIsImJvZHkiLCJoZWFkZXJzIiwid3BBcGlTZXR0aW5ncyIsIm5vbmNlIiwibWV0aG9kIiwidGhlbiIsInJlc3BvbnNlIiwic3RhdHVzIiwic3RhdHVzVGV4dCIsImFsZXJ0IiwiY2Fyb3VzZWwiLCJjYXRjaCIsInZhbGlkYXRvciIsIkNvbnN0cnVjdG9yIiwiVkVSU0lPTiIsImZvY3VzIiwiQXBwIiwiZ2FsbGVyeSIsIkdhbGxlcnkiLCJ6b29tIiwiaW1nQ29udGFpbmVyIiwiaW1nIiwiY29udGFpbmVySGVpZ2h0Iiwib3V0ZXJIZWlnaHQiLCJoYXNDbGFzcyIsImNzcyIsImRyYWdnYWJsZSIsImRyYWciLCJ1aSIsInBvc2l0aW9uIiwibGVmdCIsIm1pbiIsInRvcCIsInN3aXRjaCIsInRyaWdnZXIiLCJzcmMiLCJhdHRyIiwidGh1bWJzIiwic2libGluZ3MiLCJwYXJlbnQiLCJwcmV2IiwiY2hpbGRyZW4iLCJlYWNoIiwiaW5pdEhhbmRsZXIiLCJ0cmlnZ2VyRGF0YSIsImdhbGxlcnlJZCIsImRlbGVnYXRlVGFyZ2V0IiwiaW5pdCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7OztBQ25CQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUF2QkE7O0FBRUEsS0FBTUEsSUFBSUMsU0FBU0MsYUFBVCxDQUF1QkMsSUFBdkIsQ0FBNEJGLFFBQTVCLENBQVY7QUFDQSxLQUFNRyxLQUFLSCxTQUFTSSxnQkFBVCxDQUEwQkYsSUFBMUIsQ0FBK0JGLFFBQS9CLENBQVg7O0FBRUFLLE1BQUtDLFNBQUwsQ0FBZUMsRUFBZixHQUFvQkMsT0FBT0QsRUFBUCxHQUFZLFVBQVVFLElBQVYsRUFBZ0JDLEVBQWhCLEVBQW9CO0FBQ2hELFVBQUtDLGdCQUFMLENBQXNCRixJQUF0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Q0EsZ0JBQU87QUFDSHFHLG1CQUFNSjtBQURILFVBQVA7QUFHSCxNQXJFUyxFQUFWOztBQXVFQTNCLFNBQUkrQixJQUFKO0FBQ0gsRSIsImZpbGUiOiJjb21tb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA3NDVmNDIzOGE0MTUzMTQ2NzNmZSIsIi8vIGltcG9ydCAkIGZyb20gXCJqcXVlcnlcIjtcclxuXHJcbmNvbnN0ICQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yLmJpbmQoZG9jdW1lbnQpO1xyXG5jb25zdCAkJCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwuYmluZChkb2N1bWVudCk7XHJcblxyXG5Ob2RlLnByb3RvdHlwZS5vbiA9IHdpbmRvdy5vbiA9IGZ1bmN0aW9uIChuYW1lLCBmbikge1xyXG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKG5hbWUsIGZuKTtcclxufTtcclxuXHJcbk5vZGVMaXN0LnByb3RvdHlwZS5fX3Byb3RvX18gPSBBcnJheS5wcm90b3R5cGU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcclxuTm9kZUxpc3QucHJvdG90eXBlLl9fcHJvdG9fXyA9IERvY3VtZW50LnByb3RvdHlwZTtcclxuXHJcbk5vZGVMaXN0LnByb3RvdHlwZS5vbiA9IE5vZGVMaXN0LnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyID0gZnVuY3Rpb24gKG5hbWUsIGZuKSB7XHJcbiAgICB0aGlzLmZvckVhY2goKGVsZW0pID0+IHtcclxuICAgICAgICBlbGVtLm9uKG5hbWUsIGZuKTtcclxuICAgIH0pO1xyXG59O1xyXG4vL2V4cG9ydCB7JCwgJCR9O1xyXG5cclxuaW1wb3J0IG1haW4gZnJvbSBcIi4vbW9kdWxlcy9tYWluXCI7XHJcbmltcG9ydCBwb3B1cCBmcm9tIFwiLi9tb2R1bGVzL3BvcHVwXCI7XHJcbmltcG9ydCB2YXJpYXRpb25zIGZyb20gXCIuL21vZHVsZXMvdmFyaWF0aW9uc1wiO1xyXG5pbXBvcnQgdmFsaWRhdGlvbiBmcm9tIFwiLi9tb2R1bGVzL3ZhbGlkYXRpb25cIjtcclxuaW1wb3J0IGdhbGxlcnkgZnJvbSBcIi4vbW9kdWxlcy9nYWxsZXJ5XCI7XHJcblxyXG5cclxuLy8gaW1wb3J0IFwiLi9wbHVnaW5zL2luZmluaXRlLXNjcm9sbFwiO1xyXG5cclxualF1ZXJ5KGZ1bmN0aW9uICgpIHtcclxuICAgIG1haW4oJCwgJCQpO1xyXG4gICAgcG9wdXAoKTtcclxuICAgIHZhcmlhdGlvbnMoJCk7XHJcbiAgICB2YWxpZGF0aW9uKCk7XHJcbiAgICBnYWxsZXJ5KCk7XHJcbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9zcmMvamF2YXNjcmlwdHMvY29tbW9uLmpzIiwiLy8gaW1wb3J0ICQgZnJvbSBcImpxdWVyeVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKCQsICQkKSA9PiB7XHJcblxyXG4gICAgd2luZG93Lm9uKCdsb2FkJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoJy5sb2FkZXJfaW5uZXInKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgJCgnLmxvYWRlcicpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIH0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIG5hdmJhclRvRGVmYXVsdCgpIHtcclxuICAgICAgICAkKCcubmF2YmFyLWRlZmF1bHQnKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAndHJhbnNwYXJlbnQnO1xyXG4gICAgICAgICQoJy5uYXZiYXItYnJhbmQgaW1nJykuY2xhc3NMaXN0LnJlbW92ZSgnaW1nX3Jlc3BvbnNpdmUnKTtcclxuICAgICAgICAkKCcubmF2YmFyLWZpeGVkLXRvcCcpLmNsYXNzTGlzdC5yZW1vdmUoJ3RvcC1uYXYtY29sbGFwc2UnKTtcclxuICAgICAgICBsZXQgbWVudUl0ZW0gPSAkJCgnLm5hdmJhci1uYXYgYScpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWVudUl0ZW0ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbWVudUl0ZW1baV0uY2xhc3NMaXN0LnJlbW92ZSgnd2hpdGUnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbmF2YmFyVG9GbG9hdCgpIHtcclxuICAgICAgICAkKCcubmF2YmFyLWRlZmF1bHQnKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmdiYSg0OCwgNDgsIDQ4LCAwLjUpJztcclxuICAgICAgICAkKCcubmF2YmFyLWRlZmF1bHQnKS5jbGFzc0xpc3QuYWRkKCd0b3AtbmF2LWNvbGxhcHNlJyk7XHJcbiAgICAgICAgJCgnLm5hdmJhci1icmFuZCBpbWcnKS5jbGFzc0xpc3QuYWRkKCdpbWdfcmVzcG9uc2l2ZScpO1xyXG4gICAgICAgIGxldCBtZW51SXRlbSA9ICQkKCcubmF2YmFyLW5hdiBhJyk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtZW51SXRlbS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBtZW51SXRlbVtpXS5jbGFzc0xpc3QuYWRkKCd3aGl0ZScpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXROYXZTdHlsZSgpIHtcclxuICAgICAgICBuYXZiYXJUb0Zsb2F0KCk7XHJcbiAgICAgICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA8IDUwKSB7XHJcbiAgICAgICAgICAgIG5hdmJhclRvRGVmYXVsdCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB3aW5kb3cudG9nZ2xlU2VjdGlvbnMgPSBmdW5jdGlvbiAoYnV0dG9uKSB7XHJcbiAgICAgICAgJCgnLmNsb3NlLWJ0bicpLmNsYXNzTGlzdC5hZGQoJ3Nob3dpbmcnKTtcclxuICAgICAgICBpZiAoJCQoJy5jb2xsYXBzZS1zZWN0aW9uLnNob3dpbmcnKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgJCgnLmNsb3NlLWJ0bicpLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3dpbmcnKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgZGF0YUF0dHJpYnV0ZSA9IGJ1dHRvbi5nZXRBdHRyaWJ1dGUoJ2RhdGEtYXR0cicpO1xyXG4gICAgICAgIGxldCBzZWN0aW9uID0gJCgnI3NlY3Rpb24tJyArIGRhdGFBdHRyaWJ1dGUpO1xyXG4gICAgICAgIC8vIHNlY3Rpb24ub2Zmc2V0VG9wID0gMjA7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coc2VjdGlvbi5vZmZzZXRUb3ApO1xyXG4gICAgICAgIGxldCBjb2xsYXBzZVNlY3Rpb25zID0gJCQoJy5jb2xsYXBzZS1zZWN0aW9uJyk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2xsYXBzZVNlY3Rpb25zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICghKGNvbGxhcHNlU2VjdGlvbnNbaV0uaWQgPT09IHNlY3Rpb24uaWQpKSB7XHJcbiAgICAgICAgICAgICAgICBjb2xsYXBzZVNlY3Rpb25zW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3dpbmcnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBzZWN0aW9uLmNsYXNzTGlzdC50b2dnbGUoJ3Nob3dpbmcnKTtcclxuICAgICAgICBpZiAoJCQoJy5jb2xsYXBzZS1zZWN0aW9uLnNob3dpbmcnKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgJCgnLmNsb3NlLWJ0bicpLmNsYXNzTGlzdC5hZGQoJ3Nob3dpbmcnKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHdpbmRvdy5jaGVja291dEJ0biA9IGZ1bmN0aW9uIChlbCkge1xyXG4gICAgICAgIHNjcm9sbEVsZW0oKTtcclxuXHJcbiAgICAgICAgbGV0IGRhdGFJRCA9IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1jaGVja291dCcpO1xyXG4gICAgICAgIGxldCB1c2VyQ2hvaWNlVGV4dCA9ICQoJyNzZWN0aW9uLScgKyBkYXRhSUQgKyAnIC51c2VyLWNob2ljZScpO1xyXG4gICAgICAgIGxldCBjaG9pY2VQcmljZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRhdGFJRCArICctcHJpY2UnKS5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJpY2UnKTtcclxuICAgICAgICBsZXQgY29udGVudCA9ICcnO1xyXG4gICAgICAgIGZvciAobGV0IGkgaW4gdXNlckNob2ljZSkge1xyXG4gICAgICAgICAgICBjb250ZW50ICs9IFwiPHA+XCIgKyBpICsgXCI6IFwiICsgdXNlckNob2ljZVtpXSArIFwiPC9wPlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb250ZW50ICs9IFwiPHA+UHJpY2U6IFwiICsgY2hvaWNlUHJpY2U7XHJcbiAgICAgICAgdXNlckNob2ljZVRleHQuaW5uZXJIVE1MID0gY29udGVudDtcclxuICAgIH07XHJcbiAgICBcclxuICAgIGZ1bmN0aW9uIHNjcm9sbEVsZW0oKSB7XHJcbiAgICAgICAgalF1ZXJ5KCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgIHNjcm9sbFRvcDogJChcIiNjaG9vc2VcIikub2Zmc2V0VG9wIC0gNTBcclxuICAgICAgICB9LCAxMDApO1xyXG4gICAgfVxyXG5cclxuICAgIHdpbmRvdy5vbignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBzZXROYXZTdHlsZSgpO1xyXG4gICAgICAgIC8vTmF2YmFyIHN0eWxlIHN3aXRjaGVyXHJcbiAgICAgICAgd2luZG93Lm9uKCdzY3JvbGwnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHNldE5hdlN0eWxlKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmICh3aW5kb3cub3V0ZXJXaWR0aCA8IDc2OCkge1xyXG5cclxuICAgICAgICAgICAgLy9TQU5EV0lDSCBCVVRUT05cclxuICAgICAgICAgICAgJCgnLm5hdmJhci10b2dnbGUnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBuYXZiYXJUb0Zsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAkKCcuc2FuZHdpY2gnKS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvL0hJREUgTUVOVSBDTElDS0lORyBMSVxyXG4gICAgICAgICAgICAkJCgnLm5hdmJhci1jb2xsYXBzZSB1bCBsaSBhJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgJCgnLm5hdmJhci10b2dnbGUnKS5jbGljaygpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vTEFaWSBBTklNQVRJTkcgRk9SIEJVVFRPTlMgQU5EIE1FTlUgSVRFTVNcclxuICAgICAgICAkJCgnLnNjcm9sbF9idG4nKS5vbignY2xpY2snLCBsYXp5U2Nyb2xsKTtcclxuICAgICAgICAkJCgnLm5hdiBhJykub24oJ2NsaWNrJywgbGF6eVNjcm9sbCk7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGxhenlTY3JvbGwoKSB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGxldCBpZCA9IHRoaXMuZ2V0QXR0cmlidXRlKCdocmVmJyk7XHJcbiAgICAgICAgICAgIGxldCBvZmZzZXQgPSAkKGlkKS5vZmZzZXRUb3A7XHJcbiAgICAgICAgICAgIC8vZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2h0bWwnKVswXS5hbmltYXRlKHtcclxuICAgICAgICAgICAgaWYgKGlkID09PSBcIiNjaG9vc2VcIikge1xyXG4gICAgICAgICAgICAgICAgb2Zmc2V0IC09IDUwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBqUXVlcnkoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcclxuICAgICAgICAgICAgICAgIHNjcm9sbFRvcDogb2Zmc2V0XHJcbiAgICAgICAgICAgIH0sIDcwMCk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGZ1bmN0aW9uIGxhenlTY3JvbGwoKSB7XHJcbiAgICAgICAgLy8gICAgICAgICBsZXQgaWQgPSB0aGlzLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xyXG4gICAgICAgIC8vICAgICAgICAgbGV0IG9mZnNldCA9ICQoaWQpLm9mZnNldFRvcDtcclxuICAgICAgICAvLyAgICAgaWYgKHRoaXMuaGFzaCAhPT0gXCJcIikge1xyXG4gICAgICAgIC8vICAgICAgICAgLy8gUHJldmVudCBkZWZhdWx0IGFuY2hvciBjbGljayBiZWhhdmlvclxyXG4gICAgICAgIC8vICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vICAgICAgICAgLy8gU3RvcmUgaGFzaFxyXG4gICAgICAgIC8vICAgICAgICAgdmFyIGhhc2ggPSB0aGlzLmhhc2g7XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyAgICAgICAgIC8vIFVzaW5nIGpRdWVyeSdzIGFuaW1hdGUoKSBtZXRob2QgdG8gYWRkIHNtb290aCBwYWdlIHNjcm9sbFxyXG4gICAgICAgIC8vICAgICAgICAgLy8gVGhlIG9wdGlvbmFsIG51bWJlciAoODAwKSBzcGVjaWZpZXMgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaXQgdGFrZXMgdG8gc2Nyb2xsIHRvIHRoZSBzcGVjaWZpZWQgYXJlYVxyXG4gICAgICAgIC8vICAgICAgICAgalF1ZXJ5KCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgc2Nyb2xsVG9wOiBvZmZzZXRcclxuICAgICAgICAvLyAgICAgICAgIH0sIDMwMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgLy8gQWRkIGhhc2ggKCMpIHRvIFVSTCB3aGVuIGRvbmUgc2Nyb2xsaW5nIChkZWZhdWx0IGNsaWNrIGJlaGF2aW9yKVxyXG4gICAgICAgIC8vICAgICAgICAgICAgIC8vd2luZG93LmxvY2F0aW9uLmhhc2ggPSBoYXNoO1xyXG4gICAgICAgIC8vICAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIC8vIE1ha2Ugc3VyZSB0aGlzLmhhc2ggaGFzIGEgdmFsdWUgYmVmb3JlIG92ZXJyaWRpbmcgZGVmYXVsdCBiZWhhdmlvclxyXG5cclxuXHJcbiAgICAgICAgJCgnLmNsb3NlLWJ0bicpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgbGV0IHNlY3Rpb25zID0gJCQoJy5jb2xsYXBzZS1zZWN0aW9uJyk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VjdGlvbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHNlY3Rpb25zW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3dpbmcnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3dpbmcnKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgalF1ZXJ5KCdbZGF0YS1zbGlkZT1cInByZXZcIl0nKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHNjcm9sbEVsZW0oKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvc3JjL2phdmFzY3JpcHRzL21vZHVsZXMvbWFpbi5qcyIsImltcG9ydCAkIGZyb20gXCJqcXVlcnlcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuICAgICQoJyNuZXh0LXBlcnNvbmFsJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoJyNqcy1wcm9kdWN0LWluZm8nKS5hZGRDbGFzcygnc2xpZGUtb3V0LWxlZnQnKTtcclxuICAgICAgICAkKCcjanMtcGVyc29uYWwtaW5mbycpLmFkZENsYXNzKCdzbGlkZS1pbi1yaWdodCcpO1xyXG4gICAgfSk7XHJcbiAgICAkKCcjcHJldi1wcm9kdWN0LWluZm8nKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCgnI2pzLXBlcnNvbmFsLWluZm8nKS5yZW1vdmVDbGFzcygnc2xpZGUtaW4tcmlnaHQnKTtcclxuICAgICAgICAkKCcjanMtcHJvZHVjdC1pbmZvJykucmVtb3ZlQ2xhc3MoJ3NsaWRlLW91dC1sZWZ0Jyk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcblxyXG5cclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9zcmMvamF2YXNjcmlwdHMvbW9kdWxlcy9wb3B1cC5qcyIsIm1vZHVsZS5leHBvcnRzID0galF1ZXJ5O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwialF1ZXJ5XCJcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gaW1wb3J0ICQgZnJvbSBcImpxdWVyeVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKCQpID0+IHtcclxuICAgIHdpbmRvdy51c2VyQ2hvaWNlID0ge307XHJcblxyXG4gICAgd2luZG93LnNlbGVjdE9uQ2xpY2sgPSBmdW5jdGlvbiAoZWwpIHtcclxuXHJcbiAgICAgICAgbGV0IGNsaWNrZWRFbGVtZW50RGF0YUlkID0gZWwuZ2V0QXR0cmlidXRlKCdkYXRhJyk7XHJcbiAgICAgICAgbGV0IGFsbFNlbGVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YV0nKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSBpbiBhbGxTZWxlY3RzKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoaXNOYU4oaSkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgaXRlbVNlbGVjdCA9IGFsbFNlbGVjdHNbaV07XHJcbiAgICAgICAgICAgIGxldCBzZWxlY3REYXRhID0gaXRlbVNlbGVjdC5hdHRyaWJ1dGVzLmRhdGEudmFsdWU7XHJcblxyXG4gICAgICAgICAgICBpZiAoc2VsZWN0RGF0YSA9PT0gY2xpY2tlZEVsZW1lbnREYXRhSWQpIHtcclxuICAgICAgICAgICAgICAgIHVzZXJDaG9pY2VbaXRlbVNlbGVjdC5uYW1lXSA9IGl0ZW1TZWxlY3Qub3B0aW9uc1tpdGVtU2VsZWN0LnNlbGVjdGVkSW5kZXhdLnZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZygnVGhpcyBpcyB1c2VyIGNob2ljZScpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHVzZXJDaG9pY2UpO1xyXG5cclxuICAgICAgICBjb21wYXJlKHVzZXJDaG9pY2UsIGNsaWNrZWRFbGVtZW50RGF0YUlkKTtcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gY29tcGFyZSh1c2VyQ2hvaWNlLCBkYXRhSUQpIHtcclxuXHJcbiAgICAgICAgbGV0IHByaW50UHJpY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkYXRhSUQgKyAnLXByaWNlJyk7XHJcbiAgICAgICAgbGV0IHByaW50TWVzc2FnZSA9ICQoJyNtZXNzYWdlLScgKyBkYXRhSUQpO1xyXG4gICAgICAgIGxldCBjaGVja291dEJ1dHRvbiA9ICQoXCIjc2VjdGlvbi1cIiArIGRhdGFJRCArIFwiIGJ1dHRvbltkYXRhLXNsaWRlPSduZXh0J11cIik7XHJcblxyXG4gICAgICAgIGZvciAobGV0IHBhcmFtZXRlciBpbiB1c2VyQ2hvaWNlKSB7XHJcbiAgICAgICAgICAgIGlmICh1c2VyQ2hvaWNlW3BhcmFtZXRlcl0gPT09IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgIHByaW50UHJpY2Uuc2V0QXR0cmlidXRlKCdkYXRhLXByaWNlJywgJycpO1xyXG4gICAgICAgICAgICAgICAgcHJpbnRQcmljZS5pbm5lckhUTUwgPSBcIiZuYnNwO1wiO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1NlbGVjdCB0aGUgJyArIHBhcmFtZXRlcik7XHJcbiAgICAgICAgICAgICAgICBwcmludE1lc3NhZ2UuaW5uZXJIVE1MID0gJ1NlbGVjdCB0aGUgJyArIHBhcmFtZXRlcjtcclxuICAgICAgICAgICAgICAgIGNoZWNrb3V0QnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHZhcmlhdGlvbnMgPSB2YXJpYXRpb25zT2JqZWN0LmRhdGFCeUlkW2RhdGFJRF07XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdUaGlzIGlzIFZhcmlhdGlvbnMnKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh2YXJpYXRpb25zKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSBpbiB2YXJpYXRpb25zKSB7XHJcbiAgICAgICAgICAgIGxldCB2YXJpYXRpb24gPSB2YXJpYXRpb25zW2ldO1xyXG4gICAgICAgICAgICBsZXQgdmFyaWF0aW9uc1dpdGhvdXRQcmljZSA9IHt9O1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgcGFyYW1ldGVyIGluIHZhcmlhdGlvbikge1xyXG4gICAgICAgICAgICAgICAgdmFyaWF0aW9uc1dpdGhvdXRQcmljZVtwYXJhbWV0ZXJdID0gdmFyaWF0aW9uW3BhcmFtZXRlcl07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGRlbGV0ZSB2YXJpYXRpb25zV2l0aG91dFByaWNlLnByaWNlO1xyXG5cclxuICAgICAgICAgICAgaWYgKEpTT04uc3RyaW5naWZ5KHVzZXJDaG9pY2UpID09PSBKU09OLnN0cmluZ2lmeSh2YXJpYXRpb25zV2l0aG91dFByaWNlKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codmFyaWF0aW9uLnByaWNlKTtcclxuICAgICAgICAgICAgICAgIHByaW50UHJpY2Uuc2V0QXR0cmlidXRlKCdkYXRhLXByaWNlJywgdmFyaWF0aW9uLnByaWNlKTtcclxuICAgICAgICAgICAgICAgIHByaW50UHJpY2UuaW5uZXJIVE1MID0gJzxoMyBjbGFzcz1cInJlZC1wcmljZVwiPicgKyB2YXJpYXRpb24ucHJpY2UgKyAnJDwvaDM+JztcclxuICAgICAgICAgICAgICAgIHByaW50TWVzc2FnZS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgY2hlY2tvdXRCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHByaW50UHJpY2Uuc2V0QXR0cmlidXRlKCdkYXRhLXByaWNlJywgJycpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1ZhcmlhdGlvbiBpcyBub3QgZm91bmQnKTtcclxuICAgICAgICAgICAgICAgIHByaW50UHJpY2UuaW5uZXJIVE1MID0gJzxoMz4tIC08L2gzPic7XHJcbiAgICAgICAgICAgICAgICBwcmludE1lc3NhZ2UuaW5uZXJIVE1MID0gJ1ZhcmlhdGlvbiBpcyBub3QgZm91bmQnO1xyXG4gICAgICAgICAgICAgICAgY2hlY2tvdXRCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuLy9DbGljayB0byBDaGVja291dCAtIFNsaWRlIGJ1dHRvblxyXG5cclxuXHJcbi8vQ3JlYXRlIG5ldyBwb3N0XHJcbiAgICB3aW5kb3cuYWRkVG9DYXJ0ID0gZnVuY3Rpb24gKGVsKSB7XHJcblxyXG4gICAgICAgIGlmIChlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2Rpc2FibGVkJykpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgalF1ZXJ5KCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgIHNjcm9sbFRvcDogJChcIiNjaG9vc2VcIikub2Zmc2V0VG9wIC0gNTBcclxuICAgICAgICB9LCAxMDApO1xyXG5cclxuICAgICAgICBsZXQgY2xpY2tlZEVsZW1lbnREYXRhSWQgPSBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYXR0cicpO1xyXG4gICAgICAgIGxldCBlbGVtZW50SHJlZiA9IGVsLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xyXG4gICAgICAgIGxldCB1c2VyT3JkZXJUZXh0ID0gJCgnI3NlY3Rpb24tJyArIGNsaWNrZWRFbGVtZW50RGF0YUlkICsgJyAudXNlci1vcmRlcicpO1xyXG4gICAgICAgIGxldCBpbnB1dE5hbWUgPSAkKCcjZm9ybS0nICsgY2xpY2tlZEVsZW1lbnREYXRhSWQgKyAnIGlucHV0W25hbWU9XCJmaXJzdF9uYW1lXCJdJyk7XHJcbiAgICAgICAgbGV0IGlucHV0TGFzdE5hbWUgPSAkKCcjZm9ybS0nICsgY2xpY2tlZEVsZW1lbnREYXRhSWQgKyAnIGlucHV0W25hbWU9XCJsYXN0X25hbWVcIl0nKTtcclxuICAgICAgICBsZXQgaW5wdXRFbWFpbCA9ICQoJyNmb3JtLScgKyBjbGlja2VkRWxlbWVudERhdGFJZCArICcgaW5wdXRbbmFtZT1cImVtYWlsXCJdJyk7XHJcbiAgICAgICAgbGV0IGlucHV0UGhvbmUgPSAkKCcjZm9ybS0nICsgY2xpY2tlZEVsZW1lbnREYXRhSWQgKyAnIGlucHV0W25hbWU9XCJwaG9uZVwiXScpO1xyXG5cclxuICAgICAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbC5uYW1lKS50ZXh0Q29udGVudDtcclxuXHJcbiAgICAgICAgbGV0IHByaWNlVGFnID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY2xpY2tlZEVsZW1lbnREYXRhSWQgKyAnLXByaWNlJyk7XHJcbiAgICAgICAgbGV0IHByaWNlID0gcHJpY2VUYWcuZ2V0QXR0cmlidXRlKCdkYXRhLXByaWNlJyk7XHJcbiAgICAgICAgbGV0IHJhbmRvbUlkID0gTWF0aC50cnVuYygoTWF0aC5yYW5kb20oKSAqIDEwMDAwMCkpO1xyXG4gICAgICAgIGxldCBwcm9kdWN0RGF0YSA9IHtcclxuICAgICAgICAgICAgXCJ0aXRsZVwiOiB0aXRsZSArICcgWycgKyByYW5kb21JZCArICddJyxcclxuICAgICAgICAgICAgXCJjb250ZW50XCI6IEpTT04uc3RyaW5naWZ5KHVzZXJDaG9pY2UpICsgJ3tcInByaWNlXCI6JyArIHByaWNlICsgJ30nLFxyXG4gICAgICAgICAgICBcInN0YXR1c1wiOiAncHVibGlzaCdcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpIGluIHVzZXJDaG9pY2UpIHtcclxuICAgICAgICAgICAgcHJvZHVjdERhdGFbJ3BhcmFtXycgKyBpXSA9IHVzZXJDaG9pY2VbaV07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm9kdWN0RGF0YVsncGFyYW1fcHJpY2UnXSA9IHByaWNlO1xyXG5cclxuICAgICAgICBwcm9kdWN0RGF0YVsnaW5mb19maXJzdF9uYW1lJ10gPSBpbnB1dE5hbWUudmFsdWU7XHJcbiAgICAgICAgcHJvZHVjdERhdGFbJ2luZm9fbGFzdF9uYW1lJ10gPSBpbnB1dExhc3ROYW1lLnZhbHVlO1xyXG4gICAgICAgIHByb2R1Y3REYXRhWydpbmZvX2VtYWlsJ10gPSBpbnB1dEVtYWlsLnZhbHVlO1xyXG4gICAgICAgIHByb2R1Y3REYXRhWydpbmZvX3Bob25lJ10gPSBpbnB1dFBob25lLnZhbHVlO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhwcm9kdWN0RGF0YSk7XHJcblxyXG4gICAgICAgIGxldCBjb250ZW50ID0gJyc7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgaW4gdXNlckNob2ljZSkge1xyXG4gICAgICAgICAgICBjb250ZW50ICs9IFwiPHA+XCIgKyBpICsgXCI6IFwiICsgdXNlckNob2ljZVtpXSArIFwiPC9wPlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb250ZW50ICs9IFwiPHA+UHJpY2U6IFwiICsgcHJvZHVjdERhdGEucGFyYW1fcHJpY2UgKyBcIjwvcD5cIjtcclxuICAgICAgICBjb250ZW50ICs9IFwiPHA+Rmlyc3QgbmFtZTogXCIgKyBwcm9kdWN0RGF0YS5pbmZvX2ZpcnN0X25hbWUgKyBcIjwvcD5cIjtcclxuICAgICAgICBjb250ZW50ICs9IFwiPHA+TGFzdCBuYW1lOiBcIiArIHByb2R1Y3REYXRhLmluZm9fbGFzdF9uYW1lICsgXCI8L3A+XCI7XHJcbiAgICAgICAgY29udGVudCArPSBcIjxwPlBob25lOiBcIiArIHByb2R1Y3REYXRhLmluZm9fcGhvbmUgKyBcIjwvcD5cIjtcclxuXHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcblxyXG4gICAgICAgIGZldGNoKCcvd3AtanNvbi93cC92Mi9zaG9wX29yZGVyJywge1xyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwcm9kdWN0RGF0YSksXHJcbiAgICAgICAgICAgIC8vIHZhciBCYXNlNjQ9e19rZXlTdHI6XCJBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvPVwiLGVuY29kZTpmdW5jdGlvbihlKXt2YXIgdD1cIlwiO3ZhciBuLHIsaSxzLG8sdSxhO3ZhciBmPTA7ZT1CYXNlNjQuX3V0ZjhfZW5jb2RlKGUpO3doaWxlKGY8ZS5sZW5ndGgpe249ZS5jaGFyQ29kZUF0KGYrKyk7cj1lLmNoYXJDb2RlQXQoZisrKTtpPWUuY2hhckNvZGVBdChmKyspO3M9bj4+MjtvPShuJjMpPDw0fHI+PjQ7dT0ociYxNSk8PDJ8aT4+NjthPWkmNjM7aWYoaXNOYU4ocikpe3U9YT02NH1lbHNlIGlmKGlzTmFOKGkpKXthPTY0fXQ9dCt0aGlzLl9rZXlTdHIuY2hhckF0KHMpK3RoaXMuX2tleVN0ci5jaGFyQXQobykrdGhpcy5fa2V5U3RyLmNoYXJBdCh1KSt0aGlzLl9rZXlTdHIuY2hhckF0KGEpfXJldHVybiB0fSxkZWNvZGU6ZnVuY3Rpb24oZSl7dmFyIHQ9XCJcIjt2YXIgbixyLGk7dmFyIHMsbyx1LGE7dmFyIGY9MDtlPWUucmVwbGFjZSgvW15BLVphLXowLTlcXCtcXC9cXD1dL2csXCJcIik7d2hpbGUoZjxlLmxlbmd0aCl7cz10aGlzLl9rZXlTdHIuaW5kZXhPZihlLmNoYXJBdChmKyspKTtvPXRoaXMuX2tleVN0ci5pbmRleE9mKGUuY2hhckF0KGYrKykpO3U9dGhpcy5fa2V5U3RyLmluZGV4T2YoZS5jaGFyQXQoZisrKSk7YT10aGlzLl9rZXlTdHIuaW5kZXhPZihlLmNoYXJBdChmKyspKTtuPXM8PDJ8bz4+NDtyPShvJjE1KTw8NHx1Pj4yO2k9KHUmMyk8PDZ8YTt0PXQrU3RyaW5nLmZyb21DaGFyQ29kZShuKTtpZih1IT02NCl7dD10K1N0cmluZy5mcm9tQ2hhckNvZGUocil9aWYoYSE9NjQpe3Q9dCtTdHJpbmcuZnJvbUNoYXJDb2RlKGkpfX10PUJhc2U2NC5fdXRmOF9kZWNvZGUodCk7cmV0dXJuIHR9LF91dGY4X2VuY29kZTpmdW5jdGlvbihlKXtlPWUucmVwbGFjZSgvXFxyXFxuL2csXCJcXG5cIik7dmFyIHQ9XCJcIjtmb3IodmFyIG49MDtuPGUubGVuZ3RoO24rKyl7dmFyIHI9ZS5jaGFyQ29kZUF0KG4pO2lmKHI8MTI4KXt0Kz1TdHJpbmcuZnJvbUNoYXJDb2RlKHIpfWVsc2UgaWYocj4xMjcmJnI8MjA0OCl7dCs9U3RyaW5nLmZyb21DaGFyQ29kZShyPj42fDE5Mik7dCs9U3RyaW5nLmZyb21DaGFyQ29kZShyJjYzfDEyOCl9ZWxzZXt0Kz1TdHJpbmcuZnJvbUNoYXJDb2RlKHI+PjEyfDIyNCk7dCs9U3RyaW5nLmZyb21DaGFyQ29kZShyPj42JjYzfDEyOCk7dCs9U3RyaW5nLmZyb21DaGFyQ29kZShyJjYzfDEyOCl9fXJldHVybiB0fSxfdXRmOF9kZWNvZGU6ZnVuY3Rpb24oZSl7dmFyIHQ9XCJcIjt2YXIgbj0wO3ZhciByPWMxPWMyPTA7d2hpbGUobjxlLmxlbmd0aCl7cj1lLmNoYXJDb2RlQXQobik7aWYocjwxMjgpe3QrPVN0cmluZy5mcm9tQ2hhckNvZGUocik7bisrfWVsc2UgaWYocj4xOTEmJnI8MjI0KXtjMj1lLmNoYXJDb2RlQXQobisxKTt0Kz1TdHJpbmcuZnJvbUNoYXJDb2RlKChyJjMxKTw8NnxjMiY2Myk7bis9Mn1lbHNle2MyPWUuY2hhckNvZGVBdChuKzEpO2MzPWUuY2hhckNvZGVBdChuKzIpO3QrPVN0cmluZy5mcm9tQ2hhckNvZGUoKHImMTUpPDwxMnwoYzImNjMpPDw2fGMzJjYzKTtuKz0zfX1yZXR1cm4gdH19O1xyXG4gICAgICAgICAgICAvL2NyZWF0ZVBvc3Quc2V0UmVxdWVzdEhlYWRlciggJ0F1dGhvcml6YXRpb24nLCAnQmFzaWMgJyArIEJhc2U2NC5lbmNvZGUoICd0ZXN0OjAwMDAnICkgKTtcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgJ1gtV1AtTm9uY2UnOiB3cEFwaVNldHRpbmdzLm5vbmNlLFxyXG4gICAgICAgICAgICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJ1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgIT09IDIwMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdOb3QgMjAxOiAnICsgcmVzcG9uc2Uuc3RhdHVzICsgJyAnICsgcmVzcG9uc2Uuc3RhdHVzVGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ05vdCAyMDE6ICcgKyByZXNwb25zZS5zdGF0dXMgKyAnICcgKyByZXNwb25zZS5zdGF0dXNUZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudCArPSAnPGJyPicgKyByZXNwb25zZS5zdGF0dXNUZXh0ICsgJyBzdGF0dXM6IHBvc3QgYWRkZWQnO1xyXG4gICAgICAgICAgICAgICAgICAgIGpRdWVyeShlbGVtZW50SHJlZikuY2Fyb3VzZWwoJ25leHQnKTtcclxuICAgICAgICAgICAgICAgICAgICB1c2VyT3JkZXJUZXh0LmlubmVySFRNTCA9IGNvbnRlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2Uuc3RhdHVzVGV4dCArICcgc3RhdHVzOiBwb3N0IGFkZGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQocmVzcG9uc2Uuc3RhdHVzVGV4dCArICcgc3RhdHVzOiBwb3N0IGFkZGVkJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChhbGVydCk7XHJcbiAgICB9O1xyXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9zcmMvamF2YXNjcmlwdHMvbW9kdWxlcy92YXJpYXRpb25zLmpzIiwiaW1wb3J0ICQgZnJvbSBcImpxdWVyeVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJib29zdHJhcC12YWxpZGF0b3IgdmVyc2lvbjpcIiwgalF1ZXJ5LmZuLnZhbGlkYXRvci5Db25zdHJ1Y3Rvci5WRVJTSU9OKTtcclxuICAgICQoJ2Zvcm0nKS52YWxpZGF0b3Ioe1xyXG4gICAgICAgIGZvY3VzOiBmYWxzZSxcclxuICAgICAgICAvLyBkZWxheTogMzAwMFxyXG4gICAgfSk7XHJcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL3NyYy9qYXZhc2NyaXB0cy9tb2R1bGVzL3ZhbGlkYXRpb24uanMiLCJpbXBvcnQgJCBmcm9tIFwianF1ZXJ5XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcblxyXG4gICAgbGV0IEFwcCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbGV0IGdhbGxlcnkgPSAkKCcuZ2FsbGVyeScpO1xyXG4gICAgICAgIGxldCBHYWxsZXJ5ID0ge1xyXG4gICAgICAgICAgICB6b29tOiBmdW5jdGlvbiAoaW1nQ29udGFpbmVyLCBpbWcsIGdhbGxlcnkpIHtcclxuICAgICAgICAgICAgICAgIGxldCBjb250YWluZXJIZWlnaHQgPSBpbWdDb250YWluZXIub3V0ZXJIZWlnaHQoKTtcclxuICAgICAgICAgICAgICAgIGlmICghZ2FsbGVyeS5oYXNDbGFzcygnaXMtem9vbWVkJykpIHtcclxuICAgICAgICAgICAgICAgICAgICBpbWdDb250YWluZXIuY3NzKFwiaGVpZ2h0XCIsIGNvbnRhaW5lckhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2FsbGVyeS5hZGRDbGFzcygnaXMtem9vbWVkJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGltZy5kcmFnZ2FibGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkcmFnOiBmdW5jdGlvbiAoZXZlbnQsIHVpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1aS5wb3NpdGlvbi5sZWZ0ID0gTWF0aC5taW4oMTAwLCB1aS5wb3NpdGlvbi5sZWZ0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVpLnBvc2l0aW9uLnRvcCA9IE1hdGgubWluKDEwMCwgdWkucG9zaXRpb24udG9wKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpbWdDb250YWluZXIuY3NzKFwiaGVpZ2h0XCIsIFwiYXV0b1wiKTtcclxuICAgICAgICAgICAgICAgICAgICBnYWxsZXJ5LnJlbW92ZUNsYXNzKCdpcy16b29tZWQnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3dpdGNoOiBmdW5jdGlvbiAodHJpZ2dlciwgaW1nQ29udGFpbmVyLCBnYWxsZXJ5KSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgc3JjID0gdHJpZ2dlci5hdHRyKCdocmVmJyksXHJcbiAgICAgICAgICAgICAgICAgICAgdGh1bWJzID0gdHJpZ2dlci5zaWJsaW5ncygpLFxyXG4gICAgICAgICAgICAgICAgICAgIGltZyA9IHRyaWdnZXIucGFyZW50KCkucHJldigpLmNoaWxkcmVuKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdHJpZ2dlci5hZGRDbGFzcygnaXMtYWN0aXZlJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGh1bWJzLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKCdpcy1hY3RpdmUnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZ2FsbGVyeS5oYXNDbGFzcygnaXMtem9vbWVkJykpIHtcclxuICAgICAgICAgICAgICAgICAgICBnYWxsZXJ5LnJlbW92ZUNsYXNzKCdpcy16b29tZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICBpbWdDb250YWluZXIuY3NzKFwiaGVpZ2h0XCIsIFwiYXV0b1wiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBTd2l0Y2ggaW1hZ2Ugc291cmNlXHJcbiAgICAgICAgICAgICAgICBpbWcuYXR0cignc3JjJywgc3JjKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vPT09IFB1YmxpYyBNZXRob2RzID09PS8vXHJcbiAgICAgICAgZnVuY3Rpb24gaW5pdEhhbmRsZXIoKSB7XHJcbiAgICAgICAgICAgIGdhbGxlcnkub24oJ2NsaWNrJywgJ2EnLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgIGxldCB0cmlnZ2VyID0gJCh0aGlzKTtcclxuICAgICAgICAgICAgICAgIGxldCB0cmlnZ2VyRGF0YSA9IHRyaWdnZXIuZGF0YShcImdhbGxlcnlcIik7XHJcbiAgICAgICAgICAgICAgICBsZXQgZ2FsbGVyeUlkID0gZXZlbnQuZGVsZWdhdGVUYXJnZXQuaWQ7XHJcbiAgICAgICAgICAgICAgICBnYWxsZXJ5ID0gJCgnIycgKyBnYWxsZXJ5SWQpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0cmlnZ2VyRGF0YSA9PT0gJ3pvb20nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGltZ0NvbnRhaW5lciA9IHRyaWdnZXIucGFyZW50KCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZyA9IHRyaWdnZXIuc2libGluZ3MoKTtcclxuICAgICAgICAgICAgICAgICAgICBHYWxsZXJ5Lnpvb20oaW1nQ29udGFpbmVyLCBpbWcsIGdhbGxlcnkpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0cmlnZ2VyRGF0YSA9PT0gJ3RodW1iJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpbWdDb250YWluZXIgPSB0cmlnZ2VyLnBhcmVudCgpLnNpYmxpbmdzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgR2FsbGVyeS5zd2l0Y2godHJpZ2dlciwgaW1nQ29udGFpbmVyLCBnYWxsZXJ5KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLz09PSBNYWtlIE1ldGhvZHMgUHVibGljID09PS8vXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaW5pdDogaW5pdEhhbmRsZXJcclxuICAgICAgICB9O1xyXG4gICAgfSkoKTtcclxuXHJcbiAgICBBcHAuaW5pdCgpO1xyXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9zcmMvamF2YXNjcmlwdHMvbW9kdWxlcy9nYWxsZXJ5LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==