import {scrollElem, getOpenedSection, getInput} from './methods';

export default ($) => {
    let userChoice = App.userChoice;
    let dataID, openedSectionSelector, elementHref, quantity = "";
    let randomId = Math.trunc((Math.random() * 100000));
    let names = variationsObject.inputNames;
    let placeholders = variationsObject.inputPlaceholders;

    App.addOrder = function (el) {
        if (el.classList.contains('disabled')) {
            return;
        }

        dataID = el.getAttribute('data-id');
        openedSectionSelector = getOpenedSection(dataID);
        elementHref = el.getAttribute('href');

        let title = $(openedSectionSelector.h3).innerText;
        let price = $(openedSectionSelector.price).getAttribute('data-price');
        quantity = $(openedSectionSelector.quantity);

        let productData = {
            "title": title + ' [' + randomId + ']',
            "content": JSON.stringify(userChoice) + '{"price":' + price + ', "quantity":' + quantity.value + '}',
            "status": 'publish'
        };

        for (let i = 0; i < names.length; i++) {
            let value = getInput(dataID, names[i]).value;
            productData['info_' + names[i]] = value;
        }

        for (let i in userChoice) {
            productData['param_' + i] = userChoice[i];
        }

        productData['param_price'] = price;
        productData['param_quantity'] = quantity.value;

        console.log('This is order data: ', productData);
        event.preventDefault();
        fetchData(productData);
    };

    function fetchData(data) {
        fetch('/wp-json/wp/v2/shop_order', {
            body: JSON.stringify(data),
            // var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=Base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)}return t},decode:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=Base64._utf8_decode(t);return t},_utf8_encode:function(e){e=e.replace(/\r\n/g,"\n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t},_utf8_decode:function(e){var t="";var n=0;var r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}};
            //createPost.setRequestHeader( 'Authorization', 'Basic ' + Base64.encode( 'test:0000' ) );
            headers: {
                'X-WP-Nonce': wpApiSettings.nonce,
                'content-type': 'application/json'
            },
            method: 'POST'
        })
            .then(function (response) {
                console.log(response);

                if (response.status !== 201) {
                    console.log('Not 201: ' + response.status + ' ' + response.statusText);
                    alert('Not 201: ' + response.status + ' ' + response.statusText);
                    return;
                }

                if (response.status === 201) {
                    printOrderText(data, response);
                    jQuery(elementHref).carousel('next');
                    scrollElem($("#choose").offsetTop - 50, 100);
                    console.log(response.statusText + ' status: post added');
                    alert(response.statusText + ' status: post added');
                }
            })
            .catch(alert);
    }

    function printOrderText(data, response) {
        let content = '';
        let userOrderText = $(openedSectionSelector.section + ' .user-order');

        for (let i in userChoice) {
            content += "<p>" + i + ": " + userChoice[i] + "</p>";
        }
        content += "<p>Price: " + data.param_price + "</p>";
        content += "<p>Quantity: " + quantity.value + "</p>";
        content += "<p>Total price: " + (quantity.value * data.param_price) + "</p>";

        for (let i = 0; i < names.length; i++) {
            content += "<p>" + placeholders[i] + ": " + data['info_' + names[i]] + "</p>";
        }

        content += '<br>' + response.statusText + ' status: post added';
        userOrderText.innerHTML = content;
    }
};