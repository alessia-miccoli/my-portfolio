import React from 'react';

class Certifications extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        var certifications = Object.keys(this.props.data.certifications).map(x =>  <li className="list-group-item"><a href={this.props.data.certifications[x]} target="_blank"><i className="fab fa-free-code-camp"> </i>{x}</a></li>);
        return (
        <div>
            <h3 id="certifications" className="text-center">List of my certifications</h3>
            <ul className="list-group container certifications">
                {certifications}
            </ul>
            
        </div>);
    }
}

export default Certifications;