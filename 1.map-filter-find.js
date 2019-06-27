const getPokeNames = (pokemons) => {
    return pokemons.map(pokemon => pokemon.name)
}

const getPokemonById = (pokemons, id) => {
    return pokemons.find(pokemon => pokemon.id=== id)
}

module.exports = {
    getPokeNames,
    getPokemonById,
}