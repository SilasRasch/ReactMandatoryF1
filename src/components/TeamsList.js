import React from 'react';
import { useGetTeamsQuery } from '../store/api/apiSlice';
// import '../styles/styles.css'

const TeamsList = () => {
    const { data, isLoading, isSuccess, isError, error } = useGetTeamsQuery()
    


    let content;
    if (isLoading) {
        content = <p className='loading'>Loading <i className="fa fa-circle-o-notch fa-spin" style={{fontSize: '24px'}}></i></p>
    } else if (isSuccess) {
        console.log(data)
        content = data.map((team) => {
            const classes = "team card " + team.teamColors
            return (
                <div key={team.id} className={classes}>
                    <div className='d-flex card-top'>
                        <div className='column'>
                            <div>
                                {/* <p className=''>Id: {team.id}</p> */}
                                <p>{team.worldChampionships} championships</p>
                                <hr />
                            </div>
                            <div>
                                {/* <p>{team.worldChampionships} championships</p> */}
                                <p>Team Chief</p>
                                {/* <hr/> */}
                            </div>
                            <div>
                                <p>{team.teamChief}</p>
                                <hr/>
                            </div>
                        </div>
                        <div className='column'>
                            <img className='avatar' alt={team.name + " logo"} src={`${team.logoImgPath}`} />
                        </div>
                    </div>
                    <div className='d-flex card-bottom'>
                        <div className='column'>
                            <p>{team.drivers[0].name}</p> 
                            <hr />
                            <p>{team.drivers[1].name}</p>
                        </div>
                        <p className='pts team-points'>{team.points} pts</p>
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

export default TeamsList;
