import React from "react";
import Axios from "axios";

import {
  Route,
  Link,
  BrowserRouter as Router,
  Switch,
  Redirect
} from "react-router-dom";

import Card from "./cards/cards";
import Draw from "./buttons/drawbutton";
import "./flashcards.css";

import firebase from "firebase/app";
import "firebase/database";

import { DB_CONFIG } from "./config/Firebase/db_config";

class FlashCards extends React.Component {
  constructor(props) {
    super(props);

    if (!firebase.apps.length) {
      this.app = firebase.initializeApp(DB_CONFIG);
    }

    // this.database = this.app will throw an error in your face and steal your wallet
    this.database = firebase
      .database()
      .ref()
      .child("cards");
    this.updateCard = this.updateCard.bind(this);

    this.state = {
      cards: [],
      currentCard: {}
    };
  }

  componentWillMount() {
    const currentCards = this.state.cards;

    this.database.on("child_added", snap => {
      currentCards.push({
        id: snap.key,
        term: snap.val().term,
        definition: snap.val().definition
      });

      this.setState({
        cards: currentCards,
        currentCard: this.getRandomCard(currentCards)
      });
    });
  }

  getRandomCard(currentCards) {
    var card = currentCards[Math.floor(Math.random() * currentCards.length)];
    return card;
  }

  updateCard() {
    // Test to see if updateCard() is working
    // console.log("New Card!");
    const currentCards = this.state.cards;
    this.setState({
      currentCard: this.getRandomCard(currentCards)
    });
  }

  render() {
    return (
      <div>
        <span>
          <Link to="/project">Back to Projects</Link>
        </span>
        <div>
          <p>
            This is a flash card application (not currently complete) that pulls
            from firebase. The original idea of using a css hover is working out
            terribly so I'll be adding a button to manually flip the card and a
            way to push more cards in to the database soon.
          </p>
        </div>
        <div className="hero-text">
          <div>
            <p>
              <Link to="/FlashForm">Click here to add a new card</Link>
            </p>
          </div>
          <div className="cardRow">
            <Card
              term={this.state.currentCard.term}
              definition={this.state.currentCard.definition}
            />
            <div className="buttonRow">
              {/* flip card button goes here */}
              <Draw drawCard={this.updateCard} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FlashCards;
