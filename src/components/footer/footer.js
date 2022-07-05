// import { Link } from "react-router-dom";
import "./footer.css";
export default function Footer() {
    return (
        <div className="footer">
            <footer className="container">
                <div className="column1">
                    <ul>
                        <li>
                        {/* <Link to="/login"> */}
                        Administracion
                        {/* </Link> */}
                        </li>
                        <li>
                        {/* <Link to="/contact"> */}
                        Contacto
                        {/* </Link> */}
                        </li>
                    </ul>
                    
                </div>
                <div className="column2">
                        <p>Contacto con desarollador:</p>
                    <div className="iconosFooter">
                        <a href="https://www.linkedin.com/in/fede-woodward-980252212/" target="_blank" rel="noopener noreferrer"><img src="https://icongr.am/devicon/linkedin-original.svg?size=128&color=currentColor" alt="linkedln de fede woodward"/></a>
                        <a href="https://instagram.com/fedewoodward1/" target="_blank" rel="noopener noreferrer"><img src="https://icongr.am/feather/instagram.svg?size=128&color=ffffff" alt="instagram de fede woodward"/></a>
                    </div>
                </div>
            </footer>
            <h4>Made by Fede Woodward</h4>
        </div>
    );
}
