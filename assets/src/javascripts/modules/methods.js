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

export {$, $$};

export function scrollElem(property, duration) {
    jQuery('html, body').animate({
        scrollTop: property
    }, duration);
}

export function lazyScroll() {
    event.preventDefault();
    let id = this.getAttribute('href');
    let offset = $(id).offsetTop;
    //document.getElementsByTagName('html')[0].animate({
    if (id === "#choose") {
        offset -= 50;
    }
    scrollElem(offset, 700);

    return false;
}

export function navbarToDefault() {
    $('.navbar-default').style.backgroundColor = 'transparent';
    $('.navbar-brand img').classList.remove('img_responsive');
    $('.navbar-fixed-top').classList.remove('top-nav-collapse');
    let menuItem = $$('.navbar-nav a');
    for (let i = 0; i < menuItem.length; i++) {
        menuItem[i].classList.remove('white');
    }
}

export function navbarToFloat() {
    let navbar = $('.navbar-default');
    navbar.style.backgroundColor = 'rgba(48, 48, 48, 0.5)';
    navbar.classList.add('top-nav-collapse');
    $('.navbar-brand img').classList.add('img_responsive');
    let menuItem = $$('.navbar-nav a');
    for (let i = 0; i < menuItem.length; i++) {
        menuItem[i].classList.add('white');
    }
}

export function setNavStyle() {
    navbarToFloat();
    if (window.pageYOffset < 50) {
        navbarToDefault();
    }
}

export function getOpenedSection(dataID) {
    let section = '#section-' + dataID;
    return {
        section: section,
        h3: section + ' h3',
        form: section + ' form',
        price: section + ' .price',
        quantity: section + ' .quantity',
    }
}

export function getInput(dataID, name) {
    return $(getOpenedSection(dataID).form + ' input[name="' + name + '"]');
}