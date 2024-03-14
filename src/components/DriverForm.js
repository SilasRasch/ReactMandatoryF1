import React from 'react';
import { useAddDriverMutation } from '../store/api/apiSlice';
import { useState } from 'react';

const DriverForm = () => {
    const [addDriver, {isLoading}] = useAddDriverMutation()
    const [name, setName] = useState('')
    const [number, setNumber] = useState('0')
    const [code, setCode] = useState('')
    const [country, setCountry] = useState('')
    const [team, setTeam] = useState('0')
    const [dateOfBirth, setDateOfBirth] = useState('')
    const [championships, setChampionships] = useState('0')
    const [points, setPoints] = useState('0')
    const [portraitImgPath, setPortraitImgPath] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault() 
        await addDriver({number, name, code, country, points, championships, portraitImgPath, dateOfBirth, team})
        console.log({number, name, code, country, points, championships, portraitImgPath, dateOfBirth, team})
    }

    return (
        <form onSubmit={handleSubmit} className='driver-form'>
            <div>
                <label>Name</label>
                <input name='nameInput' value={name} onChange={e => setName(e.target.value)}/>
            </div>
            <div>
                <label>Number</label>
                <input name='numberInput' value={number || ''} onChange={e => setNumber(e.target.value)}/>
            </div>
            <div>
                <label>Code</label>
                <input name='codeInput' value={code} onChange={e => setCode(e.target.value)}/>
            </div>
            <div>
                <label>Country</label>
                <input name='countryInput' value={country} onChange={e => setCountry(e.target.value)}/>
            </div>
            <div>
                <label>Team Id</label>
                <input name='teamInput' value={team} onChange={e => setTeam(e.target.value)}/>
            </div>
            <div>
                <label>Date of Birth</label>
                <input name='dobInput' value={dateOfBirth} onChange={e => setDateOfBirth(e.target.value)}/>
            </div>
            <div>
                <label>Championships</label>
                <input name='championshipsInput' value={championships || ''} onChange={e => setChampionships(e.target.value)}/>
            </div>
            <div>
                <label>Points</label>
                <input name='pointsInput' value={points || ''} onChange={e => setPoints(e.target.value)}/>
            </div>
            <div>
                <label>Portrait link</label>
                <input name='imgInput' value={portraitImgPath} onChange={e => setPortraitImgPath(e.target.value)}/>
            </div>
            <div>
                <button className='btn btn-submit'>Submit</button>
            </div>
        </form>
    );
}

export default DriverForm;