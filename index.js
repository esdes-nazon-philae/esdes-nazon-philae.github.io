console.log(document);

var name = "Philaé";

function changeName(newName) {
    name = newName;
    alert("Coucou");
}

function changeClass() {
    var button = document.getElementById("myButton");
    if (button.className == "rotate") {
        button.className= "";
    } else {
    button.className= "rotate" ;
    }
    
}
 