import { getDownloadURL, getStorage, ref, uploadBytesResumable} from "firebase/storage";
import React, { useState } from 'react';
import ItemUpload from "./itemUpload";
import "./imgUpload.css";
export default function Upload(){
    const [uploadState, setUpState] = useState(true);
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
            let percentage = Math.round( snapshot.bytesTransferred / snapshot.totalBytes * 100)
            setProgress(percentage) 
            percentage < 100 && setTimeout(() => {setUpState(true)},2500)
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
            <div className="fillingPhoto">
                <div className="selectContainer">
                    <p className="select"> Seleccionar archivo:</p>
                    <input className={progress === 100 ? 'selected' : "selectInput"} type="file" onChange={(e) => handleUpload(e)}/> 
                    <div className="progressBar">
                        <p>{progress} %</p>
                        <progress min="0" max="100" value={progress}></progress>
                    </div>
                </div>
            </div>
        )
    }
}