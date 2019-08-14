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
    let savedData = JSON.parse(window.localStorage.getItem('jokes'));
    if (savedData === null) {
      savedData = [];
    }
    this.state = {
      jokes: savedData,
      loading: false
    };
  }

  componentDidMount() {
    if (this.state.jokes.length === 0) {
      this.loadJokes();
    }
  }

  loadJokes = async () => {
    let jokes = [];
    while (jokes.length < this.props.numJokesToGet) {
      const resp = await axios.get(API_URL, {
        headers: { Accept: 'application/json' }
      });
      jokes.push({ id: uuid(), text: resp.data.joke, votes: 0 });
    }
    this.setState(
      oldState => ({
        jokes: [...oldState.jokes, ...jokes],
        loading: false
      }),
      () => {
        window.localStorage.setItem('jokes', JSON.stringify(this.state.jokes));
      }
    );
  };

  handleVote = (id, delta) => {
    this.setState(
      st => ({
        jokes: st.jokes.map(j => {
          return j.id === id ? { ...j, votes: j.votes + delta } : j;
        })
      }),
      () => {
        console.log(this.state.jokes);
        window.localStorage.setItem('jokes', JSON.stringify(this.state.jokes));
      }
    );
  };

  handleLoadJokes = () => {
    this.setState({ loading: true }, this.loadJokes);
  };

  render() {
    if (this.state.loading) {
      return (
        <div className="jokeList-spinner">
          <i className="far fa-8x fa-laugh fa-spin" />
          <h1 className="jokeList-title">Loading...</h1>
        </div>
      );
    }

    return (
      <div className="jokeList">
        <div className="jokeList-sidebar">
          <h1 className="jokeList-title">
            <span>Dad</span> Jokes!
          </h1>
          <img className="jokeList-img" src={happy} alt="Smile Emoji" />
          <button className="jokeList-loadMore" onClick={this.handleLoadJokes}>
            New Jokes
          </button>
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
          {console.log(typeof this.state.jokes)}
          {console.log(this.state.jokes.length)}
        </div>
      </div>
    );
  }
}

export default JokeList;
