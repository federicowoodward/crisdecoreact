import "./admin.css";
import { Link} from "react-router-dom";
export default function Admin() {
    return (
        <div className="admin">
            <button><Link to={"/upload"}>  Subir item</Link></button>
            <button><Link to={"/deleter"}>  Borrar item</Link></button>
            <button>Subir item</button>
        </div>
    );
}