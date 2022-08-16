import React, { useState } from 'react';
import "./itemCount.css";
export default function ItemCount({initial , stock, onAdd}) {
    const [count, setCount] = useState(initial);
    const add = () => {if(count < stock) setCount(count+1)}
    const less = () => setCount(count-1)
    if (count === 0) { setCount(count+1) }
    
    function addItem() {
        onAdd(count)
    }

    return (
        <div className="itemCount">
            <span className="photosAdded"><p>{count}</p></span>
            <div className="buttonsItemCount">
                <span>
                <button>
                    <span className="button_top" onClick={add}> + </span>
                </button>
                <button>
                    <span className="button_top" onClick={less}> - </span>
                </button>
                </span>
                <button className="add">
                    <span className="button_top" onClick={addItem}> Añadir al carrito </span>
                </button>
            </div>
        </div>
    );
}