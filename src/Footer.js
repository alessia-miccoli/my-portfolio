import React from 'react';

class Footer extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return (
        <div className="card-footer text-muted text-center">
            <p id="footer">Made with <i className="fab fa-bootstrap"></i>ootstrap and <i className="fab fa-react"></i>React</p>
        </div>);
    }
}

export default Footer;