import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import { createConversation } from '../Store/Actions/conversationActions'
import moment from 'moment'

const ProjectDetails = props => {
  const { project, auth, id, onCreateConversation } = props
  console.log(project)
  const [conversation, setConversation] = React.useState('')

  if (!auth.uid) return <Redirect to="/signin" />
  if (project) {
    const dateAndTime = moment(project.createdAt.toDate()).calendar()
    return (
      <div className="container" key={id}>
        <h5>** projectDetail</h5>
        <div className="dashboard">
          <h1>{project.title}</h1>
          <p style={{ fontSize: '14px' }}>
            Here's your starter for ten:{' '}
            <span style={{ fontStyle: 'italic' }}>{project.content}</span>
          </p>
          <p>{dateAndTime}</p>
          <div className="icon-container">
            <div className="unit">
              <i className="fas fa-user-friends" />
              <span>16</span>
            </div>
            <div className="unit">
              <i className="fas fa-user" />
              <span>8</span>
            </div>
            <div className="unit">
              <i className="fas fa-comments" />
              <span>{project.conversation.length}</span>
            </div>
          </div>
          <div>
            <h5>Conversation</h5>
            {project.conversation &&
              project.conversation.map(comment => {
                const dateAndTime = moment(
                  comment.createdAt.toDate()
                ).calendar()
                return (
                  <div key={comment.id}>
                    <div>
                      <span>{`${comment.authorFirstName[0]}${
                        comment.authorLastName[0]
                      }: ${comment.comment} `}</span>
                      <i
                        className="fas fa-thumbs-up"
                        style={{ marginRight: '10px', marginLeft: '50px' }}
                      />
                      <i className="fas fa-thumbs-down" />
                    </div>
                    <p style={{ fontSize: '10px' }}>{dateAndTime}</p>
                  </div>
                )
              })}
            <div>
              <h5>Banter Entry</h5>
              <form
                onSubmit={e => {
                  e.preventDefault()
                  onCreateConversation(conversation, id)
                  setConversation('')
                }}>
                <textarea
                  name="body"
                  onChange={e => setConversation(e.target.value)}
                  value={conversation}
                />
                <button type="submit">GO</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
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
    auth: state.firebase.auth,
    id,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onCreateConversation: (conversation, id) =>
      dispatch(createConversation(conversation, id)),
  }
}

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  firestoreConnect([{ collection: 'projects' }])
)(ProjectDetails)
