import React from 'react';
import { useState } from 'react';
import { useAddDriverMutation } from '../store/api/apiSlice';

const AddDriverModal = () => {
    const [showModal, setShowModal] = useState(false)
    
    const toggleModal = () => {
        setShowModal(!showModal)
    }
    
    const [addDriver] = useAddDriverMutation()
    const [name, setName] = useState('')
    const [driverNumber, setDriverNumber] = useState(0)
    const [code, setCode] = useState('')
    const [country, setCountry] = useState('')
    const [teamId, setTeamId] = useState(0)
    const [dateOfBirth, setDateOfBirth] = useState('')
    const [championships, setChampionships] = useState(0)
    const [points, setPoints] = useState(0)
    const [portraitImgPath, setPortraitImgPath] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault() 
        await addDriver({driverNumber, name, code, country, points, championships, portraitImgPath, dateOfBirth, teamId})
        toggleModal()
        resetForm()
    }

    const resetForm = () => {
        setName('')
        setDriverNumber(0)
        setCode('')
        setCountry('')
        setTeamId(0)
        setDateOfBirth('')
        setChampionships(0)
        setPoints(0)
        setPortraitImgPath('')
    }

    return (
        <>
            <button className="btn btn-add fa fa-plus" onClick={toggleModal}></button>

            {showModal && (
                <form onSubmit={handleSubmit} className='modal'>
                    <div className='overlay' onClick={toggleModal}></div>
                    <div className='modal-content'>
                        <h2>Add a driver</h2>
                        <div className='d-flex'>
                            <div className='input-field-group'>
                                <label>Name</label>
                                <input name='nameInput' value={name} onChange={e => setName(e.target.value)}/>
                            </div>
                            <div className='input-field-group'>
                                <label>Country</label>
                                <input name='countryInput' value={country} onChange={e => setCountry(e.target.value)}/>
                            </div>
                        </div>
                        <div className='d-flex'>
                            <div className='input-field-group'>
                                <label>Number</label>
                                <input name='numberInput' value={driverNumber || ''} onChange={e => setDriverNumber(e.target.value)}/>
                            </div>
                            <div className='input-field-group'>
                                <label>Code</label>
                                <input name='codeInput' value={code} onChange={e => setCode(e.target.value)}/>
                            </div>
                        </div>
                        <div className='d-flex'>
                            <div className='input-field-group'>
                                <label>Team Id</label>
                                <input name='teamInput' value={teamId || ''} onChange={e => setTeamId(e.target.value)}/>
                            </div>
                            <div className='input-field-group'>
                                <label>Date of Birth</label>
                                <input name='dobInput' value={dateOfBirth} onChange={e => setDateOfBirth(e.target.value)}/>
                            </div>
                        </div>
                        <div className='d-flex'>
                            <div className='input-field-group'>
                                <label>Championships</label>
                                <input name='championshipsInput' value={championships || ''} onChange={e => setChampionships(e.target.value)}/>
                            </div>
                            <div className='input-field-group'>
                                <label>Points</label>
                                <input name='pointsInput' value={points || ''} onChange={e => setPoints(e.target.value)}/>
                            </div>
                        </div>
                        <div className='input-field-group'>
                            <label>Portrait link</label>
                            <input className='img-input' name='imgInput' value={portraitImgPath} onChange={e => setPortraitImgPath(e.target.value)}/>
                        </div>
                        <div className='add-modal-bottom'>
                            <button className='btn btn-submit'>Submit</button>
                            <button className='btn modal-close btn-submit' onClick={toggleModal}>Close</button>
                        </div>
                    </div>
                </form>
            )}  
        </>

    );
}

export default AddDriverModal;
