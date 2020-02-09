// Copyright 2019 BrickHelper
"use strict";

const povButtonCss = "item-list__button-item";

//find featured items in carousel cards
var cardElements = document.getElementsByClassName("a-carousel-card");
if (cardElements) {
    for (var i = 0; i < cardElements.length; i++) {
        var titleElements = cardElements[i].getElementsByTagName("h2");
        if (titleElements.length > 0) {
            var spanElements = titleElements[0].getElementsByTagName("span");
            var titleText = spanElements[0].innerText;

            var setNo = GetSetNoFromText(titleText);
            console.log(`set no: ${setNo}`);

            if (setNo != "") {
                var rows = cardElements[i].getElementsByClassName("a-row");
                if (rows) {
                    addButtons(rows[rows.length - 1], setNo);
                }
            }
        }
    }
}

var dataElements = document.querySelectorAll("[data-asin]");
if (dataElements[0]) {
    for (var i = 0; i < dataElements.length; i++) {
        var titleElements = dataElements[i].getElementsByTagName("h2");
        if (titleElements.length > 0) {
            var spanElements = titleElements[0].getElementsByTagName("span");
            if (spanElements.length > 0) {
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
                            addButtons(rows[rows.length - 1], setNo);
                        }
                        else {
                            var innerDivElements = dataElements[i].getElementsByClassName("sg-col-inner");
                            if (innerDivElements.length > 0) {
                                var containerDivElement = innerDivElements[0].firstElementChild.firstElementChild.firstElementChild;

                                var buttonDiv = document.createElement("div");
                                buttonDiv.className = "a-section a-spacing-none a-spacing-top-mini";

                                containerDivElement.appendChild(buttonDiv);

                                addButtons(buttonDiv, setNo);
                            }
                        }
                    }
                }
            }
        }
    }
}