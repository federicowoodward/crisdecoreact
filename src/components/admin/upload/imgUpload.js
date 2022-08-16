import { getDownloadURL, getStorage, ref, uploadBytesResumable} from "firebase/storage";
import React, { useState } from 'react';
import ItemUpload from "./itemUpload";
import "./imgUpload.css";
export default function Upload(){
    const [uploadState, setUpState] = useState(false);
    const [uploadImg, setImg] = useState();
    const [progress, setProgress] = useState(0);

    function redirectToUpload() {
        window.location.reload()
    }
    function handleUpload(event) {
        const file = event.target.files[0];
        const storage = getStorage();
        const storageRef = ref(storage, `${file.name}`);
        const task = uploadBytesResumable(storageRef, file);
        
        task.on('state_changed', snapshot => {
            let percentage = ( snapshot.bytesTransferred / snapshot.totalBytes * 100)
            percentage < 100 ? setProgress(percentage) : setUpState(true)
        }, err => { 
            console.log(err.message) 
        }, () => { 
           getDownloadURL(task.snapshot.ref).then((downloadURL) => {
               setImg(downloadURL);
           })
        });
    }

    if (uploadState === true) {
        return (
            <div>
                <ItemUpload img={uploadImg} redirect={redirectToUpload}/> 
            </div>
        );
    } else if (uploadState === false) {

        return (
            <div className="selectContainer">
                <p className="select"> Seleccionar archivo:</p>
                <br/>
                <input className="selectInput" type="file" onChange={(e) => handleUpload(e)}/> 
                <div className="progressBar">
                    <p>%{progress}</p>
                </div>
            </div>
        )
    }
}