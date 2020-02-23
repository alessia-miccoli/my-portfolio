import React from 'react';

class Panel extends React.Component{
    
    render(){
        return (
        <div className="panel">
            <p className="project-name">{this.props.name}</p>
            <button className="btn btn-info"><a href={this.props.projectUrl} target="_blank" rel="noopener noreferrer">Go to Project</a></button>
            <button className="btn btn-info"><a href={this.props.codeUrl} target="_blank" rel="noopener noreferrer">Go to Code</a></button>
        </div>);
    }
}

export default Panel;