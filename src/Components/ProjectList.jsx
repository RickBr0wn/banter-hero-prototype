import React from 'react'
import ProjectItem from './ProjectItem'

const ProjectList = ({ projects }) => {
  return (
    <div>
      {projects &&
        projects.map(project => (
          <ProjectItem project={project} key={project.id} />
        ))}
    </div>
  )
}

export default ProjectList
