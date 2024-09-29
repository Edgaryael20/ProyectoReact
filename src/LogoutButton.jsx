import { useContext } from "react";
import { AuthContext } from "./AuthContext";

function LogoutButton() {
    const { logout } = useContext(AuthContext);

    return (
        <button className="btn" onClick={logout}>Cerrar sesion</button>
    );
}

export default LogoutButton;