import React from 'react';
import Badge from './Badge';
import Panel from './Panel';


class Project extends React.Component{

    render(){
    var skills = this.props.skills.map(x => <Badge skill={x}/>);
        return (
        <div className="card" id={this.props.name}>
            <Panel name={this.props.name} codeUrl={this.props.codeUrl} projectUrl={this.props.projectUrl}/>

            <img className="card-img-top" src={this.props.imageSource} alt=""/>

            <div className="card-body">
                <h5 className="card-title">{this.props.fcc && <i className="fa fa-star" aria-hidden="true"/>} <b>{this.props.name}</b></h5>
                <p className="card-text ">{this.props.description}</p>
                <div  className="badge-container text-center">
                    {skills}
                </div>
            </div>
        </div>);
    }
}

export default Project;