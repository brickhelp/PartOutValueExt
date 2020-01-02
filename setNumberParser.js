let matches;
const regex = /\b\d{5}\b/g;

function GetSetNoFromText(textSource) {
    var setNo = "";

    if (textSource.toLowerCase().includes("lego")) {
        while ((matches = regex.exec(textSource)) !== null) {
            // This is necessary to avoid infinite loops with zero-width matches
            if (matches.index === regex.lastIndex) {
                regex.lastIndex++;
            }
    
            setNo = matches.join();
            if (setNo.length < 5 || setNo.length > 5) {
                continue;
            }
        }
    }

    return setNo;
}