import React from 'react';
import Skill from './Skill'

class Skills extends React.Component{
  render(){
    const skills = this.props.data.skills.map((x, index) => <Skill key={index} skill={Object.keys(x)[0]} src={x[Object.keys(x)[0]]}/>)
    return (
    <div id="skills-container">
      {skills}
    </div>);
  }
}

export default Skills;