import React from 'react'
import '../home.css'

const Home = () => {
  return (
    <div>
    <div className="container">
    <h1 className="display-3">FARMERS COMMUNITY</h1>
    <h2 className="display-3">Together we can unlock the secret to Net Zero Emission</h2>
    <p className="lead">Share your Experience and challenges here!</p>
    <div className='regLog'>
      <a className="regBtn" href="/Register" role="button">Be a Member</a>
    </div>
    </div>
    </div>
  )
}

export default Home