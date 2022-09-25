import img from '../img/El-rocomovil.jpg'
import imgcart from '../img/carrito.png'
import { Link, NavLink } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = () =>{//carrito de compra

return( 
<header className='navBordes' >
    <NavLink to="/DesafioReact" ><img className='img' src={img} ></img></NavLink>
    <h3>Bienvenidos</h3>
    
        <div className='flex'>
            <Link className='BtnCarrito' to='/cart' ><img src={imgcart} className='carrito'></img></Link>
            <div className='dive'> <CartWidget/></div>
        </div>
        <nav>
            <ul className="nav">
                <li><NavLink className="me-1 btn btn-light" to="/categoria/remeras">Remeras</NavLink></li>
                <li><NavLink className="me-1 btn btn-light" to="/categoria/zapatillas">Zapatillas</NavLink></li>
            </ul>
        </nav>
</header>
)

}
export default NavBar;
