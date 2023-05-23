import React, { Component } from 'react';

export default class Educational extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      institution: '',
      startDate: '',
      endDate: ''
    };
  }

  handleFieldChange = (e) => {
    const fieldName = e.target.name;
    const value = e.target.value;
    this.setState({ [fieldName]: value });
  };

  handleAddEducation = () => {
    const { title, institution, startDate, endDate } = this.state;
    this.props.onAddEducation({ title, institution, startDate, endDate });
    this.setState({
      title: '',
      institution: '',
      startDate: '',
      endDate: ''
    });
  };

  render() {
    const { title, institution, startDate, endDate } = this.state;

    return (
      <div className="form">
        <h2>Educational Background</h2>

        <input
          type="text"
          id="education-title"
          name="title"
          value={title}
          onChange={this.handleFieldChange}
          placeholder="Education Title"
        />

        <input
          type="text"
          id="education-institution"
          name="institution"
          value={institution}
          onChange={this.handleFieldChange}
          placeholder="Institution"
        />

        <input
          type="text"
          id="education-start"
          name="start"
          value={startDate}
          onChange={this.handleFieldChange}
          placeholder="Start Date"
          className="short-input"
        />
        
        <input
          type="text"
          id="education-end"
          name="end"
          value={endDate}
          onChange={this.handleFieldChange}
          placeholder="End Date"
          className="short-input"
        />

        <button onClick={this.handleAddEducation}>Add Education</button>
      </div>
    );
  }
}