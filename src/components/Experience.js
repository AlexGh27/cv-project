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

  handleDelete = () => {
    const { index, handleDeleteExperience } = this.props;
    handleDeleteExperience(index);
  };

  render() {
    const { position, company, startDate, endDate, description } = this.state;

    return (
      <div className="experience">
        <div className="field-title">Work Experience</div>
        <div className="form">     
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
          <textarea
            type="text"
            name="description"
            id="description-input"
            value={description}
            onChange={this.handleFieldChange}
            placeholder="Description"
            maxLength="320"
          />
        </div>
        <div className="buttons">
          <button onClick={this.handleAddExperience}>Add Work Experience section</button>
          <button onClick={this.handleDelete}>UNDO</button>
        </div>
        
      </div>
    );
  }
}

