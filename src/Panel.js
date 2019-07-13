import React from 'react';

class Panel extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return (
        <div className="panel">
            <p className="project-name">{this.props.name}</p>
            <button className="btn btn-info"><a href={this.props.projectUrl} target="_blank">Go to Project</a></button>
            <button className="btn btn-info"><a href={this.props.codeUrl} target="_blank">Go to Code</a></button>
        </div>);
    }
}

export default Panel;