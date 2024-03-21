import React from 'react';
import { useState } from 'react';
import { useAddTeamMutation } from '../store/api/apiSlice';

const AddTeamModal = () => {
    const [showModal, setShowModal] = useState(false)
    
    const toggleModal = () => {
        setShowModal(!showModal)
    }
    
    const [addTeam] = useAddTeamMutation()
    const [name, setName] = useState('')
    const [id, setId] = useState(0)
    const [teamColors, setTeamColors] = useState('')
    const [teamChief, setTeamChief] = useState('')
    const [worldChampionships, setWorldChampionships] = useState(0)
    const [points, setPoints] = useState(0)
    const [logoImgPath, setLogoImgPath] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault() 
        await addTeam({id, name, teamColors, points, worldChampionships, teamChief, logoImgPath}) 
    }

    return (
        <>
            <button className="btn btn-add fa fa-plus" onClick={toggleModal}></button>

            {showModal && (
                <form onSubmit={handleSubmit} className='modal'>
                    <div className='overlay' onClick={toggleModal}></div>
                    <div className='modal-content'>
                        <h2>Add a team</h2>
                        <div className='d-flex'>
                            <div className='input-field-group'>
                                <label>Name</label>
                                <input name='nameInput' value={name} onChange={e => setName(e.target.value)}/>
                            </div>
                            <div className='input-field-group'>
                                <label>Id</label>
                                <input name='countryInput' value={id || ''} onChange={e => setId(e.target.value)}/>
                            </div>
                        </div>
                        <div className='d-flex'>
                            <div className='input-field-group'>
                                <label>Team Colors</label>
                                <input name='numberInput' value={teamColors} onChange={e => setTeamColors(e.target.value)}/>
                            </div>
                            <div className='input-field-group'>
                                <label>Points</label>
                                <input name='codeInput' value={points || ''} onChange={e => setPoints(e.target.value)}/>
                            </div>
                        </div>
                        <div className='d-flex'>
                            <div className='input-field-group'>
                                <label>Championships</label>
                                <input name='teamInput' value={worldChampionships || ''} onChange={e => setWorldChampionships(e.target.value)}/>
                            </div>
                            <div className='input-field-group'>
                                <label>Team Chief</label>
                                <input name='dobInput' value={teamChief} onChange={e => setTeamChief(e.target.value)}/>
                            </div>
                        </div>
                        <div className='input-field-group'>
                            <label>Logo link</label>
                            <input className='img-input' name='imgInput' value={logoImgPath} onChange={e => setLogoImgPath(e.target.value)}/>
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

export default AddTeamModal;
