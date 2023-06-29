import React from 'react';
import { Link } from 'react-router-dom';
import '../home.css'

const Home = () => {
  return (
    <div className="container">
      <h1 className="display-3">Farmers Community</h1>
      <h2 className="display-3">Together We Can Unlock The Secret To Net Zero Emission</h2>
      <p className="lead">Share Your Experience And Challenge Here Let's Discuss It!</p>
      <div className='regLog'>
        <Link className="regBtn" to="/Register">Be A Member</Link>
      </div>
    </div>
  );
}

export default Home