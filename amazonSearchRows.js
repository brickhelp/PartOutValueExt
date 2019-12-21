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
const regex = /\b\d{5}\b/g;
const baseUrl = "https://www.bricklink.com/catalogPOV.asp?itemType=S&itemSeq=1&itemQty=1&itemCondition=N&itemNo=";
const povImage = "images/partout.png";
const povButtonText = "POV";
const povButtonCss = "item-list__button-item";

var dataElements = document.querySelectorAll('[data-asin]');
if (dataElements[0]) {
  for (var i = 0; i < dataElements.length; i++) {
    var titleElements = dataElements[i].getElementsByTagName("h2");
    var spanElements = titleElements[0].getElementsByTagName("span");
    var titleText = spanElements[0].innerText;

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

        console.log(`set no: ${setNo}`);

        var rows = dataElements[i].getElementsByClassName("sg-row");
        if (rows.length > 0) {
          console.log("here1");
          addPOVLink(rows[rows.length-1], baseUrl + setNo, povImage, povButtonCss, povButtonText);
        }
      }
    }
  }
}