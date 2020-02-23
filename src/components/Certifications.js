import React from 'react';

class Certifications extends React.Component{

    render(){
        var certifications = Object.keys(this.props.data.certifications).map(x =>  <li className="list-group-item" key={x}>
        <a href={this.props.data.certifications[x].link} target="_blank" rel="noopener noreferrer"> 
          {x}</a>
          <p className="by">{this.props.data.certifications[x].by}</p>
          <p className="date">{this.props.data.certifications[x].date}</p>
        </li>);
        return (
        <div id="certifications-container">
            <h3 id="certifications" className="text-center subtitle">List of my certifications</h3>
            <ul id="certification-list" className="list-group container certifications">
                {certifications}
            </ul>
        </div>);
    }
}

export default Certifications;