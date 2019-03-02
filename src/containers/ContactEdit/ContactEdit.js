import React, {Component} from 'react';
import ContactForm from "../../components/ContactForm/ContactForm";

import Spinner from "../../components/UI/Spinner/Spinner";
import {connect} from "react-redux";
import {editContact, goToEditContact} from "../../store/actions/contactAction";

class ContactEdit extends Component {

    componentDidMount() {
        this.props.goToEditContact(this.props.match.params.id);
    }

    edit = contact => {
        this.props.editContact(this.props.match.params.id, this.props.history, contact)
    };


    render() {
        let formContact = <ContactForm
            onSubmit={this.edit}
            contact={this.props.contact}
        />;

        if (!this.props.contact) {
            formContact = <Spinner/>
        }
        return (
            <div>
                <h2>Edit contact: </h2>
                {formContact}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        contact: state.oneContact
    };
};

const mapDispatchToProps = dispatch => {
    return {
        goToEditContact: (id) => dispatch(goToEditContact(id)),
        editContact: (contactName, id, history) => dispatch(editContact(contactName, id, history)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactEdit);