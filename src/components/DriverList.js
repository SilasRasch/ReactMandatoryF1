import React from 'react';
import avatar from "../styles/max.png"

const DriverList = () => {
    // const dispatch = useDispatch()
    // const drivers = useSelector(({driver: {data, searchTerm}}) => {
    //     return data.filter((driver) => driver.name.toLowerCase().includes(searchTerm.toLowerCase()));
    // });

    const drivers = [
        {id: 1, name: "Max Verstappen", team: "Redbull", age: 25, wins: 105, championships: 3, number: 1 },
        {id: 2, name: "Lewis Hamilton", team: "Mercedes", age: 32, wins: 205, championships: 7, number: 11 },
        {id: 3, name: "Fernando Alonso", team: "Aston Martin", age: 43, wins: 84, championships: 2, number: 14 },
    ]
    
    const renderDrivers = drivers.map((driver) => {
        return (
            <div key={driver.id} className='driver'>
                <div className='d-flex driver-top'>
                    <div className='column info-column'>
                        <p className='driver-no'>{driver.number} <hr /></p>
                        <p>{driver.wins} wins<hr /></p>
                        <p>{driver.age} yrs old<hr /></p>
                    </div>
                    <div className='column'>
                        <img className='driver-avatar' alt={driver.name + " portrait"} src={avatar} />
                    </div>
                </div>
                <div className='d-flex driver-bottom'>
                    <div className='column'>
                        <p>{driver.name}</p> 
                        <hr />
                        <p>{driver.team}</p>
                    </div>
                    <div className='column'>
                        {/* <p>{driver.championships} championships</p> */}
                        <p className='pts'>10 pts</p>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div className='drivers'>
            {renderDrivers}
        </div>
    )
}

export default DriverList;
