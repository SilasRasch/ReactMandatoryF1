import React from 'react';
import { useGetDriversQuery } from '../store/api/apiSlice';
import Driver from './Driver';
// import { useState } from 'react';

const DriverList = () => {
    const { data, isLoading, isSuccess, isError, error } = useGetDriversQuery()

    // Conditional rendering
    let content;
    if (isLoading) {
        content = <p className='loading'>Loading <i className="fa fa-circle-o-notch fa-spin" style={{fontSize: '24px'}}></i></p>
    } else if (isSuccess) {
        // console.log(data)
        const sortedData = data.toSorted((a, b) => b.points - a.points)
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

export default DriverList;