import { collection, getDocs, getFirestore} from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./itemList.js";

export default function ItemListContainer () {
    const [itemList, setItemList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    const [searchStatus, setSearchStatus] = useState(false);
    const {id} = useParams();
    let search = "";

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

    function generateSearch(e) {
        search = e.target.value;
    }

    function startSearch() {
        setSearchValue(search);
        setSearchStatus(true);
    }
    if (!loading) {
        return (
            <div>
                <p>Cargando...</p>
            </div>
            );
    }
    else if (loading) {
            return (
                <div>
                <input type="text" name="category" onChange={(e) => generateSearch(e)}/>
                <button onClick={startSearch}>Buscar</button>
                {
                    searchStatus ? <ItemList itemList={itemList} id={id} search={searchValue}/> :
                    <ItemList itemList={itemList} id={id} />
                }
            </div>
        );
    }
}

