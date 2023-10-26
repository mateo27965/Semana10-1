/*
Este archivo es la API para los usuarios
*/
const express = require('express')
const ruta = express.Router()

// place holder for the data
const users = ['JOhn','Pepe'];

ruta.get('/lee', (req, res) => {
    console.log('api/users invocada !')
    res.json(users);
  });
  
ruta.post('/inserta', (req, res) => {
    const user = req.body.user;
    console.log('Agregando user:::::', user);
    users.push(user);
    res.json("user agregado");
  });

  module.exports = ruta