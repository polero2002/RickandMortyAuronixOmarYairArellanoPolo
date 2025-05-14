//Prueba Tecnica Auronix para intership
//Autor: Omar Yair Arellano Polo

//URL BASE DE LA API ORIGINAL
const API_URL = "https://rickandmortyapi.com/api/character";

//Funcion asincrona para obtener los datos de los personajes
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


