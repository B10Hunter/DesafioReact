import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"

const Layout = () => {

    const mostrarTexto = () =>{//plantilla de la pagina
        alert('texto');}
        
  return (
    <div>
        <NavBar mostrarMensaje={mostrarTexto} cart={3}/>

        <Outlet/>
        
    </div>
  )};


export default Layout