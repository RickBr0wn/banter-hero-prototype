import React from 'react'

const ProjectList = ({ project }) => {
  return (
    <div className="dashboard">
      <h1>{project.title}</h1>
      <p>{project.body}
      </p>
      <div className="icon-container">
        <div>
          <i className="fas fa-user-friends" />
          <span>16</span>
        </div>
        <div>
          <i className="fas fa-user" />
          <span>8</span>
        </div>
        <div>
          <i className="fas fa-comments" />
          <span>89</span>
        </div>
      </div>
    </div>
  )
}

export default ProjectList
