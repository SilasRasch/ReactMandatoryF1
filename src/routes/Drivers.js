import Navbar from "../components/Navbar";

import React from 'react';
import DriverList from "../components/DriverList";

const Drivers = () => {
    return (
        <div>
            <Navbar />
            <div className="content">
                <h1 className="title">F1 Drivers <hr /></h1>
                <DriverList />
            </div>
        </div>
    );
}

export default Drivers;
