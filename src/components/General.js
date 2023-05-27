import React, { Component } from 'react';

export default class General extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      city: '',
      description: ''
    };
  }

  handleFieldChange = (e) => {
    const fieldName = e.target.name;
    const value = e.target.value;
    this.setState({ [fieldName]: value });
    this.props.onGeneralInfoChange(fieldName, value);
  }

  render() {
    const { firstName, lastName, email, tel, city, summary } = this.state;

    return (
      <div className="general">

        <div className="field-title">General Information</div>
          <form className="form">
            <input
              type="text"
              id="firstName"          
              name="firstName"
              placeholder="First Name"
              value={firstName}
              onChange={this.handleFieldChange}
            />

            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Last Name"
              value={lastName}
              onChange={this.handleFieldChange}
            />

            <input
              type="email"
              id="email"          
              name="email"          
              placeholder="Email Address"
              value={email}
              onChange={this.handleFieldChange}
            />

            <input
              type="text"
              id="tel"
              name="tel"
              placeholder="Phone Number"
              value={tel}
              onChange={this.handleFieldChange}
              />

            <input
              type="text"
              id="city"
              name="city"
              placeholder="City"
              value={city}
              onChange={this.handleFieldChange}
            />

            <input
              type="text"
              id="summary"
              name="summary"
              placeholder="Short Description"
              value={summary}
              onChange={this.handleFieldChange}
              className="big-input"
            />
          </form>
        
      </div>
    );
  }
}