import React from 'react';

const DriverList = () => {
    // const dispatch = useDispatch()
    // const drivers = useSelector(({driver: {data, searchTerm}}) => {
    //     return data.filter((driver) => driver.name.toLowerCase().includes(searchTerm.toLowerCase()));
    // });

    const drivers = [
        {id: 1, name: "Max Verstappen", team: "Redbull", age: 25, wins: 105, championships: 3, number: 1, imgPath: "https://cdn.racingnews365.com/Riders/Verstappen/_570x570_crop_center-center_none/f1_2024_mv_red_lg.png?v=1708703879" },
        {id: 2, name: "Lewis Hamilton", team: "Mercedes", age: 32, wins: 205, championships: 7, number: 44, imgPath: "https://cdn.racingnews365.com/Riders/Hamilton/_570x570_crop_center-center_none/f1_2024_lh_mer_lg.png?v=1708704226" },
        {id: 3, name: "Fernando Alonso", team: "Aston Martin", age: 43, wins: 84, championships: 2, number: 14, imgPath: "https://cdn.racingnews365.com/Riders/Alonso/_570x570_crop_center-center_none/f1_2024_fa_ast_2024-02-23-153204_uobv.png?v=1708704313" }
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
                        <img className='driver-avatar' alt={driver.name + " portrait"} src={`${driver.imgPath}`} />
                    </div>
                </div>
                <div className='d-flex driver-bottom'>
                    <div className='column'>
                        <p>{driver.name}</p> 
                        <hr />
                        <p>{driver.team}</p>
                    </div>
                    <div className='column'>
                        <p className='pts'>{driver.points} pts</p>
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
