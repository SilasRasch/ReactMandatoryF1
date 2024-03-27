import React from 'react';
import { useParams } from 'react-router-dom';
import Driver from '../components/Driver';
import { useGetDriverByIdQuery } from '../store/api/apiSlice';
import Navbar from '../components/Navbar';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const UpdateDriver = () => {
    const { id } = useParams() 
    const { data, isLoading, isSuccess, isError, error } = useGetDriverByIdQuery(id)
    const isAdmin = useSelector((state) => state.admin.isAdmin)

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
            { !isAdmin && (
                <div className="content">
                    <div className="d-flex heading">
                        <h1 className="title">Edit driver no {id}<hr /></h1>
                    </div>
                    <div className='update-wrapper'>
                        { !isAdmin && (
                            <div className='delete-wrapper'>
                                <button className='btn-neutral cancel-btn delete-btn'>Delete</button>
                            </div>
                        )}

                        {content}

                        { !isAdmin && (
                            <div className='update-btns'>
                                <NavLink to={'/drivers'} className='btn-neutral cancel-btn'><span>Cancel</span></NavLink>
                                <button className='btn-neutral update-btn'>Update</button>
                            </div>  
                        )}
                    </div>
                </div>
            )}
            
        </div>
    );
}

export default UpdateDriver;
