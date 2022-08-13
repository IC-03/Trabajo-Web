const lista = document.getElementById('lstinput');

function add(){
    let texto = document.getElementById("Entradauser");
    var item = document.createElement('li');
    item.appendChild(document.createTextNode(texto));
    lista.appendChild(item);
}

document.getElementById("add").onclick = add;