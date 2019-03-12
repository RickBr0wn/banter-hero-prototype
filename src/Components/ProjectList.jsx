import React from 'react'
import ProjectSummary from './ProjectSummary'
import { Link } from 'react-router-dom'

const ProjectList = ({ projects }) => {
  return (
    <div>
      <h5>// projectList</h5>
      {projects &&
        projects.map(project => (
          <Link to={/project/ + project.id} key={project.id}>
            <ProjectSummary project={project} key={project.id} />
          </Link>
        ))}
    </div>
  )
}

export default ProjectList
