import main from "../modules/main";

export default ($) => {
    window.checkoutBtn = function (el) {
        MainMethods.scrollElem($("#choose").offsetTop - 50, 100);
        let dataID = el.getAttribute('data-id');
        let quantity = $('#section-' + dataID + ' .quantity');
        let userChoiceText = $('#section-' + dataID + ' .user-choice');
        let choicePrice = document.getElementById(dataID + '-price').getAttribute('data-price');
        let content = '';
        for (let i in choicePrice) {
            content += "<p>" + i + ": " + choicePrice[i] + "</p>";
        }
        content += "<p>Price: " + choicePrice;
        content += "<p>Quantity: " + quantity.value;
        userChoiceText.innerHTML = content;
    };
}