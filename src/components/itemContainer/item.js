import "./itemContainer.css";
export default function Item(item) {
    return (
        <div className="item">
            <img src={item.item.imgUrl} alt={item.item.alt} />
            <p className="itemName">{item.item.name}</p>
            { !item.item.alt ? <p className="itemAlt">No hay descripcion disponible</p> : <p className="itemAlt">{item.item.alt}</p>}
            <span>
                <p className="itemStock">Stock: {item.item.stock}</p>
                <button>
                    Comprar
                    <div className="arrow-wrapper">
                        <div className="arrow"></div>
                    </div>
                </button>
            </span>
        </div>
    );
}