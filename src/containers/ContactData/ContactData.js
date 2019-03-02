import React from 'react';

import './ContactData.css';

const ContactData = props => {
    return (
        <div className="ContactData">
            <img className="ContactImage" src={props.image} alt="contact"/>
            <p><strong>Name: </strong>{props.contactName}</p>
            <p><strong>Phone: </strong>{props.phone}</p>
            <p><strong>Email: </strong>{props.email}</p>
            <button className="Button" onClick={props.goToEdit}>Edit</button>
            <button className="Button" onClick={props.delete}>Delete</button>
            <button className="ButtonClose" onClick={props.close}>Cancel</button>
        </div>
    );
};

export default ContactData;