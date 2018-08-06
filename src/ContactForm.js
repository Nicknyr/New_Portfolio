import React, { Component } from 'react';


class ContactForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };
  }

  handleSubmit = (event) => {
    //alert("Form submitted");
    //event.preventDefault();
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
          <form action="https://formspree.io/nick_kinlen@hotmail.com" method="POST">
              <label className="name">
                <input type="text" placeholder="First name" name="first_name" />
              </label>
              <label className="name">
                <input type="text" placeholder="Last name" name="last_name" />
              </label>
              <label className="email">
                <input type="text" placeholder="Email" name="email" />
              </label>
            <div className="message-box">
              <textarea value={this.state.value} onChange={this.handleChange} placeholder="Your message" rows="7" cols="50" name="message"></textarea>
            </div>
            <button type="submit" value="Submit">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default ContactForm;
