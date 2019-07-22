import React from 'react';
import Project from './Project';

class Projects extends React.Component{

    render(){
        var projects = this.props.data.projects.map(x =>  <Project name={x.name} fcc={x.fcc} 
            imageSource={x.imageSource} description={x.description} skills={x.skills} 
            projectUrl={x.projectUrl} codeUrl={x.codeUrl}/>)
        return (
        <div id="projects-container">

            <h3 id="projects" className="text-center">Here are some of my projects</h3>
            <div className="card-deck">
               {projects}
            </div>
        </div>);
    }
}

export default Projects;