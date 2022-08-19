import { React, useState} from 'react';
import "./itemDelete.css";

export default function Item({ item, deleter }){
    const [buttonStatus, setStatus] = useState(true);

    function deleteItem() {
        deleter(item)
        setStatus(false)
    }

  return (
      <div className="itemDelete">
        {
            !item.imgUrl ? <p>Imagen no encontrada</p> :    
            <img src={item.imgUrl} alt={item.client}/>
        }
        {
            !item.name ? <div><strong>Nombre:</strong><p>sin nombre</p></div> :    
            <div><strong>Nombre:</strong><p>{item.name}</p></div>
        }
        {
            !item.alt ? <div><strong>Descripcion:</strong><p>sin descripcion</p></div>:    
            <div><strong>Descripcion:</strong><p>{item.alt}</p></div>
        }
        {
            buttonStatus ? <button onClick={deleteItem}>Borrar</button> : <button className="deleted">borrada</button>
        }
        
      </div>
    );   
};