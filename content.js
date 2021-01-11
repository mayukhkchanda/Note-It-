console.log('Note It! extension running');

let filename = "savedNotes.html";
chrome.runtime.onMessage.addListener(showMessage);
function showMessage(msg, sender, sendResponse){
    console.log(msg);
    if(msg === "Noted this text"){
        //console.log(msg.text)
        //console.log(msg);
        chrome.storage.local.get(['key'], function(result) {
            console.log('Value currently is ' + result.key);
          });
        ///Store the selected text 
        let src = chrome.extension.getURL(filename);
        chrome.tabs.create({url: src});
    }
}

