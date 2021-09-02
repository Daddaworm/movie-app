import React from 'react';
import { Spinner } from 'react-bootstrap' 
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom'

const Logout = ({ setCurrentUser }) => {

    const history = useHistory();

    useEffect(() => {
        let config = {
            method: "DELETE",
        };

        fetch("/logout", config);
            handleLogout();
    });

    const handleLogout = () => {
        setCurrentUser(null);
        setTimeout(() => {
            history.push("/login");
        }, 2000);
        console.log('User logged out')
    };

    return (
    <div >
        <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    </div>
    );
};

export default Logout;
