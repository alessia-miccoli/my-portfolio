import React from 'react';

class Jumbotron extends React.Component{

    render(){
        return (
        <div  id="about" className="jumbotron">
            <div>
                <p className="lead" dangerouslySetInnerHTML={{__html: this.props.data.description}}/>
                <hr id="separator"/>
                <nav className="links">
                    <ul>
                        <li className="link"><a href="#projects-container">Projects</a></li>
                        <li className="link"><a  href="#certifications-container">Certifications</a></li>
                        <li className="link"><a  href="#articles-container">Articles</a></li>
                        <li className="link"><a  href="#form">Contacts</a></li>
                    </ul>
                </nav>
            </div>
        </div>);
    }
}

export default Jumbotron;