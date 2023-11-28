import '../css/MainLogin.css';
import logo from '../assets/logo2.png';
import { useEffect,useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { TfiEmail, TfiLock } from "react-icons/tfi";
import { VscEye,VscEyeClosed } from "react-icons/vsc";
import { enqueueSnackbar } from "notistack";

const sucessClick = (dato) => {
  if (dato==1){
      enqueueSnackbar("Nick/Email o Pass Invalido  ! 👨🏿‍🦽 ", {
          variant: "error",
          anchorOrigin: {
            vertical: "top",
            horizontal: "left",
          },
      })
  } else {
      enqueueSnackbar("Se ELimino el Usuario ! ☠️ ", {
          variant: "error",
          anchorOrigin: {
            vertical: "top",
            horizontal: "left",
          },
      })
  }
  };
  const ErrorClick = () => {
      enqueueSnackbar("Algo salio mal !!! 🤖", {
          variant: "error",
          anchorOrigin: {
            vertical: "top",
            horizontal: "right",
          },
      })
  }


const MainLogin = () => {
  const [usuario, setUsuario] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();
  const [data, setData] = useState();
  const [mostrarP, setMostrarP] = useState(false);

  useEffect(() => {
    if (data) {
      if (data.length > 0) {
        localStorage.setItem("userData", JSON.stringify(data));
        data.map((dato) => {
          if (dato.estado == true) {
            localStorage.setItem("login", true);
            navigate('/home');
          }else{
            sucessClick(3)
          }
        });
      } else {
        sucessClick(1)
      }
    }
  }, [data]);
  
  const login = async () => {

    try {
      const response = await axios.post("http://localhost:3000/login", {
        usuario,
        pass
      });
      if (response.status === 200) {
        setData(response.data);
      } else {
        console.error("Error en la respuesta:", response.data.error);
        ErrorClick();
      }
    } catch (error) {
      console.error("Error al realizar la petición: ", error.message);
      ErrorClick();
    }
  };
  
  return (
    <>
    <div className='ContenedorPrincipal'>

      <div className='contenedor-login'>
      <img src={logo} alt="logo" />
      <h1>LOGIN</h1>
      
        <label htmlFor="username">USUARIO</label>
        <TfiEmail className="icono1" />
        <input type="text"  onChange={(e) => setUsuario(e.target.value)}
        className='input' />

        <label htmlFor="password">CONTRASEÑA</label>
        <TfiLock className="icono2" />
        {mostrarP? <VscEye className="icono-password" onClick={()=> setMostrarP(!mostrarP)}/> : <VscEyeClosed className="icono-password" onClick={()=> setMostrarP(!mostrarP)}/>  } 
              <input
                onChange={(e) => setPass(e.target.value)}
                type={mostrarP ? "text" : "password"}
                required
                className='input'
              />
        <button onClick={login} className='login-boton'>INGRESAR</button>


      


      </div>
      
    
    
    
    
    </div>
    </>
    
  )
}

export default MainLogin
