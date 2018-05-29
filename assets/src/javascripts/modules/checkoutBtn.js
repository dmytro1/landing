import {scrollElem, getOpenedSection} from './methods';

export default ($) => {
    let userChoice = window.userChoice;
    let dataID = "";
    let quantity, userChoiceText, choicePrice, openedSectionSelector = {};

    window.checkoutBtn = function (el) {
        scrollElem($("#choose").offsetTop - 50, 100);
        dataID = el.getAttribute('data-id');
        openedSectionSelector = getOpenedSection(dataID);
        quantity = $(openedSectionSelector.quantity);
        userChoiceText = $(openedSectionSelector.section + ' .user-choice');
        choicePrice = $(openedSectionSelector.price).getAttribute('data-price');

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