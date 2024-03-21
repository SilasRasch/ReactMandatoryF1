import React from 'react';
import Points from './Points';

const Team = (props) => {
    const team = props.team
    const classes = "team card " + team.teamColors
    return (
        <div key={team.id} className={classes}>
            <div className='d-flex card-top'>
                <div className='column'>
                    <div>
                        <p className='bold'>{team.name}</p>
                        <hr />
                    </div>
                    <div>
                        {/* <p>{team.worldChampionships} championships</p> */}
                        <p>{team.worldChampionships} championships</p>
                        <hr/>
                    </div>
                    <div>
                        <p>Team Chief</p>
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
                    { team.drivers[0] !== undefined ? <p>{team.drivers[0].name}</p> : <p>Driver unavailable</p>}
                    {/* <p>{team.drivers[0].name}</p>  */}
                    <hr />
                    { team.drivers[1] !== undefined ? <p>{team.drivers[1].name}</p> : <p>Driver unavailable</p>}
                    {/* <p>{team.drivers[1].name}</p> */}
                </div>
                <p className='pts team-points' style={Points(props.index)}>{team.points} pts</p>
            </div>
        </div>
    );
}

export default Team;
