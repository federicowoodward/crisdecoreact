import { getDoc, doc, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./itemDetail.js";
import { Link } from "react-router-dom";

export default function ItemDetailContainer(){
    const [item,setItem] = useState({});
    const [loading, setLoading] = useState(true);
    const [data,setData] = useState(true);
    const {id} = useParams();
    useEffect(() => {
        const db = getFirestore();
        const dbQuery = doc(db,"productos", `${id}`)
        getDoc(dbQuery)
        .then(resp => {
            if (resp.data() === undefined) {
                setData(false);
                alert("esta foto no existe");
            } else {
                setItem( {id: resp.id, ...resp.data()})
            }
        })
        .catch(err => console.error(err))
        .finally(setLoading(false));
      }, [id])
    return (
        <div className="detailContainer">
        { loading ? <p>Cargando...</p> : data ?
        <ItemDetail item={item}/> :
        <Link to={"/category/"}>
             <button className="returnButtonDetail">
                <span className="button_top" >Volver a productos</span>
            </button>
        </Link>
        }
    </div>
    );
}