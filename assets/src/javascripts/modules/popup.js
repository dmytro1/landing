import $ from "jquery";

export default () => {
    $('#next-personal').on('click', function () {
        $('#js-product-info').addClass('slide-out-left');
        $('#js-personal-info').addClass('slide-in-right');
    });
    $('#prev-product-info').on('click', function () {
        $('#js-personal-info').removeClass('slide-in-right');
        $('#js-product-info').removeClass('slide-out-left');
    });
};




