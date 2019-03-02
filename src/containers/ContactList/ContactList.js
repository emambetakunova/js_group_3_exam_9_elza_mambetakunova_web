import React from 'react';
import './ContactList.css';

const ContactList = props => {
    return (
        <div className="ContactList">
            <img className="ContactImage" src={props.image} alt="contact"/>
            <p>{props.contactName}</p>
            <button className="Button" onClick={props.goToEdit}>Edit</button>
            <button className="Button" onClick={props.delete}>Delete</button>
        </div>
    );
};

export default ContactList;