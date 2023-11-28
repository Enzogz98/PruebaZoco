import { consultaTodosDatabase, queryDatabase } from '../db/configDb.js';

export const mostrarLibros = async (req, res) => {
    try {
        console.log("Solicitud frontend ----> datos libros");
        const query = "SELECT * FROM libros";
        const rows = await consultaTodosDatabase(query);
        res.status(200).json(rows);
    } catch (error) {
        console.error("Error al realizar la consulta", error);
        res.status(500).json({ error: "Error al realizar la consulta" });
    }
};

export const agregarLibro = async (req, res) => {
    try {
        const {id_libro, titulo, id_autor, id_editorial, anio_publicacion } = req.body;
        console.log("Solicitud frontend ----->", req.body);
        const query = "INSERT INTO libros(id_libro,titulo, id_autor, id_editorial, anio_publicacion) VALUES(?,?,?,?,?)";
        const values = [id_libro, titulo, id_autor, id_editorial, anio_publicacion];
        const rows = await queryDatabase(query, values);
        res.status(200).json(rows);
    } catch (error) {
        console.error("Error al realizar la consulta", error);
        res.status(500).json({ error: "Error al realizar la consulta" });
    }
};

export const editarLibro = async (req, res) => {
    try {
        const { id_libro, titulo, id_autor, id_editorial, anio_publicacion } = req.body;
        console.log("Solicitud frontend ----->", req.body);
        const query = "UPDATE libros SET titulo=?, id_autor=?, id_editorial=?, anio_publicacion=? WHERE id_libro=?";
        const values = [titulo, id_autor, id_editorial, anio_publicacion, id_libro];
        const rows = await queryDatabase(query, values);
        res.status(200).json(rows);
    } catch (error) {
        console.error("Error al realizar la consulta", error);
        res.status(500).json({ error: "Error al realizar la consulta" });
    }
};

export const eliminarLibro = async (req, res) => {
    try {
        const { id_libro } = req.params;
        console.log("Solicitud frontend ----->", id_libro);

        const query = "DELETE FROM libros WHERE id_libro = ?";
        const values = [id_libro];

        const rows = await queryDatabase(query, values);
        res.status(200).json(rows);
    } catch (error) {
        console.error("Error al realizar la consulta", error);
        res.status(500).json({ error: "Error al realizar la consulta" });
    }
};
