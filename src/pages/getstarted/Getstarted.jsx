import React from 'react';
import './getstarted.css';
import { Link } from 'react-router-dom';
import img1 from '../../assets/Images/netflixlogo.png'
const Getstarted = () => {
  return (
    <>
      <div className="first">
        <div className="overlay">
          <div className="header">
            <div className="logo-div">
              <img src={img1} className="self-logo" />
            </div>
            <div className="signin"><div className="self-button" ><Link to='/signin'>Sign in</Link></div>
            </div>

          </div>
          <div className="main-getstarted">
            <h1>Working on it ,please visit next</h1>
          </div>
        </div>
      </div>

    </>
  )
}

export default Getstarted;