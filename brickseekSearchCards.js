// Copyright 2019 BrickHelper
"use strict";

function addPOVButton(target, url, cssClass, text) {
  var aTag = document.createElement("a");
  aTag.setAttribute("class", cssClass);
  aTag.setAttribute("href", url);
  aTag.setAttribute("target", "_blank");
  aTag.innerText = text;
  target.appendChild(aTag);
}

let matches;
const regex = /\d+(?=\D*$)/gm;
const tileClassName = "item-list__tile";
const titleClassName = "item-list__title";
const baseUrl = "https://www.bricklink.com/catalogPOV.asp?itemType=S&itemSeq=1&itemQty=1&itemCondition=N&itemNo=";
const povButtonText = "POV";
const povButtonCss = "item-list__button-item";

var tileElements = document.getElementsByClassName(tileClassName);
for (var i = 0; i < tileElements.length; i++) {
  var tile = tileElements[i];
  var titleElements = tile.getElementsByClassName(titleClassName);
  var titleText = titleElements[0].innerText;

  if (titleText.toLowerCase().includes("lego")) {
    while ((matches = regex.exec(titleText)) !== null) {
      // This is necessary to avoid infinite loops with zero-width matches
      if (matches.index === regex.lastIndex) {
        regex.lastIndex++;
      }

      var setNo = matches.join();
      if (setNo.length < 5 || setNo.length > 5) {
        continue;
      }
      
      var buttonArea = tile.getElementsByClassName("item-list__button")[0];
      addPOVButton(buttonArea, baseUrl + setNo, povButtonCss, povButtonText);
    }
  }
}