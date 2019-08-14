import React, { Component } from 'react';
import Joke from '../joke/joke';
import './jokeList.css';
import axios from 'axios';
import happy from '../happy.png';
import uuid from 'uuid/v4';

const API_URL = 'https://icanhazdadjoke.com/';

class JokeList extends Component {
  static defaultProps = {
    numJokesToGet: 10
  };

  constructor(props) {
    super(props);
    this.state = {
      jokes: []
    };
  }

  async componentDidMount() {
    let jokes = [];

    while (jokes.length < this.props.numJokesToGet) {
      const resp = await axios.get(API_URL, {
        headers: { Accept: 'application/json' }
      });
      jokes.push({ id: uuid(), text: resp.data.joke, votes: 0 });
    }
    this.setState(st => ({
      jokes: jokes
    }));
    console.log(jokes);
  }

  handleVote = (id, delta) => {
    this.setState(st => ({
      jokes: st.jokes.map(j => {
        return j.id === id ? { ...j, votes: j.votes + delta } : j;
      })
    }));
  };

  render() {
    return (
      <div className="jokeList">
        <div className="jokeList-sidebar">
          <h1 className="jokeList-title">
            <span>Dad</span> Jokes!
          </h1>
          <img className="jokeList-img" src={happy} alt="Smile Emoji" />
          <button className="jokeList-loadMore">New Jokes</button>
        </div>

        <div className="jokeList-jokes">
          {this.state.jokes.map(j => (
            <Joke
              key={j.id}
              id={j.id}
              votes={j.votes}
              text={j.text}
              upVote={() => this.handleVote(j.id, 1)}
              downVote={() => this.handleVote(j.id, -1)}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default JokeList;
