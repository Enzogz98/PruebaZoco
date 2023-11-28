CREATE DATABASE testing;
USE testing;
CREATE TABLE usuarios (
  id_usuario INT PRIMARY KEY AUTO_INCREMENT,    
  nombre_usuario VARCHAR(50) UNIQUE,
  contrasena VARCHAR(255)
);
CREATE TABLE autores (
  id_autor INT PRIMARY KEY,
  nombre VARCHAR(50),
  apellido VARCHAR(50),
  nacionalidad VARCHAR(50)
);
CREATE TABLE editoriales (
  id_editorial INT PRIMARY KEY,
  nombre VARCHAR(100),
  direccion VARCHAR(255),
  telefono VARCHAR(15)
);
CREATE TABLE libros (
  id_libro INT PRIMARY KEY,
  titulo VARCHAR(255),
  id_autor INT,
  id_editorial INT,
  anio_publicacion INT,
  FOREIGN KEY (id_autor) REFERENCES autores(id_autor),
  FOREIGN KEY (id_editorial) REFERENCES editoriales(id_editorial)
);

INSERT INTO usuarios(nombre_usuario,contrasena) VALUES
("admin", "admin");

INSERT INTO autores (id_autor, nombre, apellido, nacionalidad) VALUES
(1, 'Gabriel', 'García Márquez', 'Colombiano'),
(2, 'Isabel', 'Allende', 'Chileno'),
(3, 'Jorge Luis', 'Borges', 'Argentino'),
(4, 'Mario', 'Vargas Llosa', 'Peruano');

INSERT INTO editoriales (id_editorial, nombre, direccion, telefono) VALUES
(1, 'Editorial Sudamericana', 'Avenida de los Libros, 456', '+5432198765'),
(2, 'Penguin Random House Argentina', 'Calle de la Cultura, 789', '+541112345678'),
(3, 'Ediciones Alfaguara', 'Plaza de las Artes, 123', '+541155555555'),
(4, 'Editorial Planeta Chile', 'Avenida de las Letras, 987', '+5623456789');


INSERT INTO libros (id_libro, titulo, id_autor, id_editorial, anio_publicacion)
VALUES (1, 'Cien años de soledad', 1, 1, 1967);

INSERT INTO libros (id_libro, titulo, id_autor, id_editorial, anio_publicacion)
VALUES (2, 'El Aleph', 3, 2, 1949);

INSERT INTO libros (id_libro, titulo, id_autor, id_editorial, anio_publicacion)
VALUES (3, 'La ciudad y los perros', 4, 4, 1963);

INSERT INTO libros (id_libro, titulo, id_autor, id_editorial, anio_publicacion)
VALUES (4, 'Crónica de una muerte anunciada', 1, 3, 1981);


USE testing;

DELIMITER //
CREATE TRIGGER before_delete_autor
BEFORE DELETE ON autores
FOR EACH ROW
BEGIN
    DECLARE id_autor_existente INT;

    SELECT id_autor INTO id_autor_existente FROM libros WHERE id_autor = OLD.id_autor LIMIT 1;

    IF id_autor_existente IS NOT NULL THEN
        DELETE FROM libros WHERE id_autor = OLD.id_autor;
    END IF;
END;
//
DELIMITER ;

DELIMITER //
CREATE TRIGGER before_delete_editorial
BEFORE DELETE ON editoriales
FOR EACH ROW
BEGIN
    DECLARE id_editorial_existente INT;

    SELECT id_editorial INTO id_editorial_existente FROM libros WHERE id_editorial = OLD.id_editorial LIMIT 1;

    IF id_editorial_existente IS NOT NULL THEN
        DELETE FROM libros WHERE id_editorial = OLD.id_editorial;
    END IF;
END;
//
DELIMITER ;