// import $ from "jquery";

export default ($, $$) => {

    window.MainMethods = {
        scrollElem: function (property, duration) {
            jQuery('html, body').animate({
                scrollTop: property
            }, duration);
        },
        lazyScroll: function () {
            event.preventDefault();
            let id = this.getAttribute('href');
            let offset = $(id).offsetTop;
            //document.getElementsByTagName('html')[0].animate({
            if (id === "#choose") {
                offset -= 50;
            }
            MainMethods.scrollElem(offset, 700);

            return false;
        },
        navbarToDefault: function () {
            $('.navbar-default').style.backgroundColor = 'transparent';
            $('.navbar-brand img').classList.remove('img_responsive');
            $('.navbar-fixed-top').classList.remove('top-nav-collapse');
            let menuItem = $$('.navbar-nav a');
            for (let i = 0; i < menuItem.length; i++) {
                menuItem[i].classList.remove('white');
            }
        },
        navbarToFloat: function () {
            $('.navbar-default').style.backgroundColor = 'rgba(48, 48, 48, 0.5)';
            $('.navbar-default').classList.add('top-nav-collapse');
            $('.navbar-brand img').classList.add('img_responsive');
            let menuItem = $$('.navbar-nav a');
            for (let i = 0; i < menuItem.length; i++) {
                menuItem[i].classList.add('white');
            }
        },
        setNavStyle: function () {
            this.navbarToFloat();
            if (window.pageYOffset < 50) {
                MainMethods.navbarToDefault();
            }
        },
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
            let sections = $$('.collapse-section');
            for (let i = 0; i < sections.length; i++) {
                sections[i].classList.remove('showing');
            }
            this.classList.remove('showing');
        });

        jQuery('[data-slide="prev"]').on('click', function () {
            MainMethods.scrollElem($("#choose").offsetTop - 50, 100);
        });
    });
};