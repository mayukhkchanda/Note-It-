
let filename = "savedNotes.html";
console.log('pop-up script');
document.getElementById('openSavedNotesLink').addEventListener('click', function(){

    let src = chrome.extension.getURL(filename);

    
    chrome.tabs.create({url: src});
}
)