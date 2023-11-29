const {Router} =require('express')
const{mostrarEditoriales,agregarEditorial,editarEditorial,eliminarEditorial} =require('../controllers/editoriales.js')

const router = Router()

router.get('/editoriales', mostrarEditoriales)
router.post('/editoriales', agregarEditorial)
router.put('/editoriales', editarEditorial)
router.delete('/editoriales/:id_editorial', eliminarEditorial)

module.exports=router