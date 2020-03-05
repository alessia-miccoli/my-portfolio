import React from 'react';
import Project from './Project';

class Projects extends React.Component{

    render(){
        var projects = this.props.data.projects.map(x =>  <Project name={x.name} fcc={x.fcc} key={x.name}
            description={x.description} skills={x.skills} 
            projectUrl={x.projectUrl} codeUrl={x.codeUrl}/>)
        return (
        <div id="projects-section">
            <h3 className="subtitle two-subtitle">Projects</h3>

            <div id="projects-container">
                <div id="cards-container">
                    {projects}
                </div>
            </div>
        </div>);
    }
}

export default Projects;