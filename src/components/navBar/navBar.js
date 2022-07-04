import "./navBar.css";
import Logo from "../../assets/icon.svg";
import CartLogo from "../../assets/cartLogo.js";
export default function navBar() {
     
    return (
        <div>
             <nav className="navBar">
                <a className="logo" href="index.html">
                    <img src={Logo} alt="logo de cris decotextil" width="70px" height="45px"/>
                </a>
                <ul className="navBarUl">
                    <li>
                        <a href="assets/html/productos.html">Productos</a>
                    </li>
                    <li>
                        <a href="assets/html/servicios.html">Servicios</a>
                    </li>
                    <li>
                        <a href="assets/html/contacto.html">Contacto</a>
                    </li>
                    <li>
                        <a href="assets/html/ubicacion.html">Ubicación</a>
                    </li>
                </ul>
                <div className="cartLogo">
                    <CartLogo className="cartLogo"/>
                </div>
            </nav>
        </div>
    );
}