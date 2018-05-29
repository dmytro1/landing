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
	
	var _methods = __webpack_require__(1);
	
	var _main = __webpack_require__(2);
	
	var _main2 = _interopRequireDefault(_main);
	
	var _toggleChooseSections = __webpack_require__(3);
	
	var _toggleChooseSections2 = _interopRequireDefault(_toggleChooseSections);
	
	var _onChangeSelect = __webpack_require__(4);
	
	var _onChangeSelect2 = _interopRequireDefault(_onChangeSelect);
	
	var _checkoutBtn = __webpack_require__(5);
	
	var _checkoutBtn2 = _interopRequireDefault(_checkoutBtn);
	
	var _addOrder = __webpack_require__(6);
	
	var _addOrder2 = _interopRequireDefault(_addOrder);
	
	var _validation = __webpack_require__(7);
	
	var _validation2 = _interopRequireDefault(_validation);
	
	var _gallery = __webpack_require__(8);
	
	var _gallery2 = _interopRequireDefault(_gallery);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// import $ from "jquery";
	(0, _main2.default)(_methods.$, _methods.$$);
	(0, _toggleChooseSections2.default)(_methods.$, _methods.$$);
	(0, _onChangeSelect2.default)(_methods.$, _methods.$$);
	(0, _checkoutBtn2.default)(_methods.$);
	(0, _addOrder2.default)(_methods.$);
	(0, _validation2.default)(_methods.$);
	(0, _gallery2.default)();

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.scrollElem = scrollElem;
	exports.lazyScroll = lazyScroll;
	exports.navbarToDefault = navbarToDefault;
	exports.navbarToFloat = navbarToFloat;
	exports.setNavStyle = setNavStyle;
	exports.getOpenedSection = getOpenedSection;
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
	
	exports.$ = $;
	exports.$$ = $$;
	function scrollElem(property, duration) {
	    jQuery('html, body').animate({
	        scrollTop: property
	    }, duration);
	}
	
	function lazyScroll() {
	    event.preventDefault();
	    var id = this.getAttribute('href');
	    var offset = $(id).offsetTop;
	    //document.getElementsByTagName('html')[0].animate({
	    if (id === "#choose") {
	        offset -= 50;
	    }
	    scrollElem(offset, 700);
	
	    return false;
	}
	
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
	    var navbar = $('.navbar-default');
	    navbar.style.backgroundColor = 'rgba(48, 48, 48, 0.5)';
	    navbar.classList.add('top-nav-collapse');
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
	
	function getOpenedSection(dataID) {
	    var section = '#section-' + dataID;
	    return {
	        section: section,
	        h3: section + ' h3',
	        form: section + ' form',
	        price: section + ' .price',
	        quantity: section + ' .quantity'
	    };
	}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _methods = __webpack_require__(1);
	
	exports.default = function ($, $$) {
	    window.on('load', function () {
	        $('.loader_inner').style.display = "none";
	        $('.loader').style.display = "none";
	    });
	
	    window.on('DOMContentLoaded', function () {
	        //Navbar style switcher
	        (0, _methods.setNavStyle)();
	        window.on('scroll', function () {
	            (0, _methods.setNavStyle)();
	        });
	
	        //FOR MOBILE
	        if (window.outerWidth < 768) {
	            //SANDWICH BUTTON
	            $('.navbar-toggle').on('click', function () {
	                (0, _methods.navbarToFloat)();
	                $('.sandwich').classList.toggle('active');
	            });
	
	            //HIDE MENU CLICKING LI
	            $$('.navbar-collapse ul li a').on('click', function () {
	                $('.navbar-toggle').click();
	            });
	        }
	
	        //LAZY ANIMATING FOR BUTTONS AND MENU ITEMS
	        $$('.scroll_btn').on('click', _methods.lazyScroll);
	        $$('.nav a').on('click', _methods.lazyScroll);
	
	        //CLOSE BUTTON X
	        $('.close-btn').on('click', function () {
	            var sections = $$('.collapse-section');
	            for (var i = 0; i < sections.length; i++) {
	                sections[i].classList.remove('showing');
	            }
	            this.classList.remove('showing');
	        });
	
	        jQuery('[data-slide="prev"]').on('click', function () {
	            (0, _methods.scrollElem)($("#choose").offsetTop - 50, 100);
	        });
	    });
	};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _methods = __webpack_require__(1);
	
	exports.default = function ($, $$) {
	
	    var dataID = void 0,
	        openedSectionSelector = "";
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
	        openedSectionSelector = (0, _methods.getOpenedSection)(dataID);
	        section = $(openedSectionSelector.section);
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
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _methods = __webpack_require__(1);
	
	exports.default = function ($, $$) {
	    var userChoice = window.userChoice = {};
	    var dataID = void 0,
	        openedSectionSelector = "";
	    var printPrice = void 0,
	        printMessage = void 0,
	        checkoutButton = {};
	
	    window.onChangeSelect = function (el) {
	        dataID = el.getAttribute('data-id');
	        openedSectionSelector = (0, _methods.getOpenedSection)(dataID);
	        printPrice = $(openedSectionSelector.price);
	        printMessage = $(openedSectionSelector.section + ' .error-message');
	        checkoutButton = $(openedSectionSelector.section + " button[data-slide='next']");
	
	        var allSelects = $$(openedSectionSelector.section + ' select');
	
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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _methods = __webpack_require__(1);
	
	exports.default = function ($) {
	    var userChoice = window.userChoice;
	    var dataID = "";
	    var quantity = void 0,
	        userChoiceText = void 0,
	        choicePrice = void 0,
	        openedSectionSelector = {};
	
	    window.checkoutBtn = function (el) {
	        (0, _methods.scrollElem)($("#choose").offsetTop - 50, 100);
	        dataID = el.getAttribute('data-id');
	        openedSectionSelector = (0, _methods.getOpenedSection)(dataID);
	        quantity = $(openedSectionSelector.quantity);
	        userChoiceText = $(openedSectionSelector.section + ' .user-choice');
	        choicePrice = $(openedSectionSelector.price).getAttribute('data-price');
	
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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _methods = __webpack_require__(1);
	
	exports.default = function ($) {
	    var userChoice = window.userChoice;
	    var dataID = void 0,
	        openedSectionSelector = void 0,
	        elementHref = void 0,
	        quantity = "";
	    var randomId = Math.trunc(Math.random() * 100000);
	
	    window.addOrder = function (el) {
	        if (el.classList.contains('disabled')) {
	            return;
	        }
	
	        dataID = el.getAttribute('data-id');
	        openedSectionSelector = (0, _methods.getOpenedSection)(dataID);
	        elementHref = el.getAttribute('href');
	        var inputName = $(openedSectionSelector.form + ' input[name="first_name"]');
	        var inputLastName = $(openedSectionSelector.form + ' input[name="last_name"]');
	        var inputEmail = $(openedSectionSelector.form + ' input[name="email"]');
	        var inputPhone = $(openedSectionSelector.form + ' input[name="phone"]');
	
	        var title = $(openedSectionSelector.h3).innerText;
	        var price = $(openedSectionSelector.price).getAttribute('data-price');
	        quantity = $(openedSectionSelector.quantity);
	
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
	
	        console.log('This is order data: ', productData);
	        event.preventDefault();
	        fetchData(productData);
	    };
	
	    function fetchData(data) {
	        fetch('/wp-json/wp/v2/shop_order', {
	            body: JSON.stringify(data),
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
	                printOrderText(data, response);
	                jQuery(elementHref).carousel('next');
	                (0, _methods.scrollElem)($("#choose").offsetTop - 50, 100);
	                console.log(response.statusText + ' status: post added');
	                alert(response.statusText + ' status: post added');
	            }
	        }).catch(alert);
	    }
	
	    function printOrderText(data, response) {
	        var content = '';
	        var userOrderText = $(openedSectionSelector.section + ' .user-order');
	
	        for (var i in userChoice) {
	            content += "<p>" + i + ": " + userChoice[i] + "</p>";
	        }
	        content += "<p>Price: " + data.param_price + "</p>";
	        content += "<p>Quantity: " + quantity.value + "</p>";
	        content += "<p>Total price: " + quantity.value * data.param_price + "</p>";
	        content += "<p>First name: " + data.info_first_name + "</p>";
	        content += "<p>Last name: " + data.info_last_name + "</p>";
	        content += "<p>E-mail: " + data.info_email + "</p>";
	        content += "<p>Phone: " + data.info_phone + "</p>";
	        content += '<br>' + response.statusText + ' status: post added';
	        userOrderText.innerHTML = content;
	    }
	};

/***/ }),
/* 7 */
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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _jquery = __webpack_require__(9);
	
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
/* 9 */
/***/ (function(module, exports) {

	module.exports = jQuery;

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNjZkNWRkZjcyMjNhYjM1ZWU0MWIiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NyYy9qYXZhc2NyaXB0cy9jb21tb24uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NyYy9qYXZhc2NyaXB0cy9tb2R1bGVzL21ldGhvZHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NyYy9qYXZhc2NyaXB0cy9tb2R1bGVzL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NyYy9qYXZhc2NyaXB0cy9tb2R1bGVzL3RvZ2dsZUNob29zZVNlY3Rpb25zLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zcmMvamF2YXNjcmlwdHMvbW9kdWxlcy9vbkNoYW5nZVNlbGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3JjL2phdmFzY3JpcHRzL21vZHVsZXMvY2hlY2tvdXRCdG4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NyYy9qYXZhc2NyaXB0cy9tb2R1bGVzL2FkZE9yZGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zcmMvamF2YXNjcmlwdHMvbW9kdWxlcy92YWxpZGF0aW9uLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zcmMvamF2YXNjcmlwdHMvbW9kdWxlcy9nYWxsZXJ5LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImpRdWVyeVwiIl0sIm5hbWVzIjpbInNjcm9sbEVsZW0iLCJsYXp5U2Nyb2xsIiwibmF2YmFyVG9EZWZhdWx0IiwibmF2YmFyVG9GbG9hdCIsInNldE5hdlN0eWxlIiwiZ2V0T3BlbmVkU2VjdGlvbiIsIiQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJiaW5kIiwiJCQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiTm9kZSIsInByb3RvdHlwZSIsIm9uIiwid2luZG93IiwibmFtZSIsImZuIiwiYWRkRXZlbnRMaXN0ZW5lciIsIk5vZGVMaXN0IiwiX19wcm90b19fIiwiQXJyYXkiLCJEb2N1bWVudCIsImZvckVhY2giLCJlbGVtIiwicHJvcGVydHkiLCJkdXJhdGlvbiIsImpRdWVyeSIsImFuaW1hdGUiLCJzY3JvbGxUb3AiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiaWQiLCJnZXRBdHRyaWJ1dGUiLCJvZmZzZXQiLCJvZmZzZXRUb3AiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsImNsYXNzTGlzdCIsInJlbW92ZSIsIm1lbnVJdGVtIiwiaSIsImxlbmd0aCIsIm5hdmJhciIsImFkZCIsInBhZ2VZT2Zmc2V0IiwiZGF0YUlEIiwic2VjdGlvbiIsImgzIiwiZm9ybSIsInByaWNlIiwicXVhbnRpdHkiLCJkaXNwbGF5Iiwib3V0ZXJXaWR0aCIsInRvZ2dsZSIsImNsaWNrIiwic2VjdGlvbnMiLCJvcGVuZWRTZWN0aW9uU2VsZWN0b3IiLCJjbG9zZUJ0biIsImNvbGxhcHNlU2VjdGlvbnMiLCJzaG93aW5nU2VjdGlvbnMiLCJ0b2dnbGVDaG9vc2VTZWN0aW9ucyIsImVsIiwiY29sbGFwc2VPcGVuZWRTZWN0aW9ucyIsInNob3dUYXJnZXRTZWN0aW9uIiwidXNlckNob2ljZSIsInByaW50UHJpY2UiLCJwcmludE1lc3NhZ2UiLCJjaGVja291dEJ1dHRvbiIsIm9uQ2hhbmdlU2VsZWN0IiwiYWxsU2VsZWN0cyIsIml0ZW1TZWxlY3QiLCJvcHRpb25zIiwic2VsZWN0ZWRJbmRleCIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsImNvbXBhcmVBdmFpbGFiaWxpdHkiLCJwYXJhbWV0ZXIiLCJoYXNPd25Qcm9wZXJ0eSIsIm1pc3NTZWxlY3QiLCJ2YXJpYXRpb25zIiwidmFyaWF0aW9uc09iamVjdCIsImRhdGFCeUlkIiwidmFyaWF0aW9uIiwidmFyaWF0aW9uc1dpdGhvdXRQcmljZSIsIk9iamVjdCIsImFzc2lnbiIsIkpTT04iLCJzdHJpbmdpZnkiLCJtYXRjaFZhcmlhdGlvbiIsIm1pc3NWYXJpYXRpb24iLCJzZXRBdHRyaWJ1dGUiLCJpbm5lckhUTUwiLCJkaXNhYmxlZCIsInVzZXJDaG9pY2VUZXh0IiwiY2hvaWNlUHJpY2UiLCJjaGVja291dEJ0biIsInByaW50VXNlckNob2ljZSIsImNvbnRlbnQiLCJlbGVtZW50SHJlZiIsInJhbmRvbUlkIiwiTWF0aCIsInRydW5jIiwicmFuZG9tIiwiYWRkT3JkZXIiLCJjb250YWlucyIsImlucHV0TmFtZSIsImlucHV0TGFzdE5hbWUiLCJpbnB1dEVtYWlsIiwiaW5wdXRQaG9uZSIsInRpdGxlIiwiaW5uZXJUZXh0IiwicHJvZHVjdERhdGEiLCJmZXRjaERhdGEiLCJkYXRhIiwiZmV0Y2giLCJib2R5IiwiaGVhZGVycyIsIndwQXBpU2V0dGluZ3MiLCJub25jZSIsIm1ldGhvZCIsInRoZW4iLCJyZXNwb25zZSIsInN0YXR1cyIsInN0YXR1c1RleHQiLCJhbGVydCIsInByaW50T3JkZXJUZXh0IiwiY2Fyb3VzZWwiLCJjYXRjaCIsInVzZXJPcmRlclRleHQiLCJwYXJhbV9wcmljZSIsImluZm9fZmlyc3RfbmFtZSIsImluZm9fbGFzdF9uYW1lIiwiaW5mb19lbWFpbCIsImluZm9fcGhvbmUiLCJ2YWxpZGF0b3IiLCJDb25zdHJ1Y3RvciIsIlZFUlNJT04iLCJmb2N1cyIsIkdhbGxlcnkiLCJ6b29tIiwiaW1nQ29udGFpbmVyIiwiaW1nIiwiZ2FsbGVyeSIsImNvbnRhaW5lckhlaWdodCIsIm91dGVySGVpZ2h0IiwiaGFzQ2xhc3MiLCJjc3MiLCJhZGRDbGFzcyIsImRyYWdnYWJsZSIsImRyYWciLCJ1aSIsInBvc2l0aW9uIiwibGVmdCIsIm1pbiIsInRvcCIsInJlbW92ZUNsYXNzIiwic3dpdGNoIiwidHJpZ2dlciIsInNyYyIsImF0dHIiLCJ0aHVtYnMiLCJzaWJsaW5ncyIsInBhcmVudCIsInByZXYiLCJjaGlsZHJlbiIsImVhY2giLCJ0cmlnZ2VyRGF0YSIsImdhbGxlcnlJZCIsImRlbGVnYXRlVGFyZ2V0Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7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T0FBWCxFQUFvQixHQUFwQixFQUF5QixVQUFVZ0IsS0FBVixFQUFpQjtBQUN0QyxhQUFJaUksVUFBVSxzQkFBRSxJQUFGLENBQWQ7QUFDQSxhQUFJUyxjQUFjVCxRQUFRNUMsSUFBUixDQUFhLFNBQWIsQ0FBbEI7QUFDQSxhQUFJc0QsWUFBWTNJLE1BQU00SSxjQUFOLENBQXFCMUksRUFBckM7QUFDQWdILG1CQUFVLHNCQUFFLE1BQU15QixTQUFSLENBQVY7O0FBRUEsYUFBSUQsZ0JBQWdCLE1BQXBCLEVBQTRCO0FBQ3hCLGlCQUFJMUIsZUFBZWlCLFFBQVFLLE1BQVIsRUFBbkI7QUFBQSxpQkFDSXJCLE1BQU1nQixRQUFRSSxRQUFSLEVBRFY7QUFFQXZCLHFCQUFRQyxJQUFSLENBQWFDLFlBQWIsRUFBMkJDLEdBQTNCLEVBQWdDQyxPQUFoQztBQUNILFVBSkQsTUFJTyxJQUFJd0IsZ0JBQWdCLE9BQXBCLEVBQTZCO0FBQ2hDLGlCQUFJMUIsZ0JBQWVpQixRQUFRSyxNQUFSLEdBQWlCRCxRQUFqQixFQUFuQjtBQUNBdkIscUJBQVFrQixNQUFSLENBQWVDLE9BQWYsRUFBd0JqQixhQUF4QixFQUFzQ0UsT0FBdEM7QUFDSCxVQUhNLE1BR0E7QUFDSDtBQUNIO0FBQ0RsSCxlQUFNQyxjQUFOO0FBQ0gsTUFqQkQ7QUFrQkgsRTs7Ozs7O0FDL0RELHlCIiwiZmlsZSI6ImNvbW1vbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDY2ZDVkZGY3MjIzYWIzNWVlNDFiIiwiLy8gaW1wb3J0ICQgZnJvbSBcImpxdWVyeVwiO1xyXG5pbXBvcnQgeyQsICQkfSBmcm9tICcuL21vZHVsZXMvbWV0aG9kcyc7XHJcbmltcG9ydCBtYWluIGZyb20gXCIuL21vZHVsZXMvbWFpblwiO1xyXG5pbXBvcnQgdG9nZ2xlQ2hvb3NlU2VjdGlvbnMgZnJvbSBcIi4vbW9kdWxlcy90b2dnbGVDaG9vc2VTZWN0aW9uc1wiO1xyXG5pbXBvcnQgb25DaGFuZ2VTZWxlY3QgZnJvbSBcIi4vbW9kdWxlcy9vbkNoYW5nZVNlbGVjdFwiO1xyXG5pbXBvcnQgY2hlY2tvdXRCdG4gZnJvbSBcIi4vbW9kdWxlcy9jaGVja291dEJ0blwiO1xyXG5pbXBvcnQgYWRkT3JkZXIgZnJvbSBcIi4vbW9kdWxlcy9hZGRPcmRlclwiO1xyXG5pbXBvcnQgdmFsaWRhdGlvbiBmcm9tIFwiLi9tb2R1bGVzL3ZhbGlkYXRpb25cIjtcclxuaW1wb3J0IGdhbGxlcnkgZnJvbSBcIi4vbW9kdWxlcy9nYWxsZXJ5XCI7XHJcblxyXG5tYWluKCQsICQkKTtcclxudG9nZ2xlQ2hvb3NlU2VjdGlvbnMoJCwgJCQpO1xyXG5vbkNoYW5nZVNlbGVjdCgkLCAkJCk7XHJcbmNoZWNrb3V0QnRuKCQpO1xyXG5hZGRPcmRlcigkKTtcclxudmFsaWRhdGlvbigkKTtcclxuZ2FsbGVyeSgpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9zcmMvamF2YXNjcmlwdHMvY29tbW9uLmpzIiwiY29uc3QgJCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IuYmluZChkb2N1bWVudCk7XHJcbmNvbnN0ICQkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbC5iaW5kKGRvY3VtZW50KTtcclxuXHJcbk5vZGUucHJvdG90eXBlLm9uID0gd2luZG93Lm9uID0gZnVuY3Rpb24gKG5hbWUsIGZuKSB7XHJcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIobmFtZSwgZm4pO1xyXG59O1xyXG5cclxuTm9kZUxpc3QucHJvdG90eXBlLl9fcHJvdG9fXyA9IEFycmF5LnByb3RvdHlwZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxyXG5Ob2RlTGlzdC5wcm90b3R5cGUuX19wcm90b19fID0gRG9jdW1lbnQucHJvdG90eXBlO1xyXG4vL05vZGVMaXN0LnByb3RvdHlwZS5fX3Byb3RvX18gPSBqUXVlcnkucHJvdG90eXBlLmFuaW1hdGUoKTtcclxuXHJcbk5vZGVMaXN0LnByb3RvdHlwZS5vbiA9IE5vZGVMaXN0LnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyID0gZnVuY3Rpb24gKG5hbWUsIGZuKSB7XHJcbiAgICB0aGlzLmZvckVhY2goKGVsZW0pID0+IHtcclxuICAgICAgICBlbGVtLm9uKG5hbWUsIGZuKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IHskLCAkJH07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2Nyb2xsRWxlbShwcm9wZXJ0eSwgZHVyYXRpb24pIHtcclxuICAgIGpRdWVyeSgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xyXG4gICAgICAgIHNjcm9sbFRvcDogcHJvcGVydHlcclxuICAgIH0sIGR1cmF0aW9uKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxhenlTY3JvbGwoKSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbGV0IGlkID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcclxuICAgIGxldCBvZmZzZXQgPSAkKGlkKS5vZmZzZXRUb3A7XHJcbiAgICAvL2RvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdodG1sJylbMF0uYW5pbWF0ZSh7XHJcbiAgICBpZiAoaWQgPT09IFwiI2Nob29zZVwiKSB7XHJcbiAgICAgICAgb2Zmc2V0IC09IDUwO1xyXG4gICAgfVxyXG4gICAgc2Nyb2xsRWxlbShvZmZzZXQsIDcwMCk7XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbmF2YmFyVG9EZWZhdWx0KCkge1xyXG4gICAgJCgnLm5hdmJhci1kZWZhdWx0Jykuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3RyYW5zcGFyZW50JztcclxuICAgICQoJy5uYXZiYXItYnJhbmQgaW1nJykuY2xhc3NMaXN0LnJlbW92ZSgnaW1nX3Jlc3BvbnNpdmUnKTtcclxuICAgICQoJy5uYXZiYXItZml4ZWQtdG9wJykuY2xhc3NMaXN0LnJlbW92ZSgndG9wLW5hdi1jb2xsYXBzZScpO1xyXG4gICAgbGV0IG1lbnVJdGVtID0gJCQoJy5uYXZiYXItbmF2IGEnKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWVudUl0ZW0ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBtZW51SXRlbVtpXS5jbGFzc0xpc3QucmVtb3ZlKCd3aGl0ZScpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbmF2YmFyVG9GbG9hdCgpIHtcclxuICAgIGxldCBuYXZiYXIgPSAkKCcubmF2YmFyLWRlZmF1bHQnKTtcclxuICAgIG5hdmJhci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmdiYSg0OCwgNDgsIDQ4LCAwLjUpJztcclxuICAgIG5hdmJhci5jbGFzc0xpc3QuYWRkKCd0b3AtbmF2LWNvbGxhcHNlJyk7XHJcbiAgICAkKCcubmF2YmFyLWJyYW5kIGltZycpLmNsYXNzTGlzdC5hZGQoJ2ltZ19yZXNwb25zaXZlJyk7XHJcbiAgICBsZXQgbWVudUl0ZW0gPSAkJCgnLm5hdmJhci1uYXYgYScpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtZW51SXRlbS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIG1lbnVJdGVtW2ldLmNsYXNzTGlzdC5hZGQoJ3doaXRlJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXROYXZTdHlsZSgpIHtcclxuICAgIG5hdmJhclRvRmxvYXQoKTtcclxuICAgIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPCA1MCkge1xyXG4gICAgICAgIG5hdmJhclRvRGVmYXVsdCgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0T3BlbmVkU2VjdGlvbihkYXRhSUQpIHtcclxuICAgIGxldCBzZWN0aW9uID0gJyNzZWN0aW9uLScgKyBkYXRhSUQ7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHNlY3Rpb246IHNlY3Rpb24sXHJcbiAgICAgICAgaDM6IHNlY3Rpb24gKyAnIGgzJyxcclxuICAgICAgICBmb3JtOiBzZWN0aW9uICsgJyBmb3JtJyxcclxuICAgICAgICBwcmljZTogc2VjdGlvbiArICcgLnByaWNlJyxcclxuICAgICAgICBxdWFudGl0eTogc2VjdGlvbiArICcgLnF1YW50aXR5JyxcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9zcmMvamF2YXNjcmlwdHMvbW9kdWxlcy9tZXRob2RzLmpzIiwiaW1wb3J0IHtzY3JvbGxFbGVtLCBzZXROYXZTdHlsZSwgbmF2YmFyVG9GbG9hdCwgbGF6eVNjcm9sbH0gZnJvbSAnLi9tZXRob2RzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICgkLCAkJCkgPT4ge1xyXG4gICAgd2luZG93Lm9uKCdsb2FkJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoJy5sb2FkZXJfaW5uZXInKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgJCgnLmxvYWRlcicpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIH0pO1xyXG5cclxuICAgIHdpbmRvdy5vbignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvL05hdmJhciBzdHlsZSBzd2l0Y2hlclxyXG4gICAgICAgIHNldE5hdlN0eWxlKCk7XHJcbiAgICAgICAgd2luZG93Lm9uKCdzY3JvbGwnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHNldE5hdlN0eWxlKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vRk9SIE1PQklMRVxyXG4gICAgICAgIGlmICh3aW5kb3cub3V0ZXJXaWR0aCA8IDc2OCkge1xyXG4gICAgICAgICAgICAvL1NBTkRXSUNIIEJVVFRPTlxyXG4gICAgICAgICAgICAkKCcubmF2YmFyLXRvZ2dsZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIG5hdmJhclRvRmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICQoJy5zYW5kd2ljaCcpLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vSElERSBNRU5VIENMSUNLSU5HIExJXHJcbiAgICAgICAgICAgICQkKCcubmF2YmFyLWNvbGxhcHNlIHVsIGxpIGEnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAkKCcubmF2YmFyLXRvZ2dsZScpLmNsaWNrKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9MQVpZIEFOSU1BVElORyBGT1IgQlVUVE9OUyBBTkQgTUVOVSBJVEVNU1xyXG4gICAgICAgICQkKCcuc2Nyb2xsX2J0bicpLm9uKCdjbGljaycsIGxhenlTY3JvbGwpO1xyXG4gICAgICAgICQkKCcubmF2IGEnKS5vbignY2xpY2snLCBsYXp5U2Nyb2xsKTtcclxuXHJcbiAgICAgICAgLy9DTE9TRSBCVVRUT04gWFxyXG4gICAgICAgICQoJy5jbG9zZS1idG4nKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGxldCBzZWN0aW9ucyA9ICQkKCcuY29sbGFwc2Utc2VjdGlvbicpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlY3Rpb25zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBzZWN0aW9uc1tpXS5jbGFzc0xpc3QucmVtb3ZlKCdzaG93aW5nJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5jbGFzc0xpc3QucmVtb3ZlKCdzaG93aW5nJyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGpRdWVyeSgnW2RhdGEtc2xpZGU9XCJwcmV2XCJdJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBzY3JvbGxFbGVtKCQoXCIjY2hvb3NlXCIpLm9mZnNldFRvcCAtIDUwLCAxMDApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL3NyYy9qYXZhc2NyaXB0cy9tb2R1bGVzL21haW4uanMiLCJpbXBvcnQge2dldE9wZW5lZFNlY3Rpb259IGZyb20gXCIuL21ldGhvZHNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICgkLCAkJCkgPT4ge1xyXG5cclxuICAgIGxldCBkYXRhSUQsIG9wZW5lZFNlY3Rpb25TZWxlY3RvciA9IFwiXCI7XHJcbiAgICBsZXQgc2VjdGlvbiA9IHt9O1xyXG4gICAgbGV0IGNsb3NlQnRuID0gJCgnLmNsb3NlLWJ0bicpO1xyXG4gICAgbGV0IGNvbGxhcHNlU2VjdGlvbnMgPSAkJCgnLmNvbGxhcHNlLXNlY3Rpb24nKTtcclxuICAgIGxldCBzaG93aW5nU2VjdGlvbnMgPSAkJCgnLmNvbGxhcHNlLXNlY3Rpb24uc2hvd2luZycpLmxlbmd0aDtcclxuXHJcbiAgICB3aW5kb3cudG9nZ2xlQ2hvb3NlU2VjdGlvbnMgPSBmdW5jdGlvbiAoZWwpIHtcclxuXHJcbiAgICAgICAgaWYgKHNob3dpbmdTZWN0aW9ucykge1xyXG4gICAgICAgICAgICBjbG9zZUJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdzaG93aW5nJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb2xsYXBzZU9wZW5lZFNlY3Rpb25zKGVsKTtcclxuXHJcbiAgICAgICAgc2hvd1RhcmdldFNlY3Rpb24oKTtcclxuXHJcbiAgICAgICAgaWYgKHNob3dpbmdTZWN0aW9ucykge1xyXG4gICAgICAgICAgICBjbG9zZUJ0bi5jbGFzc0xpc3QuYWRkKCdzaG93aW5nJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBjb2xsYXBzZU9wZW5lZFNlY3Rpb25zKGVsKSB7XHJcbiAgICAgICAgZGF0YUlEID0gZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XHJcbiAgICAgICAgb3BlbmVkU2VjdGlvblNlbGVjdG9yID0gZ2V0T3BlbmVkU2VjdGlvbihkYXRhSUQpO1xyXG4gICAgICAgIHNlY3Rpb24gPSAkKG9wZW5lZFNlY3Rpb25TZWxlY3Rvci5zZWN0aW9uKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbGxhcHNlU2VjdGlvbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKCEoY29sbGFwc2VTZWN0aW9uc1tpXS5pZCA9PT0gc2VjdGlvbi5pZCkpIHtcclxuICAgICAgICAgICAgICAgIGNvbGxhcHNlU2VjdGlvbnNbaV0uY2xhc3NMaXN0LnJlbW92ZSgnc2hvd2luZycpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNob3dUYXJnZXRTZWN0aW9uKCkge1xyXG4gICAgICAgIHNlY3Rpb24uY2xhc3NMaXN0LnRvZ2dsZSgnc2hvd2luZycpO1xyXG4gICAgICAgIHNob3dpbmdTZWN0aW9ucyA9ICQkKCcuY29sbGFwc2Utc2VjdGlvbi5zaG93aW5nJykubGVuZ3RoO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL3NyYy9qYXZhc2NyaXB0cy9tb2R1bGVzL3RvZ2dsZUNob29zZVNlY3Rpb25zLmpzIiwiaW1wb3J0IHtnZXRPcGVuZWRTZWN0aW9ufSBmcm9tIFwiLi9tZXRob2RzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoJCwgJCQpID0+IHtcclxuICAgIGxldCB1c2VyQ2hvaWNlID0gd2luZG93LnVzZXJDaG9pY2UgPSB7fTtcclxuICAgIGxldCBkYXRhSUQsIG9wZW5lZFNlY3Rpb25TZWxlY3RvciA9IFwiXCI7XHJcbiAgICBsZXQgcHJpbnRQcmljZSwgcHJpbnRNZXNzYWdlLCBjaGVja291dEJ1dHRvbiA9IHt9O1xyXG5cclxuICAgIHdpbmRvdy5vbkNoYW5nZVNlbGVjdCA9IGZ1bmN0aW9uIChlbCkge1xyXG4gICAgICAgIGRhdGFJRCA9IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xyXG4gICAgICAgIG9wZW5lZFNlY3Rpb25TZWxlY3RvciA9IGdldE9wZW5lZFNlY3Rpb24oZGF0YUlEKTtcclxuICAgICAgICBwcmludFByaWNlID0gJChvcGVuZWRTZWN0aW9uU2VsZWN0b3IucHJpY2UpO1xyXG4gICAgICAgIHByaW50TWVzc2FnZSA9ICQob3BlbmVkU2VjdGlvblNlbGVjdG9yLnNlY3Rpb24gKyAnIC5lcnJvci1tZXNzYWdlJyk7XHJcbiAgICAgICAgY2hlY2tvdXRCdXR0b24gPSAkKG9wZW5lZFNlY3Rpb25TZWxlY3Rvci5zZWN0aW9uICsgXCIgYnV0dG9uW2RhdGEtc2xpZGU9J25leHQnXVwiKTtcclxuXHJcbiAgICAgICAgbGV0IGFsbFNlbGVjdHMgPSAkJChvcGVuZWRTZWN0aW9uU2VsZWN0b3Iuc2VjdGlvbiArICcgc2VsZWN0Jyk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsU2VsZWN0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgaXRlbVNlbGVjdCA9IGFsbFNlbGVjdHNbaV07XHJcbiAgICAgICAgICAgIHVzZXJDaG9pY2VbaXRlbVNlbGVjdC5uYW1lXSA9IGl0ZW1TZWxlY3Qub3B0aW9uc1tpdGVtU2VsZWN0LnNlbGVjdGVkSW5kZXhdLnZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZygnVGhpcyBpcyB1c2VyIGNob2ljZTogJywgdXNlckNob2ljZSk7XHJcblxyXG4gICAgICAgIGNvbXBhcmVBdmFpbGFiaWxpdHkodXNlckNob2ljZSwgZGF0YUlEKTtcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gY29tcGFyZUF2YWlsYWJpbGl0eSh1c2VyQ2hvaWNlLCBkYXRhSUQpIHtcclxuICAgICAgICBmb3IgKGxldCBwYXJhbWV0ZXIgaW4gdXNlckNob2ljZSkge1xyXG4gICAgICAgICAgICBpZiAodXNlckNob2ljZS5oYXNPd25Qcm9wZXJ0eShwYXJhbWV0ZXIpICYmIHVzZXJDaG9pY2VbcGFyYW1ldGVyXSA9PT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1pc3NTZWxlY3QocGFyYW1ldGVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHZhcmlhdGlvbnMgPSB2YXJpYXRpb25zT2JqZWN0LmRhdGFCeUlkW2RhdGFJRF07XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdUaGlzIGlzIFZhcmlhdGlvbnM6ICcsIHZhcmlhdGlvbnMpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhcmlhdGlvbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHZhcmlhdGlvbiA9IHZhcmlhdGlvbnNbaV07XHJcbiAgICAgICAgICAgIGxldCB2YXJpYXRpb25zV2l0aG91dFByaWNlID0ge307XHJcblxyXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHZhcmlhdGlvbnNXaXRob3V0UHJpY2UsIHZhcmlhdGlvbik7XHJcblxyXG4gICAgICAgICAgICBkZWxldGUgdmFyaWF0aW9uc1dpdGhvdXRQcmljZS5wcmljZTtcclxuXHJcbiAgICAgICAgICAgIGlmIChKU09OLnN0cmluZ2lmeSh1c2VyQ2hvaWNlKSA9PT0gSlNPTi5zdHJpbmdpZnkodmFyaWF0aW9uc1dpdGhvdXRQcmljZSkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBtYXRjaFZhcmlhdGlvbih2YXJpYXRpb24pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBtaXNzVmFyaWF0aW9uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG1pc3NTZWxlY3QocGFyYW1ldGVyKSB7XHJcbiAgICAgICAgcHJpbnRQcmljZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtcHJpY2UnLCAnJyk7XHJcbiAgICAgICAgcHJpbnRQcmljZS5pbm5lckhUTUwgPSBcIiZuYnNwO1wiO1xyXG4gICAgICAgIHByaW50TWVzc2FnZS5pbm5lckhUTUwgPSAnU2VsZWN0IHRoZSAnICsgcGFyYW1ldGVyO1xyXG4gICAgICAgIGNoZWNrb3V0QnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICBjb25zb2xlLmxvZygnU2VsZWN0IHRoZSAnICsgcGFyYW1ldGVyKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBtaXNzVmFyaWF0aW9uKCkge1xyXG4gICAgICAgIHByaW50UHJpY2Uuc2V0QXR0cmlidXRlKCdkYXRhLXByaWNlJywgJycpO1xyXG4gICAgICAgIHByaW50UHJpY2UuaW5uZXJIVE1MID0gJzxoMz4tIC08L2gzPic7XHJcbiAgICAgICAgcHJpbnRNZXNzYWdlLmlubmVySFRNTCA9ICdWYXJpYXRpb24gaXMgbm90IGZvdW5kJztcclxuICAgICAgICBjaGVja291dEJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1ZhcmlhdGlvbiBpcyBub3QgZm91bmQnKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBtYXRjaFZhcmlhdGlvbih2YXJpYXRpb24pIHtcclxuICAgICAgICBwcmludFByaWNlLnNldEF0dHJpYnV0ZSgnZGF0YS1wcmljZScsIHZhcmlhdGlvbi5wcmljZSk7XHJcbiAgICAgICAgcHJpbnRQcmljZS5pbm5lckhUTUwgPSAnPGgzIGNsYXNzPVwicmVkLXByaWNlXCI+JyArIHZhcmlhdGlvbi5wcmljZSArICckPC9oMz4nO1xyXG4gICAgICAgIHByaW50TWVzc2FnZS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgIGNoZWNrb3V0QnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgICAgY29uc29sZS5sb2codmFyaWF0aW9uLnByaWNlKTtcclxuICAgIH1cclxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvc3JjL2phdmFzY3JpcHRzL21vZHVsZXMvb25DaGFuZ2VTZWxlY3QuanMiLCJpbXBvcnQge3Njcm9sbEVsZW0sIGdldE9wZW5lZFNlY3Rpb259IGZyb20gJy4vbWV0aG9kcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoJCkgPT4ge1xyXG4gICAgbGV0IHVzZXJDaG9pY2UgPSB3aW5kb3cudXNlckNob2ljZTtcclxuICAgIGxldCBkYXRhSUQgPSBcIlwiO1xyXG4gICAgbGV0IHF1YW50aXR5LCB1c2VyQ2hvaWNlVGV4dCwgY2hvaWNlUHJpY2UsIG9wZW5lZFNlY3Rpb25TZWxlY3RvciA9IHt9O1xyXG5cclxuICAgIHdpbmRvdy5jaGVja291dEJ0biA9IGZ1bmN0aW9uIChlbCkge1xyXG4gICAgICAgIHNjcm9sbEVsZW0oJChcIiNjaG9vc2VcIikub2Zmc2V0VG9wIC0gNTAsIDEwMCk7XHJcbiAgICAgICAgZGF0YUlEID0gZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XHJcbiAgICAgICAgb3BlbmVkU2VjdGlvblNlbGVjdG9yID0gZ2V0T3BlbmVkU2VjdGlvbihkYXRhSUQpO1xyXG4gICAgICAgIHF1YW50aXR5ID0gJChvcGVuZWRTZWN0aW9uU2VsZWN0b3IucXVhbnRpdHkpO1xyXG4gICAgICAgIHVzZXJDaG9pY2VUZXh0ID0gJChvcGVuZWRTZWN0aW9uU2VsZWN0b3Iuc2VjdGlvbiArICcgLnVzZXItY2hvaWNlJyk7XHJcbiAgICAgICAgY2hvaWNlUHJpY2UgPSAkKG9wZW5lZFNlY3Rpb25TZWxlY3Rvci5wcmljZSkuZ2V0QXR0cmlidXRlKCdkYXRhLXByaWNlJyk7XHJcblxyXG4gICAgICAgIHByaW50VXNlckNob2ljZSgpXHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIHByaW50VXNlckNob2ljZSgpIHtcclxuICAgICAgICBsZXQgY29udGVudCA9ICcnO1xyXG4gICAgICAgIGZvciAobGV0IGkgaW4gdXNlckNob2ljZSkge1xyXG4gICAgICAgICAgICBjb250ZW50ICs9IFwiPHA+XCIgKyBpICsgXCI6IFwiICsgdXNlckNob2ljZVtpXSArIFwiPC9wPlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb250ZW50ICs9IFwiPHA+UHJpY2U6IFwiICsgY2hvaWNlUHJpY2U7XHJcbiAgICAgICAgY29udGVudCArPSBcIjxwPlF1YW50aXR5OiBcIiArIHF1YW50aXR5LnZhbHVlO1xyXG4gICAgICAgIHVzZXJDaG9pY2VUZXh0LmlubmVySFRNTCA9IGNvbnRlbnQ7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvc3JjL2phdmFzY3JpcHRzL21vZHVsZXMvY2hlY2tvdXRCdG4uanMiLCJpbXBvcnQge3Njcm9sbEVsZW0sIGdldE9wZW5lZFNlY3Rpb259IGZyb20gJy4vbWV0aG9kcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoJCkgPT4ge1xyXG4gICAgbGV0IHVzZXJDaG9pY2UgPSB3aW5kb3cudXNlckNob2ljZTtcclxuICAgIGxldCBkYXRhSUQsIG9wZW5lZFNlY3Rpb25TZWxlY3RvciwgZWxlbWVudEhyZWYsIHF1YW50aXR5ID0gXCJcIjtcclxuICAgIGxldCByYW5kb21JZCA9IE1hdGgudHJ1bmMoKE1hdGgucmFuZG9tKCkgKiAxMDAwMDApKTtcclxuXHJcbiAgICB3aW5kb3cuYWRkT3JkZXIgPSBmdW5jdGlvbiAoZWwpIHtcclxuICAgICAgICBpZiAoZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdkaXNhYmxlZCcpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRhdGFJRCA9IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xyXG4gICAgICAgIG9wZW5lZFNlY3Rpb25TZWxlY3RvciA9IGdldE9wZW5lZFNlY3Rpb24oZGF0YUlEKTtcclxuICAgICAgICBlbGVtZW50SHJlZiA9IGVsLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xyXG4gICAgICAgIGxldCBpbnB1dE5hbWUgPSAkKG9wZW5lZFNlY3Rpb25TZWxlY3Rvci5mb3JtICsgJyBpbnB1dFtuYW1lPVwiZmlyc3RfbmFtZVwiXScpO1xyXG4gICAgICAgIGxldCBpbnB1dExhc3ROYW1lID0gJChvcGVuZWRTZWN0aW9uU2VsZWN0b3IuZm9ybSArICcgaW5wdXRbbmFtZT1cImxhc3RfbmFtZVwiXScpO1xyXG4gICAgICAgIGxldCBpbnB1dEVtYWlsID0gJChvcGVuZWRTZWN0aW9uU2VsZWN0b3IuZm9ybSArICcgaW5wdXRbbmFtZT1cImVtYWlsXCJdJyk7XHJcbiAgICAgICAgbGV0IGlucHV0UGhvbmUgPSAkKG9wZW5lZFNlY3Rpb25TZWxlY3Rvci5mb3JtICsgJyBpbnB1dFtuYW1lPVwicGhvbmVcIl0nKTtcclxuXHJcbiAgICAgICAgbGV0IHRpdGxlID0gJChvcGVuZWRTZWN0aW9uU2VsZWN0b3IuaDMpLmlubmVyVGV4dDtcclxuICAgICAgICBsZXQgcHJpY2UgPSAkKG9wZW5lZFNlY3Rpb25TZWxlY3Rvci5wcmljZSkuZ2V0QXR0cmlidXRlKCdkYXRhLXByaWNlJyk7XHJcbiAgICAgICAgcXVhbnRpdHkgPSAkKG9wZW5lZFNlY3Rpb25TZWxlY3Rvci5xdWFudGl0eSk7XHJcblxyXG4gICAgICAgIGxldCBwcm9kdWN0RGF0YSA9IHtcclxuICAgICAgICAgICAgXCJ0aXRsZVwiOiB0aXRsZSArICcgWycgKyByYW5kb21JZCArICddJyxcclxuICAgICAgICAgICAgXCJjb250ZW50XCI6IEpTT04uc3RyaW5naWZ5KHVzZXJDaG9pY2UpICsgJ3tcInByaWNlXCI6JyArIHByaWNlICsgJywgXCJxdWFudGl0eVwiOicgKyBxdWFudGl0eS52YWx1ZSArICd9JyxcclxuICAgICAgICAgICAgXCJzdGF0dXNcIjogJ3B1Ymxpc2gnXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSBpbiB1c2VyQ2hvaWNlKSB7XHJcbiAgICAgICAgICAgIHByb2R1Y3REYXRhWydwYXJhbV8nICsgaV0gPSB1c2VyQ2hvaWNlW2ldO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvZHVjdERhdGFbJ3BhcmFtX3ByaWNlJ10gPSBwcmljZTtcclxuICAgICAgICBwcm9kdWN0RGF0YVsncGFyYW1fcXVhbnRpdHknXSA9IHF1YW50aXR5LnZhbHVlO1xyXG4gICAgICAgIHByb2R1Y3REYXRhWydpbmZvX2ZpcnN0X25hbWUnXSA9IGlucHV0TmFtZS52YWx1ZTtcclxuICAgICAgICBwcm9kdWN0RGF0YVsnaW5mb19sYXN0X25hbWUnXSA9IGlucHV0TGFzdE5hbWUudmFsdWU7XHJcbiAgICAgICAgcHJvZHVjdERhdGFbJ2luZm9fZW1haWwnXSA9IGlucHV0RW1haWwudmFsdWU7XHJcbiAgICAgICAgcHJvZHVjdERhdGFbJ2luZm9fcGhvbmUnXSA9IGlucHV0UGhvbmUudmFsdWU7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdUaGlzIGlzIG9yZGVyIGRhdGE6ICcsIHByb2R1Y3REYXRhKTtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGZldGNoRGF0YShwcm9kdWN0RGF0YSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIGZldGNoRGF0YShkYXRhKSB7XHJcbiAgICAgICAgZmV0Y2goJy93cC1qc29uL3dwL3YyL3Nob3Bfb3JkZXInLCB7XHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxyXG4gICAgICAgICAgICAvLyB2YXIgQmFzZTY0PXtfa2V5U3RyOlwiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLz1cIixlbmNvZGU6ZnVuY3Rpb24oZSl7dmFyIHQ9XCJcIjt2YXIgbixyLGkscyxvLHUsYTt2YXIgZj0wO2U9QmFzZTY0Ll91dGY4X2VuY29kZShlKTt3aGlsZShmPGUubGVuZ3RoKXtuPWUuY2hhckNvZGVBdChmKyspO3I9ZS5jaGFyQ29kZUF0KGYrKyk7aT1lLmNoYXJDb2RlQXQoZisrKTtzPW4+PjI7bz0obiYzKTw8NHxyPj40O3U9KHImMTUpPDwyfGk+PjY7YT1pJjYzO2lmKGlzTmFOKHIpKXt1PWE9NjR9ZWxzZSBpZihpc05hTihpKSl7YT02NH10PXQrdGhpcy5fa2V5U3RyLmNoYXJBdChzKSt0aGlzLl9rZXlTdHIuY2hhckF0KG8pK3RoaXMuX2tleVN0ci5jaGFyQXQodSkrdGhpcy5fa2V5U3RyLmNoYXJBdChhKX1yZXR1cm4gdH0sZGVjb2RlOmZ1bmN0aW9uKGUpe3ZhciB0PVwiXCI7dmFyIG4scixpO3ZhciBzLG8sdSxhO3ZhciBmPTA7ZT1lLnJlcGxhY2UoL1teQS1aYS16MC05XFwrXFwvXFw9XS9nLFwiXCIpO3doaWxlKGY8ZS5sZW5ndGgpe3M9dGhpcy5fa2V5U3RyLmluZGV4T2YoZS5jaGFyQXQoZisrKSk7bz10aGlzLl9rZXlTdHIuaW5kZXhPZihlLmNoYXJBdChmKyspKTt1PXRoaXMuX2tleVN0ci5pbmRleE9mKGUuY2hhckF0KGYrKykpO2E9dGhpcy5fa2V5U3RyLmluZGV4T2YoZS5jaGFyQXQoZisrKSk7bj1zPDwyfG8+PjQ7cj0obyYxNSk8PDR8dT4+MjtpPSh1JjMpPDw2fGE7dD10K1N0cmluZy5mcm9tQ2hhckNvZGUobik7aWYodSE9NjQpe3Q9dCtTdHJpbmcuZnJvbUNoYXJDb2RlKHIpfWlmKGEhPTY0KXt0PXQrU3RyaW5nLmZyb21DaGFyQ29kZShpKX19dD1CYXNlNjQuX3V0ZjhfZGVjb2RlKHQpO3JldHVybiB0fSxfdXRmOF9lbmNvZGU6ZnVuY3Rpb24oZSl7ZT1lLnJlcGxhY2UoL1xcclxcbi9nLFwiXFxuXCIpO3ZhciB0PVwiXCI7Zm9yKHZhciBuPTA7bjxlLmxlbmd0aDtuKyspe3ZhciByPWUuY2hhckNvZGVBdChuKTtpZihyPDEyOCl7dCs9U3RyaW5nLmZyb21DaGFyQ29kZShyKX1lbHNlIGlmKHI+MTI3JiZyPDIwNDgpe3QrPVN0cmluZy5mcm9tQ2hhckNvZGUocj4+NnwxOTIpO3QrPVN0cmluZy5mcm9tQ2hhckNvZGUociY2M3wxMjgpfWVsc2V7dCs9U3RyaW5nLmZyb21DaGFyQ29kZShyPj4xMnwyMjQpO3QrPVN0cmluZy5mcm9tQ2hhckNvZGUocj4+NiY2M3wxMjgpO3QrPVN0cmluZy5mcm9tQ2hhckNvZGUociY2M3wxMjgpfX1yZXR1cm4gdH0sX3V0ZjhfZGVjb2RlOmZ1bmN0aW9uKGUpe3ZhciB0PVwiXCI7dmFyIG49MDt2YXIgcj1jMT1jMj0wO3doaWxlKG48ZS5sZW5ndGgpe3I9ZS5jaGFyQ29kZUF0KG4pO2lmKHI8MTI4KXt0Kz1TdHJpbmcuZnJvbUNoYXJDb2RlKHIpO24rK31lbHNlIGlmKHI+MTkxJiZyPDIyNCl7YzI9ZS5jaGFyQ29kZUF0KG4rMSk7dCs9U3RyaW5nLmZyb21DaGFyQ29kZSgociYzMSk8PDZ8YzImNjMpO24rPTJ9ZWxzZXtjMj1lLmNoYXJDb2RlQXQobisxKTtjMz1lLmNoYXJDb2RlQXQobisyKTt0Kz1TdHJpbmcuZnJvbUNoYXJDb2RlKChyJjE1KTw8MTJ8KGMyJjYzKTw8NnxjMyY2Myk7bis9M319cmV0dXJuIHR9fTtcclxuICAgICAgICAgICAgLy9jcmVhdGVQb3N0LnNldFJlcXVlc3RIZWFkZXIoICdBdXRob3JpemF0aW9uJywgJ0Jhc2ljICcgKyBCYXNlNjQuZW5jb2RlKCAndGVzdDowMDAwJyApICk7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdYLVdQLU5vbmNlJzogd3BBcGlTZXR0aW5ncy5ub25jZSxcclxuICAgICAgICAgICAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCdcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzICE9PSAyMDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnTm90IDIwMTogJyArIHJlc3BvbnNlLnN0YXR1cyArICcgJyArIHJlc3BvbnNlLnN0YXR1c1RleHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KCdOb3QgMjAxOiAnICsgcmVzcG9uc2Uuc3RhdHVzICsgJyAnICsgcmVzcG9uc2Uuc3RhdHVzVGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHByaW50T3JkZXJUZXh0KGRhdGEsIHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgICAgICBqUXVlcnkoZWxlbWVudEhyZWYpLmNhcm91c2VsKCduZXh0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsRWxlbSgkKFwiI2Nob29zZVwiKS5vZmZzZXRUb3AgLSA1MCwgMTAwKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5zdGF0dXNUZXh0ICsgJyBzdGF0dXM6IHBvc3QgYWRkZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICBhbGVydChyZXNwb25zZS5zdGF0dXNUZXh0ICsgJyBzdGF0dXM6IHBvc3QgYWRkZWQnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGFsZXJ0KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBwcmludE9yZGVyVGV4dChkYXRhLCByZXNwb25zZSkge1xyXG4gICAgICAgIGxldCBjb250ZW50ID0gJyc7XHJcbiAgICAgICAgbGV0IHVzZXJPcmRlclRleHQgPSAkKG9wZW5lZFNlY3Rpb25TZWxlY3Rvci5zZWN0aW9uICsgJyAudXNlci1vcmRlcicpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpIGluIHVzZXJDaG9pY2UpIHtcclxuICAgICAgICAgICAgY29udGVudCArPSBcIjxwPlwiICsgaSArIFwiOiBcIiArIHVzZXJDaG9pY2VbaV0gKyBcIjwvcD5cIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29udGVudCArPSBcIjxwPlByaWNlOiBcIiArIGRhdGEucGFyYW1fcHJpY2UgKyBcIjwvcD5cIjtcclxuICAgICAgICBjb250ZW50ICs9IFwiPHA+UXVhbnRpdHk6IFwiICsgcXVhbnRpdHkudmFsdWUgKyBcIjwvcD5cIjtcclxuICAgICAgICBjb250ZW50ICs9IFwiPHA+VG90YWwgcHJpY2U6IFwiICsgKHF1YW50aXR5LnZhbHVlICogZGF0YS5wYXJhbV9wcmljZSkgKyBcIjwvcD5cIjtcclxuICAgICAgICBjb250ZW50ICs9IFwiPHA+Rmlyc3QgbmFtZTogXCIgKyBkYXRhLmluZm9fZmlyc3RfbmFtZSArIFwiPC9wPlwiO1xyXG4gICAgICAgIGNvbnRlbnQgKz0gXCI8cD5MYXN0IG5hbWU6IFwiICsgZGF0YS5pbmZvX2xhc3RfbmFtZSArIFwiPC9wPlwiO1xyXG4gICAgICAgIGNvbnRlbnQgKz0gXCI8cD5FLW1haWw6IFwiICsgZGF0YS5pbmZvX2VtYWlsICsgXCI8L3A+XCI7XHJcbiAgICAgICAgY29udGVudCArPSBcIjxwPlBob25lOiBcIiArIGRhdGEuaW5mb19waG9uZSArIFwiPC9wPlwiO1xyXG4gICAgICAgIGNvbnRlbnQgKz0gJzxicj4nICsgcmVzcG9uc2Uuc3RhdHVzVGV4dCArICcgc3RhdHVzOiBwb3N0IGFkZGVkJztcclxuICAgICAgICB1c2VyT3JkZXJUZXh0LmlubmVySFRNTCA9IGNvbnRlbnQ7XHJcbiAgICB9XHJcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL3NyYy9qYXZhc2NyaXB0cy9tb2R1bGVzL2FkZE9yZGVyLmpzIiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJib29zdHJhcC12YWxpZGF0b3IgdmVyc2lvbjpcIiwgalF1ZXJ5LmZuLnZhbGlkYXRvci5Db25zdHJ1Y3Rvci5WRVJTSU9OKTtcclxuICAgIGpRdWVyeSgnZm9ybScpLnZhbGlkYXRvcih7XHJcbiAgICAgICAgZm9jdXM6IGZhbHNlLFxyXG4gICAgICAgIC8vIGRlbGF5OiAzMDAwXHJcbiAgICB9KTtcclxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvc3JjL2phdmFzY3JpcHRzL21vZHVsZXMvdmFsaWRhdGlvbi5qcyIsImltcG9ydCAkIGZyb20gXCJqcXVlcnlcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuICAgIGxldCBHYWxsZXJ5ID0ge1xyXG4gICAgICAgIHpvb206IGZ1bmN0aW9uIChpbWdDb250YWluZXIsIGltZywgZ2FsbGVyeSkge1xyXG4gICAgICAgICAgICBsZXQgY29udGFpbmVySGVpZ2h0ID0gaW1nQ29udGFpbmVyLm91dGVySGVpZ2h0KCk7XHJcbiAgICAgICAgICAgIGlmICghZ2FsbGVyeS5oYXNDbGFzcygnaXMtem9vbWVkJykpIHtcclxuICAgICAgICAgICAgICAgIGltZ0NvbnRhaW5lci5jc3MoXCJoZWlnaHRcIiwgY29udGFpbmVySGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgIGdhbGxlcnkuYWRkQ2xhc3MoJ2lzLXpvb21lZCcpO1xyXG5cclxuICAgICAgICAgICAgICAgIGltZy5kcmFnZ2FibGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGRyYWc6IGZ1bmN0aW9uIChldmVudCwgdWkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdWkucG9zaXRpb24ubGVmdCA9IE1hdGgubWluKDEwMCwgdWkucG9zaXRpb24ubGVmdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVpLnBvc2l0aW9uLnRvcCA9IE1hdGgubWluKDEwMCwgdWkucG9zaXRpb24udG9wKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGltZ0NvbnRhaW5lci5jc3MoXCJoZWlnaHRcIiwgXCJhdXRvXCIpO1xyXG4gICAgICAgICAgICAgICAgZ2FsbGVyeS5yZW1vdmVDbGFzcygnaXMtem9vbWVkJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHN3aXRjaDogZnVuY3Rpb24gKHRyaWdnZXIsIGltZ0NvbnRhaW5lciwgZ2FsbGVyeSkge1xyXG4gICAgICAgICAgICBsZXQgc3JjID0gdHJpZ2dlci5hdHRyKCdocmVmJyksXHJcbiAgICAgICAgICAgICAgICB0aHVtYnMgPSB0cmlnZ2VyLnNpYmxpbmdzKCksXHJcbiAgICAgICAgICAgICAgICBpbWcgPSB0cmlnZ2VyLnBhcmVudCgpLnByZXYoKS5jaGlsZHJlbigpO1xyXG5cclxuICAgICAgICAgICAgdHJpZ2dlci5hZGRDbGFzcygnaXMtYWN0aXZlJyk7XHJcblxyXG4gICAgICAgICAgICB0aHVtYnMuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcygnaXMtYWN0aXZlJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZ2FsbGVyeS5oYXNDbGFzcygnaXMtem9vbWVkJykpIHtcclxuICAgICAgICAgICAgICAgIGdhbGxlcnkucmVtb3ZlQ2xhc3MoJ2lzLXpvb21lZCcpO1xyXG4gICAgICAgICAgICAgICAgaW1nQ29udGFpbmVyLmNzcyhcImhlaWdodFwiLCBcImF1dG9cIik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIFN3aXRjaCBpbWFnZSBzb3VyY2VcclxuICAgICAgICAgICAgaW1nLmF0dHIoJ3NyYycsIHNyYyk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBsZXQgZ2FsbGVyeSA9ICQoJy5nYWxsZXJ5Jyk7XHJcbiAgICBnYWxsZXJ5Lm9uKCdjbGljaycsICdhJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgbGV0IHRyaWdnZXIgPSAkKHRoaXMpO1xyXG4gICAgICAgIGxldCB0cmlnZ2VyRGF0YSA9IHRyaWdnZXIuZGF0YShcImdhbGxlcnlcIik7XHJcbiAgICAgICAgbGV0IGdhbGxlcnlJZCA9IGV2ZW50LmRlbGVnYXRlVGFyZ2V0LmlkO1xyXG4gICAgICAgIGdhbGxlcnkgPSAkKCcjJyArIGdhbGxlcnlJZCk7XHJcblxyXG4gICAgICAgIGlmICh0cmlnZ2VyRGF0YSA9PT0gJ3pvb20nKSB7XHJcbiAgICAgICAgICAgIGxldCBpbWdDb250YWluZXIgPSB0cmlnZ2VyLnBhcmVudCgpLFxyXG4gICAgICAgICAgICAgICAgaW1nID0gdHJpZ2dlci5zaWJsaW5ncygpO1xyXG4gICAgICAgICAgICBHYWxsZXJ5Lnpvb20oaW1nQ29udGFpbmVyLCBpbWcsIGdhbGxlcnkpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodHJpZ2dlckRhdGEgPT09ICd0aHVtYicpIHtcclxuICAgICAgICAgICAgbGV0IGltZ0NvbnRhaW5lciA9IHRyaWdnZXIucGFyZW50KCkuc2libGluZ3MoKTtcclxuICAgICAgICAgICAgR2FsbGVyeS5zd2l0Y2godHJpZ2dlciwgaW1nQ29udGFpbmVyLCBnYWxsZXJ5KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9KTtcclxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvc3JjL2phdmFzY3JpcHRzL21vZHVsZXMvZ2FsbGVyeS5qcyIsIm1vZHVsZS5leHBvcnRzID0galF1ZXJ5O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwialF1ZXJ5XCJcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==