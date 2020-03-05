import React from 'react';

class Footer extends React.Component{

  render(){
    return (
    <div className="card-footer text-muted text-center credits">
      <p id="footer">Made with <i className="fab fa-react"></i> React, <i className="fab fa-bootstrap"></i>ootstrap and <i className="fab fa-sass"></i></p>
    </div>);
  }
}

export default Footer;