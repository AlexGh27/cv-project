import React, { Component } from 'react';

 export default class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: '',
      company: '',
      startDate: '',
      endDate: '',
      description: ''
    };
  }

  handleFieldChange = (e) => {
    const fieldName = e.target.name;
    const value = e.target.value;
    this.setState({ [fieldName]: value });
  };

  handleAddExperience = () => {
    const { position, company, startDate, endDate, description } = this.state;
    const experience = {
      position,
      company,
      startDate,
      endDate,
      description
    };
    this.props.onAddExperience(experience);
    this.setState({
      position: '',
      company: '',
      startDate: '',
      endDate: '',
      description: ''
    });
  };

  render() {
    const { position, company, startDate, endDate, description } = this.state;

    return (
      <div className="form">
        <h2>Work Experience</h2>
        <input
          type="text"
          name="position"
          value={position}
          onChange={this.handleFieldChange}
          placeholder="Position"
        />
        <input
          type="text"
          name="company"
          value={company}
          onChange={this.handleFieldChange}
          placeholder="Company"
        />
        <input
          type="text"
          name="startDate"
          value={startDate}
          onChange={this.handleFieldChange}
          placeholder="Start Date"
        />
        <input
          type="text"
          name="endDate"
          value={endDate}
          onChange={this.handleFieldChange}
          placeholder="End Date"
        />
        <input
          type="text"
          name="description"
          value={description}
          onChange={this.handleFieldChange}
          placeholder="Description"
        />
        <button onClick={this.handleAddExperience}>Add Work Experience</button>
      </div>
    );
  }
}

