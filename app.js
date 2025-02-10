// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

let nombreDelAmigo = [];

function agregarAmigo() {
    let nombreAgregado = document.getElementById("amigo").value;
    console.log(nombreAgregado);
    if (nombreAgregado === "") { 
        alert("por favor, ingresa un nombre")
    } else {
        nombreDelAmigo.push(nombreAgregado);
        document.getElementById("amigo").value = "";
    }
} 


function mostrarAmigosAgregados () {
    let obtenerElementoLista = document.getElementById("listaAmigos");
    obtenerElementoLista.innerHTML = "";
    for (let i = 0; i < nombreDelAmigo.length; i++) {
        let elementoLista = document.createElement("li");
        elementoLista.textContent = nombreDelAmigo[i];
        obtenerElementoLista.appendChild(elementoLista);
    }
}
console.log(nombreDelAmigo);

function amigoAleatorio() { 
    if (nombreDelAmigo.length === 0) {
        alert("Ingresa el nombre de un amigo");
    } else {      
        let indiceAleatorio = Math.floor((Math.random() * nombreDelAmigo.length));
        let amigoSorteado = nombreDelAmigo[indiceAleatorio];
        document.getElementById("resultado").innerHTML = amigoSorteado;
} 

}
