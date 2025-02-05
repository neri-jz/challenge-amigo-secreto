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


/* Crea una función que recorra el array amigos y agregue cada nombre como un elemento <li> dentro de una lista HTML. Usa innerHTML para limpiar la lista antes de agregar nuevos elementos.

Tareas específicas:

Obtener el elemento de la lista: Utilizar document.getElementById() o document.querySelector() para seleccionar la lista donde se mostrarán los amigos.

Limpiar la lista existente: Establecer lista.innerHTML = "" para asegurarse de que no haya duplicados al actualizar.

Iterar sobre el arreglo: Usa un bucle for para recorrer el arreglo amigos y crear elementos de lista (<li>) para cada título.

Agregar elementos a la lista: Para cada amigo, crear un nuevo elemento de lista.


 */

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
//console.log(mostrarAmigosAgregados());
