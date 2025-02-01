// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

let nombreDelAmigo = [];


function agregarAmigo() {
    let nombre = document.getElementById("amigo").value;
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
    } else {
        nombreDelAmigo.push(nombre);
        document.getElementById("amigo").value = "";
    }
}



