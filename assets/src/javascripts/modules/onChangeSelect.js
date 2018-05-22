export default ($) => {
    window.userChoice = {};

    window.onChangeSelect = function (el) {
        let userChoice = window.userChoice;
        let dataID = el.getAttribute('data');
        let allSelects = document.querySelectorAll('[data]');

        for (let i in allSelects) {

            if (isNaN(i)) {
                continue;
            }

            let itemSelect = allSelects[i];
            let selectData = itemSelect.attributes.data.value;

            if (selectData === dataID) {
                userChoice[itemSelect.name] = itemSelect.options[itemSelect.selectedIndex].value;
            }
        }

        console.log('This is user choice');
        console.log(userChoice);

        compare(userChoice, dataID);
    };

    function compare(userChoice, dataID) {

        let printPrice = document.getElementById(dataID + '-price');
        let printMessage = $('#message-' + dataID);
        let checkoutButton = $("#section-" + dataID + " button[data-slide='next']");

        for (let parameter in userChoice) {
            if (userChoice[parameter] === "") {
                printPrice.setAttribute('data-price', '');
                printPrice.innerHTML = "&nbsp;";
                console.log('Select the ' + parameter);
                printMessage.innerHTML = 'Select the ' + parameter;
                checkoutButton.disabled = true;
                return;
            }
        }

        let variations = variationsObject.dataById[dataID];

        console.log('This is Variations');
        console.log(variations);

        for (let i in variations) {
            let variation = variations[i];
            let variationsWithoutPrice = {};

            for (let parameter in variation) {
                variationsWithoutPrice[parameter] = variation[parameter];
            }

            delete variationsWithoutPrice.price;

            if (JSON.stringify(userChoice) === JSON.stringify(variationsWithoutPrice)) {
                console.log(variation.price);
                printPrice.setAttribute('data-price', variation.price);
                printPrice.innerHTML = '<h3 class="red-price">' + variation.price + '$</h3>';
                printMessage.innerHTML = "";
                checkoutButton.disabled = false;
                return;
            } else {
                printPrice.setAttribute('data-price', '');
                console.log('Variation is not found');
                printPrice.innerHTML = '<h3>- -</h3>';
                printMessage.innerHTML = 'Variation is not found';
                checkoutButton.disabled = true;
            }
        }
    }
};