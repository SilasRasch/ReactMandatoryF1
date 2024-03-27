import { NavLink } from "react-router-dom";
import "../styles/navbar.css"
import { useDispatch, useSelector } from "react-redux";
import { toggleAdmin } from "../store/slices/adminSlice";

export default function Navbar() {
    const isAdmin = useSelector((state) => state.admin.isAdmin)
    const dispatch = useDispatch()
    
    const handleToggleAdmin = () => {
        dispatch(toggleAdmin())
    }

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
            <button className={isAdmin ? "toggle-btn admin-off fa fa-lock" : "toggle-btn admin-on fa fa-unlock-alt"} onClick={() => handleToggleAdmin()}></button>
        </div>
    )
}