
import Cosa from './components/Cosa';
import NavBar from './components/NavBar';
import "./styles/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Items from './components/Items';

const App = ()=> {

  const mostrarTexto = () =>{
      alert('texto');
  }
  return (
    <>
    <NavBar mostrarMensaje={mostrarTexto} cart={3}>
    </NavBar><Cosa/>
    <Items/>
   
    
   

     
    
    

    </>
    
  );
}

export default App;
 