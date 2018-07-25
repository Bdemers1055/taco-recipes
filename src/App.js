import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import axios from 'axios';
import { Route } from 'react-router-dom';
import './App.css';

// route: '/Condiments'
class Condiments extends Component {
  constructor(props){
    super(props);
    this.state = {
      taco: {},
      success: false,
      error: null,
    };
  }
  componentDidMount(){
    this.fetchCondimentRecipe();
  };
  fetchCondimentRecipe() {
    const { match } = this.props;
    const condiment = `/sinker/tacofancy/master/condiments/${match.params.condiment}`;
    const url = `https://raw.githubusercontent.com${condiment}`;
    axios.get(url).then((response) => {
      this.setState ({
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
      <section className="recip">
      <ReactMarkdown source={taco} />
      </section>
    );
  };
}

// route: '/Baselayers'
class Baselayers extends Component {
  constructor(props){
    super(props);
    this.state ={
      taco: {},
      success: false,
      error: null,
    };
  }
  componentDidMount(){
   this.fetchBaseLayerRecipe();
  };
  fetchBaseLayerRecipe() {
    const { match } = this.props;
    const baselayer = `/sinker/tacofancy/master/base_layers/${match.params.baselayer}`;
    const url = `https://raw.githubusercontent.com${baselayer}`;
    axios.get(url).then((response) => {
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
        <ReactMarkdown source={taco} />
        </section>
      );
    }
  }

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
  this.fetchMixinRecipe();
};
fetchMixinRecipe() {
  const { match } = this.props;
  const mixin = `/sinker/tacofancy/master/mixins/${match.params.mixin}`;
  const url = `https://raw.githubusercontent.com${mixin}`;
  axios.get(url).then((response) => {
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
      <ReactMarkdown source={taco} />
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
    this.setState({
      taco: response.data,
      success: true,
    });
  })
  .catch((error) => {
    // console.log('error', error);
    alert('Oh no! something went wrong.', error);
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
        <Route path='/mixins/:mixin' component={Mixins} />
        <Route path='/base_layers/:baselayer' component={Baselayers} />
        <Route path='/condiments/:condiment' component={Condiments} />
        </section>
      </div>
    );
  }
}

export default App;
