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

  handleAddEducational = () => {
    const { title, institution, startDate, endDate } = this.state;
    const educational = {
      title,
      institution,
      startDate,
      endDate
    };
    this.props.onAddEducational(educational);
    this.setState({
      title: '',
      institution: '',
      startDate: '',
      endDate: ''
    });
  };

  handleDelete = () => {
    const { index, handleDeleteEducational } = this.props;
    handleDeleteEducational(index);
  };

  render() {
    const { title, institution, startDate, endDate } = this.state;

    return (
      <div className="form">
        <div className="field-title">Educational Background</div>
        <input
          type="text"
          name="title"
          value={title}
          onChange={this.handleFieldChange}
          placeholder="Education Title"
        />
        <input
          type="text"
          name="institution"
          value={institution}
          onChange={this.handleFieldChange}
          placeholder="Institution"
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
        <button onClick={this.handleAddEducational}>Add Education</button>
        <button onClick={this.handleDelete}>UNDO</button>
      </div>
    );
  }
}



