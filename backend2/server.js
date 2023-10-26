const express = require('express');
const bodyParser = require("body-parser")
const path = require('path');

const usuarios = require('./api/usuarios/user')
const usuarios2 = require('./api/usuarios/user2')
const peliculas = require('./api/movies/movie')

const app = express()
const port = 3080

/* Esta e sla parte del Middleware */
app.use(express.static(path.join(__dirname, './static')));
app.use(bodyParser.json());

app.use('/api/users',usuarios)
app.use('/api/users2',usuarios2)
app.use('/api/movies',peliculas)

app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, './static/index.html'));
});

app.listen(port, () => {
    console.log(`Server escuchando en el port::${port}`);
});

