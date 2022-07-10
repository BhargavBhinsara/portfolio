import React from 'react';
import './Project.css';
import ProjectContainer from '../ProjectContainer/ProjectContainer';
import { projects } from '../../portfolio';

export const Project = () => {
    return (
        <section id='projects' className='section projects'>
          <h2 className='section__title'>Projects</h2>
    
          <div className='projects__grid'>
            {projects.map((project) => (
              <ProjectContainer  project={project} />
            ))}
          </div>
          
        </section>
      );
}