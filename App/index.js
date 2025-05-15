// Importamos el framework Express para crear el servidor
const express = require("express");

// Importamos la función main
const { main } = require("./rickyandmorty");

// Inicializamos la aplicación de Express
const app = express();

// Se define el puerto donde se va a escuchar el server
const PORT = 3000;