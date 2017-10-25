import React from 'react';

const Action = (props) => {
    return (
        <div>
            <button disabled={props.options.length === 0} onClick={props.determineAction}>
                What should I do?
            </button>
        </div>
    );
}

export default Action;