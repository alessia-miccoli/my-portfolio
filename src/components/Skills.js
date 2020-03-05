import React from 'react';
import Skill from './Skill'
// import html from ;
// import css from '../assets/css.png';
// import javascript from '../assets/js.png';
// import vue from '../assets/vue.png';
// import vuetify from '../assets/vuetify.png';
// import react from '../assets/react.png';
// import jquery from '../assets/jquery.png';
// import bootstrap from '../assets/bootstrap.png';
// import git from '../assets/git.png';

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

 // <img className="skills" name="css" src={css} alt="css" border="0"/>
// <img className="skills" name="javascript" src={javascript} alt="javascript" border="0" />
// <img className="skills" name="vue" src={vue} alt="vue" border="0"/>
// <img className="skills" name="vuetify" src={vuetify} alt="vuetify" border="0"/>
// <img className="skills" name="react" src={react} alt="html" border="0"/>
// <img className="skills" name="jquery" src={jquery} alt="jquery" border="0"/>
// <img className="skills" name="bootstrap" src={bootstrap} alt="bootstrap" border="0"/>
// <img className="skills" name="git" src={git} alt="git" border="0"/>