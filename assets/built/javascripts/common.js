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

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMDNjZjgwODA1NDM2YjUzNzQyMTEiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NyYy9qYXZhc2NyaXB0cy9jb21tb24uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NyYy9qYXZhc2NyaXB0cy9tb2R1bGVzL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NyYy9qYXZhc2NyaXB0cy9tb2R1bGVzL3BvcHVwLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImpRdWVyeVwiIiwid2VicGFjazovLy8uL2Fzc2V0cy9zcmMvamF2YXNjcmlwdHMvbW9kdWxlcy92YXJpYXRpb25zLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zcmMvamF2YXNjcmlwdHMvbW9kdWxlcy92YWxpZGF0aW9uLmpzIl0sIm5hbWVzIjpbIiQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJiaW5kIiwiJCQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiTm9kZSIsInByb3RvdHlwZSIsIm9uIiwid2luZG93IiwibmFtZSIsImZuIiwiYWRkRXZlbnRMaXN0ZW5lciIsIk5vZGVMaXN0IiwiX19wcm90b19fIiwiQXJyYXkiLCJEb2N1bWVudCIsImZvckVhY2giLCJlbGVtIiwialF1ZXJ5Iiwic3R5bGUiLCJkaXNwbGF5IiwibmF2YmFyVG9EZWZhdWx0IiwiYmFja2dyb3VuZENvbG9yIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwibWVudUl0ZW0iLCJpIiwibGVuZ3RoIiwibmF2YmFyVG9GbG9hdCIsImFkZCIsInNldE5hdlN0eWxlIiwicGFnZVlPZmZzZXQiLCJ0b2dnbGVTZWN0aW9ucyIsImJ1dHRvbiIsImRhdGFBdHRyaWJ1dGUiLCJnZXRBdHRyaWJ1dGUiLCJzZWN0aW9uIiwiY29sbGFwc2VTZWN0aW9ucyIsImlkIiwidG9nZ2xlIiwiY2hlY2tvdXRCdG4iLCJlbCIsImRhdGFJRCIsInVzZXJDaG9pY2VUZXh0IiwiY2hvaWNlUHJpY2UiLCJnZXRFbGVtZW50QnlJZCIsImNvbnRlbnQiLCJ1c2VyQ2hvaWNlIiwiaW5uZXJIVE1MIiwib3V0ZXJXaWR0aCIsImNsaWNrIiwibGF6eVNjcm9sbCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJvZmZzZXQiLCJvZmZzZXRUb3AiLCJhbmltYXRlIiwic2Nyb2xsVG9wIiwic2VjdGlvbnMiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwic2VsZWN0T25DbGljayIsImNsaWNrZWRFbGVtZW50RGF0YUlkIiwiYWxsU2VsZWN0cyIsImlzTmFOIiwiaXRlbVNlbGVjdCIsInNlbGVjdERhdGEiLCJhdHRyaWJ1dGVzIiwiZGF0YSIsInZhbHVlIiwib3B0aW9ucyIsInNlbGVjdGVkSW5kZXgiLCJjb25zb2xlIiwibG9nIiwiY29tcGFyZSIsInByaW50UHJpY2UiLCJwcmludE1lc3NhZ2UiLCJjaGVja291dEJ1dHRvbiIsInBhcmFtZXRlciIsInNldEF0dHJpYnV0ZSIsImRpc2FibGVkIiwidmFyaWF0aW9ucyIsInZhcmlhdGlvbnNPYmplY3QiLCJkYXRhQnlJZCIsInZhcmlhdGlvbiIsInZhcmlhdGlvbnNXaXRob3V0UHJpY2UiLCJwcmljZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJhZGRUb0NhcnQiLCJjb250YWlucyIsImVsZW1lbnRIcmVmIiwidXNlck9yZGVyVGV4dCIsImlucHV0TmFtZSIsImlucHV0TGFzdE5hbWUiLCJpbnB1dEVtYWlsIiwiaW5wdXRQaG9uZSIsInRpdGxlIiwidGV4dENvbnRlbnQiLCJwcmljZVRhZyIsInJhbmRvbUlkIiwiTWF0aCIsInRydW5jIiwicmFuZG9tIiwicHJvZHVjdERhdGEiLCJwYXJhbV9wcmljZSIsImluZm9fZmlyc3RfbmFtZSIsImluZm9fbGFzdF9uYW1lIiwiaW5mb19waG9uZSIsImNyZWF0ZVBvc3QiLCJYTUxIdHRwUmVxdWVzdCIsIm9wZW4iLCJsb2NhdGlvbiIsIm9yaWdpbiIsInNldFJlcXVlc3RIZWFkZXIiLCJ3cEFwaVNldHRpbmdzIiwibm9uY2UiLCJzZW5kIiwib25yZWFkeXN0YXRlY2hhbmdlIiwicmVhZHlTdGF0ZSIsInN0YXR1cyIsInN0YXR1c1RleHQiLCJhbGVydCIsImNhcm91c2VsIiwidmFsaWRhdG9yIiwiQ29uc3RydWN0b3IiLCJWRVJTSU9OIiwiZm9jdXMiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7QUNuQkE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQXRCQTs7QUFFQSxLQUFNQSxJQUFJQyxTQUFTQyxhQUFULENBQXVCQyxJQUF2QixDQUE0QkYsUUFBNUIsQ0FBVjtBQUNBLEtBQU1HLEtBQUtILFNBQVNJLGdCQUFULENBQTBCRixJQUExQixDQUErQkYsUUFBL0IsQ0FBWDs7QUFFQUssTUFBS0MsU0FBTCxDQUFlQyxFQUFmLEdBQW9CQyxPQUFPRCxFQUFQLEdBQVksVUFBVUUsSUFBVixFQUFnQkMsRUFBaEIsRUFBb0I7QUFDaEQsVUFBS0MsZ0JBQUwsQ0FBc0JGLElBQXRCLEVBQTRCQyxFQUE1QjtBQUNILEVBRkQ7O0FBSUFFLFVBQVNOLFNBQVQsQ0FBbUJPLFNBQW5CLEdBQStCQyxNQUFNUixTQUFyQyxDLENBQWdEO0FBQ2hETSxVQUFTTixTQUFULENBQW1CTyxTQUFuQixHQUErQkUsU0FBU1QsU0FBeEM7O0FBRUFNLFVBQVNOLFNBQVQsQ0FBbUJDLEVBQW5CLEdBQXdCSyxTQUFTTixTQUFULENBQW1CSyxnQkFBbkIsR0FBc0MsVUFBVUYsSUFBVixFQUFnQkMsRUFBaEIsRUFBb0I7QUFDOUUsVUFBS00sT0FBTCxDQUFhLFVBQUNDLElBQUQsRUFBVTtBQUNuQkEsY0FBS1YsRUFBTCxDQUFRRSxJQUFSLEVBQWNDLEVBQWQ7QUFDSCxNQUZEO0FBR0gsRUFKRDtBQUtBOztBQVFBOztBQUVBUSxRQUFPLFlBQVk7QUFDZix5QkFBS25CLENBQUwsRUFBUUksRUFBUjtBQUNBO0FBQ0EsK0JBQVdKLENBQVg7QUFDQTtBQUNILEVBTEQsRTs7Ozs7Ozs7Ozs7O0FDM0JBOzttQkFFZSxVQUFDQSxDQUFELEVBQUlJLEVBQUosRUFBVzs7QUFFdEJLLFlBQU9ELEVBQVAsQ0FBVSxNQUFWLEVBQWtCLFlBQVk7QUFDMUJSLFdBQUUsZUFBRixFQUFtQm9CLEtBQW5CLENBQXlCQyxPQUF6QixHQUFtQyxNQUFuQztBQUNBckIsV0FBRSxTQUFGLEVBQWFvQixLQUFiLENBQW1CQyxPQUFuQixHQUE2QixNQUE3QjtBQUNILE1BSEQ7O0FBS0EsY0FBU0MsZUFBVCxHQUEyQjtBQUN2QnRCLFdBQUUsaUJBQUYsRUFBcUJvQixLQUFyQixDQUEyQkcsZUFBM0IsR0FBNkMsYUFBN0M7QUFDQXZCLFdBQUUsbUJBQUYsRUFBdUJ3QixTQUF2QixDQUFpQ0MsTUFBakMsQ0FBd0MsZ0JBQXhDO0FBQ0F6QixXQUFFLG1CQUFGLEVBQXVCd0IsU0FBdkIsQ0FBaUNDLE1BQWpDLENBQXdDLGtCQUF4QztBQUNBLGFBQUlDLFdBQVd0QixHQUFHLGVBQUgsQ0FBZjtBQUNBLGNBQUssSUFBSXVCLElBQUksQ0FBYixFQUFnQkEsSUFBSUQsU0FBU0UsTUFBN0IsRUFBcUNELEdBQXJDLEVBQTBDO0FBQ3RDRCxzQkFBU0MsQ0FBVCxFQUFZSCxTQUFaLENBQXNCQyxNQUF0QixDQUE2QixPQUE3QjtBQUNIO0FBQ0o7O0FBRUQsY0FBU0ksYUFBVCxHQUF5QjtBQUNyQjdCLFdBQUUsaUJBQUYsRUFBcUJvQixLQUFyQixDQUEyQkcsZUFBM0IsR0FBNkMsdUJBQTdDO0FBQ0F2QixXQUFFLGlCQUFGLEVBQXFCd0IsU0FBckIsQ0FBK0JNLEdBQS9CLENBQW1DLGtCQUFuQztBQUNBOUIsV0FBRSxtQkFBRixFQUF1QndCLFNBQXZCLENBQWlDTSxHQUFqQyxDQUFxQyxnQkFBckM7QUFDQSxhQUFJSixXQUFXdEIsR0FBRyxlQUFILENBQWY7QUFDQSxjQUFLLElBQUl1QixJQUFJLENBQWIsRUFBZ0JBLElBQUlELFNBQVNFLE1BQTdCLEVBQXFDRCxHQUFyQyxFQUEwQztBQUN0Q0Qsc0JBQVNDLENBQVQsRUFBWUgsU0FBWixDQUFzQk0sR0FBdEIsQ0FBMEIsT0FBMUI7QUFDSDtBQUNKOztBQUVELGNBQVNDLFdBQVQsR0FBdUI7QUFDbkJGO0FBQ0EsYUFBSXBCLE9BQU91QixXQUFQLEdBQXFCLEVBQXpCLEVBQTZCO0FBQ3pCVjtBQUNIO0FBQ0o7O0FBRURiLFlBQU93QixjQUFQLEdBQXdCLFVBQVVDLE1BQVYsRUFBa0I7QUFDdENsQyxXQUFFLFlBQUYsRUFBZ0J3QixTQUFoQixDQUEwQk0sR0FBMUIsQ0FBOEIsU0FBOUI7QUFDQSxhQUFJMUIsR0FBRywyQkFBSCxFQUFnQ3dCLE1BQXBDLEVBQTRDO0FBQ3hDNUIsZUFBRSxZQUFGLEVBQWdCd0IsU0FBaEIsQ0FBMEJDLE1BQTFCLENBQWlDLFNBQWpDO0FBRUg7O0FBRUQsYUFBSVUsZ0JBQWdCRCxPQUFPRSxZQUFQLENBQW9CLFdBQXBCLENBQXBCO0FBQ0EsYUFBSUMsVUFBVXJDLEVBQUUsY0FBY21DLGFBQWhCLENBQWQ7QUFDQTtBQUNBO0FBQ0EsYUFBSUcsbUJBQW1CbEMsR0FBRyxtQkFBSCxDQUF2QjtBQUNBLGNBQUssSUFBSXVCLElBQUksQ0FBYixFQUFnQkEsSUFBSVcsaUJBQWlCVixNQUFyQyxFQUE2Q0QsR0FBN0MsRUFBa0Q7QUFDOUMsaUJBQUksRUFBRVcsaUJBQWlCWCxDQUFqQixFQUFvQlksRUFBcEIsS0FBMkJGLFFBQVFFLEVBQXJDLENBQUosRUFBOEM7QUFDMUNELGtDQUFpQlgsQ0FBakIsRUFBb0JILFNBQXBCLENBQThCQyxNQUE5QixDQUFxQyxTQUFyQztBQUNIO0FBQ0o7QUFDRFksaUJBQVFiLFNBQVIsQ0FBa0JnQixNQUFsQixDQUF5QixTQUF6QjtBQUNBLGFBQUlwQyxHQUFHLDJCQUFILEVBQWdDd0IsTUFBcEMsRUFBNEM7QUFDeEM1QixlQUFFLFlBQUYsRUFBZ0J3QixTQUFoQixDQUEwQk0sR0FBMUIsQ0FBOEIsU0FBOUI7QUFDSDtBQUNKLE1BckJEOztBQXVCQXJCLFlBQU9nQyxXQUFQLEdBQXFCLFVBQVVDLEVBQVYsRUFBYzs7QUFFL0IsYUFBSUMsU0FBU0QsR0FBR04sWUFBSCxDQUFnQixlQUFoQixDQUFiO0FBQ0EsYUFBSVEsaUJBQWlCNUMsRUFBRSxjQUFjMkMsTUFBZCxHQUF1QixlQUF6QixDQUFyQjtBQUNBLGFBQUlFLGNBQWM1QyxTQUFTNkMsY0FBVCxDQUF3QkgsU0FBUyxRQUFqQyxFQUEyQ1AsWUFBM0MsQ0FBd0QsWUFBeEQsQ0FBbEI7QUFDQSxhQUFJVyxVQUFVLEVBQWQ7QUFDQSxjQUFLLElBQUlwQixDQUFULElBQWNxQixVQUFkLEVBQTBCO0FBQ3RCRCx3QkFBVyxRQUFRcEIsQ0FBUixHQUFZLElBQVosR0FBbUJxQixXQUFXckIsQ0FBWCxDQUFuQixHQUFtQyxNQUE5QztBQUNIO0FBQ0RvQixvQkFBVyxlQUFlRixXQUExQjtBQUNBRCx3QkFBZUssU0FBZixHQUEyQkYsT0FBM0I7QUFDSCxNQVhEOztBQWFBdEMsWUFBT0QsRUFBUCxDQUFVLGtCQUFWLEVBQThCLFlBQVk7QUFDdEN1QjtBQUNBO0FBQ0F0QixnQkFBT0QsRUFBUCxDQUFVLFFBQVYsRUFBb0IsWUFBWTtBQUM1QnVCO0FBQ0gsVUFGRDs7QUFJQSxhQUFJdEIsT0FBT3lDLFVBQVAsR0FBb0IsR0FBeEIsRUFBNkI7O0FBRXpCO0FBQ0FsRCxlQUFFLGdCQUFGLEVBQW9CUSxFQUFwQixDQUF1QixPQUF2QixFQUFnQyxZQUFZO0FBQ3hDcUI7QUFDQTdCLG1CQUFFLFdBQUYsRUFBZXdCLFNBQWYsQ0FBeUJnQixNQUF6QixDQUFnQyxRQUFoQztBQUNILGNBSEQ7O0FBS0E7QUFDQXBDLGdCQUFHLDBCQUFILEVBQStCSSxFQUEvQixDQUFrQyxPQUFsQyxFQUEyQyxZQUFZO0FBQ25EUixtQkFBRSxnQkFBRixFQUFvQm1ELEtBQXBCO0FBQ0gsY0FGRDtBQUdIOztBQUVEO0FBQ0EvQyxZQUFHLGFBQUgsRUFBa0JJLEVBQWxCLENBQXFCLE9BQXJCLEVBQThCNEMsVUFBOUI7QUFDQWhELFlBQUcsUUFBSCxFQUFhSSxFQUFiLENBQWdCLE9BQWhCLEVBQXlCNEMsVUFBekI7O0FBRUEsa0JBQVNBLFVBQVQsR0FBc0I7QUFDbEJDLG1CQUFNQyxjQUFOO0FBQ0EsaUJBQUlmLEtBQUssS0FBS0gsWUFBTCxDQUFrQixNQUFsQixDQUFUO0FBQ0EsaUJBQUltQixTQUFTdkQsRUFBRXVDLEVBQUYsRUFBTWlCLFNBQW5CO0FBQ0E7QUFDQSxpQkFBSWpCLE9BQU8sU0FBWCxFQUFzQjtBQUNsQmdCLDJCQUFVLEVBQVY7QUFDSDs7QUFFRHBDLG9CQUFPLFlBQVAsRUFBcUJzQyxPQUFyQixDQUE2QjtBQUN6QkMsNEJBQVdIO0FBRGMsY0FBN0IsRUFFRyxHQUZIO0FBR0Esb0JBQU8sS0FBUDtBQUNIOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0F2RCxXQUFFLFlBQUYsRUFBZ0JRLEVBQWhCLENBQW1CLE9BQW5CLEVBQTRCLFlBQVk7QUFDcEMsaUJBQUltRCxXQUFXdkQsR0FBRyxtQkFBSCxDQUFmO0FBQ0Esa0JBQUssSUFBSXVCLElBQUksQ0FBYixFQUFnQkEsSUFBSWdDLFNBQVMvQixNQUE3QixFQUFxQ0QsR0FBckMsRUFBMEM7QUFDdENnQywwQkFBU2hDLENBQVQsRUFBWUgsU0FBWixDQUFzQkMsTUFBdEIsQ0FBNkIsU0FBN0I7QUFDSDtBQUNELGtCQUFLRCxTQUFMLENBQWVDLE1BQWYsQ0FBc0IsU0FBdEI7QUFDSCxVQU5EO0FBT0gsTUF4RUQ7QUF5RUgsRTs7Ozs7Ozs7Ozs7O0FDakpEOzs7Ozs7bUJBRWUsWUFBTTtBQUNqQiwyQkFBRSxnQkFBRixFQUFvQmpCLEVBQXBCLENBQXVCLE9BQXZCLEVBQWdDLFlBQVk7QUFDeEMsK0JBQUUsa0JBQUYsRUFBc0JvRCxRQUF0QixDQUErQixnQkFBL0I7QUFDQSwrQkFBRSxtQkFBRixFQUF1QkEsUUFBdkIsQ0FBZ0MsZ0JBQWhDO0FBQ0gsTUFIRDtBQUlBLDJCQUFFLG9CQUFGLEVBQXdCcEQsRUFBeEIsQ0FBMkIsT0FBM0IsRUFBb0MsWUFBWTtBQUM1QywrQkFBRSxtQkFBRixFQUF1QnFELFdBQXZCLENBQW1DLGdCQUFuQztBQUNBLCtCQUFFLGtCQUFGLEVBQXNCQSxXQUF0QixDQUFrQyxnQkFBbEM7QUFDSCxNQUhEO0FBSUgsRTs7Ozs7O0FDWEQseUI7Ozs7Ozs7Ozs7OztBQ0FBOzttQkFFZSxVQUFDN0QsQ0FBRCxFQUFPO0FBQ2xCUyxZQUFPdUMsVUFBUCxHQUFvQixFQUFwQjs7QUFFQXZDLFlBQU9xRCxhQUFQLEdBQXVCLFVBQVVwQixFQUFWLEVBQWM7O0FBRWpDLGFBQUlxQix1QkFBdUJyQixHQUFHTixZQUFILENBQWdCLE1BQWhCLENBQTNCO0FBQ0EsYUFBSTRCLGFBQWEvRCxTQUFTSSxnQkFBVCxDQUEwQixRQUExQixDQUFqQjs7QUFFQSxjQUFLLElBQUlzQixDQUFULElBQWNxQyxVQUFkLEVBQTBCOztBQUV0QixpQkFBSUMsTUFBTXRDLENBQU4sQ0FBSixFQUFjO0FBQ1Y7QUFDSDs7QUFFRCxpQkFBSXVDLGFBQWFGLFdBQVdyQyxDQUFYLENBQWpCO0FBQ0EsaUJBQUl3QyxhQUFhRCxXQUFXRSxVQUFYLENBQXNCQyxJQUF0QixDQUEyQkMsS0FBNUM7O0FBRUEsaUJBQUlILGVBQWVKLG9CQUFuQixFQUF5QztBQUNyQ2YsNEJBQVdrQixXQUFXeEQsSUFBdEIsSUFBOEJ3RCxXQUFXSyxPQUFYLENBQW1CTCxXQUFXTSxhQUE5QixFQUE2Q0YsS0FBM0U7QUFDSDtBQUNKOztBQUVERyxpQkFBUUMsR0FBUixDQUFZLHFCQUFaO0FBQ0FELGlCQUFRQyxHQUFSLENBQVkxQixVQUFaOztBQUVBMkIsaUJBQVEzQixVQUFSLEVBQW9CZSxvQkFBcEI7QUFDSCxNQXZCRDs7QUF5QkEsY0FBU1ksT0FBVCxDQUFpQjNCLFVBQWpCLEVBQTZCTCxNQUE3QixFQUFxQzs7QUFFakMsYUFBSWlDLGFBQWEzRSxTQUFTNkMsY0FBVCxDQUF3QkgsU0FBUyxRQUFqQyxDQUFqQjtBQUNBLGFBQUlrQyxlQUFlN0UsRUFBRSxjQUFjMkMsTUFBaEIsQ0FBbkI7QUFDQSxhQUFJbUMsaUJBQWlCOUUsRUFBRSxjQUFjMkMsTUFBZCxHQUF1Qiw0QkFBekIsQ0FBckI7O0FBRUEsY0FBSyxJQUFJb0MsU0FBVCxJQUFzQi9CLFVBQXRCLEVBQWtDO0FBQzlCLGlCQUFJQSxXQUFXK0IsU0FBWCxNQUEwQixFQUE5QixFQUFrQztBQUM5QkgsNEJBQVdJLFlBQVgsQ0FBd0IsWUFBeEIsRUFBc0MsRUFBdEM7QUFDQUosNEJBQVczQixTQUFYLEdBQXVCLFFBQXZCO0FBQ0F3Qix5QkFBUUMsR0FBUixDQUFZLGdCQUFnQkssU0FBNUI7QUFDQUYsOEJBQWE1QixTQUFiLEdBQXlCLGdCQUFnQjhCLFNBQXpDO0FBQ0FELGdDQUFlRyxRQUFmLEdBQTBCLElBQTFCO0FBQ0E7QUFDSDtBQUNKOztBQUVELGFBQUlDLGFBQWFDLGlCQUFpQkMsUUFBakIsQ0FBMEJ6QyxNQUExQixDQUFqQjs7QUFFQThCLGlCQUFRQyxHQUFSLENBQVksb0JBQVo7QUFDQUQsaUJBQVFDLEdBQVIsQ0FBWVEsVUFBWjs7QUFFQSxjQUFLLElBQUl2RCxDQUFULElBQWN1RCxVQUFkLEVBQTBCO0FBQ3RCLGlCQUFJRyxZQUFZSCxXQUFXdkQsQ0FBWCxDQUFoQjtBQUNBLGlCQUFJMkQseUJBQXlCLEVBQTdCOztBQUVBLGtCQUFLLElBQUlQLFVBQVQsSUFBc0JNLFNBQXRCLEVBQWlDO0FBQzdCQyx3Q0FBdUJQLFVBQXZCLElBQW9DTSxVQUFVTixVQUFWLENBQXBDO0FBQ0g7O0FBRUQsb0JBQU9PLHVCQUF1QkMsS0FBOUI7O0FBRUEsaUJBQUlDLEtBQUtDLFNBQUwsQ0FBZXpDLFVBQWYsTUFBK0J3QyxLQUFLQyxTQUFMLENBQWVILHNCQUFmLENBQW5DLEVBQTJFO0FBQ3ZFYix5QkFBUUMsR0FBUixDQUFZVyxVQUFVRSxLQUF0QjtBQUNBWCw0QkFBV0ksWUFBWCxDQUF3QixZQUF4QixFQUFzQ0ssVUFBVUUsS0FBaEQ7QUFDQVgsNEJBQVczQixTQUFYLEdBQXVCLDJCQUEyQm9DLFVBQVVFLEtBQXJDLEdBQTZDLFFBQXBFO0FBQ0FWLDhCQUFhNUIsU0FBYixHQUF5QixFQUF6QjtBQUNBNkIsZ0NBQWVHLFFBQWYsR0FBMEIsS0FBMUI7QUFDQTtBQUNILGNBUEQsTUFPTztBQUNITCw0QkFBV0ksWUFBWCxDQUF3QixZQUF4QixFQUFzQyxFQUF0QztBQUNBUCx5QkFBUUMsR0FBUixDQUFZLHdCQUFaO0FBQ0FFLDRCQUFXM0IsU0FBWCxHQUF1QixjQUF2QjtBQUNBNEIsOEJBQWE1QixTQUFiLEdBQXlCLHdCQUF6QjtBQUNBNkIsZ0NBQWVHLFFBQWYsR0FBMEIsSUFBMUI7QUFDSDtBQUNKO0FBQ0o7O0FBRUw7OztBQUdBO0FBQ0l4RSxZQUFPaUYsU0FBUCxHQUFtQixVQUFVaEQsRUFBVixFQUFjOztBQUU3QixhQUFJQSxHQUFHbEIsU0FBSCxDQUFhbUUsUUFBYixDQUFzQixVQUF0QixDQUFKLEVBQXVDO0FBQ25DO0FBQ0g7O0FBRUQsYUFBSTVCLHVCQUF1QnJCLEdBQUdOLFlBQUgsQ0FBZ0IsV0FBaEIsQ0FBM0I7QUFDQSxhQUFJd0QsY0FBY2xELEdBQUdOLFlBQUgsQ0FBZ0IsTUFBaEIsQ0FBbEI7QUFDQSxhQUFJeUQsZ0JBQWdCN0YsRUFBRSxjQUFjK0Qsb0JBQWQsR0FBcUMsY0FBdkMsQ0FBcEI7QUFDQSxhQUFJK0IsWUFBWTlGLEVBQUUsV0FBVytELG9CQUFYLEdBQWtDLDJCQUFwQyxDQUFoQjtBQUNBLGFBQUlnQyxnQkFBZ0IvRixFQUFFLFdBQVcrRCxvQkFBWCxHQUFrQywwQkFBcEMsQ0FBcEI7QUFDQSxhQUFJaUMsYUFBYWhHLEVBQUUsV0FBVytELG9CQUFYLEdBQWtDLHNCQUFwQyxDQUFqQjtBQUNBLGFBQUlrQyxhQUFhakcsRUFBRSxXQUFXK0Qsb0JBQVgsR0FBa0Msc0JBQXBDLENBQWpCOztBQUVBLGFBQUltQyxRQUFRakcsU0FBUzZDLGNBQVQsQ0FBd0JKLEdBQUdoQyxJQUEzQixFQUFpQ3lGLFdBQTdDOztBQUVBLGFBQUlDLFdBQVduRyxTQUFTNkMsY0FBVCxDQUF3QmlCLHVCQUF1QixRQUEvQyxDQUFmO0FBQ0EsYUFBSXdCLFFBQVFhLFNBQVNoRSxZQUFULENBQXNCLFlBQXRCLENBQVo7QUFDQSxhQUFJaUUsV0FBV0MsS0FBS0MsS0FBTCxDQUFZRCxLQUFLRSxNQUFMLEtBQWMsTUFBMUIsQ0FBZjtBQUNBLGFBQUlDLGNBQWM7QUFDZCxzQkFBU1AsUUFBUSxJQUFSLEdBQWVHLFFBQWYsR0FBMEIsR0FEckI7QUFFZCx3QkFBV2IsS0FBS0MsU0FBTCxDQUFlekMsVUFBZixJQUE2QixXQUE3QixHQUEyQ3VDLEtBQTNDLEdBQW1ELEdBRmhEO0FBR2QsdUJBQVU7QUFISSxVQUFsQjs7QUFNQSxjQUFLLElBQUk1RCxDQUFULElBQWNxQixVQUFkLEVBQTBCO0FBQ3RCeUQseUJBQVksV0FBVzlFLENBQXZCLElBQTRCcUIsV0FBV3JCLENBQVgsQ0FBNUI7QUFDSDs7QUFFRDhFLHFCQUFZLGFBQVosSUFBNkJsQixLQUE3Qjs7QUFFQWtCLHFCQUFZLGlCQUFaLElBQWlDWCxVQUFVeEIsS0FBM0M7QUFDQW1DLHFCQUFZLGdCQUFaLElBQWdDVixjQUFjekIsS0FBOUM7QUFDQW1DLHFCQUFZLFlBQVosSUFBNEJULFdBQVcxQixLQUF2QztBQUNBbUMscUJBQVksWUFBWixJQUE0QlIsV0FBVzNCLEtBQXZDOztBQUVBRyxpQkFBUUMsR0FBUixDQUFZK0IsV0FBWjs7QUFFQSxhQUFJMUQsVUFBVSxFQUFkOztBQUVBLGNBQUssSUFBSXBCLEVBQVQsSUFBY3FCLFVBQWQsRUFBMEI7QUFDdEJELHdCQUFXLFFBQVFwQixFQUFSLEdBQVksSUFBWixHQUFtQnFCLFdBQVdyQixFQUFYLENBQW5CLEdBQW1DLE1BQTlDO0FBQ0g7QUFDRG9CLG9CQUFXLGVBQWUwRCxZQUFZQyxXQUEzQixHQUF5QyxNQUFwRDtBQUNBM0Qsb0JBQVcsb0JBQW9CMEQsWUFBWUUsZUFBaEMsR0FBa0QsTUFBN0Q7QUFDQTVELG9CQUFXLG1CQUFtQjBELFlBQVlHLGNBQS9CLEdBQWdELE1BQTNEO0FBQ0E3RCxvQkFBVyxlQUFlMEQsWUFBWUksVUFBM0IsR0FBd0MsTUFBbkQ7O0FBRUF4RCxlQUFNQyxjQUFOOztBQUVBLGFBQUl3RCxhQUFhLElBQUlDLGNBQUosRUFBakI7QUFDQUQsb0JBQVdFLElBQVgsQ0FBZ0IsTUFBaEIsRUFBd0JDLFNBQVNDLE1BQVQsR0FBa0IsMkJBQTFDLEVBQXVFLElBQXZFO0FBQ0FKLG9CQUFXSyxnQkFBWCxDQUE0QixZQUE1QixFQUEwQ0MsY0FBY0MsS0FBeEQ7QUFDQTtBQUNBO0FBQ0FQLG9CQUFXSyxnQkFBWCxDQUE0QixjQUE1QixFQUE0QyxnQ0FBNUM7QUFDQUwsb0JBQVdRLElBQVgsQ0FBZ0I5QixLQUFLQyxTQUFMLENBQWVnQixXQUFmLENBQWhCO0FBQ0FLLG9CQUFXUyxrQkFBWCxHQUFnQyxZQUFZO0FBQ3hDLGlCQUFJLEtBQUtDLFVBQUwsS0FBb0IsQ0FBeEIsRUFBMkI7QUFDM0IvQyxxQkFBUUMsR0FBUixDQUFZLEtBQUs4QyxVQUFqQjtBQUNBL0MscUJBQVFDLEdBQVIsQ0FBWSxLQUFLK0MsTUFBakI7QUFDQSxpQkFBSSxLQUFLQSxNQUFMLEtBQWdCLEdBQXBCLEVBQXlCO0FBQ3JCaEQseUJBQVFDLEdBQVIsQ0FBWSxjQUFjLEtBQUsrQyxNQUFuQixHQUE0QixHQUE1QixHQUFrQyxLQUFLQyxVQUFuRDtBQUNBQyx1QkFBTSxjQUFjLEtBQUtGLE1BQW5CLEdBQTRCLEdBQTVCLEdBQWtDLEtBQUtDLFVBQTdDO0FBQ0E7QUFDSDs7QUFFRCxpQkFBSSxLQUFLRixVQUFMLEtBQW9CLENBQXhCLEVBQTJCO0FBQ3ZCLHFCQUFJLEtBQUtDLE1BQUwsS0FBZ0IsR0FBcEIsRUFBeUI7QUFDckIxRSxnQ0FBVyxTQUFTLEtBQUsyRSxVQUFkLEdBQTJCLHFCQUF0QztBQUNBdkcsNEJBQU95RSxXQUFQLEVBQW9CZ0MsUUFBcEIsQ0FBNkIsTUFBN0I7QUFDQS9CLG1DQUFjNUMsU0FBZCxHQUEwQkYsT0FBMUI7QUFDQTBCLDZCQUFRQyxHQUFSLENBQVksS0FBS2dELFVBQUwsR0FBa0IscUJBQTlCO0FBQ0FDLDJCQUFNLEtBQUtELFVBQUwsR0FBa0IscUJBQXhCO0FBQ0g7QUFDSjtBQUNKLFVBbkJEO0FBb0JILE1BN0VEO0FBOEVILEU7Ozs7Ozs7Ozs7OztBQ2pLRDs7Ozs7O21CQUVlLFlBQU07QUFDakJqRCxhQUFRQyxHQUFSLENBQVksNkJBQVosRUFBMkN2RCxPQUFPUixFQUFQLENBQVVrSCxTQUFWLENBQW9CQyxXQUFwQixDQUFnQ0MsT0FBM0U7QUFDQSwyQkFBRSxNQUFGLEVBQVVGLFNBQVYsQ0FBb0I7QUFDaEJHLGdCQUFPO0FBQ1A7QUFGZ0IsTUFBcEI7QUFJSCxFIiwiZmlsZSI6ImNvbW1vbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDAzY2Y4MDgwNTQzNmI1Mzc0MjExIiwiLy8gaW1wb3J0ICQgZnJvbSBcImpxdWVyeVwiO1xuXG5jb25zdCAkID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvci5iaW5kKGRvY3VtZW50KTtcbmNvbnN0ICQkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbC5iaW5kKGRvY3VtZW50KTtcblxuTm9kZS5wcm90b3R5cGUub24gPSB3aW5kb3cub24gPSBmdW5jdGlvbiAobmFtZSwgZm4pIHtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIobmFtZSwgZm4pO1xufTtcblxuTm9kZUxpc3QucHJvdG90eXBlLl9fcHJvdG9fXyA9IEFycmF5LnByb3RvdHlwZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuTm9kZUxpc3QucHJvdG90eXBlLl9fcHJvdG9fXyA9IERvY3VtZW50LnByb3RvdHlwZTtcblxuTm9kZUxpc3QucHJvdG90eXBlLm9uID0gTm9kZUxpc3QucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbiAobmFtZSwgZm4pIHtcbiAgICB0aGlzLmZvckVhY2goKGVsZW0pID0+IHtcbiAgICAgICAgZWxlbS5vbihuYW1lLCBmbik7XG4gICAgfSk7XG59O1xuLy9leHBvcnQgeyQsICQkfTtcblxuaW1wb3J0IG1haW4gZnJvbSBcIi4vbW9kdWxlcy9tYWluXCI7XG5pbXBvcnQgcG9wdXAgZnJvbSBcIi4vbW9kdWxlcy9wb3B1cFwiO1xuaW1wb3J0IHZhcmlhdGlvbnMgZnJvbSBcIi4vbW9kdWxlcy92YXJpYXRpb25zXCI7XG5pbXBvcnQgdmFsaWRhdGlvbiBmcm9tIFwiLi9tb2R1bGVzL3ZhbGlkYXRpb25cIjtcblxuXG4vLyBpbXBvcnQgXCIuL3BsdWdpbnMvaW5maW5pdGUtc2Nyb2xsXCI7XG5cbmpRdWVyeShmdW5jdGlvbiAoKSB7XG4gICAgbWFpbigkLCAkJCk7XG4gICAgcG9wdXAoKTtcbiAgICB2YXJpYXRpb25zKCQpO1xuICAgIHZhbGlkYXRpb24oKTtcbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9zcmMvamF2YXNjcmlwdHMvY29tbW9uLmpzIiwiLy8gaW1wb3J0ICQgZnJvbSBcImpxdWVyeVwiO1xuXG5leHBvcnQgZGVmYXVsdCAoJCwgJCQpID0+IHtcblxuICAgIHdpbmRvdy5vbignbG9hZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnLmxvYWRlcl9pbm5lcicpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgJCgnLmxvYWRlcicpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIG5hdmJhclRvRGVmYXVsdCgpIHtcbiAgICAgICAgJCgnLm5hdmJhci1kZWZhdWx0Jykuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3RyYW5zcGFyZW50JztcbiAgICAgICAgJCgnLm5hdmJhci1icmFuZCBpbWcnKS5jbGFzc0xpc3QucmVtb3ZlKCdpbWdfcmVzcG9uc2l2ZScpO1xuICAgICAgICAkKCcubmF2YmFyLWZpeGVkLXRvcCcpLmNsYXNzTGlzdC5yZW1vdmUoJ3RvcC1uYXYtY29sbGFwc2UnKTtcbiAgICAgICAgbGV0IG1lbnVJdGVtID0gJCQoJy5uYXZiYXItbmF2IGEnKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtZW51SXRlbS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbWVudUl0ZW1baV0uY2xhc3NMaXN0LnJlbW92ZSgnd2hpdGUnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG5hdmJhclRvRmxvYXQoKSB7XG4gICAgICAgICQoJy5uYXZiYXItZGVmYXVsdCcpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZ2JhKDQ4LCA0OCwgNDgsIDAuNSknO1xuICAgICAgICAkKCcubmF2YmFyLWRlZmF1bHQnKS5jbGFzc0xpc3QuYWRkKCd0b3AtbmF2LWNvbGxhcHNlJyk7XG4gICAgICAgICQoJy5uYXZiYXItYnJhbmQgaW1nJykuY2xhc3NMaXN0LmFkZCgnaW1nX3Jlc3BvbnNpdmUnKTtcbiAgICAgICAgbGV0IG1lbnVJdGVtID0gJCQoJy5uYXZiYXItbmF2IGEnKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtZW51SXRlbS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbWVudUl0ZW1baV0uY2xhc3NMaXN0LmFkZCgnd2hpdGUnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldE5hdlN0eWxlKCkge1xuICAgICAgICBuYXZiYXJUb0Zsb2F0KCk7XG4gICAgICAgIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPCA1MCkge1xuICAgICAgICAgICAgbmF2YmFyVG9EZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB3aW5kb3cudG9nZ2xlU2VjdGlvbnMgPSBmdW5jdGlvbiAoYnV0dG9uKSB7XG4gICAgICAgICQoJy5jbG9zZS1idG4nKS5jbGFzc0xpc3QuYWRkKCdzaG93aW5nJyk7XG4gICAgICAgIGlmICgkJCgnLmNvbGxhcHNlLXNlY3Rpb24uc2hvd2luZycpLmxlbmd0aCkge1xuICAgICAgICAgICAgJCgnLmNsb3NlLWJ0bicpLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3dpbmcnKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGRhdGFBdHRyaWJ1dGUgPSBidXR0b24uZ2V0QXR0cmlidXRlKCdkYXRhLWF0dHInKTtcbiAgICAgICAgbGV0IHNlY3Rpb24gPSAkKCcjc2VjdGlvbi0nICsgZGF0YUF0dHJpYnV0ZSk7XG4gICAgICAgIC8vIHNlY3Rpb24ub2Zmc2V0VG9wID0gMjA7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHNlY3Rpb24ub2Zmc2V0VG9wKTtcbiAgICAgICAgbGV0IGNvbGxhcHNlU2VjdGlvbnMgPSAkJCgnLmNvbGxhcHNlLXNlY3Rpb24nKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2xsYXBzZVNlY3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoIShjb2xsYXBzZVNlY3Rpb25zW2ldLmlkID09PSBzZWN0aW9uLmlkKSkge1xuICAgICAgICAgICAgICAgIGNvbGxhcHNlU2VjdGlvbnNbaV0uY2xhc3NMaXN0LnJlbW92ZSgnc2hvd2luZycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHNlY3Rpb24uY2xhc3NMaXN0LnRvZ2dsZSgnc2hvd2luZycpO1xuICAgICAgICBpZiAoJCQoJy5jb2xsYXBzZS1zZWN0aW9uLnNob3dpbmcnKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICQoJy5jbG9zZS1idG4nKS5jbGFzc0xpc3QuYWRkKCdzaG93aW5nJyk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgd2luZG93LmNoZWNrb3V0QnRuID0gZnVuY3Rpb24gKGVsKSB7XG5cbiAgICAgICAgbGV0IGRhdGFJRCA9IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1jaGVja291dCcpO1xuICAgICAgICBsZXQgdXNlckNob2ljZVRleHQgPSAkKCcjc2VjdGlvbi0nICsgZGF0YUlEICsgJyAudXNlci1jaG9pY2UnKTtcbiAgICAgICAgbGV0IGNob2ljZVByaWNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZGF0YUlEICsgJy1wcmljZScpLmdldEF0dHJpYnV0ZSgnZGF0YS1wcmljZScpO1xuICAgICAgICBsZXQgY29udGVudCA9ICcnO1xuICAgICAgICBmb3IgKGxldCBpIGluIHVzZXJDaG9pY2UpIHtcbiAgICAgICAgICAgIGNvbnRlbnQgKz0gXCI8cD5cIiArIGkgKyBcIjogXCIgKyB1c2VyQ2hvaWNlW2ldICsgXCI8L3A+XCI7XG4gICAgICAgIH1cbiAgICAgICAgY29udGVudCArPSBcIjxwPlByaWNlOiBcIiArIGNob2ljZVByaWNlO1xuICAgICAgICB1c2VyQ2hvaWNlVGV4dC5pbm5lckhUTUwgPSBjb250ZW50O1xuICAgIH07XG5cbiAgICB3aW5kb3cub24oJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNldE5hdlN0eWxlKCk7XG4gICAgICAgIC8vTmF2YmFyIHN0eWxlIHN3aXRjaGVyXG4gICAgICAgIHdpbmRvdy5vbignc2Nyb2xsJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc2V0TmF2U3R5bGUoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHdpbmRvdy5vdXRlcldpZHRoIDwgNzY4KSB7XG5cbiAgICAgICAgICAgIC8vU0FORFdJQ0ggQlVUVE9OXG4gICAgICAgICAgICAkKCcubmF2YmFyLXRvZ2dsZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBuYXZiYXJUb0Zsb2F0KCk7XG4gICAgICAgICAgICAgICAgJCgnLnNhbmR3aWNoJykuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy9ISURFIE1FTlUgQ0xJQ0tJTkcgTElcbiAgICAgICAgICAgICQkKCcubmF2YmFyLWNvbGxhcHNlIHVsIGxpIGEnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgJCgnLm5hdmJhci10b2dnbGUnKS5jbGljaygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvL0xBWlkgQU5JTUFUSU5HIEZPUiBCVVRUT05TIEFORCBNRU5VIElURU1TXG4gICAgICAgICQkKCcuc2Nyb2xsX2J0bicpLm9uKCdjbGljaycsIGxhenlTY3JvbGwpO1xuICAgICAgICAkJCgnLm5hdiBhJykub24oJ2NsaWNrJywgbGF6eVNjcm9sbCk7XG5cbiAgICAgICAgZnVuY3Rpb24gbGF6eVNjcm9sbCgpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBsZXQgaWQgPSB0aGlzLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuICAgICAgICAgICAgbGV0IG9mZnNldCA9ICQoaWQpLm9mZnNldFRvcDtcbiAgICAgICAgICAgIC8vZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2h0bWwnKVswXS5hbmltYXRlKHtcbiAgICAgICAgICAgIGlmIChpZCA9PT0gXCIjY2hvb3NlXCIpIHtcbiAgICAgICAgICAgICAgICBvZmZzZXQgLT0gNTA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGpRdWVyeSgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgIHNjcm9sbFRvcDogb2Zmc2V0XG4gICAgICAgICAgICB9LCA3MDApO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZnVuY3Rpb24gbGF6eVNjcm9sbCgpIHtcbiAgICAgICAgLy8gICAgICAgICBsZXQgaWQgPSB0aGlzLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuICAgICAgICAvLyAgICAgICAgIGxldCBvZmZzZXQgPSAkKGlkKS5vZmZzZXRUb3A7XG4gICAgICAgIC8vICAgICBpZiAodGhpcy5oYXNoICE9PSBcIlwiKSB7XG4gICAgICAgIC8vICAgICAgICAgLy8gUHJldmVudCBkZWZhdWx0IGFuY2hvciBjbGljayBiZWhhdmlvclxuICAgICAgICAvLyAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIC8vXG4gICAgICAgIC8vICAgICAgICAgLy8gU3RvcmUgaGFzaFxuICAgICAgICAvLyAgICAgICAgIHZhciBoYXNoID0gdGhpcy5oYXNoO1xuICAgICAgICAvL1xuICAgICAgICAvLyAgICAgICAgIC8vIFVzaW5nIGpRdWVyeSdzIGFuaW1hdGUoKSBtZXRob2QgdG8gYWRkIHNtb290aCBwYWdlIHNjcm9sbFxuICAgICAgICAvLyAgICAgICAgIC8vIFRoZSBvcHRpb25hbCBudW1iZXIgKDgwMCkgc3BlY2lmaWVzIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGl0IHRha2VzIHRvIHNjcm9sbCB0byB0aGUgc3BlY2lmaWVkIGFyZWFcbiAgICAgICAgLy8gICAgICAgICBqUXVlcnkoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcbiAgICAgICAgLy8gICAgICAgICAgICAgc2Nyb2xsVG9wOiBvZmZzZXRcbiAgICAgICAgLy8gICAgICAgICB9LCAzMDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gICAgICAgICAgICAgLy8gQWRkIGhhc2ggKCMpIHRvIFVSTCB3aGVuIGRvbmUgc2Nyb2xsaW5nIChkZWZhdWx0IGNsaWNrIGJlaGF2aW9yKVxuICAgICAgICAvLyAgICAgICAgICAgICAvL3dpbmRvdy5sb2NhdGlvbi5oYXNoID0gaGFzaDtcbiAgICAgICAgLy8gICAgICAgICB9KTtcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfVxuXG4gICAgICAgIC8vIE1ha2Ugc3VyZSB0aGlzLmhhc2ggaGFzIGEgdmFsdWUgYmVmb3JlIG92ZXJyaWRpbmcgZGVmYXVsdCBiZWhhdmlvclxuXG5cbiAgICAgICAgJCgnLmNsb3NlLWJ0bicpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGxldCBzZWN0aW9ucyA9ICQkKCcuY29sbGFwc2Utc2VjdGlvbicpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHNlY3Rpb25zW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3dpbmcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY2xhc3NMaXN0LnJlbW92ZSgnc2hvd2luZycpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvc3JjL2phdmFzY3JpcHRzL21vZHVsZXMvbWFpbi5qcyIsImltcG9ydCAkIGZyb20gXCJqcXVlcnlcIjtcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICAgICQoJyNuZXh0LXBlcnNvbmFsJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCcjanMtcHJvZHVjdC1pbmZvJykuYWRkQ2xhc3MoJ3NsaWRlLW91dC1sZWZ0Jyk7XG4gICAgICAgICQoJyNqcy1wZXJzb25hbC1pbmZvJykuYWRkQ2xhc3MoJ3NsaWRlLWluLXJpZ2h0Jyk7XG4gICAgfSk7XG4gICAgJCgnI3ByZXYtcHJvZHVjdC1pbmZvJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCcjanMtcGVyc29uYWwtaW5mbycpLnJlbW92ZUNsYXNzKCdzbGlkZS1pbi1yaWdodCcpO1xuICAgICAgICAkKCcjanMtcHJvZHVjdC1pbmZvJykucmVtb3ZlQ2xhc3MoJ3NsaWRlLW91dC1sZWZ0Jyk7XG4gICAgfSk7XG59O1xuXG5cblxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvc3JjL2phdmFzY3JpcHRzL21vZHVsZXMvcG9wdXAuanMiLCJtb2R1bGUuZXhwb3J0cyA9IGpRdWVyeTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImpRdWVyeVwiXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGltcG9ydCAkIGZyb20gXCJqcXVlcnlcIjtcblxuZXhwb3J0IGRlZmF1bHQgKCQpID0+IHtcbiAgICB3aW5kb3cudXNlckNob2ljZSA9IHt9O1xuXG4gICAgd2luZG93LnNlbGVjdE9uQ2xpY2sgPSBmdW5jdGlvbiAoZWwpIHtcblxuICAgICAgICBsZXQgY2xpY2tlZEVsZW1lbnREYXRhSWQgPSBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEnKTtcbiAgICAgICAgbGV0IGFsbFNlbGVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YV0nKTtcblxuICAgICAgICBmb3IgKGxldCBpIGluIGFsbFNlbGVjdHMpIHtcblxuICAgICAgICAgICAgaWYgKGlzTmFOKGkpKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBpdGVtU2VsZWN0ID0gYWxsU2VsZWN0c1tpXTtcbiAgICAgICAgICAgIGxldCBzZWxlY3REYXRhID0gaXRlbVNlbGVjdC5hdHRyaWJ1dGVzLmRhdGEudmFsdWU7XG5cbiAgICAgICAgICAgIGlmIChzZWxlY3REYXRhID09PSBjbGlja2VkRWxlbWVudERhdGFJZCkge1xuICAgICAgICAgICAgICAgIHVzZXJDaG9pY2VbaXRlbVNlbGVjdC5uYW1lXSA9IGl0ZW1TZWxlY3Qub3B0aW9uc1tpdGVtU2VsZWN0LnNlbGVjdGVkSW5kZXhdLnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc29sZS5sb2coJ1RoaXMgaXMgdXNlciBjaG9pY2UnKTtcbiAgICAgICAgY29uc29sZS5sb2codXNlckNob2ljZSk7XG5cbiAgICAgICAgY29tcGFyZSh1c2VyQ2hvaWNlLCBjbGlja2VkRWxlbWVudERhdGFJZCk7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGNvbXBhcmUodXNlckNob2ljZSwgZGF0YUlEKSB7XG5cbiAgICAgICAgbGV0IHByaW50UHJpY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkYXRhSUQgKyAnLXByaWNlJyk7XG4gICAgICAgIGxldCBwcmludE1lc3NhZ2UgPSAkKCcjbWVzc2FnZS0nICsgZGF0YUlEKTtcbiAgICAgICAgbGV0IGNoZWNrb3V0QnV0dG9uID0gJChcIiNzZWN0aW9uLVwiICsgZGF0YUlEICsgXCIgYnV0dG9uW2RhdGEtc2xpZGU9J25leHQnXVwiKTtcblxuICAgICAgICBmb3IgKGxldCBwYXJhbWV0ZXIgaW4gdXNlckNob2ljZSkge1xuICAgICAgICAgICAgaWYgKHVzZXJDaG9pY2VbcGFyYW1ldGVyXSA9PT0gXCJcIikge1xuICAgICAgICAgICAgICAgIHByaW50UHJpY2Uuc2V0QXR0cmlidXRlKCdkYXRhLXByaWNlJywgJycpO1xuICAgICAgICAgICAgICAgIHByaW50UHJpY2UuaW5uZXJIVE1MID0gXCImbmJzcDtcIjtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnU2VsZWN0IHRoZSAnICsgcGFyYW1ldGVyKTtcbiAgICAgICAgICAgICAgICBwcmludE1lc3NhZ2UuaW5uZXJIVE1MID0gJ1NlbGVjdCB0aGUgJyArIHBhcmFtZXRlcjtcbiAgICAgICAgICAgICAgICBjaGVja291dEJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHZhcmlhdGlvbnMgPSB2YXJpYXRpb25zT2JqZWN0LmRhdGFCeUlkW2RhdGFJRF07XG5cbiAgICAgICAgY29uc29sZS5sb2coJ1RoaXMgaXMgVmFyaWF0aW9ucycpO1xuICAgICAgICBjb25zb2xlLmxvZyh2YXJpYXRpb25zKTtcblxuICAgICAgICBmb3IgKGxldCBpIGluIHZhcmlhdGlvbnMpIHtcbiAgICAgICAgICAgIGxldCB2YXJpYXRpb24gPSB2YXJpYXRpb25zW2ldO1xuICAgICAgICAgICAgbGV0IHZhcmlhdGlvbnNXaXRob3V0UHJpY2UgPSB7fTtcblxuICAgICAgICAgICAgZm9yIChsZXQgcGFyYW1ldGVyIGluIHZhcmlhdGlvbikge1xuICAgICAgICAgICAgICAgIHZhcmlhdGlvbnNXaXRob3V0UHJpY2VbcGFyYW1ldGVyXSA9IHZhcmlhdGlvbltwYXJhbWV0ZXJdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkZWxldGUgdmFyaWF0aW9uc1dpdGhvdXRQcmljZS5wcmljZTtcblxuICAgICAgICAgICAgaWYgKEpTT04uc3RyaW5naWZ5KHVzZXJDaG9pY2UpID09PSBKU09OLnN0cmluZ2lmeSh2YXJpYXRpb25zV2l0aG91dFByaWNlKSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHZhcmlhdGlvbi5wcmljZSk7XG4gICAgICAgICAgICAgICAgcHJpbnRQcmljZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtcHJpY2UnLCB2YXJpYXRpb24ucHJpY2UpO1xuICAgICAgICAgICAgICAgIHByaW50UHJpY2UuaW5uZXJIVE1MID0gJzxoMyBjbGFzcz1cInJlZC1wcmljZVwiPicgKyB2YXJpYXRpb24ucHJpY2UgKyAnJDwvaDM+JztcbiAgICAgICAgICAgICAgICBwcmludE1lc3NhZ2UuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgICAgICAgICBjaGVja291dEJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcHJpbnRQcmljZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtcHJpY2UnLCAnJyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1ZhcmlhdGlvbiBpcyBub3QgZm91bmQnKTtcbiAgICAgICAgICAgICAgICBwcmludFByaWNlLmlubmVySFRNTCA9ICc8aDM+LSAtPC9oMz4nO1xuICAgICAgICAgICAgICAgIHByaW50TWVzc2FnZS5pbm5lckhUTUwgPSAnVmFyaWF0aW9uIGlzIG5vdCBmb3VuZCc7XG4gICAgICAgICAgICAgICAgY2hlY2tvdXRCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4vL0NsaWNrIHRvIENoZWNrb3V0IC0gU2xpZGUgYnV0dG9uXG5cblxuLy9DcmVhdGUgbmV3IHBvc3RcbiAgICB3aW5kb3cuYWRkVG9DYXJ0ID0gZnVuY3Rpb24gKGVsKSB7XG5cbiAgICAgICAgaWYgKGVsLmNsYXNzTGlzdC5jb250YWlucygnZGlzYWJsZWQnKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGNsaWNrZWRFbGVtZW50RGF0YUlkID0gZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWF0dHInKTtcbiAgICAgICAgbGV0IGVsZW1lbnRIcmVmID0gZWwuZ2V0QXR0cmlidXRlKCdocmVmJyk7XG4gICAgICAgIGxldCB1c2VyT3JkZXJUZXh0ID0gJCgnI3NlY3Rpb24tJyArIGNsaWNrZWRFbGVtZW50RGF0YUlkICsgJyAudXNlci1vcmRlcicpO1xuICAgICAgICBsZXQgaW5wdXROYW1lID0gJCgnI2Zvcm0tJyArIGNsaWNrZWRFbGVtZW50RGF0YUlkICsgJyBpbnB1dFtuYW1lPVwiZmlyc3RfbmFtZVwiXScpO1xuICAgICAgICBsZXQgaW5wdXRMYXN0TmFtZSA9ICQoJyNmb3JtLScgKyBjbGlja2VkRWxlbWVudERhdGFJZCArICcgaW5wdXRbbmFtZT1cImxhc3RfbmFtZVwiXScpO1xuICAgICAgICBsZXQgaW5wdXRFbWFpbCA9ICQoJyNmb3JtLScgKyBjbGlja2VkRWxlbWVudERhdGFJZCArICcgaW5wdXRbbmFtZT1cImVtYWlsXCJdJyk7XG4gICAgICAgIGxldCBpbnB1dFBob25lID0gJCgnI2Zvcm0tJyArIGNsaWNrZWRFbGVtZW50RGF0YUlkICsgJyBpbnB1dFtuYW1lPVwicGhvbmVcIl0nKTtcblxuICAgICAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbC5uYW1lKS50ZXh0Q29udGVudDtcblxuICAgICAgICBsZXQgcHJpY2VUYWcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjbGlja2VkRWxlbWVudERhdGFJZCArICctcHJpY2UnKTtcbiAgICAgICAgbGV0IHByaWNlID0gcHJpY2VUYWcuZ2V0QXR0cmlidXRlKCdkYXRhLXByaWNlJyk7XG4gICAgICAgIGxldCByYW5kb21JZCA9IE1hdGgudHJ1bmMoKE1hdGgucmFuZG9tKCkqMTAwMDAwKSk7XG4gICAgICAgIGxldCBwcm9kdWN0RGF0YSA9IHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogdGl0bGUgKyAnIFsnICsgcmFuZG9tSWQgKyAnXScsXG4gICAgICAgICAgICBcImNvbnRlbnRcIjogSlNPTi5zdHJpbmdpZnkodXNlckNob2ljZSkgKyAne1wicHJpY2VcIjonICsgcHJpY2UgKyAnfScsXG4gICAgICAgICAgICBcInN0YXR1c1wiOiAncHVibGlzaCdcbiAgICAgICAgfTtcblxuICAgICAgICBmb3IgKGxldCBpIGluIHVzZXJDaG9pY2UpIHtcbiAgICAgICAgICAgIHByb2R1Y3REYXRhWydwYXJhbV8nICsgaV0gPSB1c2VyQ2hvaWNlW2ldO1xuICAgICAgICB9XG5cbiAgICAgICAgcHJvZHVjdERhdGFbJ3BhcmFtX3ByaWNlJ10gPSBwcmljZTtcblxuICAgICAgICBwcm9kdWN0RGF0YVsnaW5mb19maXJzdF9uYW1lJ10gPSBpbnB1dE5hbWUudmFsdWU7XG4gICAgICAgIHByb2R1Y3REYXRhWydpbmZvX2xhc3RfbmFtZSddID0gaW5wdXRMYXN0TmFtZS52YWx1ZTtcbiAgICAgICAgcHJvZHVjdERhdGFbJ2luZm9fZW1haWwnXSA9IGlucHV0RW1haWwudmFsdWU7XG4gICAgICAgIHByb2R1Y3REYXRhWydpbmZvX3Bob25lJ10gPSBpbnB1dFBob25lLnZhbHVlO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKHByb2R1Y3REYXRhKTtcblxuICAgICAgICBsZXQgY29udGVudCA9ICcnO1xuXG4gICAgICAgIGZvciAobGV0IGkgaW4gdXNlckNob2ljZSkge1xuICAgICAgICAgICAgY29udGVudCArPSBcIjxwPlwiICsgaSArIFwiOiBcIiArIHVzZXJDaG9pY2VbaV0gKyBcIjwvcD5cIjtcbiAgICAgICAgfVxuICAgICAgICBjb250ZW50ICs9IFwiPHA+UHJpY2U6IFwiICsgcHJvZHVjdERhdGEucGFyYW1fcHJpY2UgKyBcIjwvcD5cIjtcbiAgICAgICAgY29udGVudCArPSBcIjxwPkZpcnN0IG5hbWU6IFwiICsgcHJvZHVjdERhdGEuaW5mb19maXJzdF9uYW1lICsgXCI8L3A+XCI7XG4gICAgICAgIGNvbnRlbnQgKz0gXCI8cD5MYXN0IG5hbWU6IFwiICsgcHJvZHVjdERhdGEuaW5mb19sYXN0X25hbWUgKyBcIjwvcD5cIjtcbiAgICAgICAgY29udGVudCArPSBcIjxwPlBob25lOiBcIiArIHByb2R1Y3REYXRhLmluZm9fcGhvbmUgKyBcIjwvcD5cIjtcblxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGxldCBjcmVhdGVQb3N0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgIGNyZWF0ZVBvc3Qub3BlbignUE9TVCcsIGxvY2F0aW9uLm9yaWdpbiArICcvd3AtanNvbi93cC92Mi9zaG9wX29yZGVyJywgdHJ1ZSk7XG4gICAgICAgIGNyZWF0ZVBvc3Quc2V0UmVxdWVzdEhlYWRlcignWC1XUC1Ob25jZScsIHdwQXBpU2V0dGluZ3Mubm9uY2UpO1xuICAgICAgICAvLyB2YXIgQmFzZTY0PXtfa2V5U3RyOlwiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLz1cIixlbmNvZGU6ZnVuY3Rpb24oZSl7dmFyIHQ9XCJcIjt2YXIgbixyLGkscyxvLHUsYTt2YXIgZj0wO2U9QmFzZTY0Ll91dGY4X2VuY29kZShlKTt3aGlsZShmPGUubGVuZ3RoKXtuPWUuY2hhckNvZGVBdChmKyspO3I9ZS5jaGFyQ29kZUF0KGYrKyk7aT1lLmNoYXJDb2RlQXQoZisrKTtzPW4+PjI7bz0obiYzKTw8NHxyPj40O3U9KHImMTUpPDwyfGk+PjY7YT1pJjYzO2lmKGlzTmFOKHIpKXt1PWE9NjR9ZWxzZSBpZihpc05hTihpKSl7YT02NH10PXQrdGhpcy5fa2V5U3RyLmNoYXJBdChzKSt0aGlzLl9rZXlTdHIuY2hhckF0KG8pK3RoaXMuX2tleVN0ci5jaGFyQXQodSkrdGhpcy5fa2V5U3RyLmNoYXJBdChhKX1yZXR1cm4gdH0sZGVjb2RlOmZ1bmN0aW9uKGUpe3ZhciB0PVwiXCI7dmFyIG4scixpO3ZhciBzLG8sdSxhO3ZhciBmPTA7ZT1lLnJlcGxhY2UoL1teQS1aYS16MC05XFwrXFwvXFw9XS9nLFwiXCIpO3doaWxlKGY8ZS5sZW5ndGgpe3M9dGhpcy5fa2V5U3RyLmluZGV4T2YoZS5jaGFyQXQoZisrKSk7bz10aGlzLl9rZXlTdHIuaW5kZXhPZihlLmNoYXJBdChmKyspKTt1PXRoaXMuX2tleVN0ci5pbmRleE9mKGUuY2hhckF0KGYrKykpO2E9dGhpcy5fa2V5U3RyLmluZGV4T2YoZS5jaGFyQXQoZisrKSk7bj1zPDwyfG8+PjQ7cj0obyYxNSk8PDR8dT4+MjtpPSh1JjMpPDw2fGE7dD10K1N0cmluZy5mcm9tQ2hhckNvZGUobik7aWYodSE9NjQpe3Q9dCtTdHJpbmcuZnJvbUNoYXJDb2RlKHIpfWlmKGEhPTY0KXt0PXQrU3RyaW5nLmZyb21DaGFyQ29kZShpKX19dD1CYXNlNjQuX3V0ZjhfZGVjb2RlKHQpO3JldHVybiB0fSxfdXRmOF9lbmNvZGU6ZnVuY3Rpb24oZSl7ZT1lLnJlcGxhY2UoL1xcclxcbi9nLFwiXFxuXCIpO3ZhciB0PVwiXCI7Zm9yKHZhciBuPTA7bjxlLmxlbmd0aDtuKyspe3ZhciByPWUuY2hhckNvZGVBdChuKTtpZihyPDEyOCl7dCs9U3RyaW5nLmZyb21DaGFyQ29kZShyKX1lbHNlIGlmKHI+MTI3JiZyPDIwNDgpe3QrPVN0cmluZy5mcm9tQ2hhckNvZGUocj4+NnwxOTIpO3QrPVN0cmluZy5mcm9tQ2hhckNvZGUociY2M3wxMjgpfWVsc2V7dCs9U3RyaW5nLmZyb21DaGFyQ29kZShyPj4xMnwyMjQpO3QrPVN0cmluZy5mcm9tQ2hhckNvZGUocj4+NiY2M3wxMjgpO3QrPVN0cmluZy5mcm9tQ2hhckNvZGUociY2M3wxMjgpfX1yZXR1cm4gdH0sX3V0ZjhfZGVjb2RlOmZ1bmN0aW9uKGUpe3ZhciB0PVwiXCI7dmFyIG49MDt2YXIgcj1jMT1jMj0wO3doaWxlKG48ZS5sZW5ndGgpe3I9ZS5jaGFyQ29kZUF0KG4pO2lmKHI8MTI4KXt0Kz1TdHJpbmcuZnJvbUNoYXJDb2RlKHIpO24rK31lbHNlIGlmKHI+MTkxJiZyPDIyNCl7YzI9ZS5jaGFyQ29kZUF0KG4rMSk7dCs9U3RyaW5nLmZyb21DaGFyQ29kZSgociYzMSk8PDZ8YzImNjMpO24rPTJ9ZWxzZXtjMj1lLmNoYXJDb2RlQXQobisxKTtjMz1lLmNoYXJDb2RlQXQobisyKTt0Kz1TdHJpbmcuZnJvbUNoYXJDb2RlKChyJjE1KTw8MTJ8KGMyJjYzKTw8NnxjMyY2Myk7bis9M319cmV0dXJuIHR9fTtcbiAgICAgICAgLy9jcmVhdGVQb3N0LnNldFJlcXVlc3RIZWFkZXIoICdBdXRob3JpemF0aW9uJywgJ0Jhc2ljICcgKyBCYXNlNjQuZW5jb2RlKCAndGVzdDowMDAwJyApICk7XG4gICAgICAgIGNyZWF0ZVBvc3Quc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD1VVEYtOFwiKTtcbiAgICAgICAgY3JlYXRlUG9zdC5zZW5kKEpTT04uc3RyaW5naWZ5KHByb2R1Y3REYXRhKSk7XG4gICAgICAgIGNyZWF0ZVBvc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucmVhZHlTdGF0ZSAhPT0gNCkgcmV0dXJuO1xuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5yZWFkeVN0YXRlKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdHVzKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXR1cyAhPT0gMjAxKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ05vdCAyMDE6ICcgKyB0aGlzLnN0YXR1cyArICcgJyArIHRoaXMuc3RhdHVzVGV4dCk7XG4gICAgICAgICAgICAgICAgYWxlcnQoJ05vdCAyMDE6ICcgKyB0aGlzLnN0YXR1cyArICcgJyArIHRoaXMuc3RhdHVzVGV4dCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5yZWFkeVN0YXRlID09PSA0KSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdHVzID09PSAyMDEpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGVudCArPSAnPGJyPicgKyB0aGlzLnN0YXR1c1RleHQgKyAnIHN0YXR1czogcG9zdCBhZGRlZCc7XG4gICAgICAgICAgICAgICAgICAgIGpRdWVyeShlbGVtZW50SHJlZikuY2Fyb3VzZWwoJ25leHQnKTtcbiAgICAgICAgICAgICAgICAgICAgdXNlck9yZGVyVGV4dC5pbm5lckhUTUwgPSBjb250ZW50O1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXR1c1RleHQgKyAnIHN0YXR1czogcG9zdCBhZGRlZCcpO1xuICAgICAgICAgICAgICAgICAgICBhbGVydCh0aGlzLnN0YXR1c1RleHQgKyAnIHN0YXR1czogcG9zdCBhZGRlZCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9O1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvc3JjL2phdmFzY3JpcHRzL21vZHVsZXMvdmFyaWF0aW9ucy5qcyIsImltcG9ydCAkIGZyb20gXCJqcXVlcnlcIjtcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiYm9vc3RyYXAtdmFsaWRhdG9yIHZlcnNpb246XCIsIGpRdWVyeS5mbi52YWxpZGF0b3IuQ29uc3RydWN0b3IuVkVSU0lPTik7XG4gICAgJCgnZm9ybScpLnZhbGlkYXRvcih7XG4gICAgICAgIGZvY3VzOiBmYWxzZSxcbiAgICAgICAgLy8gZGVsYXk6IDMwMDBcbiAgICB9KTtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL3NyYy9qYXZhc2NyaXB0cy9tb2R1bGVzL3ZhbGlkYXRpb24uanMiXSwic291cmNlUm9vdCI6IiJ9