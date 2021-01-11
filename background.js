
console.log('Background script running');

chrome.browserAction.onClicked.addListener(noteThis);
function noteThis(tab){
    var text="Noted this text";
    chrome.tabs.sendMessage(tab.id, text);
}

chrome.contextMenus.create({title: "Note It!", contexts:["selection"], onclick: noteThisText});

var notesArray = [];
var count = 0;

function noteThisText(info)
{
 var selectedstring = info.selectionText;
 var splitedArray= selectedstring.split(" ");
 //console.log(splitedArray[0]);
 var newString = '';
 for(let i=0;i<splitedArray.length;i++){
        newString = newString+' '+splitedArray[i];
        if((i!=0) && (i%20==0)){
          newString+='\n';
        }
 }

 notesArray[count++] = newString;

 selectedstring=newString;

 chrome.storage.local.set({key: notesArray});
  
 chrome.storage.local.get(['key'], function(result) {
    console.log('Value currently is ' + result.key);
  });

  var blob = new Blob([selectedstring],
    {type:"text/plain;charset=UTS-8"}
  );
    saveAs(blob,"Note.txt");

    //console.log(notesArray);

    post({msg:selectedstring});
}

async function post(data) {
  try {
      // Create request to api service
      const req = await fetch('http://localhost:3000/api', {
          method: 'POST',
          headers: { 'Content-Type':'application/json' },
          
          // format the data
          body: JSON.stringify(data),
      });
      
      const res = await req.json();

      // Log success message
      console.log(res);                
  } catch(err) {
      console.log(err.toString());
  }
}

/*
function post(selectedstring){
  console.log("posting!!");
  const data = { selectedstring };
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/JSON'
    },
    body: JSON.stringify(data)
  };
  fetch('/api',options)
  .then(function (data) {
    console.log('Request succeeded with JSON response', data);
  })
  .catch(function (error) {
    console.log('Request failed', error);
  });
}
*/
/*

*/
/*
  
  */