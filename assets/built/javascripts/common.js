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
	        event.preventDefault();
	
	        if (el.classList.contains('disabled')) {
	            return;
	        }
	
	        var clickedElementDataId = el.getAttribute('data-attr');
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
	                return;
	            }
	
	            if (this.readyState === 4) {
	                if (this.status === 201) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMTAzYTY3ZGJlMjk5ZGNlMTQ3ZmYiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NyYy9qYXZhc2NyaXB0cy9jb21tb24uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NyYy9qYXZhc2NyaXB0cy9tb2R1bGVzL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NyYy9qYXZhc2NyaXB0cy9tb2R1bGVzL3BvcHVwLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImpRdWVyeVwiIiwid2VicGFjazovLy8uL2Fzc2V0cy9zcmMvamF2YXNjcmlwdHMvbW9kdWxlcy92YXJpYXRpb25zLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zcmMvamF2YXNjcmlwdHMvbW9kdWxlcy92YWxpZGF0aW9uLmpzIl0sIm5hbWVzIjpbIiQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJiaW5kIiwiJCQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiTm9kZSIsInByb3RvdHlwZSIsIm9uIiwid2luZG93IiwibmFtZSIsImZuIiwiYWRkRXZlbnRMaXN0ZW5lciIsIk5vZGVMaXN0IiwiX19wcm90b19fIiwiQXJyYXkiLCJEb2N1bWVudCIsImZvckVhY2giLCJlbGVtIiwialF1ZXJ5Iiwic3R5bGUiLCJkaXNwbGF5IiwibmF2YmFyVG9EZWZhdWx0IiwiYmFja2dyb3VuZENvbG9yIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwibWVudUl0ZW0iLCJpIiwibGVuZ3RoIiwibmF2YmFyVG9GbG9hdCIsImFkZCIsInNldE5hdlN0eWxlIiwicGFnZVlPZmZzZXQiLCJ0b2dnbGVTZWN0aW9ucyIsImJ1dHRvbiIsImRhdGFBdHRyaWJ1dGUiLCJnZXRBdHRyaWJ1dGUiLCJzZWN0aW9uIiwiY29sbGFwc2VTZWN0aW9ucyIsImlkIiwidG9nZ2xlIiwiY2hlY2tvdXRCdG4iLCJlbCIsImRhdGFJRCIsInVzZXJDaG9pY2VUZXh0IiwiY2hvaWNlUHJpY2UiLCJnZXRFbGVtZW50QnlJZCIsImNvbnRlbnQiLCJ1c2VyQ2hvaWNlIiwiaW5uZXJIVE1MIiwib3V0ZXJXaWR0aCIsImNsaWNrIiwibGF6eVNjcm9sbCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJvZmZzZXQiLCJvZmZzZXRUb3AiLCJhbmltYXRlIiwic2Nyb2xsVG9wIiwic2VjdGlvbnMiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwic2VsZWN0T25DbGljayIsImNsaWNrZWRFbGVtZW50RGF0YUlkIiwiYWxsU2VsZWN0cyIsImlzTmFOIiwiaXRlbVNlbGVjdCIsInNlbGVjdERhdGEiLCJhdHRyaWJ1dGVzIiwiZGF0YSIsInZhbHVlIiwib3B0aW9ucyIsInNlbGVjdGVkSW5kZXgiLCJjb25zb2xlIiwibG9nIiwiY29tcGFyZSIsInByaW50UHJpY2UiLCJwcmludE1lc3NhZ2UiLCJjaGVja291dEJ1dHRvbiIsInBhcmFtZXRlciIsInNldEF0dHJpYnV0ZSIsImRpc2FibGVkIiwidmFyaWF0aW9ucyIsInZhcmlhdGlvbnNPYmplY3QiLCJkYXRhQnlJZCIsInZhcmlhdGlvbiIsInZhcmlhdGlvbnNXaXRob3V0UHJpY2UiLCJwcmljZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJhZGRUb0NhcnQiLCJjb250YWlucyIsImlucHV0TmFtZSIsImlucHV0TGFzdE5hbWUiLCJpbnB1dEVtYWlsIiwiaW5wdXRQaG9uZSIsInRpdGxlIiwidGV4dENvbnRlbnQiLCJwcmljZVRhZyIsInJhbmRvbUlkIiwiTWF0aCIsInRydW5jIiwicmFuZG9tIiwicHJvZHVjdERhdGEiLCJjcmVhdGVQb3N0IiwiWE1MSHR0cFJlcXVlc3QiLCJvcGVuIiwibG9jYXRpb24iLCJvcmlnaW4iLCJzZXRSZXF1ZXN0SGVhZGVyIiwid3BBcGlTZXR0aW5ncyIsIm5vbmNlIiwic2VuZCIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsInJlYWR5U3RhdGUiLCJzdGF0dXMiLCJzdGF0dXNUZXh0IiwiYWxlcnQiLCJ2YWxpZGF0b3IiLCJDb25zdHJ1Y3RvciIsIlZFUlNJT04iLCJmb2N1cyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7OztBQ25CQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBdEJBOztBQUVBLEtBQU1BLElBQUlDLFNBQVNDLGFBQVQsQ0FBdUJDLElBQXZCLENBQTRCRixRQUE1QixDQUFWO0FBQ0EsS0FBTUcsS0FBS0gsU0FBU0ksZ0JBQVQsQ0FBMEJGLElBQTFCLENBQStCRixRQUEvQixDQUFYOztBQUVBSyxNQUFLQyxTQUFMLENBQWVDLEVBQWYsR0FBb0JDLE9BQU9ELEVBQVAsR0FBWSxVQUFVRSxJQUFWLEVBQWdCQyxFQUFoQixFQUFvQjtBQUNoRCxVQUFLQyxnQkFBTCxDQUFzQkYsSUFBdEIsRUFBNEJDLEVBQTVCO0FBQ0gsRUFGRDs7QUFJQUUsVUFBU04sU0FBVCxDQUFtQk8sU0FBbkIsR0FBK0JDLE1BQU1SLFNBQXJDLEMsQ0FBZ0Q7QUFDaERNLFVBQVNOLFNBQVQsQ0FBbUJPLFNBQW5CLEdBQStCRSxTQUFTVCxTQUF4Qzs7QUFFQU0sVUFBU04sU0FBVCxDQUFtQkMsRUFBbkIsR0FBd0JLLFNBQVNOLFNBQVQsQ0FBbUJLLGdCQUFuQixHQUFzQyxVQUFVRixJQUFWLEVBQWdCQyxFQUFoQixFQUFvQjtBQUM5RSxVQUFLTSxPQUFMLENBQWEsVUFBQ0MsSUFBRCxFQUFVO0FBQ25CQSxjQUFLVixFQUFMLENBQVFFLElBQVIsRUFBY0MsRUFBZDtBQUNILE1BRkQ7QUFHSCxFQUpEO0FBS0E7O0FBUUE7O0FBRUFRLFFBQU8sWUFBWTtBQUNmLHlCQUFLbkIsQ0FBTCxFQUFRSSxFQUFSO0FBQ0E7QUFDQSwrQkFBV0osQ0FBWDtBQUNBO0FBQ0gsRUFMRCxFOzs7Ozs7Ozs7Ozs7QUMzQkE7O21CQUVlLFVBQUNBLENBQUQsRUFBSUksRUFBSixFQUFXOztBQUV0QkssWUFBT0QsRUFBUCxDQUFVLE1BQVYsRUFBa0IsWUFBWTtBQUMxQlIsV0FBRSxlQUFGLEVBQW1Cb0IsS0FBbkIsQ0FBeUJDLE9BQXpCLEdBQW1DLE1BQW5DO0FBQ0FyQixXQUFFLFNBQUYsRUFBYW9CLEtBQWIsQ0FBbUJDLE9BQW5CLEdBQTZCLE1BQTdCO0FBQ0gsTUFIRDs7QUFLQSxjQUFTQyxlQUFULEdBQTJCO0FBQ3ZCdEIsV0FBRSxpQkFBRixFQUFxQm9CLEtBQXJCLENBQTJCRyxlQUEzQixHQUE2QyxhQUE3QztBQUNBdkIsV0FBRSxtQkFBRixFQUF1QndCLFNBQXZCLENBQWlDQyxNQUFqQyxDQUF3QyxnQkFBeEM7QUFDQXpCLFdBQUUsbUJBQUYsRUFBdUJ3QixTQUF2QixDQUFpQ0MsTUFBakMsQ0FBd0Msa0JBQXhDO0FBQ0EsYUFBSUMsV0FBV3RCLEdBQUcsZUFBSCxDQUFmO0FBQ0EsY0FBSyxJQUFJdUIsSUFBSSxDQUFiLEVBQWdCQSxJQUFJRCxTQUFTRSxNQUE3QixFQUFxQ0QsR0FBckMsRUFBMEM7QUFDdENELHNCQUFTQyxDQUFULEVBQVlILFNBQVosQ0FBc0JDLE1BQXRCLENBQTZCLE9BQTdCO0FBQ0g7QUFDSjs7QUFFRCxjQUFTSSxhQUFULEdBQXlCO0FBQ3JCN0IsV0FBRSxpQkFBRixFQUFxQm9CLEtBQXJCLENBQTJCRyxlQUEzQixHQUE2Qyx1QkFBN0M7QUFDQXZCLFdBQUUsaUJBQUYsRUFBcUJ3QixTQUFyQixDQUErQk0sR0FBL0IsQ0FBbUMsa0JBQW5DO0FBQ0E5QixXQUFFLG1CQUFGLEVBQXVCd0IsU0FBdkIsQ0FBaUNNLEdBQWpDLENBQXFDLGdCQUFyQztBQUNBLGFBQUlKLFdBQVd0QixHQUFHLGVBQUgsQ0FBZjtBQUNBLGNBQUssSUFBSXVCLElBQUksQ0FBYixFQUFnQkEsSUFBSUQsU0FBU0UsTUFBN0IsRUFBcUNELEdBQXJDLEVBQTBDO0FBQ3RDRCxzQkFBU0MsQ0FBVCxFQUFZSCxTQUFaLENBQXNCTSxHQUF0QixDQUEwQixPQUExQjtBQUNIO0FBQ0o7O0FBRUQsY0FBU0MsV0FBVCxHQUF1QjtBQUNuQkY7QUFDQSxhQUFJcEIsT0FBT3VCLFdBQVAsR0FBcUIsRUFBekIsRUFBNkI7QUFDekJWO0FBQ0g7QUFDSjs7QUFFRGIsWUFBT3dCLGNBQVAsR0FBd0IsVUFBVUMsTUFBVixFQUFrQjtBQUN0Q2xDLFdBQUUsWUFBRixFQUFnQndCLFNBQWhCLENBQTBCTSxHQUExQixDQUE4QixTQUE5QjtBQUNBLGFBQUkxQixHQUFHLDJCQUFILEVBQWdDd0IsTUFBcEMsRUFBNEM7QUFDeEM1QixlQUFFLFlBQUYsRUFBZ0J3QixTQUFoQixDQUEwQkMsTUFBMUIsQ0FBaUMsU0FBakM7QUFFSDs7QUFFRCxhQUFJVSxnQkFBZ0JELE9BQU9FLFlBQVAsQ0FBb0IsV0FBcEIsQ0FBcEI7QUFDQSxhQUFJQyxVQUFVckMsRUFBRSxjQUFjbUMsYUFBaEIsQ0FBZDtBQUNBO0FBQ0E7QUFDQSxhQUFJRyxtQkFBbUJsQyxHQUFHLG1CQUFILENBQXZCO0FBQ0EsY0FBSyxJQUFJdUIsSUFBSSxDQUFiLEVBQWdCQSxJQUFJVyxpQkFBaUJWLE1BQXJDLEVBQTZDRCxHQUE3QyxFQUFrRDtBQUM5QyxpQkFBSSxFQUFFVyxpQkFBaUJYLENBQWpCLEVBQW9CWSxFQUFwQixLQUEyQkYsUUFBUUUsRUFBckMsQ0FBSixFQUE4QztBQUMxQ0Qsa0NBQWlCWCxDQUFqQixFQUFvQkgsU0FBcEIsQ0FBOEJDLE1BQTlCLENBQXFDLFNBQXJDO0FBQ0g7QUFDSjtBQUNEWSxpQkFBUWIsU0FBUixDQUFrQmdCLE1BQWxCLENBQXlCLFNBQXpCO0FBQ0EsYUFBSXBDLEdBQUcsMkJBQUgsRUFBZ0N3QixNQUFwQyxFQUE0QztBQUN4QzVCLGVBQUUsWUFBRixFQUFnQndCLFNBQWhCLENBQTBCTSxHQUExQixDQUE4QixTQUE5QjtBQUNIO0FBQ0osTUFyQkQ7O0FBdUJBckIsWUFBT2dDLFdBQVAsR0FBcUIsVUFBVUMsRUFBVixFQUFjOztBQUUvQixhQUFJQyxTQUFTRCxHQUFHTixZQUFILENBQWdCLGVBQWhCLENBQWI7QUFDQSxhQUFJUSxpQkFBaUI1QyxFQUFFLGNBQWMyQyxNQUFkLEdBQXVCLGVBQXpCLENBQXJCO0FBQ0EsYUFBSUUsY0FBYzVDLFNBQVM2QyxjQUFULENBQXdCSCxTQUFTLFFBQWpDLEVBQTJDUCxZQUEzQyxDQUF3RCxZQUF4RCxDQUFsQjtBQUNBLGFBQUlXLFVBQVUsRUFBZDtBQUNBLGNBQUssSUFBSXBCLENBQVQsSUFBY3FCLFVBQWQsRUFBMEI7QUFDdEJELHdCQUFXLFFBQVFwQixDQUFSLEdBQVksSUFBWixHQUFtQnFCLFdBQVdyQixDQUFYLENBQW5CLEdBQW1DLE1BQTlDO0FBQ0g7QUFDRG9CLG9CQUFXLGVBQWVGLFdBQTFCO0FBQ0FELHdCQUFlSyxTQUFmLEdBQTJCRixPQUEzQjtBQUNILE1BWEQ7O0FBYUF0QyxZQUFPRCxFQUFQLENBQVUsa0JBQVYsRUFBOEIsWUFBWTtBQUN0Q3VCO0FBQ0E7QUFDQXRCLGdCQUFPRCxFQUFQLENBQVUsUUFBVixFQUFvQixZQUFZO0FBQzVCdUI7QUFDSCxVQUZEOztBQUlBLGFBQUl0QixPQUFPeUMsVUFBUCxHQUFvQixHQUF4QixFQUE2Qjs7QUFFekI7QUFDQWxELGVBQUUsZ0JBQUYsRUFBb0JRLEVBQXBCLENBQXVCLE9BQXZCLEVBQWdDLFlBQVk7QUFDeENxQjtBQUNBN0IsbUJBQUUsV0FBRixFQUFld0IsU0FBZixDQUF5QmdCLE1BQXpCLENBQWdDLFFBQWhDO0FBQ0gsY0FIRDs7QUFLQTtBQUNBcEMsZ0JBQUcsMEJBQUgsRUFBK0JJLEVBQS9CLENBQWtDLE9BQWxDLEVBQTJDLFlBQVk7QUFDbkRSLG1CQUFFLGdCQUFGLEVBQW9CbUQsS0FBcEI7QUFDSCxjQUZEO0FBR0g7O0FBRUQ7QUFDQS9DLFlBQUcsYUFBSCxFQUFrQkksRUFBbEIsQ0FBcUIsT0FBckIsRUFBOEI0QyxVQUE5QjtBQUNBaEQsWUFBRyxRQUFILEVBQWFJLEVBQWIsQ0FBZ0IsT0FBaEIsRUFBeUI0QyxVQUF6Qjs7QUFFQSxrQkFBU0EsVUFBVCxHQUFzQjtBQUNsQkMsbUJBQU1DLGNBQU47QUFDQSxpQkFBSWYsS0FBSyxLQUFLSCxZQUFMLENBQWtCLE1BQWxCLENBQVQ7QUFDQSxpQkFBSW1CLFNBQVN2RCxFQUFFdUMsRUFBRixFQUFNaUIsU0FBbkI7QUFDQTtBQUNBLGlCQUFJakIsT0FBTyxTQUFYLEVBQXNCO0FBQ2xCZ0IsMkJBQVUsRUFBVjtBQUNIOztBQUVEcEMsb0JBQU8sWUFBUCxFQUFxQnNDLE9BQXJCLENBQTZCO0FBQ3pCQyw0QkFBV0g7QUFEYyxjQUE3QixFQUVHLEdBRkg7QUFHQSxvQkFBTyxLQUFQO0FBQ0g7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQXZELFdBQUUsWUFBRixFQUFnQlEsRUFBaEIsQ0FBbUIsT0FBbkIsRUFBNEIsWUFBWTtBQUNwQyxpQkFBSW1ELFdBQVd2RCxHQUFHLG1CQUFILENBQWY7QUFDQSxrQkFBSyxJQUFJdUIsSUFBSSxDQUFiLEVBQWdCQSxJQUFJZ0MsU0FBUy9CLE1BQTdCLEVBQXFDRCxHQUFyQyxFQUEwQztBQUN0Q2dDLDBCQUFTaEMsQ0FBVCxFQUFZSCxTQUFaLENBQXNCQyxNQUF0QixDQUE2QixTQUE3QjtBQUNIO0FBQ0Qsa0JBQUtELFNBQUwsQ0FBZUMsTUFBZixDQUFzQixTQUF0QjtBQUNILFVBTkQ7QUFPSCxNQXhFRDtBQXlFSCxFOzs7Ozs7Ozs7Ozs7QUNqSkQ7Ozs7OzttQkFFZSxZQUFNO0FBQ2pCLDJCQUFFLGdCQUFGLEVBQW9CakIsRUFBcEIsQ0FBdUIsT0FBdkIsRUFBZ0MsWUFBWTtBQUN4QywrQkFBRSxrQkFBRixFQUFzQm9ELFFBQXRCLENBQStCLGdCQUEvQjtBQUNBLCtCQUFFLG1CQUFGLEVBQXVCQSxRQUF2QixDQUFnQyxnQkFBaEM7QUFDSCxNQUhEO0FBSUEsMkJBQUUsb0JBQUYsRUFBd0JwRCxFQUF4QixDQUEyQixPQUEzQixFQUFvQyxZQUFZO0FBQzVDLCtCQUFFLG1CQUFGLEVBQXVCcUQsV0FBdkIsQ0FBbUMsZ0JBQW5DO0FBQ0EsK0JBQUUsa0JBQUYsRUFBc0JBLFdBQXRCLENBQWtDLGdCQUFsQztBQUNILE1BSEQ7QUFJSCxFOzs7Ozs7QUNYRCx5Qjs7Ozs7Ozs7Ozs7O0FDQUE7O21CQUVlLFVBQUM3RCxDQUFELEVBQU87QUFDbEJTLFlBQU91QyxVQUFQLEdBQW9CLEVBQXBCOztBQUVBdkMsWUFBT3FELGFBQVAsR0FBdUIsVUFBVXBCLEVBQVYsRUFBYzs7QUFFakMsYUFBSXFCLHVCQUF1QnJCLEdBQUdOLFlBQUgsQ0FBZ0IsTUFBaEIsQ0FBM0I7QUFDQSxhQUFJNEIsYUFBYS9ELFNBQVNJLGdCQUFULENBQTBCLFFBQTFCLENBQWpCOztBQUVBLGNBQUssSUFBSXNCLENBQVQsSUFBY3FDLFVBQWQsRUFBMEI7O0FBRXRCLGlCQUFJQyxNQUFNdEMsQ0FBTixDQUFKLEVBQWM7QUFDVjtBQUNIOztBQUVELGlCQUFJdUMsYUFBYUYsV0FBV3JDLENBQVgsQ0FBakI7QUFDQSxpQkFBSXdDLGFBQWFELFdBQVdFLFVBQVgsQ0FBc0JDLElBQXRCLENBQTJCQyxLQUE1Qzs7QUFFQSxpQkFBSUgsZUFBZUosb0JBQW5CLEVBQXlDO0FBQ3JDZiw0QkFBV2tCLFdBQVd4RCxJQUF0QixJQUE4QndELFdBQVdLLE9BQVgsQ0FBbUJMLFdBQVdNLGFBQTlCLEVBQTZDRixLQUEzRTtBQUNIO0FBQ0o7O0FBRURHLGlCQUFRQyxHQUFSLENBQVkscUJBQVo7QUFDQUQsaUJBQVFDLEdBQVIsQ0FBWTFCLFVBQVo7O0FBRUEyQixpQkFBUTNCLFVBQVIsRUFBb0JlLG9CQUFwQjtBQUNILE1BdkJEOztBQXlCQSxjQUFTWSxPQUFULENBQWlCM0IsVUFBakIsRUFBNkJMLE1BQTdCLEVBQXFDOztBQUVqQyxhQUFJaUMsYUFBYTNFLFNBQVM2QyxjQUFULENBQXdCSCxTQUFTLFFBQWpDLENBQWpCO0FBQ0EsYUFBSWtDLGVBQWU3RSxFQUFFLGNBQWMyQyxNQUFoQixDQUFuQjtBQUNBLGFBQUltQyxpQkFBaUI5RSxFQUFFLGNBQWMyQyxNQUFkLEdBQXVCLDRCQUF6QixDQUFyQjs7QUFFQSxjQUFLLElBQUlvQyxTQUFULElBQXNCL0IsVUFBdEIsRUFBa0M7QUFDOUIsaUJBQUlBLFdBQVcrQixTQUFYLE1BQTBCLEVBQTlCLEVBQWtDO0FBQzlCSCw0QkFBV0ksWUFBWCxDQUF3QixZQUF4QixFQUFzQyxFQUF0QztBQUNBUCx5QkFBUUMsR0FBUixDQUFZLGdCQUFnQkssU0FBNUI7QUFDQUYsOEJBQWE1QixTQUFiLEdBQXlCLGdCQUFnQjhCLFNBQXpDO0FBQ0FELGdDQUFlRyxRQUFmLEdBQTBCLElBQTFCO0FBQ0E7QUFDSDtBQUNKOztBQUVELGFBQUlDLGFBQWFDLGlCQUFpQkMsUUFBakIsQ0FBMEJ6QyxNQUExQixDQUFqQjs7QUFFQThCLGlCQUFRQyxHQUFSLENBQVksb0JBQVo7QUFDQUQsaUJBQVFDLEdBQVIsQ0FBWVEsVUFBWjs7QUFFQSxjQUFLLElBQUl2RCxDQUFULElBQWN1RCxVQUFkLEVBQTBCO0FBQ3RCLGlCQUFJRyxZQUFZSCxXQUFXdkQsQ0FBWCxDQUFoQjtBQUNBLGlCQUFJMkQseUJBQXlCLEVBQTdCOztBQUVBLGtCQUFLLElBQUlQLFVBQVQsSUFBc0JNLFNBQXRCLEVBQWlDO0FBQzdCQyx3Q0FBdUJQLFVBQXZCLElBQW9DTSxVQUFVTixVQUFWLENBQXBDO0FBQ0g7O0FBRUQsb0JBQU9PLHVCQUF1QkMsS0FBOUI7O0FBRUEsaUJBQUlDLEtBQUtDLFNBQUwsQ0FBZXpDLFVBQWYsTUFBK0J3QyxLQUFLQyxTQUFMLENBQWVILHNCQUFmLENBQW5DLEVBQTJFO0FBQ3ZFYix5QkFBUUMsR0FBUixDQUFZVyxVQUFVRSxLQUF0QjtBQUNBWCw0QkFBV0ksWUFBWCxDQUF3QixZQUF4QixFQUFzQ0ssVUFBVUUsS0FBaEQ7QUFDQVgsNEJBQVczQixTQUFYLEdBQXVCLDJCQUEyQm9DLFVBQVVFLEtBQXJDLEdBQTZDLFFBQXBFO0FBQ0FWLDhCQUFhNUIsU0FBYixHQUF5QixFQUF6QjtBQUNBNkIsZ0NBQWVHLFFBQWYsR0FBMEIsS0FBMUI7QUFDQTtBQUNILGNBUEQsTUFPTztBQUNITCw0QkFBV0ksWUFBWCxDQUF3QixZQUF4QixFQUFzQyxFQUF0QztBQUNBUCx5QkFBUUMsR0FBUixDQUFZLHdCQUFaO0FBQ0FFLDRCQUFXM0IsU0FBWCxHQUF1QixjQUF2QjtBQUNBNEIsOEJBQWE1QixTQUFiLEdBQXlCLHdCQUF6QjtBQUNBNkIsZ0NBQWVHLFFBQWYsR0FBMEIsSUFBMUI7QUFDSDtBQUNKO0FBQ0o7O0FBRUw7OztBQUdBO0FBQ0l4RSxZQUFPaUYsU0FBUCxHQUFtQixVQUFVaEQsRUFBVixFQUFjO0FBQzdCVyxlQUFNQyxjQUFOOztBQUVBLGFBQUlaLEdBQUdsQixTQUFILENBQWFtRSxRQUFiLENBQXNCLFVBQXRCLENBQUosRUFBdUM7QUFDbkM7QUFDSDs7QUFFRCxhQUFJNUIsdUJBQXVCckIsR0FBR04sWUFBSCxDQUFnQixXQUFoQixDQUEzQjtBQUNBLGFBQUl3RCxZQUFZNUYsRUFBRSxXQUFXK0Qsb0JBQVgsR0FBa0MsMkJBQXBDLENBQWhCO0FBQ0EsYUFBSThCLGdCQUFnQjdGLEVBQUUsV0FBVytELG9CQUFYLEdBQWtDLDBCQUFwQyxDQUFwQjtBQUNBLGFBQUkrQixhQUFhOUYsRUFBRSxXQUFXK0Qsb0JBQVgsR0FBa0Msc0JBQXBDLENBQWpCO0FBQ0EsYUFBSWdDLGFBQWEvRixFQUFFLFdBQVcrRCxvQkFBWCxHQUFrQyxzQkFBcEMsQ0FBakI7O0FBRUEsYUFBSWlDLFFBQVEvRixTQUFTNkMsY0FBVCxDQUF3QkosR0FBR2hDLElBQTNCLEVBQWlDdUYsV0FBN0M7O0FBRUEsYUFBSUMsV0FBV2pHLFNBQVM2QyxjQUFULENBQXdCaUIsdUJBQXVCLFFBQS9DLENBQWY7QUFDQSxhQUFJd0IsUUFBUVcsU0FBUzlELFlBQVQsQ0FBc0IsWUFBdEIsQ0FBWjtBQUNBLGFBQUkrRCxXQUFXQyxLQUFLQyxLQUFMLENBQVlELEtBQUtFLE1BQUwsS0FBYyxNQUExQixDQUFmO0FBQ0EsYUFBSUMsY0FBYztBQUNkLHNCQUFTUCxRQUFRLElBQVIsR0FBZUcsUUFBZixHQUEwQixHQURyQjtBQUVkLHdCQUFXWCxLQUFLQyxTQUFMLENBQWV6QyxVQUFmLElBQTZCLFdBQTdCLEdBQTJDdUMsS0FBM0MsR0FBbUQsR0FGaEQ7QUFHZCx1QkFBVTtBQUhJLFVBQWxCOztBQU1BLGNBQUssSUFBSTVELENBQVQsSUFBY3FCLFVBQWQsRUFBMEI7QUFDdEJ1RCx5QkFBWSxXQUFXNUUsQ0FBdkIsSUFBNEJxQixXQUFXckIsQ0FBWCxDQUE1QjtBQUNIOztBQUVENEUscUJBQVksYUFBWixJQUE2QmhCLEtBQTdCOztBQUVBZ0IscUJBQVksaUJBQVosSUFBaUNYLFVBQVV0QixLQUEzQztBQUNBaUMscUJBQVksZ0JBQVosSUFBZ0NWLGNBQWN2QixLQUE5QztBQUNBaUMscUJBQVksWUFBWixJQUE0QlQsV0FBV3hCLEtBQXZDO0FBQ0FpQyxxQkFBWSxZQUFaLElBQTRCUixXQUFXekIsS0FBdkM7O0FBRUFHLGlCQUFRQyxHQUFSLENBQVk2QixXQUFaOztBQUVBLGFBQUlDLGFBQWEsSUFBSUMsY0FBSixFQUFqQjtBQUNBRCxvQkFBV0UsSUFBWCxDQUFnQixNQUFoQixFQUF3QkMsU0FBU0MsTUFBVCxHQUFrQiwyQkFBMUMsRUFBdUUsSUFBdkU7QUFDQUosb0JBQVdLLGdCQUFYLENBQTRCLFlBQTVCLEVBQTBDQyxjQUFjQyxLQUF4RDtBQUNBO0FBQ0E7QUFDQVAsb0JBQVdLLGdCQUFYLENBQTRCLGNBQTVCLEVBQTRDLGdDQUE1QztBQUNBTCxvQkFBV1EsSUFBWCxDQUFnQnhCLEtBQUtDLFNBQUwsQ0FBZWMsV0FBZixDQUFoQjtBQUNBQyxvQkFBV1Msa0JBQVgsR0FBZ0MsWUFBWTtBQUN4QyxpQkFBSSxLQUFLQyxVQUFMLEtBQW9CLENBQXhCLEVBQTJCO0FBQzNCekMscUJBQVFDLEdBQVIsQ0FBWSxLQUFLd0MsVUFBakI7QUFDQXpDLHFCQUFRQyxHQUFSLENBQVksS0FBS3lDLE1BQWpCO0FBQ0EsaUJBQUksS0FBS0EsTUFBTCxLQUFnQixHQUFwQixFQUF5QjtBQUNyQjFDLHlCQUFRQyxHQUFSLENBQVksY0FBYyxLQUFLeUMsTUFBbkIsR0FBNEIsR0FBNUIsR0FBa0MsS0FBS0MsVUFBbkQ7QUFDQTtBQUNIOztBQUVELGlCQUFJLEtBQUtGLFVBQUwsS0FBb0IsQ0FBeEIsRUFBMkI7QUFDdkIscUJBQUksS0FBS0MsTUFBTCxLQUFnQixHQUFwQixFQUF5QjtBQUNyQjFDLDZCQUFRQyxHQUFSLENBQVksS0FBSzBDLFVBQUwsR0FBa0IscUJBQTlCO0FBQ0FDLDJCQUFNLEtBQUtELFVBQUwsR0FBa0IscUJBQXhCO0FBQ0g7QUFDSjtBQUNKLFVBZkQ7QUFnQkgsTUE1REQ7QUE2REgsRTs7Ozs7Ozs7Ozs7O0FDL0lEOzs7Ozs7bUJBRWUsWUFBTTtBQUNqQjNDLGFBQVFDLEdBQVIsQ0FBWSw2QkFBWixFQUEyQ3ZELE9BQU9SLEVBQVAsQ0FBVTJHLFNBQVYsQ0FBb0JDLFdBQXBCLENBQWdDQyxPQUEzRTtBQUNBLDJCQUFFLE1BQUYsRUFBVUYsU0FBVixDQUFvQjtBQUNoQkcsZ0JBQU87QUFDUDtBQUZnQixNQUFwQjtBQUlILEUiLCJmaWxlIjoiY29tbW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMTAzYTY3ZGJlMjk5ZGNlMTQ3ZmYiLCIvLyBpbXBvcnQgJCBmcm9tIFwianF1ZXJ5XCI7XG5cbmNvbnN0ICQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yLmJpbmQoZG9jdW1lbnQpO1xuY29uc3QgJCQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsLmJpbmQoZG9jdW1lbnQpO1xuXG5Ob2RlLnByb3RvdHlwZS5vbiA9IHdpbmRvdy5vbiA9IGZ1bmN0aW9uIChuYW1lLCBmbikge1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihuYW1lLCBmbik7XG59O1xuXG5Ob2RlTGlzdC5wcm90b3R5cGUuX19wcm90b19fID0gQXJyYXkucHJvdG90eXBlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5Ob2RlTGlzdC5wcm90b3R5cGUuX19wcm90b19fID0gRG9jdW1lbnQucHJvdG90eXBlO1xuXG5Ob2RlTGlzdC5wcm90b3R5cGUub24gPSBOb2RlTGlzdC5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uIChuYW1lLCBmbikge1xuICAgIHRoaXMuZm9yRWFjaCgoZWxlbSkgPT4ge1xuICAgICAgICBlbGVtLm9uKG5hbWUsIGZuKTtcbiAgICB9KTtcbn07XG4vL2V4cG9ydCB7JCwgJCR9O1xuXG5pbXBvcnQgbWFpbiBmcm9tIFwiLi9tb2R1bGVzL21haW5cIjtcbmltcG9ydCBwb3B1cCBmcm9tIFwiLi9tb2R1bGVzL3BvcHVwXCI7XG5pbXBvcnQgdmFyaWF0aW9ucyBmcm9tIFwiLi9tb2R1bGVzL3ZhcmlhdGlvbnNcIjtcbmltcG9ydCB2YWxpZGF0aW9uIGZyb20gXCIuL21vZHVsZXMvdmFsaWRhdGlvblwiO1xuXG5cbi8vIGltcG9ydCBcIi4vcGx1Z2lucy9pbmZpbml0ZS1zY3JvbGxcIjtcblxualF1ZXJ5KGZ1bmN0aW9uICgpIHtcbiAgICBtYWluKCQsICQkKTtcbiAgICBwb3B1cCgpO1xuICAgIHZhcmlhdGlvbnMoJCk7XG4gICAgdmFsaWRhdGlvbigpO1xufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL3NyYy9qYXZhc2NyaXB0cy9jb21tb24uanMiLCIvLyBpbXBvcnQgJCBmcm9tIFwianF1ZXJ5XCI7XG5cbmV4cG9ydCBkZWZhdWx0ICgkLCAkJCkgPT4ge1xuXG4gICAgd2luZG93Lm9uKCdsb2FkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCcubG9hZGVyX2lubmVyJykuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAkKCcubG9hZGVyJykuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gbmF2YmFyVG9EZWZhdWx0KCkge1xuICAgICAgICAkKCcubmF2YmFyLWRlZmF1bHQnKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAndHJhbnNwYXJlbnQnO1xuICAgICAgICAkKCcubmF2YmFyLWJyYW5kIGltZycpLmNsYXNzTGlzdC5yZW1vdmUoJ2ltZ19yZXNwb25zaXZlJyk7XG4gICAgICAgICQoJy5uYXZiYXItZml4ZWQtdG9wJykuY2xhc3NMaXN0LnJlbW92ZSgndG9wLW5hdi1jb2xsYXBzZScpO1xuICAgICAgICBsZXQgbWVudUl0ZW0gPSAkJCgnLm5hdmJhci1uYXYgYScpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1lbnVJdGVtLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBtZW51SXRlbVtpXS5jbGFzc0xpc3QucmVtb3ZlKCd3aGl0ZScpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbmF2YmFyVG9GbG9hdCgpIHtcbiAgICAgICAgJCgnLm5hdmJhci1kZWZhdWx0Jykuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JnYmEoNDgsIDQ4LCA0OCwgMC41KSc7XG4gICAgICAgICQoJy5uYXZiYXItZGVmYXVsdCcpLmNsYXNzTGlzdC5hZGQoJ3RvcC1uYXYtY29sbGFwc2UnKTtcbiAgICAgICAgJCgnLm5hdmJhci1icmFuZCBpbWcnKS5jbGFzc0xpc3QuYWRkKCdpbWdfcmVzcG9uc2l2ZScpO1xuICAgICAgICBsZXQgbWVudUl0ZW0gPSAkJCgnLm5hdmJhci1uYXYgYScpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1lbnVJdGVtLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBtZW51SXRlbVtpXS5jbGFzc0xpc3QuYWRkKCd3aGl0ZScpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0TmF2U3R5bGUoKSB7XG4gICAgICAgIG5hdmJhclRvRmxvYXQoKTtcbiAgICAgICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA8IDUwKSB7XG4gICAgICAgICAgICBuYXZiYXJUb0RlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHdpbmRvdy50b2dnbGVTZWN0aW9ucyA9IGZ1bmN0aW9uIChidXR0b24pIHtcbiAgICAgICAgJCgnLmNsb3NlLWJ0bicpLmNsYXNzTGlzdC5hZGQoJ3Nob3dpbmcnKTtcbiAgICAgICAgaWYgKCQkKCcuY29sbGFwc2Utc2VjdGlvbi5zaG93aW5nJykubGVuZ3RoKSB7XG4gICAgICAgICAgICAkKCcuY2xvc2UtYnRuJykuY2xhc3NMaXN0LnJlbW92ZSgnc2hvd2luZycpO1xuXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgZGF0YUF0dHJpYnV0ZSA9IGJ1dHRvbi5nZXRBdHRyaWJ1dGUoJ2RhdGEtYXR0cicpO1xuICAgICAgICBsZXQgc2VjdGlvbiA9ICQoJyNzZWN0aW9uLScgKyBkYXRhQXR0cmlidXRlKTtcbiAgICAgICAgLy8gc2VjdGlvbi5vZmZzZXRUb3AgPSAyMDtcbiAgICAgICAgLy8gY29uc29sZS5sb2coc2VjdGlvbi5vZmZzZXRUb3ApO1xuICAgICAgICBsZXQgY29sbGFwc2VTZWN0aW9ucyA9ICQkKCcuY29sbGFwc2Utc2VjdGlvbicpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbGxhcHNlU2VjdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICghKGNvbGxhcHNlU2VjdGlvbnNbaV0uaWQgPT09IHNlY3Rpb24uaWQpKSB7XG4gICAgICAgICAgICAgICAgY29sbGFwc2VTZWN0aW9uc1tpXS5jbGFzc0xpc3QucmVtb3ZlKCdzaG93aW5nJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc2VjdGlvbi5jbGFzc0xpc3QudG9nZ2xlKCdzaG93aW5nJyk7XG4gICAgICAgIGlmICgkJCgnLmNvbGxhcHNlLXNlY3Rpb24uc2hvd2luZycpLmxlbmd0aCkge1xuICAgICAgICAgICAgJCgnLmNsb3NlLWJ0bicpLmNsYXNzTGlzdC5hZGQoJ3Nob3dpbmcnKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB3aW5kb3cuY2hlY2tvdXRCdG4gPSBmdW5jdGlvbiAoZWwpIHtcblxuICAgICAgICBsZXQgZGF0YUlEID0gZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWNoZWNrb3V0Jyk7XG4gICAgICAgIGxldCB1c2VyQ2hvaWNlVGV4dCA9ICQoJyNzZWN0aW9uLScgKyBkYXRhSUQgKyAnIC51c2VyLWNob2ljZScpO1xuICAgICAgICBsZXQgY2hvaWNlUHJpY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkYXRhSUQgKyAnLXByaWNlJykuZ2V0QXR0cmlidXRlKCdkYXRhLXByaWNlJyk7XG4gICAgICAgIGxldCBjb250ZW50ID0gJyc7XG4gICAgICAgIGZvciAobGV0IGkgaW4gdXNlckNob2ljZSkge1xuICAgICAgICAgICAgY29udGVudCArPSBcIjxwPlwiICsgaSArIFwiOiBcIiArIHVzZXJDaG9pY2VbaV0gKyBcIjwvcD5cIjtcbiAgICAgICAgfVxuICAgICAgICBjb250ZW50ICs9IFwiPHA+UHJpY2U6IFwiICsgY2hvaWNlUHJpY2U7XG4gICAgICAgIHVzZXJDaG9pY2VUZXh0LmlubmVySFRNTCA9IGNvbnRlbnQ7XG4gICAgfTtcblxuICAgIHdpbmRvdy5vbignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2V0TmF2U3R5bGUoKTtcbiAgICAgICAgLy9OYXZiYXIgc3R5bGUgc3dpdGNoZXJcbiAgICAgICAgd2luZG93Lm9uKCdzY3JvbGwnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzZXROYXZTdHlsZSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAod2luZG93Lm91dGVyV2lkdGggPCA3NjgpIHtcblxuICAgICAgICAgICAgLy9TQU5EV0lDSCBCVVRUT05cbiAgICAgICAgICAgICQoJy5uYXZiYXItdG9nZ2xlJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIG5hdmJhclRvRmxvYXQoKTtcbiAgICAgICAgICAgICAgICAkKCcuc2FuZHdpY2gnKS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvL0hJREUgTUVOVSBDTElDS0lORyBMSVxuICAgICAgICAgICAgJCQoJy5uYXZiYXItY29sbGFwc2UgdWwgbGkgYScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAkKCcubmF2YmFyLXRvZ2dsZScpLmNsaWNrKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vTEFaWSBBTklNQVRJTkcgRk9SIEJVVFRPTlMgQU5EIE1FTlUgSVRFTVNcbiAgICAgICAgJCQoJy5zY3JvbGxfYnRuJykub24oJ2NsaWNrJywgbGF6eVNjcm9sbCk7XG4gICAgICAgICQkKCcubmF2IGEnKS5vbignY2xpY2snLCBsYXp5U2Nyb2xsKTtcblxuICAgICAgICBmdW5jdGlvbiBsYXp5U2Nyb2xsKCkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGxldCBpZCA9IHRoaXMuZ2V0QXR0cmlidXRlKCdocmVmJyk7XG4gICAgICAgICAgICBsZXQgb2Zmc2V0ID0gJChpZCkub2Zmc2V0VG9wO1xuICAgICAgICAgICAgLy9kb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaHRtbCcpWzBdLmFuaW1hdGUoe1xuICAgICAgICAgICAgaWYgKGlkID09PSBcIiNjaG9vc2VcIikge1xuICAgICAgICAgICAgICAgIG9mZnNldCAtPSA1MDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgalF1ZXJ5KCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgc2Nyb2xsVG9wOiBvZmZzZXRcbiAgICAgICAgICAgIH0sIDcwMCk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBmdW5jdGlvbiBsYXp5U2Nyb2xsKCkge1xuICAgICAgICAvLyAgICAgICAgIGxldCBpZCA9IHRoaXMuZ2V0QXR0cmlidXRlKCdocmVmJyk7XG4gICAgICAgIC8vICAgICAgICAgbGV0IG9mZnNldCA9ICQoaWQpLm9mZnNldFRvcDtcbiAgICAgICAgLy8gICAgIGlmICh0aGlzLmhhc2ggIT09IFwiXCIpIHtcbiAgICAgICAgLy8gICAgICAgICAvLyBQcmV2ZW50IGRlZmF1bHQgYW5jaG9yIGNsaWNrIGJlaGF2aW9yXG4gICAgICAgIC8vICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gICAgICAgICAvLyBTdG9yZSBoYXNoXG4gICAgICAgIC8vICAgICAgICAgdmFyIGhhc2ggPSB0aGlzLmhhc2g7XG4gICAgICAgIC8vXG4gICAgICAgIC8vICAgICAgICAgLy8gVXNpbmcgalF1ZXJ5J3MgYW5pbWF0ZSgpIG1ldGhvZCB0byBhZGQgc21vb3RoIHBhZ2Ugc2Nyb2xsXG4gICAgICAgIC8vICAgICAgICAgLy8gVGhlIG9wdGlvbmFsIG51bWJlciAoODAwKSBzcGVjaWZpZXMgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaXQgdGFrZXMgdG8gc2Nyb2xsIHRvIHRoZSBzcGVjaWZpZWQgYXJlYVxuICAgICAgICAvLyAgICAgICAgIGpRdWVyeSgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xuICAgICAgICAvLyAgICAgICAgICAgICBzY3JvbGxUb3A6IG9mZnNldFxuICAgICAgICAvLyAgICAgICAgIH0sIDMwMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAvL1xuICAgICAgICAvLyAgICAgICAgICAgICAvLyBBZGQgaGFzaCAoIykgdG8gVVJMIHdoZW4gZG9uZSBzY3JvbGxpbmcgKGRlZmF1bHQgY2xpY2sgYmVoYXZpb3IpXG4gICAgICAgIC8vICAgICAgICAgICAgIC8vd2luZG93LmxvY2F0aW9uLmhhc2ggPSBoYXNoO1xuICAgICAgICAvLyAgICAgICAgIH0pO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9XG5cbiAgICAgICAgLy8gTWFrZSBzdXJlIHRoaXMuaGFzaCBoYXMgYSB2YWx1ZSBiZWZvcmUgb3ZlcnJpZGluZyBkZWZhdWx0IGJlaGF2aW9yXG5cblxuICAgICAgICAkKCcuY2xvc2UtYnRuJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbGV0IHNlY3Rpb25zID0gJCQoJy5jb2xsYXBzZS1zZWN0aW9uJyk7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlY3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgc2VjdGlvbnNbaV0uY2xhc3NMaXN0LnJlbW92ZSgnc2hvd2luZycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jbGFzc0xpc3QucmVtb3ZlKCdzaG93aW5nJyk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9zcmMvamF2YXNjcmlwdHMvbW9kdWxlcy9tYWluLmpzIiwiaW1wb3J0ICQgZnJvbSBcImpxdWVyeVwiO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gICAgJCgnI25leHQtcGVyc29uYWwnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoJyNqcy1wcm9kdWN0LWluZm8nKS5hZGRDbGFzcygnc2xpZGUtb3V0LWxlZnQnKTtcbiAgICAgICAgJCgnI2pzLXBlcnNvbmFsLWluZm8nKS5hZGRDbGFzcygnc2xpZGUtaW4tcmlnaHQnKTtcbiAgICB9KTtcbiAgICAkKCcjcHJldi1wcm9kdWN0LWluZm8nKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoJyNqcy1wZXJzb25hbC1pbmZvJykucmVtb3ZlQ2xhc3MoJ3NsaWRlLWluLXJpZ2h0Jyk7XG4gICAgICAgICQoJyNqcy1wcm9kdWN0LWluZm8nKS5yZW1vdmVDbGFzcygnc2xpZGUtb3V0LWxlZnQnKTtcbiAgICB9KTtcbn07XG5cblxuXG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9zcmMvamF2YXNjcmlwdHMvbW9kdWxlcy9wb3B1cC5qcyIsIm1vZHVsZS5leHBvcnRzID0galF1ZXJ5O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwialF1ZXJ5XCJcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gaW1wb3J0ICQgZnJvbSBcImpxdWVyeVwiO1xuXG5leHBvcnQgZGVmYXVsdCAoJCkgPT4ge1xuICAgIHdpbmRvdy51c2VyQ2hvaWNlID0ge307XG5cbiAgICB3aW5kb3cuc2VsZWN0T25DbGljayA9IGZ1bmN0aW9uIChlbCkge1xuXG4gICAgICAgIGxldCBjbGlja2VkRWxlbWVudERhdGFJZCA9IGVsLmdldEF0dHJpYnV0ZSgnZGF0YScpO1xuICAgICAgICBsZXQgYWxsU2VsZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhXScpO1xuXG4gICAgICAgIGZvciAobGV0IGkgaW4gYWxsU2VsZWN0cykge1xuXG4gICAgICAgICAgICBpZiAoaXNOYU4oaSkpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IGl0ZW1TZWxlY3QgPSBhbGxTZWxlY3RzW2ldO1xuICAgICAgICAgICAgbGV0IHNlbGVjdERhdGEgPSBpdGVtU2VsZWN0LmF0dHJpYnV0ZXMuZGF0YS52YWx1ZTtcblxuICAgICAgICAgICAgaWYgKHNlbGVjdERhdGEgPT09IGNsaWNrZWRFbGVtZW50RGF0YUlkKSB7XG4gICAgICAgICAgICAgICAgdXNlckNob2ljZVtpdGVtU2VsZWN0Lm5hbWVdID0gaXRlbVNlbGVjdC5vcHRpb25zW2l0ZW1TZWxlY3Quc2VsZWN0ZWRJbmRleF0udmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmxvZygnVGhpcyBpcyB1c2VyIGNob2ljZScpO1xuICAgICAgICBjb25zb2xlLmxvZyh1c2VyQ2hvaWNlKTtcblxuICAgICAgICBjb21wYXJlKHVzZXJDaG9pY2UsIGNsaWNrZWRFbGVtZW50RGF0YUlkKTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gY29tcGFyZSh1c2VyQ2hvaWNlLCBkYXRhSUQpIHtcblxuICAgICAgICBsZXQgcHJpbnRQcmljZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRhdGFJRCArICctcHJpY2UnKTtcbiAgICAgICAgbGV0IHByaW50TWVzc2FnZSA9ICQoJyNtZXNzYWdlLScgKyBkYXRhSUQpO1xuICAgICAgICBsZXQgY2hlY2tvdXRCdXR0b24gPSAkKFwiI3NlY3Rpb24tXCIgKyBkYXRhSUQgKyBcIiBidXR0b25bZGF0YS1zbGlkZT0nbmV4dCddXCIpO1xuXG4gICAgICAgIGZvciAobGV0IHBhcmFtZXRlciBpbiB1c2VyQ2hvaWNlKSB7XG4gICAgICAgICAgICBpZiAodXNlckNob2ljZVtwYXJhbWV0ZXJdID09PSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgcHJpbnRQcmljZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtcHJpY2UnLCAnJyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1NlbGVjdCB0aGUgJyArIHBhcmFtZXRlcik7XG4gICAgICAgICAgICAgICAgcHJpbnRNZXNzYWdlLmlubmVySFRNTCA9ICdTZWxlY3QgdGhlICcgKyBwYXJhbWV0ZXI7XG4gICAgICAgICAgICAgICAgY2hlY2tvdXRCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB2YXJpYXRpb25zID0gdmFyaWF0aW9uc09iamVjdC5kYXRhQnlJZFtkYXRhSURdO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCdUaGlzIGlzIFZhcmlhdGlvbnMnKTtcbiAgICAgICAgY29uc29sZS5sb2codmFyaWF0aW9ucyk7XG5cbiAgICAgICAgZm9yIChsZXQgaSBpbiB2YXJpYXRpb25zKSB7XG4gICAgICAgICAgICBsZXQgdmFyaWF0aW9uID0gdmFyaWF0aW9uc1tpXTtcbiAgICAgICAgICAgIGxldCB2YXJpYXRpb25zV2l0aG91dFByaWNlID0ge307XG5cbiAgICAgICAgICAgIGZvciAobGV0IHBhcmFtZXRlciBpbiB2YXJpYXRpb24pIHtcbiAgICAgICAgICAgICAgICB2YXJpYXRpb25zV2l0aG91dFByaWNlW3BhcmFtZXRlcl0gPSB2YXJpYXRpb25bcGFyYW1ldGVyXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZGVsZXRlIHZhcmlhdGlvbnNXaXRob3V0UHJpY2UucHJpY2U7XG5cbiAgICAgICAgICAgIGlmIChKU09OLnN0cmluZ2lmeSh1c2VyQ2hvaWNlKSA9PT0gSlNPTi5zdHJpbmdpZnkodmFyaWF0aW9uc1dpdGhvdXRQcmljZSkpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh2YXJpYXRpb24ucHJpY2UpO1xuICAgICAgICAgICAgICAgIHByaW50UHJpY2Uuc2V0QXR0cmlidXRlKCdkYXRhLXByaWNlJywgdmFyaWF0aW9uLnByaWNlKTtcbiAgICAgICAgICAgICAgICBwcmludFByaWNlLmlubmVySFRNTCA9ICc8aDMgY2xhc3M9XCJyZWQtcHJpY2VcIj4nICsgdmFyaWF0aW9uLnByaWNlICsgJyQ8L2gzPic7XG4gICAgICAgICAgICAgICAgcHJpbnRNZXNzYWdlLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgICAgICAgICAgY2hlY2tvdXRCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHByaW50UHJpY2Uuc2V0QXR0cmlidXRlKCdkYXRhLXByaWNlJywgJycpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdWYXJpYXRpb24gaXMgbm90IGZvdW5kJyk7XG4gICAgICAgICAgICAgICAgcHJpbnRQcmljZS5pbm5lckhUTUwgPSAnPGgzPi0gLTwvaDM+JztcbiAgICAgICAgICAgICAgICBwcmludE1lc3NhZ2UuaW5uZXJIVE1MID0gJ1ZhcmlhdGlvbiBpcyBub3QgZm91bmQnO1xuICAgICAgICAgICAgICAgIGNoZWNrb3V0QnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuLy9DbGljayB0byBDaGVja291dCAtIFNsaWRlIGJ1dHRvblxuXG5cbi8vQ3JlYXRlIG5ldyBwb3N0XG4gICAgd2luZG93LmFkZFRvQ2FydCA9IGZ1bmN0aW9uIChlbCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGlmIChlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2Rpc2FibGVkJykpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBjbGlja2VkRWxlbWVudERhdGFJZCA9IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1hdHRyJyk7XG4gICAgICAgIGxldCBpbnB1dE5hbWUgPSAkKCcjZm9ybS0nICsgY2xpY2tlZEVsZW1lbnREYXRhSWQgKyAnIGlucHV0W25hbWU9XCJmaXJzdF9uYW1lXCJdJyk7XG4gICAgICAgIGxldCBpbnB1dExhc3ROYW1lID0gJCgnI2Zvcm0tJyArIGNsaWNrZWRFbGVtZW50RGF0YUlkICsgJyBpbnB1dFtuYW1lPVwibGFzdF9uYW1lXCJdJyk7XG4gICAgICAgIGxldCBpbnB1dEVtYWlsID0gJCgnI2Zvcm0tJyArIGNsaWNrZWRFbGVtZW50RGF0YUlkICsgJyBpbnB1dFtuYW1lPVwiZW1haWxcIl0nKTtcbiAgICAgICAgbGV0IGlucHV0UGhvbmUgPSAkKCcjZm9ybS0nICsgY2xpY2tlZEVsZW1lbnREYXRhSWQgKyAnIGlucHV0W25hbWU9XCJwaG9uZVwiXScpO1xuXG4gICAgICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsLm5hbWUpLnRleHRDb250ZW50O1xuXG4gICAgICAgIGxldCBwcmljZVRhZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNsaWNrZWRFbGVtZW50RGF0YUlkICsgJy1wcmljZScpO1xuICAgICAgICBsZXQgcHJpY2UgPSBwcmljZVRhZy5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJpY2UnKTtcbiAgICAgICAgbGV0IHJhbmRvbUlkID0gTWF0aC50cnVuYygoTWF0aC5yYW5kb20oKSoxMDAwMDApKTtcbiAgICAgICAgbGV0IHByb2R1Y3REYXRhID0ge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiB0aXRsZSArICcgWycgKyByYW5kb21JZCArICddJyxcbiAgICAgICAgICAgIFwiY29udGVudFwiOiBKU09OLnN0cmluZ2lmeSh1c2VyQ2hvaWNlKSArICd7XCJwcmljZVwiOicgKyBwcmljZSArICd9JyxcbiAgICAgICAgICAgIFwic3RhdHVzXCI6ICdwdWJsaXNoJ1xuICAgICAgICB9O1xuXG4gICAgICAgIGZvciAobGV0IGkgaW4gdXNlckNob2ljZSkge1xuICAgICAgICAgICAgcHJvZHVjdERhdGFbJ3BhcmFtXycgKyBpXSA9IHVzZXJDaG9pY2VbaV07XG4gICAgICAgIH1cblxuICAgICAgICBwcm9kdWN0RGF0YVsncGFyYW1fcHJpY2UnXSA9IHByaWNlO1xuXG4gICAgICAgIHByb2R1Y3REYXRhWydpbmZvX2ZpcnN0X25hbWUnXSA9IGlucHV0TmFtZS52YWx1ZTtcbiAgICAgICAgcHJvZHVjdERhdGFbJ2luZm9fbGFzdF9uYW1lJ10gPSBpbnB1dExhc3ROYW1lLnZhbHVlO1xuICAgICAgICBwcm9kdWN0RGF0YVsnaW5mb19lbWFpbCddID0gaW5wdXRFbWFpbC52YWx1ZTtcbiAgICAgICAgcHJvZHVjdERhdGFbJ2luZm9fcGhvbmUnXSA9IGlucHV0UGhvbmUudmFsdWU7XG5cbiAgICAgICAgY29uc29sZS5sb2cocHJvZHVjdERhdGEpO1xuXG4gICAgICAgIGxldCBjcmVhdGVQb3N0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgIGNyZWF0ZVBvc3Qub3BlbignUE9TVCcsIGxvY2F0aW9uLm9yaWdpbiArICcvd3AtanNvbi93cC92Mi9zaG9wX29yZGVyJywgdHJ1ZSk7XG4gICAgICAgIGNyZWF0ZVBvc3Quc2V0UmVxdWVzdEhlYWRlcignWC1XUC1Ob25jZScsIHdwQXBpU2V0dGluZ3Mubm9uY2UpO1xuICAgICAgICAvLyB2YXIgQmFzZTY0PXtfa2V5U3RyOlwiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLz1cIixlbmNvZGU6ZnVuY3Rpb24oZSl7dmFyIHQ9XCJcIjt2YXIgbixyLGkscyxvLHUsYTt2YXIgZj0wO2U9QmFzZTY0Ll91dGY4X2VuY29kZShlKTt3aGlsZShmPGUubGVuZ3RoKXtuPWUuY2hhckNvZGVBdChmKyspO3I9ZS5jaGFyQ29kZUF0KGYrKyk7aT1lLmNoYXJDb2RlQXQoZisrKTtzPW4+PjI7bz0obiYzKTw8NHxyPj40O3U9KHImMTUpPDwyfGk+PjY7YT1pJjYzO2lmKGlzTmFOKHIpKXt1PWE9NjR9ZWxzZSBpZihpc05hTihpKSl7YT02NH10PXQrdGhpcy5fa2V5U3RyLmNoYXJBdChzKSt0aGlzLl9rZXlTdHIuY2hhckF0KG8pK3RoaXMuX2tleVN0ci5jaGFyQXQodSkrdGhpcy5fa2V5U3RyLmNoYXJBdChhKX1yZXR1cm4gdH0sZGVjb2RlOmZ1bmN0aW9uKGUpe3ZhciB0PVwiXCI7dmFyIG4scixpO3ZhciBzLG8sdSxhO3ZhciBmPTA7ZT1lLnJlcGxhY2UoL1teQS1aYS16MC05XFwrXFwvXFw9XS9nLFwiXCIpO3doaWxlKGY8ZS5sZW5ndGgpe3M9dGhpcy5fa2V5U3RyLmluZGV4T2YoZS5jaGFyQXQoZisrKSk7bz10aGlzLl9rZXlTdHIuaW5kZXhPZihlLmNoYXJBdChmKyspKTt1PXRoaXMuX2tleVN0ci5pbmRleE9mKGUuY2hhckF0KGYrKykpO2E9dGhpcy5fa2V5U3RyLmluZGV4T2YoZS5jaGFyQXQoZisrKSk7bj1zPDwyfG8+PjQ7cj0obyYxNSk8PDR8dT4+MjtpPSh1JjMpPDw2fGE7dD10K1N0cmluZy5mcm9tQ2hhckNvZGUobik7aWYodSE9NjQpe3Q9dCtTdHJpbmcuZnJvbUNoYXJDb2RlKHIpfWlmKGEhPTY0KXt0PXQrU3RyaW5nLmZyb21DaGFyQ29kZShpKX19dD1CYXNlNjQuX3V0ZjhfZGVjb2RlKHQpO3JldHVybiB0fSxfdXRmOF9lbmNvZGU6ZnVuY3Rpb24oZSl7ZT1lLnJlcGxhY2UoL1xcclxcbi9nLFwiXFxuXCIpO3ZhciB0PVwiXCI7Zm9yKHZhciBuPTA7bjxlLmxlbmd0aDtuKyspe3ZhciByPWUuY2hhckNvZGVBdChuKTtpZihyPDEyOCl7dCs9U3RyaW5nLmZyb21DaGFyQ29kZShyKX1lbHNlIGlmKHI+MTI3JiZyPDIwNDgpe3QrPVN0cmluZy5mcm9tQ2hhckNvZGUocj4+NnwxOTIpO3QrPVN0cmluZy5mcm9tQ2hhckNvZGUociY2M3wxMjgpfWVsc2V7dCs9U3RyaW5nLmZyb21DaGFyQ29kZShyPj4xMnwyMjQpO3QrPVN0cmluZy5mcm9tQ2hhckNvZGUocj4+NiY2M3wxMjgpO3QrPVN0cmluZy5mcm9tQ2hhckNvZGUociY2M3wxMjgpfX1yZXR1cm4gdH0sX3V0ZjhfZGVjb2RlOmZ1bmN0aW9uKGUpe3ZhciB0PVwiXCI7dmFyIG49MDt2YXIgcj1jMT1jMj0wO3doaWxlKG48ZS5sZW5ndGgpe3I9ZS5jaGFyQ29kZUF0KG4pO2lmKHI8MTI4KXt0Kz1TdHJpbmcuZnJvbUNoYXJDb2RlKHIpO24rK31lbHNlIGlmKHI+MTkxJiZyPDIyNCl7YzI9ZS5jaGFyQ29kZUF0KG4rMSk7dCs9U3RyaW5nLmZyb21DaGFyQ29kZSgociYzMSk8PDZ8YzImNjMpO24rPTJ9ZWxzZXtjMj1lLmNoYXJDb2RlQXQobisxKTtjMz1lLmNoYXJDb2RlQXQobisyKTt0Kz1TdHJpbmcuZnJvbUNoYXJDb2RlKChyJjE1KTw8MTJ8KGMyJjYzKTw8NnxjMyY2Myk7bis9M319cmV0dXJuIHR9fTtcbiAgICAgICAgLy9jcmVhdGVQb3N0LnNldFJlcXVlc3RIZWFkZXIoICdBdXRob3JpemF0aW9uJywgJ0Jhc2ljICcgKyBCYXNlNjQuZW5jb2RlKCAndGVzdDowMDAwJyApICk7XG4gICAgICAgIGNyZWF0ZVBvc3Quc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD1VVEYtOFwiKTtcbiAgICAgICAgY3JlYXRlUG9zdC5zZW5kKEpTT04uc3RyaW5naWZ5KHByb2R1Y3REYXRhKSk7XG4gICAgICAgIGNyZWF0ZVBvc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucmVhZHlTdGF0ZSAhPT0gNCkgcmV0dXJuO1xuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5yZWFkeVN0YXRlKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdHVzKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXR1cyAhPT0gMjAxKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ05vdCAyMDE6ICcgKyB0aGlzLnN0YXR1cyArICcgJyArIHRoaXMuc3RhdHVzVGV4dCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5yZWFkeVN0YXRlID09PSA0KSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdHVzID09PSAyMDEpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0dXNUZXh0ICsgJyBzdGF0dXM6IHBvc3QgYWRkZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQodGhpcy5zdGF0dXNUZXh0ICsgJyBzdGF0dXM6IHBvc3QgYWRkZWQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfTtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL3NyYy9qYXZhc2NyaXB0cy9tb2R1bGVzL3ZhcmlhdGlvbnMuanMiLCJpbXBvcnQgJCBmcm9tIFwianF1ZXJ5XCI7XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcImJvb3N0cmFwLXZhbGlkYXRvciB2ZXJzaW9uOlwiLCBqUXVlcnkuZm4udmFsaWRhdG9yLkNvbnN0cnVjdG9yLlZFUlNJT04pO1xuICAgICQoJ2Zvcm0nKS52YWxpZGF0b3Ioe1xuICAgICAgICBmb2N1czogZmFsc2UsXG4gICAgICAgIC8vIGRlbGF5OiAzMDAwXG4gICAgfSk7XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9zcmMvamF2YXNjcmlwdHMvbW9kdWxlcy92YWxpZGF0aW9uLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==