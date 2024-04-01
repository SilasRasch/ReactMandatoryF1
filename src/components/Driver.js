import React from 'react';
import Points from './Points';
import { useSelector, useDispatch } from 'react-redux';
import { addFavoriteDriver, removeFavoriteDriver } from '../store/slices/favoritesSlice';
import { NavLink } from 'react-router-dom';

const Driver = (props) => {
    const driver = props.driver

    const favorites = useSelector((state) => state.favorites.data)
    const isAdmin = useSelector((state) => state.admin.isAdmin)
    const dispatch = useDispatch()
    
    // Debugging
    // console.log(JSON.parse(localStorage.getItem('favoriteDrivers')))

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
            dispatch(removeFavoriteDriver(id))
            // await setFavorites(copy)
        }
        else {
            copy = [...copy, id]
            setLocalStorage(copy)
            dispatch(addFavoriteDriver(id))   
            // await setFavorites(copy)
        }  
    }
    
    const handleEdit = (id) => {
        console.log("Edit " + id)
    }
    
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
                    <p className='pts' style={Points(props.index)}>{driver.points} pts</p>
                    {!isAdmin ? <button key={driver.driverNumber} className='btn btn-fav fa fa-heart' style={isFavorite ? {backgroundColor: 'darkred'} : {}} onClick={() => handleFavorite(driver.driverNumber)}></button> : <NavLink to={"/driver/" + driver.driverNumber} key={driver.driverNumber} className='btn btn-fav fa fa-pencil' onClick={() => handleEdit(driver.driverNumber)}></NavLink>}
                </div>
            </div>
        </div>
    );
}

export default Driver;
