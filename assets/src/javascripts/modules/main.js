// import $ from "jquery";

export default ($, $$) => {

    window.on('load', function () {
        $('.loader_inner').style.display = "none";
        $('.loader').style.display = "none";
    });

    function navbarToDefault() {
        $('.navbar-default').style.backgroundColor = 'transparent';
        $('.navbar-brand img').classList.remove('img_responsive');
        $('.navbar-fixed-top').classList.remove('top-nav-collapse');
        let menuItem = $$('.navbar-nav a');
        for (let i = 0; i < menuItem.length; i++) {
            menuItem[i].classList.remove('white');
        }
    }

    function navbarToFloat() {
        $('.navbar-default').style.backgroundColor = 'rgba(48, 48, 48, 0.5)';
        $('.navbar-default').classList.add('top-nav-collapse');
        $('.navbar-brand img').classList.add('img_responsive');
        let menuItem = $$('.navbar-nav a');
        for (let i = 0; i < menuItem.length; i++) {
            menuItem[i].classList.add('white');
        }
    }

    function setNavStyle() {
        navbarToFloat();
        if (window.pageYOffset < 50) {
            navbarToDefault();
        }
    }

    window.toggleSections = function (button) {
        $('.close-btn').classList.add('showing');
        if ($$('.collapse-section.showing').length) {
            $('.close-btn').classList.remove('showing');

        }

        let dataAttribute = button.getAttribute('data-attr');
        let section = $('#section-' + dataAttribute);
        // section.offsetTop = 20;
        // console.log(section.offsetTop);
        let collapseSections = $$('.collapse-section');
        for (let i = 0; i < collapseSections.length; i++) {
            if (!(collapseSections[i].id === section.id)) {
                collapseSections[i].classList.remove('showing');
            }
        }
        section.classList.toggle('showing');
        if ($$('.collapse-section.showing').length) {
            $('.close-btn').classList.add('showing');
        }
    };

    window.checkoutBtn = function (el) {

        let dataID = el.getAttribute('data-checkout');
        let userChoiceText = $('#section-' + dataID + ' .user-choice');
        let choicePrice = document.getElementById(dataID + '-price').getAttribute('data-price');
        let content = '';
        for (let i in userChoice) {
            content += "<p>" + i + ": " + userChoice[i] + "</p>";
        }
        content += "<p>Price: " + choicePrice;
        userChoiceText.innerHTML = content;
    };

    window.on('DOMContentLoaded', function () {
        setNavStyle();
        //Navbar style switcher
        window.on('scroll', function () {
            setNavStyle();
        });

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

        function lazyScroll() {
            event.preventDefault();
            let id = this.getAttribute('href');
            let offset = $(id).offsetTop;
            //document.getElementsByTagName('html')[0].animate({
            if (id === "#choose") {
                offset -= 50;
            }

            jQuery('html, body').animate({
                scrollTop: offset
            }, 700);
            return false;
        }

        // function lazyScroll() {
        //         let id = this.getAttribute('href');
        //         let offset = $(id).offsetTop;
        //     if (this.hash !== "") {
        //         // Prevent default anchor click behavior
        //         event.preventDefault();
        //
        //         // Store hash
        //         var hash = this.hash;
        //
        //         // Using jQuery's animate() method to add smooth page scroll
        //         // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        //         jQuery('html, body').animate({
        //             scrollTop: offset
        //         }, 300, function () {
        //
        //             // Add hash (#) to URL when done scrolling (default click behavior)
        //             //window.location.hash = hash;
        //         });
        //     }
        // }

        // Make sure this.hash has a value before overriding default behavior


        $('.close-btn').on('click', function () {
            let sections = $$('.collapse-section');
            for (let i = 0; i < sections.length; i++) {
                sections[i].classList.remove('showing');
            }
            this.classList.remove('showing');
        });
    });
};
