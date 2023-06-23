const express = require('express')
const cors = require('cors')
const app = express();

//configuracion
app.set('port', process.env.PORT || 4000)

module.exports = app;