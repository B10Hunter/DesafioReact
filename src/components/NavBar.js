import imgcart from '../img/carrito.png'
import { Link, NavLink } from 'react-router-dom';
import CartWidget from './CartWidget';
import Titulo from './Titulo';


const NavBar = () =>{//carrito de compra
   const tee = document.getElementsByClassName('tituloText')
    
return( 
<header className='navBordes border-4 border-bottom border-dark' >
    <NavLink to="/DesafioReact" className='text-decoration-none'><p className='homerText '>L/B</p> </NavLink>
    <h3 className='tituloText'>Bienvenidos </h3> 
    
        <div className='flex'>
            <Link className='BtnCarrito' to='/cart' ><img src={imgcart} className='carrito'></img></Link>
            <div className='dive'> <CartWidget/></div>
        </div>
        <nav>
            <ul className="nav">
                <li><NavLink className="me-1 text-decoration-none" to="/categoria/remeras" onClick={() =>tee.addClass("te") }><p className='botonMenu'>Remeras</p></NavLink></li>
                <li><NavLink className="me-1 text-decoration-none" to="/categoria/zapatillas"><p className='botonMenu'>Zapatillas</p></NavLink></li>
            </ul>
        </nav>
</header>
)

}
export default NavBar;
