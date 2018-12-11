import React from 'react'
import { DASHBOARD } from '../Constants/routes'

const Landing = ({ history }) => {
  return <div className="hero-image">
      <div className="filter">
        <div className="hero-text">
          <h1>Banter Hero</h1>
          <h3>Welcome to Banterbury Cathedrall</h3>
          <div className="hero-social-icons">
            <i className="fab fa-github" />
            <i className="fab fa-twitter" />
          </div>
          <button onClick={() => history.push(DASHBOARD)}>
            Start the banter!!
          </button>
        </div>
      </div>
    </div>
}

export default Landing
