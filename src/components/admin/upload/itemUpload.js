import { addDoc, collection, getFirestore } from "firebase/firestore";
import { getStorage, ref, deleteObject } from "firebase/storage";
import { Link } from "react-router-dom";
import { useState } from 'react';
import "./itemUpload.css";
import Item from "../../itemContainer/item";
export default function ItemUpload({img, redirect}) {
    const [item, setItem] = useState({})
    const [itemPreview, setItemPreview] = useState({})
    const [upload, setUploadDone] = useState(false)
    let itemToUpload = {};

    itemPreview.imgUrl = img;
  
    function generateItem(e) {
        setItem({
            ...item,
            [e.target.name]: e.target.value
        });
        setItemPreview({
            ...item,
            [e.target.name]: e.target.value,
        });
    }
    function uploadItem() {
        itemToUpload.alt = item.alt.toLowerCase();
        itemToUpload.category = item.category.toLowerCase();
        itemToUpload.name = item.name.toLowerCase();
        itemToUpload.stock = item.stock.toLowerCase();
        itemToUpload.imgUrl = img;

        const db = getFirestore();
        const queryCollection = collection(db, 'productos');
        addDoc(queryCollection, itemToUpload)
        .catch(err => console.log(err))
        .finally(
            setItem({}),
            itemToUpload = {},
            setUploadDone(true)
        )
    };
    function deleteItem() {
        const storage = getStorage();
        const desertRef = ref(storage, `${img}`);
        deleteObject(desertRef)
            .then(() => {
                    alert("imagen borrada")
            } )
            .catch((error) => {
                alert(error);
            })
            .finally(() => {redirect()});
            }

      if (upload === true)  {
          return( 
            <div className="itemUpload true">
                <Link to="/upload">
                    <button> Subir otra foto</button>
                </Link>
                <Link to="/">
                    <button> Volver al inicio</button>
                </Link>
              </div>
                );
    } else if (upload === false) {
        return(
            <div className="fillingPhoto">
                <div className="itemUpload ">
                    <div className="form">
                        <img src={img} alt="" className="imgUpload"/>
                        <form>
                            <input name="name" placeholder="Nombre" type="text" onChange={(e) => generateItem(e)}/>
                            <input name="category" placeholder="Categoria" type="text" onChange={(e) => generateItem(e)}/>
                            <input name="alt" placeholder="Descripcion" type="text" onChange={(e) => generateItem(e)}/>
                            <input name="stock" placeholder="Stock" type="text" onChange={(e) => generateItem(e)}/>
                            <button className="upload" onClick={uploadItem}>Subir</button>
                            <button className="delete" id="delete" onClick={deleteItem}>Borrar foto</button>
                        </form>
                    </div>
                    <div className="preview">
                        <strong>Preview</strong>
                        <Item key={itemToUpload.id} item={itemPreview} />
                    </div>
                </div>
            </div>
        );
    }   
}