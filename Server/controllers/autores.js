const { consultaTodosDatabase, queryDatabase } = require('../db/configDb.js');


const mostrarAutores = async (req, res) => {
    try {
        console.log("Solicitud frontend ----> datos autores");
        const query = "SELECT * FROM autores";
        const rows = await consultaTodosDatabase(query);
        res.status(200).json(rows);
    } catch (error) {
        console.error("Error al realizar la consulta", error);
        res.status(500).json({ error: "Error al realizar la consulta" });
    }
};

 const agregarAutor = async (req, res) => {
    try {
        const {id_autor, nombre, apellido, nacionalidad } = req.body;
        console.log("Solicitud frontend ----->", req.body);
        const query = "INSERT INTO autores (id_autor, nombre, apellido, nacionalidad) VALUES(?,?,?,?)";
        const values = [id_autor,nombre, apellido, nacionalidad];
        const rows = await queryDatabase(query, values);
        res.status(200).json(rows);
    } catch (error) {
        console.error("Error al realizar la consulta", error);
        res.status(500).json({ error: "Error al realizar la consulta" });
    }
};

 const editarAutor = async (req, res) => {
    try {
        const { id_autor, nombre, apellido, nacionalidad } = req.body;
        console.log("Solicitud frontend ----->", req.body);
        const query = "UPDATE autores SET nombre=?, apellido=?, nacionalidad=? WHERE id_autor=?";
        const values = [nombre, apellido, nacionalidad, id_autor];
        const rows = await queryDatabase(query, values);
        res.status(200).json(rows);
    } catch (error) {
        console.error("Error al realizar la consulta", error);
        res.status(500).json({ error: "Error al realizar la consulta" });
    }
};

 const eliminarAutor = async (req, res) => {
    try {
        const { id_autor } = req.params;
        console.log("Solicitud frontend ----->", id_autor);

        const query = "DELETE FROM autores WHERE id_autor = ?";
        const values = [id_autor];

        const rows = await queryDatabase(query, values);
        res.status(200).json(rows);
    } catch (error) {
        console.error("Error al realizar la consulta", error);
        res.status(500).json({ error: "Error al realizar la consulta" });
    }
};

module.exports={agregarAutor,mostrarAutores,editarAutor,eliminarAutor}
