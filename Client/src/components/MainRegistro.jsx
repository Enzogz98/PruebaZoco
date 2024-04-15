import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { TiUser, TiLockClosed, TiLockOpen } from "react-icons/ti";
import '../css/MainLogin.css';

const MainRegistro = () => {
  const [usuario, setUsuario] = useState("");
  const [pass, setPass] = useState("");
  const [mostrarRegistro, setMostrarRegistro] = useState(false);
  const navigate = useNavigate();
  const [mostrarP, setMostrarP] = useState(false);

  const handleRegistro = async () => {
    try {
      const response = await axios.post("http://localhost:3000/usuarios", {
        usuario,
        pass
      
      });
      if (response.status === 201) {
        console.log("Usuario creado correctamente");
        navigate('/home');
      } else {
        console.error("Error en la respuesta:", response.data.error);
        alert("error")
      }
    } catch (error) {
      console.error("Error al realizar la petición: ", error.message);
      alert("error")
    }
  };

  return (
    <div className={`contenedor-login ${mostrarRegistro ? "visible" : ""}`}>
      {mostrarRegistro && (
        <>
          <h1>REGISTRO</h1>
          <label htmlFor="username">USUARIO</label>
          <TiUser className="icono1" />
          <input
            type="text"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            className='input'
          />
          <label htmlFor="password">CONTRASEÑA</label>
          {mostrarP ? (
            <TiLockOpen className="icono-password" onClick={() => setMostrarP(!mostrarP)} />
          ) : (
            <TiLockClosed className="icono-password" onClick={() => setMostrarP(!mostrarP)} />
          )}
          <input
            type={mostrarP ? "text" : "password"}
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            required
            className='input'
          />
          <button onClick={handleRegistro} className='login-boton'>
            REGISTRARSE
          </button>
          <p onClick={() => setMostrarRegistro(false)} className='enlace-registro'>Volver al login</p>
        </>
      )}
      {!mostrarRegistro && (
        <p onClick={() => setMostrarRegistro(true)} className='enlace-registro'>Registrarse</p>
      )}
    </div>
  );
};

export default MainRegistro;
