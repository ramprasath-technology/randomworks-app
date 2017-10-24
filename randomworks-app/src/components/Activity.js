import React, { Component } from 'react';

export default class Activity extends Component {
    constructor(props) {
        super(props);
        this.addActivity = this.addActivity.bind(this);
        this.captureActivity = this.captureActivity.bind(this);
        this.state = {
            error: undefined
        }
    }

    addActivity(event) {
        event.preventDefault();
        console.log(this.state.activity);
        if (!this.state.activity) {
            this.setState({
                inputError: "Enter valid activity"
            });
        }
        else {
            console.log(this.state.activity);
            this.props.addActivity(this.state.activity);
        }
    }

    captureActivity(event) {
        const activity = event.target.value.trim();
        this.setState((prevState) => {
            return {
                activity
            }
        });
    }

    render() {
        return (
            <div>
                <input type="text" onChange={this.captureActivity} />
                <button onClick={this.addActivity}>
                    Submit
                </button>
            </div>
        );
    }
}