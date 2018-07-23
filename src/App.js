import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      input: '# This is a header\n\nAnd this is a paragraph',
    };
  }
  render() {
    return (
      <div className="App">
        <h1>Taco of the day</h1>
        <button className="primaryBtn">TACO ME</button>
        <h1 className="recipeTitle">Recipe Title</h1>
        <ReactMarkdown source={input} />
      </div>
    );
  }
}

export default App;
