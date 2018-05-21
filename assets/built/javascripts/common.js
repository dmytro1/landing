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
	
	var _checkoutBtn = __webpack_require__(3);
	
	var _checkoutBtn2 = _interopRequireDefault(_checkoutBtn);
	
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
	
	jQuery(function () {
	    (0, _main2.default)($, $$);
	    (0, _toggleChooseSections2.default)($, $$);
	    (0, _checkoutBtn2.default)($);
	    (0, _variations2.default)($);
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
	    window.toggleChooseSections = function (button) {
	        $('.close-btn').classList.add('showing');
	        if ($$('.collapse-section.showing').length) {
	            $('.close-btn').classList.remove('showing');
	        }
	
	        var dataID = button.getAttribute('data-id');
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
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _main = __webpack_require__(1);
	
	var _main2 = _interopRequireDefault(_main);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function ($) {
	    window.checkoutBtn = function (el) {
	        MainMethods.scrollElem($("#choose").offsetTop - 50, 100);
	        var dataID = el.getAttribute('data-id');
	        var quantity = $('#section-' + dataID + ' .quantity');
	        var userChoiceText = $('#section-' + dataID + ' .user-choice');
	        var choicePrice = document.getElementById(dataID + '-price').getAttribute('data-price');
	        var content = '';
	        for (var i in choicePrice) {
	            content += "<p>" + i + ": " + choicePrice[i] + "</p>";
	        }
	        content += "<p>Price: " + choicePrice;
	        content += "<p>Quantity: " + quantity.value;
	        userChoiceText.innerHTML = content;
	    };
	};

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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _jquery = __webpack_require__(7);
	
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
/* 7 */
/***/ (function(module, exports) {

	module.exports = jQuery;

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMjY3MzgxOTI1MTFkOGUxZDA5YjYiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NyYy9qYXZhc2NyaXB0cy9jb21tb24uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NyYy9qYXZhc2NyaXB0cy9tb2R1bGVzL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NyYy9qYXZhc2NyaXB0cy9tb2R1bGVzL3RvZ2dsZUNob29zZVNlY3Rpb25zLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zcmMvamF2YXNjcmlwdHMvbW9kdWxlcy9jaGVja291dEJ0bi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3JjL2phdmFzY3JpcHRzL21vZHVsZXMvdmFyaWF0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3JjL2phdmFzY3JpcHRzL21vZHVsZXMvdmFsaWRhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3JjL2phdmFzY3JpcHRzL21vZHVsZXMvZ2FsbGVyeS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqUXVlcnlcIiJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYmluZCIsIiQkIiwicXVlcnlTZWxlY3RvckFsbCIsIk5vZGUiLCJwcm90b3R5cGUiLCJvbiIsIndpbmRvdyIsIm5hbWUiLCJmbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJOb2RlTGlzdCIsIl9fcHJvdG9fXyIsIkFycmF5IiwiRG9jdW1lbnQiLCJmb3JFYWNoIiwiZWxlbSIsImpRdWVyeSIsIk1haW5NZXRob2RzIiwic2Nyb2xsRWxlbSIsInByb3BlcnR5IiwiZHVyYXRpb24iLCJhbmltYXRlIiwic2Nyb2xsVG9wIiwibGF6eVNjcm9sbCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJpZCIsImdldEF0dHJpYnV0ZSIsIm9mZnNldCIsIm9mZnNldFRvcCIsIm5hdmJhclRvRGVmYXVsdCIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwibWVudUl0ZW0iLCJpIiwibGVuZ3RoIiwibmF2YmFyVG9GbG9hdCIsImFkZCIsInNldE5hdlN0eWxlIiwicGFnZVlPZmZzZXQiLCJkaXNwbGF5Iiwib3V0ZXJXaWR0aCIsInRvZ2dsZSIsImNsaWNrIiwic2VjdGlvbnMiLCJ0b2dnbGVDaG9vc2VTZWN0aW9ucyIsImJ1dHRvbiIsImRhdGFJRCIsInNlY3Rpb24iLCJjb2xsYXBzZVNlY3Rpb25zIiwiY2hlY2tvdXRCdG4iLCJlbCIsInF1YW50aXR5IiwidXNlckNob2ljZVRleHQiLCJjaG9pY2VQcmljZSIsImdldEVsZW1lbnRCeUlkIiwiY29udGVudCIsInZhbHVlIiwiaW5uZXJIVE1MIiwidXNlckNob2ljZSIsInNlbGVjdE9uQ2xpY2siLCJjbGlja2VkRWxlbWVudERhdGFJZCIsImFsbFNlbGVjdHMiLCJpc05hTiIsIml0ZW1TZWxlY3QiLCJzZWxlY3REYXRhIiwiYXR0cmlidXRlcyIsImRhdGEiLCJvcHRpb25zIiwic2VsZWN0ZWRJbmRleCIsImNvbnNvbGUiLCJsb2ciLCJjb21wYXJlIiwicHJpbnRQcmljZSIsInByaW50TWVzc2FnZSIsImNoZWNrb3V0QnV0dG9uIiwicGFyYW1ldGVyIiwic2V0QXR0cmlidXRlIiwiZGlzYWJsZWQiLCJ2YXJpYXRpb25zIiwidmFyaWF0aW9uc09iamVjdCIsImRhdGFCeUlkIiwidmFyaWF0aW9uIiwidmFyaWF0aW9uc1dpdGhvdXRQcmljZSIsInByaWNlIiwiSlNPTiIsInN0cmluZ2lmeSIsImFkZFRvQ2FydCIsImNvbnRhaW5zIiwiZWxlbWVudEhyZWYiLCJ1c2VyT3JkZXJUZXh0IiwiaW5wdXROYW1lIiwiaW5wdXRMYXN0TmFtZSIsImlucHV0RW1haWwiLCJpbnB1dFBob25lIiwidGl0bGUiLCJ0ZXh0Q29udGVudCIsInByaWNlVGFnIiwicmFuZG9tSWQiLCJNYXRoIiwidHJ1bmMiLCJyYW5kb20iLCJwcm9kdWN0RGF0YSIsInBhcmFtX3ByaWNlIiwiaW5mb19maXJzdF9uYW1lIiwiaW5mb19sYXN0X25hbWUiLCJpbmZvX3Bob25lIiwiZmV0Y2giLCJib2R5IiwiaGVhZGVycyIsIndwQXBpU2V0dGluZ3MiLCJub25jZSIsIm1ldGhvZCIsInRoZW4iLCJyZXNwb25zZSIsInN0YXR1cyIsInN0YXR1c1RleHQiLCJhbGVydCIsImNhcm91c2VsIiwiY2F0Y2giLCJ2YWxpZGF0b3IiLCJDb25zdHJ1Y3RvciIsIlZFUlNJT04iLCJmb2N1cyIsIkdhbGxlcnkiLCJ6b29tIiwiaW1nQ29udGFpbmVyIiwiaW1nIiwiZ2FsbGVyeSIsImNvbnRhaW5lckhlaWdodCIsIm91dGVySGVpZ2h0IiwiaGFzQ2xhc3MiLCJjc3MiLCJhZGRDbGFzcyIsImRyYWdnYWJsZSIsImRyYWciLCJ1aSIsInBvc2l0aW9uIiwibGVmdCIsIm1pbiIsInRvcCIsInJlbW92ZUNsYXNzIiwic3dpdGNoIiwidHJpZ2dlciIsInNyYyIsImF0dHIiLCJ0aHVtYnMiLCJzaWJsaW5ncyIsInBhcmVudCIsInByZXYiLCJjaGlsZHJlbiIsImVhY2giLCJ0cmlnZ2VyRGF0YSIsImdhbGxlcnlJZCIsImRlbGVnYXRlVGFyZ2V0Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7O0FDbkJBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBeEJBOztBQUVBLEtBQU1BLElBQUlDLFNBQVNDLGFBQVQsQ0FBdUJDLElBQXZCLENBQTRCRixRQUE1QixDQUFWO0FBQ0EsS0FBTUcsS0FBS0gsU0FBU0ksZ0JBQVQsQ0FBMEJGLElBQTFCLENBQStCRixRQUEvQixDQUFYOztBQUVBSyxNQUFLQyxTQUFM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MkJDLEdBQTNCLEVBQWdDQyxPQUFoQztBQUNILFVBSkQsTUFJTyxJQUFJd0IsZ0JBQWdCLE9BQXBCLEVBQTZCO0FBQ2hDLGlCQUFJMUIsZ0JBQWVpQixRQUFRSyxNQUFSLEdBQWlCRCxRQUFqQixFQUFuQjtBQUNBdkIscUJBQVFrQixNQUFSLENBQWVDLE9BQWYsRUFBd0JqQixhQUF4QixFQUFzQ0UsT0FBdEM7QUFDSCxVQUhNLE1BR0E7QUFDSDtBQUNIO0FBQ0QxRyxlQUFNQyxjQUFOO0FBQ0gsTUFqQkQ7QUFrQkgsRTs7Ozs7O0FDL0RELHlCIiwiZmlsZSI6ImNvbW1vbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDI2NzM4MTkyNTExZDhlMWQwOWI2IiwiLy8gaW1wb3J0ICQgZnJvbSBcImpxdWVyeVwiO1xyXG5cclxuY29uc3QgJCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IuYmluZChkb2N1bWVudCk7XHJcbmNvbnN0ICQkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbC5iaW5kKGRvY3VtZW50KTtcclxuXHJcbk5vZGUucHJvdG90eXBlLm9uID0gd2luZG93Lm9uID0gZnVuY3Rpb24gKG5hbWUsIGZuKSB7XHJcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIobmFtZSwgZm4pO1xyXG59O1xyXG5cclxuTm9kZUxpc3QucHJvdG90eXBlLl9fcHJvdG9fXyA9IEFycmF5LnByb3RvdHlwZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxyXG5Ob2RlTGlzdC5wcm90b3R5cGUuX19wcm90b19fID0gRG9jdW1lbnQucHJvdG90eXBlO1xyXG5cclxuTm9kZUxpc3QucHJvdG90eXBlLm9uID0gTm9kZUxpc3QucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbiAobmFtZSwgZm4pIHtcclxuICAgIHRoaXMuZm9yRWFjaCgoZWxlbSkgPT4ge1xyXG4gICAgICAgIGVsZW0ub24obmFtZSwgZm4pO1xyXG4gICAgfSk7XHJcbn07XHJcbi8vZXhwb3J0IHskLCAkJH07XHJcblxyXG5pbXBvcnQgbWFpbiBmcm9tIFwiLi9tb2R1bGVzL21haW5cIjtcclxuaW1wb3J0IHRvZ2dsZUNob29zZVNlY3Rpb25zIGZyb20gXCIuL21vZHVsZXMvdG9nZ2xlQ2hvb3NlU2VjdGlvbnNcIjtcclxuaW1wb3J0IGNoZWNrb3V0QnRuIGZyb20gXCIuL21vZHVsZXMvY2hlY2tvdXRCdG5cIjtcclxuaW1wb3J0IHZhcmlhdGlvbnMgZnJvbSBcIi4vbW9kdWxlcy92YXJpYXRpb25zXCI7XHJcbmltcG9ydCB2YWxpZGF0aW9uIGZyb20gXCIuL21vZHVsZXMvdmFsaWRhdGlvblwiO1xyXG5pbXBvcnQgZ2FsbGVyeSBmcm9tIFwiLi9tb2R1bGVzL2dhbGxlcnlcIjtcclxuXHJcblxyXG5qUXVlcnkoZnVuY3Rpb24gKCkge1xyXG4gICAgbWFpbigkLCAkJCk7XHJcbiAgICB0b2dnbGVDaG9vc2VTZWN0aW9ucygkLCAkJCk7XHJcbiAgICBjaGVja291dEJ0bigkKTtcclxuICAgIHZhcmlhdGlvbnMoJCk7XHJcbiAgICB2YWxpZGF0aW9uKCQpO1xyXG4gICAgZ2FsbGVyeSgpO1xyXG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvc3JjL2phdmFzY3JpcHRzL2NvbW1vbi5qcyIsIi8vIGltcG9ydCAkIGZyb20gXCJqcXVlcnlcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICgkLCAkJCkgPT4ge1xyXG5cclxuICAgIHdpbmRvdy5NYWluTWV0aG9kcyA9IHtcclxuICAgICAgICBzY3JvbGxFbGVtOiBmdW5jdGlvbiAocHJvcGVydHksIGR1cmF0aW9uKSB7XHJcbiAgICAgICAgICAgIGpRdWVyeSgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAgICAgc2Nyb2xsVG9wOiBwcm9wZXJ0eVxyXG4gICAgICAgICAgICB9LCBkdXJhdGlvbik7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBsYXp5U2Nyb2xsOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGxldCBpZCA9IHRoaXMuZ2V0QXR0cmlidXRlKCdocmVmJyk7XHJcbiAgICAgICAgICAgIGxldCBvZmZzZXQgPSAkKGlkKS5vZmZzZXRUb3A7XHJcbiAgICAgICAgICAgIC8vZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2h0bWwnKVswXS5hbmltYXRlKHtcclxuICAgICAgICAgICAgaWYgKGlkID09PSBcIiNjaG9vc2VcIikge1xyXG4gICAgICAgICAgICAgICAgb2Zmc2V0IC09IDUwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIE1haW5NZXRob2RzLnNjcm9sbEVsZW0ob2Zmc2V0LCA3MDApO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbmF2YmFyVG9EZWZhdWx0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICQoJy5uYXZiYXItZGVmYXVsdCcpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd0cmFuc3BhcmVudCc7XHJcbiAgICAgICAgICAgICQoJy5uYXZiYXItYnJhbmQgaW1nJykuY2xhc3NMaXN0LnJlbW92ZSgnaW1nX3Jlc3BvbnNpdmUnKTtcclxuICAgICAgICAgICAgJCgnLm5hdmJhci1maXhlZC10b3AnKS5jbGFzc0xpc3QucmVtb3ZlKCd0b3AtbmF2LWNvbGxhcHNlJyk7XHJcbiAgICAgICAgICAgIGxldCBtZW51SXRlbSA9ICQkKCcubmF2YmFyLW5hdiBhJyk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWVudUl0ZW0ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIG1lbnVJdGVtW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ3doaXRlJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIG5hdmJhclRvRmxvYXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJCgnLm5hdmJhci1kZWZhdWx0Jykuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JnYmEoNDgsIDQ4LCA0OCwgMC41KSc7XHJcbiAgICAgICAgICAgICQoJy5uYXZiYXItZGVmYXVsdCcpLmNsYXNzTGlzdC5hZGQoJ3RvcC1uYXYtY29sbGFwc2UnKTtcclxuICAgICAgICAgICAgJCgnLm5hdmJhci1icmFuZCBpbWcnKS5jbGFzc0xpc3QuYWRkKCdpbWdfcmVzcG9uc2l2ZScpO1xyXG4gICAgICAgICAgICBsZXQgbWVudUl0ZW0gPSAkJCgnLm5hdmJhci1uYXYgYScpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1lbnVJdGVtLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBtZW51SXRlbVtpXS5jbGFzc0xpc3QuYWRkKCd3aGl0ZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXROYXZTdHlsZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGlzLm5hdmJhclRvRmxvYXQoKTtcclxuICAgICAgICAgICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA8IDUwKSB7XHJcbiAgICAgICAgICAgICAgICBNYWluTWV0aG9kcy5uYXZiYXJUb0RlZmF1bHQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICB9O1xyXG5cclxuICAgIHdpbmRvdy5vbignbG9hZCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKCcubG9hZGVyX2lubmVyJykuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICQoJy5sb2FkZXInKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICB9KTtcclxuXHJcbiAgICB3aW5kb3cub24oJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy9OYXZiYXIgc3R5bGUgc3dpdGNoZXJcclxuICAgICAgICBNYWluTWV0aG9kcy5zZXROYXZTdHlsZSgpO1xyXG4gICAgICAgIHdpbmRvdy5vbignc2Nyb2xsJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBNYWluTWV0aG9kcy5zZXROYXZTdHlsZSgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvL0ZPUiBNT0JJTEVcclxuICAgICAgICBpZiAod2luZG93Lm91dGVyV2lkdGggPCA3NjgpIHtcclxuICAgICAgICAgICAgLy9TQU5EV0lDSCBCVVRUT05cclxuICAgICAgICAgICAgJCgnLm5hdmJhci10b2dnbGUnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBNYWluTWV0aG9kcy5uYXZiYXJUb0Zsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAkKCcuc2FuZHdpY2gnKS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvL0hJREUgTUVOVSBDTElDS0lORyBMSVxyXG4gICAgICAgICAgICAkJCgnLm5hdmJhci1jb2xsYXBzZSB1bCBsaSBhJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgJCgnLm5hdmJhci10b2dnbGUnKS5jbGljaygpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vTEFaWSBBTklNQVRJTkcgRk9SIEJVVFRPTlMgQU5EIE1FTlUgSVRFTVNcclxuICAgICAgICAkJCgnLnNjcm9sbF9idG4nKS5vbignY2xpY2snLCBNYWluTWV0aG9kcy5sYXp5U2Nyb2xsKTtcclxuICAgICAgICAkJCgnLm5hdiBhJykub24oJ2NsaWNrJywgTWFpbk1ldGhvZHMubGF6eVNjcm9sbCk7XHJcblxyXG4gICAgICAgIC8vQ0xPU0UgQlVUVE9OIFhcclxuICAgICAgICAkKCcuY2xvc2UtYnRuJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBsZXQgc2VjdGlvbnMgPSAkJCgnLmNvbGxhcHNlLXNlY3Rpb24nKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWN0aW9ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgc2VjdGlvbnNbaV0uY2xhc3NMaXN0LnJlbW92ZSgnc2hvd2luZycpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuY2xhc3NMaXN0LnJlbW92ZSgnc2hvd2luZycpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBqUXVlcnkoJ1tkYXRhLXNsaWRlPVwicHJldlwiXScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgTWFpbk1ldGhvZHMuc2Nyb2xsRWxlbSgkKFwiI2Nob29zZVwiKS5vZmZzZXRUb3AgLSA1MCwgMTAwKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9zcmMvamF2YXNjcmlwdHMvbW9kdWxlcy9tYWluLmpzIiwiZXhwb3J0IGRlZmF1bHQgKCQsICQkKSA9PiB7XHJcbiAgICB3aW5kb3cudG9nZ2xlQ2hvb3NlU2VjdGlvbnMgPSBmdW5jdGlvbiAoYnV0dG9uKSB7XHJcbiAgICAgICAgJCgnLmNsb3NlLWJ0bicpLmNsYXNzTGlzdC5hZGQoJ3Nob3dpbmcnKTtcclxuICAgICAgICBpZiAoJCQoJy5jb2xsYXBzZS1zZWN0aW9uLnNob3dpbmcnKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgJCgnLmNsb3NlLWJ0bicpLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3dpbmcnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBkYXRhSUQgPSBidXR0b24uZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XHJcbiAgICAgICAgbGV0IHNlY3Rpb24gPSAkKCcjc2VjdGlvbi0nICsgZGF0YUlEKTtcclxuICAgICAgICBsZXQgY29sbGFwc2VTZWN0aW9ucyA9ICQkKCcuY29sbGFwc2Utc2VjdGlvbicpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29sbGFwc2VTZWN0aW9ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoIShjb2xsYXBzZVNlY3Rpb25zW2ldLmlkID09PSBzZWN0aW9uLmlkKSkge1xyXG4gICAgICAgICAgICAgICAgY29sbGFwc2VTZWN0aW9uc1tpXS5jbGFzc0xpc3QucmVtb3ZlKCdzaG93aW5nJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgc2VjdGlvbi5jbGFzc0xpc3QudG9nZ2xlKCdzaG93aW5nJyk7XHJcbiAgICAgICAgaWYgKCQkKCcuY29sbGFwc2Utc2VjdGlvbi5zaG93aW5nJykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICQoJy5jbG9zZS1idG4nKS5jbGFzc0xpc3QuYWRkKCdzaG93aW5nJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9zcmMvamF2YXNjcmlwdHMvbW9kdWxlcy90b2dnbGVDaG9vc2VTZWN0aW9ucy5qcyIsImltcG9ydCBtYWluIGZyb20gXCIuLi9tb2R1bGVzL21haW5cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICgkKSA9PiB7XHJcbiAgICB3aW5kb3cuY2hlY2tvdXRCdG4gPSBmdW5jdGlvbiAoZWwpIHtcclxuICAgICAgICBNYWluTWV0aG9kcy5zY3JvbGxFbGVtKCQoXCIjY2hvb3NlXCIpLm9mZnNldFRvcCAtIDUwLCAxMDApO1xyXG4gICAgICAgIGxldCBkYXRhSUQgPSBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcclxuICAgICAgICBsZXQgcXVhbnRpdHkgPSAkKCcjc2VjdGlvbi0nICsgZGF0YUlEICsgJyAucXVhbnRpdHknKTtcclxuICAgICAgICBsZXQgdXNlckNob2ljZVRleHQgPSAkKCcjc2VjdGlvbi0nICsgZGF0YUlEICsgJyAudXNlci1jaG9pY2UnKTtcclxuICAgICAgICBsZXQgY2hvaWNlUHJpY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkYXRhSUQgKyAnLXByaWNlJykuZ2V0QXR0cmlidXRlKCdkYXRhLXByaWNlJyk7XHJcbiAgICAgICAgbGV0IGNvbnRlbnQgPSAnJztcclxuICAgICAgICBmb3IgKGxldCBpIGluIGNob2ljZVByaWNlKSB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQgKz0gXCI8cD5cIiArIGkgKyBcIjogXCIgKyBjaG9pY2VQcmljZVtpXSArIFwiPC9wPlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb250ZW50ICs9IFwiPHA+UHJpY2U6IFwiICsgY2hvaWNlUHJpY2U7XHJcbiAgICAgICAgY29udGVudCArPSBcIjxwPlF1YW50aXR5OiBcIiArIHF1YW50aXR5LnZhbHVlO1xyXG4gICAgICAgIHVzZXJDaG9pY2VUZXh0LmlubmVySFRNTCA9IGNvbnRlbnQ7XHJcbiAgICB9O1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL3NyYy9qYXZhc2NyaXB0cy9tb2R1bGVzL2NoZWNrb3V0QnRuLmpzIiwiLy8gaW1wb3J0ICQgZnJvbSBcImpxdWVyeVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKCQpID0+IHtcclxuICAgIHdpbmRvdy51c2VyQ2hvaWNlID0ge307XHJcblxyXG4gICAgd2luZG93LnNlbGVjdE9uQ2xpY2sgPSBmdW5jdGlvbiAoZWwpIHtcclxuXHJcbiAgICAgICAgbGV0IGNsaWNrZWRFbGVtZW50RGF0YUlkID0gZWwuZ2V0QXR0cmlidXRlKCdkYXRhJyk7XHJcbiAgICAgICAgbGV0IGFsbFNlbGVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YV0nKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSBpbiBhbGxTZWxlY3RzKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoaXNOYU4oaSkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgaXRlbVNlbGVjdCA9IGFsbFNlbGVjdHNbaV07XHJcbiAgICAgICAgICAgIGxldCBzZWxlY3REYXRhID0gaXRlbVNlbGVjdC5hdHRyaWJ1dGVzLmRhdGEudmFsdWU7XHJcblxyXG4gICAgICAgICAgICBpZiAoc2VsZWN0RGF0YSA9PT0gY2xpY2tlZEVsZW1lbnREYXRhSWQpIHtcclxuICAgICAgICAgICAgICAgIHVzZXJDaG9pY2VbaXRlbVNlbGVjdC5uYW1lXSA9IGl0ZW1TZWxlY3Qub3B0aW9uc1tpdGVtU2VsZWN0LnNlbGVjdGVkSW5kZXhdLnZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZygnVGhpcyBpcyB1c2VyIGNob2ljZScpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHVzZXJDaG9pY2UpO1xyXG5cclxuICAgICAgICBjb21wYXJlKHVzZXJDaG9pY2UsIGNsaWNrZWRFbGVtZW50RGF0YUlkKTtcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gY29tcGFyZSh1c2VyQ2hvaWNlLCBkYXRhSUQpIHtcclxuXHJcbiAgICAgICAgbGV0IHByaW50UHJpY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkYXRhSUQgKyAnLXByaWNlJyk7XHJcbiAgICAgICAgbGV0IHByaW50TWVzc2FnZSA9ICQoJyNtZXNzYWdlLScgKyBkYXRhSUQpO1xyXG4gICAgICAgIGxldCBjaGVja291dEJ1dHRvbiA9ICQoXCIjc2VjdGlvbi1cIiArIGRhdGFJRCArIFwiIGJ1dHRvbltkYXRhLXNsaWRlPSduZXh0J11cIik7XHJcblxyXG4gICAgICAgIGZvciAobGV0IHBhcmFtZXRlciBpbiB1c2VyQ2hvaWNlKSB7XHJcbiAgICAgICAgICAgIGlmICh1c2VyQ2hvaWNlW3BhcmFtZXRlcl0gPT09IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgIHByaW50UHJpY2Uuc2V0QXR0cmlidXRlKCdkYXRhLXByaWNlJywgJycpO1xyXG4gICAgICAgICAgICAgICAgcHJpbnRQcmljZS5pbm5lckhUTUwgPSBcIiZuYnNwO1wiO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1NlbGVjdCB0aGUgJyArIHBhcmFtZXRlcik7XHJcbiAgICAgICAgICAgICAgICBwcmludE1lc3NhZ2UuaW5uZXJIVE1MID0gJ1NlbGVjdCB0aGUgJyArIHBhcmFtZXRlcjtcclxuICAgICAgICAgICAgICAgIGNoZWNrb3V0QnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHZhcmlhdGlvbnMgPSB2YXJpYXRpb25zT2JqZWN0LmRhdGFCeUlkW2RhdGFJRF07XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdUaGlzIGlzIFZhcmlhdGlvbnMnKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh2YXJpYXRpb25zKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSBpbiB2YXJpYXRpb25zKSB7XHJcbiAgICAgICAgICAgIGxldCB2YXJpYXRpb24gPSB2YXJpYXRpb25zW2ldO1xyXG4gICAgICAgICAgICBsZXQgdmFyaWF0aW9uc1dpdGhvdXRQcmljZSA9IHt9O1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgcGFyYW1ldGVyIGluIHZhcmlhdGlvbikge1xyXG4gICAgICAgICAgICAgICAgdmFyaWF0aW9uc1dpdGhvdXRQcmljZVtwYXJhbWV0ZXJdID0gdmFyaWF0aW9uW3BhcmFtZXRlcl07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGRlbGV0ZSB2YXJpYXRpb25zV2l0aG91dFByaWNlLnByaWNlO1xyXG5cclxuICAgICAgICAgICAgaWYgKEpTT04uc3RyaW5naWZ5KHVzZXJDaG9pY2UpID09PSBKU09OLnN0cmluZ2lmeSh2YXJpYXRpb25zV2l0aG91dFByaWNlKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codmFyaWF0aW9uLnByaWNlKTtcclxuICAgICAgICAgICAgICAgIHByaW50UHJpY2Uuc2V0QXR0cmlidXRlKCdkYXRhLXByaWNlJywgdmFyaWF0aW9uLnByaWNlKTtcclxuICAgICAgICAgICAgICAgIHByaW50UHJpY2UuaW5uZXJIVE1MID0gJzxoMyBjbGFzcz1cInJlZC1wcmljZVwiPicgKyB2YXJpYXRpb24ucHJpY2UgKyAnJDwvaDM+JztcclxuICAgICAgICAgICAgICAgIHByaW50TWVzc2FnZS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgY2hlY2tvdXRCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHByaW50UHJpY2Uuc2V0QXR0cmlidXRlKCdkYXRhLXByaWNlJywgJycpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1ZhcmlhdGlvbiBpcyBub3QgZm91bmQnKTtcclxuICAgICAgICAgICAgICAgIHByaW50UHJpY2UuaW5uZXJIVE1MID0gJzxoMz4tIC08L2gzPic7XHJcbiAgICAgICAgICAgICAgICBwcmludE1lc3NhZ2UuaW5uZXJIVE1MID0gJ1ZhcmlhdGlvbiBpcyBub3QgZm91bmQnO1xyXG4gICAgICAgICAgICAgICAgY2hlY2tvdXRCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuLy9DbGljayB0byBDaGVja291dCAtIFNsaWRlIGJ1dHRvblxyXG5cclxuXHJcbi8vQ3JlYXRlIG5ldyBwb3N0XHJcbiAgICB3aW5kb3cuYWRkVG9DYXJ0ID0gZnVuY3Rpb24gKGVsKSB7XHJcblxyXG4gICAgICAgIGlmIChlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2Rpc2FibGVkJykpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgalF1ZXJ5KCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgIHNjcm9sbFRvcDogJChcIiNjaG9vc2VcIikub2Zmc2V0VG9wIC0gNTBcclxuICAgICAgICB9LCAxMDApO1xyXG5cclxuICAgICAgICBsZXQgY2xpY2tlZEVsZW1lbnREYXRhSWQgPSBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYXR0cicpO1xyXG4gICAgICAgIGxldCBxdWFudGl0eSA9ICQoJyNzZWN0aW9uLScgKyBjbGlja2VkRWxlbWVudERhdGFJZCArICcgLnF1YW50aXR5Jyk7XHJcbiAgICAgICAgbGV0IGVsZW1lbnRIcmVmID0gZWwuZ2V0QXR0cmlidXRlKCdocmVmJyk7XHJcbiAgICAgICAgbGV0IHVzZXJPcmRlclRleHQgPSAkKCcjc2VjdGlvbi0nICsgY2xpY2tlZEVsZW1lbnREYXRhSWQgKyAnIC51c2VyLW9yZGVyJyk7XHJcbiAgICAgICAgbGV0IGlucHV0TmFtZSA9ICQoJyNmb3JtLScgKyBjbGlja2VkRWxlbWVudERhdGFJZCArICcgaW5wdXRbbmFtZT1cImZpcnN0X25hbWVcIl0nKTtcclxuICAgICAgICBsZXQgaW5wdXRMYXN0TmFtZSA9ICQoJyNmb3JtLScgKyBjbGlja2VkRWxlbWVudERhdGFJZCArICcgaW5wdXRbbmFtZT1cImxhc3RfbmFtZVwiXScpO1xyXG4gICAgICAgIGxldCBpbnB1dEVtYWlsID0gJCgnI2Zvcm0tJyArIGNsaWNrZWRFbGVtZW50RGF0YUlkICsgJyBpbnB1dFtuYW1lPVwiZW1haWxcIl0nKTtcclxuICAgICAgICBsZXQgaW5wdXRQaG9uZSA9ICQoJyNmb3JtLScgKyBjbGlja2VkRWxlbWVudERhdGFJZCArICcgaW5wdXRbbmFtZT1cInBob25lXCJdJyk7XHJcblxyXG4gICAgICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsLm5hbWUpLnRleHRDb250ZW50O1xyXG5cclxuICAgICAgICBsZXQgcHJpY2VUYWcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjbGlja2VkRWxlbWVudERhdGFJZCArICctcHJpY2UnKTtcclxuICAgICAgICBsZXQgcHJpY2UgPSBwcmljZVRhZy5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJpY2UnKTtcclxuICAgICAgICBsZXQgcmFuZG9tSWQgPSBNYXRoLnRydW5jKChNYXRoLnJhbmRvbSgpICogMTAwMDAwKSk7XHJcbiAgICAgICAgbGV0IHByb2R1Y3REYXRhID0ge1xyXG4gICAgICAgICAgICBcInRpdGxlXCI6IHRpdGxlICsgJyBbJyArIHJhbmRvbUlkICsgJ10nLFxyXG4gICAgICAgICAgICBcImNvbnRlbnRcIjogSlNPTi5zdHJpbmdpZnkodXNlckNob2ljZSkgKyAne1wicHJpY2VcIjonICsgcHJpY2UgKyAnLCBcInF1YW50aXR5XCI6JyArIHF1YW50aXR5LnZhbHVlICsgJ30nLFxyXG4gICAgICAgICAgICBcInN0YXR1c1wiOiAncHVibGlzaCdcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpIGluIHVzZXJDaG9pY2UpIHtcclxuICAgICAgICAgICAgcHJvZHVjdERhdGFbJ3BhcmFtXycgKyBpXSA9IHVzZXJDaG9pY2VbaV07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm9kdWN0RGF0YVsncGFyYW1fcHJpY2UnXSA9IHByaWNlO1xyXG4gICAgICAgIHByb2R1Y3REYXRhWydwYXJhbV9xdWFudGl0eSddID0gcXVhbnRpdHkudmFsdWU7XHJcbiAgICAgICAgcHJvZHVjdERhdGFbJ2luZm9fZmlyc3RfbmFtZSddID0gaW5wdXROYW1lLnZhbHVlO1xyXG4gICAgICAgIHByb2R1Y3REYXRhWydpbmZvX2xhc3RfbmFtZSddID0gaW5wdXRMYXN0TmFtZS52YWx1ZTtcclxuICAgICAgICBwcm9kdWN0RGF0YVsnaW5mb19lbWFpbCddID0gaW5wdXRFbWFpbC52YWx1ZTtcclxuICAgICAgICBwcm9kdWN0RGF0YVsnaW5mb19waG9uZSddID0gaW5wdXRQaG9uZS52YWx1ZTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2cocHJvZHVjdERhdGEpO1xyXG5cclxuICAgICAgICBsZXQgY29udGVudCA9ICcnO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpIGluIHVzZXJDaG9pY2UpIHtcclxuICAgICAgICAgICAgY29udGVudCArPSBcIjxwPlwiICsgaSArIFwiOiBcIiArIHVzZXJDaG9pY2VbaV0gKyBcIjwvcD5cIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29udGVudCArPSBcIjxwPlByaWNlOiBcIiArIHByb2R1Y3REYXRhLnBhcmFtX3ByaWNlICsgXCI8L3A+XCI7XHJcbiAgICAgICAgY29udGVudCArPSBcIjxwPlF1YW50aXR5OiBcIiArIHF1YW50aXR5LnZhbHVlICsgXCI8L3A+XCI7XHJcbiAgICAgICAgY29udGVudCArPSBcIjxwPlRvdGFsIHByaWNlOiBcIiArIChxdWFudGl0eS52YWx1ZSAqIHByb2R1Y3REYXRhLnBhcmFtX3ByaWNlKSArIFwiPC9wPlwiO1xyXG4gICAgICAgIGNvbnRlbnQgKz0gXCI8cD5GaXJzdCBuYW1lOiBcIiArIHByb2R1Y3REYXRhLmluZm9fZmlyc3RfbmFtZSArIFwiPC9wPlwiO1xyXG4gICAgICAgIGNvbnRlbnQgKz0gXCI8cD5MYXN0IG5hbWU6IFwiICsgcHJvZHVjdERhdGEuaW5mb19sYXN0X25hbWUgKyBcIjwvcD5cIjtcclxuICAgICAgICBjb250ZW50ICs9IFwiPHA+UGhvbmU6IFwiICsgcHJvZHVjdERhdGEuaW5mb19waG9uZSArIFwiPC9wPlwiO1xyXG5cclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHJcbiAgICAgICAgZmV0Y2goJy93cC1qc29uL3dwL3YyL3Nob3Bfb3JkZXInLCB7XHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHByb2R1Y3REYXRhKSxcclxuICAgICAgICAgICAgLy8gdmFyIEJhc2U2ND17X2tleVN0cjpcIkFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky89XCIsZW5jb2RlOmZ1bmN0aW9uKGUpe3ZhciB0PVwiXCI7dmFyIG4scixpLHMsbyx1LGE7dmFyIGY9MDtlPUJhc2U2NC5fdXRmOF9lbmNvZGUoZSk7d2hpbGUoZjxlLmxlbmd0aCl7bj1lLmNoYXJDb2RlQXQoZisrKTtyPWUuY2hhckNvZGVBdChmKyspO2k9ZS5jaGFyQ29kZUF0KGYrKyk7cz1uPj4yO289KG4mMyk8PDR8cj4+NDt1PShyJjE1KTw8MnxpPj42O2E9aSY2MztpZihpc05hTihyKSl7dT1hPTY0fWVsc2UgaWYoaXNOYU4oaSkpe2E9NjR9dD10K3RoaXMuX2tleVN0ci5jaGFyQXQocykrdGhpcy5fa2V5U3RyLmNoYXJBdChvKSt0aGlzLl9rZXlTdHIuY2hhckF0KHUpK3RoaXMuX2tleVN0ci5jaGFyQXQoYSl9cmV0dXJuIHR9LGRlY29kZTpmdW5jdGlvbihlKXt2YXIgdD1cIlwiO3ZhciBuLHIsaTt2YXIgcyxvLHUsYTt2YXIgZj0wO2U9ZS5yZXBsYWNlKC9bXkEtWmEtejAtOVxcK1xcL1xcPV0vZyxcIlwiKTt3aGlsZShmPGUubGVuZ3RoKXtzPXRoaXMuX2tleVN0ci5pbmRleE9mKGUuY2hhckF0KGYrKykpO289dGhpcy5fa2V5U3RyLmluZGV4T2YoZS5jaGFyQXQoZisrKSk7dT10aGlzLl9rZXlTdHIuaW5kZXhPZihlLmNoYXJBdChmKyspKTthPXRoaXMuX2tleVN0ci5pbmRleE9mKGUuY2hhckF0KGYrKykpO249czw8MnxvPj40O3I9KG8mMTUpPDw0fHU+PjI7aT0odSYzKTw8NnxhO3Q9dCtTdHJpbmcuZnJvbUNoYXJDb2RlKG4pO2lmKHUhPTY0KXt0PXQrU3RyaW5nLmZyb21DaGFyQ29kZShyKX1pZihhIT02NCl7dD10K1N0cmluZy5mcm9tQ2hhckNvZGUoaSl9fXQ9QmFzZTY0Ll91dGY4X2RlY29kZSh0KTtyZXR1cm4gdH0sX3V0ZjhfZW5jb2RlOmZ1bmN0aW9uKGUpe2U9ZS5yZXBsYWNlKC9cXHJcXG4vZyxcIlxcblwiKTt2YXIgdD1cIlwiO2Zvcih2YXIgbj0wO248ZS5sZW5ndGg7bisrKXt2YXIgcj1lLmNoYXJDb2RlQXQobik7aWYocjwxMjgpe3QrPVN0cmluZy5mcm9tQ2hhckNvZGUocil9ZWxzZSBpZihyPjEyNyYmcjwyMDQ4KXt0Kz1TdHJpbmcuZnJvbUNoYXJDb2RlKHI+PjZ8MTkyKTt0Kz1TdHJpbmcuZnJvbUNoYXJDb2RlKHImNjN8MTI4KX1lbHNle3QrPVN0cmluZy5mcm9tQ2hhckNvZGUocj4+MTJ8MjI0KTt0Kz1TdHJpbmcuZnJvbUNoYXJDb2RlKHI+PjYmNjN8MTI4KTt0Kz1TdHJpbmcuZnJvbUNoYXJDb2RlKHImNjN8MTI4KX19cmV0dXJuIHR9LF91dGY4X2RlY29kZTpmdW5jdGlvbihlKXt2YXIgdD1cIlwiO3ZhciBuPTA7dmFyIHI9YzE9YzI9MDt3aGlsZShuPGUubGVuZ3RoKXtyPWUuY2hhckNvZGVBdChuKTtpZihyPDEyOCl7dCs9U3RyaW5nLmZyb21DaGFyQ29kZShyKTtuKyt9ZWxzZSBpZihyPjE5MSYmcjwyMjQpe2MyPWUuY2hhckNvZGVBdChuKzEpO3QrPVN0cmluZy5mcm9tQ2hhckNvZGUoKHImMzEpPDw2fGMyJjYzKTtuKz0yfWVsc2V7YzI9ZS5jaGFyQ29kZUF0KG4rMSk7YzM9ZS5jaGFyQ29kZUF0KG4rMik7dCs9U3RyaW5nLmZyb21DaGFyQ29kZSgociYxNSk8PDEyfChjMiY2Myk8PDZ8YzMmNjMpO24rPTN9fXJldHVybiB0fX07XHJcbiAgICAgICAgICAgIC8vY3JlYXRlUG9zdC5zZXRSZXF1ZXN0SGVhZGVyKCAnQXV0aG9yaXphdGlvbicsICdCYXNpYyAnICsgQmFzZTY0LmVuY29kZSggJ3Rlc3Q6MDAwMCcgKSApO1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAnWC1XUC1Ob25jZSc6IHdwQXBpU2V0dGluZ3Mubm9uY2UsXHJcbiAgICAgICAgICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnXHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyAhPT0gMjAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ05vdCAyMDE6ICcgKyByZXNwb25zZS5zdGF0dXMgKyAnICcgKyByZXNwb25zZS5zdGF0dXNUZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICBhbGVydCgnTm90IDIwMTogJyArIHJlc3BvbnNlLnN0YXR1cyArICcgJyArIHJlc3BvbnNlLnN0YXR1c1RleHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50ICs9ICc8YnI+JyArIHJlc3BvbnNlLnN0YXR1c1RleHQgKyAnIHN0YXR1czogcG9zdCBhZGRlZCc7XHJcbiAgICAgICAgICAgICAgICAgICAgalF1ZXJ5KGVsZW1lbnRIcmVmKS5jYXJvdXNlbCgnbmV4dCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJPcmRlclRleHQuaW5uZXJIVE1MID0gY29udGVudDtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5zdGF0dXNUZXh0ICsgJyBzdGF0dXM6IHBvc3QgYWRkZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICBhbGVydChyZXNwb25zZS5zdGF0dXNUZXh0ICsgJyBzdGF0dXM6IHBvc3QgYWRkZWQnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGFsZXJ0KTtcclxuICAgIH07XHJcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL3NyYy9qYXZhc2NyaXB0cy9tb2R1bGVzL3ZhcmlhdGlvbnMuanMiLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcImJvb3N0cmFwLXZhbGlkYXRvciB2ZXJzaW9uOlwiLCBqUXVlcnkuZm4udmFsaWRhdG9yLkNvbnN0cnVjdG9yLlZFUlNJT04pO1xyXG4gICAgalF1ZXJ5KCdmb3JtJykudmFsaWRhdG9yKHtcclxuICAgICAgICBmb2N1czogZmFsc2UsXHJcbiAgICAgICAgLy8gZGVsYXk6IDMwMDBcclxuICAgIH0pO1xyXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9zcmMvamF2YXNjcmlwdHMvbW9kdWxlcy92YWxpZGF0aW9uLmpzIiwiaW1wb3J0ICQgZnJvbSBcImpxdWVyeVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xyXG4gICAgbGV0IEdhbGxlcnkgPSB7XHJcbiAgICAgICAgem9vbTogZnVuY3Rpb24gKGltZ0NvbnRhaW5lciwgaW1nLCBnYWxsZXJ5KSB7XHJcbiAgICAgICAgICAgIGxldCBjb250YWluZXJIZWlnaHQgPSBpbWdDb250YWluZXIub3V0ZXJIZWlnaHQoKTtcclxuICAgICAgICAgICAgaWYgKCFnYWxsZXJ5Lmhhc0NsYXNzKCdpcy16b29tZWQnKSkge1xyXG4gICAgICAgICAgICAgICAgaW1nQ29udGFpbmVyLmNzcyhcImhlaWdodFwiLCBjb250YWluZXJIZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgZ2FsbGVyeS5hZGRDbGFzcygnaXMtem9vbWVkJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgaW1nLmRyYWdnYWJsZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgZHJhZzogZnVuY3Rpb24gKGV2ZW50LCB1aSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1aS5wb3NpdGlvbi5sZWZ0ID0gTWF0aC5taW4oMTAwLCB1aS5wb3NpdGlvbi5sZWZ0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdWkucG9zaXRpb24udG9wID0gTWF0aC5taW4oMTAwLCB1aS5wb3NpdGlvbi50b3ApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaW1nQ29udGFpbmVyLmNzcyhcImhlaWdodFwiLCBcImF1dG9cIik7XHJcbiAgICAgICAgICAgICAgICBnYWxsZXJ5LnJlbW92ZUNsYXNzKCdpcy16b29tZWQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3dpdGNoOiBmdW5jdGlvbiAodHJpZ2dlciwgaW1nQ29udGFpbmVyLCBnYWxsZXJ5KSB7XHJcbiAgICAgICAgICAgIGxldCBzcmMgPSB0cmlnZ2VyLmF0dHIoJ2hyZWYnKSxcclxuICAgICAgICAgICAgICAgIHRodW1icyA9IHRyaWdnZXIuc2libGluZ3MoKSxcclxuICAgICAgICAgICAgICAgIGltZyA9IHRyaWdnZXIucGFyZW50KCkucHJldigpLmNoaWxkcmVuKCk7XHJcblxyXG4gICAgICAgICAgICB0cmlnZ2VyLmFkZENsYXNzKCdpcy1hY3RpdmUnKTtcclxuXHJcbiAgICAgICAgICAgIHRodW1icy5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKCdpcy1hY3RpdmUnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChnYWxsZXJ5Lmhhc0NsYXNzKCdpcy16b29tZWQnKSkge1xyXG4gICAgICAgICAgICAgICAgZ2FsbGVyeS5yZW1vdmVDbGFzcygnaXMtem9vbWVkJyk7XHJcbiAgICAgICAgICAgICAgICBpbWdDb250YWluZXIuY3NzKFwiaGVpZ2h0XCIsIFwiYXV0b1wiKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gU3dpdGNoIGltYWdlIHNvdXJjZVxyXG4gICAgICAgICAgICBpbWcuYXR0cignc3JjJywgc3JjKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGxldCBnYWxsZXJ5ID0gJCgnLmdhbGxlcnknKTtcclxuICAgIGdhbGxlcnkub24oJ2NsaWNrJywgJ2EnLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICBsZXQgdHJpZ2dlciA9ICQodGhpcyk7XHJcbiAgICAgICAgbGV0IHRyaWdnZXJEYXRhID0gdHJpZ2dlci5kYXRhKFwiZ2FsbGVyeVwiKTtcclxuICAgICAgICBsZXQgZ2FsbGVyeUlkID0gZXZlbnQuZGVsZWdhdGVUYXJnZXQuaWQ7XHJcbiAgICAgICAgZ2FsbGVyeSA9ICQoJyMnICsgZ2FsbGVyeUlkKTtcclxuXHJcbiAgICAgICAgaWYgKHRyaWdnZXJEYXRhID09PSAnem9vbScpIHtcclxuICAgICAgICAgICAgbGV0IGltZ0NvbnRhaW5lciA9IHRyaWdnZXIucGFyZW50KCksXHJcbiAgICAgICAgICAgICAgICBpbWcgPSB0cmlnZ2VyLnNpYmxpbmdzKCk7XHJcbiAgICAgICAgICAgIEdhbGxlcnkuem9vbShpbWdDb250YWluZXIsIGltZywgZ2FsbGVyeSk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0cmlnZ2VyRGF0YSA9PT0gJ3RodW1iJykge1xyXG4gICAgICAgICAgICBsZXQgaW1nQ29udGFpbmVyID0gdHJpZ2dlci5wYXJlbnQoKS5zaWJsaW5ncygpO1xyXG4gICAgICAgICAgICBHYWxsZXJ5LnN3aXRjaCh0cmlnZ2VyLCBpbWdDb250YWluZXIsIGdhbGxlcnkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIH0pO1xyXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9zcmMvamF2YXNjcmlwdHMvbW9kdWxlcy9nYWxsZXJ5LmpzIiwibW9kdWxlLmV4cG9ydHMgPSBqUXVlcnk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJqUXVlcnlcIlxuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9