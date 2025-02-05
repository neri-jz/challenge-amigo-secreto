// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

let nombreDelAmigo = [];

/* Desarrolla una función, que permita al usuario ingresar un nombre en el campo de texto y
 añadirlo a la lista de amigos creada anteriormente.

Tareas específicas:



Capturar el valor del campo de entrada: Utilizar document.getElementById o document.querySelector 
para obtener el texto ingresado por el usuario.

Validar la entrada: Implementar una validación para asegurarse de que el campo no esté vacío. 
Si está vacío, mostrar un alert con un mensaje de error: "Por favor, inserte un nombre."

Actualizar el array de amigos: Si el valor es válido, añadirlo al arreglo que almacena los nombre de amigos 
usando el método.push().

Limpiar el campo de entrada: Después de añadir el nombre, 
restablecer el campo de texto a una cadena vacía. */

function agregarAmigo() {
    let nombreAgregado = document.getElementById("amigo").value;
    console.log(nombreAgregado);
    if (nombreAgregado === "") { 
        alert("por favor, ingresa un nombre")
    } else {
        nombreDelAmigo.push(nombreAgregado);
        document.getElementById("amigo").value = "";
    }
    return;
}

console.log(nombreDelAmigo);

