import React, {Component} from 'react';

import {connect} from "react-redux";
import {applyMiddleware as dispatch} from "redux";

import ContactForm from "../../components/ContactForm/ContactForm";

import './ContactAdd.css';
import {addContact} from "../../store/actions/contactAction";


class ContactAdd extends Component {

    addContact = (contactName) => {
        this.props.addContact(this.props.history, contactName);
    };

    render() {
        return (
            <div className="ContactAdd">
                <h1>Add new contact</h1>
                <ContactForm onSubmit={this.addContact}/>
            </div>
        );
    }
}
const mapDispatchToProps = () => {
    return {
        addContact: (history, contactName) => dispatch(addContact(history, contactName))
    }
};

export default connect(mapDispatchToProps)(ContactAdd);