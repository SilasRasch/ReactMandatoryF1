import { NavLink } from "react-router-dom";
import "../styles/navbar.css"

export default function Navbar() {
    return (
        <div className="navbar">
            <NavLink to="/">
                {({ isActive, isPending, isTransitioning }) => (
                <span className={isActive ? "active nav-item" : "nav-item"}>Home</span>
                )}
            </NavLink>
            <NavLink to="/drivers">
                {({ isActive, isPending, isTransitioning }) => (
                <span className={isActive ? "active nav-item" : "nav-item"}>Drivers</span>
                )}
            </NavLink>
            <NavLink to="/teams">
                {({ isActive, isPending, isTransitioning }) => (
                <span className={isActive ? "active nav-item" : "nav-item"}>Teams</span>
                )}
            </NavLink>
            <NavLink to="/favorites">
                {({ isActive, isPending, isTransitioning }) => (
                <span className={isActive ? "active nav-item" : "nav-item"}>Favorites</span>
                )}
            </NavLink>
        </div>
    )
}