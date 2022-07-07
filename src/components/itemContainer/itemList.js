import Item from './item.js';
import React from 'react';
import "./itemContainer.css";
export default function ItemList({ itemList,search }){
    return (
        <div className="itemList">
            {
            search === undefined || search === "" ?
            itemList.map((item) => <Item key={item.id} item={item} />) :
            itemList.map((item) => 
                item.category === search ?
                    <Item key={item.id} item={item} /> :
                    null
                
            )
            }
        </div>
    );
} 