import { collection, getDocs, getFirestore} from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../loader/loader.js";
import ItemList from "./itemList.js";

export default function ItemListContainer () {
    const [itemList, setItemList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    const [searchStatus, setSearchStatus] = useState(false);
    const [selected, setSelected] = useState("");
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
        .finally(setTimeout(() =>setLoading(true),3000) );
    },[id])

    function generateSearch(e) {
        setSearchValue(e);
        setSearchStatus(true);
        
        setSelected(e)
        console.log(selected)
    }
            return (
                <div className="itemContainer fillingPhoto">
                    <div className="categoriesContainer">
                        <h1>Categorias:</h1>
                        <ul>
                            <li><p className={selected === "" ? "selected" : null} onClick={(e) => generateSearch("")}>Todos</p></li>
                            <li><p className={selected === "autos" ? "selected" : ""} onClick={(e) => generateSearch("autos")}>Autos</p></li>
                            <li><p className={selected === "sillones" ? "selected" : ""} onClick={(e) => generateSearch("sillones")}>Sillones</p></li>
                            <li><p className={selected === "sillas" ? "selected" : ""} onClick={(e) => generateSearch("sillas")}>Sillas</p></li>
                            <li><p className={selected === "atrapapuertas" ? "selected" : ""} onClick={(e) => generateSearch("atrapapuertas")}>Atrapapuertas</p></li>
                        </ul>
                    </div> 
                    {
                        !loading ? <div className="loaderSetUp">< Loader /></div>  : searchStatus ? <ItemList itemList={itemList} id={id} search={searchValue}/> :
                          <ItemList itemList={itemList} id={id} />
                    }
                </div>
        );
    }

