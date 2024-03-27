import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useGetTeamByIdQuery } from '../store/api/apiSlice';
import { NavLink } from 'react-router-dom';
import Points from '../components/Points';

const UpdateTeam = () => {
    const { id } = useParams() 
    const { data, isLoading, isSuccess, isError, error } = useGetTeamByIdQuery(id)
    
    const team = data

    let content;
    if (isLoading) {
        content = <p className='loading'>Loading <i className="fa fa-circle-o-notch fa-spin" style={{fontSize: '24px'}}></i></p>
    } else if (isSuccess) {
        const classes = "team card " + team.teamColors
        content = (
            <div className={classes}>
                <div className='d-flex card-top'>
                    <div className='column'>
                        <div>
                            {/* <p className='bold'>{team.name}</p> */}
                            <input className='bold' placeholder={team.name}></input>
                            <hr />
                        </div>
                        <div>
                            {/* <p>{team.worldChampionships} championships</p> */}
                            <p><input placeholder={team.worldChampionships}></input> championships</p>
                            <hr/>
                        </div>
                        <div>
                            <p>Team Chief</p>
                            {/* <p>{team.teamChief}</p> */}
                            <input placeholder={team.teamChief}></input>
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
                        <hr />
                        { team.drivers[1] !== undefined ? <p>{team.drivers[1].name}</p> : <p>Driver unavailable</p>}
                    </div>
                    <p className='pts team-points' style={Points(1)}><input placeholder={team.points}></input> pts</p>
                </div>
            </div>
        )
    } else if (isError) {
        content = <p>{error.error}</p>
    }

    return (
        <div>
            <Navbar />
            <div className="content">
                <div className="d-flex heading">
                    <h1 className="title">Edit team no {id}<hr /></h1>
                </div>
                <div className='drivers'>
                    {content}
                    <div className='update-btns'>
                        <NavLink to={'/teams'} className='btn-neutral cancel-btn'><span>Cancel</span></NavLink>
                        <button className='btn-neutral update-btn'>Update</button>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default UpdateTeam;
