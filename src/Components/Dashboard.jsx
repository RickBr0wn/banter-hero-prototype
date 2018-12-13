import React, { Component } from 'react'

export class Dashboard extends Component {
  render() {
    return (
      <div className="container">
        <div className="dashboard">
          <h1>Brexit</h1>
          <p>
            We are all sick of it now so its time to laugh.. Our politicians all
            act like they're in a Banter-mime anyways!!
          </p>
          <div className="icon-container">
            <div><i class="fas fa-user-friends" /><span>16</span></div>
            <div><i class="fas fa-user" /><span>8</span></div>
            <div><i class="fas fa-comments" /><span>89</span></div>
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard
