export default ($) => {
    let userChoice = window.userChoice;
    let dataID = "";
    let quantity, userChoiceText, choicePrice = {};

    window.checkoutBtn = function (el) {
        MainMethods.scrollElem($("#choose").offsetTop - 50, 100);
        dataID = el.getAttribute('data-id');
        quantity = $('#section-' + dataID + ' .quantity');
        userChoiceText = $('#section-' + dataID + ' .user-choice');
        choicePrice = $('#section-' + dataID + ' .price').getAttribute('data-price');

        printUserChoice()
    };

    function printUserChoice() {
        let content = '';
        for (let i in userChoice) {
            content += "<p>" + i + ": " + userChoice[i] + "</p>";
        }
        content += "<p>Price: " + choicePrice;
        content += "<p>Quantity: " + quantity.value;
        userChoiceText.innerHTML = content;
    }
}