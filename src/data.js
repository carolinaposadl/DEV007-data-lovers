// --------------------------- HISTORIA DE USUARIO 2: función del filtro ---------------------------
export const filtroPokemones = (data, propiedad) => {
  //El parametro "data" representa un objeto de datos que contiene info. sobre los pokémones, y "propiedad", el tipo de pokémon que se desea filtrar
  const result = data.pokemon.filter((pokemon) => {
    //se crea una variable que se llama resultado para poner los pokemones filtrados en un nuevo arreglo.
    //con el metodo se entra a la data, al objeto pokemon y luego se filtran los pokemones
    //console.log(pokemon.type);
    return pokemon.type.includes(propiedad); //.includes determina si el objeto filtrado contiene la propiedad especificada y devuelve un true si la contiene
  });
  // console.log(result);
  return result; // se retorna el array result que contiene los pokémones filtrados
};

//----------------------------------- HISTORIA DE USUARIO 3: función de ordenamiento ---------------------------
export const ordenarPokemones = (dataPokemon, sortOrder) => { //dataPokemon y sortOrder son los parametros que debe recibir
  dataPokemon.sort(function (a, b) { //empleando método .sort y haciendo una comparación (a,b)
    const lowerCatchRate = a.encounter["base-capture-rate"]; //trayendo las propiedades que utilizaremos -> encounter: base-capture-rate
    //console.log('resultado 1', lowerCatchRate);
    const higherCatchRate = b.encounter["base-capture-rate"];
    //console.log('resultado 2', higherCatchRate); 
    if (sortOrder === "from-lower-to-higher") { //filtro ascendente - si se selecciona de  menor a mayor probabilidad de captura
      if (lowerCatchRate > higherCatchRate) 
        return -1; //-1 indica los últimos índices del array
      if (lowerCatchRate < higherCatchRate)
        return 1; //1 indica los primeros índices del array
    } else if (sortOrder === "from-higher-to-lower") { //filtro descendente - si se selecciona de mayor a menor probabilidad de captura
      if (lowerCatchRate < higherCatchRate) 
        return -1;
      if (lowerCatchRate > higherCatchRate)
        return 1;
    }
    return 0; //en caso de que no se ejecute ninguna función
  });
  return dataPokemon; //se retorna el array ordenado
  //console.log(dataPokemon);
};
