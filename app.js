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


/* Escribe una función que seleccione de manera aleatoria 
uno de los nombres almacenados en el array amigos.
 Usa Math.random() y Math.floor() para obtener un índice aleatorio.

Tareas específicas:

Validar que haya amigos disponibles: 
Antes de sortear, comprobar si el array amigos no está vacío.

Generar un índice aleatorio: 
Usar Math.random() y Math.floor() para seleccionar un índice aleatorio del arreglo.

Obtener el nombre sorteado:
 Utilizar el índice aleatorio para acceder al nombre 
 correspondiente en el arreglo.

Mostrar el resultado: 
Actualizar el contenido del elemento de resultado utilizando 
document.getElementById()  e innerHTML para mostrar el amigo sorteado.  */

function amigoAleatorio() { 
    if (nombreDelAmigo.length === 0) {
        alert("Ingresa el nombre de un amigo");
    } else {      
        let indiceAleatorio = Math.floor((Math.random() * nombreDelAmigo.length));
        let amigoSorteado = nombreDelAmigo[indiceAleatorio];
        document.getElementById("resultado").innerHTML = amigoSorteado;
} 

}
