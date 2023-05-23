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

  handleAddWorkExperience = () => {
    const { position, company, startDate, endDate, description } = this.state;
    this.props.onAddWorkExperience({ position, company, startDate, endDate, description });
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
      <div className="experience">
        <h2>Work Experience</h2>

        <form className="form">
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
            name="start"
            value={startDate}
            onChange={this.handleFieldChange}
            placeholder="Start Date"
            className="short-input"
            />

            <input
            type="text"
            name="end"
            value={endDate}
            onChange={this.handleFieldChange}
            placeholder="End Date"
            className="short-input"
            />

            <input
            type="text"
            name="description"
            value={description}
            onChange={this.handleFieldChange}
            placeholder="Description"
            className="big-input"
            />
        </form>
        
        
        <button onClick={this.handleAddWorkExperience}>Add Work Experience</button>
      </div>
    );
  }
}