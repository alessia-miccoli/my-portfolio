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
      data : data,
      name : "",
      email : "",
      message : ""
    }

    this.formSubmit = this.formSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    switch(event.target.name){
      case "name":
          this.setState({
            name : event.target.value
          });
        break;
      case "email": 
        this.setState({
          email : event.target.value
        });
        break;
      case "message":
        this.setState({
          message : event.target.value
        });
        break;
    }
  }

  formSubmit(event){
      event.preventDefault();

      var templateParams = {
        to_name: 'Alessia',
        name: this.state.name,
        email: this.state.email,
        message: this.state.message,
      };

      emailjs.send('gmail', 'template_xOTwPgwc', templateParams, 'user_NT7ftcejhxZleQsYuCo9f')
        .then(response => {
          if(response.status == 200){
            this.setState({thankYouMessageVisibility : true,
              name : "",
              email : "",
              message : ""
            });
          }else{
            this.setState({errorMessageVisibility : true,
              name : "",
              email : "",
              message : ""
            });
          }
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
          <Contacts name={this.state.name}
            message={this.state.message}
            email={this.state.email}
            formSubmit={this.formSubmit} 
            handleChange={this.handleChange}
            thankYouMessageVisibility={this.state.thankYouMessageVisibility}
            errorMessageVisibility={this.state.errorMessageVisibility}
            spinnerVisibility={this.state.spinnerVisibility}/>
          <Footer/>
      </div>
    );
  }
}

export default App;
