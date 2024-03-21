import React from 'react';
import { useGetDriversQuery } from '../store/api/apiSlice';
import Driver from './Driver';
import { useSelector } from 'react-redux';

const FavoritesList = () => {
    const { data, isLoading, isSuccess, isError, error } = useGetDriversQuery()

    const favorites = useSelector((state) => state.favorites.data)

    // Conditional rendering
    let content;
    if (isLoading) {
        content = <p className='loading'>Loading <i className="fa fa-circle-o-notch fa-spin" style={{fontSize: '24px'}}></i></p>
    } else if (isSuccess) {
        const filtered = data.filter(driver => favorites.includes(driver.driverNumber))

        if (filtered.length === 0) { return <h2 className='driver text-center'>You don't seem to have any favorites...</h2> }
        
        const sortedData = filtered.toSorted((a, b) => b.points - a.points)
        content = sortedData.map((driver, index) => {
            return (
                <Driver key={driver.driverNumber} driver={driver} index={index}/>
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

export default FavoritesList;
