import React, { Component } from 'react';
import Option from './Option';

const Options = (props) => {
    return (
        <div>
            {
                (!props.options.length > 0) && "Enter an option"
            }
            {
                props.options.map((option) => { return <Option key={option} optionText={option} removeOption={props.removeOption} /> })
            }
        </div>
    )
}

export default Options;
