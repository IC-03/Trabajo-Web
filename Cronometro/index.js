const lista = document.getElementById('lista');

function add(){
    let texto = prompt("Ingrese texto");
    if(texto.length <= 10){
        var item = document.createElement('li');
        item.appendChild(document.createTextNode(texto))
        lista.appendChild(item)
    }
    else{
        console.log('No se puede textos de más de 100 letras');
    }
}

document.getElementById('btn').onclick = add;