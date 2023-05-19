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
      education: [],
      workExperience: []
    };
  }

  handleGeneralInfoChange = (fieldName, value) => {
    this.setState(prevState => ({
      generalInfo: { ...prevState.generalInfo, [fieldName]: value }
    }));
  };

  handleAddEducational = (education) => {
    this.setState(prevState => ({
      education: [...prevState.education, education]
    }));
  };

  handleAddExperience = (workExperience) => {
    this.setState(prevState => ({
      workExperience: [...prevState.workExperience, workExperience]
    }));
  };

  render() {
    const { general, education, experience } = this.state;

    return (
      <div>
        <Header/>
        <General
          general={general}
          onGeneralInfoChange={this.handleGeneralInfoChange}
        />
        <Educational onAddEducation={this.handleAddEducation} />
        <Experience onAddWorkExperience={this.handleAddWorkExperience} />
        <Overview
          generalInfo={this.state.generalInfo}
          education={education}
          experience={experience}
        />
        <Footer/>
      </div>
    );
  }
}
