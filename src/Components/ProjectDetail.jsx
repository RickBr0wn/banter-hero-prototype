import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import { createConversation } from '../Store/Actions/conversationActions'
// import moment from 'moment'

const ProjectDetails = props => {
  const { project, auth, id, onCreateConversation } = props
  console.log(project)
  const [conversation, setConversation] = React.useState('')
  // const dateAndTime = moment(project.createdAt.toDate()).calendar()
  if (!auth.uid) return <Redirect to="/signin" />
  if (project) {
    return (
      <div className="container" key={id}>
        <h5>** projectDetail</h5>
        <div className="dashboard">
          <h1>{project.title}</h1>
          <p>{project.content}</p>

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
              project.conversation.map(comment => (
                <p key={Math.random()}>item</p>
              ))}
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

/**
|--------------------------------------------------
| TODO: add an id to the create conversation action
| that will allow me to fix the key error 
| Thn create a component for each comment
|--------------------------------------------------
*/
