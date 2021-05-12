// import React, { useEffect } from "react";
import '../components/Card.css';
import errorImg from '../assets/not-found.jpg'

const NotFound = () => {

    // TO DO: Add an error page
    return (
        <div className="error">
            <img src={errorImg} alt="" />
              
        </div>
    );
};

export default NotFound;

