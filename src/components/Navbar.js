import { Link, NavLink } from "react-router-dom";
import "../styles/navbar.css"

export default function Navbar() {
    return (
        <div className="navbar">
            <NavLink to="/">
                {({ isActive, isPending, isTransitioning }) => (
                <span className={isActive ? "active" : ""}>Home</span>
                )}
            </NavLink>
            <NavLink to="/drivers">
                {({ isActive, isPending, isTransitioning }) => (
                <span className={isActive ? "active" : ""}>Drivers</span>
                )}
            </NavLink>
            <NavLink to="/teams">
                {({ isActive, isPending, isTransitioning }) => (
                <span className={isActive ? "active" : ""}>Teams</span>
                )}
            </NavLink>
            <NavLink to="/champions">
                {({ isActive, isPending, isTransitioning }) => (
                <span className={isActive ? "active" : ""}>Champions</span>
                )}
            </NavLink>
        </div>
    )
}