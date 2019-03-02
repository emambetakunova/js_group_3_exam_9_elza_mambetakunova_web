import React, {Component} from 'react';

import {connect} from "react-redux";

import ContactForm from "../../components/ContactForm/ContactForm";

import './DishAdd.css';
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