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
        .finally(setTimeout(() =>setLoading(true),3000) );
    },[id])

    function generateSearch(e) {
        search = e.target.value.toLocaleLowerCase();
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
                <div className="itemContainer fillingPhoto">
                    <div className="inputsGroup">
                        <p>Buscar:</p>
                        <div className="group">
                            <svg className="icon" aria-hidden="true" viewBox="0 0 24 24" onClick={startSearch}>
                                <g>
                                    <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                                </g>
                            </svg>
                            <input 
                            placeholder="Por categoria" 
                            className="input" 
                            type="search" 
                            name="category" 
                            onChange={(e) => generateSearch(e)}
                            onKeyPress={(e) => {
                                if(e.code === "Enter") {
                                    startSearch();
                                }}
                            }
                            />
                        </div>
                        <label className="rocker rocker-small"  >
                            <input type="checkbox"onChange={(e) => console.log(e.target.value)}/>
                            <span className="switch-left">Yes</span>
                            <span className="switch-right">No</span>
                        </label>
                    </div>
                {
                    searchStatus ? <ItemList itemList={itemList} id={id} search={searchValue}/> :
                    <ItemList itemList={itemList} id={id} />
                }
                </div>
        );
    }
}

