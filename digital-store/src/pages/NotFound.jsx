import { Link } from "react-router-dom";
import HomePage from "./HomePage";

const NotFound = () => {

    return (
        <>
            <p>Aqui não tem nada</p>
            <Link to={<HomePage />}>Volte</Link>
        </>
    );
}
 
export default NotFound;