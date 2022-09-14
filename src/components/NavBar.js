import img from '../img/El-rocomovil.jpg'
import imgcart from '../img/carrito.png'
import { NavLink } from 'react-router-dom';

const NavBar = ({mostrarMensaje, cart}) =>{//carrito de compra
return( 
<header className='navBordes' >
    <NavLink to="/" ><img className='img' src={img} ></img></NavLink>
    <h3>Bienvenidos</h3>
    
        <div className='flex'>
            <button className='BtnCarrito' onClick={mostrarMensaje}><img src={imgcart} className='carrito'></img></button>
            <div className='dive'><p className='text '>En total {cart} productos</p></div>
        </div>
        <nav>
            <ul className="nav">
                <li><NavLink className="me-1 btn btn-light" to="/modelo/remeras">Remeras</NavLink></li>
                <li><NavLink className="me-1 btn btn-light" to="/modelo/zapatillas">Zapatillas</NavLink></li>
            </ul>
        </nav>
</header>
)

}
export default NavBar;
