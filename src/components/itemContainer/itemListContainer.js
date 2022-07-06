import { collection, getDocs, getFirestore} from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./itemList.js";

export default function ItemListContainer () {
    const [itemList, setItemList] = useState([]);
    const [loading, setLoading] = useState(false);
    const {id} = useParams();
    useEffect(() => {
        const db = getFirestore()
        let queryCollection =   collection(db,"productos");
        getDocs(queryCollection)
        .then ( resp => {
            if (resp.size === 0) {
                console.log("no results!");
            } else {
                setItemList( resp.docs.map(item => ({id: item.id, ...item.data()})))}})
        .catch(err => console.log(err))
        .finally(setLoading(true));
    },[id])
    return (
        <div>
            <p>Hi wordld!</p>
            {loading ? <ItemList itemList={itemList} id={id}/> : <p>cargando...</p>}
        </div>
    );
}