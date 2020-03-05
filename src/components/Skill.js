import React from 'react';

class Skill extends React.Component{    
    render(){
        const IMG = (src) => {
            return require(`../assets/${src}`)
        }
        return (
            <img className="skill" src={IMG(this.props.src)}  alt={this.props.skill} border="0"/>
        );
    }
}

export default Skill;