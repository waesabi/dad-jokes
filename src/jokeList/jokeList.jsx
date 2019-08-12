import React, { Component } from 'react';
import './jokeList.css';
import axios from 'axios';
import happy from '../happy.png';

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
      jokes.push(resp.data.joke);
    }
    this.setState(st => ({
      jokes: jokes
    }));
    console.log(jokes);
  }

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
          {this.state.jokes.map(joke => (
            <div>{joke}</div>
          ))}
        </div>
      </div>
    );
  }
}

export default JokeList;
