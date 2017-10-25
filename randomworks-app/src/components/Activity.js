import React, { Component } from 'react';

export default class Activity extends Component {

    constructor(props) {
        super(props);
        this.addActivity = this.addActivity.bind(this);
        this.state = {
            error: undefined,
        }
    }

    addActivity(event) {
        let error = undefined;
        event.preventDefault();
        const currentActivity = event.target.elements.activity.value.trim();
        event.target.elements.activity.value = '';
        if (!currentActivity)
            error = "Enter a value";
        else
            error = this.props.addActivity(currentActivity);

        this.setState(() => ({ error }))
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.addActivity}>
                    <input type="text" name="activity" />
                    <button type="submit">
                        SUBMIT
                </button>
                </form>
            </div>
        );
    }
}