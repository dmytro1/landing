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
	window.App = {};
	
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
	
	    App.toggleChooseSections = function (el) {
	
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
	    var userChoice = App.userChoice = {};
	    var dataID = void 0,
	        openedSectionSelector = "";
	    var printPrice = void 0,
	        printMessage = void 0,
	        checkoutButton = {};
	
	    App.onChangeSelect = function (el) {
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
	    var userChoice = App.userChoice;
	    var dataID = "";
	    var quantity = void 0,
	        userChoiceText = void 0,
	        choicePrice = void 0,
	        openedSectionSelector = {};
	
	    App.checkoutBtn = function (el) {
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
	    var userChoice = App.userChoice;
	    var dataID = void 0,
	        openedSectionSelector = void 0,
	        elementHref = void 0,
	        quantity = "";
	    var randomId = Math.trunc(Math.random() * 100000);
	    var names = variationsObject.inputNames;
	    var placeholders = variationsObject.inputPlaceholders;
	
	    App.addOrder = function (el) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOWUyYTQ1Y2VjMjgxMDk5ZTRhYWEiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NyYy9qYXZhc2NyaXB0cy9jb21tb24uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NyYy9qYXZhc2NyaXB0cy9tb2R1bGVzL21ldGhvZHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NyYy9qYXZhc2NyaXB0cy9tb2R1bGVzL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NyYy9qYXZhc2NyaXB0cy9tb2R1bGVzL3RvZ2dsZUNob29zZVNlY3Rpb25zLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zcmMvamF2YXNjcmlwdHMvbW9kdWxlcy9vbkNoYW5nZVNlbGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3JjL2phdmFzY3JpcHRzL21vZHVsZXMvY2hlY2tvdXRCdG4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NyYy9qYXZhc2NyaXB0cy9tb2R1bGVzL2FkZE9yZGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zcmMvamF2YXNjcmlwdHMvbW9kdWxlcy92YWxpZGF0aW9uLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zcmMvamF2YXNjcmlwdHMvbW9kdWxlcy9nYWxsZXJ5LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImpRdWVyeVwiIl0sIm5hbWVzIjpbIndpbmRvdyIsIkFwcCIsInNjcm9sbEVsZW0iLCJsYXp5U2Nyb2xsIiwibmF2YmFyVG9EZWZhdWx0IiwibmF2YmFyVG9GbG9hdCIsInNldE5hdlN0eWxlIiwiZ2V0T3BlbmVkU2VjdGlvbiIsImdldElucHV0IiwiJCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImJpbmQiLCIkJCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJOb2RlIiwicHJvdG90eXBlIiwib24iLCJuYW1lIiwiZm4iLCJhZGRFdmVudExpc3RlbmVyIiwiTm9kZUxpc3QiLCJfX3Byb3RvX18iLCJBcnJheSIsIkRvY3VtZW50IiwiZm9yRWFjaCIsImVsZW0iLCJwcm9wZXJ0eSIsImR1cmF0aW9uIiwialF1ZXJ5IiwiYW5pbWF0ZSIsInNjcm9sbFRvcCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJpZCIsImdldEF0dHJpYnV0ZSIsIm9mZnNldCIsIm9mZnNldFRvcCIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwibWVudUl0ZW0iLCJpIiwibGVuZ3RoIiwibmF2YmFyIiwiYWRkIiwicGFnZVlPZmZzZXQiLCJkYXRhSUQiLCJzZWN0aW9uIiwiaDMiLCJmb3JtIiwicHJpY2UiLCJxdWFudGl0eSIsImRpc3BsYXkiLCJvdXRlcldpZHRoIiwidG9nZ2xlIiwiY2xpY2siLCJzZWN0aW9ucyIsIm9wZW5lZFNlY3Rpb25TZWxlY3RvciIsImNsb3NlQnRuIiwiY29sbGFwc2VTZWN0aW9ucyIsInNob3dpbmdTZWN0aW9ucyIsInRvZ2dsZUNob29zZVNlY3Rpb25zIiwiZWwiLCJjb2xsYXBzZU9wZW5lZFNlY3Rpb25zIiwic2hvd1RhcmdldFNlY3Rpb24iLCJ1c2VyQ2hvaWNlIiwicHJpbnRQcmljZSIsInByaW50TWVzc2FnZSIsImNoZWNrb3V0QnV0dG9uIiwib25DaGFuZ2VTZWxlY3QiLCJhbGxTZWxlY3RzIiwiaXRlbVNlbGVjdCIsIm9wdGlvbnMiLCJzZWxlY3RlZEluZGV4IiwidmFsdWUiLCJjb25zb2xlIiwibG9nIiwiY29tcGFyZUF2YWlsYWJpbGl0eSIsInBhcmFtZXRlciIsImhhc093blByb3BlcnR5IiwibWlzc1NlbGVjdCIsInZhcmlhdGlvbnMiLCJ2YXJpYXRpb25zT2JqZWN0IiwiZGF0YUJ5SWQiLCJ2YXJpYXRpb24iLCJ2YXJpYXRpb25zV2l0aG91dFByaWNlIiwiT2JqZWN0IiwiYXNzaWduIiwiSlNPTiIsInN0cmluZ2lmeSIsIm1hdGNoVmFyaWF0aW9uIiwibWlzc1ZhcmlhdGlvbiIsInNldEF0dHJpYnV0ZSIsImlubmVySFRNTCIsImRpc2FibGVkIiwidXNlckNob2ljZVRleHQiLCJjaG9pY2VQcmljZSIsImNoZWNrb3V0QnRuIiwicHJpbnRVc2VyQ2hvaWNlIiwiY29udGVudCIsImVsZW1lbnRIcmVmIiwicmFuZG9tSWQiLCJNYXRoIiwidHJ1bmMiLCJyYW5kb20iLCJuYW1lcyIsImlucHV0TmFtZXMiLCJwbGFjZWhvbGRlcnMiLCJpbnB1dFBsYWNlaG9sZGVycyIsImFkZE9yZGVyIiwiY29udGFpbnMiLCJ0aXRsZSIsImlubmVyVGV4dCIsInByb2R1Y3REYXRhIiwiZmV0Y2hEYXRhIiwiZGF0YSIsImZldGNoIiwiYm9keSIsImhlYWRlcnMiLCJ3cEFwaVNldHRpbmdzIiwibm9uY2UiLCJtZXRob2QiLCJ0aGVuIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJzdGF0dXNUZXh0IiwiYWxlcnQiLCJwcmludE9yZGVyVGV4dCIsImNhcm91c2VsIiwiY2F0Y2giLCJ1c2VyT3JkZXJUZXh0IiwicGFyYW1fcHJpY2UiLCJ2YWxpZGF0b3IiLCJDb25zdHJ1Y3RvciIsIlZFUlNJT04iLCJmb2N1cyIsIkdhbGxlcnkiLCJ6b29tIiwiaW1nQ29udGFpbmVyIiwiaW1nIiwiZ2FsbGVyeSIsImNvbnRhaW5lckhlaWdodCIsIm91dGVySGVpZ2h0IiwiaGFzQ2xhc3MiLCJjc3MiLCJhZGRDbGFzcyIsImRyYWdnYWJsZSIsImRyYWciLCJ1aSIsInBvc2l0aW9uIiwibGVmdCIsIm1pbiIsInRvcCIsInJlbW92ZUNsYXNzIiwic3dpdGNoIiwidHJpZ2dlciIsInNyYyIsImF0dHIiLCJ0aHVtYnMiLCJzaWJsaW5ncyIsInBhcmVudCIsInByZXYiLCJjaGlsZHJlbiIsImVhY2giLCJ0cmlnZ2VyRGF0YSIsImdhbGxlcnlJZCIsImRlbGVnYXRlVGFyZ2V0Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7O0FDckNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFSQTtBQVVBQSxRQUFPQyxHQUFQLEdBQWEsRUFBYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQjs7Ozs7Ozs7Ozs7U0NDZ0JDLFUsR0FBQUEsVTtTQU1BQyxVLEdBQUFBLFU7U0FhQUMsZSxHQUFBQSxlO1NBVUFDLGEsR0FBQUEsYTtTQVdBQyxXLEdBQUFBLFc7U0FPQUMsZ0IsR0FBQUEsZ0I7U0FXQUMsUSxHQUFBQSxRO0FBN0VoQixLQUFNQyxJQUFJQyxTQUFTQyxhQUFULENBQXVCQyxJQUF2QixDQUE0QkYsUUFBNUIsQ0FBVjtBQUNBLEtBQU1HLEtBQUtILFNBQVNJLGdCQUFULENBQTBCRixJQUExQixDQUErQkYsUUFBL0IsQ0FBWDs7QUFFQUssTUFBS0MsU0FBTCxDQUFlQyxFQUFmLEdBQW9CakIsT0FBT2lCLEVBQVAsR0FBWSxVQUFVQyxJQUFWLEVBQWdCQyxFQUFoQixFQUFvQjtBQUNoRCxVQUFLQyxnQkFBTCxDQUFzQkYsSUFBdEIsRUFBNEJDLEVBQTVCO0FBQ0gsRUFGRDs7QUFJQUUsVUFBU0wsU0FBVCxDQUFtQk0sU0FBbkIsR0FBK0JDLE1BQU1QLFNBQXJDLEMsQ0FBZ0Q7QUFDaERLLFVBQVNMLFNBQVQsQ0FBbUJNLFNBQW5CLEdBQStCRSxTQUFTUixTQUF4QztBQUNBOztBQUVBSyxVQUFTTCxTQUFULENBQW1CQyxFQUFuQixHQUF3QkksU0FBU0wsU0FBVCxDQUFtQkksZ0JBQW5CLEdBQXNDLFVBQVVGLElBQVYsRUFBZ0JDLEVBQWhCLEVBQW9CO0FBQzlFLFVBQUtNLE9BQUwsQ0FBYSxVQUFDQyxJQUFELEVBQVU7QUFDbkJBLGNBQUtULEVBQUwsQ0FBUUMsSUFBUixFQUFjQyxFQUFkO0FBQ0gsTUFGRDtBQUdILEVBSkQ7O1NBTVFWLEMsR0FBQUEsQztTQUFHSSxFLEdBQUFBLEU7QUFFSixVQUFTWCxVQUFULENBQW9CeUIsUUFBcEIsRUFBOEJDLFFBQTlCLEVBQXdDO0FBQzNDQyxZQUFPLFlBQVAsRUFBcUJDLE9BQXJCLENBQTZCO0FBQ3pCQyxvQkFBV0o7QUFEYyxNQUE3QixFQUVHQyxRQUZIO0FBR0g7O0FBRU0sVUFBU3pCLFVBQVQsR0FBc0I7QUFDekI2QixXQUFNQyxjQUFOO0FBQ0EsU0FBSUMsS0FBSyxLQUFLQyxZQUFMLENBQWtCLE1BQWxCLENBQVQ7QUFDQSxTQUFJQyxTQUFTM0IsRUFBRXlCLEVBQUYsRUFBTUcsU0FBbkI7QUFDQTtBQUNBLFNBQUlILE9BQU8sU0FBWCxFQUFzQjtBQUNsQkUsbUJBQVUsRUFBVjtBQUNIO0FBQ0RsQyxnQkFBV2tDLE1BQVgsRUFBbUIsR0FBbkI7O0FBRUEsWUFBTyxLQUFQO0FBQ0g7O0FBRU0sVUFBU2hDLGVBQVQsR0FBMkI7QUFDOUJLLE9BQUUsaUJBQUYsRUFBcUI2QixLQUFyQixDQUEyQkMsZUFBM0IsR0FBNkMsYUFBN0M7QUFDQTlCLE9BQUUsbUJBQUYsRUFBdUIrQixTQUF2QixDQUFpQ0MsTUFBakMsQ0FBd0MsZ0JBQXhDO0FBQ0FoQyxPQUFFLG1CQUFGLEVBQXVCK0IsU0FBdkIsQ0FBaUNDLE1BQWpDLENBQXdDLGtCQUF4QztBQUNBLFNBQUlDLFdBQVc3QixHQUFHLGVBQUgsQ0FBZjtBQUNBLFVBQUssSUFBSThCLElBQUksQ0FBYixFQUFnQkEsSUFBSUQsU0FBU0UsTUFBN0IsRUFBcUNELEdBQXJDLEVBQTBDO0FBQ3RDRCxrQkFBU0MsQ0FBVCxFQUFZSCxTQUFaLENBQXNCQyxNQUF0QixDQUE2QixPQUE3QjtBQUNIO0FBQ0o7O0FBRU0sVUFBU3BDLGFBQVQsR0FBeUI7QUFDNUIsU0FBSXdDLFNBQVNwQyxFQUFFLGlCQUFGLENBQWI7QUFDQW9DLFlBQU9QLEtBQVAsQ0FBYUMsZUFBYixHQUErQix1QkFBL0I7QUFDQU0sWUFBT0wsU0FBUCxDQUFpQk0sR0FBakIsQ0FBcUIsa0JBQXJCO0FBQ0FyQyxPQUFFLG1CQUFGLEVBQXVCK0IsU0FBdkIsQ0FBaUNNLEdBQWpDLENBQXFDLGdCQUFyQztBQUNBLFNBQUlKLFdBQVc3QixHQUFHLGVBQUgsQ0FBZjtBQUNBLFVBQUssSUFBSThCLElBQUksQ0FBYixFQUFnQkEsSUFBSUQsU0FBU0UsTUFBN0IsRUFBcUNELEdBQXJDLEVBQTBDO0FBQ3RDRCxrQkFBU0MsQ0FBVCxFQUFZSCxTQUFaLENBQXNCTSxHQUF0QixDQUEwQixPQUExQjtBQUNIO0FBQ0o7O0FBRU0sVUFBU3hDLFdBQVQsR0FBdUI7QUFDMUJEO0FBQ0EsU0FBSUwsT0FBTytDLFdBQVAsR0FBcUIsRUFBekIsRUFBNkI7QUFDekIzQztBQUNIO0FBQ0o7O0FBRU0sVUFBU0csZ0JBQVQsQ0FBMEJ5QyxNQUExQixFQUFrQztBQUNyQyxTQUFJQyxVQUFVLGNBQWNELE1BQTVCO0FBQ0EsWUFBTztBQUNIQyxrQkFBU0EsT0FETjtBQUVIQyxhQUFJRCxVQUFVLEtBRlg7QUFHSEUsZUFBTUYsVUFBVSxPQUhiO0FBSUhHLGdCQUFPSCxVQUFVLFNBSmQ7QUFLSEksbUJBQVVKLFVBQVU7QUFMakIsTUFBUDtBQU9IOztBQUVNLFVBQVN6QyxRQUFULENBQWtCd0MsTUFBbEIsRUFBMEI5QixJQUExQixFQUFnQztBQUNuQyxZQUFPVCxFQUFFRixpQkFBaUJ5QyxNQUFqQixFQUF5QkcsSUFBekIsR0FBZ0MsZUFBaEMsR0FBa0RqQyxJQUFsRCxHQUF5RCxJQUEzRCxDQUFQO0FBQ0gsRTs7Ozs7Ozs7Ozs7O0FDL0VEOzttQkFFZSxVQUFDVCxDQUFELEVBQUlJLEVBQUosRUFBVztBQUN0QmIsWUFBT2lCLEVBQVAsQ0FBVSxNQUFWLEVBQWtCLFlBQVk7QUFDMUJSLFdBQUUsZUFBRixFQUFtQjZCLEtBQW5CLENBQXlCZ0IsT0FBekIsR0FBbUMsTUFBbkM7QUFDQTdDLFdBQUUsU0FBRixFQUFhNkIsS0FBYixDQUFtQmdCLE9BQW5CLEdBQTZCLE1BQTdCO0FBQ0gsTUFIRDs7QUFLQXRELFlBQU9pQixFQUFQLENBQVUsa0JBQVYsRUFBOEIsWUFBWTtBQUN0QztBQUNBO0FBQ0FqQixnQkFBT2lCLEVBQVAsQ0FBVSxRQUFWLEVBQW9CLFlBQVk7QUFDNUI7QUFDSCxVQUZEOztBQUlBO0FBQ0EsYUFBSWpCLE9BQU91RCxVQUFQLEdBQW9CLEdBQXhCLEVBQTZCO0FBQ3pCO0FBQ0E5QyxlQUFFLGdCQUFGLEVBQW9CUSxFQUFwQixDQUF1QixPQUF2QixFQUFnQyxZQUFZO0FBQ3hDO0FBQ0FSLG1CQUFFLFdBQUYsRUFBZStCLFNBQWYsQ0FBeUJnQixNQUF6QixDQUFnQyxRQUFoQztBQUNILGNBSEQ7O0FBS0E7QUFDQTNDLGdCQUFHLDBCQUFILEVBQStCSSxFQUEvQixDQUFrQyxPQUFsQyxFQUEyQyxZQUFZO0FBQ25EUixtQkFBRSxnQkFBRixFQUFvQmdELEtBQXBCO0FBQ0gsY0FGRDtBQUdIOztBQUVEO0FBQ0E1QyxZQUFHLGFBQUgsRUFBa0JJLEVBQWxCLENBQXFCLE9BQXJCO0FBQ0FKLFlBQUcsUUFBSCxFQUFhSSxFQUFiLENBQWdCLE9BQWhCOztBQUVBO0FBQ0FSLFdBQUUsWUFBRixFQUFnQlEsRUFBaEIsQ0FBbUIsT0FBbkIsRUFBNEIsWUFBWTtBQUNwQyxpQkFBSXlDLFdBQVc3QyxHQUFHLG1CQUFILENBQWY7QUFDQSxrQkFBSyxJQUFJOEIsSUFBSSxDQUFiLEVBQWdCQSxJQUFJZSxTQUFTZCxNQUE3QixFQUFxQ0QsR0FBckMsRUFBMEM7QUFDdENlLDBCQUFTZixDQUFULEVBQVlILFNBQVosQ0FBc0JDLE1BQXRCLENBQTZCLFNBQTdCO0FBQ0g7QUFDRCxrQkFBS0QsU0FBTCxDQUFlQyxNQUFmLENBQXNCLFNBQXRCO0FBQ0gsVUFORDs7QUFRQVosZ0JBQU8scUJBQVAsRUFBOEJaLEVBQTlCLENBQWlDLE9BQWpDLEVBQTBDLFlBQVk7QUFDbEQsc0NBQVdSLEVBQUUsU0FBRixFQUFhNEIsU0FBYixHQUF5QixFQUFwQyxFQUF3QyxHQUF4QztBQUNILFVBRkQ7QUFHSCxNQXJDRDtBQXNDSCxFOzs7Ozs7Ozs7Ozs7QUM5Q0Q7O21CQUVlLFVBQUM1QixDQUFELEVBQUlJLEVBQUosRUFBVzs7QUFFdEIsU0FBSW1DLGVBQUo7QUFBQSxTQUFZVyx3QkFBd0IsRUFBcEM7QUFDQSxTQUFJVixVQUFVLEVBQWQ7QUFDQSxTQUFJVyxXQUFXbkQsRUFBRSxZQUFGLENBQWY7QUFDQSxTQUFJb0QsbUJBQW1CaEQsR0FBRyxtQkFBSCxDQUF2QjtBQUNBLFNBQUlpRCxrQkFBa0JqRCxHQUFHLDJCQUFILEVBQWdDK0IsTUFBdEQ7O0FBRUEzQyxTQUFJOEQsb0JBQUosR0FBMkIsVUFBVUMsRUFBVixFQUFjOztBQUVyQyxhQUFJRixlQUFKLEVBQXFCO0FBQ2pCRixzQkFBU3BCLFNBQVQsQ0FBbUJDLE1BQW5CLENBQTBCLFNBQTFCO0FBQ0g7O0FBRUR3QixnQ0FBdUJELEVBQXZCOztBQUVBRTs7QUFFQSxhQUFJSixlQUFKLEVBQXFCO0FBQ2pCRixzQkFBU3BCLFNBQVQsQ0FBbUJNLEdBQW5CLENBQXVCLFNBQXZCO0FBQ0g7QUFDSixNQWJEOztBQWVBLGNBQVNtQixzQkFBVCxDQUFnQ0QsRUFBaEMsRUFBb0M7QUFDaENoQixrQkFBU2dCLEdBQUc3QixZQUFILENBQWdCLFNBQWhCLENBQVQ7QUFDQXdCLGlDQUF3QiwrQkFBaUJYLE1BQWpCLENBQXhCO0FBQ0FDLG1CQUFVeEMsRUFBRWtELHNCQUFzQlYsT0FBeEIsQ0FBVjtBQUNBLGNBQUssSUFBSU4sSUFBSSxDQUFiLEVBQWdCQSxJQUFJa0IsaUJBQWlCakIsTUFBckMsRUFBNkNELEdBQTdDLEVBQWtEO0FBQzlDLGlCQUFJLEVBQUVrQixpQkFBaUJsQixDQUFqQixFQUFvQlQsRUFBcEIsS0FBMkJlLFFBQVFmLEVBQXJDLENBQUosRUFBOEM7QUFDMUMyQixrQ0FBaUJsQixDQUFqQixFQUFvQkgsU0FBcEIsQ0FBOEJDLE1BQTlCLENBQXFDLFNBQXJDO0FBQ0g7QUFDSjtBQUNKOztBQUVELGNBQVN5QixpQkFBVCxHQUE2QjtBQUN6QmpCLGlCQUFRVCxTQUFSLENBQWtCZ0IsTUFBbEIsQ0FBeUIsU0FBekI7QUFDQU0sMkJBQWtCakQsR0FBRywyQkFBSCxFQUFnQytCLE1BQWxEO0FBQ0g7QUFDSixFOzs7Ozs7Ozs7Ozs7QUN4Q0Q7O21CQUVlLFVBQUNuQyxDQUFELEVBQUlJLEVBQUosRUFBVztBQUN0QixTQUFJc0QsYUFBYWxFLElBQUlrRSxVQUFKLEdBQWlCLEVBQWxDO0FBQ0EsU0FBSW5CLGVBQUo7QUFBQSxTQUFZVyx3QkFBd0IsRUFBcEM7QUFDQSxTQUFJUyxtQkFBSjtBQUFBLFNBQWdCQyxxQkFBaEI7QUFBQSxTQUE4QkMsaUJBQWlCLEVBQS9DOztBQUVBckUsU0FBSXNFLGNBQUosR0FBcUIsVUFBVVAsRUFBVixFQUFjO0FBQy9CaEIsa0JBQVNnQixHQUFHN0IsWUFBSCxDQUFnQixTQUFoQixDQUFUO0FBQ0F3QixpQ0FBd0IsK0JBQWlCWCxNQUFqQixDQUF4QjtBQUNBb0Isc0JBQWEzRCxFQUFFa0Qsc0JBQXNCUCxLQUF4QixDQUFiO0FBQ0FpQix3QkFBZTVELEVBQUVrRCxzQkFBc0JWLE9BQXRCLEdBQWdDLGlCQUFsQyxDQUFmO0FBQ0FxQiwwQkFBaUI3RCxFQUFFa0Qsc0JBQXNCVixPQUF0QixHQUFnQyw0QkFBbEMsQ0FBakI7O0FBRUEsYUFBSXVCLGFBQWEzRCxHQUFHOEMsc0JBQXNCVixPQUF0QixHQUFnQyxTQUFuQyxDQUFqQjs7QUFFQSxjQUFLLElBQUlOLElBQUksQ0FBYixFQUFnQkEsSUFBSTZCLFdBQVc1QixNQUEvQixFQUF1Q0QsR0FBdkMsRUFBNEM7QUFDeEMsaUJBQUk4QixhQUFhRCxXQUFXN0IsQ0FBWCxDQUFqQjtBQUNBd0Isd0JBQVdNLFdBQVd2RCxJQUF0QixJQUE4QnVELFdBQVdDLE9BQVgsQ0FBbUJELFdBQVdFLGFBQTlCLEVBQTZDQyxLQUEzRTtBQUNIO0FBQ0RDLGlCQUFRQyxHQUFSLENBQVksdUJBQVosRUFBcUNYLFVBQXJDOztBQUVBWSw2QkFBb0JaLFVBQXBCLEVBQWdDbkIsTUFBaEM7QUFDSCxNQWhCRDs7QUFrQkEsY0FBUytCLG1CQUFULENBQTZCWixVQUE3QixFQUF5Q25CLE1BQXpDLEVBQWlEO0FBQzdDLGNBQUssSUFBSWdDLFNBQVQsSUFBc0JiLFVBQXRCLEVBQWtDO0FBQzlCLGlCQUFJQSxXQUFXYyxjQUFYLENBQTBCRCxTQUExQixLQUF3Q2IsV0FBV2EsU0FBWCxNQUEwQixFQUF0RSxFQUEwRTtBQUN0RSx3QkFBT0UsV0FBV0YsU0FBWCxDQUFQO0FBQ0g7QUFDSjs7QUFFRCxhQUFJRyxhQUFhQyxpQkFBaUJDLFFBQWpCLENBQTBCckMsTUFBMUIsQ0FBakI7O0FBRUE2QixpQkFBUUMsR0FBUixDQUFZLHNCQUFaLEVBQW9DSyxVQUFwQzs7QUFFQSxjQUFLLElBQUl4QyxJQUFJLENBQWIsRUFBZ0JBLElBQUl3QyxXQUFXdkMsTUFBL0IsRUFBdUNELEdBQXZDLEVBQTRDO0FBQ3hDLGlCQUFJMkMsWUFBWUgsV0FBV3hDLENBQVgsQ0FBaEI7QUFDQSxpQkFBSTRDLHlCQUF5QixFQUE3Qjs7QUFFQUMsb0JBQU9DLE1BQVAsQ0FBY0Ysc0JBQWQsRUFBc0NELFNBQXRDOztBQUVBLG9CQUFPQyx1QkFBdUJuQyxLQUE5Qjs7QUFFQSxpQkFBSXNDLEtBQUtDLFNBQUwsQ0FBZXhCLFVBQWYsTUFBK0J1QixLQUFLQyxTQUFMLENBQWVKLHNCQUFmLENBQW5DLEVBQTJFO0FBQ3ZFLHdCQUFPSyxlQUFlTixTQUFmLENBQVA7QUFDSDs7QUFFRE87QUFDSDtBQUNKOztBQUVELGNBQVNYLFVBQVQsQ0FBb0JGLFNBQXBCLEVBQStCO0FBQzNCWixvQkFBVzBCLFlBQVgsQ0FBd0IsWUFBeEIsRUFBc0MsRUFBdEM7QUFDQTFCLG9CQUFXMkIsU0FBWCxHQUF1QixRQUF2QjtBQUNBMUIsc0JBQWEwQixTQUFiLEdBQXlCLGdCQUFnQmYsU0FBekM7QUFDQVYsd0JBQWUwQixRQUFmLEdBQTBCLElBQTFCO0FBQ0FuQixpQkFBUUMsR0FBUixDQUFZLGdCQUFnQkUsU0FBNUI7QUFDSDs7QUFFRCxjQUFTYSxhQUFULEdBQXlCO0FBQ3JCekIsb0JBQVcwQixZQUFYLENBQXdCLFlBQXhCLEVBQXNDLEVBQXRDO0FBQ0ExQixvQkFBVzJCLFNBQVgsR0FBdUIsY0FBdkI7QUFDQTFCLHNCQUFhMEIsU0FBYixHQUF5Qix3QkFBekI7QUFDQXpCLHdCQUFlMEIsUUFBZixHQUEwQixJQUExQjtBQUNBbkIsaUJBQVFDLEdBQVIsQ0FBWSx3QkFBWjtBQUNIOztBQUVELGNBQVNjLGNBQVQsQ0FBd0JOLFNBQXhCLEVBQW1DO0FBQy9CbEIsb0JBQVcwQixZQUFYLENBQXdCLFlBQXhCLEVBQXNDUixVQUFVbEMsS0FBaEQ7QUFDQWdCLG9CQUFXMkIsU0FBWCxHQUF1QiwyQkFBMkJULFVBQVVsQyxLQUFyQyxHQUE2QyxRQUFwRTtBQUNBaUIsc0JBQWEwQixTQUFiLEdBQXlCLEVBQXpCO0FBQ0F6Qix3QkFBZTBCLFFBQWYsR0FBMEIsS0FBMUI7QUFDQW5CLGlCQUFRQyxHQUFSLENBQVlRLFVBQVVsQyxLQUF0QjtBQUNIO0FBQ0osRTs7Ozs7Ozs7Ozs7O0FDM0VEOzttQkFFZSxVQUFDM0MsQ0FBRCxFQUFPO0FBQ2xCLFNBQUkwRCxhQUFhbEUsSUFBSWtFLFVBQXJCO0FBQ0EsU0FBSW5CLFNBQVMsRUFBYjtBQUNBLFNBQUlLLGlCQUFKO0FBQUEsU0FBYzRDLHVCQUFkO0FBQUEsU0FBOEJDLG9CQUE5QjtBQUFBLFNBQTJDdkMsd0JBQXdCLEVBQW5FOztBQUVBMUQsU0FBSWtHLFdBQUosR0FBa0IsVUFBVW5DLEVBQVYsRUFBYztBQUM1QixrQ0FBV3ZELEVBQUUsU0FBRixFQUFhNEIsU0FBYixHQUF5QixFQUFwQyxFQUF3QyxHQUF4QztBQUNBVyxrQkFBU2dCLEdBQUc3QixZQUFILENBQWdCLFNBQWhCLENBQVQ7QUFDQXdCLGlDQUF3QiwrQkFBaUJYLE1BQWpCLENBQXhCO0FBQ0FLLG9CQUFXNUMsRUFBRWtELHNCQUFzQk4sUUFBeEIsQ0FBWDtBQUNBNEMsMEJBQWlCeEYsRUFBRWtELHNCQUFzQlYsT0FBdEIsR0FBZ0MsZUFBbEMsQ0FBakI7QUFDQWlELHVCQUFjekYsRUFBRWtELHNCQUFzQlAsS0FBeEIsRUFBK0JqQixZQUEvQixDQUE0QyxZQUE1QyxDQUFkOztBQUVBaUU7QUFDSCxNQVREOztBQVdBLGNBQVNBLGVBQVQsR0FBMkI7QUFDdkIsYUFBSUMsVUFBVSxFQUFkO0FBQ0EsY0FBSyxJQUFJMUQsQ0FBVCxJQUFjd0IsVUFBZCxFQUEwQjtBQUN0QmtDLHdCQUFXLFFBQVExRCxDQUFSLEdBQVksSUFBWixHQUFtQndCLFdBQVd4QixDQUFYLENBQW5CLEdBQW1DLE1BQTlDO0FBQ0g7QUFDRDBELG9CQUFXLGVBQWVILFdBQTFCO0FBQ0FHLG9CQUFXLGtCQUFrQmhELFNBQVN1QixLQUF0QztBQUNBcUIsd0JBQWVGLFNBQWYsR0FBMkJNLE9BQTNCO0FBQ0g7QUFDSixFOzs7Ozs7Ozs7Ozs7QUMzQkQ7O21CQUVlLFVBQUM1RixDQUFELEVBQU87QUFDbEIsU0FBSTBELGFBQWFsRSxJQUFJa0UsVUFBckI7QUFDQSxTQUFJbkIsZUFBSjtBQUFBLFNBQVlXLDhCQUFaO0FBQUEsU0FBbUMyQyxvQkFBbkM7QUFBQSxTQUFnRGpELFdBQVcsRUFBM0Q7QUFDQSxTQUFJa0QsV0FBV0MsS0FBS0MsS0FBTCxDQUFZRCxLQUFLRSxNQUFMLEtBQWdCLE1BQTVCLENBQWY7QUFDQSxTQUFJQyxRQUFRdkIsaUJBQWlCd0IsVUFBN0I7QUFDQSxTQUFJQyxlQUFlekIsaUJBQWlCMEIsaUJBQXBDOztBQUVBN0csU0FBSThHLFFBQUosR0FBZSxVQUFVL0MsRUFBVixFQUFjO0FBQ3pCLGFBQUlBLEdBQUd4QixTQUFILENBQWF3RSxRQUFiLENBQXNCLFVBQXRCLENBQUosRUFBdUM7QUFDbkM7QUFDSDs7QUFFRGhFLGtCQUFTZ0IsR0FBRzdCLFlBQUgsQ0FBZ0IsU0FBaEIsQ0FBVDtBQUNBd0IsaUNBQXdCLCtCQUFpQlgsTUFBakIsQ0FBeEI7QUFDQXNELHVCQUFjdEMsR0FBRzdCLFlBQUgsQ0FBZ0IsTUFBaEIsQ0FBZDs7QUFFQSxhQUFJOEUsUUFBUXhHLEVBQUVrRCxzQkFBc0JULEVBQXhCLEVBQTRCZ0UsU0FBeEM7QUFDQSxhQUFJOUQsUUFBUTNDLEVBQUVrRCxzQkFBc0JQLEtBQXhCLEVBQStCakIsWUFBL0IsQ0FBNEMsWUFBNUMsQ0FBWjtBQUNBa0Isb0JBQVc1QyxFQUFFa0Qsc0JBQXNCTixRQUF4QixDQUFYOztBQUVBLGFBQUk4RCxjQUFjO0FBQ2Qsc0JBQVNGLFFBQVEsSUFBUixHQUFlVixRQUFmLEdBQTBCLEdBRHJCO0FBRWQsd0JBQVdiLEtBQUtDLFNBQUwsQ0FBZXhCLFVBQWYsSUFBNkIsV0FBN0IsR0FBMkNmLEtBQTNDLEdBQW1ELGVBQW5ELEdBQXFFQyxTQUFTdUIsS0FBOUUsR0FBc0YsR0FGbkY7QUFHZCx1QkFBVTtBQUhJLFVBQWxCOztBQU1BLGNBQUssSUFBSWpDLElBQUksQ0FBYixFQUFnQkEsSUFBSWdFLE1BQU0vRCxNQUExQixFQUFrQ0QsR0FBbEMsRUFBdUM7QUFDbkMsaUJBQUlpQyxRQUFRLHVCQUFTNUIsTUFBVCxFQUFpQjJELE1BQU1oRSxDQUFOLENBQWpCLEVBQTJCaUMsS0FBdkM7QUFDQXVDLHlCQUFZLFVBQVVSLE1BQU1oRSxDQUFOLENBQXRCLElBQWtDaUMsS0FBbEM7QUFDSDs7QUFFRCxjQUFLLElBQUlqQyxFQUFULElBQWN3QixVQUFkLEVBQTBCO0FBQ3RCZ0QseUJBQVksV0FBV3hFLEVBQXZCLElBQTRCd0IsV0FBV3hCLEVBQVgsQ0FBNUI7QUFDSDs7QUFFRHdFLHFCQUFZLGFBQVosSUFBNkIvRCxLQUE3QjtBQUNBK0QscUJBQVksZ0JBQVosSUFBZ0M5RCxTQUFTdUIsS0FBekM7O0FBRUFDLGlCQUFRQyxHQUFSLENBQVksc0JBQVosRUFBb0NxQyxXQUFwQztBQUNBbkYsZUFBTUMsY0FBTjtBQUNBbUYsbUJBQVVELFdBQVY7QUFDSCxNQWxDRDs7QUFvQ0EsY0FBU0MsU0FBVCxDQUFtQkMsSUFBbkIsRUFBeUI7QUFDckJDLGVBQU0sMkJBQU4sRUFBbUM7QUFDL0JDLG1CQUFNN0IsS0FBS0MsU0FBTCxDQUFlMEIsSUFBZixDQUR5QjtBQUUvQjtBQUNBO0FBQ0FHLHNCQUFTO0FBQ0wsK0JBQWNDLGNBQWNDLEtBRHZCO0FBRUwsaUNBQWdCO0FBRlgsY0FKc0I7QUFRL0JDLHFCQUFRO0FBUnVCLFVBQW5DLEVBVUtDLElBVkwsQ0FVVSxVQUFVQyxRQUFWLEVBQW9CO0FBQ3RCaEQscUJBQVFDLEdBQVIsQ0FBWStDLFFBQVo7O0FBRUEsaUJBQUlBLFNBQVNDLE1BQVQsS0FBb0IsR0FBeEIsRUFBNkI7QUFDekJqRCx5QkFBUUMsR0FBUixDQUFZLGNBQWMrQyxTQUFTQyxNQUF2QixHQUFnQyxHQUFoQyxHQUFzQ0QsU0FBU0UsVUFBM0Q7QUFDQUMsdUJBQU0sY0FBY0gsU0FBU0MsTUFBdkIsR0FBZ0MsR0FBaEMsR0FBc0NELFNBQVNFLFVBQXJEO0FBQ0E7QUFDSDs7QUFFRCxpQkFBSUYsU0FBU0MsTUFBVCxLQUFvQixHQUF4QixFQUE2QjtBQUN6QkcsZ0NBQWVaLElBQWYsRUFBcUJRLFFBQXJCO0FBQ0FoRyx3QkFBT3lFLFdBQVAsRUFBb0I0QixRQUFwQixDQUE2QixNQUE3QjtBQUNBLDBDQUFXekgsRUFBRSxTQUFGLEVBQWE0QixTQUFiLEdBQXlCLEVBQXBDLEVBQXdDLEdBQXhDO0FBQ0F3Qyx5QkFBUUMsR0FBUixDQUFZK0MsU0FBU0UsVUFBVCxHQUFzQixxQkFBbEM7QUFDQUMsdUJBQU1ILFNBQVNFLFVBQVQsR0FBc0IscUJBQTVCO0FBQ0g7QUFDSixVQTFCTCxFQTJCS0ksS0EzQkwsQ0EyQldILEtBM0JYO0FBNEJIOztBQUVELGNBQVNDLGNBQVQsQ0FBd0JaLElBQXhCLEVBQThCUSxRQUE5QixFQUF3QztBQUNwQyxhQUFJeEIsVUFBVSxFQUFkO0FBQ0EsYUFBSStCLGdCQUFnQjNILEVBQUVrRCxzQkFBc0JWLE9BQXRCLEdBQWdDLGNBQWxDLENBQXBCOztBQUVBLGNBQUssSUFBSU4sQ0FBVCxJQUFjd0IsVUFBZCxFQUEwQjtBQUN0QmtDLHdCQUFXLFFBQVExRCxDQUFSLEdBQVksSUFBWixHQUFtQndCLFdBQVd4QixDQUFYLENBQW5CLEdBQW1DLE1BQTlDO0FBQ0g7QUFDRDBELG9CQUFXLGVBQWVnQixLQUFLZ0IsV0FBcEIsR0FBa0MsTUFBN0M7QUFDQWhDLG9CQUFXLGtCQUFrQmhELFNBQVN1QixLQUEzQixHQUFtQyxNQUE5QztBQUNBeUIsb0JBQVcscUJBQXNCaEQsU0FBU3VCLEtBQVQsR0FBaUJ5QyxLQUFLZ0IsV0FBNUMsR0FBMkQsTUFBdEU7O0FBRUEsY0FBSyxJQUFJMUYsTUFBSSxDQUFiLEVBQWdCQSxNQUFJZ0UsTUFBTS9ELE1BQTFCLEVBQWtDRCxLQUFsQyxFQUF1QztBQUNuQzBELHdCQUFXLFFBQVFRLGFBQWFsRSxHQUFiLENBQVIsR0FBMEIsSUFBMUIsR0FBaUMwRSxLQUFLLFVBQVVWLE1BQU1oRSxHQUFOLENBQWYsQ0FBakMsR0FBNEQsTUFBdkU7QUFDSDs7QUFFRDBELG9CQUFXLFNBQVN3QixTQUFTRSxVQUFsQixHQUErQixxQkFBMUM7QUFDQUssdUJBQWNyQyxTQUFkLEdBQTBCTSxPQUExQjtBQUNIO0FBQ0osRTs7Ozs7Ozs7Ozs7O21CQzlGYyxZQUFNO0FBQ2pCeEIsYUFBUUMsR0FBUixDQUFZLDZCQUFaLEVBQTJDakQsT0FBT1YsRUFBUCxDQUFVbUgsU0FBVixDQUFvQkMsV0FBcEIsQ0FBZ0NDLE9BQTNFO0FBQ0EzRyxZQUFPLE1BQVAsRUFBZXlHLFNBQWYsQ0FBeUI7QUFDckJHLGdCQUFPO0FBQ1A7QUFGcUIsTUFBekI7QUFJSCxFOzs7Ozs7Ozs7Ozs7QUNORDs7Ozs7O21CQUVlLFlBQU07QUFDakIsU0FBSUMsVUFBVTtBQUNWQyxlQUFNLGNBQVVDLFlBQVYsRUFBd0JDLEdBQXhCLEVBQTZCQyxPQUE3QixFQUFzQztBQUN4QyxpQkFBSUMsa0JBQWtCSCxhQUFhSSxXQUFiLEVBQXRCO0FBQ0EsaUJBQUksQ0FBQ0YsUUFBUUcsUUFBUixDQUFpQixXQUFqQixDQUFMLEVBQW9DO0FBQ2hDTCw4QkFBYU0sR0FBYixDQUFpQixRQUFqQixFQUEyQkgsZUFBM0I7QUFDQUQseUJBQVFLLFFBQVIsQ0FBaUIsV0FBakI7O0FBRUFOLHFCQUFJTyxTQUFKLENBQWM7QUFDVkMsMkJBQU0sY0FBVXJILEtBQVYsRUFBaUJzSCxFQUFqQixFQUFxQjtBQUN2QkEsNEJBQUdDLFFBQUgsQ0FBWUMsSUFBWixHQUFtQmhELEtBQUtpRCxHQUFMLENBQVMsR0FBVCxFQUFjSCxHQUFHQyxRQUFILENBQVlDLElBQTFCLENBQW5CO0FBQ0FGLDRCQUFHQyxRQUFILENBQVlHLEdBQVosR0FBa0JsRCxLQUFLaUQsR0FBTCxDQUFTLEdBQVQsRUFBY0gsR0FBR0MsUUFBSCxDQUFZRyxHQUExQixDQUFsQjtBQUNIO0FBSlMsa0JBQWQ7QUFNSCxjQVZELE1BVU87QUFDSGQsOEJBQWFNLEdBQWIsQ0FBaUIsUUFBakIsRUFBMkIsTUFBM0I7QUFDQUoseUJBQVFhLFdBQVIsQ0FBb0IsV0FBcEI7QUFDSDtBQUNKLFVBakJTO0FBa0JWQyxpQkFBUSxpQkFBVUMsT0FBVixFQUFtQmpCLFlBQW5CLEVBQWlDRSxPQUFqQyxFQUEwQztBQUM5QyxpQkFBSWdCLE1BQU1ELFFBQVFFLElBQVIsQ0FBYSxNQUFiLENBQVY7QUFBQSxpQkFDSUMsU0FBU0gsUUFBUUksUUFBUixFQURiO0FBQUEsaUJBRUlwQixNQUFNZ0IsUUFBUUssTUFBUixHQUFpQkMsSUFBakIsR0FBd0JDLFFBQXhCLEVBRlY7O0FBSUFQLHFCQUFRVixRQUFSLENBQWlCLFdBQWpCOztBQUVBYSxvQkFBT0ssSUFBUCxDQUFZLFlBQVk7QUFDcEIscUJBQUksc0JBQUUsSUFBRixFQUFRcEIsUUFBUixDQUFpQixXQUFqQixDQUFKLEVBQW1DO0FBQy9CLDJDQUFFLElBQUYsRUFBUVUsV0FBUixDQUFvQixXQUFwQjtBQUNIO0FBQ0osY0FKRDs7QUFNQSxpQkFBSWIsUUFBUUcsUUFBUixDQUFpQixXQUFqQixDQUFKLEVBQW1DO0FBQy9CSCx5QkFBUWEsV0FBUixDQUFvQixXQUFwQjtBQUNBZiw4QkFBYU0sR0FBYixDQUFpQixRQUFqQixFQUEyQixNQUEzQjtBQUNIOztBQUVEO0FBQ0FMLGlCQUFJa0IsSUFBSixDQUFTLEtBQVQsRUFBZ0JELEdBQWhCO0FBQ0g7QUF0Q1MsTUFBZDs7QUF5Q0EsU0FBSWhCLFVBQVUsc0JBQUUsVUFBRixDQUFkO0FBQ0FBLGFBQVE3SCxFQUFSLENBQVcsT0FBWCxFQUFvQixHQUFwQixFQUF5QixVQUFVZSxLQUFWLEVBQWlCO0FBQ3RDLGFBQUk2SCxVQUFVLHNCQUFFLElBQUYsQ0FBZDtBQUNBLGFBQUlTLGNBQWNULFFBQVF4QyxJQUFSLENBQWEsU0FBYixDQUFsQjtBQUNBLGFBQUlrRCxZQUFZdkksTUFBTXdJLGNBQU4sQ0FBcUJ0SSxFQUFyQztBQUNBNEcsbUJBQVUsc0JBQUUsTUFBTXlCLFNBQVIsQ0FBVjs7QUFFQSxhQUFJRCxnQkFBZ0IsTUFBcEIsRUFBNEI7QUFDeEIsaUJBQUkxQixlQUFlaUIsUUFBUUssTUFBUixFQUFuQjtBQUFBLGlCQUNJckIsTUFBTWdCLFFBQVFJLFFBQVIsRUFEVjtBQUVBdkIscUJBQVFDLElBQVIsQ0FBYUMsWUFBYixFQUEyQkMsR0FBM0IsRUFBZ0NDLE9BQWhDO0FBQ0gsVUFKRCxNQUlPLElBQUl3QixnQkFBZ0IsT0FBcEIsRUFBNkI7QUFDaEMsaUJBQUkxQixnQkFBZWlCLFFBQVFLLE1BQVIsR0FBaUJELFFBQWpCLEVBQW5CO0FBQ0F2QixxQkFBUWtCLE1BQVIsQ0FBZUMsT0FBZixFQUF3QmpCLGFBQXhCLEVBQXNDRSxPQUF0QztBQUNILFVBSE0sTUFHQTtBQUNIO0FBQ0g7QUFDRDlHLGVBQU1DLGNBQU47QUFDSCxNQWpCRDtBQWtCSCxFOzs7Ozs7QUMvREQseUIiLCJmaWxlIjoiY29tbW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgOWUyYTQ1Y2VjMjgxMDk5ZTRhYWEiLCIvLyBpbXBvcnQgJCBmcm9tIFwianF1ZXJ5XCI7XG5pbXBvcnQgeyQsICQkfSBmcm9tICcuL21vZHVsZXMvbWV0aG9kcyc7XG5pbXBvcnQgbWFpbiBmcm9tIFwiLi9tb2R1bGVzL21haW5cIjtcbmltcG9ydCB0b2dnbGVDaG9vc2VTZWN0aW9ucyBmcm9tIFwiLi9tb2R1bGVzL3RvZ2dsZUNob29zZVNlY3Rpb25zXCI7XG5pbXBvcnQgb25DaGFuZ2VTZWxlY3QgZnJvbSBcIi4vbW9kdWxlcy9vbkNoYW5nZVNlbGVjdFwiO1xuaW1wb3J0IGNoZWNrb3V0QnRuIGZyb20gXCIuL21vZHVsZXMvY2hlY2tvdXRCdG5cIjtcbmltcG9ydCBhZGRPcmRlciBmcm9tIFwiLi9tb2R1bGVzL2FkZE9yZGVyXCI7XG5pbXBvcnQgdmFsaWRhdGlvbiBmcm9tIFwiLi9tb2R1bGVzL3ZhbGlkYXRpb25cIjtcbmltcG9ydCBnYWxsZXJ5IGZyb20gXCIuL21vZHVsZXMvZ2FsbGVyeVwiO1xuXG53aW5kb3cuQXBwID0ge307XG5cbm1haW4oJCwgJCQpO1xudG9nZ2xlQ2hvb3NlU2VjdGlvbnMoJCwgJCQpO1xub25DaGFuZ2VTZWxlY3QoJCwgJCQpO1xuY2hlY2tvdXRCdG4oJCk7XG5hZGRPcmRlcigkKTtcbnZhbGlkYXRpb24oJCk7XG5nYWxsZXJ5KCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL3NyYy9qYXZhc2NyaXB0cy9jb21tb24uanMiLCJjb25zdCAkID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvci5iaW5kKGRvY3VtZW50KTtcbmNvbnN0ICQkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbC5iaW5kKGRvY3VtZW50KTtcblxuTm9kZS5wcm90b3R5cGUub24gPSB3aW5kb3cub24gPSBmdW5jdGlvbiAobmFtZSwgZm4pIHtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIobmFtZSwgZm4pO1xufTtcblxuTm9kZUxpc3QucHJvdG90eXBlLl9fcHJvdG9fXyA9IEFycmF5LnByb3RvdHlwZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuTm9kZUxpc3QucHJvdG90eXBlLl9fcHJvdG9fXyA9IERvY3VtZW50LnByb3RvdHlwZTtcbi8vTm9kZUxpc3QucHJvdG90eXBlLl9fcHJvdG9fXyA9IGpRdWVyeS5wcm90b3R5cGUuYW5pbWF0ZSgpO1xuXG5Ob2RlTGlzdC5wcm90b3R5cGUub24gPSBOb2RlTGlzdC5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uIChuYW1lLCBmbikge1xuICAgIHRoaXMuZm9yRWFjaCgoZWxlbSkgPT4ge1xuICAgICAgICBlbGVtLm9uKG5hbWUsIGZuKTtcbiAgICB9KTtcbn07XG5cbmV4cG9ydCB7JCwgJCR9O1xuXG5leHBvcnQgZnVuY3Rpb24gc2Nyb2xsRWxlbShwcm9wZXJ0eSwgZHVyYXRpb24pIHtcbiAgICBqUXVlcnkoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcbiAgICAgICAgc2Nyb2xsVG9wOiBwcm9wZXJ0eVxuICAgIH0sIGR1cmF0aW9uKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhenlTY3JvbGwoKSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBsZXQgaWQgPSB0aGlzLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuICAgIGxldCBvZmZzZXQgPSAkKGlkKS5vZmZzZXRUb3A7XG4gICAgLy9kb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaHRtbCcpWzBdLmFuaW1hdGUoe1xuICAgIGlmIChpZCA9PT0gXCIjY2hvb3NlXCIpIHtcbiAgICAgICAgb2Zmc2V0IC09IDUwO1xuICAgIH1cbiAgICBzY3JvbGxFbGVtKG9mZnNldCwgNzAwKTtcblxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5hdmJhclRvRGVmYXVsdCgpIHtcbiAgICAkKCcubmF2YmFyLWRlZmF1bHQnKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAndHJhbnNwYXJlbnQnO1xuICAgICQoJy5uYXZiYXItYnJhbmQgaW1nJykuY2xhc3NMaXN0LnJlbW92ZSgnaW1nX3Jlc3BvbnNpdmUnKTtcbiAgICAkKCcubmF2YmFyLWZpeGVkLXRvcCcpLmNsYXNzTGlzdC5yZW1vdmUoJ3RvcC1uYXYtY29sbGFwc2UnKTtcbiAgICBsZXQgbWVudUl0ZW0gPSAkJCgnLm5hdmJhci1uYXYgYScpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWVudUl0ZW0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbWVudUl0ZW1baV0uY2xhc3NMaXN0LnJlbW92ZSgnd2hpdGUnKTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuYXZiYXJUb0Zsb2F0KCkge1xuICAgIGxldCBuYXZiYXIgPSAkKCcubmF2YmFyLWRlZmF1bHQnKTtcbiAgICBuYXZiYXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JnYmEoNDgsIDQ4LCA0OCwgMC41KSc7XG4gICAgbmF2YmFyLmNsYXNzTGlzdC5hZGQoJ3RvcC1uYXYtY29sbGFwc2UnKTtcbiAgICAkKCcubmF2YmFyLWJyYW5kIGltZycpLmNsYXNzTGlzdC5hZGQoJ2ltZ19yZXNwb25zaXZlJyk7XG4gICAgbGV0IG1lbnVJdGVtID0gJCQoJy5uYXZiYXItbmF2IGEnKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1lbnVJdGVtLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIG1lbnVJdGVtW2ldLmNsYXNzTGlzdC5hZGQoJ3doaXRlJyk7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0TmF2U3R5bGUoKSB7XG4gICAgbmF2YmFyVG9GbG9hdCgpO1xuICAgIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPCA1MCkge1xuICAgICAgICBuYXZiYXJUb0RlZmF1bHQoKTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRPcGVuZWRTZWN0aW9uKGRhdGFJRCkge1xuICAgIGxldCBzZWN0aW9uID0gJyNzZWN0aW9uLScgKyBkYXRhSUQ7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2VjdGlvbjogc2VjdGlvbixcbiAgICAgICAgaDM6IHNlY3Rpb24gKyAnIGgzJyxcbiAgICAgICAgZm9ybTogc2VjdGlvbiArICcgZm9ybScsXG4gICAgICAgIHByaWNlOiBzZWN0aW9uICsgJyAucHJpY2UnLFxuICAgICAgICBxdWFudGl0eTogc2VjdGlvbiArICcgLnF1YW50aXR5JyxcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRJbnB1dChkYXRhSUQsIG5hbWUpIHtcbiAgICByZXR1cm4gJChnZXRPcGVuZWRTZWN0aW9uKGRhdGFJRCkuZm9ybSArICcgaW5wdXRbbmFtZT1cIicgKyBuYW1lICsgJ1wiXScpO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9zcmMvamF2YXNjcmlwdHMvbW9kdWxlcy9tZXRob2RzLmpzIiwiaW1wb3J0IHtzY3JvbGxFbGVtLCBzZXROYXZTdHlsZSwgbmF2YmFyVG9GbG9hdCwgbGF6eVNjcm9sbH0gZnJvbSAnLi9tZXRob2RzJztcblxuZXhwb3J0IGRlZmF1bHQgKCQsICQkKSA9PiB7XG4gICAgd2luZG93Lm9uKCdsb2FkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCcubG9hZGVyX2lubmVyJykuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAkKCcubG9hZGVyJykuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH0pO1xuXG4gICAgd2luZG93Lm9uKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAvL05hdmJhciBzdHlsZSBzd2l0Y2hlclxuICAgICAgICBzZXROYXZTdHlsZSgpO1xuICAgICAgICB3aW5kb3cub24oJ3Njcm9sbCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHNldE5hdlN0eWxlKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vRk9SIE1PQklMRVxuICAgICAgICBpZiAod2luZG93Lm91dGVyV2lkdGggPCA3NjgpIHtcbiAgICAgICAgICAgIC8vU0FORFdJQ0ggQlVUVE9OXG4gICAgICAgICAgICAkKCcubmF2YmFyLXRvZ2dsZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBuYXZiYXJUb0Zsb2F0KCk7XG4gICAgICAgICAgICAgICAgJCgnLnNhbmR3aWNoJykuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy9ISURFIE1FTlUgQ0xJQ0tJTkcgTElcbiAgICAgICAgICAgICQkKCcubmF2YmFyLWNvbGxhcHNlIHVsIGxpIGEnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgJCgnLm5hdmJhci10b2dnbGUnKS5jbGljaygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvL0xBWlkgQU5JTUFUSU5HIEZPUiBCVVRUT05TIEFORCBNRU5VIElURU1TXG4gICAgICAgICQkKCcuc2Nyb2xsX2J0bicpLm9uKCdjbGljaycsIGxhenlTY3JvbGwpO1xuICAgICAgICAkJCgnLm5hdiBhJykub24oJ2NsaWNrJywgbGF6eVNjcm9sbCk7XG5cbiAgICAgICAgLy9DTE9TRSBCVVRUT04gWFxuICAgICAgICAkKCcuY2xvc2UtYnRuJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbGV0IHNlY3Rpb25zID0gJCQoJy5jb2xsYXBzZS1zZWN0aW9uJyk7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlY3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgc2VjdGlvbnNbaV0uY2xhc3NMaXN0LnJlbW92ZSgnc2hvd2luZycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jbGFzc0xpc3QucmVtb3ZlKCdzaG93aW5nJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGpRdWVyeSgnW2RhdGEtc2xpZGU9XCJwcmV2XCJdJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc2Nyb2xsRWxlbSgkKFwiI2Nob29zZVwiKS5vZmZzZXRUb3AgLSA1MCwgMTAwKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9zcmMvamF2YXNjcmlwdHMvbW9kdWxlcy9tYWluLmpzIiwiaW1wb3J0IHtnZXRPcGVuZWRTZWN0aW9ufSBmcm9tIFwiLi9tZXRob2RzXCI7XG5cbmV4cG9ydCBkZWZhdWx0ICgkLCAkJCkgPT4ge1xuXG4gICAgbGV0IGRhdGFJRCwgb3BlbmVkU2VjdGlvblNlbGVjdG9yID0gXCJcIjtcbiAgICBsZXQgc2VjdGlvbiA9IHt9O1xuICAgIGxldCBjbG9zZUJ0biA9ICQoJy5jbG9zZS1idG4nKTtcbiAgICBsZXQgY29sbGFwc2VTZWN0aW9ucyA9ICQkKCcuY29sbGFwc2Utc2VjdGlvbicpO1xuICAgIGxldCBzaG93aW5nU2VjdGlvbnMgPSAkJCgnLmNvbGxhcHNlLXNlY3Rpb24uc2hvd2luZycpLmxlbmd0aDtcblxuICAgIEFwcC50b2dnbGVDaG9vc2VTZWN0aW9ucyA9IGZ1bmN0aW9uIChlbCkge1xuXG4gICAgICAgIGlmIChzaG93aW5nU2VjdGlvbnMpIHtcbiAgICAgICAgICAgIGNsb3NlQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3dpbmcnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbGxhcHNlT3BlbmVkU2VjdGlvbnMoZWwpO1xuXG4gICAgICAgIHNob3dUYXJnZXRTZWN0aW9uKCk7XG5cbiAgICAgICAgaWYgKHNob3dpbmdTZWN0aW9ucykge1xuICAgICAgICAgICAgY2xvc2VCdG4uY2xhc3NMaXN0LmFkZCgnc2hvd2luZycpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGNvbGxhcHNlT3BlbmVkU2VjdGlvbnMoZWwpIHtcbiAgICAgICAgZGF0YUlEID0gZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XG4gICAgICAgIG9wZW5lZFNlY3Rpb25TZWxlY3RvciA9IGdldE9wZW5lZFNlY3Rpb24oZGF0YUlEKTtcbiAgICAgICAgc2VjdGlvbiA9ICQob3BlbmVkU2VjdGlvblNlbGVjdG9yLnNlY3Rpb24pO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbGxhcHNlU2VjdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICghKGNvbGxhcHNlU2VjdGlvbnNbaV0uaWQgPT09IHNlY3Rpb24uaWQpKSB7XG4gICAgICAgICAgICAgICAgY29sbGFwc2VTZWN0aW9uc1tpXS5jbGFzc0xpc3QucmVtb3ZlKCdzaG93aW5nJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzaG93VGFyZ2V0U2VjdGlvbigpIHtcbiAgICAgICAgc2VjdGlvbi5jbGFzc0xpc3QudG9nZ2xlKCdzaG93aW5nJyk7XG4gICAgICAgIHNob3dpbmdTZWN0aW9ucyA9ICQkKCcuY29sbGFwc2Utc2VjdGlvbi5zaG93aW5nJykubGVuZ3RoO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvc3JjL2phdmFzY3JpcHRzL21vZHVsZXMvdG9nZ2xlQ2hvb3NlU2VjdGlvbnMuanMiLCJpbXBvcnQge2dldE9wZW5lZFNlY3Rpb259IGZyb20gXCIuL21ldGhvZHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgKCQsICQkKSA9PiB7XG4gICAgbGV0IHVzZXJDaG9pY2UgPSBBcHAudXNlckNob2ljZSA9IHt9O1xuICAgIGxldCBkYXRhSUQsIG9wZW5lZFNlY3Rpb25TZWxlY3RvciA9IFwiXCI7XG4gICAgbGV0IHByaW50UHJpY2UsIHByaW50TWVzc2FnZSwgY2hlY2tvdXRCdXR0b24gPSB7fTtcblxuICAgIEFwcC5vbkNoYW5nZVNlbGVjdCA9IGZ1bmN0aW9uIChlbCkge1xuICAgICAgICBkYXRhSUQgPSBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcbiAgICAgICAgb3BlbmVkU2VjdGlvblNlbGVjdG9yID0gZ2V0T3BlbmVkU2VjdGlvbihkYXRhSUQpO1xuICAgICAgICBwcmludFByaWNlID0gJChvcGVuZWRTZWN0aW9uU2VsZWN0b3IucHJpY2UpO1xuICAgICAgICBwcmludE1lc3NhZ2UgPSAkKG9wZW5lZFNlY3Rpb25TZWxlY3Rvci5zZWN0aW9uICsgJyAuZXJyb3ItbWVzc2FnZScpO1xuICAgICAgICBjaGVja291dEJ1dHRvbiA9ICQob3BlbmVkU2VjdGlvblNlbGVjdG9yLnNlY3Rpb24gKyBcIiBidXR0b25bZGF0YS1zbGlkZT0nbmV4dCddXCIpO1xuXG4gICAgICAgIGxldCBhbGxTZWxlY3RzID0gJCQob3BlbmVkU2VjdGlvblNlbGVjdG9yLnNlY3Rpb24gKyAnIHNlbGVjdCcpO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsU2VsZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGl0ZW1TZWxlY3QgPSBhbGxTZWxlY3RzW2ldO1xuICAgICAgICAgICAgdXNlckNob2ljZVtpdGVtU2VsZWN0Lm5hbWVdID0gaXRlbVNlbGVjdC5vcHRpb25zW2l0ZW1TZWxlY3Quc2VsZWN0ZWRJbmRleF0udmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coJ1RoaXMgaXMgdXNlciBjaG9pY2U6ICcsIHVzZXJDaG9pY2UpO1xuXG4gICAgICAgIGNvbXBhcmVBdmFpbGFiaWxpdHkodXNlckNob2ljZSwgZGF0YUlEKTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gY29tcGFyZUF2YWlsYWJpbGl0eSh1c2VyQ2hvaWNlLCBkYXRhSUQpIHtcbiAgICAgICAgZm9yIChsZXQgcGFyYW1ldGVyIGluIHVzZXJDaG9pY2UpIHtcbiAgICAgICAgICAgIGlmICh1c2VyQ2hvaWNlLmhhc093blByb3BlcnR5KHBhcmFtZXRlcikgJiYgdXNlckNob2ljZVtwYXJhbWV0ZXJdID09PSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1pc3NTZWxlY3QocGFyYW1ldGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB2YXJpYXRpb25zID0gdmFyaWF0aW9uc09iamVjdC5kYXRhQnlJZFtkYXRhSURdO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCdUaGlzIGlzIFZhcmlhdGlvbnM6ICcsIHZhcmlhdGlvbnMpO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFyaWF0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHZhcmlhdGlvbiA9IHZhcmlhdGlvbnNbaV07XG4gICAgICAgICAgICBsZXQgdmFyaWF0aW9uc1dpdGhvdXRQcmljZSA9IHt9O1xuXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHZhcmlhdGlvbnNXaXRob3V0UHJpY2UsIHZhcmlhdGlvbik7XG5cbiAgICAgICAgICAgIGRlbGV0ZSB2YXJpYXRpb25zV2l0aG91dFByaWNlLnByaWNlO1xuXG4gICAgICAgICAgICBpZiAoSlNPTi5zdHJpbmdpZnkodXNlckNob2ljZSkgPT09IEpTT04uc3RyaW5naWZ5KHZhcmlhdGlvbnNXaXRob3V0UHJpY2UpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1hdGNoVmFyaWF0aW9uKHZhcmlhdGlvbik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG1pc3NWYXJpYXRpb24oKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1pc3NTZWxlY3QocGFyYW1ldGVyKSB7XG4gICAgICAgIHByaW50UHJpY2Uuc2V0QXR0cmlidXRlKCdkYXRhLXByaWNlJywgJycpO1xuICAgICAgICBwcmludFByaWNlLmlubmVySFRNTCA9IFwiJm5ic3A7XCI7XG4gICAgICAgIHByaW50TWVzc2FnZS5pbm5lckhUTUwgPSAnU2VsZWN0IHRoZSAnICsgcGFyYW1ldGVyO1xuICAgICAgICBjaGVja291dEJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIGNvbnNvbGUubG9nKCdTZWxlY3QgdGhlICcgKyBwYXJhbWV0ZXIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1pc3NWYXJpYXRpb24oKSB7XG4gICAgICAgIHByaW50UHJpY2Uuc2V0QXR0cmlidXRlKCdkYXRhLXByaWNlJywgJycpO1xuICAgICAgICBwcmludFByaWNlLmlubmVySFRNTCA9ICc8aDM+LSAtPC9oMz4nO1xuICAgICAgICBwcmludE1lc3NhZ2UuaW5uZXJIVE1MID0gJ1ZhcmlhdGlvbiBpcyBub3QgZm91bmQnO1xuICAgICAgICBjaGVja291dEJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIGNvbnNvbGUubG9nKCdWYXJpYXRpb24gaXMgbm90IGZvdW5kJyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWF0Y2hWYXJpYXRpb24odmFyaWF0aW9uKSB7XG4gICAgICAgIHByaW50UHJpY2Uuc2V0QXR0cmlidXRlKCdkYXRhLXByaWNlJywgdmFyaWF0aW9uLnByaWNlKTtcbiAgICAgICAgcHJpbnRQcmljZS5pbm5lckhUTUwgPSAnPGgzIGNsYXNzPVwicmVkLXByaWNlXCI+JyArIHZhcmlhdGlvbi5wcmljZSArICckPC9oMz4nO1xuICAgICAgICBwcmludE1lc3NhZ2UuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgY2hlY2tvdXRCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgY29uc29sZS5sb2codmFyaWF0aW9uLnByaWNlKTtcbiAgICB9XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9zcmMvamF2YXNjcmlwdHMvbW9kdWxlcy9vbkNoYW5nZVNlbGVjdC5qcyIsImltcG9ydCB7c2Nyb2xsRWxlbSwgZ2V0T3BlbmVkU2VjdGlvbn0gZnJvbSAnLi9tZXRob2RzJztcblxuZXhwb3J0IGRlZmF1bHQgKCQpID0+IHtcbiAgICBsZXQgdXNlckNob2ljZSA9IEFwcC51c2VyQ2hvaWNlO1xuICAgIGxldCBkYXRhSUQgPSBcIlwiO1xuICAgIGxldCBxdWFudGl0eSwgdXNlckNob2ljZVRleHQsIGNob2ljZVByaWNlLCBvcGVuZWRTZWN0aW9uU2VsZWN0b3IgPSB7fTtcblxuICAgIEFwcC5jaGVja291dEJ0biA9IGZ1bmN0aW9uIChlbCkge1xuICAgICAgICBzY3JvbGxFbGVtKCQoXCIjY2hvb3NlXCIpLm9mZnNldFRvcCAtIDUwLCAxMDApO1xuICAgICAgICBkYXRhSUQgPSBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcbiAgICAgICAgb3BlbmVkU2VjdGlvblNlbGVjdG9yID0gZ2V0T3BlbmVkU2VjdGlvbihkYXRhSUQpO1xuICAgICAgICBxdWFudGl0eSA9ICQob3BlbmVkU2VjdGlvblNlbGVjdG9yLnF1YW50aXR5KTtcbiAgICAgICAgdXNlckNob2ljZVRleHQgPSAkKG9wZW5lZFNlY3Rpb25TZWxlY3Rvci5zZWN0aW9uICsgJyAudXNlci1jaG9pY2UnKTtcbiAgICAgICAgY2hvaWNlUHJpY2UgPSAkKG9wZW5lZFNlY3Rpb25TZWxlY3Rvci5wcmljZSkuZ2V0QXR0cmlidXRlKCdkYXRhLXByaWNlJyk7XG5cbiAgICAgICAgcHJpbnRVc2VyQ2hvaWNlKClcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gcHJpbnRVc2VyQ2hvaWNlKCkge1xuICAgICAgICBsZXQgY29udGVudCA9ICcnO1xuICAgICAgICBmb3IgKGxldCBpIGluIHVzZXJDaG9pY2UpIHtcbiAgICAgICAgICAgIGNvbnRlbnQgKz0gXCI8cD5cIiArIGkgKyBcIjogXCIgKyB1c2VyQ2hvaWNlW2ldICsgXCI8L3A+XCI7XG4gICAgICAgIH1cbiAgICAgICAgY29udGVudCArPSBcIjxwPlByaWNlOiBcIiArIGNob2ljZVByaWNlO1xuICAgICAgICBjb250ZW50ICs9IFwiPHA+UXVhbnRpdHk6IFwiICsgcXVhbnRpdHkudmFsdWU7XG4gICAgICAgIHVzZXJDaG9pY2VUZXh0LmlubmVySFRNTCA9IGNvbnRlbnQ7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9zcmMvamF2YXNjcmlwdHMvbW9kdWxlcy9jaGVja291dEJ0bi5qcyIsImltcG9ydCB7c2Nyb2xsRWxlbSwgZ2V0T3BlbmVkU2VjdGlvbiwgZ2V0SW5wdXR9IGZyb20gJy4vbWV0aG9kcyc7XG5cbmV4cG9ydCBkZWZhdWx0ICgkKSA9PiB7XG4gICAgbGV0IHVzZXJDaG9pY2UgPSBBcHAudXNlckNob2ljZTtcbiAgICBsZXQgZGF0YUlELCBvcGVuZWRTZWN0aW9uU2VsZWN0b3IsIGVsZW1lbnRIcmVmLCBxdWFudGl0eSA9IFwiXCI7XG4gICAgbGV0IHJhbmRvbUlkID0gTWF0aC50cnVuYygoTWF0aC5yYW5kb20oKSAqIDEwMDAwMCkpO1xuICAgIGxldCBuYW1lcyA9IHZhcmlhdGlvbnNPYmplY3QuaW5wdXROYW1lcztcbiAgICBsZXQgcGxhY2Vob2xkZXJzID0gdmFyaWF0aW9uc09iamVjdC5pbnB1dFBsYWNlaG9sZGVycztcblxuICAgIEFwcC5hZGRPcmRlciA9IGZ1bmN0aW9uIChlbCkge1xuICAgICAgICBpZiAoZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdkaXNhYmxlZCcpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBkYXRhSUQgPSBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcbiAgICAgICAgb3BlbmVkU2VjdGlvblNlbGVjdG9yID0gZ2V0T3BlbmVkU2VjdGlvbihkYXRhSUQpO1xuICAgICAgICBlbGVtZW50SHJlZiA9IGVsLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuXG4gICAgICAgIGxldCB0aXRsZSA9ICQob3BlbmVkU2VjdGlvblNlbGVjdG9yLmgzKS5pbm5lclRleHQ7XG4gICAgICAgIGxldCBwcmljZSA9ICQob3BlbmVkU2VjdGlvblNlbGVjdG9yLnByaWNlKS5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJpY2UnKTtcbiAgICAgICAgcXVhbnRpdHkgPSAkKG9wZW5lZFNlY3Rpb25TZWxlY3Rvci5xdWFudGl0eSk7XG5cbiAgICAgICAgbGV0IHByb2R1Y3REYXRhID0ge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiB0aXRsZSArICcgWycgKyByYW5kb21JZCArICddJyxcbiAgICAgICAgICAgIFwiY29udGVudFwiOiBKU09OLnN0cmluZ2lmeSh1c2VyQ2hvaWNlKSArICd7XCJwcmljZVwiOicgKyBwcmljZSArICcsIFwicXVhbnRpdHlcIjonICsgcXVhbnRpdHkudmFsdWUgKyAnfScsXG4gICAgICAgICAgICBcInN0YXR1c1wiOiAncHVibGlzaCdcbiAgICAgICAgfTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5hbWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgdmFsdWUgPSBnZXRJbnB1dChkYXRhSUQsIG5hbWVzW2ldKS52YWx1ZTtcbiAgICAgICAgICAgIHByb2R1Y3REYXRhWydpbmZvXycgKyBuYW1lc1tpXV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgaW4gdXNlckNob2ljZSkge1xuICAgICAgICAgICAgcHJvZHVjdERhdGFbJ3BhcmFtXycgKyBpXSA9IHVzZXJDaG9pY2VbaV07XG4gICAgICAgIH1cblxuICAgICAgICBwcm9kdWN0RGF0YVsncGFyYW1fcHJpY2UnXSA9IHByaWNlO1xuICAgICAgICBwcm9kdWN0RGF0YVsncGFyYW1fcXVhbnRpdHknXSA9IHF1YW50aXR5LnZhbHVlO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCdUaGlzIGlzIG9yZGVyIGRhdGE6ICcsIHByb2R1Y3REYXRhKTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZmV0Y2hEYXRhKHByb2R1Y3REYXRhKTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gZmV0Y2hEYXRhKGRhdGEpIHtcbiAgICAgICAgZmV0Y2goJy93cC1qc29uL3dwL3YyL3Nob3Bfb3JkZXInLCB7XG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcbiAgICAgICAgICAgIC8vIHZhciBCYXNlNjQ9e19rZXlTdHI6XCJBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvPVwiLGVuY29kZTpmdW5jdGlvbihlKXt2YXIgdD1cIlwiO3ZhciBuLHIsaSxzLG8sdSxhO3ZhciBmPTA7ZT1CYXNlNjQuX3V0ZjhfZW5jb2RlKGUpO3doaWxlKGY8ZS5sZW5ndGgpe249ZS5jaGFyQ29kZUF0KGYrKyk7cj1lLmNoYXJDb2RlQXQoZisrKTtpPWUuY2hhckNvZGVBdChmKyspO3M9bj4+MjtvPShuJjMpPDw0fHI+PjQ7dT0ociYxNSk8PDJ8aT4+NjthPWkmNjM7aWYoaXNOYU4ocikpe3U9YT02NH1lbHNlIGlmKGlzTmFOKGkpKXthPTY0fXQ9dCt0aGlzLl9rZXlTdHIuY2hhckF0KHMpK3RoaXMuX2tleVN0ci5jaGFyQXQobykrdGhpcy5fa2V5U3RyLmNoYXJBdCh1KSt0aGlzLl9rZXlTdHIuY2hhckF0KGEpfXJldHVybiB0fSxkZWNvZGU6ZnVuY3Rpb24oZSl7dmFyIHQ9XCJcIjt2YXIgbixyLGk7dmFyIHMsbyx1LGE7dmFyIGY9MDtlPWUucmVwbGFjZSgvW15BLVphLXowLTlcXCtcXC9cXD1dL2csXCJcIik7d2hpbGUoZjxlLmxlbmd0aCl7cz10aGlzLl9rZXlTdHIuaW5kZXhPZihlLmNoYXJBdChmKyspKTtvPXRoaXMuX2tleVN0ci5pbmRleE9mKGUuY2hhckF0KGYrKykpO3U9dGhpcy5fa2V5U3RyLmluZGV4T2YoZS5jaGFyQXQoZisrKSk7YT10aGlzLl9rZXlTdHIuaW5kZXhPZihlLmNoYXJBdChmKyspKTtuPXM8PDJ8bz4+NDtyPShvJjE1KTw8NHx1Pj4yO2k9KHUmMyk8PDZ8YTt0PXQrU3RyaW5nLmZyb21DaGFyQ29kZShuKTtpZih1IT02NCl7dD10K1N0cmluZy5mcm9tQ2hhckNvZGUocil9aWYoYSE9NjQpe3Q9dCtTdHJpbmcuZnJvbUNoYXJDb2RlKGkpfX10PUJhc2U2NC5fdXRmOF9kZWNvZGUodCk7cmV0dXJuIHR9LF91dGY4X2VuY29kZTpmdW5jdGlvbihlKXtlPWUucmVwbGFjZSgvXFxyXFxuL2csXCJcXG5cIik7dmFyIHQ9XCJcIjtmb3IodmFyIG49MDtuPGUubGVuZ3RoO24rKyl7dmFyIHI9ZS5jaGFyQ29kZUF0KG4pO2lmKHI8MTI4KXt0Kz1TdHJpbmcuZnJvbUNoYXJDb2RlKHIpfWVsc2UgaWYocj4xMjcmJnI8MjA0OCl7dCs9U3RyaW5nLmZyb21DaGFyQ29kZShyPj42fDE5Mik7dCs9U3RyaW5nLmZyb21DaGFyQ29kZShyJjYzfDEyOCl9ZWxzZXt0Kz1TdHJpbmcuZnJvbUNoYXJDb2RlKHI+PjEyfDIyNCk7dCs9U3RyaW5nLmZyb21DaGFyQ29kZShyPj42JjYzfDEyOCk7dCs9U3RyaW5nLmZyb21DaGFyQ29kZShyJjYzfDEyOCl9fXJldHVybiB0fSxfdXRmOF9kZWNvZGU6ZnVuY3Rpb24oZSl7dmFyIHQ9XCJcIjt2YXIgbj0wO3ZhciByPWMxPWMyPTA7d2hpbGUobjxlLmxlbmd0aCl7cj1lLmNoYXJDb2RlQXQobik7aWYocjwxMjgpe3QrPVN0cmluZy5mcm9tQ2hhckNvZGUocik7bisrfWVsc2UgaWYocj4xOTEmJnI8MjI0KXtjMj1lLmNoYXJDb2RlQXQobisxKTt0Kz1TdHJpbmcuZnJvbUNoYXJDb2RlKChyJjMxKTw8NnxjMiY2Myk7bis9Mn1lbHNle2MyPWUuY2hhckNvZGVBdChuKzEpO2MzPWUuY2hhckNvZGVBdChuKzIpO3QrPVN0cmluZy5mcm9tQ2hhckNvZGUoKHImMTUpPDwxMnwoYzImNjMpPDw2fGMzJjYzKTtuKz0zfX1yZXR1cm4gdH19O1xuICAgICAgICAgICAgLy9jcmVhdGVQb3N0LnNldFJlcXVlc3RIZWFkZXIoICdBdXRob3JpemF0aW9uJywgJ0Jhc2ljICcgKyBCYXNlNjQuZW5jb2RlKCAndGVzdDowMDAwJyApICk7XG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ1gtV1AtTm9uY2UnOiB3cEFwaVNldHRpbmdzLm5vbmNlLFxuICAgICAgICAgICAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJ1xuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyAhPT0gMjAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdOb3QgMjAxOiAnICsgcmVzcG9uc2Uuc3RhdHVzICsgJyAnICsgcmVzcG9uc2Uuc3RhdHVzVGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KCdOb3QgMjAxOiAnICsgcmVzcG9uc2Uuc3RhdHVzICsgJyAnICsgcmVzcG9uc2Uuc3RhdHVzVGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDEpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJpbnRPcmRlclRleHQoZGF0YSwgcmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICBqUXVlcnkoZWxlbWVudEhyZWYpLmNhcm91c2VsKCduZXh0Jyk7XG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbEVsZW0oJChcIiNjaG9vc2VcIikub2Zmc2V0VG9wIC0gNTAsIDEwMCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLnN0YXR1c1RleHQgKyAnIHN0YXR1czogcG9zdCBhZGRlZCcpO1xuICAgICAgICAgICAgICAgICAgICBhbGVydChyZXNwb25zZS5zdGF0dXNUZXh0ICsgJyBzdGF0dXM6IHBvc3QgYWRkZWQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGFsZXJ0KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwcmludE9yZGVyVGV4dChkYXRhLCByZXNwb25zZSkge1xuICAgICAgICBsZXQgY29udGVudCA9ICcnO1xuICAgICAgICBsZXQgdXNlck9yZGVyVGV4dCA9ICQob3BlbmVkU2VjdGlvblNlbGVjdG9yLnNlY3Rpb24gKyAnIC51c2VyLW9yZGVyJyk7XG5cbiAgICAgICAgZm9yIChsZXQgaSBpbiB1c2VyQ2hvaWNlKSB7XG4gICAgICAgICAgICBjb250ZW50ICs9IFwiPHA+XCIgKyBpICsgXCI6IFwiICsgdXNlckNob2ljZVtpXSArIFwiPC9wPlwiO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRlbnQgKz0gXCI8cD5QcmljZTogXCIgKyBkYXRhLnBhcmFtX3ByaWNlICsgXCI8L3A+XCI7XG4gICAgICAgIGNvbnRlbnQgKz0gXCI8cD5RdWFudGl0eTogXCIgKyBxdWFudGl0eS52YWx1ZSArIFwiPC9wPlwiO1xuICAgICAgICBjb250ZW50ICs9IFwiPHA+VG90YWwgcHJpY2U6IFwiICsgKHF1YW50aXR5LnZhbHVlICogZGF0YS5wYXJhbV9wcmljZSkgKyBcIjwvcD5cIjtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5hbWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb250ZW50ICs9IFwiPHA+XCIgKyBwbGFjZWhvbGRlcnNbaV0gKyBcIjogXCIgKyBkYXRhWydpbmZvXycgKyBuYW1lc1tpXV0gKyBcIjwvcD5cIjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRlbnQgKz0gJzxicj4nICsgcmVzcG9uc2Uuc3RhdHVzVGV4dCArICcgc3RhdHVzOiBwb3N0IGFkZGVkJztcbiAgICAgICAgdXNlck9yZGVyVGV4dC5pbm5lckhUTUwgPSBjb250ZW50O1xuICAgIH1cbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL3NyYy9qYXZhc2NyaXB0cy9tb2R1bGVzL2FkZE9yZGVyLmpzIiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiYm9vc3RyYXAtdmFsaWRhdG9yIHZlcnNpb246XCIsIGpRdWVyeS5mbi52YWxpZGF0b3IuQ29uc3RydWN0b3IuVkVSU0lPTik7XG4gICAgalF1ZXJ5KCdmb3JtJykudmFsaWRhdG9yKHtcbiAgICAgICAgZm9jdXM6IGZhbHNlLFxuICAgICAgICAvLyBkZWxheTogMzAwMFxuICAgIH0pO1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvc3JjL2phdmFzY3JpcHRzL21vZHVsZXMvdmFsaWRhdGlvbi5qcyIsImltcG9ydCAkIGZyb20gXCJqcXVlcnlcIjtcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICAgIGxldCBHYWxsZXJ5ID0ge1xuICAgICAgICB6b29tOiBmdW5jdGlvbiAoaW1nQ29udGFpbmVyLCBpbWcsIGdhbGxlcnkpIHtcbiAgICAgICAgICAgIGxldCBjb250YWluZXJIZWlnaHQgPSBpbWdDb250YWluZXIub3V0ZXJIZWlnaHQoKTtcbiAgICAgICAgICAgIGlmICghZ2FsbGVyeS5oYXNDbGFzcygnaXMtem9vbWVkJykpIHtcbiAgICAgICAgICAgICAgICBpbWdDb250YWluZXIuY3NzKFwiaGVpZ2h0XCIsIGNvbnRhaW5lckhlaWdodCk7XG4gICAgICAgICAgICAgICAgZ2FsbGVyeS5hZGRDbGFzcygnaXMtem9vbWVkJyk7XG5cbiAgICAgICAgICAgICAgICBpbWcuZHJhZ2dhYmxlKHtcbiAgICAgICAgICAgICAgICAgICAgZHJhZzogZnVuY3Rpb24gKGV2ZW50LCB1aSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdWkucG9zaXRpb24ubGVmdCA9IE1hdGgubWluKDEwMCwgdWkucG9zaXRpb24ubGVmdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB1aS5wb3NpdGlvbi50b3AgPSBNYXRoLm1pbigxMDAsIHVpLnBvc2l0aW9uLnRvcCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaW1nQ29udGFpbmVyLmNzcyhcImhlaWdodFwiLCBcImF1dG9cIik7XG4gICAgICAgICAgICAgICAgZ2FsbGVyeS5yZW1vdmVDbGFzcygnaXMtem9vbWVkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHN3aXRjaDogZnVuY3Rpb24gKHRyaWdnZXIsIGltZ0NvbnRhaW5lciwgZ2FsbGVyeSkge1xuICAgICAgICAgICAgbGV0IHNyYyA9IHRyaWdnZXIuYXR0cignaHJlZicpLFxuICAgICAgICAgICAgICAgIHRodW1icyA9IHRyaWdnZXIuc2libGluZ3MoKSxcbiAgICAgICAgICAgICAgICBpbWcgPSB0cmlnZ2VyLnBhcmVudCgpLnByZXYoKS5jaGlsZHJlbigpO1xuXG4gICAgICAgICAgICB0cmlnZ2VyLmFkZENsYXNzKCdpcy1hY3RpdmUnKTtcblxuICAgICAgICAgICAgdGh1bWJzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKCdpcy1hY3RpdmUnKSkge1xuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKGdhbGxlcnkuaGFzQ2xhc3MoJ2lzLXpvb21lZCcpKSB7XG4gICAgICAgICAgICAgICAgZ2FsbGVyeS5yZW1vdmVDbGFzcygnaXMtem9vbWVkJyk7XG4gICAgICAgICAgICAgICAgaW1nQ29udGFpbmVyLmNzcyhcImhlaWdodFwiLCBcImF1dG9cIik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFN3aXRjaCBpbWFnZSBzb3VyY2VcbiAgICAgICAgICAgIGltZy5hdHRyKCdzcmMnLCBzcmMpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGxldCBnYWxsZXJ5ID0gJCgnLmdhbGxlcnknKTtcbiAgICBnYWxsZXJ5Lm9uKCdjbGljaycsICdhJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGxldCB0cmlnZ2VyID0gJCh0aGlzKTtcbiAgICAgICAgbGV0IHRyaWdnZXJEYXRhID0gdHJpZ2dlci5kYXRhKFwiZ2FsbGVyeVwiKTtcbiAgICAgICAgbGV0IGdhbGxlcnlJZCA9IGV2ZW50LmRlbGVnYXRlVGFyZ2V0LmlkO1xuICAgICAgICBnYWxsZXJ5ID0gJCgnIycgKyBnYWxsZXJ5SWQpO1xuXG4gICAgICAgIGlmICh0cmlnZ2VyRGF0YSA9PT0gJ3pvb20nKSB7XG4gICAgICAgICAgICBsZXQgaW1nQ29udGFpbmVyID0gdHJpZ2dlci5wYXJlbnQoKSxcbiAgICAgICAgICAgICAgICBpbWcgPSB0cmlnZ2VyLnNpYmxpbmdzKCk7XG4gICAgICAgICAgICBHYWxsZXJ5Lnpvb20oaW1nQ29udGFpbmVyLCBpbWcsIGdhbGxlcnkpO1xuICAgICAgICB9IGVsc2UgaWYgKHRyaWdnZXJEYXRhID09PSAndGh1bWInKSB7XG4gICAgICAgICAgICBsZXQgaW1nQ29udGFpbmVyID0gdHJpZ2dlci5wYXJlbnQoKS5zaWJsaW5ncygpO1xuICAgICAgICAgICAgR2FsbGVyeS5zd2l0Y2godHJpZ2dlciwgaW1nQ29udGFpbmVyLCBnYWxsZXJ5KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0pO1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvc3JjL2phdmFzY3JpcHRzL21vZHVsZXMvZ2FsbGVyeS5qcyIsIm1vZHVsZS5leHBvcnRzID0galF1ZXJ5O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwialF1ZXJ5XCJcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==