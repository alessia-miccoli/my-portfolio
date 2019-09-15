import React from 'react';
import './style/build/App.css';
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
      message : "",
      skillSelected: {
        "HTML": {"selected" : false, 
            "skillStyle": { 
              transform: "scale(1.0)",
              background: "rgba(255, 255, 255, 0)"
            }
        },
        "CSS":  {"selected" : false, 
             "skillStyle": { 
                transform: "scale(1.0)",
                background: "rgba(255, 255, 255, 0)"
            }
        },
        "JavaScript": {"selected" : false, 
            "skillStyle": { 
                transform: "scale(1.0)",
                background: "rgba(255, 255, 255, 0)"
            }
        },
        "React":  {"selected" : false, 
            "skillStyle": { 
                transform: "scale(1.0)",
                background: "rgba(255, 255, 255, 0)"
            }
        },
        "jQuery":  {"selected" : false, 
            "skillStyle": { 
                transform: "scale(1.0)",
                background: "rgba(255, 255, 255, 0)"
            }
        },
        "Bootstrap": {"selected" : false, 
            "skillStyle": { 
                transform: "scale(1.0)",
                background: "rgba(255, 255, 255, 0)"
            }
        },
        "Git" :  {"selected" : false, 
            "skillStyle": { 
                transform: "scale(1.0)",
                background: "rgba(255, 255, 255, 0)"
            }
        }
      },
      selected : []
    }

    this.selectSkill = this.selectSkill.bind(this);
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
      default: 
        break;
    }
  }

  selectSkill(event){
    //the style of the skill is updated

    var name = event.target.name;
    var skills = {...this.state.skillSelected};

    skills[name].selected = !skills[name].selected;

    if(skills[name].selected){
        skills[name].skillStyle = {
            transform: "scale(1.1)",
            background: "rgba(255, 255, 255, 0)"
        }
    }else {
        skills[name].skillStyle = { 
            transform: "scale(1.0)",
            background: "rgba(255, 255, 255, 0)"
        }
    }

    //each time a skill is selected, the "selected" array in the state is updated:
    // the skill selected or deselected is respectively added or removed from the array

    if(skills[name].selected){
      this.setState((prev)=>({
        skillSelected : skills,
        selected: prev.selected.concat(name)
      }));
    }else{
      var index = this.state.selected.indexOf(name);
      var sel =  this.state.selected.slice(0,index).concat(this.state.selected.slice(index + 1));

      this.setState(()=>({
        skillSelected: skills,
        selected: sel
      }));
    }

    //display projects based on the skills selected

    // function skillContained(){
      

    // }

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
          if(response.status === 200){
            this.setState({thankYouMessageVisibility : true
            });
          }else{
            this.setState({errorMessageVisibility : true
            });
          }
          
          this.setState({
            name : "",
            email : "",
            message : ""
          });
        });
  }

  render(){
    return (
      <div className="App">
          <Jumbotron data={this.state.data}
          skillSelected={this.state.skillSelected}
          selectSkill={this.selectSkill}/>
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
