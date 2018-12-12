import React from 'react'
import { DASHBOARD } from '../Constants/routes'
import heroImage from '../Images/hero-image.jpg'

const Landing = ({ history }) => {
  return (
    <div className="hero-image">
      <div className="filter">
        <div className="hero-text">
          <h1>Banter Hero</h1>
          <div
            className="hero-button"
            onClick={() => history.push(DASHBOARD)}
          >Lets All Laugh Together</div>
        </div>
      </div>
    </div>
  )
}

export default Landing
