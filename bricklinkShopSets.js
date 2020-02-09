// Copyright 2019 BrickHelper
"use strict";

var articles = document.getElementsByTagName("article");
for (var i = 0; i < articles.length; i++) {    
    var descElements = articles[i].getElementsByClassName("description");
    if (descElements.length > 0) {
        var ulElements = descElements[0].getElementsByTagName("ul");
        if (ulElements.length > 0) {
            var liElements = ulElements[0].getElementsByTagName("li");
            if (liElements.length > 3) {
                if (liElements[1].firstElementChild.innerText === 'Sets') {
                    var setNo = liElements[liElements.length-1].firstElementChild.innerText;
                    if (setNo.endsWith("-1")) {
                        setNo = setNo.substr(0, setNo.length - 2);
                    }
                    console.log(`set no: ${setNo}`);

                    addButtons(descElements[0], setNo);
                }
            }
        }
    }
}