jQuery(function ($) {
    $('#publish').click(function () {
            if (!($('#meta_price').val() || $('#variations_price0').val())) {
                alert('Please set the price');
                return false;
            }
        }
    )
});