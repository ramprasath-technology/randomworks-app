import React from 'react';
import Modal from 'react-modal';

const DecisionModal = (props) => (
    <Modal
    isOpen={!!props.selectedOption}
    contentLabel="Selected Option"
    onRequestClose={props.deleteSelectedOption}
    >
        {props.selectedOption} 

        <button onClick={props.deleteSelectedOption}>x</button>
        
     </Modal>
);

export default DecisionModal;