import LandingImg from "../../assets/startArmchair.svg";
import CardImg1 from "../../assets/sillascubiertas.svg";
import Acordion from "../acordion/services.js";
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
                <div className="textButton">
                    <div className="text">
                        <h1> Quienes somos? </h1>
                        <p>
                            Somos dos amigas que decidieron en plena pandemia 
                            comenzar a dedicarse profesionalmente a lo que mas les apasiona 
                            el mundo decotextil.
                        </p>
                    </div>
                    <div className="cardsContainer">
                        <div className="card">
                            <img src={CardImg1} alt=""/>
                            <h4>
                                Lorem insup
                                <p>hola</p>
                            </h4>
                        </div>
                        <div className="card">
                            <img src={CardImg1} alt=""/>
                            <h4>
                                Lorem insup
                                <p>hola</p>
                            </h4>
                        </div>
                        <div className="card">
                            <img src={CardImg1} alt=""/>
                            <h4>
                                Lorem insup
                                <p>hola
                                </p>
                            </h4>
                        </div>
                    </div>
                    <button className="goDownButton" onClick={goDown}>
                        <span className="material-symbols-outlined">
                        expand_more
                        </span>
                    </button>
                </div>
              
                    <div className="armChairImg">
                        <img src={LandingImg} alt="" />
                    </div>
            </div>
            <div>
                <Acordion />
            </div>
     
        </div>
    )
}