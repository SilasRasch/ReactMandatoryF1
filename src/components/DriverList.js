import React from 'react';
import { useGetDriversQuery } from '../store/api/apiSlice';
import { useState } from 'react';

const DriverList = () => {
    const { data, isLoading, isSuccess, isError, error } = useGetDriversQuery()
    
    // Making sure favorites is never null, but an empty array.
    const [favorites, setFavorites] = useState(() => 
    {
        const local = JSON.parse(localStorage.getItem('favoriteDrivers'))

        if (local === null) {
            return []
        }
        return local
    })
    
    // Debugging
    //console.log(JSON.parse(localStorage.getItem('favoriteDrivers')))

    /* Add to copy and then set local storage
    setFavorites (setState) is async and will issue re-render before state is set.
    State will therefore be one event behind at all renders... */
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

    // Conditional rendering
    let content;
    if (isLoading) {
        content = <p className='loading'>Loading <i className="fa fa-circle-o-notch fa-spin" style={{fontSize: '24px'}}></i></p>
    } else if (isSuccess) {
        content = data.map((driver) => {
            const classes = "driver " + driver.team.teamColors
            
            let isFavorite = false;
            if (favorites.includes(driver.driverNumber)) {
                isFavorite = true
            }

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
                            <p className='pts'>{driver.points} pts</p>
                            {/* { pointsHidden ? <p className='pts'>{driver.points} pts</p> : <button className='pts btn fa fa-heart' onClick={handleFavorite(driver.driverNumber)}></button>} */}
                            <button key={driver.driverNumber} className='btn btn-fav fa fa-heart' style={isFavorite ? {backgroundColor: 'darkred'} : {}} onClick={() => handleFavorite(driver.driverNumber)}></button>
                        </div>
                    </div>
                </div>
            )
        })
    } else if (isError) {
        content = <p>{error.error}</p>
    }

    return (
        <div className='drivers'>
            {content}
        </div>
    )
}

export default DriverList;