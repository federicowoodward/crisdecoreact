import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import "./admin.css";
import { Link} from "react-router-dom";
import { useState, useEffect } from "react";

const provider = new GoogleAuthProvider();
export default function Admin() {
        const [signInStatus, setStatus] = useState(0);
        const [user, setUser] = useState("");
        const auth = getAuth();

        useEffect(() => {
            if (sessionStorage.getItem("userLogin") === null) {
                setStatus(0)
            } else if (sessionStorage.getItem("userLogin")) {
                setUser(sessionStorage.getItem("user"))
                setStatus(1)
            }
        },[])

        function signIn() {
            signInWithPopup(auth, provider)
            .then((result) => {
                if (result.user.displayName === "Fede Woodward" || result.user.displayName === "Julieta WOODWARD") {
                    // This gives you a Google Access Token. You can use it to access the Google API.
                    // const credential = GoogleAuthProvider.credentialFromResult(result);
                    // const token = credential.accessToken;
                    // The signed-in user info.
                    const user = result.user;
                    setStatus(1)
                    setUser(user.displayName)

                    sessionStorage.setItem("user", user.displayName);
                    sessionStorage.setItem("userLogin", true);
                }
                else {
                    setStatus(3)
                }
            })
            .catch((error) => {
                // Handle Errors here.
                // const errorCode = error.code;
                // const errorMessage = error.message;
                // The email of the user's account used.
                // const email = error.customData.email;
                // The AuthCredential type that was used.
                // const credential = GoogleAuthProvider.credentialFromError(error);
                console.log(error)
                // ...
            });
        }

        function startLogin() {
            if (sessionStorage.getItem("userLogin") === null) {
                signIn();
            } else if (sessionStorage.getItem("userLogin")) {
                setUser(sessionStorage.getItem("user"))
                setStatus(1)
            }
        }

        function loginOut() {
            sessionStorage.removeItem("userLogin")
            sessionStorage.removeItem("user")
            setStatus(0)
        }

    if (signInStatus === 0) {
        return (
            <div className="admin">
                <p>Para continuar por favor inicia sesion con Google:</p>
                <button onClick={startLogin}>Iniciar sesion</button>
                <h4>Para probar esta seccion, porfavor contactese al siguiente correo:</h4>
                <h3>woodfederico@gmail.com</h3>
            </div>
            );
    }
    else if (signInStatus === 1)  {
        return (
            <div className="admin">
                <div>
                    <p>Bienvenido <strong>{user}</strong>!!</p>
                </div>
                <button><Link to={"/upload"}>  Subir item</Link></button>
                <button><Link to={"/deleter"}>  Borrar item</Link></button>
                <button><Link to={"/categoriesManager"}>  Administrar categorias</Link></button>
                <button onClick={loginOut}>Cerrar session</button>
            </div>
        );
    }
    else if (signInStatus === 2) {
        return (
            <div className="admin">
                <p>Esta seccion de administracion solo esta permitida para ciertos usuarios, vuelva al inicio tocando aqui:</p>
                <button><Link to={"/"}>Volver</Link></button>
            </div>
        );
    }
}  