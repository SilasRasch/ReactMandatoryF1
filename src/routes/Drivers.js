import Navbar from "../components/Navbar";
import React from 'react';
import DriverList from "../components/DriverList";
import DriverForm from "../components/DriverForm";
import { useState } from "react";

const Drivers = () => {
    const [show, setShow] = useState(false);

    const handleClick = () => {
        setShow(!show)
    }

    return (
        <div>
            <Navbar />
            <div className="content">
                <div className="d-flex heading">
                    <h1 className="title">F1 Drivers <hr /></h1>
                    <button className="btn btn-add fa fa-plus" onClick={handleClick}></button>
                </div>
                <div className=""></div>
                { show ? <DriverForm /> : null }
                <DriverList />
            </div>
        </div>
    );
}

export default Drivers;
