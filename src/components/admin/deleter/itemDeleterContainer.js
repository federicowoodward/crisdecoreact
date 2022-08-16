import { collection, deleteDoc, getDocs, getFirestore,doc} from "firebase/firestore";
import { getStorage, ref, deleteObject } from "firebase/storage";
import ItemDeleter from './itemDeleter.js';
import { useEffect, useState, memo } from "react";
import { useParams } from "react-router-dom";
import Loader from '../../loader/loader.js';

function ItemListContainer (){
    const [itemList, setItemList] = useState([]);
    const [loading, setLoading] = useState(true);
    const {id} = useParams();

    
    useEffect(() => {
        const db = getFirestore()
        const queryCollection = collection(db,"productos");
        getDocs(queryCollection)
        .then ( resp => {
            if (resp.size === 0) {
                alert("no hay productos para mostrar")
            } else {
                setItemList( resp.docs.map(item => ({id: item.id, ...item.data()})))}})
                .catch(err => console.log(err))
        .finally(setTimeout(() => setLoading(false), 2000));
    },[id])

    function deleteItem(item) {
        console.log(item)
        const db = getFirestore()
        const storage = getStorage();
        deleteDoc(doc(db, "productos", `${item.id}` ))
        .then(() => {
            const desertRef = ref(storage, `${item.imgUrl}`);
            deleteObject(desertRef)
        })
        .catch(err => console.log(err))   
    }
    function reload() {
        window.location.reload()
    }

    return (
        <div>
        {loading ? <Loader/> : <ItemDeleter itemList={itemList} id={id} deleter={deleteItem} reload={reload}/>}
        </div>
    );
};
export default memo(ItemListContainer);