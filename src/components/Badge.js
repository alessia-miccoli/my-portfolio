import React from 'react';

class Badge extends React.Component{

    render(){
        return (
        <span className="blue-text">{this.props.skill}</span>
        );
    }
}

export default Badge;