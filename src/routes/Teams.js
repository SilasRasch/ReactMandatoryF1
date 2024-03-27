import React from 'react';
import Navbar from '../components/Navbar';
import TeamsList from '../components/TeamsList';
import AddTeamModal from '../components/AddTeamModal';
import { useSelector } from 'react-redux';

const Champions = () => {    
    const isAdmin = useSelector((state) => state.admin.isAdmin)
    
    return (
        <div>
            <Navbar/>
            <div className='content'>
                <div className="d-flex heading">
                    <h1 className="title">F1 Teams of 2024<hr /></h1>
                    {isAdmin ? <></> : <AddTeamModal />}
                </div>
                <TeamsList />
            </div>
        </div>
    );
}

export default Champions;
