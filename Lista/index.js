const lista = document.getElementById('lista');
var ent = document.getElementById("Entradauser");

function agregar(){
    var ent2 = ent.value; //para que pueda leer la entrada y agregarla a la saliida
    var item = document.createElement('li');
    item.appendChild(document.createTextNode(ent2));
    lista.appendChild(item);
    console.log(ent);
}


function borrar(){

}

document.getElementById("add").onclick = agregar;
document.getElementById("delete").onclick = borrar;