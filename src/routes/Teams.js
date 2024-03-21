import React from 'react';
import Navbar from '../components/Navbar';
import TeamsList from '../components/TeamsList';
import { useState } from 'react';

const Champions = () => {
    const [show, setShow] = useState(false);

    const handleClick = () => {
        setShow(!show)
    }
    
    return (
        <div>
            <Navbar/>
            <div className='content'>
                <div className="d-flex heading">
                    <h1 className="title">F1 Teams of 2024<hr /></h1>
                    <button className="btn btn-add fa fa-plus" onClick={handleClick}></button>
                </div>
                <TeamsList />
            </div>
        </div>
    );
}

export default Champions;
