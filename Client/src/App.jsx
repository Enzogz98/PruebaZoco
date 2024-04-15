import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home"
import './App.css'
import Libros from "./pages/Libros";
import Editorial from "./pages/Editorial";
import Autores from "./pages/Autores";
import Registro from "./pages/Registro";

function App() {
 
  const isAuthenticated = () => {
    const token = sessionStorage.getItem("token");
    return !!token; 
  };

  const PrivateRoute = ({ element, ...rest }) => {
    return isAuthenticated() || rest.path === '/registro' ? (
      element
    ) : (
      <Navigate to="/" replace />
    );
  };
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/registro" element={<Registro/>}/>

      <PrivateRoute path='/home' element={<Home/>} />
      <PrivateRoute path='/libros' element={<Libros/>} />
      <PrivateRoute path='/editorial' element={<Editorial/>} />
      <PrivateRoute path='/autores' element={<Autores/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
