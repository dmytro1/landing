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
	
	var _share = __webpack_require__(6);
	
	var _share2 = _interopRequireDefault(_share);
	
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
	    window.testFunc = _share2.default;
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
	
	        var productData = {
	            "title": title + ' [' + clickedElementDataId + ']',
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

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	/**
	 * Created by vitaly on 2/8/17.
	 */
	exports.default = function (href) {
	    var top = screen.height / 2 - 200;
	    var left = screen.width / 2 - 320;
	    window.open(href, 'Share', 'height=400, width=640, toolbar=no, menubar=no, scrollbars=no, resizable=yes, location=no, directories=no, status=no, top=' + top.toString() + ', left=' + left.toString());
	};

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNzliYWRiOWRkZDI4MDdkMjNmZTEiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NyYy9qYXZhc2NyaXB0cy9jb21tb24uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NyYy9qYXZhc2NyaXB0cy9tb2R1bGVzL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NyYy9qYXZhc2NyaXB0cy9tb2R1bGVzL3BvcHVwLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImpRdWVyeVwiIiwid2VicGFjazovLy8uL2Fzc2V0cy9zcmMvamF2YXNjcmlwdHMvbW9kdWxlcy92YXJpYXRpb25zLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zcmMvamF2YXNjcmlwdHMvbW9kdWxlcy92YWxpZGF0aW9uLmpzIiwid2VicGFjazovLy8uL0FyY2hpdmUvYXNzZXRzL3NyYy9qYXZhc2NyaXB0cy9tb2R1bGVzL3NoYXJlLmpzIl0sIm5hbWVzIjpbIiQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJiaW5kIiwiJCQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiTm9kZSIsInByb3RvdHlwZSIsIm9uIiwid2luZG93IiwibmFtZSIsImZuIiwiYWRkRXZlbnRMaXN0ZW5lciIsIk5vZGVMaXN0IiwiX19wcm90b19fIiwiQXJyYXkiLCJEb2N1bWVudCIsImZvckVhY2giLCJlbGVtIiwialF1ZXJ5IiwidGVzdEZ1bmMiLCJzdHlsZSIsImRpc3BsYXkiLCJuYXZiYXJUb0RlZmF1bHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJtZW51SXRlbSIsImkiLCJsZW5ndGgiLCJuYXZiYXJUb0Zsb2F0IiwiYWRkIiwic2V0TmF2U3R5bGUiLCJwYWdlWU9mZnNldCIsInRvZ2dsZVNlY3Rpb25zIiwiYnV0dG9uIiwiZGF0YUF0dHJpYnV0ZSIsImdldEF0dHJpYnV0ZSIsInNlY3Rpb24iLCJjb2xsYXBzZVNlY3Rpb25zIiwiaWQiLCJ0b2dnbGUiLCJjaGVja291dEJ0biIsImVsIiwiZGF0YUlEIiwidXNlckNob2ljZVRleHQiLCJjaG9pY2VQcmljZSIsImdldEVsZW1lbnRCeUlkIiwiY29udGVudCIsInVzZXJDaG9pY2UiLCJpbm5lckhUTUwiLCJvdXRlcldpZHRoIiwiY2xpY2siLCJsYXp5U2Nyb2xsIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIm9mZnNldCIsIm9mZnNldFRvcCIsImFuaW1hdGUiLCJzY3JvbGxUb3AiLCJzZWN0aW9ucyIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJzZWxlY3RPbkNsaWNrIiwiY2xpY2tlZEVsZW1lbnREYXRhSWQiLCJhbGxTZWxlY3RzIiwiaXNOYU4iLCJpdGVtU2VsZWN0Iiwic2VsZWN0RGF0YSIsImF0dHJpYnV0ZXMiLCJkYXRhIiwidmFsdWUiLCJvcHRpb25zIiwic2VsZWN0ZWRJbmRleCIsImNvbnNvbGUiLCJsb2ciLCJjb21wYXJlIiwicHJpbnRQcmljZSIsInByaW50TWVzc2FnZSIsImNoZWNrb3V0QnV0dG9uIiwicGFyYW1ldGVyIiwic2V0QXR0cmlidXRlIiwiZGlzYWJsZWQiLCJ2YXJpYXRpb25zIiwidmFyaWF0aW9uc09iamVjdCIsImRhdGFCeUlkIiwidmFyaWF0aW9uIiwidmFyaWF0aW9uc1dpdGhvdXRQcmljZSIsInByaWNlIiwiSlNPTiIsInN0cmluZ2lmeSIsImFkZFRvQ2FydCIsImNvbnRhaW5zIiwiaW5wdXROYW1lIiwiaW5wdXRMYXN0TmFtZSIsImlucHV0RW1haWwiLCJpbnB1dFBob25lIiwidGl0bGUiLCJ0ZXh0Q29udGVudCIsInByaWNlVGFnIiwicHJvZHVjdERhdGEiLCJjcmVhdGVQb3N0IiwiWE1MSHR0cFJlcXVlc3QiLCJvcGVuIiwibG9jYXRpb24iLCJvcmlnaW4iLCJzZXRSZXF1ZXN0SGVhZGVyIiwid3BBcGlTZXR0aW5ncyIsIm5vbmNlIiwic2VuZCIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsInJlYWR5U3RhdGUiLCJzdGF0dXMiLCJzdGF0dXNUZXh0IiwiYWxlcnQiLCJ2YWxpZGF0b3IiLCJDb25zdHJ1Y3RvciIsIlZFUlNJT04iLCJmb2N1cyIsImhyZWYiLCJ0b3AiLCJzY3JlZW4iLCJoZWlnaHQiLCJsZWZ0Iiwid2lkdGgiLCJ0b1N0cmluZyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7OztBQ25CQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUF2QkE7O0FBRUEsS0FBTUEsSUFBSUMsU0FBU0MsYUFBVCxDQUF1QkMsSUFBdkIsQ0FBNEJGLFFBQTVCLENBQVY7QUFDQSxLQUFNRyxLQUFLSCxTQUFTSSxnQkFBVCxDQUEwQkYsSUFBMUIsQ0FBK0JGLFFBQS9CLENBQVg7O0FBRUFLLE1BQUtDLFNBQUwsQ0FBZUMsRUFBZixHQUFvQkMsT0FBT0QsRUFBUCxHQUFZLFVBQVVFLElBQVYsRUFBZ0JDLEVBQWhCLEVBQW9CO0FBQ2hELFVBQUtDLGdCQUFMLENBQXNCRixJQUF0QixFQUE0QkMsRUFBNUI7QUFDSCxFQUZEOztBQUlBRSxVQUFTTixTQUFULENBQW1CTyxTQUFuQixHQUErQkMsTUFBTVIsU0FBckMsQyxDQUFnRDtBQUNoRE0sVUFBU04sU0FBVCxDQUFtQk8sU0FBbkIsR0FBK0JFLFNBQVNULFNBQXhDOztBQUVBTSxVQUFTTixTQUFULENBQW1CQyxFQUFuQixHQUF3QkssU0FBU04sU0FBVCxDQUFtQkssZ0JBQW5CLEdBQXNDLFVBQVVGLElBQVYsRUFBZ0JDLEVBQWhCLEVBQW9CO0FBQzlFLFVBQUtNLE9BQUwsQ0FBYSxVQUFDQyxJQUFELEVBQVU7QUFDbkJBLGNBQUtWLEVBQUwsQ0FBUUUsSUFBUixFQUFjQyxFQUFkO0FBQ0gsTUFGRDtBQUdILEVB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b0MsVUFBakI7QUFDQXJDLHFCQUFRQyxHQUFSLENBQVksS0FBS3FDLE1BQWpCO0FBQ0EsaUJBQUksS0FBS0EsTUFBTCxLQUFnQixHQUFwQixFQUF5QjtBQUNyQnRDLHlCQUFRQyxHQUFSLENBQVksY0FBYyxLQUFLcUMsTUFBbkIsR0FBNEIsR0FBNUIsR0FBa0MsS0FBS0MsVUFBbkQ7QUFDQTtBQUNIOztBQUVELGlCQUFJLEtBQUtGLFVBQUwsS0FBb0IsQ0FBeEIsRUFBMkI7QUFDdkIscUJBQUksS0FBS0MsTUFBTCxLQUFnQixHQUFwQixFQUF5QjtBQUNyQnRDLDZCQUFRQyxHQUFSLENBQVksS0FBS3NDLFVBQUwsR0FBa0IscUJBQTlCO0FBQ0FDLDJCQUFNLEtBQUtELFVBQUwsR0FBa0IscUJBQXhCO0FBQ0g7QUFDSjtBQUNKLFVBZkQ7QUFnQkgsTUE1REQ7QUE2REgsRTs7Ozs7Ozs7Ozs7O0FDL0lEOzs7Ozs7bUJBRWUsWUFBTTtBQUNqQnZDLGFBQVFDLEdBQVIsQ0FBWSw2QkFBWixFQUEyQ3hELE9BQU9SLEVBQVAsQ0FBVXdHLFNBQVYsQ0FBb0JDLFdBQXBCLENBQWdDQyxPQUEzRTtBQUNBLDJCQUFFLE1BQUYsRUFBVUYsU0FBVixDQUFvQjtBQUNoQkcsZ0JBQU87QUFDUDtBQUZnQixNQUFwQjtBQUlILEU7Ozs7Ozs7Ozs7OztBQ1JEOzs7bUJBR2UsVUFBQ0MsSUFBRCxFQUFVO0FBQ3JCLFNBQUlDLE1BQU9DLE9BQU9DLE1BQVAsR0FBZ0IsQ0FBakIsR0FBc0IsR0FBaEM7QUFDQSxTQUFJQyxPQUFRRixPQUFPRyxLQUFQLEdBQWUsQ0FBaEIsR0FBcUIsR0FBaEM7QUFDQW5ILFlBQU84RixJQUFQLENBQ0lnQixJQURKLEVBRUksT0FGSixFQUdJLDhIQUE4SEMsSUFBSUssUUFBSixFQUE5SCxHQUErSSxTQUEvSSxHQUEySkYsS0FBS0UsUUFBTCxFQUgvSjtBQUtILEUiLCJmaWxlIjoiY29tbW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNzliYWRiOWRkZDI4MDdkMjNmZTEiLCIvLyBpbXBvcnQgJCBmcm9tIFwianF1ZXJ5XCI7XG5cbmNvbnN0ICQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yLmJpbmQoZG9jdW1lbnQpO1xuY29uc3QgJCQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsLmJpbmQoZG9jdW1lbnQpO1xuXG5Ob2RlLnByb3RvdHlwZS5vbiA9IHdpbmRvdy5vbiA9IGZ1bmN0aW9uIChuYW1lLCBmbikge1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihuYW1lLCBmbik7XG59O1xuXG5Ob2RlTGlzdC5wcm90b3R5cGUuX19wcm90b19fID0gQXJyYXkucHJvdG90eXBlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5Ob2RlTGlzdC5wcm90b3R5cGUuX19wcm90b19fID0gRG9jdW1lbnQucHJvdG90eXBlO1xuXG5Ob2RlTGlzdC5wcm90b3R5cGUub24gPSBOb2RlTGlzdC5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uIChuYW1lLCBmbikge1xuICAgIHRoaXMuZm9yRWFjaCgoZWxlbSkgPT4ge1xuICAgICAgICBlbGVtLm9uKG5hbWUsIGZuKTtcbiAgICB9KTtcbn07XG4vL2V4cG9ydCB7JCwgJCR9O1xuXG5pbXBvcnQgbWFpbiBmcm9tIFwiLi9tb2R1bGVzL21haW5cIjtcbmltcG9ydCBwb3B1cCBmcm9tIFwiLi9tb2R1bGVzL3BvcHVwXCI7XG5pbXBvcnQgdmFyaWF0aW9ucyBmcm9tIFwiLi9tb2R1bGVzL3ZhcmlhdGlvbnNcIjtcbmltcG9ydCB2YWxpZGF0aW9uIGZyb20gXCIuL21vZHVsZXMvdmFsaWRhdGlvblwiO1xuaW1wb3J0IHNoYXJlRnVuY3Rpb24gZnJvbSBcIi4uLy4uLy4uL0FyY2hpdmUvYXNzZXRzL3NyYy9qYXZhc2NyaXB0cy9tb2R1bGVzL3NoYXJlXCI7XG5cblxuLy8gaW1wb3J0IFwiLi9wbHVnaW5zL2luZmluaXRlLXNjcm9sbFwiO1xuXG5qUXVlcnkoZnVuY3Rpb24gKCkge1xuICAgIG1haW4oJCwgJCQpO1xuICAgIHBvcHVwKCk7XG4gICAgdmFyaWF0aW9ucygkKTtcbiAgICB2YWxpZGF0aW9uKCk7XG4gICAgd2luZG93LnRlc3RGdW5jID0gc2hhcmVGdW5jdGlvbjtcbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9zcmMvamF2YXNjcmlwdHMvY29tbW9uLmpzIiwiLy8gaW1wb3J0ICQgZnJvbSBcImpxdWVyeVwiO1xuXG5leHBvcnQgZGVmYXVsdCAoJCwgJCQpID0+IHtcblxuICAgIHdpbmRvdy5vbignbG9hZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnLmxvYWRlcl9pbm5lcicpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgJCgnLmxvYWRlcicpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIG5hdmJhclRvRGVmYXVsdCgpIHtcbiAgICAgICAgJCgnLm5hdmJhci1kZWZhdWx0Jykuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3RyYW5zcGFyZW50JztcbiAgICAgICAgJCgnLm5hdmJhci1icmFuZCBpbWcnKS5jbGFzc0xpc3QucmVtb3ZlKCdpbWdfcmVzcG9uc2l2ZScpO1xuICAgICAgICAkKCcubmF2YmFyLWZpeGVkLXRvcCcpLmNsYXNzTGlzdC5yZW1vdmUoJ3RvcC1uYXYtY29sbGFwc2UnKTtcbiAgICAgICAgbGV0IG1lbnVJdGVtID0gJCQoJy5uYXZiYXItbmF2IGEnKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtZW51SXRlbS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbWVudUl0ZW1baV0uY2xhc3NMaXN0LnJlbW92ZSgnd2hpdGUnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG5hdmJhclRvRmxvYXQoKSB7XG4gICAgICAgICQoJy5uYXZiYXItZGVmYXVsdCcpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZ2JhKDQ4LCA0OCwgNDgsIDAuNSknO1xuICAgICAgICAkKCcubmF2YmFyLWRlZmF1bHQnKS5jbGFzc0xpc3QuYWRkKCd0b3AtbmF2LWNvbGxhcHNlJyk7XG4gICAgICAgICQoJy5uYXZiYXItYnJhbmQgaW1nJykuY2xhc3NMaXN0LmFkZCgnaW1nX3Jlc3BvbnNpdmUnKTtcbiAgICAgICAgbGV0IG1lbnVJdGVtID0gJCQoJy5uYXZiYXItbmF2IGEnKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtZW51SXRlbS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbWVudUl0ZW1baV0uY2xhc3NMaXN0LmFkZCgnd2hpdGUnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldE5hdlN0eWxlKCkge1xuICAgICAgICBuYXZiYXJUb0Zsb2F0KCk7XG4gICAgICAgIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPCA1MCkge1xuICAgICAgICAgICAgbmF2YmFyVG9EZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB3aW5kb3cudG9nZ2xlU2VjdGlvbnMgPSBmdW5jdGlvbiAoYnV0dG9uKSB7XG4gICAgICAgICQoJy5jbG9zZS1idG4nKS5jbGFzc0xpc3QuYWRkKCdzaG93aW5nJyk7XG4gICAgICAgIGlmICgkJCgnLmNvbGxhcHNlLXNlY3Rpb24uc2hvd2luZycpLmxlbmd0aCkge1xuICAgICAgICAgICAgJCgnLmNsb3NlLWJ0bicpLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3dpbmcnKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGRhdGFBdHRyaWJ1dGUgPSBidXR0b24uZ2V0QXR0cmlidXRlKCdkYXRhLWF0dHInKTtcbiAgICAgICAgbGV0IHNlY3Rpb24gPSAkKCcjc2VjdGlvbi0nICsgZGF0YUF0dHJpYnV0ZSk7XG4gICAgICAgIC8vIHNlY3Rpb24ub2Zmc2V0VG9wID0gMjA7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHNlY3Rpb24ub2Zmc2V0VG9wKTtcbiAgICAgICAgbGV0IGNvbGxhcHNlU2VjdGlvbnMgPSAkJCgnLmNvbGxhcHNlLXNlY3Rpb24nKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2xsYXBzZVNlY3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoIShjb2xsYXBzZVNlY3Rpb25zW2ldLmlkID09PSBzZWN0aW9uLmlkKSkge1xuICAgICAgICAgICAgICAgIGNvbGxhcHNlU2VjdGlvbnNbaV0uY2xhc3NMaXN0LnJlbW92ZSgnc2hvd2luZycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHNlY3Rpb24uY2xhc3NMaXN0LnRvZ2dsZSgnc2hvd2luZycpO1xuICAgICAgICBpZiAoJCQoJy5jb2xsYXBzZS1zZWN0aW9uLnNob3dpbmcnKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICQoJy5jbG9zZS1idG4nKS5jbGFzc0xpc3QuYWRkKCdzaG93aW5nJyk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgd2luZG93LmNoZWNrb3V0QnRuID0gZnVuY3Rpb24gKGVsKSB7XG5cbiAgICAgICAgbGV0IGRhdGFJRCA9IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1jaGVja291dCcpO1xuICAgICAgICBsZXQgdXNlckNob2ljZVRleHQgPSAkKCcjc2VjdGlvbi0nICsgZGF0YUlEICsgJyAudXNlci1jaG9pY2UnKTtcbiAgICAgICAgbGV0IGNob2ljZVByaWNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZGF0YUlEICsgJy1wcmljZScpLmdldEF0dHJpYnV0ZSgnZGF0YS1wcmljZScpO1xuICAgICAgICBsZXQgY29udGVudCA9ICcnO1xuICAgICAgICBmb3IgKGxldCBpIGluIHVzZXJDaG9pY2UpIHtcbiAgICAgICAgICAgIGNvbnRlbnQgKz0gXCI8cD5cIiArIGkgKyBcIjogXCIgKyB1c2VyQ2hvaWNlW2ldICsgXCI8L3A+XCI7XG4gICAgICAgIH1cbiAgICAgICAgY29udGVudCArPSBcIjxwPlByaWNlOiBcIiArIGNob2ljZVByaWNlO1xuICAgICAgICB1c2VyQ2hvaWNlVGV4dC5pbm5lckhUTUwgPSBjb250ZW50O1xuICAgIH07XG5cbiAgICB3aW5kb3cub24oJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNldE5hdlN0eWxlKCk7XG4gICAgICAgIC8vTmF2YmFyIHN0eWxlIHN3aXRjaGVyXG4gICAgICAgIHdpbmRvdy5vbignc2Nyb2xsJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc2V0TmF2U3R5bGUoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHdpbmRvdy5vdXRlcldpZHRoIDwgNzY4KSB7XG5cbiAgICAgICAgICAgIC8vU0FORFdJQ0ggQlVUVE9OXG4gICAgICAgICAgICAkKCcubmF2YmFyLXRvZ2dsZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBuYXZiYXJUb0Zsb2F0KCk7XG4gICAgICAgICAgICAgICAgJCgnLnNhbmR3aWNoJykuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy9ISURFIE1FTlUgQ0xJQ0tJTkcgTElcbiAgICAgICAgICAgICQkKCcubmF2YmFyLWNvbGxhcHNlIHVsIGxpIGEnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgJCgnLm5hdmJhci10b2dnbGUnKS5jbGljaygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvL0xBWlkgQU5JTUFUSU5HIEZPUiBCVVRUT05TIEFORCBNRU5VIElURU1TXG4gICAgICAgICQkKCcuc2Nyb2xsX2J0bicpLm9uKCdjbGljaycsIGxhenlTY3JvbGwpO1xuICAgICAgICAkJCgnLm5hdiBhJykub24oJ2NsaWNrJywgbGF6eVNjcm9sbCk7XG5cbiAgICAgICAgZnVuY3Rpb24gbGF6eVNjcm9sbCgpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBsZXQgaWQgPSB0aGlzLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuICAgICAgICAgICAgbGV0IG9mZnNldCA9ICQoaWQpLm9mZnNldFRvcDtcbiAgICAgICAgICAgIC8vZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2h0bWwnKVswXS5hbmltYXRlKHtcbiAgICAgICAgICAgIGlmIChpZCA9PT0gXCIjY2hvb3NlXCIpIHtcbiAgICAgICAgICAgICAgICBvZmZzZXQgLT0gNTA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGpRdWVyeSgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgIHNjcm9sbFRvcDogb2Zmc2V0XG4gICAgICAgICAgICB9LCA3MDApO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZnVuY3Rpb24gbGF6eVNjcm9sbCgpIHtcbiAgICAgICAgLy8gICAgICAgICBsZXQgaWQgPSB0aGlzLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuICAgICAgICAvLyAgICAgICAgIGxldCBvZmZzZXQgPSAkKGlkKS5vZmZzZXRUb3A7XG4gICAgICAgIC8vICAgICBpZiAodGhpcy5oYXNoICE9PSBcIlwiKSB7XG4gICAgICAgIC8vICAgICAgICAgLy8gUHJldmVudCBkZWZhdWx0IGFuY2hvciBjbGljayBiZWhhdmlvclxuICAgICAgICAvLyAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIC8vXG4gICAgICAgIC8vICAgICAgICAgLy8gU3RvcmUgaGFzaFxuICAgICAgICAvLyAgICAgICAgIHZhciBoYXNoID0gdGhpcy5oYXNoO1xuICAgICAgICAvL1xuICAgICAgICAvLyAgICAgICAgIC8vIFVzaW5nIGpRdWVyeSdzIGFuaW1hdGUoKSBtZXRob2QgdG8gYWRkIHNtb290aCBwYWdlIHNjcm9sbFxuICAgICAgICAvLyAgICAgICAgIC8vIFRoZSBvcHRpb25hbCBudW1iZXIgKDgwMCkgc3BlY2lmaWVzIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGl0IHRha2VzIHRvIHNjcm9sbCB0byB0aGUgc3BlY2lmaWVkIGFyZWFcbiAgICAgICAgLy8gICAgICAgICBqUXVlcnkoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcbiAgICAgICAgLy8gICAgICAgICAgICAgc2Nyb2xsVG9wOiBvZmZzZXRcbiAgICAgICAgLy8gICAgICAgICB9LCAzMDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gICAgICAgICAgICAgLy8gQWRkIGhhc2ggKCMpIHRvIFVSTCB3aGVuIGRvbmUgc2Nyb2xsaW5nIChkZWZhdWx0IGNsaWNrIGJlaGF2aW9yKVxuICAgICAgICAvLyAgICAgICAgICAgICAvL3dpbmRvdy5sb2NhdGlvbi5oYXNoID0gaGFzaDtcbiAgICAgICAgLy8gICAgICAgICB9KTtcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfVxuXG4gICAgICAgIC8vIE1ha2Ugc3VyZSB0aGlzLmhhc2ggaGFzIGEgdmFsdWUgYmVmb3JlIG92ZXJyaWRpbmcgZGVmYXVsdCBiZWhhdmlvclxuXG5cbiAgICAgICAgJCgnLmNsb3NlLWJ0bicpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGxldCBzZWN0aW9ucyA9ICQkKCcuY29sbGFwc2Utc2VjdGlvbicpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHNlY3Rpb25zW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3dpbmcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY2xhc3NMaXN0LnJlbW92ZSgnc2hvd2luZycpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvc3JjL2phdmFzY3JpcHRzL21vZHVsZXMvbWFpbi5qcyIsImltcG9ydCAkIGZyb20gXCJqcXVlcnlcIjtcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICAgICQoJyNuZXh0LXBlcnNvbmFsJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCcjanMtcHJvZHVjdC1pbmZvJykuYWRkQ2xhc3MoJ3NsaWRlLW91dC1sZWZ0Jyk7XG4gICAgICAgICQoJyNqcy1wZXJzb25hbC1pbmZvJykuYWRkQ2xhc3MoJ3NsaWRlLWluLXJpZ2h0Jyk7XG4gICAgfSk7XG4gICAgJCgnI3ByZXYtcHJvZHVjdC1pbmZvJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCcjanMtcGVyc29uYWwtaW5mbycpLnJlbW92ZUNsYXNzKCdzbGlkZS1pbi1yaWdodCcpO1xuICAgICAgICAkKCcjanMtcHJvZHVjdC1pbmZvJykucmVtb3ZlQ2xhc3MoJ3NsaWRlLW91dC1sZWZ0Jyk7XG4gICAgfSk7XG59O1xuXG5cblxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvc3JjL2phdmFzY3JpcHRzL21vZHVsZXMvcG9wdXAuanMiLCJtb2R1bGUuZXhwb3J0cyA9IGpRdWVyeTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImpRdWVyeVwiXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGltcG9ydCAkIGZyb20gXCJqcXVlcnlcIjtcblxuZXhwb3J0IGRlZmF1bHQgKCQpID0+IHtcbiAgICB3aW5kb3cudXNlckNob2ljZSA9IHt9O1xuXG4gICAgd2luZG93LnNlbGVjdE9uQ2xpY2sgPSBmdW5jdGlvbiAoZWwpIHtcblxuICAgICAgICBsZXQgY2xpY2tlZEVsZW1lbnREYXRhSWQgPSBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEnKTtcbiAgICAgICAgbGV0IGFsbFNlbGVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YV0nKTtcblxuICAgICAgICBmb3IgKGxldCBpIGluIGFsbFNlbGVjdHMpIHtcblxuICAgICAgICAgICAgaWYgKGlzTmFOKGkpKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBpdGVtU2VsZWN0ID0gYWxsU2VsZWN0c1tpXTtcbiAgICAgICAgICAgIGxldCBzZWxlY3REYXRhID0gaXRlbVNlbGVjdC5hdHRyaWJ1dGVzLmRhdGEudmFsdWU7XG5cbiAgICAgICAgICAgIGlmIChzZWxlY3REYXRhID09PSBjbGlja2VkRWxlbWVudERhdGFJZCkge1xuICAgICAgICAgICAgICAgIHVzZXJDaG9pY2VbaXRlbVNlbGVjdC5uYW1lXSA9IGl0ZW1TZWxlY3Qub3B0aW9uc1tpdGVtU2VsZWN0LnNlbGVjdGVkSW5kZXhdLnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc29sZS5sb2coJ1RoaXMgaXMgdXNlciBjaG9pY2UnKTtcbiAgICAgICAgY29uc29sZS5sb2codXNlckNob2ljZSk7XG5cbiAgICAgICAgY29tcGFyZSh1c2VyQ2hvaWNlLCBjbGlja2VkRWxlbWVudERhdGFJZCk7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGNvbXBhcmUodXNlckNob2ljZSwgZGF0YUlEKSB7XG5cbiAgICAgICAgbGV0IHByaW50UHJpY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkYXRhSUQgKyAnLXByaWNlJyk7XG4gICAgICAgIGxldCBwcmludE1lc3NhZ2UgPSAkKCcjbWVzc2FnZS0nICsgZGF0YUlEKTtcbiAgICAgICAgbGV0IGNoZWNrb3V0QnV0dG9uID0gJChcIiNzZWN0aW9uLVwiICsgZGF0YUlEICsgXCIgYnV0dG9uW2RhdGEtc2xpZGU9J25leHQnXVwiKTtcblxuICAgICAgICBmb3IgKGxldCBwYXJhbWV0ZXIgaW4gdXNlckNob2ljZSkge1xuICAgICAgICAgICAgaWYgKHVzZXJDaG9pY2VbcGFyYW1ldGVyXSA9PT0gXCJcIikge1xuICAgICAgICAgICAgICAgIHByaW50UHJpY2Uuc2V0QXR0cmlidXRlKCdkYXRhLXByaWNlJywgJycpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTZWxlY3QgdGhlICcgKyBwYXJhbWV0ZXIpO1xuICAgICAgICAgICAgICAgIHByaW50TWVzc2FnZS5pbm5lckhUTUwgPSAnU2VsZWN0IHRoZSAnICsgcGFyYW1ldGVyO1xuICAgICAgICAgICAgICAgIGNoZWNrb3V0QnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgdmFyaWF0aW9ucyA9IHZhcmlhdGlvbnNPYmplY3QuZGF0YUJ5SWRbZGF0YUlEXTtcblxuICAgICAgICBjb25zb2xlLmxvZygnVGhpcyBpcyBWYXJpYXRpb25zJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKHZhcmlhdGlvbnMpO1xuXG4gICAgICAgIGZvciAobGV0IGkgaW4gdmFyaWF0aW9ucykge1xuICAgICAgICAgICAgbGV0IHZhcmlhdGlvbiA9IHZhcmlhdGlvbnNbaV07XG4gICAgICAgICAgICBsZXQgdmFyaWF0aW9uc1dpdGhvdXRQcmljZSA9IHt9O1xuXG4gICAgICAgICAgICBmb3IgKGxldCBwYXJhbWV0ZXIgaW4gdmFyaWF0aW9uKSB7XG4gICAgICAgICAgICAgICAgdmFyaWF0aW9uc1dpdGhvdXRQcmljZVtwYXJhbWV0ZXJdID0gdmFyaWF0aW9uW3BhcmFtZXRlcl07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRlbGV0ZSB2YXJpYXRpb25zV2l0aG91dFByaWNlLnByaWNlO1xuXG4gICAgICAgICAgICBpZiAoSlNPTi5zdHJpbmdpZnkodXNlckNob2ljZSkgPT09IEpTT04uc3RyaW5naWZ5KHZhcmlhdGlvbnNXaXRob3V0UHJpY2UpKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codmFyaWF0aW9uLnByaWNlKTtcbiAgICAgICAgICAgICAgICBwcmludFByaWNlLnNldEF0dHJpYnV0ZSgnZGF0YS1wcmljZScsIHZhcmlhdGlvbi5wcmljZSk7XG4gICAgICAgICAgICAgICAgcHJpbnRQcmljZS5pbm5lckhUTUwgPSAnPGgzIGNsYXNzPVwicmVkLXByaWNlXCI+JyArIHZhcmlhdGlvbi5wcmljZSArICckPC9oMz4nO1xuICAgICAgICAgICAgICAgIHByaW50TWVzc2FnZS5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICAgICAgICAgIGNoZWNrb3V0QnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwcmludFByaWNlLnNldEF0dHJpYnV0ZSgnZGF0YS1wcmljZScsICcnKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnVmFyaWF0aW9uIGlzIG5vdCBmb3VuZCcpO1xuICAgICAgICAgICAgICAgIHByaW50UHJpY2UuaW5uZXJIVE1MID0gJzxoMz4tIC08L2gzPic7XG4gICAgICAgICAgICAgICAgcHJpbnRNZXNzYWdlLmlubmVySFRNTCA9ICdWYXJpYXRpb24gaXMgbm90IGZvdW5kJztcbiAgICAgICAgICAgICAgICBjaGVja291dEJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbi8vQ2xpY2sgdG8gQ2hlY2tvdXQgLSBTbGlkZSBidXR0b25cblxuXG4vL0NyZWF0ZSBuZXcgcG9zdFxuICAgIHdpbmRvdy5hZGRUb0NhcnQgPSBmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBpZiAoZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdkaXNhYmxlZCcpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgY2xpY2tlZEVsZW1lbnREYXRhSWQgPSBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYXR0cicpO1xuICAgICAgICBsZXQgaW5wdXROYW1lID0gJCgnI2Zvcm0tJyArIGNsaWNrZWRFbGVtZW50RGF0YUlkICsgJyBpbnB1dFtuYW1lPVwiZmlyc3RfbmFtZVwiXScpO1xuICAgICAgICBsZXQgaW5wdXRMYXN0TmFtZSA9ICQoJyNmb3JtLScgKyBjbGlja2VkRWxlbWVudERhdGFJZCArICcgaW5wdXRbbmFtZT1cImxhc3RfbmFtZVwiXScpO1xuICAgICAgICBsZXQgaW5wdXRFbWFpbCA9ICQoJyNmb3JtLScgKyBjbGlja2VkRWxlbWVudERhdGFJZCArICcgaW5wdXRbbmFtZT1cImVtYWlsXCJdJyk7XG4gICAgICAgIGxldCBpbnB1dFBob25lID0gJCgnI2Zvcm0tJyArIGNsaWNrZWRFbGVtZW50RGF0YUlkICsgJyBpbnB1dFtuYW1lPVwicGhvbmVcIl0nKTtcblxuICAgICAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbC5uYW1lKS50ZXh0Q29udGVudDtcblxuICAgICAgICBsZXQgcHJpY2VUYWcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjbGlja2VkRWxlbWVudERhdGFJZCArICctcHJpY2UnKTtcbiAgICAgICAgbGV0IHByaWNlID0gcHJpY2VUYWcuZ2V0QXR0cmlidXRlKCdkYXRhLXByaWNlJyk7XG5cbiAgICAgICAgbGV0IHByb2R1Y3REYXRhID0ge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiB0aXRsZSArICcgWycgKyBjbGlja2VkRWxlbWVudERhdGFJZCArICddJyxcbiAgICAgICAgICAgIFwiY29udGVudFwiOiBKU09OLnN0cmluZ2lmeSh1c2VyQ2hvaWNlKSArICd7XCJwcmljZVwiOicgKyBwcmljZSArICd9JyxcbiAgICAgICAgICAgIFwic3RhdHVzXCI6ICdwdWJsaXNoJ1xuICAgICAgICB9O1xuXG4gICAgICAgIGZvciAobGV0IGkgaW4gdXNlckNob2ljZSkge1xuICAgICAgICAgICAgcHJvZHVjdERhdGFbJ3BhcmFtXycgKyBpXSA9IHVzZXJDaG9pY2VbaV07XG4gICAgICAgIH1cblxuICAgICAgICBwcm9kdWN0RGF0YVsncGFyYW1fcHJpY2UnXSA9IHByaWNlO1xuXG4gICAgICAgIHByb2R1Y3REYXRhWydpbmZvX2ZpcnN0X25hbWUnXSA9IGlucHV0TmFtZS52YWx1ZTtcbiAgICAgICAgcHJvZHVjdERhdGFbJ2luZm9fbGFzdF9uYW1lJ10gPSBpbnB1dExhc3ROYW1lLnZhbHVlO1xuICAgICAgICBwcm9kdWN0RGF0YVsnaW5mb19lbWFpbCddID0gaW5wdXRFbWFpbC52YWx1ZTtcbiAgICAgICAgcHJvZHVjdERhdGFbJ2luZm9fcGhvbmUnXSA9IGlucHV0UGhvbmUudmFsdWU7XG5cbiAgICAgICAgY29uc29sZS5sb2cocHJvZHVjdERhdGEpO1xuXG4gICAgICAgIGxldCBjcmVhdGVQb3N0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgIGNyZWF0ZVBvc3Qub3BlbignUE9TVCcsIGxvY2F0aW9uLm9yaWdpbiArICcvd3AtanNvbi93cC92Mi9zaG9wX29yZGVyJywgdHJ1ZSk7XG4gICAgICAgIGNyZWF0ZVBvc3Quc2V0UmVxdWVzdEhlYWRlcignWC1XUC1Ob25jZScsIHdwQXBpU2V0dGluZ3Mubm9uY2UpO1xuICAgICAgICAvLyB2YXIgQmFzZTY0PXtfa2V5U3RyOlwiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLz1cIixlbmNvZGU6ZnVuY3Rpb24oZSl7dmFyIHQ9XCJcIjt2YXIgbixyLGkscyxvLHUsYTt2YXIgZj0wO2U9QmFzZTY0Ll91dGY4X2VuY29kZShlKTt3aGlsZShmPGUubGVuZ3RoKXtuPWUuY2hhckNvZGVBdChmKyspO3I9ZS5jaGFyQ29kZUF0KGYrKyk7aT1lLmNoYXJDb2RlQXQoZisrKTtzPW4+PjI7bz0obiYzKTw8NHxyPj40O3U9KHImMTUpPDwyfGk+PjY7YT1pJjYzO2lmKGlzTmFOKHIpKXt1PWE9NjR9ZWxzZSBpZihpc05hTihpKSl7YT02NH10PXQrdGhpcy5fa2V5U3RyLmNoYXJBdChzKSt0aGlzLl9rZXlTdHIuY2hhckF0KG8pK3RoaXMuX2tleVN0ci5jaGFyQXQodSkrdGhpcy5fa2V5U3RyLmNoYXJBdChhKX1yZXR1cm4gdH0sZGVjb2RlOmZ1bmN0aW9uKGUpe3ZhciB0PVwiXCI7dmFyIG4scixpO3ZhciBzLG8sdSxhO3ZhciBmPTA7ZT1lLnJlcGxhY2UoL1teQS1aYS16MC05XFwrXFwvXFw9XS9nLFwiXCIpO3doaWxlKGY8ZS5sZW5ndGgpe3M9dGhpcy5fa2V5U3RyLmluZGV4T2YoZS5jaGFyQXQoZisrKSk7bz10aGlzLl9rZXlTdHIuaW5kZXhPZihlLmNoYXJBdChmKyspKTt1PXRoaXMuX2tleVN0ci5pbmRleE9mKGUuY2hhckF0KGYrKykpO2E9dGhpcy5fa2V5U3RyLmluZGV4T2YoZS5jaGFyQXQoZisrKSk7bj1zPDwyfG8+PjQ7cj0obyYxNSk8PDR8dT4+MjtpPSh1JjMpPDw2fGE7dD10K1N0cmluZy5mcm9tQ2hhckNvZGUobik7aWYodSE9NjQpe3Q9dCtTdHJpbmcuZnJvbUNoYXJDb2RlKHIpfWlmKGEhPTY0KXt0PXQrU3RyaW5nLmZyb21DaGFyQ29kZShpKX19dD1CYXNlNjQuX3V0ZjhfZGVjb2RlKHQpO3JldHVybiB0fSxfdXRmOF9lbmNvZGU6ZnVuY3Rpb24oZSl7ZT1lLnJlcGxhY2UoL1xcclxcbi9nLFwiXFxuXCIpO3ZhciB0PVwiXCI7Zm9yKHZhciBuPTA7bjxlLmxlbmd0aDtuKyspe3ZhciByPWUuY2hhckNvZGVBdChuKTtpZihyPDEyOCl7dCs9U3RyaW5nLmZyb21DaGFyQ29kZShyKX1lbHNlIGlmKHI+MTI3JiZyPDIwNDgpe3QrPVN0cmluZy5mcm9tQ2hhckNvZGUocj4+NnwxOTIpO3QrPVN0cmluZy5mcm9tQ2hhckNvZGUociY2M3wxMjgpfWVsc2V7dCs9U3RyaW5nLmZyb21DaGFyQ29kZShyPj4xMnwyMjQpO3QrPVN0cmluZy5mcm9tQ2hhckNvZGUocj4+NiY2M3wxMjgpO3QrPVN0cmluZy5mcm9tQ2hhckNvZGUociY2M3wxMjgpfX1yZXR1cm4gdH0sX3V0ZjhfZGVjb2RlOmZ1bmN0aW9uKGUpe3ZhciB0PVwiXCI7dmFyIG49MDt2YXIgcj1jMT1jMj0wO3doaWxlKG48ZS5sZW5ndGgpe3I9ZS5jaGFyQ29kZUF0KG4pO2lmKHI8MTI4KXt0Kz1TdHJpbmcuZnJvbUNoYXJDb2RlKHIpO24rK31lbHNlIGlmKHI+MTkxJiZyPDIyNCl7YzI9ZS5jaGFyQ29kZUF0KG4rMSk7dCs9U3RyaW5nLmZyb21DaGFyQ29kZSgociYzMSk8PDZ8YzImNjMpO24rPTJ9ZWxzZXtjMj1lLmNoYXJDb2RlQXQobisxKTtjMz1lLmNoYXJDb2RlQXQobisyKTt0Kz1TdHJpbmcuZnJvbUNoYXJDb2RlKChyJjE1KTw8MTJ8KGMyJjYzKTw8NnxjMyY2Myk7bis9M319cmV0dXJuIHR9fTtcbiAgICAgICAgLy9jcmVhdGVQb3N0LnNldFJlcXVlc3RIZWFkZXIoICdBdXRob3JpemF0aW9uJywgJ0Jhc2ljICcgKyBCYXNlNjQuZW5jb2RlKCAndGVzdDowMDAwJyApICk7XG4gICAgICAgIGNyZWF0ZVBvc3Quc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD1VVEYtOFwiKTtcbiAgICAgICAgY3JlYXRlUG9zdC5zZW5kKEpTT04uc3RyaW5naWZ5KHByb2R1Y3REYXRhKSk7XG4gICAgICAgIGNyZWF0ZVBvc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucmVhZHlTdGF0ZSAhPT0gNCkgcmV0dXJuO1xuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5yZWFkeVN0YXRlKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdHVzKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXR1cyAhPT0gMjAxKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ05vdCAyMDE6ICcgKyB0aGlzLnN0YXR1cyArICcgJyArIHRoaXMuc3RhdHVzVGV4dCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5yZWFkeVN0YXRlID09PSA0KSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdHVzID09PSAyMDEpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0dXNUZXh0ICsgJyBzdGF0dXM6IHBvc3QgYWRkZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQodGhpcy5zdGF0dXNUZXh0ICsgJyBzdGF0dXM6IHBvc3QgYWRkZWQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfTtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL3NyYy9qYXZhc2NyaXB0cy9tb2R1bGVzL3ZhcmlhdGlvbnMuanMiLCJpbXBvcnQgJCBmcm9tIFwianF1ZXJ5XCI7XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcImJvb3N0cmFwLXZhbGlkYXRvciB2ZXJzaW9uOlwiLCBqUXVlcnkuZm4udmFsaWRhdG9yLkNvbnN0cnVjdG9yLlZFUlNJT04pO1xuICAgICQoJ2Zvcm0nKS52YWxpZGF0b3Ioe1xuICAgICAgICBmb2N1czogZmFsc2UsXG4gICAgICAgIC8vIGRlbGF5OiAzMDAwXG4gICAgfSk7XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9zcmMvamF2YXNjcmlwdHMvbW9kdWxlcy92YWxpZGF0aW9uLmpzIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IHZpdGFseSBvbiAyLzgvMTcuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IChocmVmKSA9PiB7XG4gICAgbGV0IHRvcCA9IChzY3JlZW4uaGVpZ2h0IC8gMikgLSAyMDA7XG4gICAgbGV0IGxlZnQgPSAoc2NyZWVuLndpZHRoIC8gMikgLSAzMjA7XG4gICAgd2luZG93Lm9wZW4oXG4gICAgICAgIGhyZWYsXG4gICAgICAgICdTaGFyZScsXG4gICAgICAgICdoZWlnaHQ9NDAwLCB3aWR0aD02NDAsIHRvb2xiYXI9bm8sIG1lbnViYXI9bm8sIHNjcm9sbGJhcnM9bm8sIHJlc2l6YWJsZT15ZXMsIGxvY2F0aW9uPW5vLCBkaXJlY3Rvcmllcz1ubywgc3RhdHVzPW5vLCB0b3A9JyArIHRvcC50b1N0cmluZygpICsgJywgbGVmdD0nICsgbGVmdC50b1N0cmluZygpXG4gICAgKTtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQXJjaGl2ZS9hc3NldHMvc3JjL2phdmFzY3JpcHRzL21vZHVsZXMvc2hhcmUuanMiXSwic291cmNlUm9vdCI6IiJ9