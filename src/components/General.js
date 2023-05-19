import React, { Component } from 'react';

export default class General extends Component {
  handleFieldChange = (e) => {
    const fieldName = e.target.name;
    const value = e.target.value;
    this.props.onGeneralInfoChange(fieldName, value);
  };

  render() {
    const { general } = this.props;

    return (
      <div className="general">

        <div className="field-title">General Information</div>
        <form className="form">
            <input
                type="text"
                id="firstName"          
                name="firstName"
                placeholder="First Name"
                value={general.firstName || ''}
                onChange={this.handleFieldChange}
            />

            <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Last Name"
                value={general.lastName}
                onChange={this.handleFieldChange}
            />

            <input
                type="email"
                id="email"          
                name="email"          
                placeholder="Email Address"
                value={general.email}
                onChange={this.handleFieldChange}
            />

            <input
                type="text"
                id="tel"
                name="tel"
                placeholder="Phone Number"
                value={general.tel}
                onChange={this.handleFieldChange}
            />

            <input
                type="text"
                id="summary"
                name="summary"
                placeholder="Short Description"
                value={general.summary}
                onChange={this.handleFieldChange}
            />
            </form>
        
      </div>
    );
  }
}