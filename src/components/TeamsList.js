import React from 'react';
import { useGetTeamsQuery } from '../store/api/apiSlice';
import Team from './Team';

const TeamsList = () => {
    const { data, isLoading, isSuccess, isError, error } = useGetTeamsQuery()

    let content;
    if (isLoading) {
        content = <p className='loading'>Loading <i className="fa fa-circle-o-notch fa-spin" style={{fontSize: '24px'}}></i></p>
    } else if (isSuccess) {
        // Sort data by points (desc)
        const sortedData = data.toSorted((a, b) => b.points - a.points)

        // Map data
        content = sortedData.map((team, index) => {
            return (
                <Team team={team} index={index}/>
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
