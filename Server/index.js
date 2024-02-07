const express = require('express');
const { connection } = require('./db/configDb.js');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const login = require('./routes/login.js');
const autores = require('./routes/autores.js');
const libros = require('./routes/libros.js');
const editoriales = require('./routes/editoriales.js');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.listen(process.env.PORT || 3000, () => {
  console.log("Servidor Iniciado en el puerto 3000");
});

connection.connect((error) => {
  if (error) throw error;
  console.log("Conexion establecida con la Base de Datos");
});

app.get('/', (req, res) => {
  console.log("Escuchando puerto 3000");
  res.json("todo ok");
});

app.use(login);
app.use(editoriales);
app.use(autores);
app.use(libros);