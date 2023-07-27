const express = require('express')
const cors = require('cors')
const app = express();

const swaggerUI = require('swagger-ui-express');
var Swagger = require("./swagger.json");

//configuracion
app.set('port', process.env.PORT || 4000)

//middlewares
app.use(cors())
app.use(express.json())

//rutas
app.get('/', (req, res)=>{
    res.send('Hola bienvenidos!');
})

//ruta para la api de usuarios

app.use('/api/usuarios', require('./routes/usuario'))
app.use("/endpoints", swaggerUI.serve, swaggerUI.setup(Swagger));

module.exports = app;