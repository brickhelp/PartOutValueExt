const povUrl = "https://www.bricklink.com/catalogPOV.asp?itemType=S&itemSeq=1&itemQty=1&breakType=M&itemCondition=N&incInstr=Y&itemNo=";
const setUrl = "https://www.bricklink.com/v2/catalog/catalogitem.page?S=";
const figsUrl = "https://www.bricklink.com/catalogItemInv.asp?viewItemType=M&S=";
const buttonClass = "social-button";

function addButtons(target, setNo) {
    var btnPov = createButton("POV", buttonClass);
    btnPov.onclick = function () {
        window.open(povUrl + setNo, '_blank');
    };
    target.appendChild(btnPov);

    var btnSet = createButton("Set", buttonClass);
    btnSet.onclick = function () {
        window.open(setUrl + setNo + "-1", '_blank');
    };
    target.appendChild(btnSet);

    var btnFigs = createButton("Figs", buttonClass);
    btnFigs.onclick = function () {
        window.open(figsUrl + setNo + "-1", '_blank');
    };
    target.appendChild(btnFigs);
}

function createButton(btnText, btnClass) {
    var btn = document.createElement("button");
    btn.setAttribute("aria-haspopup", "true");
    btn.setAttribute("class", btnClass);
    btn.innerHTML = btnText;
    return btn;
}