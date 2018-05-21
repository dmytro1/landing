export default () => {
    console.log("boostrap-validator version:", jQuery.fn.validator.Constructor.VERSION);
    jQuery('form').validator({
        focus: false,
        // delay: 3000
    });
};