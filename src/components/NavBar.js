import img from '../img/El-rocomovil.jpg'
import imgcart from '../img/carrito.png'

const NavBar = ({mostrarMensaje, cart}) =>{
return( 
<header className='navBordes' >
    <img className='img' src={img} ></img>
    <h3>Bienvenidos</h3>
        <div className='flex'>
            <button className='BtnCarrito' onClick={mostrarMensaje}><img src={imgcart} className='carrito'></img></button>
            <div className='dive'><p className='text'>En total {cart} productos</p></div>
        </div>
        <nav className="nav">
            
            <a className="navMain" href="#">Inicio</a>
            <a className="navMain" href="#">Cosa</a>
            <a className="navMain" href="#">Extras</a>
            
        </nav>
</header>
)

}
export default NavBar;
