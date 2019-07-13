import React from 'react';
import './style/build/App.css';
import Navbar from './Navbar';
import Jumbotron from './Jumbotron';
import Projects from './Projects';
import Certifications from './Certifications';
import Articles from './Articles';
import Contacts from './Contacts';
import Footer from './Footer';
import data from './App.json';

class App extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      data : data
    }
  }

  render(){
    return (
      <div className="App">
          <Navbar data={this.state.data}/>
          <Jumbotron data={this.state.data}/>
          <Projects data={this.state.data}/>
          <Certifications data={this.state.data}/>
          <Articles data={this.state.data}/>
          <Contacts/>
          <Footer/>
      </div>
    );
  }
}

export default App;
