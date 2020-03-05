import React from 'react';
import Skills from './Skills';
import data from '../App.json';


class Jumbotron extends React.Component{

  render(){
    return (
    <div className="jumbotron">
      <div id="about">
        <div>
          <h1 id="my-name">Alessia Miccoli</h1>
          <h4 className="subtitle main-subtitle type">Portfolio</h4>
        </div>

        <p dangerouslySetInnerHTML={{__html: this.props.data.description}}/>
        
        <Skills data={data}/>
      </div>

      <nav className="navigation-bar">
          <ul>
            <li className="link"><a href="#projects-container"><h4><i className="fas fa-laptop-code"></i> Projects</h4></a></li>
            <li className="link"><a  href="#certifications-container"><h4><i className="fas fa-certificate"></i> Certifications</h4></a></li>
            <li className="link"><a  href="#articles-container"><h4><i className="fas fa-pen-nib"></i> Articles</h4></a></li>
            <li className="link"><a  href="#form"><h4><i className="fas fa-envelope"></i> Contacts</h4></a></li>
          </ul>
      </nav>

    </div>);
  }
}

export default Jumbotron;