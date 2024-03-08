import { Link } from "react-router-dom";
import "../styles/navbar.css"

export default function Navbar() {
    return (
        <div className="navbar">
            <Link to="/">Home</Link>
            <Link to="/teams">Teams</Link>
            <Link to="/drivers">Drivers</Link>
            <Link to="/champions">Champions</Link>
        </div>
    )
}