document.getElementById("reloj").innerHTML="00:00:00";
let sec = 0;
let min = 0;
let hrs = 0;
let t;

function Cronom(){
    sec++;
    if (sec >= 60) {
        sec = 0;
        min++;
        if (min >= 60) {
            min = 0;
            hrs++;
        }
    }
}

function tempo() {
    t = setTimeout(Iniciar, 1000); //permite temporizar la ejecución de una determinada función, milisegundo
}

function Iniciar() {
    
    Cronom(); //nos trae la configuración del tiempo 

    //para que el tiempo se cuente 01, 02, 03 antes de 9, Tecnicamente el formato de la hora pues
    reloj.textContent = (hrs > 9 ? hrs : "0" + hrs) //formato de la hora 0x:00:00
        	 + ":" + (min > 9 ? min : "0" + min) //formato de los mins 00:0x:00
       		 + ":" + (sec > 9 ? sec : "0" + sec); //formato de los sec 00:00:0x
    
    tempo(); //para que el conteo avance cada 1000ms
}

function stopp() {
    clearTimeout(t);//borra un temporizador configurado con el método setTimeout ()
}

function resett() {
    document.getElementById("reloj").innerHTML="00:00:00"
    sec = 0; min = 0; hrs = 0; //resetear esto también para que no continue donde estaba
    clearTimeout(t);
}

document.getElementById("Init").onclick = tempo;
document.getElementById("Stop").onclick = stopp;
document.getElementById("Reset").onclick = resett;