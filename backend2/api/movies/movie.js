const express = require('express')
const ruta = express.Router()
const db = require('../../db/models/index.js')

ruta.get('/all', async (req, res) => {
    console.log('all invocada !')
    let rpta = await db.movie.findAll( {} )
    res.json(rpta);
  });

ruta.get('/allOrder', async (req, res) => {
    console.log('allORder invocada !')
    let rpta = await db.movie.findAll( {
        order : [
            ['country' , 'ASC'],
            ['id', 'ASC']
        ]
    } )
    res.json(rpta);
  });

  ruta.get('/allOrderWhere', async (req, res) => {
    console.log('allORderWHere invocada !')
    const ids = req.body.ids
    let rpta = await db.movie.findAll( {
        where : {
            id : ids
        },
        order : [
            ['country' , 'ASC'],
            ['id', 'ASC']
        ]
    } )
    res.json(rpta);
  });

module.exports = ruta