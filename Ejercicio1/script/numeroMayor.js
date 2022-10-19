let numero1, numero2;
numero1 = parseFloat(window.prompt("Introduce el primer numero: ", "0"));
numero2 = parseFloat(window.prompt("Introduce el segundo numero: ", "0"));
if(numero1 > numero2) {
    document.write(`<br/> <br/> <h2 style="color: red;"> El numero mas grande es: ${numero1} </h2>`);
} else if (numero1 < numero2) {
    document.write(`<br/> <br/> <h2 style="color: red;"> El numero mas grande es: ${numero2} </h2>`);
}