
import "./NavBar.css"
import logo from '../../../img/LOGO.jpeg';
const NavBar = ()=>{
  return(
    <header id="contenedor_menu">
      <img id="imgLogo" src={logo} alt="Logo" />
      
      <nav id="contenedolista">
        <ul id="lista">
          <li className="itemList"><a href="" className="link">Hola</a></li>
          <li className="itemList"><a href="" className="link">Hola</a></li>
          <li className="itemList"><a href="" className="link">Hola</a></li>
          <li className="itemList"><a href="" className="link">Hola</a></li>
          <li className="itemList" id="registrase"><a href="" className="link">REGISTRARSE</a></li>
          <li className="itemList" id="ingresar"><a href="" className="link">INGRESAR</a></li>
        </ul>
      </nav>
    </header>
  )
    
    
 
}
export default NavBar