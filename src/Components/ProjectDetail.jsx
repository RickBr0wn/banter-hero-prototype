import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import moment from 'moment'

const ProjectDetails = props => {
  const { project, auth, id } = props
  const dateAndTime = moment(project.createdAt.toDate()).calendar()
  if (!auth.uid) return <Redirect to="/signin" />
  if (project) {
    return <div className="container" key={id}>
        <div className="dashboard">
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
          </div>
        </div>
      </div>
  } else {
    return (
      <div className="container center">
        <p>Loading Data..</p>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id
  const projects = state.firestore.data.projects
  const project = projects ? projects[id] : null
  return {
    project: project,
    auth: state.firebase.auth
  }
}

export default compose(connect(mapStateToProps), firestoreConnect([{ collection: 'projects' }]))(ProjectDetails)