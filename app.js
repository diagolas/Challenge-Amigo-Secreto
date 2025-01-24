// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar amigos
function agregarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nombreAmigo = inputAmigo.value.trim(); // Eliminar espacios en blanco

    if (nombreAmigo === "") {
        alert("Por favor, Digite un nombre.");
        return;
    }

    // Agregar el nombre al array
    amigos.push(nombreAmigo);

    // Limpiar el campo de texto
    inputAmigo.value = "";

    // Actualizar la lista visible
    actualizarListaAmigos();
}

// Función para actualizar la lista de amigos
function actualizarListaAmigos() {
    const listaAmigos = document.getElementById("listaAmigos");

    // Limpiar la lista existente
    listaAmigos.innerHTML = "";

    // Crear elementos <li> para cada amigo
    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Función para sortear un amigo
function sortearAmigo() {
    const resultado = document.getElementById("resultado");

    if (amigos.length === 0) {
        alert("La lista está vacía. Por favor, agregue amigos antes de realizar el sorteo.");
        return;
    }

    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado
    resultado.innerHTML = `<li>${amigoSorteado}</li>`;
}
