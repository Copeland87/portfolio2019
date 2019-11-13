import React from "react";
import Axios from "axios";
import "./test.css";

const CardList = props => (
  <div className="cardList">
    {props.profiles.map(profile => (
      <Card key={profile.id} {...profile} />
    ))}
  </div>
);

class Card extends React.Component {
  render() {
    const profile = this.props;
    return (
      <div className="gitCard">
        <div style={{ width: "100%" }}>
          <a href={profile.html_url} className="gitLink">
            {profile.name}
          </a>
        </div>
        <br />
        <img src={profile.avatar_url} />
      </div>
    );
  }
}

class Form extends React.Component {
  state = { userName: "" };
  handleSubmit = async event => {
    event.preventDefault();
    const axios = require("axios");
    const resp = await axios.get(
      `https://api.github.com/users/${this.state.userName}`
    );
    this.props.onSubmit(resp.data);
    this.setState({ userName: "" });
  };
  render() {
    return (
      <form className="formComponent" onSubmit={this.handleSubmit}>
        <pre style={{ color: "white" }}>
          {" "}
          Welcome to the GitHub Quick Card Lookup{" "}
        </pre>
        <div className="formEntry">
          <input
            type="text"
            value={this.state.userName}
            onChange={event => this.setState({ userName: event.target.value })}
            placeholder="GitHub username"
            required
          />
          <button>Create User Card</button>
        </div>
      </form>
    );
  }
}

class Test extends React.Component {
  state = {
    profiles: []
  };
  addNewProfile = profileData => {
    this.setState(prevState => ({
      profiles: [...prevState.profiles, profileData]
    }));
  };
  render() {
    return (
      <div>
        <pre> Another Card App... So Original </pre>
        <div className="header">{this.props.title}</div>
        <Form onSubmit={this.addNewProfile} />
        <CardList profiles={this.state.profiles} />
      </div>
    );
  }
}

export default Test;
