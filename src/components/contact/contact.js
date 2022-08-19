import { useState } from 'react'; 
import Location from '../location/location';
import { useParams } from 'react-router-dom';
import "./contact.css";
export default function Contact() {
    const [customer, setCustomer] = useState({});
    const [err, setErr] = useState(false);
    const [errmessage, setErrMsg] = useState("a");
    const showLocation = useParams();

    function generateCustomer(e) {
        setCustomer({
            ...customer,
            [e.target.name]: e.target.value
        });
    }

    function dataManage() {
        const validName = (name) => /^[a-zA-Z ]+$/.test(name);

        if (!validName(customer.name) === true) {  
            catchErr("name")
        }
        if (customer.number < 10 ) {
            catchErr("number")
        }
        sendData();
    }
    function catchErr(err) {
        switch (err) {
            case "email":
                setErrMsg("El correo es distinto.")
                break;
            case "name":
                setErrMsg("El nombre no puede contener numeros, solo nombre y apellido")
                break;
            default:
            setErr(false);
        }
        setErr(true)
    };
    function sendData() {
        // delete customer.email2;
        // generateOrder(customer);
        // setEnvoy(true);
        console.log("envio generado")
    }
    return (
        <div className="fillingPhoto">
            <div className="contact">
                <h2>Envianos tu consulta!</h2>
                <div className="contactInputs">
                <div className="input-group">
                <label className="label">Nombre</label>
                <input name="name"  onChange={(e) => generateCustomer(e)} id="name" className="input" type="name"/>
                <div></div></div>
                <div className="input-group">
                <label className="label">Direccion de correo</label>
                <input name="email"  onChange={(e) => generateCustomer(e)} id="email" className="input" type="email"/>
                <div></div></div>
                <div className="input-group">
                <label className="label">Consulta</label>
                <input name="Email"  onChange={(e) => generateCustomer(e)} id="Email" className="input" type="text"/>
                <div></div></div>
                </div>
                <div className="contactSendButton">
                <button onClick={dataManage}>
                    <div className="svg-wrapper-1">
                        <div className="svg-wrapper">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                        </svg>
                        </div>
                    </div>
                    <span>Send</span>
                    </button>
                    {err ? <p>{errmessage}</p> : <p></p>}
                </div>
            </div>
            { showLocation.showLocation && <Location />}
        </div>
    );
}