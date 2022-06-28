var n = new Number,
estPrem = new Boolean(true);

function tester(){
    n=Number(document.test.nbre.value);
    estPrem=true;
    let ok = "c'est un nombre premier";
    let nook = "ceci n'est pas un nbre premier";
    for(j=2;j<n;j++) {
        if(n%j==0) estPrem=false;
    }
    document.test.nbre.value =estPrem;
    let html = document.getElementById("reponse").innerHTML = ok;
    document.body.style.backgroundColor = "green";
}

  else {
    document.body.style.backgroundColor = "red";
    let html = document.getElementById("reponse").innerHTML = nook
  }


  
    //document.write(pasok); document.test.rep.value=estPrem; let html = document.getElementById("reponse").innerHTML ; if (estPrem){ document.getElementById("reponse").innerHTML = ok; } else{document.getElementById("reponse").innerHTML = nook} }
// Crée un tableau en JSS
/*function nouveautableau() {
  var table = document.createElement("table");
  table.innerHTML = "<tr> <td> 123456</td><td>789101112 </td> </tr> ";
  document.getElementById("y").appendChild(table);
  }

var n = new Number,
estPrem = new Boolean(true);
function tester()
{

n=Number(document.test.nbre.value);
estPrem=true;
let ok = "c'est un nombre premier";
let nook = "ceci n'est pas un nbre premier";
var img = document.createElement("img");
img.src = "test.gif";

for(j=2;j<n;j++)
{
if(n%j==0)estPrem=false;
} 
document.test.rep.value=estPrem;
let html = document.getElementById("reponse").innerHTML
if (estPrem)
{
  document.getElementById("reponse").innerHTML = ok;
  document.getElementById("reponse").style.backgroundColor = "green";
  var div = document.getElementById("x");
  div.appendChild(img);
} 

else
{
  document.getElementById("reponse").innerHTML = nook
  document.getElementById("reponse").style.backgroundColor = "red";
}
}
*/



