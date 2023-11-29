const {Router} =require('express')
const {mostrarLibros,agregarLibro,editarLibro,eliminarLibro} =require('../controllers/libros.js')

const router = Router()

router.get('/libros', mostrarLibros)
router.post('/libros', agregarLibro)
router.put('/libros', editarLibro)
router.delete('/libros/:id_libro', eliminarLibro)

module.exports=router