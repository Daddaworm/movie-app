import React from 'react'
import { useState } from 'react'

const Signup = () => {

    const [state, setState] = useState({})

    const onChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const config = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(state)
        }
        fetch('/users', config)
            .then(resp => resp.json())
            .then(data => console.log(data))
    }


    return (
        <div>
            <br/>
            <form onSubmit={handleSubmit}>
                <fieldset className='signup__login__fieldset'>
                    <legend>Sign up</legend>
                    <br/>
                    <label>Username:<br />
                        <input onChange={onChange} type='text' name='username'/></label><br />
                    <label>Email:<br />
                        <input onChange={onChange} type='text' name='email'/></label><br />
                    <label>Password:<br />
                        <input onChange={onChange} type='password' name='password'/></label><br />
                    <label>Confirm password: <br />
                        <input onChange={onChange} type='password' name='password_confirmation'></input></label><br />
                        <br />
                        <input type='submit'></input>
                </fieldset>
            </form>
        </div>
    )
}

export default Signup
