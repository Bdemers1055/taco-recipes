import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import axios from 'axios';
import { Link, Route } from 'react-router-dom';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      taco: {},
      success: false,
      error: null,
      input: '# This is a header\n\nAnd this is a paragraph',
    };
  }
// route: '/Addons'
const Addons = (props) => (
  <ReactMarkdown source={taco.recipe} />
);

// route: '/'
const Home = (props) => (
  <ReactMarkdown source={taco.recipe} />
);

componentDidMount() {
  this.fetchRandomTacoRecipe();
};
fetchRandomTacoRecipe() {
  const random = '/random/?full-taco=true';
  const url = `https://taco-randomizer.herokuapp.com${random}`;
  axios.get(url).then((response) => {
    // console.log('success', response.data);
    this.setState({
      taco: response.data,
      success: true,
    });
  })
  .catch((error) => {
    console.log('error', error);
  })
};
  render() {
    const {taco} = this.state;
    return (
      <div className="app">
      <header className="header">
        <h1>Taco of the day</h1>
        <button className="primaryBtn" onClick={this.fetchRandomTacoRecipe.bind(this)}><h1>TACO ME</h1></button>
        </header>
        <section className="recipe">
        <Route exact path='/' component={Home} />
        <Route path='https://raw.github.com/sinker/tacofancy/master' component={Addons} />
        </section>
      </div>
    );
  }
}

export default App;
