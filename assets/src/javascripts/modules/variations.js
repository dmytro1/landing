// import $ from "jquery";

export default ($) => {
    window.userChoice = {};

    window.selectOnClick = function (el) {

        let clickedElementDataId = el.getAttribute('data');
        let allSelects = document.querySelectorAll('[data]');

        for (let i in allSelects) {

            if (isNaN(i)) {
                continue;
            }

            let itemSelect = allSelects[i];
            let selectData = itemSelect.attributes.data.value;

            if (selectData === clickedElementDataId) {
                userChoice[itemSelect.name] = itemSelect.options[itemSelect.selectedIndex].value;
            }
        }

        console.log('This is user choice');
        console.log(userChoice);

        compare(userChoice, clickedElementDataId);
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

//Click to Checkout - Slide button


//Create new post
    window.addToCart = function (el) {

        if (el.classList.contains('disabled')) {
            return;
        }

        jQuery('html, body').animate({
            scrollTop: $("#choose").offsetTop - 50
        }, 100);

        let clickedElementDataId = el.getAttribute('data-attr');
        let elementHref = el.getAttribute('href');
        let userOrderText = $('#section-' + clickedElementDataId + ' .user-order');
        let inputName = $('#form-' + clickedElementDataId + ' input[name="first_name"]');
        let inputLastName = $('#form-' + clickedElementDataId + ' input[name="last_name"]');
        let inputEmail = $('#form-' + clickedElementDataId + ' input[name="email"]');
        let inputPhone = $('#form-' + clickedElementDataId + ' input[name="phone"]');

        let title = document.getElementById(el.name).textContent;

        let priceTag = document.getElementById(clickedElementDataId + '-price');
        let price = priceTag.getAttribute('data-price');
        let randomId = Math.trunc((Math.random()*100000));
        let productData = {
            "title": title + ' [' + randomId + ']',
            "content": JSON.stringify(userChoice) + '{"price":' + price + '}',
            "status": 'publish'
        };

        for (let i in userChoice) {
            productData['param_' + i] = userChoice[i];
        }

        productData['param_price'] = price;

        productData['info_first_name'] = inputName.value;
        productData['info_last_name'] = inputLastName.value;
        productData['info_email'] = inputEmail.value;
        productData['info_phone'] = inputPhone.value;

        console.log(productData);

        let content = '';

        for (let i in userChoice) {
            content += "<p>" + i + ": " + userChoice[i] + "</p>";
        }
        content += "<p>Price: " + productData.param_price + "</p>";
        content += "<p>First name: " + productData.info_first_name + "</p>";
        content += "<p>Last name: " + productData.info_last_name + "</p>";
        content += "<p>Phone: " + productData.info_phone + "</p>";

        event.preventDefault();

        let createPost = new XMLHttpRequest();
        createPost.open('POST', location.origin + '/wp-json/wp/v2/shop_order', true);
        createPost.setRequestHeader('X-WP-Nonce', wpApiSettings.nonce);
        // var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=Base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)}return t},decode:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=Base64._utf8_decode(t);return t},_utf8_encode:function(e){e=e.replace(/\r\n/g,"\n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t},_utf8_decode:function(e){var t="";var n=0;var r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}};
        //createPost.setRequestHeader( 'Authorization', 'Basic ' + Base64.encode( 'test:0000' ) );
        createPost.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        createPost.send(JSON.stringify(productData));
        createPost.onreadystatechange = function () {
            if (this.readyState !== 4) return;
            console.log(this.readyState);
            console.log(this.status);
            if (this.status !== 201) {
                console.log('Not 201: ' + this.status + ' ' + this.statusText);
                alert('Not 201: ' + this.status + ' ' + this.statusText);
                return;
            }

            if (this.readyState === 4) {
                if (this.status === 201) {
                    content += '<br>' + this.statusText + ' status: post added';
                    jQuery(elementHref).carousel('next');
                    userOrderText.innerHTML = content;
                    console.log(this.statusText + ' status: post added');
                    alert(this.statusText + ' status: post added');
                }
            }
        };
    };
};