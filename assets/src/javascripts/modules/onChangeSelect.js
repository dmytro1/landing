import {getOpenedSection} from "./methods";

export default ($, $$) => {
    let userChoice = App.userChoice = {};
    let dataID, openedSectionSelector = "";
    let printPrice, printMessage, checkoutButton = {};

    App.onChangeSelect = function (el) {
        dataID = el.getAttribute('data-id');
        openedSectionSelector = getOpenedSection(dataID);
        printPrice = $(openedSectionSelector.price);
        printMessage = $(openedSectionSelector.section + ' .error-message');
        checkoutButton = $(openedSectionSelector.section + " button[data-slide='next']");

        let allSelects = $$(openedSectionSelector.section + ' select');

        for (let i = 0; i < allSelects.length; i++) {
            let itemSelect = allSelects[i];
            userChoice[itemSelect.name] = itemSelect.options[itemSelect.selectedIndex].value;
        }
        console.log('This is user choice: ', userChoice);

        compareAvailability(userChoice, dataID);
    };

    function compareAvailability(userChoice, dataID) {
        for (let parameter in userChoice) {
            if (userChoice.hasOwnProperty(parameter) && userChoice[parameter] === "") {
                return missSelect(parameter);
            }
        }

        let variations = variationsObject.dataById[dataID];

        console.log('This is Variations: ', variations);

        for (let i = 0; i < variations.length; i++) {
            let variation = variations[i];
            let variationsWithoutPrice = {};

            Object.assign(variationsWithoutPrice, variation);

            delete variationsWithoutPrice.price;

            if (JSON.stringify(userChoice) === JSON.stringify(variationsWithoutPrice)) {
                return matchVariation(variation);
            }

            missVariation();
        }
    }

    function missSelect(parameter) {
        printPrice.setAttribute('data-price', '');
        printPrice.innerHTML = "&nbsp;";
        printMessage.innerHTML = 'Select the ' + parameter;
        checkoutButton.disabled = true;
        console.log('Select the ' + parameter);
    }

    function missVariation() {
        printPrice.setAttribute('data-price', '');
        printPrice.innerHTML = '<h3>- -</h3>';
        printMessage.innerHTML = 'Variation is not found';
        checkoutButton.disabled = true;
        console.log('Variation is not found');
    }

    function matchVariation(variation) {
        printPrice.setAttribute('data-price', variation.price);
        printPrice.innerHTML = '<h3 class="red-price">' + variation.price + '$</h3>';
        printMessage.innerHTML = "";
        checkoutButton.disabled = false;
        console.log(variation.price);
    }
};