const namePokemon = document.getElementById("pokemonName");
const typePokemon = document.getElementById("pokemonType");
const imagePokemon = document.getElementById("pokemonImage");
let intervalo;

// Función para obtener un Pokémon aleatorio
const obtenerPokemonAleatorio = async () => {
    // Obtener un número aleatorio entre 1 y 1000 
    const idPokemon = Math.floor(Math.random() * 500) + 1;

    const peticionGet = await fetch(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`);
    const datosPokemon = await peticionGet.json();

    const pokeImage = datosPokemon.sprites.other.dream_world.front_default;
    const pokeName = datosPokemon.name;
    const pokeType = datosPokemon.types[0].type.name;

    namePokemon.textContent = pokeName;
    typePokemon.textContent = pokeType;
    imagePokemon.src = pokeImage;
}

// Función para reiniciar el intervalo
const reiniciarIntervalo = () => {
    clearInterval(intervalo); // Detener el intervalo actual
    intervalo = setInterval(obtenerPokemonAleatorio, 30000); // Reiniciar el intervalo
};

// Funcion para obtener un Pokemon al cargar la página
obtenerPokemonAleatorio();
reiniciarIntervalo();



// Botón para cambiar manualmente el Pokémon
const nextPokemonBtn = document.getElementById("nextPokemonBtn");
nextPokemonBtn.addEventListener("click", () => {
    obtenerPokemonAleatorio();
    reiniciarIntervalo(); 
});