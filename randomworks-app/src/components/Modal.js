import React from 'react';
import Modal from 'react-modal';

const DecisionModal = (props) => (
    <Modal
    isOpen={!!props.selectedOption}
    >
        {props.selectedOption} 

        <button onClick={props.deleteSelectedOption}>x</button>
        
     </Modal>
);

export default DecisionModal;