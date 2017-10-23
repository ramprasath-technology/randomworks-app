import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './Header';

class App extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const title = 'Random Works App';
    const subtitle = 'Let machine decide what you need to do';
    return (
      <Header title={title} subtitle={subtitle}/>
    );
  }
}

export default App;
