import React from 'react';

class Badge extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return (
        <div>
            <span className="badge badge-pill badge-info">{this.props.skill}</span>
        </div>);
    }
}

export default Badge;