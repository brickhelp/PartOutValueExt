// Copyright 2019 BrickHelper
"use strict";

function addPOVLink(target, url, imgUrl, cssClass, text) {
  var aTag = document.createElement("a");
  aTag.setAttribute("class", cssClass);
  aTag.setAttribute("href", url);
  aTag.setAttribute("target", "_blank");


  if (imgUrl) {
    var imgTag = document.createElement("img");
    imgTag.setAttribute("src", chrome.extension.getURL(imgUrl));
    imgTag.setAttribute("alt", text);
    aTag.appendChild(imgTag);
  } else {
    aTag.innerText = text;
  }

  target.appendChild(aTag);
}

let matches;
const regex = /\d+(?=\D*$)/gm;
const tileClassName = "item-list__tile";
const titleClassName = "item-list__title";
const baseUrl = "https://www.bricklink.com/catalogPOV.asp?itemType=S&itemSeq=1&itemQty=1&itemCondition=N&itemNo=";
const povImage = "images/partout.png";
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

      var linkArea = tile.getElementsByClassName("item-list__button");
      if (linkArea[0] === undefined) {
        linkArea = tile.getElementsByClassName("item-list__footer");
      }

      if (linkArea[0]) {
        addPOVLink(linkArea[0], baseUrl + setNo, povImage, povButtonCss, povButtonText);
      }
    }
  }
}