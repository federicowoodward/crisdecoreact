import "./navBar.css";
import Logo from "../../assets/icon.svg";
import CartLogo from "../../assets/cartLogo.js";
import { Link } from "react-router-dom";
export default function navBar() {
     
    return (
        <div>
             <nav className="navBar">
                <div className="logo">
                    <Link to="/">
                        <img src={Logo} alt="logo de cris decotextil" width="70px" height="45px"/>
                    </Link>
                </div>
                <ul className="navBarUl">
                    <li>
                        <Link to="/products">
                            <p href="assets/html/productos.html">Productos</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/services">
                            <p href="assets/html/servicios.html">Servicios</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact">
                            <p href="assets/html/contacto.html">Contacto</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/location">
                            <p href="assets/html/ubicacion.html">Ubicación</p>
                        </Link>
                    </li>
                </ul>
                <div className="cartLogo">
                    <CartLogo className="cartLogo"/>
                </div>
            </nav>
        </div>
    );
}