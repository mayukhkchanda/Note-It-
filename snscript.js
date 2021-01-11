
  var childElement, appendChildElement, parentElement;
  parentElement = document.getElementById('para');
  
 function setup(){
    let bgpage = chrome.extension.getBackgroundPage();
    let array = bgpage.notesArray;

    console.log(array);
    let count =0;
    for(let sentence of array){
      childElement = document.createElement('p');
      appendChildElement = parentElement.appendChild(childElement);
      appendChildElement.innerHTML ="Note "+ (++count) +": \r"+ sentence;
    }

  };

  var showbtn = document.querySelector('#display');
 showbtn.addEventListener('click',clicklistener);

 function clicklistener(){
     console.log('loading..');
  
     fetch('http://localhost:3000/api').then(function(response) {
      return response.json();
    }).then(displayText)
    .catch(function(err) {
      console.log(err);
    });

 }

 function displayText(data){
   console.log(data);
   var defMsg = 'Oh O! Seems like there are no saved notes to display at the moment.';
   var paragraph =document.getElementById('para');

   if(data.body.length == 0){
    paragraph.innerText = defMsg;
   }

   else{
    var texttodisplay = "";
    for(let i =0; i<data.body.length;i++){
        texttodisplay += '\n\rNote#'+data.body[i].id+'\n'+data.body[i].savednotes;
    }  
    paragraph.innerText = texttodisplay;
  }
 }


