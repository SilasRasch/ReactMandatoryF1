import React from 'react';
import Points from './Points';

const Driver = (props) => {
    const driver = props.driver

    // Convert to using Global state (react-redux)
    const handleFavorite = async (id) => {
        const setLocalStorage = (arr) => {
            localStorage.setItem('favoriteDrivers', JSON.stringify(arr))  
        }
        
        var copy = favorites
        
        if (copy.includes(id)) {
            copy = copy.filter(d => d !== id)
            setLocalStorage(copy)    
            await setFavorites(copy)
        }
        else {
            copy = [...copy, id]
            setLocalStorage(copy)   
            await setFavorites(copy)
        }     
    }
    
    const classes = "driver " + driver.team.teamColors

    return (
        <div key={driver.driverNumber} className={classes}>
            <div className='d-flex driver-top'>
                <div className='column info-column'>
                    <div>
                        <p className='driver-no'>{driver.driverNumber}</p>
                        <hr />
                    </div>
                    <div>
                        <p>{driver.championships} championships</p>
                        <hr/>
                    </div>
                    <div>
                        <p>DOB: {driver.dateOfBirth}</p>
                        <hr/>
                    </div>
                </div>
                <div className='column'>
                    <img className='driver-avatar' alt={driver.name + " portrait"} src={`${driver.portraitImgPath}`} />
                </div>
            </div>
            <div className='d-flex driver-bottom'>
                <div className='column'>
                    <p>{driver.name}</p> 
                    <hr />
                    <p>{driver.team.name}</p>
                </div>
                <div className='driver-buttons'>
                    <p className='pts' style={Points(props.index)}>{driver.points} pts</p>
                    <button key={driver.driverNumber} className='btn btn-fav fa fa-heart' style={isFavorite ? {backgroundColor: 'darkred'} : {}} onClick={() => handleFavorite(driver.driverNumber)}></button>
                </div>
            </div>
        </div>
    );
}

export default Driver;
