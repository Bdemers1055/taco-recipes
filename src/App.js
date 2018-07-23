import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      success: false,
      error: null,
      input: '# This is a header\n\nAnd this is a paragraph',
    };
  }
componentDidMount() {
  this.fetchRandomTacoRecipe();
};
fetchRandomTacoRecipe() {
  const url = 'http://taco-randomizer.herokuapp.com/random/?full-taco=true';
  axios.get(url).then((response) => {
    console.log('success');
  })
  .catch((error) => {
    console.log('error');
  })
};
  render() {
    return (
      <div className="App">
        <h1>Taco of the day</h1>
        <button className="primaryBtn">TACO ME</button>
        <h1 className="recipeTitle">Recipe Title</h1>
        <ReactMarkdown source='# This is a header\n\nAnd this is a paragraph' />
      </div>
    );
  }
}

export default App;
