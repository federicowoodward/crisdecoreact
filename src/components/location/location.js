import "./location.css";

export default function Location() {

    return (
        <div className="location"> 
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.7314900250644!2d-64.19870048485056!3d-31.47657168138412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432a3a23c462f37%3A0x96161236911a081b!2sTejas%20de%20La%20Candelaria%20(Tejas%20II)!5e0!3m2!1ses!2sar!4v1660916864784!5m2!1ses!2sar" width="500" height="400"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Ubicacion"></iframe>
            <div>
                <h2>Nos encontramos en el barrio <strong>Tejas del sur 2</strong></h2>
                <p>Pero hacemos envios a todo el pais!</p>
            </div> 
        </div>
    );
}