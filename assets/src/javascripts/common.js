// import $ from "jquery";

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

Node.prototype.on = window.on = function (name, fn) {
    this.addEventListener(name, fn);
};

NodeList.prototype.__proto__ = Array.prototype; // eslint-disable-line
NodeList.prototype.__proto__ = Document.prototype;
//NodeList.prototype.__proto__ = jQuery.prototype.animate();

NodeList.prototype.on = NodeList.prototype.addEventListener = function (name, fn) {
    this.forEach((elem) => {
        elem.on(name, fn);
    });
};
//export {$, $$};

import main from "./modules/main";
import toggleChooseSections from "./modules/toggleChooseSections";
import onChangeSelect from "./modules/onChangeSelect";
import checkoutBtn from "./modules/checkoutBtn";
import addOrder from "./modules/addOrder";
import validation from "./modules/validation";
import gallery from "./modules/gallery";


jQuery(function () {
    main($, $$);
    toggleChooseSections($, $$);
    onChangeSelect($, $$);
    checkoutBtn($);
    addOrder($);
    validation($);
    gallery();
});