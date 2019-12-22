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