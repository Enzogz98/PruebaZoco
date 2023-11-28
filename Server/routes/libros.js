import {Router} from 'express'
import {mostrarLibros,agregarLibro,editarLibro,eliminarLibro} from '../controllers/libros.js'

const router = Router()

router.get('/libros', mostrarLibros)
router.post('/libros', agregarLibro)
router.put('/libros', editarLibro)
router.delete('/libros/:id_libro', eliminarLibro)

export default router