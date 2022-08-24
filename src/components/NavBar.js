import img from '../img/El-rocomovil.jpg'
const NavBar = () =>{
return( 
<header className='navBordes' >
    <img className='img' src={img} ></img>
    <h3>Bienvenidos</h3>
        
        <nav className="nav">
            
            <a className="navMain" href="#">Inicio</a>
            <a className="navMain" href="#">Cosa</a>
            <a className="navMain" href="#">Extras</a>
            <button>

            </button>
        </nav>
</header>
)

}
export default NavBar;
