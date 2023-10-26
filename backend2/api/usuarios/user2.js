const express = require('express')
const ruta = express.Router()

const db = require('../../db/models/index.js')

/*--------------------------------------*/
/*  para grabar en BD */
ruta.get('/leeBD', async (req, res) => {
    console.log('api/users invocada !')
    let users = await db.user.findAll( {} )
    console.log(users)
    res.json(users);
  });
  
  ruta.post('/insertaBD', async (req, res) => {
    const user = req.body.user;
    console.log('Agregando user:::::', user);
    await db.user.create( user )
    res.json("user agregado");
  });
  
  module.exports = ruta