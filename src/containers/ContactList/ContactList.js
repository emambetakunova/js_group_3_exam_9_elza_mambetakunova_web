import React from 'react';
import './ContactList.css';

const ContactList = props =>  {
        return (
            <div className="ContactList">
                <img className="ContactImage" src={props.image} alt="contact"/>
                <p>{props.contactName}</p>
                <button onClick={props.open}>Show more</button>
            </div>
        );
};

export default ContactList;