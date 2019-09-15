import React from 'react';
import Skills from './Skills';

class Jumbotron extends React.Component{

    render(){
        return (
        <div  id="about" className="jumbotron">
            <div id="introduction">
                <div>
                    <h1 id="my-name">Alessia Miccoli</h1>
                    <h4 className="subtitle main-subtitle type">Aspiring Web Developer</h4>

                    <div id="lead-container">
                        <p className="lead" dangerouslySetInnerHTML={{__html: this.props.data.description}}/>

                        <a id="CV" href="https://drive.google.com/open?id=1vuRvbmyH3wNirhtlzyQEJYJp8mP6FEv5" 
                    target="_blank">Go to my CV</a></div>
                    

                    <div id="skills-container">
                        <h3 className="subtitle one-subtitle">Skill Set</h3>
                        <Skills data={this.props.data}
                            skillSelected={this.props.skillSelected} selectSkill={this.props.selectSkill}/>
                    </div>
                </div>

                <nav className="links">
                    <ul>
                        <li className="link"><a href="#projects-container"><i className="fas fa-laptop-code"></i> Projects</a></li>
                        <li className="link"><a  href="#certifications-container"><i className="fas fa-certificate"></i> Certifications</a></li>
                        <li className="link"><a  href="#articles-container"><i className="fas fa-pen-nib"></i> Articles</a></li>
                        <li className="link"><a  href="#form"><i className="fas fa-envelope"></i> Contacts</a></li>
                    </ul>
                </nav>
            </div> 

        </div>);
    }
}

export default Jumbotron;