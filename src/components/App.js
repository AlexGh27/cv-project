import React, { Component } from 'react';
import General from './General';
import Educational from './Educational';
import Experience from './Experience';
import Overview from './Overview';
import Header from './Header';
import Footer from './Footer';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      general: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        city: '',
        description: ''
      },
      educational: [],
      experience: []
    };
  }

  handleGeneralInfoChange = (fieldName, value) => {
    this.setState(prevState => ({
      general: { ...prevState.general, [fieldName]: value }
    }));
  };

  handleAddEducational = (educational) => {
    this.setState((prevState) => ({
      educational: [...prevState.educational, educational]
    }));
  };

  handleDeleteEducational = index => {
    this.setState(prevState => {
      const educational = [...prevState.educational];
      educational.splice(index, 1);
      return { educational };
    });
  };
  
  handleAddExperience = (experience) => {
    this.setState((prevState) => ({
      experience: [...prevState.experience, experience]
    }));
  };

  handleDeleteExperience = index => {
    this.setState(prevState => {
      const experience = [...prevState.experience];
      experience.splice(index, 1);
      return { experience };
    });
  };
  

  render() {
    const { general, educational, experience } = this.state;

    return (
      <div className="app">
        <Header/>
        <div className="left-panel">
          <General
            general={general}
            onGeneralInfoChange={this.handleGeneralInfoChange}
          />
          <Educational
            onAddEducational={this.handleAddEducational}
            handleDeleteEducational={this.handleDeleteEducational} />
          <Experience 
            onAddExperience={this.handleAddExperience}
            handleDeleteExperience={this.handleDeleteExperience} />
        </div>
        <div className="right-panel">
          <Overview
            general={general}
            educational={educational}
            experience={experience}                      
          />
        </div>
        
        <Footer/>
      </div>
    );
  }
}
