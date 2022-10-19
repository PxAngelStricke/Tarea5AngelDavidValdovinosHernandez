var monAguila = "Aguila";
var monSol = "Sol";
var ganaste = 0;
var perdiste = 0;

function monedaAguila(){
    setTimeout(function(){
        var opcion1 = Math.floor(Math.random() * 2) + 1;

        if(opcion1 == 1){
            ganaste++;
            document.querySelector("h1").innerHTML = ("Escogiste: " + monAguila + "<br></br>" + "La maquina escogió: Aguila <br></br>Vas ganando: " + ganaste + " - Vas perdiendo: " + perdiste);
        } else {
            perdiste++;
            document.querySelector("h1").innerHTML = ("Escogiste: " + monAguila + "<br></br>" + "La maquina escogió: Sol <br></br>Vas ganando: " + ganaste + " - Vas perdiendo: " + perdiste);
        }
    }, 200);
}
function monedaSol(){
    setTimeout(function(){
        var opcion1 = Math.floor(Math.random() * 2) + 1;

        if(opcion1 == 1){
            perdiste++;
            document.querySelector("h1").innerHTML = ("Escogiste: " + monSol + "<br></br>" + "La maquina escogió: Aguila <br></br>Vas ganando: " + ganaste + " - Vas perdiendo: " + perdiste);
        } else {
            ganaste++;
            document.querySelector("h1").innerHTML = ("Escogiste: " + monSol + "<br></br>" + "La maquina escogió: Sol <br></br>Vas ganando: " + ganaste + " - Vas perdiendo: " + perdiste);
        }
    }, 200);
}
function reiniciar(){
    setTimeout(function(){
        location.reload();
    }, 200);
}