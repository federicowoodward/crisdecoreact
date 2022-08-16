import Item from './item.js';
import React from 'react';
import "./itemContainer.css";
export default function ItemList({ itemList,search }){
    let macht = false;
    let arr = []; 
    function detectMisMatch() {
        for (let i = 0; i < itemList.length; i++) {
            if (itemList[i].category === search) {
                arr.push(true) 
            } else {
                arr.push(false)
            }
        }
        let detecter = arr.some(item => item === true);
        if (detecter) {
            macht = true;
        }
    }
    if (search) {
        detectMisMatch()
    }

    return (
        <div className="itemList">
            {
            search === undefined || search === "" ?
            itemList.map((item) => <Item key={item.id} item={item} />) :
            macht ? 
            itemList.map((item) => 
                item.category === search &&
                    <Item key={item.id} item={item} /> 
            ) : <p className="misMatch">Categoria vacia!</p>
            }
        </div>
    );
}  