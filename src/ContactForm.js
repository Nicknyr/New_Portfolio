import React, { Component } from 'react';


class ContactForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };
  }

  handleSubmit = (event) => {
    alert("Form submitted");
    event.preventDefault();
  }

  handleChange= (event) => {
    this.setState({
      value: event.target.value
    });
  }


  render() {
    return (
      <div className="form">
        <div className="form-container">
          <form onSubmit={this.handleSubmit}>
              <label className="name">
                <input type="text" placeholder="First name"/>
              </label>
              <label className="name">
                <input type="text" placeholder="Last name"/>
              </label>
              <label className="email">
                <input type="text" placeholder="Email"/>
              </label>
            <div className="message-box">
              <textarea value={this.state.value} onChange={this.handleChange} placeholder="Your message" rows="7" cols="50"></textarea>
            </div>
            <button type="submit" value="Submit">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default ContactForm;
