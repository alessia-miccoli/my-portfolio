import React from 'react';

class Contacts extends React.Component{
  render(){
    return (
    <div id="contacts-container">
      <h3 id="form" className="text-center subtitle">Would you like to get in touch?</h3>
      <form id="contacts" className="container" onSubmit={this.props.formSubmit}>
        <div className="form-group">
          <label htmlFor="name">Your Name</label>
          <input type="name" name="name" className="form-control" id="name" placeholder="Name" 
          onChange={this.props.handleChange} value={this.props.name} required/>
        </div>
        <div className="form-group">
          <label htmlFor="email">Your e-mail address</label>
          <input type="email" name="email" className="form-control" id="email" placeholder="name@example.com"
          onChange={this.props.handleChange} value={this.props.email} required/>
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea name="message" className="form-control" id="message" rows="3" 
          onChange={this.props.handleChange} value={this.props.message} required></textarea>
        </div>
        <button type="submit" className="btn btn-info">Submit</button>

        {this.spinnerVisibility && <div id="spinner-container">
          <div className="spinner-grow text-info" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>}
        {this.props.thankYouMessageVisibility && <div className="alert alert-success" role="alert">
          Thanks! I've received your message, I'll get back to you asap. <span role="img" aria-label="smile">🙂</span>
        </div>}
        {this.props.errorMessageVisibility && <div className="alert alert-danger" role="alert">
          I'm sorry! I'm having troubles getting your message... <span role="img" aria-label="ops">😕</span><br/>
          please consider mailing me directly at miccoli.alessia@hotmail.com
        </div>}
      </form>
    </div>);
  }
}

export default Contacts;