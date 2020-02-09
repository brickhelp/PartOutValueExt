// Copyright 2019 BrickHelper
"use strict";

//get set number out of the title
var titleText = document.getElementById("productTitle").innerText;

var setNo = GetSetNoFromText(titleText);
console.log(`set no: ${setNo}`);

//find featured items in carousel cards
var trPriceElement = document.getElementById("price");
if (trPriceElement) {
    addButtons(trPriceElement, setNo);
}