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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYzdmZWMxZmJiM2YxODNjOWQyMTciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NyYy9qYXZhc2NyaXB0cy9jb21tb24uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NyYy9qYXZhc2NyaXB0cy9tb2R1bGVzL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NyYy9qYXZhc2NyaXB0cy9tb2R1bGVzL3BvcHVwLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImpRdWVyeVwiIiwid2VicGFjazovLy8uL2Fzc2V0cy9zcmMvamF2YXNjcmlwdHMvbW9kdWxlcy92YXJpYXRpb25zLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zcmMvamF2YXNjcmlwdHMvbW9kdWxlcy92YWxpZGF0aW9uLmpzIl0sIm5hbWVzIjpbIiQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJiaW5kIiwiJCQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiTm9kZSIsInByb3RvdHlwZSIsIm9uIiwid2luZG93IiwibmFtZSIsImZuIiwiYWRkRXZlbnRMaXN0ZW5lciIsIk5vZGVMaXN0IiwiX19wcm90b19fIiwiQXJyYXkiLCJEb2N1bWVudCIsImZvckVhY2giLCJlbGVtIiwialF1ZXJ5Iiwic3R5bGUiLCJkaXNwbGF5IiwibmF2YmFyVG9EZWZhdWx0IiwiYmFja2dyb3VuZENvbG9yIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwibWVudUl0ZW0iLCJpIiwibGVuZ3RoIiwibmF2YmFyVG9GbG9hdCIsImFkZCIsInNldE5hdlN0eWxlIiwicGFnZVlPZmZzZXQiLCJ0b2dnbGVTZWN0aW9ucyIsImJ1dHRvbiIsImRhdGFBdHRyaWJ1dGUiLCJnZXRBdHRyaWJ1dGUiLCJzZWN0aW9uIiwiY29sbGFwc2VTZWN0aW9ucyIsImlkIiwidG9nZ2xlIiwiY2hlY2tvdXRCdG4iLCJlbCIsImRhdGFJRCIsInVzZXJDaG9pY2VUZXh0IiwiY2hvaWNlUHJpY2UiLCJnZXRFbGVtZW50QnlJZCIsImNvbnRlbnQiLCJ1c2VyQ2hvaWNlIiwiaW5uZXJIVE1MIiwib3V0ZXJXaWR0aCIsImNsaWNrIiwibGF6eVNjcm9sbCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJvZmZzZXQiLCJvZmZzZXRUb3AiLCJhbmltYXRlIiwic2Nyb2xsVG9wIiwic2VjdGlvbnMiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwic2VsZWN0T25DbGljayIsImNsaWNrZWRFbGVtZW50RGF0YUlkIiwiYWxsU2VsZWN0cyIsImlzTmFOIiwiaXRlbVNlbGVjdCIsInNlbGVjdERhdGEiLCJhdHRyaWJ1dGVzIiwiZGF0YSIsInZhbHVlIiwib3B0aW9ucyIsInNlbGVjdGVkSW5kZXgiLCJjb25zb2xlIiwibG9nIiwiY29tcGFyZSIsInByaW50UHJpY2UiLCJwcmludE1lc3NhZ2UiLCJjaGVja291dEJ1dHRvbiIsInBhcmFtZXRlciIsInNldEF0dHJpYnV0ZSIsImRpc2FibGVkIiwidmFyaWF0aW9ucyIsInZhcmlhdGlvbnNPYmplY3QiLCJkYXRhQnlJZCIsInZhcmlhdGlvbiIsInZhcmlhdGlvbnNXaXRob3V0UHJpY2UiLCJwcmljZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJhZGRUb0NhcnQiLCJjb250YWlucyIsImlucHV0TmFtZSIsImlucHV0TGFzdE5hbWUiLCJpbnB1dEVtYWlsIiwiaW5wdXRQaG9uZSIsInRpdGxlIiwidGV4dENvbnRlbnQiLCJwcmljZVRhZyIsInJhbmRvbUlkIiwiTWF0aCIsInRydW5jIiwicmFuZG9tIiwicHJvZHVjdERhdGEiLCJjcmVhdGVQb3N0IiwiWE1MSHR0cFJlcXVlc3QiLCJvcGVuIiwibG9jYXRpb24iLCJvcmlnaW4iLCJzZXRSZXF1ZXN0SGVhZGVyIiwid3BBcGlTZXR0aW5ncyIsIm5vbmNlIiwic2VuZCIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsInJlYWR5U3RhdGUiLCJzdGF0dXMiLCJzdGF0dXNUZXh0IiwiYWxlcnQiLCJ2YWxpZGF0b3IiLCJDb25zdHJ1Y3RvciIs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Q0FBWSxLQUFLeUMsTUFBakI7QUFDQSxpQkFBSSxLQUFLQSxNQUFMLEtBQWdCLEdBQXBCLEVBQXlCO0FBQ3JCMUMseUJBQVFDLEdBQVIsQ0FBWSxjQUFjLEtBQUt5QyxNQUFuQixHQUE0QixHQUE1QixHQUFrQyxLQUFLQyxVQUFuRDtBQUNBO0FBQ0g7O0FBRUQsaUJBQUksS0FBS0YsVUFBTCxLQUFvQixDQUF4QixFQUEyQjtBQUN2QixxQkFBSSxLQUFLQyxNQUFMLEtBQWdCLEdBQXBCLEVBQXlCO0FBQ3JCMUMsNkJBQVFDLEdBQVIsQ0FBWSxLQUFLMEMsVUFBTCxHQUFrQixxQkFBOUI7QUFDQUMsMkJBQU0sS0FBS0QsVUFBTCxHQUFrQixxQkFBeEI7QUFDSDtBQUNKO0FBQ0osVUFmRDtBQWdCSCxNQTdERDtBQThESCxFOzs7Ozs7Ozs7Ozs7QUNqSkQ7Ozs7OzttQkFFZSxZQUFNO0FBQ2pCM0MsYUFBUUMsR0FBUixDQUFZLDZCQUFaLEVBQTJDdkQsT0FBT1IsRUFBUCxDQUFVMkcsU0FBVixDQUFvQkMsV0FBcEIsQ0FBZ0NDLE9BQTNFO0FBQ0EsMkJBQUUsTUFBRixFQUFVRixTQUFWLENBQW9CO0FBQ2hCRyxnQkFBTztBQUNQO0FBRmdCLE1BQXBCO0FBSUgsRSIsImZpbGUiOiJjb21tb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBjN2ZlYzFmYmIzZjE4M2M5ZDIxNyIsIi8vIGltcG9ydCAkIGZyb20gXCJqcXVlcnlcIjtcblxuY29uc3QgJCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IuYmluZChkb2N1bWVudCk7XG5jb25zdCAkJCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwuYmluZChkb2N1bWVudCk7XG5cbk5vZGUucHJvdG90eXBlLm9uID0gd2luZG93Lm9uID0gZnVuY3Rpb24gKG5hbWUsIGZuKSB7XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKG5hbWUsIGZuKTtcbn07XG5cbk5vZGVMaXN0LnByb3RvdHlwZS5fX3Byb3RvX18gPSBBcnJheS5wcm90b3R5cGU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbk5vZGVMaXN0LnByb3RvdHlwZS5fX3Byb3RvX18gPSBEb2N1bWVudC5wcm90b3R5cGU7XG5cbk5vZGVMaXN0LnByb3RvdHlwZS5vbiA9IE5vZGVMaXN0LnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyID0gZnVuY3Rpb24gKG5hbWUsIGZuKSB7XG4gICAgdGhpcy5mb3JFYWNoKChlbGVtKSA9PiB7XG4gICAgICAgIGVsZW0ub24obmFtZSwgZm4pO1xuICAgIH0pO1xufTtcbi8vZXhwb3J0IHskLCAkJH07XG5cbmltcG9ydCBtYWluIGZyb20gXCIuL21vZHVsZXMvbWFpblwiO1xuaW1wb3J0IHBvcHVwIGZyb20gXCIuL21vZHVsZXMvcG9wdXBcIjtcbmltcG9ydCB2YXJpYXRpb25zIGZyb20gXCIuL21vZHVsZXMvdmFyaWF0aW9uc1wiO1xuaW1wb3J0IHZhbGlkYXRpb24gZnJvbSBcIi4vbW9kdWxlcy92YWxpZGF0aW9uXCI7XG5cblxuLy8gaW1wb3J0IFwiLi9wbHVnaW5zL2luZmluaXRlLXNjcm9sbFwiO1xuXG5qUXVlcnkoZnVuY3Rpb24gKCkge1xuICAgIG1haW4oJCwgJCQpO1xuICAgIHBvcHVwKCk7XG4gICAgdmFyaWF0aW9ucygkKTtcbiAgICB2YWxpZGF0aW9uKCk7XG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvc3JjL2phdmFzY3JpcHRzL2NvbW1vbi5qcyIsIi8vIGltcG9ydCAkIGZyb20gXCJqcXVlcnlcIjtcblxuZXhwb3J0IGRlZmF1bHQgKCQsICQkKSA9PiB7XG5cbiAgICB3aW5kb3cub24oJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoJy5sb2FkZXJfaW5uZXInKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICQoJy5sb2FkZXInKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfSk7XG5cbiAgICBmdW5jdGlvbiBuYXZiYXJUb0RlZmF1bHQoKSB7XG4gICAgICAgICQoJy5uYXZiYXItZGVmYXVsdCcpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd0cmFuc3BhcmVudCc7XG4gICAgICAgICQoJy5uYXZiYXItYnJhbmQgaW1nJykuY2xhc3NMaXN0LnJlbW92ZSgnaW1nX3Jlc3BvbnNpdmUnKTtcbiAgICAgICAgJCgnLm5hdmJhci1maXhlZC10b3AnKS5jbGFzc0xpc3QucmVtb3ZlKCd0b3AtbmF2LWNvbGxhcHNlJyk7XG4gICAgICAgIGxldCBtZW51SXRlbSA9ICQkKCcubmF2YmFyLW5hdiBhJyk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWVudUl0ZW0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIG1lbnVJdGVtW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ3doaXRlJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBuYXZiYXJUb0Zsb2F0KCkge1xuICAgICAgICAkKCcubmF2YmFyLWRlZmF1bHQnKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmdiYSg0OCwgNDgsIDQ4LCAwLjUpJztcbiAgICAgICAgJCgnLm5hdmJhci1kZWZhdWx0JykuY2xhc3NMaXN0LmFkZCgndG9wLW5hdi1jb2xsYXBzZScpO1xuICAgICAgICAkKCcubmF2YmFyLWJyYW5kIGltZycpLmNsYXNzTGlzdC5hZGQoJ2ltZ19yZXNwb25zaXZlJyk7XG4gICAgICAgIGxldCBtZW51SXRlbSA9ICQkKCcubmF2YmFyLW5hdiBhJyk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWVudUl0ZW0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIG1lbnVJdGVtW2ldLmNsYXNzTGlzdC5hZGQoJ3doaXRlJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXROYXZTdHlsZSgpIHtcbiAgICAgICAgbmF2YmFyVG9GbG9hdCgpO1xuICAgICAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0IDwgNTApIHtcbiAgICAgICAgICAgIG5hdmJhclRvRGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgd2luZG93LnRvZ2dsZVNlY3Rpb25zID0gZnVuY3Rpb24gKGJ1dHRvbikge1xuICAgICAgICAkKCcuY2xvc2UtYnRuJykuY2xhc3NMaXN0LmFkZCgnc2hvd2luZycpO1xuICAgICAgICBpZiAoJCQoJy5jb2xsYXBzZS1zZWN0aW9uLnNob3dpbmcnKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICQoJy5jbG9zZS1idG4nKS5jbGFzc0xpc3QucmVtb3ZlKCdzaG93aW5nJyk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBkYXRhQXR0cmlidXRlID0gYnV0dG9uLmdldEF0dHJpYnV0ZSgnZGF0YS1hdHRyJyk7XG4gICAgICAgIGxldCBzZWN0aW9uID0gJCgnI3NlY3Rpb24tJyArIGRhdGFBdHRyaWJ1dGUpO1xuICAgICAgICAvLyBzZWN0aW9uLm9mZnNldFRvcCA9IDIwO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhzZWN0aW9uLm9mZnNldFRvcCk7XG4gICAgICAgIGxldCBjb2xsYXBzZVNlY3Rpb25zID0gJCQoJy5jb2xsYXBzZS1zZWN0aW9uJyk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29sbGFwc2VTZWN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKCEoY29sbGFwc2VTZWN0aW9uc1tpXS5pZCA9PT0gc2VjdGlvbi5pZCkpIHtcbiAgICAgICAgICAgICAgICBjb2xsYXBzZVNlY3Rpb25zW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3dpbmcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzZWN0aW9uLmNsYXNzTGlzdC50b2dnbGUoJ3Nob3dpbmcnKTtcbiAgICAgICAgaWYgKCQkKCcuY29sbGFwc2Utc2VjdGlvbi5zaG93aW5nJykubGVuZ3RoKSB7XG4gICAgICAgICAgICAkKCcuY2xvc2UtYnRuJykuY2xhc3NMaXN0LmFkZCgnc2hvd2luZycpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHdpbmRvdy5jaGVja291dEJ0biA9IGZ1bmN0aW9uIChlbCkge1xuXG4gICAgICAgIGxldCBkYXRhSUQgPSBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtY2hlY2tvdXQnKTtcbiAgICAgICAgbGV0IHVzZXJDaG9pY2VUZXh0ID0gJCgnI3NlY3Rpb24tJyArIGRhdGFJRCArICcgLnVzZXItY2hvaWNlJyk7XG4gICAgICAgIGxldCBjaG9pY2VQcmljZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRhdGFJRCArICctcHJpY2UnKS5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJpY2UnKTtcbiAgICAgICAgbGV0IGNvbnRlbnQgPSAnJztcbiAgICAgICAgZm9yIChsZXQgaSBpbiB1c2VyQ2hvaWNlKSB7XG4gICAgICAgICAgICBjb250ZW50ICs9IFwiPHA+XCIgKyBpICsgXCI6IFwiICsgdXNlckNob2ljZVtpXSArIFwiPC9wPlwiO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRlbnQgKz0gXCI8cD5QcmljZTogXCIgKyBjaG9pY2VQcmljZTtcbiAgICAgICAgdXNlckNob2ljZVRleHQuaW5uZXJIVE1MID0gY29udGVudDtcbiAgICB9O1xuXG4gICAgd2luZG93Lm9uKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBzZXROYXZTdHlsZSgpO1xuICAgICAgICAvL05hdmJhciBzdHlsZSBzd2l0Y2hlclxuICAgICAgICB3aW5kb3cub24oJ3Njcm9sbCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHNldE5hdlN0eWxlKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh3aW5kb3cub3V0ZXJXaWR0aCA8IDc2OCkge1xuXG4gICAgICAgICAgICAvL1NBTkRXSUNIIEJVVFRPTlxuICAgICAgICAgICAgJCgnLm5hdmJhci10b2dnbGUnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgbmF2YmFyVG9GbG9hdCgpO1xuICAgICAgICAgICAgICAgICQoJy5zYW5kd2ljaCcpLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vSElERSBNRU5VIENMSUNLSU5HIExJXG4gICAgICAgICAgICAkJCgnLm5hdmJhci1jb2xsYXBzZSB1bCBsaSBhJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICQoJy5uYXZiYXItdG9nZ2xlJykuY2xpY2soKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9MQVpZIEFOSU1BVElORyBGT1IgQlVUVE9OUyBBTkQgTUVOVSBJVEVNU1xuICAgICAgICAkJCgnLnNjcm9sbF9idG4nKS5vbignY2xpY2snLCBsYXp5U2Nyb2xsKTtcbiAgICAgICAgJCQoJy5uYXYgYScpLm9uKCdjbGljaycsIGxhenlTY3JvbGwpO1xuXG4gICAgICAgIGZ1bmN0aW9uIGxhenlTY3JvbGwoKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgbGV0IGlkID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcbiAgICAgICAgICAgIGxldCBvZmZzZXQgPSAkKGlkKS5vZmZzZXRUb3A7XG4gICAgICAgICAgICAvL2RvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdodG1sJylbMF0uYW5pbWF0ZSh7XG4gICAgICAgICAgICBpZiAoaWQgPT09IFwiI2Nob29zZVwiKSB7XG4gICAgICAgICAgICAgICAgb2Zmc2V0IC09IDUwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBqUXVlcnkoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICBzY3JvbGxUb3A6IG9mZnNldFxuICAgICAgICAgICAgfSwgNzAwKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGZ1bmN0aW9uIGxhenlTY3JvbGwoKSB7XG4gICAgICAgIC8vICAgICAgICAgbGV0IGlkID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcbiAgICAgICAgLy8gICAgICAgICBsZXQgb2Zmc2V0ID0gJChpZCkub2Zmc2V0VG9wO1xuICAgICAgICAvLyAgICAgaWYgKHRoaXMuaGFzaCAhPT0gXCJcIikge1xuICAgICAgICAvLyAgICAgICAgIC8vIFByZXZlbnQgZGVmYXVsdCBhbmNob3IgY2xpY2sgYmVoYXZpb3JcbiAgICAgICAgLy8gICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAvL1xuICAgICAgICAvLyAgICAgICAgIC8vIFN0b3JlIGhhc2hcbiAgICAgICAgLy8gICAgICAgICB2YXIgaGFzaCA9IHRoaXMuaGFzaDtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gICAgICAgICAvLyBVc2luZyBqUXVlcnkncyBhbmltYXRlKCkgbWV0aG9kIHRvIGFkZCBzbW9vdGggcGFnZSBzY3JvbGxcbiAgICAgICAgLy8gICAgICAgICAvLyBUaGUgb3B0aW9uYWwgbnVtYmVyICg4MDApIHNwZWNpZmllcyB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBpdCB0YWtlcyB0byBzY3JvbGwgdG8gdGhlIHNwZWNpZmllZCBhcmVhXG4gICAgICAgIC8vICAgICAgICAgalF1ZXJ5KCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XG4gICAgICAgIC8vICAgICAgICAgICAgIHNjcm9sbFRvcDogb2Zmc2V0XG4gICAgICAgIC8vICAgICAgICAgfSwgMzAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vXG4gICAgICAgIC8vICAgICAgICAgICAgIC8vIEFkZCBoYXNoICgjKSB0byBVUkwgd2hlbiBkb25lIHNjcm9sbGluZyAoZGVmYXVsdCBjbGljayBiZWhhdmlvcilcbiAgICAgICAgLy8gICAgICAgICAgICAgLy93aW5kb3cubG9jYXRpb24uaGFzaCA9IGhhc2g7XG4gICAgICAgIC8vICAgICAgICAgfSk7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH1cblxuICAgICAgICAvLyBNYWtlIHN1cmUgdGhpcy5oYXNoIGhhcyBhIHZhbHVlIGJlZm9yZSBvdmVycmlkaW5nIGRlZmF1bHQgYmVoYXZpb3JcblxuXG4gICAgICAgICQoJy5jbG9zZS1idG4nKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBsZXQgc2VjdGlvbnMgPSAkJCgnLmNvbGxhcHNlLXNlY3Rpb24nKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VjdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBzZWN0aW9uc1tpXS5jbGFzc0xpc3QucmVtb3ZlKCdzaG93aW5nJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3dpbmcnKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL3NyYy9qYXZhc2NyaXB0cy9tb2R1bGVzL21haW4uanMiLCJpbXBvcnQgJCBmcm9tIFwianF1ZXJ5XCI7XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgICAkKCcjbmV4dC1wZXJzb25hbCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnI2pzLXByb2R1Y3QtaW5mbycpLmFkZENsYXNzKCdzbGlkZS1vdXQtbGVmdCcpO1xuICAgICAgICAkKCcjanMtcGVyc29uYWwtaW5mbycpLmFkZENsYXNzKCdzbGlkZS1pbi1yaWdodCcpO1xuICAgIH0pO1xuICAgICQoJyNwcmV2LXByb2R1Y3QtaW5mbycpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnI2pzLXBlcnNvbmFsLWluZm8nKS5yZW1vdmVDbGFzcygnc2xpZGUtaW4tcmlnaHQnKTtcbiAgICAgICAgJCgnI2pzLXByb2R1Y3QtaW5mbycpLnJlbW92ZUNsYXNzKCdzbGlkZS1vdXQtbGVmdCcpO1xuICAgIH0pO1xufTtcblxuXG5cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL3NyYy9qYXZhc2NyaXB0cy9tb2R1bGVzL3BvcHVwLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBqUXVlcnk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJqUXVlcnlcIlxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBpbXBvcnQgJCBmcm9tIFwianF1ZXJ5XCI7XG5cbmV4cG9ydCBkZWZhdWx0ICgkKSA9PiB7XG4gICAgd2luZG93LnVzZXJDaG9pY2UgPSB7fTtcblxuICAgIHdpbmRvdy5zZWxlY3RPbkNsaWNrID0gZnVuY3Rpb24gKGVsKSB7XG5cbiAgICAgICAgbGV0IGNsaWNrZWRFbGVtZW50RGF0YUlkID0gZWwuZ2V0QXR0cmlidXRlKCdkYXRhJyk7XG4gICAgICAgIGxldCBhbGxTZWxlY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGFdJyk7XG5cbiAgICAgICAgZm9yIChsZXQgaSBpbiBhbGxTZWxlY3RzKSB7XG5cbiAgICAgICAgICAgIGlmIChpc05hTihpKSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgaXRlbVNlbGVjdCA9IGFsbFNlbGVjdHNbaV07XG4gICAgICAgICAgICBsZXQgc2VsZWN0RGF0YSA9IGl0ZW1TZWxlY3QuYXR0cmlidXRlcy5kYXRhLnZhbHVlO1xuXG4gICAgICAgICAgICBpZiAoc2VsZWN0RGF0YSA9PT0gY2xpY2tlZEVsZW1lbnREYXRhSWQpIHtcbiAgICAgICAgICAgICAgICB1c2VyQ2hvaWNlW2l0ZW1TZWxlY3QubmFtZV0gPSBpdGVtU2VsZWN0Lm9wdGlvbnNbaXRlbVNlbGVjdC5zZWxlY3RlZEluZGV4XS52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKCdUaGlzIGlzIHVzZXIgY2hvaWNlJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKHVzZXJDaG9pY2UpO1xuXG4gICAgICAgIGNvbXBhcmUodXNlckNob2ljZSwgY2xpY2tlZEVsZW1lbnREYXRhSWQpO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBjb21wYXJlKHVzZXJDaG9pY2UsIGRhdGFJRCkge1xuXG4gICAgICAgIGxldCBwcmludFByaWNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZGF0YUlEICsgJy1wcmljZScpO1xuICAgICAgICBsZXQgcHJpbnRNZXNzYWdlID0gJCgnI21lc3NhZ2UtJyArIGRhdGFJRCk7XG4gICAgICAgIGxldCBjaGVja291dEJ1dHRvbiA9ICQoXCIjc2VjdGlvbi1cIiArIGRhdGFJRCArIFwiIGJ1dHRvbltkYXRhLXNsaWRlPSduZXh0J11cIik7XG5cbiAgICAgICAgZm9yIChsZXQgcGFyYW1ldGVyIGluIHVzZXJDaG9pY2UpIHtcbiAgICAgICAgICAgIGlmICh1c2VyQ2hvaWNlW3BhcmFtZXRlcl0gPT09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICBwcmludFByaWNlLnNldEF0dHJpYnV0ZSgnZGF0YS1wcmljZScsICcnKTtcbiAgICAgICAgICAgICAgICBwcmludFByaWNlLmlubmVySFRNTCA9IFwiJm5ic3A7XCI7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1NlbGVjdCB0aGUgJyArIHBhcmFtZXRlcik7XG4gICAgICAgICAgICAgICAgcHJpbnRNZXNzYWdlLmlubmVySFRNTCA9ICdTZWxlY3QgdGhlICcgKyBwYXJhbWV0ZXI7XG4gICAgICAgICAgICAgICAgY2hlY2tvdXRCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB2YXJpYXRpb25zID0gdmFyaWF0aW9uc09iamVjdC5kYXRhQnlJZFtkYXRhSURdO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCdUaGlzIGlzIFZhcmlhdGlvbnMnKTtcbiAgICAgICAgY29uc29sZS5sb2codmFyaWF0aW9ucyk7XG5cbiAgICAgICAgZm9yIChsZXQgaSBpbiB2YXJpYXRpb25zKSB7XG4gICAgICAgICAgICBsZXQgdmFyaWF0aW9uID0gdmFyaWF0aW9uc1tpXTtcbiAgICAgICAgICAgIGxldCB2YXJpYXRpb25zV2l0aG91dFByaWNlID0ge307XG5cbiAgICAgICAgICAgIGZvciAobGV0IHBhcmFtZXRlciBpbiB2YXJpYXRpb24pIHtcbiAgICAgICAgICAgICAgICB2YXJpYXRpb25zV2l0aG91dFByaWNlW3BhcmFtZXRlcl0gPSB2YXJpYXRpb25bcGFyYW1ldGVyXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZGVsZXRlIHZhcmlhdGlvbnNXaXRob3V0UHJpY2UucHJpY2U7XG5cbiAgICAgICAgICAgIGlmIChKU09OLnN0cmluZ2lmeSh1c2VyQ2hvaWNlKSA9PT0gSlNPTi5zdHJpbmdpZnkodmFyaWF0aW9uc1dpdGhvdXRQcmljZSkpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh2YXJpYXRpb24ucHJpY2UpO1xuICAgICAgICAgICAgICAgIHByaW50UHJpY2Uuc2V0QXR0cmlidXRlKCdkYXRhLXByaWNlJywgdmFyaWF0aW9uLnByaWNlKTtcbiAgICAgICAgICAgICAgICBwcmludFByaWNlLmlubmVySFRNTCA9ICc8aDMgY2xhc3M9XCJyZWQtcHJpY2VcIj4nICsgdmFyaWF0aW9uLnByaWNlICsgJyQ8L2gzPic7XG4gICAgICAgICAgICAgICAgcHJpbnRNZXNzYWdlLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgICAgICAgICAgY2hlY2tvdXRCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHByaW50UHJpY2Uuc2V0QXR0cmlidXRlKCdkYXRhLXByaWNlJywgJycpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdWYXJpYXRpb24gaXMgbm90IGZvdW5kJyk7XG4gICAgICAgICAgICAgICAgcHJpbnRQcmljZS5pbm5lckhUTUwgPSAnPGgzPi0gLTwvaDM+JztcbiAgICAgICAgICAgICAgICBwcmludE1lc3NhZ2UuaW5uZXJIVE1MID0gJ1ZhcmlhdGlvbiBpcyBub3QgZm91bmQnO1xuICAgICAgICAgICAgICAgIGNoZWNrb3V0QnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuLy9DbGljayB0byBDaGVja291dCAtIFNsaWRlIGJ1dHRvblxuXG5cbi8vQ3JlYXRlIG5ldyBwb3N0XG4gICAgd2luZG93LmFkZFRvQ2FydCA9IGZ1bmN0aW9uIChlbCkge1xuXG4gICAgICAgIGlmIChlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2Rpc2FibGVkJykpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBjbGlja2VkRWxlbWVudERhdGFJZCA9IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1hdHRyJyk7XG4gICAgICAgIGxldCBpbnB1dE5hbWUgPSAkKCcjZm9ybS0nICsgY2xpY2tlZEVsZW1lbnREYXRhSWQgKyAnIGlucHV0W25hbWU9XCJmaXJzdF9uYW1lXCJdJyk7XG4gICAgICAgIGxldCBpbnB1dExhc3ROYW1lID0gJCgnI2Zvcm0tJyArIGNsaWNrZWRFbGVtZW50RGF0YUlkICsgJyBpbnB1dFtuYW1lPVwibGFzdF9uYW1lXCJdJyk7XG4gICAgICAgIGxldCBpbnB1dEVtYWlsID0gJCgnI2Zvcm0tJyArIGNsaWNrZWRFbGVtZW50RGF0YUlkICsgJyBpbnB1dFtuYW1lPVwiZW1haWxcIl0nKTtcbiAgICAgICAgbGV0IGlucHV0UGhvbmUgPSAkKCcjZm9ybS0nICsgY2xpY2tlZEVsZW1lbnREYXRhSWQgKyAnIGlucHV0W25hbWU9XCJwaG9uZVwiXScpO1xuXG4gICAgICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsLm5hbWUpLnRleHRDb250ZW50O1xuXG4gICAgICAgIGxldCBwcmljZVRhZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNsaWNrZWRFbGVtZW50RGF0YUlkICsgJy1wcmljZScpO1xuICAgICAgICBsZXQgcHJpY2UgPSBwcmljZVRhZy5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJpY2UnKTtcbiAgICAgICAgbGV0IHJhbmRvbUlkID0gTWF0aC50cnVuYygoTWF0aC5yYW5kb20oKSoxMDAwMDApKTtcbiAgICAgICAgbGV0IHByb2R1Y3REYXRhID0ge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiB0aXRsZSArICcgWycgKyByYW5kb21JZCArICddJyxcbiAgICAgICAgICAgIFwiY29udGVudFwiOiBKU09OLnN0cmluZ2lmeSh1c2VyQ2hvaWNlKSArICd7XCJwcmljZVwiOicgKyBwcmljZSArICd9JyxcbiAgICAgICAgICAgIFwic3RhdHVzXCI6ICdwdWJsaXNoJ1xuICAgICAgICB9O1xuXG4gICAgICAgIGZvciAobGV0IGkgaW4gdXNlckNob2ljZSkge1xuICAgICAgICAgICAgcHJvZHVjdERhdGFbJ3BhcmFtXycgKyBpXSA9IHVzZXJDaG9pY2VbaV07XG4gICAgICAgIH1cblxuICAgICAgICBwcm9kdWN0RGF0YVsncGFyYW1fcHJpY2UnXSA9IHByaWNlO1xuXG4gICAgICAgIHByb2R1Y3REYXRhWydpbmZvX2ZpcnN0X25hbWUnXSA9IGlucHV0TmFtZS52YWx1ZTtcbiAgICAgICAgcHJvZHVjdERhdGFbJ2luZm9fbGFzdF9uYW1lJ10gPSBpbnB1dExhc3ROYW1lLnZhbHVlO1xuICAgICAgICBwcm9kdWN0RGF0YVsnaW5mb19lbWFpbCddID0gaW5wdXRFbWFpbC52YWx1ZTtcbiAgICAgICAgcHJvZHVjdERhdGFbJ2luZm9fcGhvbmUnXSA9IGlucHV0UGhvbmUudmFsdWU7XG5cbiAgICAgICAgY29uc29sZS5sb2cocHJvZHVjdERhdGEpO1xuXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgbGV0IGNyZWF0ZVBvc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgY3JlYXRlUG9zdC5vcGVuKCdQT1NUJywgbG9jYXRpb24ub3JpZ2luICsgJy93cC1qc29uL3dwL3YyL3Nob3Bfb3JkZXInLCB0cnVlKTtcbiAgICAgICAgY3JlYXRlUG9zdC5zZXRSZXF1ZXN0SGVhZGVyKCdYLVdQLU5vbmNlJywgd3BBcGlTZXR0aW5ncy5ub25jZSk7XG4gICAgICAgIC8vIHZhciBCYXNlNjQ9e19rZXlTdHI6XCJBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvPVwiLGVuY29kZTpmdW5jdGlvbihlKXt2YXIgdD1cIlwiO3ZhciBuLHIsaSxzLG8sdSxhO3ZhciBmPTA7ZT1CYXNlNjQuX3V0ZjhfZW5jb2RlKGUpO3doaWxlKGY8ZS5sZW5ndGgpe249ZS5jaGFyQ29kZUF0KGYrKyk7cj1lLmNoYXJDb2RlQXQoZisrKTtpPWUuY2hhckNvZGVBdChmKyspO3M9bj4+MjtvPShuJjMpPDw0fHI+PjQ7dT0ociYxNSk8PDJ8aT4+NjthPWkmNjM7aWYoaXNOYU4ocikpe3U9YT02NH1lbHNlIGlmKGlzTmFOKGkpKXthPTY0fXQ9dCt0aGlzLl9rZXlTdHIuY2hhckF0KHMpK3RoaXMuX2tleVN0ci5jaGFyQXQobykrdGhpcy5fa2V5U3RyLmNoYXJBdCh1KSt0aGlzLl9rZXlTdHIuY2hhckF0KGEpfXJldHVybiB0fSxkZWNvZGU6ZnVuY3Rpb24oZSl7dmFyIHQ9XCJcIjt2YXIgbixyLGk7dmFyIHMsbyx1LGE7dmFyIGY9MDtlPWUucmVwbGFjZSgvW15BLVphLXowLTlcXCtcXC9cXD1dL2csXCJcIik7d2hpbGUoZjxlLmxlbmd0aCl7cz10aGlzLl9rZXlTdHIuaW5kZXhPZihlLmNoYXJBdChmKyspKTtvPXRoaXMuX2tleVN0ci5pbmRleE9mKGUuY2hhckF0KGYrKykpO3U9dGhpcy5fa2V5U3RyLmluZGV4T2YoZS5jaGFyQXQoZisrKSk7YT10aGlzLl9rZXlTdHIuaW5kZXhPZihlLmNoYXJBdChmKyspKTtuPXM8PDJ8bz4+NDtyPShvJjE1KTw8NHx1Pj4yO2k9KHUmMyk8PDZ8YTt0PXQrU3RyaW5nLmZyb21DaGFyQ29kZShuKTtpZih1IT02NCl7dD10K1N0cmluZy5mcm9tQ2hhckNvZGUocil9aWYoYSE9NjQpe3Q9dCtTdHJpbmcuZnJvbUNoYXJDb2RlKGkpfX10PUJhc2U2NC5fdXRmOF9kZWNvZGUodCk7cmV0dXJuIHR9LF91dGY4X2VuY29kZTpmdW5jdGlvbihlKXtlPWUucmVwbGFjZSgvXFxyXFxuL2csXCJcXG5cIik7dmFyIHQ9XCJcIjtmb3IodmFyIG49MDtuPGUubGVuZ3RoO24rKyl7dmFyIHI9ZS5jaGFyQ29kZUF0KG4pO2lmKHI8MTI4KXt0Kz1TdHJpbmcuZnJvbUNoYXJDb2RlKHIpfWVsc2UgaWYocj4xMjcmJnI8MjA0OCl7dCs9U3RyaW5nLmZyb21DaGFyQ29kZShyPj42fDE5Mik7dCs9U3RyaW5nLmZyb21DaGFyQ29kZShyJjYzfDEyOCl9ZWxzZXt0Kz1TdHJpbmcuZnJvbUNoYXJDb2RlKHI+PjEyfDIyNCk7dCs9U3RyaW5nLmZyb21DaGFyQ29kZShyPj42JjYzfDEyOCk7dCs9U3RyaW5nLmZyb21DaGFyQ29kZShyJjYzfDEyOCl9fXJldHVybiB0fSxfdXRmOF9kZWNvZGU6ZnVuY3Rpb24oZSl7dmFyIHQ9XCJcIjt2YXIgbj0wO3ZhciByPWMxPWMyPTA7d2hpbGUobjxlLmxlbmd0aCl7cj1lLmNoYXJDb2RlQXQobik7aWYocjwxMjgpe3QrPVN0cmluZy5mcm9tQ2hhckNvZGUocik7bisrfWVsc2UgaWYocj4xOTEmJnI8MjI0KXtjMj1lLmNoYXJDb2RlQXQobisxKTt0Kz1TdHJpbmcuZnJvbUNoYXJDb2RlKChyJjMxKTw8NnxjMiY2Myk7bis9Mn1lbHNle2MyPWUuY2hhckNvZGVBdChuKzEpO2MzPWUuY2hhckNvZGVBdChuKzIpO3QrPVN0cmluZy5mcm9tQ2hhckNvZGUoKHImMTUpPDwxMnwoYzImNjMpPDw2fGMzJjYzKTtuKz0zfX1yZXR1cm4gdH19O1xuICAgICAgICAvL2NyZWF0ZVBvc3Quc2V0UmVxdWVzdEhlYWRlciggJ0F1dGhvcml6YXRpb24nLCAnQmFzaWMgJyArIEJhc2U2NC5lbmNvZGUoICd0ZXN0OjAwMDAnICkgKTtcbiAgICAgICAgY3JlYXRlUG9zdC5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvbjtjaGFyc2V0PVVURi04XCIpO1xuICAgICAgICBjcmVhdGVQb3N0LnNlbmQoSlNPTi5zdHJpbmdpZnkocHJvZHVjdERhdGEpKTtcbiAgICAgICAgY3JlYXRlUG9zdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5yZWFkeVN0YXRlICE9PSA0KSByZXR1cm47XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnJlYWR5U3RhdGUpO1xuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0dXMpO1xuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdHVzICE9PSAyMDEpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnTm90IDIwMTogJyArIHRoaXMuc3RhdHVzICsgJyAnICsgdGhpcy5zdGF0dXNUZXh0KTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnJlYWR5U3RhdGUgPT09IDQpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0dXMgPT09IDIwMSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXR1c1RleHQgKyAnIHN0YXR1czogcG9zdCBhZGRlZCcpO1xuICAgICAgICAgICAgICAgICAgICBhbGVydCh0aGlzLnN0YXR1c1RleHQgKyAnIHN0YXR1czogcG9zdCBhZGRlZCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9O1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvc3JjL2phdmFzY3JpcHRzL21vZHVsZXMvdmFyaWF0aW9ucy5qcyIsImltcG9ydCAkIGZyb20gXCJqcXVlcnlcIjtcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiYm9vc3RyYXAtdmFsaWRhdG9yIHZlcnNpb246XCIsIGpRdWVyeS5mbi52YWxpZGF0b3IuQ29uc3RydWN0b3IuVkVSU0lPTik7XG4gICAgJCgnZm9ybScpLnZhbGlkYXRvcih7XG4gICAgICAgIGZvY3VzOiBmYWxzZSxcbiAgICAgICAgLy8gZGVsYXk6IDMwMDBcbiAgICB9KTtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL3NyYy9qYXZhc2NyaXB0cy9tb2R1bGVzL3ZhbGlkYXRpb24uanMiXSwic291cmNlUm9vdCI6IiJ9