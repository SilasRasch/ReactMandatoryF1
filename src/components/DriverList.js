import React from 'react';
import { useGetDriversQuery } from '../store/api/apiSlice';

const DriverList = () => {
    // const dispatch = useDispatch()
    // const driversFromState = useSelector(({driver: {data, searchTerm}}) => {
    //     return data.filter((driver) => driver.name.toLowerCase().includes(searchTerm.toLowerCase()));
    // });

    const { data, isLoading, isSuccess, isError, error } = useGetDriversQuery()

    let content;
    if (isLoading) {
        content = <p>Loading</p>
    } else if (isSuccess) {
        content = data.map((driver) => {
            const classes = "d-flex driver-top " + driver.team.teamColors
            return (
                <div key={driver.driverNumber} className='driver'>
                    <div className={classes}>
                        <div className='column info-column'>
                            <p className='driver-no'>{driver.driverNumber} <hr /></p>
                            <p>{driver.championships} championships<hr /></p>
                            <p>DOB: {driver.dateOfBirth}<hr /></p>
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
                        <div className='column'>
                            <p className='pts'>{driver.points} pts</p>
                        </div>
                    </div>
                </div>
            )
        })
        // Formula1API!
        // content = drivers.map((driver) => {
        //     return (
        //         <div key={driver.driverNumber} className='driver'>
        //             <div className='d-flex driver-top'>
        //                 <div className='column info-column'>
        //                     <p className='driver-no'>{driver.driverNumber} <hr /></p>
        //                     <p>{driver.championships} championships<hr /></p>
        //                     <p>{driver.age} yrs old<hr /></p>
        //                 </div>
        //                 <div className='column'>
        //                     <img className='driver-avatar' alt={driver.name + " portrait"} src={`${driver.imgPath}`} />
        //                 </div>
        //             </div>
        //             <div className='d-flex driver-bottom'>
        //                 <div className='column'>
        //                     <p>{driver.name}</p> 
        //                     <hr />
        //                     <p>{driver.team}</p>
        //                 </div>
        //                 <div className='column'>
        //                     <p className='pts'>{driver.points} pts</p>
        //                 </div>
        //             </div>
        //         </div>
        //     )
        // })
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