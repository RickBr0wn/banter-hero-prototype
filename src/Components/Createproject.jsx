import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createProject } from '../Store/Actions/projectActions'
import { Redirect } from 'react-router-dom'
import { DASHBOARD } from '../Constants/routes'

class CreateProject extends Component {
  state = {
    title: '',
    content: '',
    banter: '',
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value,
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    if (this.state.title && this.state.content) {
      this.props.createProject(this.state)
      this.props.history.push(DASHBOARD)
    }
  }

  render() {
    const { auth } = this.props
    if (!auth.uid) return <Redirect to="/signin" />
    return (
      <div className="container">
        // createProject
        <div className="login">
          <h1>New Topic </h1>
          <div className="input-group">
            <input
              type="text"
              id="title"
              required="required"
              onChange={this.handleChange}
            />
            <span>Title </span>
          </div>
          <div className="input-group">
            <input
              type="text"
              id="content"
              required="required"
              onChange={this.handleChange}
            />
            <span>Description </span>
          </div>
          <div className="input-group">
            <input
              type="text"
              id="content"
              required="required"
              onChange={this.handleChange}
            />
            <span>Initial banter (optional)</span>
          </div>
          <button onClick={this.handleSubmit}>GO!</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.firebase.auth,
})

const mapDispatchToProps = dispatch => {
  return {
    createProject: project => dispatch(createProject(project)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateProject)
