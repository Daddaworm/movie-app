import React from "react";
import { useState } from 'react'
import './SignupLogin.css'
import Errors from "./Errors";

const Login = ({ handleSignupLogin, errors }) => {
    const [state, setState] = useState({});

    const onChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
    e.preventDefault();

    let config = {
                method: "POST",
                headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        },
        body: JSON.stringify(state),
    };

    fetch("/login", config)
        .then((res) => res.json())
        .then((data) => {
            console.log(data, 'login data')
            handleSignupLogin(data)
        });
    };

    return (
        <div>
            <br />
            <br />
            <div className="signup__login">
                <form onSubmit={handleSubmit}>
                    <br />
                        <label>Username:<br />
                            <input onChange={onChange} className='input__username' id='username' type="text" name="username" /></label><br />
                        <label>Password:<br />
                            <input onChange={onChange} className='input__password' type="password" name="password" /></label><br /><br />
                        <input id='submit' type="submit"></input>
                </form><br />
                    <p>New to Movie-Collector? <a href='/signup'>Sign up</a></p>
                <Errors errors={errors} />
            </div>
        </div>
    );
};

export default Login;
