import { useEffect,useState } from "react";
import { collection, getDocs, getFirestore, addDoc, deleteDoc, doc} from "firebase/firestore";
import "./categoriesManager.css";
export default function CategoriesManager() {
    const [list, setList] = useState([]);
    const [status, setStatus] = useState(true);
    const [newCategory,setCategoryName] = useState("");
    const [lastActionStatus, setStatusOfActions] = useState(false);
    const [lastAction, setLastAction] = useState("");
    const [action, setAction] = useState("");
    
    useEffect(() => {
        const db = getFirestore()
        const queryCollectionOfCategories = collection(db, 'categories');
        getDocs(queryCollectionOfCategories)
        .then ( resp => setList( resp.docs.map(item => ({id : item.id , ...item.data()}))))
        .catch(err => console.log(err))
        .finally( setTimeout(() => sessionStorage.setItem("firstReload", false), 1000))
    })

    function ejecute() {
        setStatus(!status)
        upNewCategory()
    }
    
    function upNewCategory() {
        const db = getFirestore();
        const queryCollection = collection(db, 'categories');
        addDoc(queryCollection, {name: newCategory})
        .catch(err => console.log(err))
        .finally(
            setStatusOfActions(true),
            setLastAction("added"),
            setAction(newCategory),
            setTimeout(() => {
                setStatusOfActions(false)
            }, 5000)
        )
    }

    function deleteCategory(item) {
        const db = getFirestore()
        deleteDoc(doc(db, "categories", `${item.id}` ))
        .finally(
            setStatusOfActions(true),
            setLastAction("deleted"),
            setAction(item.name),
            setTimeout(() => {
                setStatusOfActions(false)
            }, 5000)
        )
    }

    return (
        <div className="categoriesManager">
            <div>
                {list.map(item => {
                    return (
                        <div key={item.id}>
                            <p>{item.name}</p>
                            <button onClick={(id) => deleteCategory(item)}>^ Borrar ^</button>
                        </div>
                    );
                })}
                {
                    status ?  <button onClick={() => setStatus(!status)}>Agregar</button> : 
                    <div>
                        <input name="category" type="text" placeholder="Escribe categoria a agregar" onChange={(e) => setCategoryName(e.target.value)} />
                        <button onClick={ejecute}>Agregar</button> 
                    </div>
                }
            </div>
            {
                lastActionStatus && lastAction === "deleted" && <div><p>Borrado: {action}</p></div>  
            }
            {
                lastActionStatus && lastAction === "added" && <div><p>Agregado: {action}</p></div>
            }
        </div>
    );
}