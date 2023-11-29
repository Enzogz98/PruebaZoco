const { consultaTodosDatabase, queryDatabase } = require('../db/configDb.js');

const mostrarEditoriales = async (req, res) => {
    try {
        console.log("Solicitud frontend ----> datos editoriales");
        const query = "SELECT * FROM editoriales";
        const rows = await consultaTodosDatabase(query);
        res.status(200).json(rows);
    } catch (error) {
        console.error("Error al realizar la consulta", error);
        res.status(500).json({ error: "Error al realizar la consulta" });
    }
};

const agregarEditorial = async (req, res) => {
    try {
        const {id_editorial, nombre, direccion, telefono } = req.body;
        console.log("Solicitud frontend ----->", req.body);
        const query = "INSERT INTO editoriales(id_editorial,nombre, direccion, telefono) VALUES(?,?,?,?)";
        const values = [id_editorial, nombre, direccion, telefono];
        const rows = await queryDatabase(query, values);
        res.status(200).json(rows);
    } catch (error) {
        console.error("Error al realizar la consulta", error);
        res.status(500).json({ error: "Error al realizar la consulta" });
    }
};

const editarEditorial = async (req, res) => {
    try {
        const { id_editorial, nombre, direccion, telefono } = req.body;
        console.log("Solicitud frontend ----->", req.body);
        const query = "UPDATE editoriales SET nombre=?, direccion=?, telefono=? WHERE id_editorial=?";
        const values = [nombre, direccion, telefono, id_editorial];
        const rows = await queryDatabase(query, values);
        res.status(200).json(rows);
    } catch (error) {
        console.error("Error al realizar la consulta", error);
        res.status(500).json({ error: "Error al realizar la consulta" });
    }
};

const eliminarEditorial = async (req, res) => {
    try {
        const { id_editorial } = req.params;
        console.log("Solicitud frontend ----->", id_editorial);

        const query = "DELETE FROM editoriales WHERE id_editorial = ?";
        const values = [id_editorial];

        const rows = await queryDatabase(query, values);
        res.status(200).json(rows);
    } catch (error) {
        console.error("Error al realizar la consulta", error);
        res.status(500).json({ error: "Error al realizar la consulta" });
    }
};

module.exports={mostrarEditoriales,agregarEditorial,editarEditorial,eliminarEditorial}