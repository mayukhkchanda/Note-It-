
var a = document.createElement("a");
document.body.appendChild(a);
a.style = "display: none";

function saveAs(blob, filename){
  var url = window.URL.createObjectURL(blob);

  //console.log(url);
  a.href = url;
  a.download = filename;
  a.click();
  window.URL.revokeObjectURL(url);
}
