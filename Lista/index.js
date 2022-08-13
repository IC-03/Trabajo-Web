const lista = document.getElementById('lista');
var ent = document.getElementById("Entradauser");

function agregar(){
    var ent2 = ent.value.toLowerCase(); //para que pueda leer la entrada y agregarla a la salida
    var item = document.createElement('li');
    
    if (ent2 == "" || ent2 ==" "){
        document.getElementById("warning").innerHTML = "No agregaste nada :/";
    } else {
        item.appendChild(document.createTextNode(ent2));
        lista.appendChild(item);
        document.getElementById("warning").innerHTML = " ";    
    }
}


function borrar(){
    if (lista.hasChildNodes()) {
        lista.removeChild(lista.lastChild); //Hasta la vista baby
        document.getElementById("warning").innerHTML = " ";
      }
    else{
        document.getElementById("warning").innerHTML = "No hay nada más que borrar";
        
    }
}

document.getElementById("add").onclick = agregar;
document.getElementById("delete").onclick = borrar;