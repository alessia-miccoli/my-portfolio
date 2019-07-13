import React from 'react';
import './style/build/App.css';
import Navbar from './Navbar';
import Jumbotron from './Jumbotron';
import Projects from './Projects';
import Certifications from './Certifications';
import Articles from './Articles';
import * as emailjs from 'emailjs-com';
import Contacts from './Contacts';
import Footer from './Footer';
import data from './App.json';


class App extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      data : data
    }

    this.formSubmit = this.formSubmit.bind(this);
  }

  formSubmit(event){
      event.preventDefault();

      var templateParams = {
        to_name: 'Alessia',
        name: event.target.name.value,
        email: event.target.email.value,
        message: event.target.message.value,
      };

      var x = emailjs.send('gmail', 'template_xOTwPgwc', templateParams, 'user_NT7ftcejhxZleQsYuCo9f')
        .then(function(response) {
          //if success
          console.log('SUCCESS!', response.status, response.text);
          return response.status;
        }, function(error) {
          //if failed
          console.log('FAILED...', error);
      });
  }

  render(){
    return (
      <div className="App">
          <Navbar data={this.state.data}/>
          <Jumbotron data={this.state.data}/>
          <Projects data={this.state.data}/>
          <Certifications data={this.state.data}/>
          <Articles data={this.state.data}/>
          <Contacts formSubmit={this.formSubmit} 
          thankYouMessageVisibility={this.state.thankYouMessageVisibility}
          errorMessageVisibility={this.state.errorMessageVisibility}/>
          <Footer/>
      </div>
    );
  }
}

export default App;
