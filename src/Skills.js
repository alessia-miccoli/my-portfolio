import React from 'react';

class Skills extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        var skills = Object.keys(this.props.data.skills).map(key => <a className="btn btn-lg text-info skill-btn" key={key} href={`#${key}`} role="button"><img className="skills" src={`${this.props.data.skills[key]}`} alt="bootrastrap-512" border="0"/></a>);
        
        return (
        <div >
            <p className="skills-text text-center lead">My skills at the moment include</p>
            <div id="skills">
                {skills}
            </div>
           
        </div>);
    }
}

export default Skills;