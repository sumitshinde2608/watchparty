import React from 'react';
import { Link } from 'react-router-dom';
import Particlesbg from './Particlesbg';
import './Landing.css'
import Plex from './PLEX-logo-white.png'
import Particles from 'react-particles-js';


const Landing =() => {
    return (
      <div className = "try">
            <div >
              <img src = {Plex} height="20%" width="20%" className="logo"/>
        
        <div className="buttons"x>
        <Link  to={`/join`} > 
        <button className="pushbuttons">JOIN</button>
        </Link>
        <Link to={`/join`}>
        <button className="pushbuttons"> START NEW</button>
        </Link>
        </div>
        </div>
        </div>
    );
}

export default Landing;