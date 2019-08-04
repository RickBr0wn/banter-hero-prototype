import React from 'react'
import moment from 'moment'

const ProjectSummary = ({ project, id }) => {
  const dateAndTime = moment(project.createdAt.toDate()).calendar()
  return (
    <div className="dashboard hover">
      <h5>** projectSummary</h5>
      <h1>{project.title}</h1>
      <p style={{ fontSize: '14px' }}>
        <span style={{ fontStyle: 'italic' }}>{project.content}</span>
      </p>
      <div className="icon-container">
        <div style={{ display: 'flex', marginRight: '20px' }}>
          <i className="fas fa-user-friends" />
          <span>16</span>
        </div>
        <div style={{ display: 'flex', marginRight: '20px' }}>
          <i className="fas fa-user" />
          <span>8</span>
        </div>
        <div style={{ display: 'flex', marginRight: '20px' }}>
          <i className="fas fa-comments" />
          <span>{project.conversation.length}</span>
        </div>
      </div>
      <div>
        <p>{dateAndTime}</p>
      </div>
    </div>
  )
}

export default ProjectSummary
