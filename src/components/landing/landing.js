// import LandingImg from "../../assets/startArmchair.svg";
import Contact from "../contact/contact.js";
import Acordion from "../services/services.js";
import "./landing.css";
export default function Landing() {

    function goDown() {
        window.scrollTo({
            top: 550,
            behavior: "smooth"
        })
    }

    return (
        <div>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
            <div className="containerLanding">
                <div className="landingText">
                    <div className="text">
                        <h1> Quienes somos? </h1>
                        <p>
                            Somos dos amigas que decidieron en plena pandemia 
                            comenzar a dedicarse profesionalmente a lo que mas les apasiona 
                            el mundo decotextil.
                        </p>
                    </div>
                    <div className="sliderContainer">
                        <div className="slider position">
                        </div>
                    </div>
      
                    <button className="goDownButton" onClick={goDown}>
                        <span className="material-symbols-outlined">
                        expand_more
                        </span>
                    </button>
                </div>
            </div>
            <div className="filling">
                <Acordion />
            </div>
                <Contact />
        </div>
    )
}