import express from 'express'
import {connection} from './db/configDb.js'
import cors from 'cors';
import bodyParser from 'body-parser'
import morgan from 'morgan';

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.listen(process.env.PORT || 3000, () => {
  console.log("Servidor Iniciado en el puerto 3000");
});

connection.connect((error) => {
  if ( error) throw error;
  console.log("Conexion establecida con la Base de Datos")
  });

app.get('/', (req,res) => {
  console.log("Escuchando puerto 3000");
  res.json("todo ok");
});