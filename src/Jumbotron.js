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
                    target="_blank" rel="noopener noreferrer">Go to my CV</a></div>
                    

                    <div id="skills-container">
                        <h3 className="subtitle one-subtitle">Skill Set</h3>
                        <Skills data={this.props.data}
                            skillSelected={this.props.skillSelected} selectSkill={this.props.selectSkill}/>
                    </div>
                </div>

                <nav className="links">
                    <ul>
                        <li className="link"><a href="#projects-container"><h4><i className="fas fa-laptop-code"></i> Projects</h4></a></li>
                        <li className="link"><a  href="#certifications-container"><h4><i className="fas fa-certificate"></i> Certifications</h4></a></li>
                        <li className="link"><a  href="#articles-container"><h4><i className="fas fa-pen-nib"></i> Articles</h4></a></li>
                        <li className="link"><a  href="#form"><h4><i className="fas fa-envelope"></i> Contacts</h4></a></li>
                    </ul>
                </nav>
            </div> 

        </div>);
    }
}

export default Jumbotron;