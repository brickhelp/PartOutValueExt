// Copyright 2019 BrickHelper
"use strict";

var setNo = GetSetNoFromText(document.title);
console.log(`set no: ${setNo}`);

if (setNo != "") {
    var blockMainElement = document.getElementById("id_divBlock_Main");
    if (blockMainElement) {
        var tableBodyElement = blockMainElement.firstElementChild;
        var tdElements = tableBodyElement.getElementsByTagName("td");

        addButtons(tdElements[0], setNo);
    }
}
