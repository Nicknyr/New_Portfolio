import React, { Component } from 'react';
import axios from 'axios';

class ContactForm extends Component {
  constructor(props){
   super(props);

   this.state = {
     name: "",
     surname: "",
     email: "",
     message: ""
   };
 }

 handleForm = e => {
   axios.post(
     "https://formcarry.com/s/VphZwAcq6nJ",
     this.state,
     {headers: {"Accept": "application/json"}}
     )
     .then(function (response) {
       console.log(response);
     })
     .catch(function (error) {
       console.log(error);
     });

   e.preventDefault();
 }

 handleFields = e => this.setState({ [e.target.name]: e.target.value });


  render() {
    return (
      <div className="form">
        <div className="form-container">
          <form action="https://formcarry.com/s/VphZwAcq6nJ" method="POST" accept-charset="UTF-8" >
              <label className="name">
                <input type="text" placeholder="First name" name="firstName" />
              </label>
              <label className="name">
                <input type="text" placeholder="Last name" name="lastName" />
              </label>
              <label className="email">
                <input type="text" placeholder="Email" name="email" />
              </label>
              <input type="hidden" name="_gotcha" />
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
