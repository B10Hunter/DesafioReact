
import Cosa from './components/Cosa';
import NavBar from './components/NavBar';
import "./styles/main.css";

const App = ()=> {
  const mostrarTexto = () =>{
      alert('texto');
  }
  return (
    <>
    <NavBar mostrarMensaje={mostrarTexto} cart={3}>
    </NavBar><Cosa/>
     
    
    

    </>
    
  );
}

export default App;
 