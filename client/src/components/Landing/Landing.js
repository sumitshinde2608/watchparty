import React from 'react';
import { Link } from 'react-router-dom';



const Landing =() => {
    return (
        <div>
        <Link  to={`/join`} >
        <button type = "submit">Click here</button>
        </Link>
        </div>
    );
}

export default Landing;