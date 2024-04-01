import Navbar from "../components/Navbar";
import React from 'react';
import DriverList from "../components/DriverList";
import '../styles/drivers.css'
import AddDriverModal from "../components/AddDriverModal";
import { useSelector } from "react-redux";

const Drivers = () => {
    const isAdmin = useSelector((state) => state.admin.isAdmin)
    
    return (
        <div>
            <Navbar />
            <div className="content">
                <div className="d-flex heading">
                    <h1 className="title">F1 Drivers of 2024<hr /></h1>
                    {isAdmin ? <AddDriverModal /> : <></> }
                </div>
                <DriverList />
            </div>
        </div>
    );
}

export default Drivers;
