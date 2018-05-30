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
	exports.getInput = getInput;
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
	
	function getInput(dataID, name) {
	    return $(getOpenedSection(dataID).form + ' input[name="' + name + '"]');
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
	    var names = variationsObject.inputNames;
	    var placeholders = variationsObject.inputPlaceholders;
	
	    window.addOrder = function (el) {
	        if (el.classList.contains('disabled')) {
	            return;
	        }
	
	        dataID = el.getAttribute('data-id');
	        openedSectionSelector = (0, _methods.getOpenedSection)(dataID);
	        elementHref = el.getAttribute('href');
	
	        var title = $(openedSectionSelector.h3).innerText;
	        var price = $(openedSectionSelector.price).getAttribute('data-price');
	        quantity = $(openedSectionSelector.quantity);
	
	        var productData = {
	            "title": title + ' [' + randomId + ']',
	            "content": JSON.stringify(userChoice) + '{"price":' + price + ', "quantity":' + quantity.value + '}',
	            "status": 'publish'
	        };
	
	        for (var i = 0; i < names.length; i++) {
	            var value = (0, _methods.getInput)(dataID, names[i]).value;
	            productData['info_' + names[i]] = value;
	        }
	
	        for (var _i in userChoice) {
	            productData['param_' + _i] = userChoice[_i];
	        }
	
	        productData['param_price'] = price;
	        productData['param_quantity'] = quantity.value;
	
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
	
	        for (var _i2 = 0; _i2 < names.length; _i2++) {
	            content += "<p>" + placeholders[_i2] + ": " + data['info_' + names[_i2]] + "</p>";
	        }
	
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMTg4ZDQ3OTg4NTFiYzJmMTgxMWQiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NyYy9qYXZhc2NyaXB0cy9jb21tb24uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NyYy9qYXZhc2NyaXB0cy9tb2R1bGVzL21ldGhvZHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NyYy9qYXZhc2NyaXB0cy9tb2R1bGVzL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NyYy9qYXZhc2NyaXB0cy9tb2R1bGVzL3RvZ2dsZUNob29zZVNlY3Rpb25zLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zcmMvamF2YXNjcmlwdHMvbW9kdWxlcy9vbkNoYW5nZVNlbGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3JjL2phdmFzY3JpcHRzL21vZHVsZXMvY2hlY2tvdXRCdG4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NyYy9qYXZhc2NyaXB0cy9tb2R1bGVzL2FkZE9yZGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zcmMvamF2YXNjcmlwdHMvbW9kdWxlcy92YWxpZGF0aW9uLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zcmMvamF2YXNjcmlwdHMvbW9kdWxlcy9nYWxsZXJ5LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImpRdWVyeVwiIl0sIm5hbWVzIjpbInNjcm9sbEVsZW0iLCJsYXp5U2Nyb2xsIiwibmF2YmFyVG9EZWZhdWx0IiwibmF2YmFyVG9GbG9hdCIsInNldE5hdlN0eWxlIiwiZ2V0T3BlbmVkU2VjdGlvbiIsImdldElucHV0IiwiJCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImJpbmQiLCIkJCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJOb2RlIiwicHJvdG90eXBlIiwib24iLCJ3aW5kb3ciLCJuYW1lIiwiZm4iLCJhZGRFdmVudExpc3RlbmVyIiwiTm9kZUxpc3QiLCJfX3Byb3RvX18iLCJBcnJheSIsIkRvY3VtZW50IiwiZm9yRWFjaCIsImVsZW0iLCJwcm9wZXJ0eSIsImR1cmF0aW9uIiwialF1ZXJ5IiwiYW5pbWF0ZSIsInNjcm9sbFRvcCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJpZCIsImdldEF0dHJpYnV0ZSIsIm9mZnNldCIsIm9mZnNldFRvcCIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwibWVudUl0ZW0iLCJpIiwibGVuZ3RoIiwibmF2YmFyIiwiYWRkIiwicGFnZVlPZmZzZXQiLCJkYXRhSUQiLCJzZWN0aW9uIiwiaDMiLCJmb3JtIiwicHJpY2UiLCJxdWFudGl0eSIsImRpc3BsYXkiLCJvdXRlcldpZHRoIiwidG9nZ2xlIiwiY2xpY2siLCJzZWN0aW9ucyIsIm9wZW5lZFNlY3Rpb25TZWxlY3RvciIsImNsb3NlQnRuIiwiY29sbGFwc2VTZWN0aW9ucyIsInNob3dpbmdTZWN0aW9ucyIsInRvZ2dsZUNob29zZVNlY3Rpb25zIiwiZWwiLCJjb2xsYXBzZU9wZW5lZFNlY3Rpb25zIiwic2hvd1RhcmdldFNlY3Rpb24iLCJ1c2VyQ2hvaWNlIiwicHJpbnRQcmljZSIsInByaW50TWVzc2FnZSIsImNoZWNrb3V0QnV0dG9uIiwib25DaGFuZ2VTZWxlY3QiLCJhbGxTZWxlY3RzIiwiaXRlbVNlbGVjdCIsIm9wdGlvbnMiLCJzZWxlY3RlZEluZGV4IiwidmFsdWUiLCJjb25zb2xlIiwibG9nIiwiY29tcGFyZUF2YWlsYWJpbGl0eSIsInBhcmFtZXRlciIsImhhc093blByb3BlcnR5IiwibWlzc1NlbGVjdCIsInZhcmlhdGlvbnMiLCJ2YXJpYXRpb25zT2JqZWN0IiwiZGF0YUJ5SWQiLCJ2YXJpYXRpb24iLCJ2YXJpYXRpb25zV2l0aG91dFByaWNlIiwiT2JqZWN0IiwiYXNzaWduIiwiSlNPTiIsInN0cmluZ2lmeSIsIm1hdGNoVmFyaWF0aW9uIiwibWlzc1ZhcmlhdGlvbiIsInNldEF0dHJpYnV0ZSIsImlubmVySFRNTCIsImRpc2FibGVkIiwidXNlckNob2ljZVRleHQiLCJjaG9pY2VQcmljZSIsImNoZWNrb3V0QnRuIiwicHJpbnRVc2VyQ2hvaWNlIiwiY29udGVudCIsImVsZW1lbnRIcmVmIiwicmFuZG9tSWQiLCJNYXRoIiwidHJ1bmMiLCJyYW5kb20iLCJuYW1lcyIsImlucHV0TmFtZXMiLCJwbGFjZWhvbGRlcnMiLCJpbnB1dFBsYWNlaG9sZGVycyIsImFkZE9yZGVyIiwiY29udGFpbnMiLCJ0aXRsZSIsImlubmVyVGV4dCIsInByb2R1Y3REYXRhIiwiZmV0Y2hEYXRhIiwiZGF0YSIsImZldGNoIiwiYm9keSIsImhlYWRlcnMiLCJ3cEFwaVNldHRpbmdzIiwibm9uY2UiLCJtZXRob2QiLCJ0aGVuIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJzdGF0dXNUZXh0IiwiYWxlcnQiLCJwcmludE9yZGVyVGV4dCIsImNhcm91c2VsIiwiY2F0Y2giLCJ1c2VyT3JkZXJUZXh0IiwicGFyYW1fcHJpY2UiLCJ2YWxpZGF0b3IiLCJDb25zdHJ1Y3RvciIsIlZFUlNJT04iLCJmb2N1cyIsIkdhbGxlcnkiLCJ6b29tIiwiaW1nQ29udGFpbmVyIiwiaW1nIiwiZ2FsbGVyeSIsImNvbnRhaW5lckhlaWdodCIsIm91dGVySGVpZ2h0IiwiaGFzQ2xhc3MiLCJjc3MiLCJhZGRDbGFzcyIsImRyYWdnYWJsZSIsImRyYWciLCJ1aSIsInBvc2l0aW9uIiwibGVmdCIsIm1pbiIsInRvcCIsInJlbW92ZUNsYXNzIiwic3dpdGNoIiwidHJpZ2dlciIsInNyYyIsImF0dHIiLCJ0aHVtYnMiLCJzaWJsaW5ncyIsInBhcmVudCIsInByZXYiLCJjaGlsZHJlbiIsImVhY2giLCJ0cmlnZ2VyRGF0YSIsImdhbGxlcnlJZCIsImRlbGVnYXRlVGFyZ2V0Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7O0FDckNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFSQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCOzs7Ozs7Ozs7OztTQ0dnQkEsVSxHQUFBQSxVO1NBTUFDLFUsR0FBQUEsVTtTQWFBQyxlLEdBQUFBLGU7U0FVQUMsYSxHQUFBQSxhO1NBV0FDLFcsR0FBQUEsVztTQU9BQyxnQixHQUFBQSxnQjtTQVdBQyxRLEdBQUFBLFE7QUE3RWhCLEtBQU1DLElBQUlDLFNBQVNDLGFBQVQsQ0FBdUJDLElBQXZCLENBQTRCRixRQUE1QixDQUFWO0FBQ0EsS0FBTUcsS0FBS0gsU0FBU0ksZ0JBQVQsQ0FBMEJGLElBQTFCLENBQStCRixRQUEvQixDQUFYOztBQUVBSyxNQUFLQyxTQUFMLENBQWVDLEVBQWYsR0FBb0JDLE9BQU9ELEVBQVAsR0FBWSxVQUFVRSxJQUFWLEVBQWdCQyxFQUFoQixFQUFvQjtBQUNoRCxVQUFLQyxnQkFBTCxDQUFzQkYsSUFBdEIsRUFBNEJDLEVBQTVCO0FBQ0gsRUFGRDs7QUFJQUUsVUFBU04sU0FBVCxDQUFtQk8sU0FBbkIsR0FBK0JDLE1BQU1SLFNBQXJDLEMsQ0FBZ0Q7QUFDaERNLFVBQVNOLFNBQVQsQ0FBbUJPLFNBQW5CLEdBQStCRSxTQUFTVCxTQUF4QztBQUNBOztBQUVBTSxVQUFTTixTQUFULENBQW1CQyxFQUFuQixHQUF3QkssU0FBU04sU0FBVCxDQUFtQkssZ0JBQW5CLEdBQXNDLFVBQVVGLElBQVYsRUFBZ0JDLEVBQWhCLEVBQW9CO0FBQzlFLFVBQUtNLE9BQUwsQ0FBYSxVQUFDQyxJQUFELEVBQVU7QUFDbkJBLGNBQUtWLEVBQUwsQ0FBUUUsSUFBUixFQUFjQyxFQUFkO0FBQ0gsTUFGRDtBQUdILEVBSkQ7O1NBTVFYLEMsR0FBQUEsQztTQUFHSSxFLEdBQUFBLEU7QUFFSixVQUFTWCxVQUFULENBQW9CMEIsUUFBcEIsRUFBOEJDLFFBQTlCLEVBQXdDO0FBQzNDQyxZQUFPLFlBQVAsRUFBcUJDLE9BQXJCLENBQTZCO0FBQ3pCQyxvQkFBV0o7QUFEYyxNQUE3QixFQUVHQyxRQUZIO0FBR0g7O0FBRU0sVUFBUzFCLFVBQVQsR0FBc0I7QUFDekI4QixXQUFNQyxjQUFOO0FBQ0EsU0FBSUMsS0FBSyxLQUFLQyxZQUFMLENBQWtCLE1BQWxCLENBQVQ7QUFDQSxTQUFJQyxTQUFTNUIsRUFBRTBCLEVBQUYsRUFBTUcsU0FBbkI7QUFDQTtBQUNBLFNBQUlILE9BQU8sU0FBWCxFQUFzQjtBQUNsQkUsbUJBQVUsRUFBVjtBQUNIO0FBQ0RuQyxnQkFBV21DLE1BQVgsRUFBbUIsR0FBbkI7O0FBRUEsWUFBTyxLQUFQO0FBQ0g7O0FBRU0sVUFBU2pDLGVBQVQsR0FBMkI7QUFDOUJLLE9BQUUsaUJBQUYsRUFBcUI4QixLQUFyQixDQUEyQkMsZUFBM0IsR0FBNkMsYUFBN0M7QUFDQS9CLE9BQUUsbUJBQUYsRUFBdUJnQyxTQUF2QixDQUFpQ0MsTUFBakMsQ0FBd0MsZ0JBQXhDO0FBQ0FqQyxPQUFFLG1CQUFGLEVBQXVCZ0MsU0FBdkIsQ0FBaUNDLE1BQWpDLENBQXdDLGtCQUF4QztBQUNBLFNBQUlDLFdBQVc5QixHQUFHLGVBQUgsQ0FBZjtBQUNBLFVBQUssSUFBSStCLElBQUksQ0FBYixFQUFnQkEsSUFBSUQsU0FBU0UsTUFBN0IsRUFBcUNELEdBQXJDLEVBQTBDO0FBQ3RDRCxrQkFBU0MsQ0FBVCxFQUFZSCxTQUFaLENBQXNCQyxNQUF0QixDQUE2QixPQUE3QjtBQUNIO0FBQ0o7O0FBRU0sVUFBU3JDLGFBQVQsR0FBeUI7QUFDNUIsU0FBSXlDLFNBQVNyQyxFQUFFLGlCQUFGLENBQWI7QUFDQXFDLFlBQU9QLEtBQVAsQ0FBYUMsZUFBYixHQUErQix1QkFBL0I7QUFDQU0sWUFBT0wsU0FBUCxDQUFpQk0sR0FBakIsQ0FBcUIsa0JBQXJCO0FBQ0F0QyxPQUFFLG1CQUFGLEVBQXVCZ0MsU0FBdkIsQ0FBaUNNLEdBQWpDLENBQXFDLGdCQUFyQztBQUNBLFNBQUlKLFdBQVc5QixHQUFHLGVBQUgsQ0FBZjtBQUNBLFVBQUssSUFBSStCLElBQUksQ0FBYixFQUFnQkEsSUFBSUQsU0FBU0UsTUFBN0IsRUFBcUNELEdBQXJDLEVBQTBDO0FBQ3RDRCxrQkFBU0MsQ0FBVCxFQUFZSCxTQUFaLENBQXNCTSxHQUF0QixDQUEwQixPQUExQjtBQUNIO0FBQ0o7O0FBRU0sVUFBU3pDLFdBQVQsR0FBdUI7QUFDMUJEO0FBQ0EsU0FBSWEsT0FBTzhCLFdBQVAsR0FBcUIsRUFBekIsRUFBNkI7QUFDekI1QztBQUNIO0FBQ0o7O0FBRU0sVUFBU0csZ0JBQVQsQ0FBMEIwQyxNQUExQixFQUFrQztBQUNyQyxTQUFJQyxVQUFVLGNBQWNELE1BQTVCO0FBQ0EsWUFBTztBQUNIQyxrQkFBU0EsT0FETjtBQUVIQyxhQUFJRCxVQUFVLEtBRlg7QUFHSEUsZUFBTUYsVUFBVSxPQUhiO0FBSUhHLGdCQUFPSCxVQUFVLFNBSmQ7QUFLSEksbUJBQVVKLFVBQVU7QUFMakIsTUFBUDtBQU9IOztBQUVNLFVBQVMxQyxRQUFULENBQWtCeUMsTUFBbEIsRUFBMEI5QixJQUExQixFQUFnQztBQUNuQyxZQUFPVixFQUFFRixpQkFBaUIwQyxNQUFqQixFQUF5QkcsSUFBekIsR0FBZ0MsZUFBaEMsR0FBa0RqQyxJQUFsRCxHQUF5RCxJQUEzRCxDQUFQO0FBQ0gsRTs7Ozs7Ozs7Ozs7O0FDL0VEOzttQkFFZSxVQUFDVixDQUFELEVBQUlJLEVBQUosRUFBVztBQUN0QkssWUFBT0QsRUFBUCxDQUFVLE1BQVYsRUFBa0IsWUFBWTtBQUMxQlIsV0FBRSxlQUFGLEVBQW1COEIsS0FBbkIsQ0FBeUJnQixPQUF6QixHQUFtQyxNQUFuQztBQUNBOUMsV0FBRSxTQUFGLEVBQWE4QixLQUFiLENBQW1CZ0IsT0FBbkIsR0FBNkIsTUFBN0I7QUFDSCxNQUhEOztBQUtBckMsWUFBT0QsRUFBUCxDQUFVLGtCQUFWLEVBQThCLFlBQVk7QUFDdEM7QUFDQTtBQUNBQyxnQkFBT0QsRUFBUCxDQUFVLFFBQVYsRUFBb0IsWUFBWTtBQUM1QjtBQUNILFVBRkQ7O0FBSUE7QUFDQSxhQUFJQyxPQUFPc0MsVUFBUCxHQUFvQixHQUF4QixFQUE2QjtBQUN6QjtBQUNBL0MsZUFBRSxnQkFBRixFQUFvQlEsRUFBcEIsQ0FBdUIsT0FBdkIsRUFBZ0MsWUFBWTtBQUN4QztBQUNBUixtQkFBRSxXQUFGLEVBQWVnQyxTQUFmLENBQXlCZ0IsTUFBekIsQ0FBZ0MsUUFBaEM7QUFDSCxjQUhEOztBQUtBO0FBQ0E1QyxnQkFBRywwQkFBSCxFQUErQkksRUFBL0IsQ0FBa0MsT0FBbEMsRUFBMkMsWUFBWTtBQUNuRFIsbUJBQUUsZ0JBQUYsRUFBb0JpRCxLQUFwQjtBQUNILGNBRkQ7QUFHSDs7QUFFRDtBQUNBN0MsWUFBRyxhQUFILEVBQWtCSSxFQUFsQixDQUFxQixPQUFyQjtBQUNBSixZQUFHLFFBQUgsRUFBYUksRUFBYixDQUFnQixPQUFoQjs7QUFFQTtBQUNBUixXQUFFLFlBQUYsRUFBZ0JRLEVBQWhCLENBQW1CLE9BQW5CLEVBQTRCLFlBQVk7QUFDcEMsaUJBQUkwQyxXQUFXOUMsR0FBRyxtQkFBSCxDQUFmO0FBQ0Esa0JBQUssSUFBSStCLElBQUksQ0FBYixFQUFnQkEsSUFBSWUsU0FBU2QsTUFBN0IsRUFBcUNELEdBQXJDLEVBQTBDO0FBQ3RDZSwwQkFBU2YsQ0FBVCxFQUFZSCxTQUFaLENBQXNCQyxNQUF0QixDQUE2QixTQUE3QjtBQUNIO0FBQ0Qsa0JBQUtELFNBQUwsQ0FBZUMsTUFBZixDQUFzQixTQUF0QjtBQUNILFVBTkQ7O0FBUUFaLGdCQUFPLHFCQUFQLEVBQThCYixFQUE5QixDQUFpQyxPQUFqQyxFQUEwQyxZQUFZO0FBQ2xELHNDQUFXUixFQUFFLFNBQUYsRUFBYTZCLFNBQWIsR0FBeUIsRUFBcEMsRUFBd0MsR0FBeEM7QUFDSCxVQUZEO0FBR0gsTUFyQ0Q7QUFzQ0gsRTs7Ozs7Ozs7Ozs7O0FDOUNEOzttQkFFZSxVQUFDN0IsQ0FBRCxFQUFJSSxFQUFKLEVBQVc7O0FBRXRCLFNBQUlvQyxlQUFKO0FBQUEsU0FBWVcsd0JBQXdCLEVBQXBDO0FBQ0EsU0FBSVYsVUFBVSxFQUFkO0FBQ0EsU0FBSVcsV0FBV3BELEVBQUUsWUFBRixDQUFmO0FBQ0EsU0FBSXFELG1CQUFtQmpELEdBQUcsbUJBQUgsQ0FBdkI7QUFDQSxTQUFJa0Qsa0JBQWtCbEQsR0FBRywyQkFBSCxFQUFnQ2dDLE1BQXREOztBQUVBM0IsWUFBTzhDLG9CQUFQLEdBQThCLFVBQVVDLEVBQVYsRUFBYzs7QUFFeEMsYUFBSUYsZUFBSixFQUFxQjtBQUNqQkYsc0JBQVNwQixTQUFULENBQW1CQyxNQUFuQixDQUEwQixTQUExQjtBQUNIOztBQUVEd0IsZ0NBQXVCRCxFQUF2Qjs7QUFFQUU7O0FBRUEsYUFBSUosZUFBSixFQUFxQjtBQUNqQkYsc0JBQVNwQixTQUFULENBQW1CTSxHQUFuQixDQUF1QixTQUF2QjtBQUNIO0FBQ0osTUFiRDs7QUFlQSxjQUFTbUIsc0JBQVQsQ0FBZ0NELEVBQWhDLEVBQW9DO0FBQ2hDaEIsa0JBQVNnQixHQUFHN0IsWUFBSCxDQUFnQixTQUFoQixDQUFUO0FBQ0F3QixpQ0FBd0IsK0JBQWlCWCxNQUFqQixDQUF4QjtBQUNBQyxtQkFBVXpDLEVBQUVtRCxzQkFBc0JWLE9BQXhCLENBQVY7QUFDQSxjQUFLLElBQUlOLElBQUksQ0FBYixFQUFnQkEsSUFBSWtCLGlCQUFpQmpCLE1BQXJDLEVBQTZDRCxHQUE3QyxFQUFrRDtBQUM5QyxpQkFBSSxFQUFFa0IsaUJBQWlCbEIsQ0FBakIsRUFBb0JULEVBQXBCLEtBQTJCZSxRQUFRZixFQUFyQyxDQUFKLEVBQThDO0FBQzFDMkIsa0NBQWlCbEIsQ0FBakIsRUFBb0JILFNBQXBCLENBQThCQyxNQUE5QixDQUFxQyxTQUFyQztBQUNIO0FBQ0o7QUFDSjs7QUFFRCxjQUFTeUIsaUJBQVQsR0FBNkI7QUFDekJqQixpQkFBUVQsU0FBUixDQUFrQmdCLE1BQWxCLENBQXlCLFNBQXpCO0FBQ0FNLDJCQUFrQmxELEdBQUcsMkJBQUgsRUFBZ0NnQyxNQUFsRDtBQUNIO0FBQ0osRTs7Ozs7Ozs7Ozs7O0FDeENEOzttQkFFZSxVQUFDcEMsQ0FBRCxFQUFJSSxFQUFKLEVBQVc7QUFDdEIsU0FBSXVELGFBQWFsRCxPQUFPa0QsVUFBUCxHQUFvQixFQUFyQztBQUNBLFNBQUluQixlQUFKO0FBQUEsU0FBWVcsd0JBQXdCLEVBQXBDO0FBQ0EsU0FBSVMsbUJBQUo7QUFBQSxTQUFnQkMscUJBQWhCO0FBQUEsU0FBOEJDLGlCQUFpQixFQUEvQzs7QUFFQXJELFlBQU9zRCxjQUFQLEdBQXdCLFVBQVVQLEVBQVYsRUFBYztBQUNsQ2hCLGtCQUFTZ0IsR0FBRzdCLFlBQUgsQ0FBZ0IsU0FBaEIsQ0FBVDtBQUNBd0IsaUNBQXdCLCtCQUFpQlgsTUFBakIsQ0FBeEI7QUFDQW9CLHNCQUFhNUQsRUFBRW1ELHNCQUFzQlAsS0FBeEIsQ0FBYjtBQUNBaUIsd0JBQWU3RCxFQUFFbUQsc0JBQXNCVixPQUF0QixHQUFnQyxpQkFBbEMsQ0FBZjtBQUNBcUIsMEJBQWlCOUQsRUFBRW1ELHNCQUFzQlYsT0FBdEIsR0FBZ0MsNEJBQWxDLENBQWpCOztBQUVBLGFBQUl1QixhQUFhNUQsR0FBRytDLHNCQUFzQlYsT0FBdEIsR0FBZ0MsU0FBbkMsQ0FBakI7O0FBRUEsY0FBSyxJQUFJTixJQUFJLENBQWIsRUFBZ0JBLElBQUk2QixXQUFXNUIsTUFBL0IsRUFBdUNELEdBQXZDLEVBQTRDO0FBQ3hDLGlCQUFJOEIsYUFBYUQsV0FBVzdCLENBQVgsQ0FBakI7QUFDQXdCLHdCQUFXTSxXQUFXdkQsSUFBdEIsSUFBOEJ1RCxXQUFXQyxPQUFYLENBQW1CRCxXQUFXRSxhQUE5QixFQUE2Q0MsS0FBM0U7QUFDSDtBQUNEQyxpQkFBUUMsR0FBUixDQUFZLHVCQUFaLEVBQXFDWCxVQUFyQzs7QUFFQVksNkJBQW9CWixVQUFwQixFQUFnQ25CLE1BQWhDO0FBQ0gsTUFoQkQ7O0FBa0JBLGNBQVMrQixtQkFBVCxDQUE2QlosVUFBN0IsRUFBeUNuQixNQUF6QyxFQUFpRDtBQUM3QyxjQUFLLElBQUlnQyxTQUFULElBQXNCYixVQUF0QixFQUFrQztBQUM5QixpQkFBSUEsV0FBV2MsY0FBWCxDQUEwQkQsU0FBMUIsS0FBd0NiLFdBQVdhLFNBQVgsTUFBMEIsRUFBdEUsRUFBMEU7QUFDdEUsd0JBQU9FLFdBQVdGLFNBQVgsQ0FBUDtBQUNIO0FBQ0o7O0FBRUQsYUFBSUcsYUFBYUMsaUJBQWlCQyxRQUFqQixDQUEwQnJDLE1BQTFCLENBQWpCOztBQUVBNkIsaUJBQVFDLEdBQVIsQ0FBWSxzQkFBWixFQUFvQ0ssVUFBcEM7O0FBRUEsY0FBSyxJQUFJeEMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJd0MsV0FBV3ZDLE1BQS9CLEVBQXVDRCxHQUF2QyxFQUE0QztBQUN4QyxpQkFBSTJDLFlBQVlILFdBQVd4QyxDQUFYLENBQWhCO0FBQ0EsaUJBQUk0Qyx5QkFBeUIsRUFBN0I7O0FBRUFDLG9CQUFPQyxNQUFQLENBQWNGLHNCQUFkLEVBQXNDRCxTQUF0Qzs7QUFFQSxvQkFBT0MsdUJBQXVCbkMsS0FBOUI7O0FBRUEsaUJBQUlzQyxLQUFLQyxTQUFMLENBQWV4QixVQUFmLE1BQStCdUIsS0FBS0MsU0FBTCxDQUFlSixzQkFBZixDQUFuQyxFQUEyRTtBQUN2RSx3QkFBT0ssZUFBZU4sU0FBZixDQUFQO0FBQ0g7O0FBRURPO0FBQ0g7QUFDSjs7QUFFRCxjQUFTWCxVQUFULENBQW9CRixTQUFwQixFQUErQjtBQUMzQlosb0JBQVcwQixZQUFYLENBQXdCLFlBQXhCLEVBQXNDLEVBQXRDO0FBQ0ExQixvQkFBVzJCLFNBQVgsR0FBdUIsUUFBdkI7QUFDQTFCLHNCQUFhMEIsU0FBYixHQUF5QixnQkFBZ0JmLFNBQXpDO0FBQ0FWLHdCQUFlMEIsUUFBZixHQUEwQixJQUExQjtBQUNBbkIsaUJBQVFDLEdBQVIsQ0FBWSxnQkFBZ0JFLFNBQTVCO0FBQ0g7O0FBRUQsY0FBU2EsYUFBVCxHQUF5QjtBQUNyQnpCLG9CQUFXMEIsWUFBWCxDQUF3QixZQUF4QixFQUFzQyxFQUF0QztBQUNBMUIsb0JBQVcyQixTQUFYLEdBQXVCLGNBQXZCO0FBQ0ExQixzQkFBYTBCLFNBQWIsR0FBeUIsd0JBQXpCO0FBQ0F6Qix3QkFBZTBCLFFBQWYsR0FBMEIsSUFBMUI7QUFDQW5CLGlCQUFRQyxHQUFSLENBQVksd0JBQVo7QUFDSDs7QUFFRCxjQUFTYyxjQUFULENBQXdCTixTQUF4QixFQUFtQztBQUMvQmxCLG9CQUFXMEIsWUFBWCxDQUF3QixZQUF4QixFQUFzQ1IsVUFBVWxDLEtBQWhEO0FBQ0FnQixvQkFBVzJCLFNBQVgsR0FBdUIsMkJBQTJCVCxVQUFVbEMsS0FBckMsR0FBNkMsUUFBcEU7QUFDQWlCLHNCQUFhMEIsU0FBYixHQUF5QixFQUF6QjtBQUNBekIsd0JBQWUwQixRQUFmLEdBQTBCLEtBQTFCO0FBQ0FuQixpQkFBUUMsR0FBUixDQUFZUSxVQUFVbEMsS0FBdEI7QUFDSDtBQUNKLEU7Ozs7Ozs7Ozs7OztBQzNFRDs7bUJBRWUsVUFBQzVDLENBQUQsRUFBTztBQUNsQixTQUFJMkQsYUFBYWxELE9BQU9rRCxVQUF4QjtBQUNBLFNBQUluQixTQUFTLEVBQWI7QUFDQSxTQUFJSyxpQkFBSjtBQUFBLFNBQWM0Qyx1QkFBZDtBQUFBLFNBQThCQyxvQkFBOUI7QUFBQSxTQUEyQ3ZDLHdCQUF3QixFQUFuRTs7QUFFQTFDLFlBQU9rRixXQUFQLEdBQXFCLFVBQVVuQyxFQUFWLEVBQWM7QUFDL0Isa0NBQVd4RCxFQUFFLFNBQUYsRUFBYTZCLFNBQWIsR0FBeUIsRUFBcEMsRUFBd0MsR0FBeEM7QUFDQVcsa0JBQVNnQixHQUFHN0IsWUFBSCxDQUFnQixTQUFoQixDQUFUO0FBQ0F3QixpQ0FBd0IsK0JBQWlCWCxNQUFqQixDQUF4QjtBQUNBSyxvQkFBVzdDLEVBQUVtRCxzQkFBc0JOLFFBQXhCLENBQVg7QUFDQTRDLDBCQUFpQnpGLEVBQUVtRCxzQkFBc0JWLE9BQXRCLEdBQWdDLGVBQWxDLENBQWpCO0FBQ0FpRCx1QkFBYzFGLEVBQUVtRCxzQkFBc0JQLEtBQXhCLEVBQStCakIsWUFBL0IsQ0FBNEMsWUFBNUMsQ0FBZDs7QUFFQWlFO0FBQ0gsTUFURDs7QUFXQSxjQUFTQSxlQUFULEdBQTJCO0FBQ3ZCLGFBQUlDLFVBQVUsRUFBZDtBQUNBLGNBQUssSUFBSTFELENBQVQsSUFBY3dCLFVBQWQsRUFBMEI7QUFDdEJrQyx3QkFBVyxRQUFRMUQsQ0FBUixHQUFZLElBQVosR0FBbUJ3QixXQUFXeEIsQ0FBWCxDQUFuQixHQUFtQyxNQUE5QztBQUNIO0FBQ0QwRCxvQkFBVyxlQUFlSCxXQUExQjtBQUNBRyxvQkFBVyxrQkFBa0JoRCxTQUFTdUIsS0FBdEM7QUFDQXFCLHdCQUFlRixTQUFmLEdBQTJCTSxPQUEzQjtBQUNIO0FBQ0osRTs7Ozs7Ozs7Ozs7O0FDM0JEOzttQkFFZSxVQUFDN0YsQ0FBRCxFQUFPO0FBQ2xCLFNBQUkyRCxhQUFhbEQsT0FBT2tELFVBQXhCO0FBQ0EsU0FBSW5CLGVBQUo7QUFBQSxTQUFZVyw4QkFBWjtBQUFBLFNBQW1DMkMsb0JBQW5DO0FBQUEsU0FBZ0RqRCxXQUFXLEVBQTNEO0FBQ0EsU0FBSWtELFdBQVdDLEtBQUtDLEtBQUwsQ0FBWUQsS0FBS0UsTUFBTCxLQUFnQixNQUE1QixDQUFmO0FBQ0EsU0FBSUMsUUFBUXZCLGlCQUFpQndCLFVBQTdCO0FBQ0EsU0FBSUMsZUFBZXpCLGlCQUFpQjBCLGlCQUFwQzs7QUFFQTdGLFlBQU84RixRQUFQLEdBQWtCLFVBQVUvQyxFQUFWLEVBQWM7QUFDNUIsYUFBSUEsR0FBR3hCLFNBQUgsQ0FBYXdFLFFBQWIsQ0FBc0IsVUFBdEIsQ0FBSixFQUF1QztBQUNuQztBQUNIOztBQUVEaEUsa0JBQVNnQixHQUFHN0IsWUFBSCxDQUFnQixTQUFoQixDQUFUO0FBQ0F3QixpQ0FBd0IsK0JBQWlCWCxNQUFqQixDQUF4QjtBQUNBc0QsdUJBQWN0QyxHQUFHN0IsWUFBSCxDQUFnQixNQUFoQixDQUFkOztBQUVBLGFBQUk4RSxRQUFRekcsRUFBRW1ELHNCQUFzQlQsRUFBeEIsRUFBNEJnRSxTQUF4QztBQUNBLGFBQUk5RCxRQUFRNUMsRUFBRW1ELHNCQUFzQlAsS0FBeEIsRUFBK0JqQixZQUEvQixDQUE0QyxZQUE1QyxDQUFaO0FBQ0FrQixvQkFBVzdDLEVBQUVtRCxzQkFBc0JOLFFBQXhCLENBQVg7O0FBRUEsYUFBSThELGNBQWM7QUFDZCxzQkFBU0YsUUFBUSxJQUFSLEdBQWVWLFFBQWYsR0FBMEIsR0FEckI7QUFFZCx3QkFBV2IsS0FBS0MsU0FBTCxDQUFleEIsVUFBZixJQUE2QixXQUE3QixHQUEyQ2YsS0FBM0MsR0FBbUQsZUFBbkQsR0FBcUVDLFNBQVN1QixLQUE5RSxHQUFzRixHQUZuRjtBQUdkLHVCQUFVO0FBSEksVUFBbEI7O0FBTUEsY0FBSyxJQUFJakMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJZ0UsTUFBTS9ELE1BQTFCLEVBQWtDRCxHQUFsQyxFQUF1QztBQUNuQyxpQkFBSWlDLFFBQVEsdUJBQVM1QixNQUFULEVBQWlCMkQsTUFBTWhFLENBQU4sQ0FBakIsRUFBMkJpQyxLQUF2QztBQUNBdUMseUJBQVksVUFBVVIsTUFBTWhFLENBQU4sQ0FBdEIsSUFBa0NpQyxLQUFsQztBQUNIOztBQUVELGNBQUssSUFBSWpDLEVBQVQsSUFBY3dCLFVBQWQsRUFBMEI7QUFDdEJnRCx5QkFBWSxXQUFXeEUsRUFBdkIsSUFBNEJ3QixXQUFXeEIsRUFBWCxDQUE1QjtBQUNIOztBQUVEd0UscUJBQVksYUFBWixJQUE2Qi9ELEtBQTdCO0FBQ0ErRCxxQkFBWSxnQkFBWixJQUFnQzlELFNBQVN1QixLQUF6Qzs7QUFFQUMsaUJBQVFDLEdBQVIsQ0FBWSxzQkFBWixFQUFvQ3FDLFdBQXBDO0FBQ0FuRixlQUFNQyxjQUFOO0FBQ0FtRixtQkFBVUQsV0FBVjtBQUNILE1BbENEOztBQW9DQSxjQUFTQyxTQUFULENBQW1CQyxJQUFuQixFQUF5QjtBQUNyQkMsZUFBTSwyQkFBTixFQUFtQztBQUMvQkMsbUJBQU03QixLQUFLQyxTQUFMLENBQWUwQixJQUFmLENBRHlCO0FBRS9CO0FBQ0E7QUFDQUcsc0JBQVM7QUFDTCwrQkFBY0MsY0FBY0MsS0FEdkI7QUFFTCxpQ0FBZ0I7QUFGWCxjQUpzQjtBQVEvQkMscUJBQVE7QUFSdUIsVUFBbkMsRUFVS0MsSUFWTCxDQVVVLFVBQVVDLFFBQVYsRUFBb0I7QUFDdEJoRCxxQkFBUUMsR0FBUixDQUFZK0MsUUFBWjs7QUFFQSxpQkFBSUEsU0FBU0MsTUFBVCxLQUFvQixHQUF4QixFQUE2QjtBQUN6QmpELHlCQUFRQyxHQUFSLENBQVksY0FBYytDLFNBQVNDLE1BQXZCLEdBQWdDLEdBQWhDLEdBQXNDRCxTQUFTRSxVQUEzRDtBQUNBQyx1QkFBTSxjQUFjSCxTQUFTQyxNQUF2QixHQUFnQyxHQUFoQyxHQUFzQ0QsU0FBU0UsVUFBckQ7QUFDQTtBQUNIOztBQUVELGlCQUFJRixTQUFTQyxNQUFULEtBQW9CLEdBQXhCLEVBQTZCO0FBQ3pCRyxnQ0FBZVosSUFBZixFQUFxQlEsUUFBckI7QUFDQWhHLHdCQUFPeUUsV0FBUCxFQUFvQjRCLFFBQXBCLENBQTZCLE1BQTdCO0FBQ0EsMENBQVcxSCxFQUFFLFNBQUYsRUFBYTZCLFNBQWIsR0FBeUIsRUFBcEMsRUFBd0MsR0FBeEM7QUFDQXdDLHlCQUFRQyxHQUFSLENBQVkrQyxTQUFTRSxVQUFULEdBQXNCLHFCQUFsQztBQUNBQyx1QkFBTUgsU0FBU0UsVUFBVCxHQUFzQixxQkFBNUI7QUFDSDtBQUNKLFVBMUJMLEVBMkJLSSxLQTNCTCxDQTJCV0gsS0EzQlg7QUE0Qkg7O0FBRUQsY0FBU0MsY0FBVCxDQUF3QlosSUFBeEIsRUFBOEJRLFFBQTlCLEVBQXdDO0FBQ3BDLGFBQUl4QixVQUFVLEVBQWQ7QUFDQSxhQUFJK0IsZ0JBQWdCNUgsRUFBRW1ELHNCQUFzQlYsT0FBdEIsR0FBZ0MsY0FBbEMsQ0FBcEI7O0FBRUEsY0FBSyxJQUFJTixDQUFULElBQWN3QixVQUFkLEVBQTBCO0FBQ3RCa0Msd0JBQVcsUUFBUTFELENBQVIsR0FBWSxJQUFaLEdBQW1Cd0IsV0FBV3hCLENBQVgsQ0FBbkIsR0FBbUMsTUFBOUM7QUFDSDtBQUNEMEQsb0JBQVcsZUFBZWdCLEtBQUtnQixXQUFwQixHQUFrQyxNQUE3QztBQUNBaEMsb0JBQVcsa0JBQWtCaEQsU0FBU3VCLEtBQTNCLEdBQW1DLE1BQTlDO0FBQ0F5QixvQkFBVyxxQkFBc0JoRCxTQUFTdUIsS0FBVCxHQUFpQnlDLEtBQUtnQixXQUE1QyxHQUEyRCxNQUF0RTs7QUFFQSxjQUFLLElBQUkxRixNQUFJLENBQWIsRUFBZ0JBLE1BQUlnRSxNQUFNL0QsTUFBMUIsRUFBa0NELEtBQWxDLEVBQXVDO0FBQ25DMEQsd0JBQVcsUUFBUVEsYUFBYWxFLEdBQWIsQ0FBUixHQUEwQixJQUExQixHQUFpQzBFLEtBQUssVUFBVVYsTUFBTWhFLEdBQU4sQ0FBZixDQUFqQyxHQUE0RCxNQUF2RTtBQUNIOztBQUVEMEQsb0JBQVcsU0FBU3dCLFNBQVNFLFVBQWxCLEdBQStCLHFCQUExQztBQUNBSyx1QkFBY3JDLFNBQWQsR0FBMEJNLE9BQTFCO0FBQ0g7QUFDSixFOzs7Ozs7Ozs7Ozs7bUJDOUZjLFlBQU07QUFDakJ4QixhQUFRQyxHQUFSLENBQVksNkJBQVosRUFBMkNqRCxPQUFPVixFQUFQLENBQVVtSCxTQUFWLENBQW9CQyxXQUFwQixDQUFnQ0MsT0FBM0U7QUFDQTNHLFlBQU8sTUFBUCxFQUFleUcsU0FBZixDQUF5QjtBQUNyQkcsZ0JBQU87QUFDUDtBQUZxQixNQUF6QjtBQUlILEU7Ozs7Ozs7Ozs7OztBQ05EOzs7Ozs7bUJBRWUsWUFBTTtBQUNqQixTQUFJQyxVQUFVO0FBQ1ZDLGVBQU0sY0FBVUMsWUFBVixFQUF3QkMsR0FBeEIsRUFBNkJDLE9BQTdCLEVBQXNDO0FBQ3hDLGlCQUFJQyxrQkFBa0JILGFBQWFJLFdBQWIsRUFBdEI7QUFDQSxpQkFBSSxDQUFDRixRQUFRRyxRQUFSLENBQWlCLFdBQWpCLENBQUwsRUFBb0M7QUFDaENMLDhCQUFhTSxHQUFiLENBQWlCLFFBQWpCLEVBQTJCSCxlQUEzQjtBQUNBRCx5QkFBUUssUUFBUixDQUFpQixXQUFqQjs7QUFFQU4scUJBQUlPLFNBQUosQ0FBYztBQUNWQywyQkFBTSxjQUFVckgsS0FBVixFQUFpQnNILEVBQWpCLEVBQXFCO0FBQ3ZCQSw0QkFBR0MsUUFBSCxDQUFZQyxJQUFaLEdBQW1CaEQsS0FBS2lELEdBQUwsQ0FBUyxHQUFULEVBQWNILEdBQUdDLFFBQUgsQ0FBWUMsSUFBMUIsQ0FBbkI7QUFDQUYsNEJBQUdDLFFBQUgsQ0FBWUcsR0FBWixHQUFrQmxELEtBQUtpRCxHQUFMLENBQVMsR0FBVCxFQUFjSCxHQUFHQyxRQUFILENBQVlHLEdBQTFCLENBQWxCO0FBQ0g7QUFKUyxrQkFBZDtBQU1ILGNBVkQsTUFVTztBQUNIZCw4QkFBYU0sR0FBYixDQUFpQixRQUFqQixFQUEyQixNQUEzQjtBQUNBSix5QkFBUWEsV0FBUixDQUFvQixXQUFwQjtBQUNIO0FBQ0osVUFqQlM7QUFrQlZDLGlCQUFRLGlCQUFVQyxPQUFWLEVBQW1CakIsWUFBbkIsRUFBaUNFLE9BQWpDLEVBQTBDO0FBQzlDLGlCQUFJZ0IsTUFBTUQsUUFBUUUsSUFBUixDQUFhLE1BQWIsQ0FBVjtBQUFBLGlCQUNJQyxTQUFTSCxRQUFRSSxRQUFSLEVBRGI7QUFBQSxpQkFFSXBCLE1BQU1nQixRQUFRSyxNQUFSLEdBQWlCQyxJQUFqQixHQUF3QkMsUUFBeEIsRUFGVjs7QUFJQVAscUJBQVFWLFFBQVIsQ0FBaUIsV0FBakI7O0FBRUFhLG9CQUFPSyxJQUFQLENBQVksWUFBWTtBQUNwQixxQkFBSSxzQkFBRSxJQUFGLEVBQVFwQixRQUFSLENBQWlCLFdBQWpCLENBQUosRUFBbUM7QUFDL0IsMkNBQUUsSUFBRixFQUFRVSxXQUFSLENBQW9CLFdBQXBCO0FBQ0g7QUFDSixjQUpEOztBQU1BLGlCQUFJYixRQUFRRyxRQUFSLENBQWlCLFdBQWpCLENBQUosRUFBbUM7QUFDL0JILHlCQUFRYSxXQUFSLENBQW9CLFdBQXBCO0FBQ0FmLDhCQUFhTSxHQUFiLENBQWlCLFFBQWpCLEVBQTJCLE1BQTNCO0FBQ0g7O0FBRUQ7QUFDQUwsaUJBQUlrQixJQUFKLENBQVMsS0FBVCxFQUFnQkQsR0FBaEI7QUFDSDtBQXRDUyxNQUFkOztBQXlDQSxTQUFJaEIsVUFBVSxzQkFBRSxVQUFGLENBQWQ7QUFDQUEsYUFBUTlILEVBQVIsQ0FBVyxPQUFYLEVBQW9CLEdBQXBCLEVBQXlCLFVBQVVnQixLQUFWLEVBQWlCO0FBQ3RDLGFBQUk2SCxVQUFVLHNCQUFFLElBQUYsQ0FBZDtBQUNBLGFBQUlTLGNBQWNULFFBQVF4QyxJQUFSLENBQWEsU0FBYixDQUFsQjtBQUNBLGFBQUlrRCxZQUFZdkksTUFBTXdJLGNBQU4sQ0FBcUJ0SSxFQUFyQztBQUNBNEcsbUJBQVUsc0JBQUUsTUFBTXlCLFNBQVIsQ0FBVjs7QUFFQSxhQUFJRCxnQkFBZ0IsTUFBcEIsRUFBNEI7QUFDeEIsaUJBQUkxQixlQUFlaUIsUUFBUUssTUFBUixFQUFuQjtBQUFBLGlCQUNJckIsTUFBTWdCLFFBQVFJLFFBQVIsRUFEVjtBQUVBdkIscUJBQVFDLElBQVIsQ0FBYUMsWUFBYixFQUEyQkMsR0FBM0IsRUFBZ0NDLE9BQWhDO0FBQ0gsVUFKRCxNQUlPLElBQUl3QixnQkFBZ0IsT0FBcEIsRUFBNkI7QUFDaEMsaUJBQUkxQixnQkFBZWlCLFFBQVFLLE1BQVIsR0FBaUJELFFBQWpCLEVBQW5CO0FBQ0F2QixxQkFBUWtCLE1BQVIsQ0FBZUMsT0FBZixFQUF3QmpCLGFBQXhCLEVBQXNDRSxPQUF0QztBQUNILFVBSE0sTUFHQTtBQUNIO0FBQ0g7QUFDRDlHLGVBQU1DLGNBQU47QUFDSCxNQWpCRDtBQWtCSCxFOzs7Ozs7QUMvREQseUIiLCJmaWxlIjoiY29tbW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMTg4ZDQ3OTg4NTFiYzJmMTgxMWQiLCIvLyBpbXBvcnQgJCBmcm9tIFwianF1ZXJ5XCI7XG5pbXBvcnQgeyQsICQkfSBmcm9tICcuL21vZHVsZXMvbWV0aG9kcyc7XG5pbXBvcnQgbWFpbiBmcm9tIFwiLi9tb2R1bGVzL21haW5cIjtcbmltcG9ydCB0b2dnbGVDaG9vc2VTZWN0aW9ucyBmcm9tIFwiLi9tb2R1bGVzL3RvZ2dsZUNob29zZVNlY3Rpb25zXCI7XG5pbXBvcnQgb25DaGFuZ2VTZWxlY3QgZnJvbSBcIi4vbW9kdWxlcy9vbkNoYW5nZVNlbGVjdFwiO1xuaW1wb3J0IGNoZWNrb3V0QnRuIGZyb20gXCIuL21vZHVsZXMvY2hlY2tvdXRCdG5cIjtcbmltcG9ydCBhZGRPcmRlciBmcm9tIFwiLi9tb2R1bGVzL2FkZE9yZGVyXCI7XG5pbXBvcnQgdmFsaWRhdGlvbiBmcm9tIFwiLi9tb2R1bGVzL3ZhbGlkYXRpb25cIjtcbmltcG9ydCBnYWxsZXJ5IGZyb20gXCIuL21vZHVsZXMvZ2FsbGVyeVwiO1xuXG5tYWluKCQsICQkKTtcbnRvZ2dsZUNob29zZVNlY3Rpb25zKCQsICQkKTtcbm9uQ2hhbmdlU2VsZWN0KCQsICQkKTtcbmNoZWNrb3V0QnRuKCQpO1xuYWRkT3JkZXIoJCk7XG52YWxpZGF0aW9uKCQpO1xuZ2FsbGVyeSgpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9zcmMvamF2YXNjcmlwdHMvY29tbW9uLmpzIiwiY29uc3QgJCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IuYmluZChkb2N1bWVudCk7XG5jb25zdCAkJCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwuYmluZChkb2N1bWVudCk7XG5cbk5vZGUucHJvdG90eXBlLm9uID0gd2luZG93Lm9uID0gZnVuY3Rpb24gKG5hbWUsIGZuKSB7XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKG5hbWUsIGZuKTtcbn07XG5cbk5vZGVMaXN0LnByb3RvdHlwZS5fX3Byb3RvX18gPSBBcnJheS5wcm90b3R5cGU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbk5vZGVMaXN0LnByb3RvdHlwZS5fX3Byb3RvX18gPSBEb2N1bWVudC5wcm90b3R5cGU7XG4vL05vZGVMaXN0LnByb3RvdHlwZS5fX3Byb3RvX18gPSBqUXVlcnkucHJvdG90eXBlLmFuaW1hdGUoKTtcblxuTm9kZUxpc3QucHJvdG90eXBlLm9uID0gTm9kZUxpc3QucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbiAobmFtZSwgZm4pIHtcbiAgICB0aGlzLmZvckVhY2goKGVsZW0pID0+IHtcbiAgICAgICAgZWxlbS5vbihuYW1lLCBmbik7XG4gICAgfSk7XG59O1xuXG5leHBvcnQgeyQsICQkfTtcblxuZXhwb3J0IGZ1bmN0aW9uIHNjcm9sbEVsZW0ocHJvcGVydHksIGR1cmF0aW9uKSB7XG4gICAgalF1ZXJ5KCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XG4gICAgICAgIHNjcm9sbFRvcDogcHJvcGVydHlcbiAgICB9LCBkdXJhdGlvbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsYXp5U2Nyb2xsKCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IGlkID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcbiAgICBsZXQgb2Zmc2V0ID0gJChpZCkub2Zmc2V0VG9wO1xuICAgIC8vZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2h0bWwnKVswXS5hbmltYXRlKHtcbiAgICBpZiAoaWQgPT09IFwiI2Nob29zZVwiKSB7XG4gICAgICAgIG9mZnNldCAtPSA1MDtcbiAgICB9XG4gICAgc2Nyb2xsRWxlbShvZmZzZXQsIDcwMCk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuYXZiYXJUb0RlZmF1bHQoKSB7XG4gICAgJCgnLm5hdmJhci1kZWZhdWx0Jykuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3RyYW5zcGFyZW50JztcbiAgICAkKCcubmF2YmFyLWJyYW5kIGltZycpLmNsYXNzTGlzdC5yZW1vdmUoJ2ltZ19yZXNwb25zaXZlJyk7XG4gICAgJCgnLm5hdmJhci1maXhlZC10b3AnKS5jbGFzc0xpc3QucmVtb3ZlKCd0b3AtbmF2LWNvbGxhcHNlJyk7XG4gICAgbGV0IG1lbnVJdGVtID0gJCQoJy5uYXZiYXItbmF2IGEnKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1lbnVJdGVtLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIG1lbnVJdGVtW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ3doaXRlJyk7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbmF2YmFyVG9GbG9hdCgpIHtcbiAgICBsZXQgbmF2YmFyID0gJCgnLm5hdmJhci1kZWZhdWx0Jyk7XG4gICAgbmF2YmFyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZ2JhKDQ4LCA0OCwgNDgsIDAuNSknO1xuICAgIG5hdmJhci5jbGFzc0xpc3QuYWRkKCd0b3AtbmF2LWNvbGxhcHNlJyk7XG4gICAgJCgnLm5hdmJhci1icmFuZCBpbWcnKS5jbGFzc0xpc3QuYWRkKCdpbWdfcmVzcG9uc2l2ZScpO1xuICAgIGxldCBtZW51SXRlbSA9ICQkKCcubmF2YmFyLW5hdiBhJyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtZW51SXRlbS5sZW5ndGg7IGkrKykge1xuICAgICAgICBtZW51SXRlbVtpXS5jbGFzc0xpc3QuYWRkKCd3aGl0ZScpO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldE5hdlN0eWxlKCkge1xuICAgIG5hdmJhclRvRmxvYXQoKTtcbiAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0IDwgNTApIHtcbiAgICAgICAgbmF2YmFyVG9EZWZhdWx0KCk7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0T3BlbmVkU2VjdGlvbihkYXRhSUQpIHtcbiAgICBsZXQgc2VjdGlvbiA9ICcjc2VjdGlvbi0nICsgZGF0YUlEO1xuICAgIHJldHVybiB7XG4gICAgICAgIHNlY3Rpb246IHNlY3Rpb24sXG4gICAgICAgIGgzOiBzZWN0aW9uICsgJyBoMycsXG4gICAgICAgIGZvcm06IHNlY3Rpb24gKyAnIGZvcm0nLFxuICAgICAgICBwcmljZTogc2VjdGlvbiArICcgLnByaWNlJyxcbiAgICAgICAgcXVhbnRpdHk6IHNlY3Rpb24gKyAnIC5xdWFudGl0eScsXG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0SW5wdXQoZGF0YUlELCBuYW1lKSB7XG4gICAgcmV0dXJuICQoZ2V0T3BlbmVkU2VjdGlvbihkYXRhSUQpLmZvcm0gKyAnIGlucHV0W25hbWU9XCInICsgbmFtZSArICdcIl0nKTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvc3JjL2phdmFzY3JpcHRzL21vZHVsZXMvbWV0aG9kcy5qcyIsImltcG9ydCB7c2Nyb2xsRWxlbSwgc2V0TmF2U3R5bGUsIG5hdmJhclRvRmxvYXQsIGxhenlTY3JvbGx9IGZyb20gJy4vbWV0aG9kcyc7XG5cbmV4cG9ydCBkZWZhdWx0ICgkLCAkJCkgPT4ge1xuICAgIHdpbmRvdy5vbignbG9hZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnLmxvYWRlcl9pbm5lcicpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgJCgnLmxvYWRlcicpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9KTtcblxuICAgIHdpbmRvdy5vbignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy9OYXZiYXIgc3R5bGUgc3dpdGNoZXJcbiAgICAgICAgc2V0TmF2U3R5bGUoKTtcbiAgICAgICAgd2luZG93Lm9uKCdzY3JvbGwnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzZXROYXZTdHlsZSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvL0ZPUiBNT0JJTEVcbiAgICAgICAgaWYgKHdpbmRvdy5vdXRlcldpZHRoIDwgNzY4KSB7XG4gICAgICAgICAgICAvL1NBTkRXSUNIIEJVVFRPTlxuICAgICAgICAgICAgJCgnLm5hdmJhci10b2dnbGUnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgbmF2YmFyVG9GbG9hdCgpO1xuICAgICAgICAgICAgICAgICQoJy5zYW5kd2ljaCcpLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vSElERSBNRU5VIENMSUNLSU5HIExJXG4gICAgICAgICAgICAkJCgnLm5hdmJhci1jb2xsYXBzZSB1bCBsaSBhJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICQoJy5uYXZiYXItdG9nZ2xlJykuY2xpY2soKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9MQVpZIEFOSU1BVElORyBGT1IgQlVUVE9OUyBBTkQgTUVOVSBJVEVNU1xuICAgICAgICAkJCgnLnNjcm9sbF9idG4nKS5vbignY2xpY2snLCBsYXp5U2Nyb2xsKTtcbiAgICAgICAgJCQoJy5uYXYgYScpLm9uKCdjbGljaycsIGxhenlTY3JvbGwpO1xuXG4gICAgICAgIC8vQ0xPU0UgQlVUVE9OIFhcbiAgICAgICAgJCgnLmNsb3NlLWJ0bicpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGxldCBzZWN0aW9ucyA9ICQkKCcuY29sbGFwc2Utc2VjdGlvbicpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHNlY3Rpb25zW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3dpbmcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY2xhc3NMaXN0LnJlbW92ZSgnc2hvd2luZycpO1xuICAgICAgICB9KTtcblxuICAgICAgICBqUXVlcnkoJ1tkYXRhLXNsaWRlPVwicHJldlwiXScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHNjcm9sbEVsZW0oJChcIiNjaG9vc2VcIikub2Zmc2V0VG9wIC0gNTAsIDEwMCk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvc3JjL2phdmFzY3JpcHRzL21vZHVsZXMvbWFpbi5qcyIsImltcG9ydCB7Z2V0T3BlbmVkU2VjdGlvbn0gZnJvbSBcIi4vbWV0aG9kc1wiO1xuXG5leHBvcnQgZGVmYXVsdCAoJCwgJCQpID0+IHtcblxuICAgIGxldCBkYXRhSUQsIG9wZW5lZFNlY3Rpb25TZWxlY3RvciA9IFwiXCI7XG4gICAgbGV0IHNlY3Rpb24gPSB7fTtcbiAgICBsZXQgY2xvc2VCdG4gPSAkKCcuY2xvc2UtYnRuJyk7XG4gICAgbGV0IGNvbGxhcHNlU2VjdGlvbnMgPSAkJCgnLmNvbGxhcHNlLXNlY3Rpb24nKTtcbiAgICBsZXQgc2hvd2luZ1NlY3Rpb25zID0gJCQoJy5jb2xsYXBzZS1zZWN0aW9uLnNob3dpbmcnKS5sZW5ndGg7XG5cbiAgICB3aW5kb3cudG9nZ2xlQ2hvb3NlU2VjdGlvbnMgPSBmdW5jdGlvbiAoZWwpIHtcblxuICAgICAgICBpZiAoc2hvd2luZ1NlY3Rpb25zKSB7XG4gICAgICAgICAgICBjbG9zZUJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdzaG93aW5nJyk7XG4gICAgICAgIH1cblxuICAgICAgICBjb2xsYXBzZU9wZW5lZFNlY3Rpb25zKGVsKTtcblxuICAgICAgICBzaG93VGFyZ2V0U2VjdGlvbigpO1xuXG4gICAgICAgIGlmIChzaG93aW5nU2VjdGlvbnMpIHtcbiAgICAgICAgICAgIGNsb3NlQnRuLmNsYXNzTGlzdC5hZGQoJ3Nob3dpbmcnKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBmdW5jdGlvbiBjb2xsYXBzZU9wZW5lZFNlY3Rpb25zKGVsKSB7XG4gICAgICAgIGRhdGFJRCA9IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xuICAgICAgICBvcGVuZWRTZWN0aW9uU2VsZWN0b3IgPSBnZXRPcGVuZWRTZWN0aW9uKGRhdGFJRCk7XG4gICAgICAgIHNlY3Rpb24gPSAkKG9wZW5lZFNlY3Rpb25TZWxlY3Rvci5zZWN0aW9uKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2xsYXBzZVNlY3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoIShjb2xsYXBzZVNlY3Rpb25zW2ldLmlkID09PSBzZWN0aW9uLmlkKSkge1xuICAgICAgICAgICAgICAgIGNvbGxhcHNlU2VjdGlvbnNbaV0uY2xhc3NMaXN0LnJlbW92ZSgnc2hvd2luZycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2hvd1RhcmdldFNlY3Rpb24oKSB7XG4gICAgICAgIHNlY3Rpb24uY2xhc3NMaXN0LnRvZ2dsZSgnc2hvd2luZycpO1xuICAgICAgICBzaG93aW5nU2VjdGlvbnMgPSAkJCgnLmNvbGxhcHNlLXNlY3Rpb24uc2hvd2luZycpLmxlbmd0aDtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL3NyYy9qYXZhc2NyaXB0cy9tb2R1bGVzL3RvZ2dsZUNob29zZVNlY3Rpb25zLmpzIiwiaW1wb3J0IHtnZXRPcGVuZWRTZWN0aW9ufSBmcm9tIFwiLi9tZXRob2RzXCI7XG5cbmV4cG9ydCBkZWZhdWx0ICgkLCAkJCkgPT4ge1xuICAgIGxldCB1c2VyQ2hvaWNlID0gd2luZG93LnVzZXJDaG9pY2UgPSB7fTtcbiAgICBsZXQgZGF0YUlELCBvcGVuZWRTZWN0aW9uU2VsZWN0b3IgPSBcIlwiO1xuICAgIGxldCBwcmludFByaWNlLCBwcmludE1lc3NhZ2UsIGNoZWNrb3V0QnV0dG9uID0ge307XG5cbiAgICB3aW5kb3cub25DaGFuZ2VTZWxlY3QgPSBmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgZGF0YUlEID0gZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XG4gICAgICAgIG9wZW5lZFNlY3Rpb25TZWxlY3RvciA9IGdldE9wZW5lZFNlY3Rpb24oZGF0YUlEKTtcbiAgICAgICAgcHJpbnRQcmljZSA9ICQob3BlbmVkU2VjdGlvblNlbGVjdG9yLnByaWNlKTtcbiAgICAgICAgcHJpbnRNZXNzYWdlID0gJChvcGVuZWRTZWN0aW9uU2VsZWN0b3Iuc2VjdGlvbiArICcgLmVycm9yLW1lc3NhZ2UnKTtcbiAgICAgICAgY2hlY2tvdXRCdXR0b24gPSAkKG9wZW5lZFNlY3Rpb25TZWxlY3Rvci5zZWN0aW9uICsgXCIgYnV0dG9uW2RhdGEtc2xpZGU9J25leHQnXVwiKTtcblxuICAgICAgICBsZXQgYWxsU2VsZWN0cyA9ICQkKG9wZW5lZFNlY3Rpb25TZWxlY3Rvci5zZWN0aW9uICsgJyBzZWxlY3QnKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbFNlbGVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBpdGVtU2VsZWN0ID0gYWxsU2VsZWN0c1tpXTtcbiAgICAgICAgICAgIHVzZXJDaG9pY2VbaXRlbVNlbGVjdC5uYW1lXSA9IGl0ZW1TZWxlY3Qub3B0aW9uc1tpdGVtU2VsZWN0LnNlbGVjdGVkSW5kZXhdLnZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKCdUaGlzIGlzIHVzZXIgY2hvaWNlOiAnLCB1c2VyQ2hvaWNlKTtcblxuICAgICAgICBjb21wYXJlQXZhaWxhYmlsaXR5KHVzZXJDaG9pY2UsIGRhdGFJRCk7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGNvbXBhcmVBdmFpbGFiaWxpdHkodXNlckNob2ljZSwgZGF0YUlEKSB7XG4gICAgICAgIGZvciAobGV0IHBhcmFtZXRlciBpbiB1c2VyQ2hvaWNlKSB7XG4gICAgICAgICAgICBpZiAodXNlckNob2ljZS5oYXNPd25Qcm9wZXJ0eShwYXJhbWV0ZXIpICYmIHVzZXJDaG9pY2VbcGFyYW1ldGVyXSA9PT0gXCJcIikge1xuICAgICAgICAgICAgICAgIHJldHVybiBtaXNzU2VsZWN0KHBhcmFtZXRlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgdmFyaWF0aW9ucyA9IHZhcmlhdGlvbnNPYmplY3QuZGF0YUJ5SWRbZGF0YUlEXTtcblxuICAgICAgICBjb25zb2xlLmxvZygnVGhpcyBpcyBWYXJpYXRpb25zOiAnLCB2YXJpYXRpb25zKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhcmlhdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCB2YXJpYXRpb24gPSB2YXJpYXRpb25zW2ldO1xuICAgICAgICAgICAgbGV0IHZhcmlhdGlvbnNXaXRob3V0UHJpY2UgPSB7fTtcblxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih2YXJpYXRpb25zV2l0aG91dFByaWNlLCB2YXJpYXRpb24pO1xuXG4gICAgICAgICAgICBkZWxldGUgdmFyaWF0aW9uc1dpdGhvdXRQcmljZS5wcmljZTtcblxuICAgICAgICAgICAgaWYgKEpTT04uc3RyaW5naWZ5KHVzZXJDaG9pY2UpID09PSBKU09OLnN0cmluZ2lmeSh2YXJpYXRpb25zV2l0aG91dFByaWNlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBtYXRjaFZhcmlhdGlvbih2YXJpYXRpb24pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtaXNzVmFyaWF0aW9uKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtaXNzU2VsZWN0KHBhcmFtZXRlcikge1xuICAgICAgICBwcmludFByaWNlLnNldEF0dHJpYnV0ZSgnZGF0YS1wcmljZScsICcnKTtcbiAgICAgICAgcHJpbnRQcmljZS5pbm5lckhUTUwgPSBcIiZuYnNwO1wiO1xuICAgICAgICBwcmludE1lc3NhZ2UuaW5uZXJIVE1MID0gJ1NlbGVjdCB0aGUgJyArIHBhcmFtZXRlcjtcbiAgICAgICAgY2hlY2tvdXRCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICBjb25zb2xlLmxvZygnU2VsZWN0IHRoZSAnICsgcGFyYW1ldGVyKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtaXNzVmFyaWF0aW9uKCkge1xuICAgICAgICBwcmludFByaWNlLnNldEF0dHJpYnV0ZSgnZGF0YS1wcmljZScsICcnKTtcbiAgICAgICAgcHJpbnRQcmljZS5pbm5lckhUTUwgPSAnPGgzPi0gLTwvaDM+JztcbiAgICAgICAgcHJpbnRNZXNzYWdlLmlubmVySFRNTCA9ICdWYXJpYXRpb24gaXMgbm90IGZvdW5kJztcbiAgICAgICAgY2hlY2tvdXRCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICBjb25zb2xlLmxvZygnVmFyaWF0aW9uIGlzIG5vdCBmb3VuZCcpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1hdGNoVmFyaWF0aW9uKHZhcmlhdGlvbikge1xuICAgICAgICBwcmludFByaWNlLnNldEF0dHJpYnV0ZSgnZGF0YS1wcmljZScsIHZhcmlhdGlvbi5wcmljZSk7XG4gICAgICAgIHByaW50UHJpY2UuaW5uZXJIVE1MID0gJzxoMyBjbGFzcz1cInJlZC1wcmljZVwiPicgKyB2YXJpYXRpb24ucHJpY2UgKyAnJDwvaDM+JztcbiAgICAgICAgcHJpbnRNZXNzYWdlLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgIGNoZWNrb3V0QnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIGNvbnNvbGUubG9nKHZhcmlhdGlvbi5wcmljZSk7XG4gICAgfVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvc3JjL2phdmFzY3JpcHRzL21vZHVsZXMvb25DaGFuZ2VTZWxlY3QuanMiLCJpbXBvcnQge3Njcm9sbEVsZW0sIGdldE9wZW5lZFNlY3Rpb259IGZyb20gJy4vbWV0aG9kcyc7XG5cbmV4cG9ydCBkZWZhdWx0ICgkKSA9PiB7XG4gICAgbGV0IHVzZXJDaG9pY2UgPSB3aW5kb3cudXNlckNob2ljZTtcbiAgICBsZXQgZGF0YUlEID0gXCJcIjtcbiAgICBsZXQgcXVhbnRpdHksIHVzZXJDaG9pY2VUZXh0LCBjaG9pY2VQcmljZSwgb3BlbmVkU2VjdGlvblNlbGVjdG9yID0ge307XG5cbiAgICB3aW5kb3cuY2hlY2tvdXRCdG4gPSBmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgc2Nyb2xsRWxlbSgkKFwiI2Nob29zZVwiKS5vZmZzZXRUb3AgLSA1MCwgMTAwKTtcbiAgICAgICAgZGF0YUlEID0gZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XG4gICAgICAgIG9wZW5lZFNlY3Rpb25TZWxlY3RvciA9IGdldE9wZW5lZFNlY3Rpb24oZGF0YUlEKTtcbiAgICAgICAgcXVhbnRpdHkgPSAkKG9wZW5lZFNlY3Rpb25TZWxlY3Rvci5xdWFudGl0eSk7XG4gICAgICAgIHVzZXJDaG9pY2VUZXh0ID0gJChvcGVuZWRTZWN0aW9uU2VsZWN0b3Iuc2VjdGlvbiArICcgLnVzZXItY2hvaWNlJyk7XG4gICAgICAgIGNob2ljZVByaWNlID0gJChvcGVuZWRTZWN0aW9uU2VsZWN0b3IucHJpY2UpLmdldEF0dHJpYnV0ZSgnZGF0YS1wcmljZScpO1xuXG4gICAgICAgIHByaW50VXNlckNob2ljZSgpXG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHByaW50VXNlckNob2ljZSgpIHtcbiAgICAgICAgbGV0IGNvbnRlbnQgPSAnJztcbiAgICAgICAgZm9yIChsZXQgaSBpbiB1c2VyQ2hvaWNlKSB7XG4gICAgICAgICAgICBjb250ZW50ICs9IFwiPHA+XCIgKyBpICsgXCI6IFwiICsgdXNlckNob2ljZVtpXSArIFwiPC9wPlwiO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRlbnQgKz0gXCI8cD5QcmljZTogXCIgKyBjaG9pY2VQcmljZTtcbiAgICAgICAgY29udGVudCArPSBcIjxwPlF1YW50aXR5OiBcIiArIHF1YW50aXR5LnZhbHVlO1xuICAgICAgICB1c2VyQ2hvaWNlVGV4dC5pbm5lckhUTUwgPSBjb250ZW50O1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvc3JjL2phdmFzY3JpcHRzL21vZHVsZXMvY2hlY2tvdXRCdG4uanMiLCJpbXBvcnQge3Njcm9sbEVsZW0sIGdldE9wZW5lZFNlY3Rpb24sIGdldElucHV0fSBmcm9tICcuL21ldGhvZHMnO1xuXG5leHBvcnQgZGVmYXVsdCAoJCkgPT4ge1xuICAgIGxldCB1c2VyQ2hvaWNlID0gd2luZG93LnVzZXJDaG9pY2U7XG4gICAgbGV0IGRhdGFJRCwgb3BlbmVkU2VjdGlvblNlbGVjdG9yLCBlbGVtZW50SHJlZiwgcXVhbnRpdHkgPSBcIlwiO1xuICAgIGxldCByYW5kb21JZCA9IE1hdGgudHJ1bmMoKE1hdGgucmFuZG9tKCkgKiAxMDAwMDApKTtcbiAgICBsZXQgbmFtZXMgPSB2YXJpYXRpb25zT2JqZWN0LmlucHV0TmFtZXM7XG4gICAgbGV0IHBsYWNlaG9sZGVycyA9IHZhcmlhdGlvbnNPYmplY3QuaW5wdXRQbGFjZWhvbGRlcnM7XG5cbiAgICB3aW5kb3cuYWRkT3JkZXIgPSBmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgaWYgKGVsLmNsYXNzTGlzdC5jb250YWlucygnZGlzYWJsZWQnKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZGF0YUlEID0gZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XG4gICAgICAgIG9wZW5lZFNlY3Rpb25TZWxlY3RvciA9IGdldE9wZW5lZFNlY3Rpb24oZGF0YUlEKTtcbiAgICAgICAgZWxlbWVudEhyZWYgPSBlbC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcblxuICAgICAgICBsZXQgdGl0bGUgPSAkKG9wZW5lZFNlY3Rpb25TZWxlY3Rvci5oMykuaW5uZXJUZXh0O1xuICAgICAgICBsZXQgcHJpY2UgPSAkKG9wZW5lZFNlY3Rpb25TZWxlY3Rvci5wcmljZSkuZ2V0QXR0cmlidXRlKCdkYXRhLXByaWNlJyk7XG4gICAgICAgIHF1YW50aXR5ID0gJChvcGVuZWRTZWN0aW9uU2VsZWN0b3IucXVhbnRpdHkpO1xuXG4gICAgICAgIGxldCBwcm9kdWN0RGF0YSA9IHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogdGl0bGUgKyAnIFsnICsgcmFuZG9tSWQgKyAnXScsXG4gICAgICAgICAgICBcImNvbnRlbnRcIjogSlNPTi5zdHJpbmdpZnkodXNlckNob2ljZSkgKyAne1wicHJpY2VcIjonICsgcHJpY2UgKyAnLCBcInF1YW50aXR5XCI6JyArIHF1YW50aXR5LnZhbHVlICsgJ30nLFxuICAgICAgICAgICAgXCJzdGF0dXNcIjogJ3B1Ymxpc2gnXG4gICAgICAgIH07XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuYW1lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHZhbHVlID0gZ2V0SW5wdXQoZGF0YUlELCBuYW1lc1tpXSkudmFsdWU7XG4gICAgICAgICAgICBwcm9kdWN0RGF0YVsnaW5mb18nICsgbmFtZXNbaV1dID0gdmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpIGluIHVzZXJDaG9pY2UpIHtcbiAgICAgICAgICAgIHByb2R1Y3REYXRhWydwYXJhbV8nICsgaV0gPSB1c2VyQ2hvaWNlW2ldO1xuICAgICAgICB9XG5cbiAgICAgICAgcHJvZHVjdERhdGFbJ3BhcmFtX3ByaWNlJ10gPSBwcmljZTtcbiAgICAgICAgcHJvZHVjdERhdGFbJ3BhcmFtX3F1YW50aXR5J10gPSBxdWFudGl0eS52YWx1ZTtcblxuICAgICAgICBjb25zb2xlLmxvZygnVGhpcyBpcyBvcmRlciBkYXRhOiAnLCBwcm9kdWN0RGF0YSk7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGZldGNoRGF0YShwcm9kdWN0RGF0YSk7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGZldGNoRGF0YShkYXRhKSB7XG4gICAgICAgIGZldGNoKCcvd3AtanNvbi93cC92Mi9zaG9wX29yZGVyJywge1xuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXG4gICAgICAgICAgICAvLyB2YXIgQmFzZTY0PXtfa2V5U3RyOlwiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLz1cIixlbmNvZGU6ZnVuY3Rpb24oZSl7dmFyIHQ9XCJcIjt2YXIgbixyLGkscyxvLHUsYTt2YXIgZj0wO2U9QmFzZTY0Ll91dGY4X2VuY29kZShlKTt3aGlsZShmPGUubGVuZ3RoKXtuPWUuY2hhckNvZGVBdChmKyspO3I9ZS5jaGFyQ29kZUF0KGYrKyk7aT1lLmNoYXJDb2RlQXQoZisrKTtzPW4+PjI7bz0obiYzKTw8NHxyPj40O3U9KHImMTUpPDwyfGk+PjY7YT1pJjYzO2lmKGlzTmFOKHIpKXt1PWE9NjR9ZWxzZSBpZihpc05hTihpKSl7YT02NH10PXQrdGhpcy5fa2V5U3RyLmNoYXJBdChzKSt0aGlzLl9rZXlTdHIuY2hhckF0KG8pK3RoaXMuX2tleVN0ci5jaGFyQXQodSkrdGhpcy5fa2V5U3RyLmNoYXJBdChhKX1yZXR1cm4gdH0sZGVjb2RlOmZ1bmN0aW9uKGUpe3ZhciB0PVwiXCI7dmFyIG4scixpO3ZhciBzLG8sdSxhO3ZhciBmPTA7ZT1lLnJlcGxhY2UoL1teQS1aYS16MC05XFwrXFwvXFw9XS9nLFwiXCIpO3doaWxlKGY8ZS5sZW5ndGgpe3M9dGhpcy5fa2V5U3RyLmluZGV4T2YoZS5jaGFyQXQoZisrKSk7bz10aGlzLl9rZXlTdHIuaW5kZXhPZihlLmNoYXJBdChmKyspKTt1PXRoaXMuX2tleVN0ci5pbmRleE9mKGUuY2hhckF0KGYrKykpO2E9dGhpcy5fa2V5U3RyLmluZGV4T2YoZS5jaGFyQXQoZisrKSk7bj1zPDwyfG8+PjQ7cj0obyYxNSk8PDR8dT4+MjtpPSh1JjMpPDw2fGE7dD10K1N0cmluZy5mcm9tQ2hhckNvZGUobik7aWYodSE9NjQpe3Q9dCtTdHJpbmcuZnJvbUNoYXJDb2RlKHIpfWlmKGEhPTY0KXt0PXQrU3RyaW5nLmZyb21DaGFyQ29kZShpKX19dD1CYXNlNjQuX3V0ZjhfZGVjb2RlKHQpO3JldHVybiB0fSxfdXRmOF9lbmNvZGU6ZnVuY3Rpb24oZSl7ZT1lLnJlcGxhY2UoL1xcclxcbi9nLFwiXFxuXCIpO3ZhciB0PVwiXCI7Zm9yKHZhciBuPTA7bjxlLmxlbmd0aDtuKyspe3ZhciByPWUuY2hhckNvZGVBdChuKTtpZihyPDEyOCl7dCs9U3RyaW5nLmZyb21DaGFyQ29kZShyKX1lbHNlIGlmKHI+MTI3JiZyPDIwNDgpe3QrPVN0cmluZy5mcm9tQ2hhckNvZGUocj4+NnwxOTIpO3QrPVN0cmluZy5mcm9tQ2hhckNvZGUociY2M3wxMjgpfWVsc2V7dCs9U3RyaW5nLmZyb21DaGFyQ29kZShyPj4xMnwyMjQpO3QrPVN0cmluZy5mcm9tQ2hhckNvZGUocj4+NiY2M3wxMjgpO3QrPVN0cmluZy5mcm9tQ2hhckNvZGUociY2M3wxMjgpfX1yZXR1cm4gdH0sX3V0ZjhfZGVjb2RlOmZ1bmN0aW9uKGUpe3ZhciB0PVwiXCI7dmFyIG49MDt2YXIgcj1jMT1jMj0wO3doaWxlKG48ZS5sZW5ndGgpe3I9ZS5jaGFyQ29kZUF0KG4pO2lmKHI8MTI4KXt0Kz1TdHJpbmcuZnJvbUNoYXJDb2RlKHIpO24rK31lbHNlIGlmKHI+MTkxJiZyPDIyNCl7YzI9ZS5jaGFyQ29kZUF0KG4rMSk7dCs9U3RyaW5nLmZyb21DaGFyQ29kZSgociYzMSk8PDZ8YzImNjMpO24rPTJ9ZWxzZXtjMj1lLmNoYXJDb2RlQXQobisxKTtjMz1lLmNoYXJDb2RlQXQobisyKTt0Kz1TdHJpbmcuZnJvbUNoYXJDb2RlKChyJjE1KTw8MTJ8KGMyJjYzKTw8NnxjMyY2Myk7bis9M319cmV0dXJuIHR9fTtcbiAgICAgICAgICAgIC8vY3JlYXRlUG9zdC5zZXRSZXF1ZXN0SGVhZGVyKCAnQXV0aG9yaXphdGlvbicsICdCYXNpYyAnICsgQmFzZTY0LmVuY29kZSggJ3Rlc3Q6MDAwMCcgKSApO1xuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdYLVdQLU5vbmNlJzogd3BBcGlTZXR0aW5ncy5ub25jZSxcbiAgICAgICAgICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCdcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcblxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgIT09IDIwMSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnTm90IDIwMTogJyArIHJlc3BvbnNlLnN0YXR1cyArICcgJyArIHJlc3BvbnNlLnN0YXR1c1RleHQpO1xuICAgICAgICAgICAgICAgICAgICBhbGVydCgnTm90IDIwMTogJyArIHJlc3BvbnNlLnN0YXR1cyArICcgJyArIHJlc3BvbnNlLnN0YXR1c1RleHQpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHByaW50T3JkZXJUZXh0KGRhdGEsIHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgalF1ZXJ5KGVsZW1lbnRIcmVmKS5jYXJvdXNlbCgnbmV4dCcpO1xuICAgICAgICAgICAgICAgICAgICBzY3JvbGxFbGVtKCQoXCIjY2hvb3NlXCIpLm9mZnNldFRvcCAtIDUwLCAxMDApO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5zdGF0dXNUZXh0ICsgJyBzdGF0dXM6IHBvc3QgYWRkZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQocmVzcG9uc2Uuc3RhdHVzVGV4dCArICcgc3RhdHVzOiBwb3N0IGFkZGVkJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChhbGVydCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcHJpbnRPcmRlclRleHQoZGF0YSwgcmVzcG9uc2UpIHtcbiAgICAgICAgbGV0IGNvbnRlbnQgPSAnJztcbiAgICAgICAgbGV0IHVzZXJPcmRlclRleHQgPSAkKG9wZW5lZFNlY3Rpb25TZWxlY3Rvci5zZWN0aW9uICsgJyAudXNlci1vcmRlcicpO1xuXG4gICAgICAgIGZvciAobGV0IGkgaW4gdXNlckNob2ljZSkge1xuICAgICAgICAgICAgY29udGVudCArPSBcIjxwPlwiICsgaSArIFwiOiBcIiArIHVzZXJDaG9pY2VbaV0gKyBcIjwvcD5cIjtcbiAgICAgICAgfVxuICAgICAgICBjb250ZW50ICs9IFwiPHA+UHJpY2U6IFwiICsgZGF0YS5wYXJhbV9wcmljZSArIFwiPC9wPlwiO1xuICAgICAgICBjb250ZW50ICs9IFwiPHA+UXVhbnRpdHk6IFwiICsgcXVhbnRpdHkudmFsdWUgKyBcIjwvcD5cIjtcbiAgICAgICAgY29udGVudCArPSBcIjxwPlRvdGFsIHByaWNlOiBcIiArIChxdWFudGl0eS52YWx1ZSAqIGRhdGEucGFyYW1fcHJpY2UpICsgXCI8L3A+XCI7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuYW1lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29udGVudCArPSBcIjxwPlwiICsgcGxhY2Vob2xkZXJzW2ldICsgXCI6IFwiICsgZGF0YVsnaW5mb18nICsgbmFtZXNbaV1dICsgXCI8L3A+XCI7XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZW50ICs9ICc8YnI+JyArIHJlc3BvbnNlLnN0YXR1c1RleHQgKyAnIHN0YXR1czogcG9zdCBhZGRlZCc7XG4gICAgICAgIHVzZXJPcmRlclRleHQuaW5uZXJIVE1MID0gY29udGVudDtcbiAgICB9XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9zcmMvamF2YXNjcmlwdHMvbW9kdWxlcy9hZGRPcmRlci5qcyIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcImJvb3N0cmFwLXZhbGlkYXRvciB2ZXJzaW9uOlwiLCBqUXVlcnkuZm4udmFsaWRhdG9yLkNvbnN0cnVjdG9yLlZFUlNJT04pO1xuICAgIGpRdWVyeSgnZm9ybScpLnZhbGlkYXRvcih7XG4gICAgICAgIGZvY3VzOiBmYWxzZSxcbiAgICAgICAgLy8gZGVsYXk6IDMwMDBcbiAgICB9KTtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL3NyYy9qYXZhc2NyaXB0cy9tb2R1bGVzL3ZhbGlkYXRpb24uanMiLCJpbXBvcnQgJCBmcm9tIFwianF1ZXJ5XCI7XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgICBsZXQgR2FsbGVyeSA9IHtcbiAgICAgICAgem9vbTogZnVuY3Rpb24gKGltZ0NvbnRhaW5lciwgaW1nLCBnYWxsZXJ5KSB7XG4gICAgICAgICAgICBsZXQgY29udGFpbmVySGVpZ2h0ID0gaW1nQ29udGFpbmVyLm91dGVySGVpZ2h0KCk7XG4gICAgICAgICAgICBpZiAoIWdhbGxlcnkuaGFzQ2xhc3MoJ2lzLXpvb21lZCcpKSB7XG4gICAgICAgICAgICAgICAgaW1nQ29udGFpbmVyLmNzcyhcImhlaWdodFwiLCBjb250YWluZXJIZWlnaHQpO1xuICAgICAgICAgICAgICAgIGdhbGxlcnkuYWRkQ2xhc3MoJ2lzLXpvb21lZCcpO1xuXG4gICAgICAgICAgICAgICAgaW1nLmRyYWdnYWJsZSh7XG4gICAgICAgICAgICAgICAgICAgIGRyYWc6IGZ1bmN0aW9uIChldmVudCwgdWkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVpLnBvc2l0aW9uLmxlZnQgPSBNYXRoLm1pbigxMDAsIHVpLnBvc2l0aW9uLmxlZnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdWkucG9zaXRpb24udG9wID0gTWF0aC5taW4oMTAwLCB1aS5wb3NpdGlvbi50b3ApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGltZ0NvbnRhaW5lci5jc3MoXCJoZWlnaHRcIiwgXCJhdXRvXCIpO1xuICAgICAgICAgICAgICAgIGdhbGxlcnkucmVtb3ZlQ2xhc3MoJ2lzLXpvb21lZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBzd2l0Y2g6IGZ1bmN0aW9uICh0cmlnZ2VyLCBpbWdDb250YWluZXIsIGdhbGxlcnkpIHtcbiAgICAgICAgICAgIGxldCBzcmMgPSB0cmlnZ2VyLmF0dHIoJ2hyZWYnKSxcbiAgICAgICAgICAgICAgICB0aHVtYnMgPSB0cmlnZ2VyLnNpYmxpbmdzKCksXG4gICAgICAgICAgICAgICAgaW1nID0gdHJpZ2dlci5wYXJlbnQoKS5wcmV2KCkuY2hpbGRyZW4oKTtcblxuICAgICAgICAgICAgdHJpZ2dlci5hZGRDbGFzcygnaXMtYWN0aXZlJyk7XG5cbiAgICAgICAgICAgIHRodW1icy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcygnaXMtYWN0aXZlJykpIHtcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChnYWxsZXJ5Lmhhc0NsYXNzKCdpcy16b29tZWQnKSkge1xuICAgICAgICAgICAgICAgIGdhbGxlcnkucmVtb3ZlQ2xhc3MoJ2lzLXpvb21lZCcpO1xuICAgICAgICAgICAgICAgIGltZ0NvbnRhaW5lci5jc3MoXCJoZWlnaHRcIiwgXCJhdXRvXCIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBTd2l0Y2ggaW1hZ2Ugc291cmNlXG4gICAgICAgICAgICBpbWcuYXR0cignc3JjJywgc3JjKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBsZXQgZ2FsbGVyeSA9ICQoJy5nYWxsZXJ5Jyk7XG4gICAgZ2FsbGVyeS5vbignY2xpY2snLCAnYScsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBsZXQgdHJpZ2dlciA9ICQodGhpcyk7XG4gICAgICAgIGxldCB0cmlnZ2VyRGF0YSA9IHRyaWdnZXIuZGF0YShcImdhbGxlcnlcIik7XG4gICAgICAgIGxldCBnYWxsZXJ5SWQgPSBldmVudC5kZWxlZ2F0ZVRhcmdldC5pZDtcbiAgICAgICAgZ2FsbGVyeSA9ICQoJyMnICsgZ2FsbGVyeUlkKTtcblxuICAgICAgICBpZiAodHJpZ2dlckRhdGEgPT09ICd6b29tJykge1xuICAgICAgICAgICAgbGV0IGltZ0NvbnRhaW5lciA9IHRyaWdnZXIucGFyZW50KCksXG4gICAgICAgICAgICAgICAgaW1nID0gdHJpZ2dlci5zaWJsaW5ncygpO1xuICAgICAgICAgICAgR2FsbGVyeS56b29tKGltZ0NvbnRhaW5lciwgaW1nLCBnYWxsZXJ5KTtcbiAgICAgICAgfSBlbHNlIGlmICh0cmlnZ2VyRGF0YSA9PT0gJ3RodW1iJykge1xuICAgICAgICAgICAgbGV0IGltZ0NvbnRhaW5lciA9IHRyaWdnZXIucGFyZW50KCkuc2libGluZ3MoKTtcbiAgICAgICAgICAgIEdhbGxlcnkuc3dpdGNoKHRyaWdnZXIsIGltZ0NvbnRhaW5lciwgZ2FsbGVyeSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9KTtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL3NyYy9qYXZhc2NyaXB0cy9tb2R1bGVzL2dhbGxlcnkuanMiLCJtb2R1bGUuZXhwb3J0cyA9IGpRdWVyeTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImpRdWVyeVwiXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=