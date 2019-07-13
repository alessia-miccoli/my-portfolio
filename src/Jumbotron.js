import React from 'react';
import Skills from './Skills';

class Jumbotron extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return (
        <div  id="about" className="jumbotron">
            <div>
                <h1 id="hey-there" className="display-4 text-info">Welcome to my Portfolio!</h1>
                <p className="lead" dangerouslySetInnerHTML={{__html: this.props.data.description}}/>
                <hr id="separator"/>
                <Skills data={this.props.data}/>
            </div>
        </div>);
    }
}

export default Jumbotron;