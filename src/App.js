import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from './Components/header';
import Home from './Components/home';
import About from './Components/About';

class App extends Component {
  render() {
    return (
        <div>
            <Header />
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
      </div>
    );
  }
}

export default App;
