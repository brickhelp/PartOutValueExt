// Copyright 2019 BrickHelper
"use strict";

let matches;
const regex = /\b\d{5}\b/g;
const povButtonCss = "item-list__button-item";

var setNo = "";

//get set number out of the title
var titleText = document.getElementById("productTitle").innerText;
if (titleText.toLowerCase().includes("lego")) {
    while ((matches = regex.exec(titleText)) !== null) {
        // This is necessary to avoid infinite loops with zero-width matches
        if (matches.index === regex.lastIndex) {
            regex.lastIndex++;
        }

        setNo = matches.join();
        if (setNo.length < 5 || setNo.length > 5) {
            continue;
        }

        console.log(`set no: ${setNo}`);
    }
}

//find featured items in carousel cards
var trPriceElements = document.getElementById("priceblock_ourprice_row");
if (trPriceElements.length > 0) {
    var tdElement = document.createElement("td");
    tdElement.setAttribute("class", "a-span1");
    trPriceElements.appendChild(tdElement);

    addPOVLink(tdElement, baseUrl + setNo, povImage, povButtonCss, povButtonText);
}