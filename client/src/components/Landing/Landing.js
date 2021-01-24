import React from 'react';
import { Link } from 'react-router-dom';
import Particlesbg from './Particlesbg';
import './Landing.css'
import Particles from 'react-particles-js';

const Landing =() => {
    return (
      <div className = "try">
            <div style={{ top: 0, left: 0, width: "100%", height: "100%"}} >
              <Particlesbg>
        
        <h1> Sumit Shinde</h1>
        <Link  to={`/join`} >
        <button type = "submit">Click here</button>
        </Link>
        </Particlesbg>
        </div>
        
        </div>
    );
}

export default Landing;