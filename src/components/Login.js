import React from "react";
import { useState } from 'react'

const Login = () => {
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
        .then((data) => console.log(data));
    };

    return (
    <div>
        <br />
        <form onSubmit={handleSubmit}>
            <fieldset className="signup__login__fieldset">
                <legend>Login</legend><br />
                <label>Username:<br />
                <input onChange={onChange} type="text" name="username" /></label><br />
                <label>Password:<br />
                <input onChange={onChange} type="password" name="password" /></label><br />
                <br />
                <input type="submit"></input>
            </fieldset>
        </form>
    </div>
    );
};

export default Login;
