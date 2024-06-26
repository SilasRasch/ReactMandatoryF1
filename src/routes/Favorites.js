import React from 'react';
import Navbar from '../components/Navbar';
import FavoritesList from '../components/FavoritesList';

const Champions = () => {
    return (
        <div>
            <Navbar/>
            <div className='content'>
                <div className="d-flex heading">
                    <h1 className="title">My favorites<hr /></h1>
                </div>
                <FavoritesList />
            </div>
        </div>
    );
}

export default Champions;
