import { UseCartContext } from "../../context/CartContext.js";
import BuyButtons from "../buyButtons/buyButtons.js";
import ItemCount from "../itemCount/itemCount.js";
import { useState } from "react";
import React from "react";
import "./itemDetail.css";
import { Link } from "react-router-dom";
export default function ItemDetail({item}) {
    const [inputType, setInputType] = useState("itemCount");
    // const {addToCart} = UseCartContext();

    function onAdd(quantity) {
        // addToCart({photo, quantity});
        setInputType("buyButtons");
    }

    return (
        <div className="itemDetail">
            <Link to={"/products"}>
                <button>
                    back
                </button>
            </Link>
            <img className="itemDetailImg" src={item.imgUrl} alt={item.alt}/>
            <div className='itemDetailInfo'>
                <p className='itemDetailCliente'>Stock: {item.stock}</p>
                <p className="itemDetailDetail">Detalle: {item.alt}</p>
                { inputType === "itemCount" ?
                <ItemCount initial={1} stock={item.stock} onAdd={onAdd} />
                :
                <BuyButtons/> }
            </div>
        </div>
    );
}