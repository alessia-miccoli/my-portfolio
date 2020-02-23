import React from 'react';
import html from '../assets/html.png';
import css from '../assets/css.png';
import javascript from '../assets/js.png';
import vue from '../assets/vue.png';
import vuetify from '../assets/vuetify.png';
import react from '../assets/react.png';
import jquery from '../assets/jquery.png';
import bootstrap from '../assets/bootstrap.png';
import git from '../assets/git.png';

class Skills extends React.Component{
    
    render(){

        return (
        <div >
            <div id="skills">
                <a className="btn btn-lg text-info skill-btn" key="html" href="html" role="button">
                    <img className="skills" name="html" src={html} alt="html" border="0"/>
                </a>
                <a className="btn btn-lg text-info skill-btn" key="css" href="css" role="button">
                    <img className="skills" name="css" src={css} alt="css" border="0"/>
                </a>
                <a className="btn btn-lg text-info skill-btn" key="javascript" href="js" role="button">
                    <img className="skills" name="javascript" src={javascript} alt="javascript" border="0" />
                </a>
                <a className="btn btn-lg text-info skill-btn" key="vue" href="vue" role="button">
                    <img className="skills" name="vue" src={vue} alt="vue" border="0"/>
                </a>
                <a className="btn btn-lg text-info skill-btn" key="vuetify" href="vuetify" role="button">
                    <img className="skills" name="vuetify" src={vuetify} alt="vuetify" border="0"/>
                </a>
                <a className="btn btn-lg text-info skill-btn" key="react" href="react" role="button">
                    <img className="skills" name="react" src={react} alt="html" border="0"/>
                </a>
                <a className="btn btn-lg text-info skill-btn" key="jquery" href="jquery" role="button">
                    <img className="skills" name="jquery" src={jquery} alt="jquery" border="0"/>
                </a>
                <a className="btn btn-lg text-info skill-btn" key="bootstrap" href="bootstrap" role="button">
                    <img className="skills" name="bootstrap" src={bootstrap} alt="bootstrap" border="0"/>
                </a>
                <a className="btn btn-lg text-info skill-btn" key="git" href="git" role="button">
                    <img className="skills" name="git" src={git} alt="git" border="0"/>
                </a>
            </div>
        </div>);
    }
}

export default Skills;