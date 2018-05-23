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
	    (0, _onChangeSelect2.default)($, $$);
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
	
	    var dataID = "";
	    var section = {};
	    var closeBtn = $('.close-btn');
	    var collapseSections = $$('.collapse-section');
	    var showingSections = $$('.collapse-section.showing').length;
	
	    window.toggleChooseSections = function (el) {
	
	        if (showingSections) {
	            closeBtn.classList.remove('showing');
	        }
	
	        collapseOpenedSections(el);
	
	        showTargetSection();
	
	        if (showingSections) {
	            closeBtn.classList.add('showing');
	        }
	    };
	
	    function collapseOpenedSections(el) {
	        dataID = el.getAttribute('data-id');
	        section = $('#section-' + dataID);
	        for (var i = 0; i < collapseSections.length; i++) {
	            if (!(collapseSections[i].id === section.id)) {
	                collapseSections[i].classList.remove('showing');
	            }
	        }
	    }
	
	    function showTargetSection() {
	        section.classList.toggle('showing');
	        showingSections = $$('.collapse-section.showing').length;
	    }
	};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	exports.default = function ($, $$) {
	    var userChoice = window.userChoice = {};
	    var dataID = "";
	    var printPrice = void 0,
	        printMessage = void 0,
	        checkoutButton = {};
	
	    window.onChangeSelect = function (el) {
	        dataID = el.getAttribute('data');
	        printPrice = $('#section-' + dataID + ' .price');
	        printMessage = $('#section-' + dataID + ' .error-message');
	        checkoutButton = $("#section-" + dataID + " button[data-slide='next']");
	
	        var allSelects = $$('#section-' + dataID + ' select');
	
	        for (var i = 0; i < allSelects.length; i++) {
	            var itemSelect = allSelects[i];
	            userChoice[itemSelect.name] = itemSelect.options[itemSelect.selectedIndex].value;
	        }
	        console.log('This is user choice: ', userChoice);
	
	        compareAvailability(userChoice, dataID);
	    };
	
	    function compareAvailability(userChoice, dataID) {
	        for (var parameter in userChoice) {
	            if (userChoice.hasOwnProperty(parameter) && userChoice[parameter] === "") {
	                return missSelect(parameter);
	            }
	        }
	
	        var variations = variationsObject.dataById[dataID];
	
	        console.log('This is Variations: ', variations);
	
	        for (var i = 0; i < variations.length; i++) {
	            var variation = variations[i];
	            var variationsWithoutPrice = {};
	
	            Object.assign(variationsWithoutPrice, variation);
	
	            delete variationsWithoutPrice.price;
	
	            if (JSON.stringify(userChoice) === JSON.stringify(variationsWithoutPrice)) {
	                return matchVariation(variation);
	            }
	
	            missVariation();
	        }
	    }
	
	    function missSelect(parameter) {
	        printPrice.setAttribute('data-price', '');
	        printPrice.innerHTML = "&nbsp;";
	        printMessage.innerHTML = 'Select the ' + parameter;
	        checkoutButton.disabled = true;
	        console.log('Select the ' + parameter);
	    }
	
	    function missVariation() {
	        printPrice.setAttribute('data-price', '');
	        printPrice.innerHTML = '<h3>- -</h3>';
	        printMessage.innerHTML = 'Variation is not found';
	        checkoutButton.disabled = true;
	        console.log('Variation is not found');
	    }
	
	    function matchVariation(variation) {
	        printPrice.setAttribute('data-price', variation.price);
	        printPrice.innerHTML = '<h3 class="red-price">' + variation.price + '$</h3>';
	        printMessage.innerHTML = "";
	        checkoutButton.disabled = false;
	        console.log(variation.price);
	    }
	};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	exports.default = function ($) {
	    var userChoice = window.userChoice;
	    var dataID = "";
	    var quantity = void 0,
	        userChoiceText = void 0,
	        choicePrice = {};
	
	    window.checkoutBtn = function (el) {
	        MainMethods.scrollElem($("#choose").offsetTop - 50, 100);
	        dataID = el.getAttribute('data-id');
	        quantity = $('#section-' + dataID + ' .quantity');
	        userChoiceText = $('#section-' + dataID + ' .user-choice');
	        choicePrice = $('#section-' + dataID + ' .price').getAttribute('data-price');
	
	        printUserChoice();
	    };
	
	    function printUserChoice() {
	        var content = '';
	        for (var i in userChoice) {
	            content += "<p>" + i + ": " + userChoice[i] + "</p>";
	        }
	        content += "<p>Price: " + choicePrice;
	        content += "<p>Quantity: " + quantity.value;
	        userChoiceText.innerHTML = content;
	    }
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
	        var inputName = $('#section-' + dataID + ' form input[name="first_name"]');
	        var inputLastName = $('#section-' + dataID + ' form input[name="last_name"]');
	        var inputEmail = $('#section-' + dataID + ' form input[name="email"]');
	        var inputPhone = $('#section-' + dataID + ' form input[name="phone"]');
	
	        var title = $('#section-' + dataID + ' h3').innerText;
	        var price = $('#section-' + dataID + ' .price').getAttribute('data-price');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOTk3Y2NiNDIzMGIyMzgwNzEwZTQiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NyYy9qYXZhc2NyaXB0cy9jb21tb24uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NyYy9qYXZhc2NyaXB0cy9tb2R1bGVzL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NyYy9qYXZhc2NyaXB0cy9tb2R1bGVzL3RvZ2dsZUNob29zZVNlY3Rpb25zLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zcmMvamF2YXNjcmlwdHMvbW9kdWxlcy9vbkNoYW5nZVNlbGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3JjL2phdmFzY3JpcHRzL21vZHVsZXMvY2hlY2tvdXRCdG4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NyYy9qYXZhc2NyaXB0cy9tb2R1bGVzL2FkZE9yZGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zcmMvamF2YXNjcmlwdHMvbW9kdWxlcy92YWxpZGF0aW9uLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zcmMvamF2YXNjcmlwdHMvbW9kdWxlcy9nYWxsZXJ5LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImpRdWVyeVwiIl0sIm5hbWVzIjpbIiQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJiaW5kIiwiJCQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiTm9kZSIsInByb3RvdHlwZSIsIm9uIiwid2luZG93IiwibmFtZSIsImZuIiwiYWRkRXZlbnRMaXN0ZW5lciIsIk5vZGVMaXN0IiwiX19wcm90b19fIiwiQXJyYXkiLCJEb2N1bWVudCIsImZvckVhY2giLCJlbGVtIiwialF1ZXJ5IiwiTWFpbk1ldGhvZHMiLCJzY3JvbGxFbGVtIiwicHJvcGVydHkiLCJkdXJhdGlvbiIsImFuaW1hdGUiLCJzY3JvbGxUb3AiLCJsYXp5U2Nyb2xsIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImlkIiwiZ2V0QXR0cmlidXRlIiwib2Zmc2V0Iiwib2Zmc2V0VG9wIiwibmF2YmFyVG9EZWZhdWx0Iiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJtZW51SXRlbSIsImkiLCJsZW5ndGgiLCJuYXZiYXJUb0Zsb2F0IiwibmF2YmFyIiwiYWRkIiwic2V0TmF2U3R5bGUiLCJwYWdlWU9mZnNldCIsImRpc3BsYXkiLCJvdXRlcldpZHRoIiwidG9nZ2xlIiwiY2xpY2siLCJzZWN0aW9ucyIsImRhdGFJRCIsInNlY3Rpb24iLCJjbG9zZUJ0biIsImNvbGxhcHNlU2VjdGlvbnMiLCJzaG93aW5nU2VjdGlvbnMiLCJ0b2dnbGVDaG9vc2VTZWN0aW9ucyIsImVsIiwiY29sbGFwc2VPcGVuZWRTZWN0aW9ucyIsInNob3dUYXJnZXRTZWN0aW9uIiwidXNlckNob2ljZSIsInByaW50UHJpY2UiLCJwcmludE1lc3NhZ2UiLCJjaGVja291dEJ1dHRvbiIsIm9uQ2hhbmdlU2VsZWN0IiwiYWxsU2VsZWN0cyIsIml0ZW1TZWxlY3QiLCJvcHRpb25zIiwic2VsZWN0ZWRJbmRleCIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsImNvbXBhcmVBdmFpbGFiaWxpdHkiLCJwYXJhbWV0ZXIiLCJoYXNPd25Qcm9wZXJ0eSIsIm1pc3NTZWxlY3QiLCJ2YXJpYXRpb25zIiwidmFyaWF0aW9uc09iamVjdCIsImRhdGFCeUlkIiwidmFyaWF0aW9uIiwidmFyaWF0aW9uc1dpdGhvdXRQcmljZSIsIk9iamVjdCIsImFzc2lnbiIsInByaWNlIiwiSlNPTiIsInN0cmluZ2lmeSIsIm1hdGNoVmFyaWF0aW9uIiwibWlzc1ZhcmlhdGlvbiIsInNldEF0dHJpYnV0ZSIsImlubmVySFRNTCIsImRpc2FibGVkIiwicXVhbnRpdHkiLCJ1c2VyQ2hvaWNlVGV4dCIsImNob2ljZVByaWNlIiwiY2hlY2tvdXRCdG4iLCJwcmludFVzZXJDaG9pY2UiLCJjb250ZW50IiwiYWRkT3JkZXIiLCJjb250YWlucyIsImVsZW1lbnRIcmVmIiwidXNlck9yZGVyVGV4dCIsImlucHV0TmFtZSIsImlucHV0TGFzdE5hbWUiLCJpbnB1dEVtYWlsIiwiaW5wdXRQaG9uZSIsInRpdGxlIiwiaW5uZXJUZXh0IiwicmFuZG9tSWQiLCJNYXRoIiwidHJ1bmMiLCJyYW5kb20iLCJwcm9kdWN0RGF0YSIsInBhcmFtX3ByaWNlIiwiaW5mb19maXJzdF9uYW1lIiwiaW5mb19sYXN0X25hbWUiLCJpbmZvX3Bob25lIiwiZmV0Y2giLCJib2R5IiwiaGVhZGVycyIsIndwQXBpU2V0dGluZ3MiLCJub25jZSIsIm1ldGhvZCIsInRoZW4iLCJyZXNwb25zZSIsInN0YXR1cyIsInN0YXR1c1RleHQiLCJhbGVydCIsImNhcm91c2VsIiwiY2F0Y2giLCJ2YWxpZGF0b3IiLCJDb25zdHJ1Y3RvciIsIlZFUlNJT04iLCJmb2N1cyIsIkdhbGxlcnkiLCJ6b29tIiwiaW1nQ29udGFpbmVyIiwiaW1nIiwiZ2FsbGVyeSIsImNvbnRhaW5lckhlaWdodCIsIm91dGVySGVpZ2h0IiwiaGFzQ2xhc3MiLCJjc3MiLCJhZGRDbGFzcyIsImRyYWdnYWJsZSIsImRyYWciLCJ1aSIsInBvc2l0aW9uIiwibGVmdCIsIm1pbiIsInRvcCIsInJlbW92ZUNsYXNzIiwic3dpdGNoIiwidHJpZ2dlciIsInNyYyIsImF0dHIiLCJ0aHVtYnMiLCJzaWJsaW5ncyIsInBhcmVudCIsInByZXYiLCJjaGlsZHJlbiIsImVhY2giLCJ0cmlnZ2VyRGF0YSIsImRhdGEiLCJnYWxsZXJ5SWQiLCJkZWxlZ2F0ZVRhcmdldCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7OztBQ2xCQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBMUJBOztBQUVBLEtBQU1BLElBQUlDLFNBQVNDLGFBQVQsQ0FBdUJDLElBQXZCLENBQTRCRixRQUE1QixDQUFWO0FBQ0EsS0FBTUcsS0FBS0gsU0FBU0ksZ0JBQVQsQ0FBMEJGLElBQTFCLENBQStCRixRQUEvQixDQUFYOztBQUVBSyxNQUFLQyxTQUFMLENBQWVDLEVBQWYsR0FBb0JDLE9BQU9ELEVBQVAsR0FBWSxVQUFVRSxJQUFWLEVBQWdCQyxFQUFoQixFQUFvQjtBQUNoRCxVQUFLQyxnQkFBTCxDQUFzQkYsSUFBdEIsRUFBNEJDLEVBQTVCO0FBQ0gsRUFGRDs7QUFJQUUsVUFBU04sU0FBVCxDQUFtQk8sU0FBbkIsR0FBK0JDLE1BQU1SLFNBQXJDLEMsQ0FBZ0Q7QUFDaERNLFVBQVNOLFNBQVQsQ0FBbUJPLFNBQW5CLEdBQStCRSxTQUFTVCxTQUF4QztBQUNBOztBQUVBTSxVQUFTTixTQUFULENBQW1CQyxFQUFuQixHQUF3QkssU0FBU04sU0FBVCxDQUFtQkssZ0JBQW5CLEdBQXNDLFVBQVVGLElBQVYsRUFBZ0JDLEVBQWhCLEVBQW9CO0FBQzlFLFVBQUtNLE9BQUwsQ0FBYSxVQUFDQyxJQUFELEVBQVU7QUFDbkJBLGNBQUtWLEVBQUwsQ0FBUUUsSUFBUixFQUFjQyxFQUFkO0FBQ0gsTUFGRDtBQUdILEVBSkQ7QUFLQTs7QUFXQVEsUUFBTyxZQUFZO0FBQ2YseUJBQUtuQixDQUFMLEVBQVFJLEVBQVI7QUFDQSx5Q0FBcUJKLENBQXJCLEVBQXdCSSxFQUF4QjtBQUNBLG1DQUFlSixDQUFmLEVBQWtCSSxFQUFsQjtBQUNBLGdDQUFZSixDQUFaO0FBQ0EsNkJBQVNBLENBQVQ7QUFDQSwrQkFBV0EsQ0FBWDtBQUNBO0FBQ0gsRUFSRCxFOzs7Ozs7Ozs7Ozs7bUJDN0JlLFVBQUNBLENBQUQsRUFBSUksRUFBSixFQUFXOztBQUV0QkssWUFBT1csV0FBUCxHQUFxQjtBQUNqQkMscUJBQVksb0JBQVVDLFFBQVYsRUFBb0JDLFFBQXBCLEVBQThCO0FBQ3RDSixvQkFBTyxZQUFQLEVBQXFCSyxPQUFyQixDQUE2QjtBQUN6QkMsNEJBQVdIO0FBRGMsY0FBN0IsRUFFR0MsUUFGSDtBQUdILFVBTGdCO0FBTWpCRyxxQkFBWSxzQkFBWTtBQUNwQkMsbUJBQU1DLGNBQU47QUFDQSxpQkFBSUMsS0FBSyxLQUFLQyxZQUFMLENBQWtCLE1BQWxCLENBQVQ7QUFDQSxpQkFBSUMsU0FBUy9CLEVBQUU2QixFQUFGLEVBQU1HLFNBQW5CO0FBQ0E7QUFDQSxpQkFBSUgsT0FBTyxTQUFYLEVBQXNCO0FBQ2xCRSwyQkFBVSxFQUFWO0FBQ0g7QUFDRFgseUJBQVlDLFVBQVosQ0FBdUJVLE1BQXZCLEVBQStCLEdBQS9COztBQUVBLG9CQUFPLEtBQVA7QUFDSCxVQWpCZ0I7QUFrQmpCRSwwQkFBaUIsMkJBQVk7QUFDekJqQyxlQUFFLGlCQUFGLEVBQXFCa0MsS0FBckIsQ0FBMkJDLGVBQTNCLEdBQTZDLGFBQTdDO0FBQ0FuQyxlQUFFLG1CQUFGLEVBQXVCb0MsU0FBdkIsQ0FBaUNDLE1BQWpDLENBQXdDLGdCQUF4QztBQUNBckMsZUFBRSxtQkFBRixFQUF1Qm9DLFNBQXZCLENBQWlDQyxNQUFqQyxDQUF3QyxrQkFBeEM7QUFDQSxpQkFBSUMsV0FBV2xDLEdBQUcsZUFBSCxDQUFmO0FBQ0Esa0JBQUssSUFBSW1DLElBQUksQ0FBYixFQUFnQkEsSUFBSUQsU0FBU0UsTUFBN0IsRUFBcUNELEdBQXJDLEVBQTBDO0FBQ3RDRCwwQkFBU0MsQ0FBVCxFQUFZSCxTQUFaLENBQXNCQyxNQUF0QixDQUE2QixPQUE3QjtBQUNIO0FBQ0osVUExQmdCO0FBMkJqQkksd0JBQWUseUJBQVk7QUFDdkIsaUJBQUlDLFNBQVMxQyxFQUFFLGlCQUFGLENBQWI7QUFDQTBDLG9CQUFPUixLQUFQLENBQWFDLGVBQWIsR0FBK0IsdUJBQS9CO0FBQ0FPLG9CQUFPTixTQUFQLENBQWlCTyxHQUFqQixDQUFxQixrQkFBckI7QUFDQTNDLGVBQUUsbUJBQUYsRUFBdUJvQyxTQUF2QixDQUFpQ08sR0FBakMsQ0FBcUMsZ0JBQXJDO0FBQ0EsaUJBQUlMLFdBQVdsQyxHQUFHLGVBQUgsQ0FBZjtBQUNBLGtCQUFLLElBQUltQyxJQUFJLENBQWIsRUFBZ0JBLElBQUlELFNBQVNFLE1BQTdCLEVBQXFDRCxHQUFyQyxFQUEwQztBQUN0Q0QsMEJBQVNDLENBQVQsRUFBWUgsU0FBWixDQUFzQk8sR0FBdEIsQ0FBMEIsT0FBMUI7QUFDSDtBQUNKLFVBcENnQjtBQXFDakJDLHNCQUFhLHVCQUFZO0FBQ3JCLGtCQUFLSCxhQUFMO0FBQ0EsaUJBQUloQyxPQUFPb0MsV0FBUCxHQUFxQixFQUF6QixFQUE2QjtBQUN6QnpCLDZCQUFZYSxlQUFaO0FBQ0g7QUFDSjtBQTFDZ0IsTUFBckI7O0FBNkNBeEIsWUFBT0QsRUFBUCxDQUFVLE1BQVYsRUFBa0IsWUFBWTtBQUMxQlIsV0FBRSxlQUFGLEVBQW1Ca0MsS0FBbkIsQ0FBeUJZLE9BQXpCLEdBQW1DLE1BQW5DO0FBQ0E5QyxXQUFFLFNBQUYsRUFBYWtDLEtBQWIsQ0FBbUJZLE9BQW5CLEdBQTZCLE1BQTdCO0FBQ0gsTUFIRDs7QUFLQXJDLFlBQU9ELEVBQVAsQ0FBVSxrQkFBVixFQUE4QixZQUFZO0FBQ3RDO0FBQ0FZLHFCQUFZd0IsV0FBWjtBQUNBbkMsZ0JBQU9ELEVBQVAsQ0FBVSxRQUFWLEVBQW9CLFlBQVk7QUFDNUJZLHlCQUFZd0IsV0FBWjtBQUNILFVBRkQ7O0FBSUE7QUFDQSxhQUFJbkMsT0FBT3NDLFVBQVAsR0FBb0IsR0FBeEIsRUFBNkI7QUFDekI7QUFDQS9DLGVBQUUsZ0JBQUYsRUFBb0JRLEVBQXBCLENBQXVCLE9BQXZCLEVBQWdDLFlBQVk7QUFDeENZLDZCQUFZcUIsYUFBWjtBQUNBekMsbUJBQUUsV0FBRixFQUFlb0MsU0FBZixDQUF5QlksTUFBekIsQ0FBZ0MsUUFBaEM7QUFDSCxjQUhEOztBQUtBO0FBQ0E1QyxnQkFBRywwQkFBSCxFQUErQkksRUFBL0IsQ0FBa0MsT0FBbEMsRUFBMkMsWUFBWTtBQUNuRFIsbUJBQUUsZ0JBQUYsRUFBb0JpRCxLQUFwQjtBQUNILGNBRkQ7QUFHSDs7QUFFRDtBQUNBN0MsWUFBRyxhQUFILEVBQWtCSSxFQUFsQixDQUFxQixPQUFyQixFQUE4QlksWUFBWU0sVUFBMUM7QUFDQXRCLFlBQUcsUUFBSCxFQUFhSSxFQUFiLENBQWdCLE9BQWhCLEVBQXlCWSxZQUFZTSxVQUFyQzs7QUFFQTtBQUNBMUIsV0FBRSxZQUFGLEVBQWdCUSxFQUFoQixDQUFtQixPQUFuQixFQUE0QixZQUFZO0FBQ3BDLGlCQUFJMEMsV0FBVzlDLEdBQUcsbUJBQUgsQ0FBZjtBQUNBLGtCQUFLLElBQUltQyxJQUFJLENBQWIsRUFBZ0JBLElBQUlXLFNBQVNWLE1BQTdCLEVBQXFDRCxHQUFyQyxFQUEwQztBQUN0Q1csMEJBQVNYLENBQVQsRUFBWUgsU0FBWixDQUFzQkMsTUFBdEIsQ0FBNkIsU0FBN0I7QUFDSDtBQUNELGtCQUFLRCxTQUFMLENBQWVDLE1BQWYsQ0FBc0IsU0FBdEI7QUFDSCxVQU5EOztBQVFBbEIsZ0JBQU8scUJBQVAsRUFBOEJYLEVBQTlCLENBQWlDLE9BQWpDLEVBQTBDLFlBQVk7QUFDbERZLHlCQUFZQyxVQUFaLENBQXVCckIsRUFBRSxTQUFGLEVBQWFnQyxTQUFiLEdBQXlCLEVBQWhELEVBQW9ELEdBQXBEO0FBQ0gsVUFGRDtBQUdILE1BckNEO0FBc0NILEU7Ozs7Ozs7Ozs7OzttQkMxRmMsVUFBQ2hDLENBQUQsRUFBSUksRUFBSixFQUFXOztBQUV0QixTQUFJK0MsU0FBUyxFQUFiO0FBQ0EsU0FBSUMsVUFBVSxFQUFkO0FBQ0EsU0FBSUMsV0FBV3JELEVBQUUsWUFBRixDQUFmO0FBQ0EsU0FBSXNELG1CQUFtQmxELEdBQUcsbUJBQUgsQ0FBdkI7QUFDQSxTQUFJbUQsa0JBQWtCbkQsR0FBRywyQkFBSCxFQUFnQ29DLE1BQXREOztBQUVBL0IsWUFBTytDLG9CQUFQLEdBQThCLFVBQVVDLEVBQVYsRUFBYzs7QUFFeEMsYUFBSUYsZUFBSixFQUFxQjtBQUNqQkYsc0JBQVNqQixTQUFULENBQW1CQyxNQUFuQixDQUEwQixTQUExQjtBQUNIOztBQUVEcUIsZ0NBQXVCRCxFQUF2Qjs7QUFFQUU7O0FBRUEsYUFBSUosZUFBSixFQUFxQjtBQUNqQkYsc0JBQVNqQixTQUFULENBQW1CTyxHQUFuQixDQUF1QixTQUF2QjtBQUNIO0FBQ0osTUFiRDs7QUFlQSxjQUFTZSxzQkFBVCxDQUFnQ0QsRUFBaEMsRUFBb0M7QUFDaENOLGtCQUFTTSxHQUFHM0IsWUFBSCxDQUFnQixTQUFoQixDQUFUO0FBQ0FzQixtQkFBVXBELEVBQUUsY0FBY21ELE1BQWhCLENBQVY7QUFDQSxjQUFLLElBQUlaLElBQUksQ0FBYixFQUFnQkEsSUFBSWUsaUJBQWlCZCxNQUFyQyxFQUE2Q0QsR0FBN0MsRUFBa0Q7QUFDOUMsaUJBQUksRUFBRWUsaUJBQWlCZixDQUFqQixFQUFvQlYsRUFBcEIsS0FBMkJ1QixRQUFRdkIsRUFBckMsQ0FBSixFQUE4QztBQUMxQ3lCLGtDQUFpQmYsQ0FBakIsRUFBb0JILFNBQXBCLENBQThCQyxNQUE5QixDQUFxQyxTQUFyQztBQUNIO0FBQ0o7QUFDSjs7QUFFRCxjQUFTc0IsaUJBQVQsR0FBNkI7QUFDekJQLGlCQUFRaEIsU0FBUixDQUFrQlksTUFBbEIsQ0FBeUIsU0FBekI7QUFDQU8sMkJBQWtCbkQsR0FBRywyQkFBSCxFQUFnQ29DLE1BQWxEO0FBQ0g7QUFDSixFOzs7Ozs7Ozs7Ozs7bUJDckNjLFVBQUN4QyxDQUFELEVBQUlJLEVBQUosRUFBVztBQUN0QixTQUFJd0QsYUFBYW5ELE9BQU9tRCxVQUFQLEdBQW9CLEVBQXJDO0FBQ0EsU0FBSVQsU0FBUyxFQUFiO0FBQ0EsU0FBSVUsbUJBQUo7QUFBQSxTQUFnQkMscUJBQWhCO0FBQUEsU0FBOEJDLGlCQUFpQixFQUEvQzs7QUFFQXRELFlBQU91RCxjQUFQLEdBQXdCLFVBQVVQLEVBQVYsRUFBYztBQUNsQ04sa0JBQVNNLEdBQUczQixZQUFILENBQWdCLE1BQWhCLENBQVQ7QUFDQStCLHNCQUFhN0QsRUFBRSxjQUFjbUQsTUFBZCxHQUF1QixTQUF6QixDQUFiO0FBQ0FXLHdCQUFlOUQsRUFBRSxjQUFjbUQsTUFBZCxHQUF1QixpQkFBekIsQ0FBZjtBQUNBWSwwQkFBaUIvRCxFQUFFLGNBQWNtRCxNQUFkLEdBQXVCLDRCQUF6QixDQUFqQjs7QUFFQSxhQUFJYyxhQUFhN0QsR0FBRyxjQUFjK0MsTUFBZCxHQUF1QixTQUExQixDQUFqQjs7QUFFQSxjQUFLLElBQUlaLElBQUksQ0FBYixFQUFnQkEsSUFBSTBCLFdBQVd6QixNQUEvQixFQUF1Q0QsR0FBdkMsRUFBNEM7QUFDeEMsaUJBQUkyQixhQUFhRCxXQUFXMUIsQ0FBWCxDQUFqQjtBQUNBcUIsd0JBQVdNLFdBQVd4RCxJQUF0QixJQUE4QndELFdBQVdDLE9BQVgsQ0FBbUJELFdBQVdFLGFBQTlCLEVBQTZDQyxLQUEzRTtBQUNIO0FBQ0RDLGlCQUFRQyxHQUFSLENBQVksdUJBQVosRUFBcUNYLFVBQXJDOztBQUVBWSw2QkFBb0JaLFVBQXBCLEVBQWdDVCxNQUFoQztBQUNILE1BZkQ7O0FBaUJBLGNBQVNxQixtQkFBVCxDQUE2QlosVUFBN0IsRUFBeUNULE1BQXpDLEVBQWlEO0FBQzdDLGNBQUssSUFBSXNCLFNBQVQsSUFBc0JiLFVBQXRCLEVBQWtDO0FBQzlCLGlCQUFJQSxXQUFXYyxjQUFYLENBQTBCRCxTQUExQixLQUF3Q2IsV0FBV2EsU0FBWCxNQUEwQixFQUF0RSxFQUEwRTtBQUN0RSx3QkFBT0UsV0FBV0YsU0FBWCxDQUFQO0FBQ0g7QUFDSjs7QUFFRCxhQUFJRyxhQUFhQyxpQkFBaUJDLFFBQWpCLENBQTBCM0IsTUFBMUIsQ0FBakI7O0FBRUFtQixpQkFBUUMsR0FBUixDQUFZLHNCQUFaLEVBQW9DSyxVQUFwQzs7QUFFQSxjQUFLLElBQUlyQyxJQUFJLENBQWIsRUFBZ0JBLElBQUlxQyxXQUFXcEMsTUFBL0IsRUFBdUNELEdBQXZDLEVBQTRDO0FBQ3hDLGlCQUFJd0MsWUFBWUgsV0FBV3JDLENBQVgsQ0FBaEI7QUFDQSxpQkFBSXlDLHlCQUF5QixFQUE3Qjs7QUFFQUMsb0JBQU9DLE1BQVAsQ0FBY0Ysc0JBQWQsRUFBc0NELFNBQXRDOztBQUVBLG9CQUFPQyx1QkFBdUJHLEtBQTlCOztBQUVBLGlCQUFJQyxLQUFLQyxTQUFMLENBQWV6QixVQUFmLE1BQStCd0IsS0FBS0MsU0FBTCxDQUFlTCxzQkFBZixDQUFuQyxFQUEyRTtBQUN2RSx3QkFBT00sZUFBZVAsU0FBZixDQUFQO0FBQ0g7O0FBRURRO0FBQ0g7QUFDSjs7QUFFRCxjQUFTWixVQUFULENBQW9CRixTQUFwQixFQUErQjtBQUMzQlosb0JBQVcyQixZQUFYLENBQXdCLFlBQXhCLEVBQXNDLEVBQXRDO0FBQ0EzQixvQkFBVzRCLFNBQVgsR0FBdUIsUUFBdkI7QUFDQTNCLHNCQUFhMkIsU0FBYixHQUF5QixnQkFBZ0JoQixTQUF6QztBQUNBVix3QkFBZTJCLFFBQWYsR0FBMEIsSUFBMUI7QUFDQXBCLGlCQUFRQyxHQUFSLENBQVksZ0JBQWdCRSxTQUE1QjtBQUNIOztBQUVELGNBQVNjLGFBQVQsR0FBeUI7QUFDckIxQixvQkFBVzJCLFlBQVgsQ0FBd0IsWUFBeEIsRUFBc0MsRUFBdEM7QUFDQTNCLG9CQUFXNEIsU0FBWCxHQUF1QixjQUF2QjtBQUNBM0Isc0JBQWEyQixTQUFiLEdBQXlCLHdCQUF6QjtBQUNBMUIsd0JBQWUyQixRQUFmLEdBQTBCLElBQTFCO0FBQ0FwQixpQkFBUUMsR0FBUixDQUFZLHdCQUFaO0FBQ0g7O0FBRUQsY0FBU2UsY0FBVCxDQUF3QlAsU0FBeEIsRUFBbUM7QUFDL0JsQixvQkFBVzJCLFlBQVgsQ0FBd0IsWUFBeEIsRUFBc0NULFVBQVVJLEtBQWhEO0FBQ0F0QixvQkFBVzRCLFNBQVgsR0FBdUIsMkJBQTJCVixVQUFVSSxLQUFyQyxHQUE2QyxRQUFwRTtBQUNBckIsc0JBQWEyQixTQUFiLEdBQXlCLEVBQXpCO0FBQ0ExQix3QkFBZTJCLFFBQWYsR0FBMEIsS0FBMUI7QUFDQXBCLGlCQUFRQyxHQUFSLENBQVlRLFVBQVVJLEtBQXRCO0FBQ0g7QUFDSixFOzs7Ozs7Ozs7Ozs7bUJDeEVjLFVBQUNuRixDQUFELEVBQU87QUFDbEIsU0FBSTRELGFBQWFuRCxPQUFPbUQsVUFBeEI7QUFDQSxTQUFJVCxTQUFTLEVBQWI7QUFDQSxTQUFJd0MsaUJBQUo7QUFBQSxTQUFjQyx1QkFBZDtBQUFBLFNBQThCQyxjQUFjLEVBQTVDOztBQUVBcEYsWUFBT3FGLFdBQVAsR0FBcUIsVUFBVXJDLEVBQVYsRUFBYztBQUMvQnJDLHFCQUFZQyxVQUFaLENBQXVCckIsRUFBRSxTQUFGLEVBQWFnQyxTQUFiLEdBQXlCLEVBQWhELEVBQW9ELEdBQXBEO0FBQ0FtQixrQkFBU00sR0FBRzNCLFlBQUgsQ0FBZ0IsU0FBaEIsQ0FBVDtBQUNBNkQsb0JBQVczRixFQUFFLGNBQWNtRCxNQUFkLEdBQXVCLFlBQXpCLENBQVg7QUFDQXlDLDBCQUFpQjVGLEVBQUUsY0FBY21ELE1BQWQsR0FBdUIsZUFBekIsQ0FBakI7QUFDQTBDLHVCQUFjN0YsRUFBRSxjQUFjbUQsTUFBZCxHQUF1QixTQUF6QixFQUFvQ3JCLFlBQXBDLENBQWlELFlBQWpELENBQWQ7O0FBRUFpRTtBQUNILE1BUkQ7O0FBVUEsY0FBU0EsZUFBVCxHQUEyQjtBQUN2QixhQUFJQyxVQUFVLEVBQWQ7QUFDQSxjQUFLLElBQUl6RCxDQUFULElBQWNxQixVQUFkLEVBQTBCO0FBQ3RCb0Msd0JBQVcsUUFBUXpELENBQVIsR0FBWSxJQUFaLEdBQW1CcUIsV0FBV3JCLENBQVgsQ0FBbkIsR0FBbUMsTUFBOUM7QUFDSDtBQUNEeUQsb0JBQVcsZUFBZUgsV0FBMUI7QUFDQUcsb0JBQVcsa0JBQWtCTCxTQUFTdEIsS0FBdEM7QUFDQXVCLHdCQUFlSCxTQUFmLEdBQTJCTyxPQUEzQjtBQUNIO0FBQ0osRTs7Ozs7Ozs7Ozs7O21CQ3hCYyxVQUFDaEcsQ0FBRCxFQUFPO0FBQ2xCUyxZQUFPd0YsUUFBUCxHQUFrQixVQUFVeEMsRUFBVixFQUFjO0FBQzVCLGFBQUlHLGFBQWFuRCxPQUFPbUQsVUFBeEI7QUFDQSxhQUFJSCxHQUFHckIsU0FBSCxDQUFhOEQsUUFBYixDQUFzQixVQUF0QixDQUFKLEVBQXVDO0FBQ25DO0FBQ0g7QUFDRDlFLHFCQUFZQyxVQUFaLENBQXVCckIsRUFBRSxTQUFGLEVBQWFnQyxTQUFiLEdBQXlCLEVBQWhELEVBQW9ELEdBQXBEOztBQUVBLGFBQUltQixTQUFTTSxHQUFHM0IsWUFBSCxDQUFnQixTQUFoQixDQUFiO0FBQ0EsYUFBSTZELFdBQVczRixFQUFFLGNBQWNtRCxNQUFkLEdBQXVCLFlBQXpCLENBQWY7QUFDQSxhQUFJZ0QsY0FBYzFDLEdBQUczQixZQUFILENBQWdCLE1BQWhCLENBQWxCO0FBQ0EsYUFBSXNFLGdCQUFnQnBHLEVBQUUsY0FBY21ELE1BQWQsR0FBdUIsY0FBekIsQ0FBcEI7QUFDQSxhQUFJa0QsWUFBWXJHLEVBQUUsY0FBY21ELE1BQWQsR0FBdUIsZ0NBQXpCLENBQWhCO0FBQ0EsYUFBSW1ELGdCQUFnQnRHLEVBQUUsY0FBY21ELE1BQWQsR0FBdUIsK0JBQXpCLENBQXBCO0FBQ0EsYUFBSW9ELGFBQWF2RyxFQUFFLGNBQWNtRCxNQUFkLEdBQXVCLDJCQUF6QixDQUFqQjtBQUNBLGFBQUlxRCxhQUFheEcsRUFBRSxjQUFjbUQsTUFBZCxHQUF1QiwyQkFBekIsQ0FBakI7O0FBRUEsYUFBSXNELFFBQVF6RyxFQUFFLGNBQWNtRCxNQUFkLEdBQXVCLEtBQXpCLEVBQWdDdUQsU0FBNUM7QUFDQSxhQUFJdkIsUUFBUW5GLEVBQUUsY0FBY21ELE1BQWQsR0FBdUIsU0FBekIsRUFBb0NyQixZQUFwQyxDQUFpRCxZQUFqRCxDQUFaO0FBQ0EsYUFBSTZFLFdBQVdDLEtBQUtDLEtBQUwsQ0FBWUQsS0FBS0UsTUFBTCxLQUFnQixNQUE1QixDQUFmO0FBQ0EsYUFBSUMsY0FBYztBQUNkLHNCQUFTTixRQUFRLElBQVIsR0FBZUUsUUFBZixHQUEwQixHQURyQjtBQUVkLHdCQUFXdkIsS0FBS0MsU0FBTCxDQUFlekIsVUFBZixJQUE2QixXQUE3QixHQUEyQ3VCLEtBQTNDLEdBQW1ELGVBQW5ELEdBQXFFUSxTQUFTdEIsS0FBOUUsR0FBc0YsR0FGbkY7QUFHZCx1QkFBVTtBQUhJLFVBQWxCOztBQU1BLGNBQUssSUFBSTlCLENBQVQsSUFBY3FCLFVBQWQsRUFBMEI7QUFDdEJtRCx5QkFBWSxXQUFXeEUsQ0FBdkIsSUFBNEJxQixXQUFXckIsQ0FBWCxDQUE1QjtBQUNIOztBQUVEd0UscUJBQVksYUFBWixJQUE2QjVCLEtBQTdCO0FBQ0E0QixxQkFBWSxnQkFBWixJQUFnQ3BCLFNBQVN0QixLQUF6QztBQUNBMEMscUJBQVksaUJBQVosSUFBaUNWLFVBQVVoQyxLQUEzQztBQUNBMEMscUJBQVksZ0JBQVosSUFBZ0NULGNBQWNqQyxLQUE5QztBQUNBMEMscUJBQVksWUFBWixJQUE0QlIsV0FBV2xDLEtBQXZDO0FBQ0EwQyxxQkFBWSxZQUFaLElBQTRCUCxXQUFXbkMsS0FBdkM7O0FBRUFDLGlCQUFRQyxHQUFSLENBQVl3QyxXQUFaOztBQUVBLGFBQUlmLFVBQVUsRUFBZDs7QUFFQSxjQUFLLElBQUl6RCxFQUFULElBQWNxQixVQUFkLEVBQTBCO0FBQ3RCb0Msd0JBQVcsUUFBUXpELEVBQVIsR0FBWSxJQUFaLEdBQW1CcUIsV0FBV3JCLEVBQVgsQ0FBbkIsR0FBbUMsTUFBOUM7QUFDSDtBQUNEeUQsb0JBQVcsZUFBZWUsWUFBWUMsV0FBM0IsR0FBeUMsTUFBcEQ7QUFDQWhCLG9CQUFXLGtCQUFrQkwsU0FBU3RCLEtBQTNCLEdBQW1DLE1BQTlDO0FBQ0EyQixvQkFBVyxxQkFBc0JMLFNBQVN0QixLQUFULEdBQWlCMEMsWUFBWUMsV0FBbkQsR0FBa0UsTUFBN0U7QUFDQWhCLG9CQUFXLG9CQUFvQmUsWUFBWUUsZUFBaEMsR0FBa0QsTUFBN0Q7QUFDQWpCLG9CQUFXLG1CQUFtQmUsWUFBWUcsY0FBL0IsR0FBZ0QsTUFBM0Q7QUFDQWxCLG9CQUFXLGVBQWVlLFlBQVlJLFVBQTNCLEdBQXdDLE1BQW5EOztBQUVBeEYsZUFBTUMsY0FBTjs7QUFHQXdGLGVBQU0sMkJBQU4sRUFBbUM7QUFDL0JDLG1CQUFNakMsS0FBS0MsU0FBTCxDQUFlMEIsV0FBZixDQUR5QjtBQUUvQjtBQUNBO0FBQ0FPLHNCQUFTO0FBQ0wsK0JBQWNDLGNBQWNDLEtBRHZCO0FBRUwsaUNBQWdCO0FBRlgsY0FKc0I7QUFRL0JDLHFCQUFRO0FBUnVCLFVBQW5DLEVBVUtDLElBVkwsQ0FVVSxVQUFVQyxRQUFWLEVBQW9CO0FBQ3RCckQscUJBQVFDLEdBQVIsQ0FBWW9ELFFBQVo7O0FBRUEsaUJBQUlBLFNBQVNDLE1BQVQsS0FBb0IsR0FBeEIsRUFBNkI7QUFDekJ0RCx5QkFBUUMsR0FBUixDQUFZLGNBQWNvRCxTQUFTQyxNQUF2QixHQUFnQyxHQUFoQyxHQUFzQ0QsU0FBU0UsVUFBM0Q7QUFDQUMsdUJBQU0sY0FBY0gsU0FBU0MsTUFBdkIsR0FBZ0MsR0FBaEMsR0FBc0NELFNBQVNFLFVBQXJEO0FBQ0E7QUFDSDs7QUFFRCxpQkFBSUYsU0FBU0MsTUFBVCxLQUFvQixHQUF4QixFQUE2QjtBQUN6QjVCLDRCQUFXLFNBQVMyQixTQUFTRSxVQUFsQixHQUErQixxQkFBMUM7QUFDQTFHLHdCQUFPZ0YsV0FBUCxFQUFvQjRCLFFBQXBCLENBQTZCLE1BQTdCO0FBQ0EzQiwrQkFBY1gsU0FBZCxHQUEwQk8sT0FBMUI7QUFDQTFCLHlCQUFRQyxHQUFSLENBQVlvRCxTQUFTRSxVQUFULEdBQXNCLHFCQUFsQztBQUNBQyx1QkFBTUgsU0FBU0UsVUFBVCxHQUFzQixxQkFBNUI7QUFDSDtBQUNKLFVBMUJMLEVBMkJLRyxLQTNCTCxDQTJCV0YsS0EzQlg7QUE0QkgsTUFqRkQ7QUFrRkgsRTs7Ozs7Ozs7Ozs7O21CQ25GYyxZQUFNO0FBQ2pCeEQsYUFBUUMsR0FBUixDQUFZLDZCQUFaLEVBQTJDcEQsT0FBT1IsRUFBUCxDQUFVc0gsU0FBVixDQUFvQkMsV0FBcEIsQ0FBZ0NDLE9BQTNFO0FBQ0FoSCxZQUFPLE1BQVAsRUFBZThHLFNBQWYsQ0FBeUI7QUFDckJHLGdCQUFPO0FBQ1A7QUFGcUIsTUFBekI7QUFJSCxFOzs7Ozs7Ozs7Ozs7QUNORDs7Ozs7O21CQUVlLFlBQU07QUFDakIsU0FBSUMsVUFBVTtBQUNWQyxlQUFNLGNBQVVDLFlBQVYsRUFBd0JDLEdBQXhCLEVBQTZCQyxPQUE3QixFQUFzQztBQUN4QyxpQkFBSUMsa0JBQWtCSCxhQUFhSSxXQUFiLEVBQXRCO0FBQ0EsaUJBQUksQ0FBQ0YsUUFBUUcsUUFBUixDQUFpQixXQUFqQixDQUFMLEVBQW9DO0FBQ2hDTCw4QkFBYU0sR0FBYixDQUFpQixRQUFqQixFQUEyQkgsZUFBM0I7QUFDQUQseUJBQVFLLFFBQVIsQ0FBaUIsV0FBakI7O0FBRUFOLHFCQUFJTyxTQUFKLENBQWM7QUFDVkMsMkJBQU0sY0FBVXJILEtBQVYsRUFBaUJzSCxFQUFqQixFQUFxQjtBQUN2QkEsNEJBQUdDLFFBQUgsQ0FBWUMsSUFBWixHQUFtQnZDLEtBQUt3QyxHQUFMLENBQVMsR0FBVCxFQUFjSCxHQUFHQyxRQUFILENBQVlDLElBQTFCLENBQW5CO0FBQ0FGLDRCQUFHQyxRQUFILENBQVlHLEdBQVosR0FBa0J6QyxLQUFLd0MsR0FBTCxDQUFTLEdBQVQsRUFBY0gsR0FBR0MsUUFBSCxDQUFZRyxHQUExQixDQUFsQjtBQUNIO0FBSlMsa0JBQWQ7QUFNSCxjQVZELE1BVU87QUFDSGQsOEJBQWFNLEdBQWIsQ0FBaUIsUUFBakIsRUFBMkIsTUFBM0I7QUFDQUoseUJBQVFhLFdBQVIsQ0FBb0IsV0FBcEI7QUFDSDtBQUNKLFVBakJTO0FBa0JWQyxpQkFBUSxpQkFBVUMsT0FBVixFQUFtQmpCLFlBQW5CLEVBQWlDRSxPQUFqQyxFQUEwQztBQUM5QyxpQkFBSWdCLE1BQU1ELFFBQVFFLElBQVIsQ0FBYSxNQUFiLENBQVY7QUFBQSxpQkFDSUMsU0FBU0gsUUFBUUksUUFBUixFQURiO0FBQUEsaUJBRUlwQixNQUFNZ0IsUUFBUUssTUFBUixHQUFpQkMsSUFBakIsR0FBd0JDLFFBQXhCLEVBRlY7O0FBSUFQLHFCQUFRVixRQUFSLENBQWlCLFdBQWpCOztBQUVBYSxvQkFBT0ssSUFBUCxDQUFZLFlBQVk7QUFDcEIscUJBQUksc0JBQUUsSUFBRixFQUFRcEIsUUFBUixDQUFpQixXQUFqQixDQUFKLEVBQW1DO0FBQy9CLDJDQUFFLElBQUYsRUFBUVUsV0FBUixDQUFvQixXQUFwQjtBQUNIO0FBQ0osY0FKRDs7QUFNQSxpQkFBSWIsUUFBUUcsUUFBUixDQUFpQixXQUFqQixDQUFKLEVBQW1DO0FBQy9CSCx5QkFBUWEsV0FBUixDQUFvQixXQUFwQjtBQUNBZiw4QkFBYU0sR0FBYixDQUFpQixRQUFqQixFQUEyQixNQUEzQjtBQUNIOztBQUVEO0FBQ0FMLGlCQUFJa0IsSUFBSixDQUFTLEtBQVQsRUFBZ0JELEdBQWhCO0FBQ0g7QUF0Q1MsTUFBZDs7QUF5Q0EsU0FBSWhCLFVBQVUsc0JBQUUsVUFBRixDQUFkO0FBQ0FBLGFBQVFqSSxFQUFSLENBQVcsT0FBWCxFQUFvQixHQUFwQixFQUF5QixVQUFVbUIsS0FBVixFQUFpQjtBQUN0QyxhQUFJNkgsVUFBVSxzQkFBRSxJQUFGLENBQWQ7QUFDQSxhQUFJUyxjQUFjVCxRQUFRVSxJQUFSLENBQWEsU0FBYixDQUFsQjtBQUNBLGFBQUlDLFlBQVl4SSxNQUFNeUksY0FBTixDQUFxQnZJLEVBQXJDO0FBQ0E0RyxtQkFBVSxzQkFBRSxNQUFNMEIsU0FBUixDQUFWOztBQUVBLGFBQUlGLGdCQUFnQixNQUFwQixFQUE0QjtBQUN4QixpQkFBSTFCLGVBQWVpQixRQUFRSyxNQUFSLEVBQW5CO0FBQUEsaUJBQ0lyQixNQUFNZ0IsUUFBUUksUUFBUixFQURWO0FBRUF2QixxQkFBUUMsSUFBUixDQUFhQyxZQUFiLEVBQTJCQyxHQUEzQixFQUFnQ0MsT0FBaEM7QUFDSCxVQUpELE1BSU8sSUFBSXdCLGdCQUFnQixPQUFwQixFQUE2QjtBQUNoQyxpQkFBSTFCLGdCQUFlaUIsUUFBUUssTUFBUixHQUFpQkQsUUFBakIsRUFBbkI7QUFDQXZCLHFCQUFRa0IsTUFBUixDQUFlQyxPQUFmLEVBQXdCakIsYUFBeEIsRUFBc0NFLE9BQXRDO0FBQ0gsVUFITSxNQUdBO0FBQ0g7QUFDSDtBQUNEOUcsZUFBTUMsY0FBTjtBQUNILE1BakJEO0FBa0JILEU7Ozs7OztBQy9ERCx5QiIsImZpbGUiOiJjb21tb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA5OTdjY2I0MjMwYjIzODA3MTBlNCIsIi8vIGltcG9ydCAkIGZyb20gXCJqcXVlcnlcIjtcclxuXHJcbmNvbnN0ICQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yLmJpbmQoZG9jdW1lbnQpO1xyXG5jb25zdCAkJCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwuYmluZChkb2N1bWVudCk7XHJcblxyXG5Ob2RlLnByb3RvdHlwZS5vbiA9IHdpbmRvdy5vbiA9IGZ1bmN0aW9uIChuYW1lLCBmbikge1xyXG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKG5hbWUsIGZuKTtcclxufTtcclxuXHJcbk5vZGVMaXN0LnByb3RvdHlwZS5fX3Byb3RvX18gPSBBcnJheS5wcm90b3R5cGU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcclxuTm9kZUxpc3QucHJvdG90eXBlLl9fcHJvdG9fXyA9IERvY3VtZW50LnByb3RvdHlwZTtcclxuLy9Ob2RlTGlzdC5wcm90b3R5cGUuX19wcm90b19fID0galF1ZXJ5LnByb3RvdHlwZS5hbmltYXRlKCk7XHJcblxyXG5Ob2RlTGlzdC5wcm90b3R5cGUub24gPSBOb2RlTGlzdC5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uIChuYW1lLCBmbikge1xyXG4gICAgdGhpcy5mb3JFYWNoKChlbGVtKSA9PiB7XHJcbiAgICAgICAgZWxlbS5vbihuYW1lLCBmbik7XHJcbiAgICB9KTtcclxufTtcclxuLy9leHBvcnQgeyQsICQkfTtcclxuXHJcbmltcG9ydCBtYWluIGZyb20gXCIuL21vZHVsZXMvbWFpblwiO1xyXG5pbXBvcnQgdG9nZ2xlQ2hvb3NlU2VjdGlvbnMgZnJvbSBcIi4vbW9kdWxlcy90b2dnbGVDaG9vc2VTZWN0aW9uc1wiO1xyXG5pbXBvcnQgb25DaGFuZ2VTZWxlY3QgZnJvbSBcIi4vbW9kdWxlcy9vbkNoYW5nZVNlbGVjdFwiO1xyXG5pbXBvcnQgY2hlY2tvdXRCdG4gZnJvbSBcIi4vbW9kdWxlcy9jaGVja291dEJ0blwiO1xyXG5pbXBvcnQgYWRkT3JkZXIgZnJvbSBcIi4vbW9kdWxlcy9hZGRPcmRlclwiO1xyXG5pbXBvcnQgdmFsaWRhdGlvbiBmcm9tIFwiLi9tb2R1bGVzL3ZhbGlkYXRpb25cIjtcclxuaW1wb3J0IGdhbGxlcnkgZnJvbSBcIi4vbW9kdWxlcy9nYWxsZXJ5XCI7XHJcblxyXG5cclxualF1ZXJ5KGZ1bmN0aW9uICgpIHtcclxuICAgIG1haW4oJCwgJCQpO1xyXG4gICAgdG9nZ2xlQ2hvb3NlU2VjdGlvbnMoJCwgJCQpO1xyXG4gICAgb25DaGFuZ2VTZWxlY3QoJCwgJCQpO1xyXG4gICAgY2hlY2tvdXRCdG4oJCk7XHJcbiAgICBhZGRPcmRlcigkKTtcclxuICAgIHZhbGlkYXRpb24oJCk7XHJcbiAgICBnYWxsZXJ5KCk7XHJcbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9zcmMvamF2YXNjcmlwdHMvY29tbW9uLmpzIiwiZXhwb3J0IGRlZmF1bHQgKCQsICQkKSA9PiB7XHJcblxyXG4gICAgd2luZG93Lk1haW5NZXRob2RzID0ge1xyXG4gICAgICAgIHNjcm9sbEVsZW06IGZ1bmN0aW9uIChwcm9wZXJ0eSwgZHVyYXRpb24pIHtcclxuICAgICAgICAgICAgalF1ZXJ5KCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICBzY3JvbGxUb3A6IHByb3BlcnR5XHJcbiAgICAgICAgICAgIH0sIGR1cmF0aW9uKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxhenlTY3JvbGw6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgbGV0IGlkID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcclxuICAgICAgICAgICAgbGV0IG9mZnNldCA9ICQoaWQpLm9mZnNldFRvcDtcclxuICAgICAgICAgICAgLy9kb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaHRtbCcpWzBdLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICBpZiAoaWQgPT09IFwiI2Nob29zZVwiKSB7XHJcbiAgICAgICAgICAgICAgICBvZmZzZXQgLT0gNTA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgTWFpbk1ldGhvZHMuc2Nyb2xsRWxlbShvZmZzZXQsIDcwMCk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBuYXZiYXJUb0RlZmF1bHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJCgnLm5hdmJhci1kZWZhdWx0Jykuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3RyYW5zcGFyZW50JztcclxuICAgICAgICAgICAgJCgnLm5hdmJhci1icmFuZCBpbWcnKS5jbGFzc0xpc3QucmVtb3ZlKCdpbWdfcmVzcG9uc2l2ZScpO1xyXG4gICAgICAgICAgICAkKCcubmF2YmFyLWZpeGVkLXRvcCcpLmNsYXNzTGlzdC5yZW1vdmUoJ3RvcC1uYXYtY29sbGFwc2UnKTtcclxuICAgICAgICAgICAgbGV0IG1lbnVJdGVtID0gJCQoJy5uYXZiYXItbmF2IGEnKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtZW51SXRlbS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbWVudUl0ZW1baV0uY2xhc3NMaXN0LnJlbW92ZSgnd2hpdGUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbmF2YmFyVG9GbG9hdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBsZXQgbmF2YmFyID0gJCgnLm5hdmJhci1kZWZhdWx0Jyk7XHJcbiAgICAgICAgICAgIG5hdmJhci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmdiYSg0OCwgNDgsIDQ4LCAwLjUpJztcclxuICAgICAgICAgICAgbmF2YmFyLmNsYXNzTGlzdC5hZGQoJ3RvcC1uYXYtY29sbGFwc2UnKTtcclxuICAgICAgICAgICAgJCgnLm5hdmJhci1icmFuZCBpbWcnKS5jbGFzc0xpc3QuYWRkKCdpbWdfcmVzcG9uc2l2ZScpO1xyXG4gICAgICAgICAgICBsZXQgbWVudUl0ZW0gPSAkJCgnLm5hdmJhci1uYXYgYScpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1lbnVJdGVtLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBtZW51SXRlbVtpXS5jbGFzc0xpc3QuYWRkKCd3aGl0ZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXROYXZTdHlsZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGlzLm5hdmJhclRvRmxvYXQoKTtcclxuICAgICAgICAgICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA8IDUwKSB7XHJcbiAgICAgICAgICAgICAgICBNYWluTWV0aG9kcy5uYXZiYXJUb0RlZmF1bHQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICB9O1xyXG5cclxuICAgIHdpbmRvdy5vbignbG9hZCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKCcubG9hZGVyX2lubmVyJykuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICQoJy5sb2FkZXInKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICB9KTtcclxuXHJcbiAgICB3aW5kb3cub24oJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy9OYXZiYXIgc3R5bGUgc3dpdGNoZXJcclxuICAgICAgICBNYWluTWV0aG9kcy5zZXROYXZTdHlsZSgpO1xyXG4gICAgICAgIHdpbmRvdy5vbignc2Nyb2xsJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBNYWluTWV0aG9kcy5zZXROYXZTdHlsZSgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvL0ZPUiBNT0JJTEVcclxuICAgICAgICBpZiAod2luZG93Lm91dGVyV2lkdGggPCA3NjgpIHtcclxuICAgICAgICAgICAgLy9TQU5EV0lDSCBCVVRUT05cclxuICAgICAgICAgICAgJCgnLm5hdmJhci10b2dnbGUnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBNYWluTWV0aG9kcy5uYXZiYXJUb0Zsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAkKCcuc2FuZHdpY2gnKS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvL0hJREUgTUVOVSBDTElDS0lORyBMSVxyXG4gICAgICAgICAgICAkJCgnLm5hdmJhci1jb2xsYXBzZSB1bCBsaSBhJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgJCgnLm5hdmJhci10b2dnbGUnKS5jbGljaygpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vTEFaWSBBTklNQVRJTkcgRk9SIEJVVFRPTlMgQU5EIE1FTlUgSVRFTVNcclxuICAgICAgICAkJCgnLnNjcm9sbF9idG4nKS5vbignY2xpY2snLCBNYWluTWV0aG9kcy5sYXp5U2Nyb2xsKTtcclxuICAgICAgICAkJCgnLm5hdiBhJykub24oJ2NsaWNrJywgTWFpbk1ldGhvZHMubGF6eVNjcm9sbCk7XHJcblxyXG4gICAgICAgIC8vQ0xPU0UgQlVUVE9OIFhcclxuICAgICAgICAkKCcuY2xvc2UtYnRuJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBsZXQgc2VjdGlvbnMgPSAkJCgnLmNvbGxhcHNlLXNlY3Rpb24nKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWN0aW9ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgc2VjdGlvbnNbaV0uY2xhc3NMaXN0LnJlbW92ZSgnc2hvd2luZycpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuY2xhc3NMaXN0LnJlbW92ZSgnc2hvd2luZycpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBqUXVlcnkoJ1tkYXRhLXNsaWRlPVwicHJldlwiXScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgTWFpbk1ldGhvZHMuc2Nyb2xsRWxlbSgkKFwiI2Nob29zZVwiKS5vZmZzZXRUb3AgLSA1MCwgMTAwKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9zcmMvamF2YXNjcmlwdHMvbW9kdWxlcy9tYWluLmpzIiwiZXhwb3J0IGRlZmF1bHQgKCQsICQkKSA9PiB7XHJcblxyXG4gICAgbGV0IGRhdGFJRCA9IFwiXCI7XHJcbiAgICBsZXQgc2VjdGlvbiA9IHt9O1xyXG4gICAgbGV0IGNsb3NlQnRuID0gJCgnLmNsb3NlLWJ0bicpO1xyXG4gICAgbGV0IGNvbGxhcHNlU2VjdGlvbnMgPSAkJCgnLmNvbGxhcHNlLXNlY3Rpb24nKTtcclxuICAgIGxldCBzaG93aW5nU2VjdGlvbnMgPSAkJCgnLmNvbGxhcHNlLXNlY3Rpb24uc2hvd2luZycpLmxlbmd0aDtcclxuXHJcbiAgICB3aW5kb3cudG9nZ2xlQ2hvb3NlU2VjdGlvbnMgPSBmdW5jdGlvbiAoZWwpIHtcclxuXHJcbiAgICAgICAgaWYgKHNob3dpbmdTZWN0aW9ucykge1xyXG4gICAgICAgICAgICBjbG9zZUJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdzaG93aW5nJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb2xsYXBzZU9wZW5lZFNlY3Rpb25zKGVsKTtcclxuXHJcbiAgICAgICAgc2hvd1RhcmdldFNlY3Rpb24oKTtcclxuXHJcbiAgICAgICAgaWYgKHNob3dpbmdTZWN0aW9ucykge1xyXG4gICAgICAgICAgICBjbG9zZUJ0bi5jbGFzc0xpc3QuYWRkKCdzaG93aW5nJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBjb2xsYXBzZU9wZW5lZFNlY3Rpb25zKGVsKSB7XHJcbiAgICAgICAgZGF0YUlEID0gZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XHJcbiAgICAgICAgc2VjdGlvbiA9ICQoJyNzZWN0aW9uLScgKyBkYXRhSUQpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29sbGFwc2VTZWN0aW9ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoIShjb2xsYXBzZVNlY3Rpb25zW2ldLmlkID09PSBzZWN0aW9uLmlkKSkge1xyXG4gICAgICAgICAgICAgICAgY29sbGFwc2VTZWN0aW9uc1tpXS5jbGFzc0xpc3QucmVtb3ZlKCdzaG93aW5nJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2hvd1RhcmdldFNlY3Rpb24oKSB7XHJcbiAgICAgICAgc2VjdGlvbi5jbGFzc0xpc3QudG9nZ2xlKCdzaG93aW5nJyk7XHJcbiAgICAgICAgc2hvd2luZ1NlY3Rpb25zID0gJCQoJy5jb2xsYXBzZS1zZWN0aW9uLnNob3dpbmcnKS5sZW5ndGg7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvc3JjL2phdmFzY3JpcHRzL21vZHVsZXMvdG9nZ2xlQ2hvb3NlU2VjdGlvbnMuanMiLCJleHBvcnQgZGVmYXVsdCAoJCwgJCQpID0+IHtcclxuICAgIGxldCB1c2VyQ2hvaWNlID0gd2luZG93LnVzZXJDaG9pY2UgPSB7fTtcclxuICAgIGxldCBkYXRhSUQgPSBcIlwiO1xyXG4gICAgbGV0IHByaW50UHJpY2UsIHByaW50TWVzc2FnZSwgY2hlY2tvdXRCdXR0b24gPSB7fTtcclxuXHJcbiAgICB3aW5kb3cub25DaGFuZ2VTZWxlY3QgPSBmdW5jdGlvbiAoZWwpIHtcclxuICAgICAgICBkYXRhSUQgPSBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEnKTtcclxuICAgICAgICBwcmludFByaWNlID0gJCgnI3NlY3Rpb24tJyArIGRhdGFJRCArICcgLnByaWNlJyk7XHJcbiAgICAgICAgcHJpbnRNZXNzYWdlID0gJCgnI3NlY3Rpb24tJyArIGRhdGFJRCArICcgLmVycm9yLW1lc3NhZ2UnKTtcclxuICAgICAgICBjaGVja291dEJ1dHRvbiA9ICQoXCIjc2VjdGlvbi1cIiArIGRhdGFJRCArIFwiIGJ1dHRvbltkYXRhLXNsaWRlPSduZXh0J11cIik7XHJcblxyXG4gICAgICAgIGxldCBhbGxTZWxlY3RzID0gJCQoJyNzZWN0aW9uLScgKyBkYXRhSUQgKyAnIHNlbGVjdCcpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbFNlbGVjdHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGl0ZW1TZWxlY3QgPSBhbGxTZWxlY3RzW2ldO1xyXG4gICAgICAgICAgICB1c2VyQ2hvaWNlW2l0ZW1TZWxlY3QubmFtZV0gPSBpdGVtU2VsZWN0Lm9wdGlvbnNbaXRlbVNlbGVjdC5zZWxlY3RlZEluZGV4XS52YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1RoaXMgaXMgdXNlciBjaG9pY2U6ICcsIHVzZXJDaG9pY2UpO1xyXG5cclxuICAgICAgICBjb21wYXJlQXZhaWxhYmlsaXR5KHVzZXJDaG9pY2UsIGRhdGFJRCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIGNvbXBhcmVBdmFpbGFiaWxpdHkodXNlckNob2ljZSwgZGF0YUlEKSB7XHJcbiAgICAgICAgZm9yIChsZXQgcGFyYW1ldGVyIGluIHVzZXJDaG9pY2UpIHtcclxuICAgICAgICAgICAgaWYgKHVzZXJDaG9pY2UuaGFzT3duUHJvcGVydHkocGFyYW1ldGVyKSAmJiB1c2VyQ2hvaWNlW3BhcmFtZXRlcl0gPT09IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBtaXNzU2VsZWN0KHBhcmFtZXRlcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCB2YXJpYXRpb25zID0gdmFyaWF0aW9uc09iamVjdC5kYXRhQnlJZFtkYXRhSURdO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZygnVGhpcyBpcyBWYXJpYXRpb25zOiAnLCB2YXJpYXRpb25zKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YXJpYXRpb25zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCB2YXJpYXRpb24gPSB2YXJpYXRpb25zW2ldO1xyXG4gICAgICAgICAgICBsZXQgdmFyaWF0aW9uc1dpdGhvdXRQcmljZSA9IHt9O1xyXG5cclxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih2YXJpYXRpb25zV2l0aG91dFByaWNlLCB2YXJpYXRpb24pO1xyXG5cclxuICAgICAgICAgICAgZGVsZXRlIHZhcmlhdGlvbnNXaXRob3V0UHJpY2UucHJpY2U7XHJcblxyXG4gICAgICAgICAgICBpZiAoSlNPTi5zdHJpbmdpZnkodXNlckNob2ljZSkgPT09IEpTT04uc3RyaW5naWZ5KHZhcmlhdGlvbnNXaXRob3V0UHJpY2UpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbWF0Y2hWYXJpYXRpb24odmFyaWF0aW9uKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbWlzc1ZhcmlhdGlvbigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBtaXNzU2VsZWN0KHBhcmFtZXRlcikge1xyXG4gICAgICAgIHByaW50UHJpY2Uuc2V0QXR0cmlidXRlKCdkYXRhLXByaWNlJywgJycpO1xyXG4gICAgICAgIHByaW50UHJpY2UuaW5uZXJIVE1MID0gXCImbmJzcDtcIjtcclxuICAgICAgICBwcmludE1lc3NhZ2UuaW5uZXJIVE1MID0gJ1NlbGVjdCB0aGUgJyArIHBhcmFtZXRlcjtcclxuICAgICAgICBjaGVja291dEJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1NlbGVjdCB0aGUgJyArIHBhcmFtZXRlcik7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbWlzc1ZhcmlhdGlvbigpIHtcclxuICAgICAgICBwcmludFByaWNlLnNldEF0dHJpYnV0ZSgnZGF0YS1wcmljZScsICcnKTtcclxuICAgICAgICBwcmludFByaWNlLmlubmVySFRNTCA9ICc8aDM+LSAtPC9oMz4nO1xyXG4gICAgICAgIHByaW50TWVzc2FnZS5pbm5lckhUTUwgPSAnVmFyaWF0aW9uIGlzIG5vdCBmb3VuZCc7XHJcbiAgICAgICAgY2hlY2tvdXRCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdWYXJpYXRpb24gaXMgbm90IGZvdW5kJyk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbWF0Y2hWYXJpYXRpb24odmFyaWF0aW9uKSB7XHJcbiAgICAgICAgcHJpbnRQcmljZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtcHJpY2UnLCB2YXJpYXRpb24ucHJpY2UpO1xyXG4gICAgICAgIHByaW50UHJpY2UuaW5uZXJIVE1MID0gJzxoMyBjbGFzcz1cInJlZC1wcmljZVwiPicgKyB2YXJpYXRpb24ucHJpY2UgKyAnJDwvaDM+JztcclxuICAgICAgICBwcmludE1lc3NhZ2UuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICBjaGVja291dEJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHZhcmlhdGlvbi5wcmljZSk7XHJcbiAgICB9XHJcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL3NyYy9qYXZhc2NyaXB0cy9tb2R1bGVzL29uQ2hhbmdlU2VsZWN0LmpzIiwiZXhwb3J0IGRlZmF1bHQgKCQpID0+IHtcclxuICAgIGxldCB1c2VyQ2hvaWNlID0gd2luZG93LnVzZXJDaG9pY2U7XHJcbiAgICBsZXQgZGF0YUlEID0gXCJcIjtcclxuICAgIGxldCBxdWFudGl0eSwgdXNlckNob2ljZVRleHQsIGNob2ljZVByaWNlID0ge307XHJcblxyXG4gICAgd2luZG93LmNoZWNrb3V0QnRuID0gZnVuY3Rpb24gKGVsKSB7XHJcbiAgICAgICAgTWFpbk1ldGhvZHMuc2Nyb2xsRWxlbSgkKFwiI2Nob29zZVwiKS5vZmZzZXRUb3AgLSA1MCwgMTAwKTtcclxuICAgICAgICBkYXRhSUQgPSBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcclxuICAgICAgICBxdWFudGl0eSA9ICQoJyNzZWN0aW9uLScgKyBkYXRhSUQgKyAnIC5xdWFudGl0eScpO1xyXG4gICAgICAgIHVzZXJDaG9pY2VUZXh0ID0gJCgnI3NlY3Rpb24tJyArIGRhdGFJRCArICcgLnVzZXItY2hvaWNlJyk7XHJcbiAgICAgICAgY2hvaWNlUHJpY2UgPSAkKCcjc2VjdGlvbi0nICsgZGF0YUlEICsgJyAucHJpY2UnKS5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJpY2UnKTtcclxuXHJcbiAgICAgICAgcHJpbnRVc2VyQ2hvaWNlKClcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gcHJpbnRVc2VyQ2hvaWNlKCkge1xyXG4gICAgICAgIGxldCBjb250ZW50ID0gJyc7XHJcbiAgICAgICAgZm9yIChsZXQgaSBpbiB1c2VyQ2hvaWNlKSB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQgKz0gXCI8cD5cIiArIGkgKyBcIjogXCIgKyB1c2VyQ2hvaWNlW2ldICsgXCI8L3A+XCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnRlbnQgKz0gXCI8cD5QcmljZTogXCIgKyBjaG9pY2VQcmljZTtcclxuICAgICAgICBjb250ZW50ICs9IFwiPHA+UXVhbnRpdHk6IFwiICsgcXVhbnRpdHkudmFsdWU7XHJcbiAgICAgICAgdXNlckNob2ljZVRleHQuaW5uZXJIVE1MID0gY29udGVudDtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9zcmMvamF2YXNjcmlwdHMvbW9kdWxlcy9jaGVja291dEJ0bi5qcyIsImV4cG9ydCBkZWZhdWx0ICgkKSA9PiB7XHJcbiAgICB3aW5kb3cuYWRkT3JkZXIgPSBmdW5jdGlvbiAoZWwpIHtcclxuICAgICAgICBsZXQgdXNlckNob2ljZSA9IHdpbmRvdy51c2VyQ2hvaWNlO1xyXG4gICAgICAgIGlmIChlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2Rpc2FibGVkJykpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBNYWluTWV0aG9kcy5zY3JvbGxFbGVtKCQoXCIjY2hvb3NlXCIpLm9mZnNldFRvcCAtIDUwLCAxMDApO1xyXG5cclxuICAgICAgICBsZXQgZGF0YUlEID0gZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XHJcbiAgICAgICAgbGV0IHF1YW50aXR5ID0gJCgnI3NlY3Rpb24tJyArIGRhdGFJRCArICcgLnF1YW50aXR5Jyk7XHJcbiAgICAgICAgbGV0IGVsZW1lbnRIcmVmID0gZWwuZ2V0QXR0cmlidXRlKCdocmVmJyk7XHJcbiAgICAgICAgbGV0IHVzZXJPcmRlclRleHQgPSAkKCcjc2VjdGlvbi0nICsgZGF0YUlEICsgJyAudXNlci1vcmRlcicpO1xyXG4gICAgICAgIGxldCBpbnB1dE5hbWUgPSAkKCcjc2VjdGlvbi0nICsgZGF0YUlEICsgJyBmb3JtIGlucHV0W25hbWU9XCJmaXJzdF9uYW1lXCJdJyk7XHJcbiAgICAgICAgbGV0IGlucHV0TGFzdE5hbWUgPSAkKCcjc2VjdGlvbi0nICsgZGF0YUlEICsgJyBmb3JtIGlucHV0W25hbWU9XCJsYXN0X25hbWVcIl0nKTtcclxuICAgICAgICBsZXQgaW5wdXRFbWFpbCA9ICQoJyNzZWN0aW9uLScgKyBkYXRhSUQgKyAnIGZvcm0gaW5wdXRbbmFtZT1cImVtYWlsXCJdJyk7XHJcbiAgICAgICAgbGV0IGlucHV0UGhvbmUgPSAkKCcjc2VjdGlvbi0nICsgZGF0YUlEICsgJyBmb3JtIGlucHV0W25hbWU9XCJwaG9uZVwiXScpO1xyXG5cclxuICAgICAgICBsZXQgdGl0bGUgPSAkKCcjc2VjdGlvbi0nICsgZGF0YUlEICsgJyBoMycpLmlubmVyVGV4dDtcclxuICAgICAgICBsZXQgcHJpY2UgPSAkKCcjc2VjdGlvbi0nICsgZGF0YUlEICsgJyAucHJpY2UnKS5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJpY2UnKTtcclxuICAgICAgICBsZXQgcmFuZG9tSWQgPSBNYXRoLnRydW5jKChNYXRoLnJhbmRvbSgpICogMTAwMDAwKSk7XHJcbiAgICAgICAgbGV0IHByb2R1Y3REYXRhID0ge1xyXG4gICAgICAgICAgICBcInRpdGxlXCI6IHRpdGxlICsgJyBbJyArIHJhbmRvbUlkICsgJ10nLFxyXG4gICAgICAgICAgICBcImNvbnRlbnRcIjogSlNPTi5zdHJpbmdpZnkodXNlckNob2ljZSkgKyAne1wicHJpY2VcIjonICsgcHJpY2UgKyAnLCBcInF1YW50aXR5XCI6JyArIHF1YW50aXR5LnZhbHVlICsgJ30nLFxyXG4gICAgICAgICAgICBcInN0YXR1c1wiOiAncHVibGlzaCdcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpIGluIHVzZXJDaG9pY2UpIHtcclxuICAgICAgICAgICAgcHJvZHVjdERhdGFbJ3BhcmFtXycgKyBpXSA9IHVzZXJDaG9pY2VbaV07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm9kdWN0RGF0YVsncGFyYW1fcHJpY2UnXSA9IHByaWNlO1xyXG4gICAgICAgIHByb2R1Y3REYXRhWydwYXJhbV9xdWFudGl0eSddID0gcXVhbnRpdHkudmFsdWU7XHJcbiAgICAgICAgcHJvZHVjdERhdGFbJ2luZm9fZmlyc3RfbmFtZSddID0gaW5wdXROYW1lLnZhbHVlO1xyXG4gICAgICAgIHByb2R1Y3REYXRhWydpbmZvX2xhc3RfbmFtZSddID0gaW5wdXRMYXN0TmFtZS52YWx1ZTtcclxuICAgICAgICBwcm9kdWN0RGF0YVsnaW5mb19lbWFpbCddID0gaW5wdXRFbWFpbC52YWx1ZTtcclxuICAgICAgICBwcm9kdWN0RGF0YVsnaW5mb19waG9uZSddID0gaW5wdXRQaG9uZS52YWx1ZTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2cocHJvZHVjdERhdGEpO1xyXG5cclxuICAgICAgICBsZXQgY29udGVudCA9ICcnO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpIGluIHVzZXJDaG9pY2UpIHtcclxuICAgICAgICAgICAgY29udGVudCArPSBcIjxwPlwiICsgaSArIFwiOiBcIiArIHVzZXJDaG9pY2VbaV0gKyBcIjwvcD5cIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29udGVudCArPSBcIjxwPlByaWNlOiBcIiArIHByb2R1Y3REYXRhLnBhcmFtX3ByaWNlICsgXCI8L3A+XCI7XHJcbiAgICAgICAgY29udGVudCArPSBcIjxwPlF1YW50aXR5OiBcIiArIHF1YW50aXR5LnZhbHVlICsgXCI8L3A+XCI7XHJcbiAgICAgICAgY29udGVudCArPSBcIjxwPlRvdGFsIHByaWNlOiBcIiArIChxdWFudGl0eS52YWx1ZSAqIHByb2R1Y3REYXRhLnBhcmFtX3ByaWNlKSArIFwiPC9wPlwiO1xyXG4gICAgICAgIGNvbnRlbnQgKz0gXCI8cD5GaXJzdCBuYW1lOiBcIiArIHByb2R1Y3REYXRhLmluZm9fZmlyc3RfbmFtZSArIFwiPC9wPlwiO1xyXG4gICAgICAgIGNvbnRlbnQgKz0gXCI8cD5MYXN0IG5hbWU6IFwiICsgcHJvZHVjdERhdGEuaW5mb19sYXN0X25hbWUgKyBcIjwvcD5cIjtcclxuICAgICAgICBjb250ZW50ICs9IFwiPHA+UGhvbmU6IFwiICsgcHJvZHVjdERhdGEuaW5mb19waG9uZSArIFwiPC9wPlwiO1xyXG5cclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHJcbiAgICAgICAgZmV0Y2goJy93cC1qc29uL3dwL3YyL3Nob3Bfb3JkZXInLCB7XHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHByb2R1Y3REYXRhKSxcclxuICAgICAgICAgICAgLy8gdmFyIEJhc2U2ND17X2tleVN0cjpcIkFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky89XCIsZW5jb2RlOmZ1bmN0aW9uKGUpe3ZhciB0PVwiXCI7dmFyIG4scixpLHMsbyx1LGE7dmFyIGY9MDtlPUJhc2U2NC5fdXRmOF9lbmNvZGUoZSk7d2hpbGUoZjxlLmxlbmd0aCl7bj1lLmNoYXJDb2RlQXQoZisrKTtyPWUuY2hhckNvZGVBdChmKyspO2k9ZS5jaGFyQ29kZUF0KGYrKyk7cz1uPj4yO289KG4mMyk8PDR8cj4+NDt1PShyJjE1KTw8MnxpPj42O2E9aSY2MztpZihpc05hTihyKSl7dT1hPTY0fWVsc2UgaWYoaXNOYU4oaSkpe2E9NjR9dD10K3RoaXMuX2tleVN0ci5jaGFyQXQocykrdGhpcy5fa2V5U3RyLmNoYXJBdChvKSt0aGlzLl9rZXlTdHIuY2hhckF0KHUpK3RoaXMuX2tleVN0ci5jaGFyQXQoYSl9cmV0dXJuIHR9LGRlY29kZTpmdW5jdGlvbihlKXt2YXIgdD1cIlwiO3ZhciBuLHIsaTt2YXIgcyxvLHUsYTt2YXIgZj0wO2U9ZS5yZXBsYWNlKC9bXkEtWmEtejAtOVxcK1xcL1xcPV0vZyxcIlwiKTt3aGlsZShmPGUubGVuZ3RoKXtzPXRoaXMuX2tleVN0ci5pbmRleE9mKGUuY2hhckF0KGYrKykpO289dGhpcy5fa2V5U3RyLmluZGV4T2YoZS5jaGFyQXQoZisrKSk7dT10aGlzLl9rZXlTdHIuaW5kZXhPZihlLmNoYXJBdChmKyspKTthPXRoaXMuX2tleVN0ci5pbmRleE9mKGUuY2hhckF0KGYrKykpO249czw8MnxvPj40O3I9KG8mMTUpPDw0fHU+PjI7aT0odSYzKTw8NnxhO3Q9dCtTdHJpbmcuZnJvbUNoYXJDb2RlKG4pO2lmKHUhPTY0KXt0PXQrU3RyaW5nLmZyb21DaGFyQ29kZShyKX1pZihhIT02NCl7dD10K1N0cmluZy5mcm9tQ2hhckNvZGUoaSl9fXQ9QmFzZTY0Ll91dGY4X2RlY29kZSh0KTtyZXR1cm4gdH0sX3V0ZjhfZW5jb2RlOmZ1bmN0aW9uKGUpe2U9ZS5yZXBsYWNlKC9cXHJcXG4vZyxcIlxcblwiKTt2YXIgdD1cIlwiO2Zvcih2YXIgbj0wO248ZS5sZW5ndGg7bisrKXt2YXIgcj1lLmNoYXJDb2RlQXQobik7aWYocjwxMjgpe3QrPVN0cmluZy5mcm9tQ2hhckNvZGUocil9ZWxzZSBpZihyPjEyNyYmcjwyMDQ4KXt0Kz1TdHJpbmcuZnJvbUNoYXJDb2RlKHI+PjZ8MTkyKTt0Kz1TdHJpbmcuZnJvbUNoYXJDb2RlKHImNjN8MTI4KX1lbHNle3QrPVN0cmluZy5mcm9tQ2hhckNvZGUocj4+MTJ8MjI0KTt0Kz1TdHJpbmcuZnJvbUNoYXJDb2RlKHI+PjYmNjN8MTI4KTt0Kz1TdHJpbmcuZnJvbUNoYXJDb2RlKHImNjN8MTI4KX19cmV0dXJuIHR9LF91dGY4X2RlY29kZTpmdW5jdGlvbihlKXt2YXIgdD1cIlwiO3ZhciBuPTA7dmFyIHI9YzE9YzI9MDt3aGlsZShuPGUubGVuZ3RoKXtyPWUuY2hhckNvZGVBdChuKTtpZihyPDEyOCl7dCs9U3RyaW5nLmZyb21DaGFyQ29kZShyKTtuKyt9ZWxzZSBpZihyPjE5MSYmcjwyMjQpe2MyPWUuY2hhckNvZGVBdChuKzEpO3QrPVN0cmluZy5mcm9tQ2hhckNvZGUoKHImMzEpPDw2fGMyJjYzKTtuKz0yfWVsc2V7YzI9ZS5jaGFyQ29kZUF0KG4rMSk7YzM9ZS5jaGFyQ29kZUF0KG4rMik7dCs9U3RyaW5nLmZyb21DaGFyQ29kZSgociYxNSk8PDEyfChjMiY2Myk8PDZ8YzMmNjMpO24rPTN9fXJldHVybiB0fX07XHJcbiAgICAgICAgICAgIC8vY3JlYXRlUG9zdC5zZXRSZXF1ZXN0SGVhZGVyKCAnQXV0aG9yaXphdGlvbicsICdCYXNpYyAnICsgQmFzZTY0LmVuY29kZSggJ3Rlc3Q6MDAwMCcgKSApO1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAnWC1XUC1Ob25jZSc6IHdwQXBpU2V0dGluZ3Mubm9uY2UsXHJcbiAgICAgICAgICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnXHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyAhPT0gMjAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ05vdCAyMDE6ICcgKyByZXNwb25zZS5zdGF0dXMgKyAnICcgKyByZXNwb25zZS5zdGF0dXNUZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICBhbGVydCgnTm90IDIwMTogJyArIHJlc3BvbnNlLnN0YXR1cyArICcgJyArIHJlc3BvbnNlLnN0YXR1c1RleHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50ICs9ICc8YnI+JyArIHJlc3BvbnNlLnN0YXR1c1RleHQgKyAnIHN0YXR1czogcG9zdCBhZGRlZCc7XHJcbiAgICAgICAgICAgICAgICAgICAgalF1ZXJ5KGVsZW1lbnRIcmVmKS5jYXJvdXNlbCgnbmV4dCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJPcmRlclRleHQuaW5uZXJIVE1MID0gY29udGVudDtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5zdGF0dXNUZXh0ICsgJyBzdGF0dXM6IHBvc3QgYWRkZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICBhbGVydChyZXNwb25zZS5zdGF0dXNUZXh0ICsgJyBzdGF0dXM6IHBvc3QgYWRkZWQnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGFsZXJ0KTtcclxuICAgIH07XHJcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL3NyYy9qYXZhc2NyaXB0cy9tb2R1bGVzL2FkZE9yZGVyLmpzIiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJib29zdHJhcC12YWxpZGF0b3IgdmVyc2lvbjpcIiwgalF1ZXJ5LmZuLnZhbGlkYXRvci5Db25zdHJ1Y3Rvci5WRVJTSU9OKTtcclxuICAgIGpRdWVyeSgnZm9ybScpLnZhbGlkYXRvcih7XHJcbiAgICAgICAgZm9jdXM6IGZhbHNlLFxyXG4gICAgICAgIC8vIGRlbGF5OiAzMDAwXHJcbiAgICB9KTtcclxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvc3JjL2phdmFzY3JpcHRzL21vZHVsZXMvdmFsaWRhdGlvbi5qcyIsImltcG9ydCAkIGZyb20gXCJqcXVlcnlcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuICAgIGxldCBHYWxsZXJ5ID0ge1xyXG4gICAgICAgIHpvb206IGZ1bmN0aW9uIChpbWdDb250YWluZXIsIGltZywgZ2FsbGVyeSkge1xyXG4gICAgICAgICAgICBsZXQgY29udGFpbmVySGVpZ2h0ID0gaW1nQ29udGFpbmVyLm91dGVySGVpZ2h0KCk7XHJcbiAgICAgICAgICAgIGlmICghZ2FsbGVyeS5oYXNDbGFzcygnaXMtem9vbWVkJykpIHtcclxuICAgICAgICAgICAgICAgIGltZ0NvbnRhaW5lci5jc3MoXCJoZWlnaHRcIiwgY29udGFpbmVySGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgIGdhbGxlcnkuYWRkQ2xhc3MoJ2lzLXpvb21lZCcpO1xyXG5cclxuICAgICAgICAgICAgICAgIGltZy5kcmFnZ2FibGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGRyYWc6IGZ1bmN0aW9uIChldmVudCwgdWkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdWkucG9zaXRpb24ubGVmdCA9IE1hdGgubWluKDEwMCwgdWkucG9zaXRpb24ubGVmdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVpLnBvc2l0aW9uLnRvcCA9IE1hdGgubWluKDEwMCwgdWkucG9zaXRpb24udG9wKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGltZ0NvbnRhaW5lci5jc3MoXCJoZWlnaHRcIiwgXCJhdXRvXCIpO1xyXG4gICAgICAgICAgICAgICAgZ2FsbGVyeS5yZW1vdmVDbGFzcygnaXMtem9vbWVkJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHN3aXRjaDogZnVuY3Rpb24gKHRyaWdnZXIsIGltZ0NvbnRhaW5lciwgZ2FsbGVyeSkge1xyXG4gICAgICAgICAgICBsZXQgc3JjID0gdHJpZ2dlci5hdHRyKCdocmVmJyksXHJcbiAgICAgICAgICAgICAgICB0aHVtYnMgPSB0cmlnZ2VyLnNpYmxpbmdzKCksXHJcbiAgICAgICAgICAgICAgICBpbWcgPSB0cmlnZ2VyLnBhcmVudCgpLnByZXYoKS5jaGlsZHJlbigpO1xyXG5cclxuICAgICAgICAgICAgdHJpZ2dlci5hZGRDbGFzcygnaXMtYWN0aXZlJyk7XHJcblxyXG4gICAgICAgICAgICB0aHVtYnMuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcygnaXMtYWN0aXZlJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZ2FsbGVyeS5oYXNDbGFzcygnaXMtem9vbWVkJykpIHtcclxuICAgICAgICAgICAgICAgIGdhbGxlcnkucmVtb3ZlQ2xhc3MoJ2lzLXpvb21lZCcpO1xyXG4gICAgICAgICAgICAgICAgaW1nQ29udGFpbmVyLmNzcyhcImhlaWdodFwiLCBcImF1dG9cIik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIFN3aXRjaCBpbWFnZSBzb3VyY2VcclxuICAgICAgICAgICAgaW1nLmF0dHIoJ3NyYycsIHNyYyk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBsZXQgZ2FsbGVyeSA9ICQoJy5nYWxsZXJ5Jyk7XHJcbiAgICBnYWxsZXJ5Lm9uKCdjbGljaycsICdhJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgbGV0IHRyaWdnZXIgPSAkKHRoaXMpO1xyXG4gICAgICAgIGxldCB0cmlnZ2VyRGF0YSA9IHRyaWdnZXIuZGF0YShcImdhbGxlcnlcIik7XHJcbiAgICAgICAgbGV0IGdhbGxlcnlJZCA9IGV2ZW50LmRlbGVnYXRlVGFyZ2V0LmlkO1xyXG4gICAgICAgIGdhbGxlcnkgPSAkKCcjJyArIGdhbGxlcnlJZCk7XHJcblxyXG4gICAgICAgIGlmICh0cmlnZ2VyRGF0YSA9PT0gJ3pvb20nKSB7XHJcbiAgICAgICAgICAgIGxldCBpbWdDb250YWluZXIgPSB0cmlnZ2VyLnBhcmVudCgpLFxyXG4gICAgICAgICAgICAgICAgaW1nID0gdHJpZ2dlci5zaWJsaW5ncygpO1xyXG4gICAgICAgICAgICBHYWxsZXJ5Lnpvb20oaW1nQ29udGFpbmVyLCBpbWcsIGdhbGxlcnkpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodHJpZ2dlckRhdGEgPT09ICd0aHVtYicpIHtcclxuICAgICAgICAgICAgbGV0IGltZ0NvbnRhaW5lciA9IHRyaWdnZXIucGFyZW50KCkuc2libGluZ3MoKTtcclxuICAgICAgICAgICAgR2FsbGVyeS5zd2l0Y2godHJpZ2dlciwgaW1nQ29udGFpbmVyLCBnYWxsZXJ5KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9KTtcclxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvc3JjL2phdmFzY3JpcHRzL21vZHVsZXMvZ2FsbGVyeS5qcyIsIm1vZHVsZS5leHBvcnRzID0galF1ZXJ5O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwialF1ZXJ5XCJcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==