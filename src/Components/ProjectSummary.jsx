import React from 'react'
import moment from 'moment'

const ProjectSummary = ({ project, id }) => {
  const dateAndTime = moment(project.createdAt.toDate()).calendar()
  return <div className="dashboard hover">
      <h1>{project.title}</h1>
      <p>{project.content}</p>
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
        <div>
          <p>{dateAndTime}</p>
        </div>
      </div>
    </div>
}

export default ProjectSummary