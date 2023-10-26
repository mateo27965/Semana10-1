const express = require('express')
const db = require('../db/models/index')

const ruta = express.Router()

/* API #1 */
ruta.get('/d1' , async(req,res)=>{
    let paises = await db.country.findAll({
        where : {
            id: [138,554,21,3,63,236,827,75]
        },
        order:[
            ['name','ASC']
        ],
        // al momento de jalar los paises, jalare tambien los movies
        include : ['movies']
    })
    paises.forEach(p=>{
        console.log("PAIS: ", p.get('id'), p.get('name'))
        let peliculas = p.get('movies')
        peliculas.forEach(peli=>{
            console.log("PELICULA ", peli.get('title'), peli.get('genres'))
        })
    });
})

/* API #2 */
ruta.get('/d2' , async(req,res)=>{
    let paises = await db.country.findAll({
        where : {
            id: [138,554,21,3,63,236,827,75]
        },
        order:[
            ['name','ASC']
        ],
        // al momento de jalar los paises, jalare tambien los directores
        include : ['directors']
    })
    paises.forEach(p=>{
        console.log("PAIS: ", p.get('id'), p.get('name'))
        let directores = p.get('directors')
        directores.forEach(d=>{
            console.log("DIRECTOR: ", d.get('first_name'), d.get('last_name'))
        })
    });
})

/* API #3  Navegar desde movies hacia countries y directors*/
ruta.get('/d3' , async(req,res)=>{
    let peliculas = await db.movie.findAll({
        where : {
            id: [1,2,3,4]
        },
        order:[
            ['title','ASC']
        ],
        // al momento de jalar los paises, jalare tambien los directores
        include : ['pais','directores']
    })
    peliculas.forEach(p=>{
        console.log("PELICULA: ", p.get('id'), p.get('title'))
        let director = p.get('directores')
        console.log("DIRECTOR ", director.get('first_name'), director.get('last_name'))
        let pais = p.get('pais')
        console.log("PAIS: ", pais.get('name'))
    });
})





module.exports = ruta