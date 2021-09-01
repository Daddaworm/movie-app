import React from "react";
import { useEffect, useHistory } from "react";

const Logout = () => {
    
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
    };

    return (
    <div>
        <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    </div>
    );
};

export default Logout;
