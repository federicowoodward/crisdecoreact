import Item from './item.js';
import React from 'react';
// import "./itemList.css";
export default function ItemList({ itemList }){
    return (
        <div className="itemList">
            {
            itemList.map((item) => <Item key={item.id} item={item} />)
            }
        </div>
    );
}