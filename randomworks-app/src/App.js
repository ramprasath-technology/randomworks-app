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
  }

  addActivity(option){
    if(this.state.options.indexOf(option) > 0)
        return "Option already exists";
    this.setState((prevState) => {
      return{
      options: prevState.options.concat(option)
      }
    })
  }

  render() {
    const title = 'Random Works App';
    const subtitle = 'Let machine decide what you need to do';
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Activity addActivity={this.addActivity}/>
        <Options options={this.state.options} />
      </div>
    );
  }
}

export default App;
