import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import Activity from './components/Activity';
import Options from './components/Options';
import Action from './components/Action';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: []
    }
    this.addActivity = this.addActivity.bind(this);
    this.removeAll = this.removeAll.bind(this);
    this.removeOption = this.removeOption.bind(this);
    this.determineAction = this.determineAction.bind(this);
  }

  determineAction(){
    const randomNumber = Math.ceil(Math.random() * (this.state.options.length-1));
    alert(randomNumber);
    const option = this.state.options[randomNumber];  
    alert(option);
  }

  removeAll() {
    this.setState(() => {
      return {
        options: []
      }
    }
    );
  }

  removeOption(optionToRemove){
    this.setState( (prevState) => {
      return{
        options : prevState.options.filter( (option) => optionToRemove !== option)
      }
    })
  }

  addActivity(option) {
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
        <Options options={this.state.options} removeOption={this.removeOption}/>
        <Activity addActivity={this.addActivity} />
        <Action options={this.state.options} determineAction={this.determineAction} />
      </div>
    );
  }
}

export default App;
