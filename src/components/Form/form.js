import React from "react";

import { css } from "emotion";

import "./form.css";

const styles = css``;

class Form extends React.Component {
  state = {
    name: "",
    phoneNumber: "",
    email: "",
    textArea: ""
  };

  change = e => {
    // this.props.onChange({ [e.target.name]: e.target.value });
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    // console.log(this.state);
    this.setState({
      name: "",
      phoneNumber: "",
      email: "",
      textArea: ""
    });
    // this.props.onChange({
    //   name: "",
    //   phoneNumber: "",
    //   email: "",
    //   textArea: ""
    // });
  };

  render() {
    return (
      <div className="form-container">
        <form className="contact-form">
          <div className="form-field">
            <label htmlFor="name">Name</label>
            <br />
            <input
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={e => this.change(e)}
            />
          </div>

          <br />
          <div>
            <label htmlFor="phoneNumber">Phone Number</label>
            <br />
            <input
              name="phoneNumber"
              placeholder="Phone Number"
              value={this.state.phoneNumber}
              onChange={e => this.change(e)}
            />
          </div>

          <br />
          <div>
            <label htmlFor="email">Email</label>
            <br />
            <input
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={e => this.change(e)}
            />
          </div>

          <br />
          <div>
            <label htmlFor="textArea">Questions || Comments</label>
            <br />
            <textarea
              name="textArea"
              placeholder="Words go here"
              value={this.state.textArea}
              onChange={e => this.change(e)}
            />
          </div>

          <br />
          <button className="ba-button" onClick={e => this.onSubmit(e)}>
            {" "}
            Submit{" "}
          </button>
        </form>
      </div>
      // simplified version above using onChange={e => this.change(e)}
      // with
      // change = e => {
      //   this.setState({
      //     [e.target.name]: e.target.value
      //   });
      // };

      // <form>
      //   <input
      //     placeholder="First name"
      //     value={this.state.firstName}
      //     onChange={e => this.setState({ firstName: e.target.value })}
      //   />
      // </form>
    );
  }
}

export default Form;
