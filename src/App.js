import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import axios from 'axios';
import { Route } from 'react-router-dom';
import './App.css';

// route: '/Mixins'
class Mixins extends Component {
  constructor(props){
    super(props);
    this.state = {
      taco: {},
      success: false,
      error: null,
    };
  }
componentDidMount() {
  this.fetchRandomTacoRecipe();
};
fetchRandomTacoRecipe() {
  const mixin = '/sinker/tacofancy/master/mixins/sweet_potato_and_apple_hash.md';
  const url = `https://taco-randomizer.herokuapp.com${mixin}`;
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
render(){
  const {taco} = this.state;
  return (
    <section className="recipe">
      <ReactMarkdown source={taco.recipe} />
    </section>
  );
}
}



// route: '/'
class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      taco: {},
      success: false,
      error: null,
    };
  }
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
render(){
  const {taco} = this.state;
  return (
    <div>
    <header className="header">
    <h1>Taco of the day</h1>
    <button className="primaryBtn" onClick={this.fetchRandomTacoRecipe.bind(this)}><h1>TACO ME</h1></button>
    </header>
    <section className="recipe">
      <ReactMarkdown source={taco.recipe} />
    </section>
    </div>
  );
}
}

class App extends Component {
  render() {
    return (
      <div className="app">
        <section className="recipe">
        <Route exact path='/' component={Home} />
        <Route path='/sinker/tacofancy/master/mixins/:mixin' component={Mixins} />
        </section>
      </div>
    );
  }
}

export default App;
