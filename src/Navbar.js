import React from 'react';
class Navbar extends React.Component{

    render(){
        var projects = Object.keys(this.props.data.projects).map(x => <a className="dropdown-item" href={`#${this.props.data.projects[x].name}`}>{this.props.data.projects[x].name}</a>)
        return (
        <div className="navbar navbar-expand-lg">
            <li className="navbar-brand">
                <h3 className="portfolio"> Alessia Miccoli - Portfolio </h3>
            </li>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            {/*<div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul className="navbar-nav justify-content-end">
                    <li key="aboutMe" className="nav-item">
                        <a className="nav-link active" href="#about">About me</a>
                    </li>
                    <li key="dropdown" className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Projects</a>
                        <div className="dropdown-menu bg-dark">
                          {projects}
                        </div>
                    </li>   
                    <li key="contacts" className="nav-item">
                        <a className="nav-link" href="#contacts">Contacts</a>
                    </li> 
                </ul>    
            </div>*/}
        </div>);
    }
}

export default Navbar;
