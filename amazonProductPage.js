// Copyright 2019 BrickHelper
"use strict";

const povButtonCss = "item-list__button-item";

//get set number out of the title
var titleText = document.getElementById("productTitle").innerText;

var setNo = GetSetNoFromText(titleText);
console.log(`set no: ${setNo}`);

//find featured items in carousel cards
var trPriceElements = document.getElementById("priceblock_ourprice_row");
if (trPriceElements.length > 0) {
    var tdElement = document.createElement("td");
    tdElement.setAttribute("class", "a-span1");
    trPriceElements.appendChild(tdElement);

    addPOVLink(tdElement, baseUrl + setNo, povImage, povButtonCss, povButtonText);
}