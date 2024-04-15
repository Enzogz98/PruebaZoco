import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const MainAdministrador = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [nombreUsuario, setNombreUsuario] = useState('');
  const [password, setPassword] = useState('');
  const [idUsuario, setIdUsuario] = useState(null);

  useEffect(() => {
    mostrarUsuarios();
  }, []);

  const mostrarUsuarios = () => {
    axios.get('http://localhost:3000/usuarios')
      .then(response => {
        setUsuarios(response.data);
      })
      .catch(error => {
        console.error('Error al obtener usuarios:', error);
      });
  };

  const agregarUsuario = () => {
    axios.post('http://localhost:3000/usuarios', {
      nombre_usuario: nombreUsuario,
      pass: password
    })
    .then(response => {
      alert('Usuario agregado correctamente');
      mostrarUsuarios();
      limpiarFormulario();
    })
    .catch(error => {
      console.error('Error al agregar usuario:', error);
    });
  };

  const editarUsuario = (usuario) => {
    setIdUsuario(usuario.id_usuario);
    setNombreUsuario(usuario.nombre_usuario);
    setPassword(usuario.pass);
  };

  const actualizarUsuario = () => {
    axios.put(`http://localhost:3000/usuarios/`, {
      id_usuario: idUsuario,
      nombre_usuario: nombreUsuario,
      pass: password
    })
    .then(response => {
      alert('Usuario actualizado correctamente');
      mostrarUsuarios();
      limpiarFormulario();
    })
    .catch(error => {
      console.error('Error al actualizar usuario:', error);
    });
  };

  const eliminarUsuario = (idUsuario) => {
    axios.delete(`http://localhost:3000/usuarios/${idUsuario}`)
    .then(response => {
      alert('Usuario eliminado correctamente');
      mostrarUsuarios();
    })
    .catch(error => {
      console.error('Error al eliminar usuario:', error);
    });
  };

  const limpiarFormulario = () => {
    setNombreUsuario('');
    setPassword('');
    setIdUsuario(null);
  };

  return (
    <div>
      <h1>Usuarios</h1>
      <div>
        <label>Nombre de usuario:</label>
        <input type="text" value={nombreUsuario} onChange={(e) => setNombreUsuario(e.target.value)} />
        <label>Contraseña:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        {idUsuario ? (
          <Button onClick={actualizarUsuario}>Actualizar</Button>
        ) : (
          <Button onClick={agregarUsuario}>Agregar</Button>
        )}
        <Button onClick={limpiarFormulario}>Cancelar</Button>
      </div>
      <div>
        {usuarios.map(usuario => (
          <Card key={usuario.id_usuario}>
            <Card.Body>
              <Card.Title>{usuario.nombre_usuario}</Card.Title>
              <Card.Text>ID: {usuario.id_usuario}</Card.Text>
              <Button onClick={() => editarUsuario(usuario)}>Editar</Button>
              <Button onClick={() => eliminarUsuario(usuario.id_usuario)}>Eliminar</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MainAdministrador;

