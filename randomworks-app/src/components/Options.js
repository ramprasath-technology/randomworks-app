import React, { Component } from 'react';
import Option from './Option';


export default class Options extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                {
                    (!this.props.options.length > 0) && "Enter an option"
                }
                {
                    this.props.options.map((option) => {return <Option key={option} optionText={option} />} )                   
                }
            </div>
        )
    };
}
