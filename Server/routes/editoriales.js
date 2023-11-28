import {Router} from 'express'
import {mostrarEditoriales,agregarEditorial,editarEditorial,eliminarEditorial} from '../controllers/editoriales.js'

const router = Router()

router.get('/editoriales', mostrarEditoriales)
router.post('/editoriales', agregarEditorial)
router.put('/editoriales', editarEditorial)
router.delete('/editoriales/:id_editorial', eliminarEditorial)

export default router