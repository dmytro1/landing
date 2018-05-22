export default ($) => {
    window.addOrder = function (el) {
        let userChoice = window.userChoice;
        if (el.classList.contains('disabled')) {
            return;
        }
        MainMethods.scrollElem($("#choose").offsetTop - 50, 100);

        let dataID = el.getAttribute('data-id');
        let quantity = $('#section-' + dataID + ' .quantity');
        let elementHref = el.getAttribute('href');
        let userOrderText = $('#section-' + dataID + ' .user-order');
        let inputName = $('#form-' + dataID + ' input[name="first_name"]');
        let inputLastName = $('#form-' + dataID + ' input[name="last_name"]');
        let inputEmail = $('#form-' + dataID + ' input[name="email"]');
        let inputPhone = $('#form-' + dataID + ' input[name="phone"]');

        let title = document.getElementById(el.name).textContent;

        let priceTag = document.getElementById(dataID + '-price');
        let price = priceTag.getAttribute('data-price');
        let randomId = Math.trunc((Math.random() * 100000));
        let productData = {
            "title": title + ' [' + randomId + ']',
            "content": JSON.stringify(userChoice) + '{"price":' + price + ', "quantity":' + quantity.value + '}',
            "status": 'publish'
        };

        for (let i in userChoice) {
            productData['param_' + i] = userChoice[i];
        }

        productData['param_price'] = price;
        productData['param_quantity'] = quantity.value;
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
        content += "<p>Quantity: " + quantity.value + "</p>";
        content += "<p>Total price: " + (quantity.value * productData.param_price) + "</p>";
        content += "<p>First name: " + productData.info_first_name + "</p>";
        content += "<p>Last name: " + productData.info_last_name + "</p>";
        content += "<p>Phone: " + productData.info_phone + "</p>";

        event.preventDefault();


        fetch('/wp-json/wp/v2/shop_order', {
            body: JSON.stringify(productData),
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
                    content += '<br>' + response.statusText + ' status: post added';
                    jQuery(elementHref).carousel('next');
                    userOrderText.innerHTML = content;
                    console.log(response.statusText + ' status: post added');
                    alert(response.statusText + ' status: post added');
                }
            })
            .catch(alert);
    };
};