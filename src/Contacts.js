import React from 'react';

class Contacts extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return (
        <div>
            <h3 id="form" className="text-center">Would you like to get in touch?</h3>
            <form id="contacts" className="container">
                <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input type="name" name="name" className="form-control" id="name" placeholder="Name"/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Your e-mail address</label>
                    <input type="email" name="email" className="form-control" id="email" placeholder="name@example.com"/>
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" className="form-control" id="message" rows="3"></textarea>
                </div>
                <button type="submit" className="btn btn-info">Submit</button>
            </form>
        </div>);
    }
}

export default Contacts;