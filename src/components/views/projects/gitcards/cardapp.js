import React from "react";
import Axios from "axios";

import {
  Route,
  Link,
  BrowserRouter as Router,
  Switch,
  Redirect
} from "react-router-dom";

import "./cardapp.css";

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
        <div className="innerGitCard">
          <img className="gitImg" src={profile.avatar_url} />
          <br />
          <a href={profile.html_url} target="_blank" className="gitLink">
            {profile.name}
          </a>
          <pre className="cardText">{profile.company}</pre>
        </div>
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
          Welcome to the GitHub Quick Card Lookup, <br /> Below you can enter a
          GitHub users ID and pull a link as well as some information directly
          to the page!{" "}
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

class Cards extends React.Component {
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
        <span>
          <Link to="/project">Back to Projects</Link>
        </span>
        {/* <pre> Another Card App... So Original </pre> */}
        <div className="header">{this.props.title}</div>
        <Form onSubmit={this.addNewProfile} />
        <CardList profiles={this.state.profiles} />
      </div>
    );
  }
}

export default Cards;
