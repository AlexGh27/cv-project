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
  
  handleAddExperience = (experience) => {
    this.setState((prevState) => ({
      experience: [...prevState.experience, experience]
    }));
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
          <Educational onAddEducational={this.handleAddEducational} />
          <Experience onAddExperience={this.handleAddExperience} />
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
