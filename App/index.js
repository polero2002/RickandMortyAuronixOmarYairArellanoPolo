// Importamos el framework Express para crear el servidor
const express = require("express");

// Importamos la función main
const { main } = require("./rickyandmorty");

// Inicializamos la aplicación de Express
const app = express();

// Se define el puerto donde se va a escuchar el server
const PORT = 3000;
// definimos el endpoint /personajes con el metodo get para acceder a los personajes filtrados y formateados
app.get("/characters", async (req,res) => {
  try {
    // llamamos a la funcion main
    const data = await main();

    // en la respuesta damos los datos con json
    res.json(data);
  } catch (error) {
    // En caso de error, devolvemos un mensaje de error con código 500.
    res.status(500).json({ error: error.message });
  }
});