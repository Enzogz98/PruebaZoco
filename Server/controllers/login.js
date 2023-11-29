const { queryDatabase } = require('../db/configDb.js');

 const login =async (req,res) =>{
    try{
        const{usuario,pass}=req.body
        console.log('solicitud frontend-->',req.body)
        const query= 'SELECT * FROM usuarios WHERE nombre_usuario = ? and  contrasena= ? '
        const values=[usuario, pass]
        const rows= await queryDatabase(query,values)
        res.json(rows)
    }catch (error) {
        console.error("Error al realizar la consulta")
        res.status(500).json({error:'Error al realizar la consulta'})
    }
}

module.exports={login}