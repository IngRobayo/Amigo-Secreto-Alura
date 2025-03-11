
// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
var amigos = []; // Array para almacenar los nombres

function agregarAmigo() {
    let nombre = document.getElementById('amigo').value.trim(); // Obtener y limpiar el input

    if (nombre) {
        if (amigos.includes(nombre)) { // Verificar si el nombre ya está en la lista
            alert("Este nombre ya está en la lista.");
            return;
        }

        amigos.push(nombre); // Agregar el nombre al array
        console.log(amigos);

        actualizarLista(); // Actualizar la lista en el HTML
        document.getElementById('amigo').value = ""; // Limpiar el input
    } else {
        alert("Por favor, ingresa un nombre válido.");
    }
}

function actualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ""; // Limpiar la lista antes de actualizar

    for (let amigo of amigos) {
        let li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length); // Generar índice aleatorio
    let amigoSorteado = amigos[indiceAleatorio]; // Obtener el nombre sorteado

    document.getElementById('resultado').innerHTML = `Amigo sorteado: ${amigoSorteado}`; // Mostrar resultado
}
