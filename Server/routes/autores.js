const {Router} =require('express')
const{mostrarAutores, agregarAutor, editarAutor, eliminarAutor}=require('../controllers/autores.js')

const router = Router()

router.get("/autores", mostrarAutores)
router.post("/autores", agregarAutor)
router.put("/autores", editarAutor)
router.delete('/autores/:id_autor', eliminarAutor)

module.exports=router