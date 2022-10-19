let calif1, calif2, calif3;
var promedio;
calif1 = parseFloat(window.prompt("Ingrese su primer calificacion: ", "0"));
calif2 = parseFloat(window.prompt("Ingrese su primer calificacion: ", "0"));
calif3 = parseFloat(window.prompt("Ingrese su primer calificacion: ", "0"));
promedio = parseFloat((calif1 + calif2 + calif3)/3);
if(promedio>=5){
    document.write(`<br> </br> <h2 style="color: green;">tienes: ${promedio} de promedio, aprobaste :D</h2>`);
} else if (promedio<5){
    document.write(`<br> </br> <h2 style="color: red;">tienes: ${promedio} de promedio, reprobaste :C</h2>`);
}
