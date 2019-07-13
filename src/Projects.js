import React from 'react';
import Project from './Project';

class Projects extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        var projects = this.props.data.projects.map(x =>  <Project name={x.name} fcc={x.fcc} 
            imageSource={x.imageSource} description={x.description} skills={x.skills}
            projectUrl={x.projectUrl} codeUrl={x.codeUrl}/>)
        return (
        <div >
            <h3 id="projects" className="text-center">Here are some of my projects</h3>
            <div className="card-deck">
               {projects}
               <p className="ps">Projects for <a href="https://www.freecodecamp.org/" target="_blank">freecodecamp.org</a> are marked with a "<i className="fa fa-star" aria-hidden="true"></i>"</p>
            </div>
        </div>);
    }
}

export default Projects;