import React from 'react';

class Articles extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        var articles = Object.keys(this.props.data.articles).map(x => <li className="list-group-item"><i className="fab fa-medium"></i> <a href={`#${this.props.data.articles[x]}`} target="_blank">{x}</a></li>); 
        return (
        <div>
            <h3 id="articles" className="text-center">Articles that I wrote</h3>
            <ul className="list-group list-group-flush container articles">
            {articles}
            </ul>
        </div>);
    }
}

export default Articles;