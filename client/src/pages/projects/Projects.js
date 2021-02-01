import React from 'react'
import projects from '../../data/projects';
import SingleProject from '../../components/projects/SingleProject'
import { Container } from './Styledprojects'

const Projects = () => {
    return (
        <Container>
            <h1>Projects</h1>
            <h3>Some stuff i am not too ashamed of</h3>
            {projects.map(project => (
                <SingleProject
                    key={project.title}
                    project = {project}
                />
            ))}
        </Container>
    )
}

export default Projects
