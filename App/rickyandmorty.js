//Prueba Tecnica Auronix para intership
//Autor: Omar Yair Arellano Polo

//URL BASE DE LA API ORIGINAL
const API_URL = "https://rickandmortyapi.com/api/character";

//Función asincrona para obtener los datos de los personajes
async function getcharacters() {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("fetch error");
  }

  const data = await response.json();
  //Linea para probar en consola si funciona
  //console.log(data.results);

  return data.results;
}

//Función para filtrar los personajes vivos
function filtercharacters(Characters){
    return Characters.filter(c => c.status === 'Alive');
}

//Función para dar formato al json de resultados
function formatcharacters(Characters){
    return Characters.map((c) => ({
        id: c.id,
        name: c.name.replace(/ /g,"_"),
        status: c.status,
        gender: c.gender,
    }))
}

