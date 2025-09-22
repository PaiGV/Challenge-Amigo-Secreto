// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaDeAmigos = [];

function agregarAmigo() {
    let amigoInput = document.getElementById("amigo");
    let nombreAmigo = amigoInput.value.trim();
    
    if (nombreAmigo === "") {
    alert("Por favor, ingresa un nombre para añadir a la lista.");
    return;
    
}

listaDeAmigos.push(nombreAmigo);

let listaAmigosUI = document.getElementById("listaAmigos");

let nuevoAmigoItem = document.createElement("li");
    nuevoAmigoItem.textContent = nombreAmigo;

listaAmigosUI.appendChild(nuevoAmigoItem);
    amigoInput.value = "";
}

function sortearAmigo() {

    if (listaDeAmigos.length === 0) {
    alert(
        "No hay amigos en la lista. Por favor, agrega algunos nombres primero."
    );
    return;
}

let indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
let amigoSorteado = listaDeAmigos[indiceAleatorio];
let resultadoUI = document.getElementById("resultado");

resultadoUI.textContent = "El amigo secreto sorteado es: " + amigoSorteado;
}
