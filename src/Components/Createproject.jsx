import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createProject } from '../Store/Actions/projectActions'
import { Redirect } from 'react-router-dom'

class CreateProject extends Component {
  state = {
    title: '',
    content: '',
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value,
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.createProject(this.state)
    this.props.history.push('/')
  }

  render() {
    const { auth } = this.props
    if (!auth.uid) return <Redirect to="/signin" />
    return (
      <div className="container">
        <div className="dashboard">
          <h1>Create a new Banter Topic</h1>
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
