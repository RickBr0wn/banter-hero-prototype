import React from 'react'

const ProjectItem = ({ project, id }) => {
  return (
    <div className="dashboard" key={id}>
      <h1>{project.title}</h1>
      <p>{project.content}
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

export default ProjectItem
