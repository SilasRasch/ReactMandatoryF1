import React from 'react';
import { useParams } from 'react-router-dom';
import Driver from '../components/Driver';
import { useGetDriverByIdQuery } from '../store/api/apiSlice';
import Navbar from '../components/Navbar';
import { NavLink } from 'react-router-dom';

const UpdateDriver = () => {
    const { id } = useParams() 
    const { data, isLoading, isSuccess, isError, error } = useGetDriverByIdQuery(id)
    
    let content;
    if (isLoading) {
        content = <p className='loading'>Loading <i className="fa fa-circle-o-notch fa-spin" style={{fontSize: '24px'}}></i></p>
    } else if (isSuccess) {
        // console.log(data)
        content = <Driver key={id} driver={data} index={1}/>
    } else if (isError) {
        content = <p>{error.error}</p>
    }

    return (
        <div>
            <Navbar />
            <div className="content">
                <div className="d-flex heading">
                    <h1 className="title">Edit driver no {id}<hr /></h1>
                </div>
                <div className='drivers'>
                    {content}
                    <div className='update-btns'>
                        <NavLink to={'/drivers'} className='btn-neutral cancel-btn'><span>Cancel</span></NavLink>
                        <button className='btn-neutral update-btn'>Update</button>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default UpdateDriver;
