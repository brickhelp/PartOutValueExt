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

function populateButtons() {
  const rootClassName = "tablewrap";
  const idClassName = "id";
  const buyClassName = "buy";
  const baseUrl = "https://www.bricklink.com/catalogPOV.asp?itemType=S&itemSeq=1&itemQty=1&itemCondition=N&itemNo=";
  const povButtonText = "POV";
  const povButtonCss = "";

  var rootDiv = document.getElementsByClassName(rootClassName)[0];
  var tableElement = rootDiv.getElementsByTagName("TABLE")[0];
  var rowElements = tableElement.rows;

  console.log(`row count: ${rowElements.length}`);

  for (var i = 0; i < rowElements.length; i++) {
    var row = rowElements[i];
    var idElement = row.getElementsByClassName(idClassName)[0];
    var buttonElement = row.getElementsByClassName(buyClassName)[0];

    var setNo = idElement.innerText;
    addPOVButton(buttonElement, baseUrl + setNo, povButtonCss, povButtonText);
  }
}

function waitForElement(className, callBack){
  console.log("waiting...");

  window.setTimeout(function(){
    var element = document.getElementsByClassName(className);
    if(element){
      callBack();
    }else{
      waitForElement(className, callBack);
    }
  }, 500)
}
//wait until the rows of the price table have loaded
waitForElement("originalprice", populateButtons);