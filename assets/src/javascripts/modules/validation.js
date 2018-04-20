import $ from "jquery";

export default () => {
    console.log("boostrap-validator version:", jQuery.fn.validator.Constructor.VERSION);
    $('form').validator({
        focus: false,
        // delay: 3000
    });
};