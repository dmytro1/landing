import {scrollElem, setNavStyle, navbarToFloat, lazyScroll} from './methods';

export default ($, $$) => {
    window.on('load', function () {
        $('.loader_inner').style.display = "none";
        $('.loader').style.display = "none";
    });

    window.on('DOMContentLoaded', function () {
        //Navbar style switcher
        setNavStyle();
        window.on('scroll', function () {
            setNavStyle();
        });

        //FOR MOBILE
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

        //CLOSE BUTTON X
        $('.close-btn').on('click', function () {
            let sections = $$('.collapse-section');
            for (let i = 0; i < sections.length; i++) {
                sections[i].classList.remove('showing');
            }
            this.classList.remove('showing');
        });

        jQuery('[data-slide="prev"]').on('click', function () {
            scrollElem($("#choose").offsetTop - 50, 100);
        });
    });
};