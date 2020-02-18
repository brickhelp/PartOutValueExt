// Copyright 2019 BrickHelper
"use strict";
//console.log('goodwill product listings loading...');

var productList = document.getElementsByClassName("products");
if (productList.length > 0) {
    var liElements = productList[0].getElementsByTagName("li");
    //console.log(`found ${liElements.length} products`);

    for (var i = 0; i < liElements.length; i++) {
        var productDataElement = liElements[i].getElementsByClassName("product-data");
        if (productDataElement.length > 0) {
            var titleElement = productDataElement[0].getElementsByClassName("title");
            if (titleElement.length > 0) {
                var setNo = GetSetNoFromText(titleElement[0].innerText);
                if (setNo.length > 0) {
                    if (setNo.endsWith("-1")) {
                        setNo = setNo.substr(0, setNo.length - 2);
                    }
                    console.log(`set no: ${setNo}`);

                    addButtons(titleElement[0], setNo);
                }
            }
        }
    }
}