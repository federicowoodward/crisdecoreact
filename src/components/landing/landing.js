import LandingImg from "../../assets/startArmchair.svg";
import Contact from "../contact/contact.js";
import Acordion from "../services/services.js";
import "./landing.css";
import { collection, getDocs, getFirestore} from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export default function Landing() {
    const [picsList, setPicsList] = useState([]);
    const {id} = useParams();

    function goDown() {
        window.scrollTo({
            top: 550,
            behavior: "smooth"
        })
    }

    useEffect(() => {
        const db = getFirestore()
        let queryCollection =   collection(db,"fotos");
        getDocs(queryCollection)
        .then ( resp => {
            if (resp.size === 0) {
                console.log("no results!");
            } else {
                setPicsList( resp.docs.map(item => ({id: item.id, ...item.data()})))}})
        .catch(err => console.log(err))
    },[id])
    console.log(picsList)
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
                <div className="buttonsCards">
                    <button>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span>Atrapuertas</span>
                    </button>
                    <button>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span>Atrapuertas</span>
                    </button>
                    <button>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span>Atrapuertas</span>
                    </button>
                    <button>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span>Atrapuertas</span>
                    </button>
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
            <div className="filling">
                <Acordion />
            </div>
                <Contact />
        </div>
    )
}