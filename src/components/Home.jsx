import React from 'react';
import { Link } from 'react-router-dom';
import '../home.css'

const Home = () => {
  return (
    <div className="container">
      <h1 className="display-3">FARMERS COMMUNITY</h1>
      <h2 className="display-3">Together we can unlock the secret to Net Zero Emission</h2>
      <p className="lead">Share your Experience and challenges here!</p>
      <div className='regLog'>
        <Link className="regBtn" to="/Register">Be a Member</Link>
      </div>
    </div>
  );
}

export default Home