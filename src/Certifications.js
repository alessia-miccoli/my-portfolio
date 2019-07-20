import React from 'react';

class Certifications extends React.Component{

    render(){
        var certifications = Object.keys(this.props.data.certifications).map(x =>  <li className="list-group-item"><a href={this.props.data.certifications[x]} target="_blank" rel="noopener noreferrer"><i class="fas fa-certificate"></i>  {x}</a></li>);
        return (
        <div id="certifications-container">
            <h3 id="certifications" className="text-center">List of my certifications</h3>
            <ul className="list-group container certifications">
                {certifications}
            </ul>
            
        </div>);
    }
}

export default Certifications;