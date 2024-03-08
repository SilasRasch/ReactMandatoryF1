import React from 'react';
import { addDriver } from '../store';
import { useDispatch } from 'react-redux';

const DriverForm = () => {
    const dispatch = useDispatch()
    
    var name = ''
    var team = ''
    var wins = 0
    var age = 0
    var championships = 0

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(addDriver({name, team, age, wins, championships}))
    }

    
    const driverForm = () => {
        return(
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name</label>
                    <input value={name} />
                </div>
                <div>
                    <label>Team</label>
                    <input value={team} />
                </div>
                <div>
                    <label>Age</label>
                    <input value={age || ''} />
                </div>
                <div>
                    <label>Wins</label>
                    <input value={wins || ''} />
                </div>
                <div>
                    <label>Championships</label>
                    <input value={championships || ''} />
                </div>
                <div>
                    <button>Submit</button>
                </div>
            </form>
        )
    }
    
    return (
        <div>
            {driverForm}
        </div>
    );
}

export default DriverForm;
