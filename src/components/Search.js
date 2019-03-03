import React, { Component } from 'react';

export default class Search extends Component {
  state = {
    text: '' 
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    const { text } = this.state;
    return (
      <>
      <h1>Search for an Artist:</h1>
      <form>
        <input type="text" name="text" value={text} onChange={this.handleChange}></input>
      </form>
      </>
    );
  }
}