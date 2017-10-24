import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import Activity from './components/Activity';
import Options from './components/Options';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: []
    }
    this.addActivity = this.addActivity.bind(this);
    this.removeAll = this.removeAll.bind(this);
  }

  removeAll() {
    this.setState(() => {
      return {
        options: []
      }
    }
    );
  }

  addActivity(option) {
        console.log('option is', option);
    if (this.state.options.indexOf(option) >= 0)
      return "Option already exists";
    this.setState((prevState) => {
      return {
        options: prevState.options.concat(option)
      }
    });
    console.log('options is', option);
  }

  render() {
    const title = 'Random Works App';
    const subtitle = 'Let machine decide what you need to do';
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <button onClick={this.removeAll}>REMOVE ALL</button>
        <Options options={this.state.options} />
        <Activity addActivity={this.addActivity} />
      </div>
    );
  }
}

export default App;
