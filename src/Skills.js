import React from 'react';

class Skills extends React.Component{

    render(){
        var skills = Object.keys(this.props.data.skills)
            .map(key => <a className="btn btn-lg text-info skill-btn" key={key} href={`#${key}`} role="button">
                <img className="skills" name={key} src={`${this.props.data.skills[key]}`} alt={`${key}`} border="0" 
                style={this.props.skillSelected[key].skillStyle} onClick={this.props.selectSkill}/>
            </a>);

        return (
        <div >
            <div id="skills">
                {skills}
            </div>
        </div>);
    }
}

export default Skills;