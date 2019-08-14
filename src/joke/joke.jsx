import React, { Component } from 'react';
import './joke.css';

class Joke extends Component {
  render() {
    return (
      <div className="joke">
        <div className="joke-buttons">
          <i class="fas fa-arrow-up" onClick={this.props.upVote} />
          <span className="joke-votes">{this.props.votes}</span>
          <i class="fas fa-arrow-down" onClick={this.props.downVote} />
        </div>
        <div className="joke-text">{this.props.text}</div>
        <div className="joke-emoji">
          <i class="em em-rolling_on_the_floor_laughing" />
        </div>
      </div>
    );
  }
}

export default Joke;
