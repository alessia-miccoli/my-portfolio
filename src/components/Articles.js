import React from 'react';

class Articles extends React.Component{

    render(){
        var articles = Object.keys(this.props.data.articles).map(x => <a key={x} href={`${this.props.data.articles[x]}`} target="_blank" rel="noopener noreferrer"><li className="list-group-item"><i className="fab fa-medium"></i>{x}</li></a>); 
        return (
        <div id="articles-container">
            <h3 id="articles" className="text-center subtitle two-subtitle">Articles</h3>
            <ul className="list-group list-group-flush container articles">
            {articles}
            </ul>
        </div>);
    }
}

export default Articles;