// Copyright 2019 BrickHelper
"use strict";

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

  var setNo = GetSetNoFromText(titleText);
  console.log(`set no: ${setNo}`);

  if (setNo != "") {
    var linkArea = tile.getElementsByClassName(linkAreaCss1);
    if (linkArea[0] === undefined) {
      linkArea = tile.getElementsByClassName(linkAreaCss2);
    }

    if (linkArea[0]) {
        addButtons(linkArea[0], setNo);
    }
  }
}