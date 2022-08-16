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
    const [categoryList, setList] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        const db = getFirestore()
        const queryCollection =   collection(db,"productos");
        getDocs(queryCollection)
        .then ( resp => {
            if (resp.size === 0) {
                console.log("no results!");
            } else {
                setItemList( resp.docs.map(item => ({id: item.id, ...item.data()})))}})
        .catch(err => console.log(err))
        .finally(setTimeout(() =>setLoading(true),3000) );

        const queryCollectionOfCategories = collection(db, 'categories');
        getDocs(queryCollectionOfCategories)
        .then ( resp => setList( resp.docs.map(item => ({id : item.id , ...item.data()}))))
        .catch(err => console.log(err))
        .finally( setTimeout(() => sessionStorage.setItem("firstReload", false), 1000))
    },[id])

    function generateSearch(e) {
        setSearchValue(e);
        setSearchStatus(true);
        
        setSelected(e)
    }
            return (
                <div className="itemContainer fillingPhoto">
                    <div className="categoriesContainer">
                        <h1>Categorias:</h1>
                        <ul>
                            <li><p className={selected === "" ? "selected" : ""} onClick={(e) => generateSearch("")}>Todos</p></li>
                            {categoryList.map(category => {
                                let lowerCase = category.name.toLowerCase();
                                return (
                                <li><p className={selected === `${lowerCase}` ? "selected" : ""} onClick={(e) => generateSearch(`${lowerCase}`)}>{category.name}</p></li>
                                );
                            })}
                        </ul>
                    </div> 
                    {
                        !loading ? <div className="loaderSetUp">< Loader /></div>  : searchStatus ? <ItemList itemList={itemList} id={id} search={searchValue}/> :
                          <ItemList itemList={itemList} id={id} />
                    }
                </div>
        );
    }

