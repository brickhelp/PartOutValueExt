// Copyright 2019 BrickHelper
"use strict";

let matches;
const regex = /\d+(?=\D*$)/gm;
const tileClassName = "item-list__tile";
const titleClassName = "item-list__title";
const linkAreaCss1 = "item-list__button";
const linkAreaCss2 = "item-list__footer";
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

      var linkArea = tile.getElementsByClassName(linkAreaCss1);
      if (linkArea[0] === undefined) {
        linkArea = tile.getElementsByClassName(linkAreaCss2);
      }

      if (linkArea[0]) {
        addPOVLink(linkArea[0], baseUrl + setNo, povImage, povButtonCss, povButtonText);
      }
    }
  }
}