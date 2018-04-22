// import $ from "jquery";

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

Node.prototype.on = window.on = function (name, fn) {
    this.addEventListener(name, fn);
};

NodeList.prototype.__proto__ = Array.prototype; // eslint-disable-line
NodeList.prototype.__proto__ = Document.prototype;

NodeList.prototype.on = NodeList.prototype.addEventListener = function (name, fn) {
    this.forEach((elem) => {
        elem.on(name, fn);
    });
};
//export {$, $$};

import main from "./modules/main";
import popup from "./modules/popup";
import variations from "./modules/variations";
import validation from "./modules/validation";


// import "./plugins/infinite-scroll";

jQuery(function () {
    main($, $$);
    popup();
    variations($);
    validation();
});