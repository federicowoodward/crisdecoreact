import ItemDelete from './itemDelete.js';
import React from 'react';
import "./itemDeleter.css";

export default function ItemList({ itemList, id, deleter, reload}){
    return (
        <div>
            <button onClick={reload}>Recargar pagina</button>
            <div className="itemDeleter">
                    {
                        itemList.map((item) => <ItemDelete key={item.id} item={item} deleter={deleter} />)
                    }
            </div>
        </div>
    );
}
            
            
            