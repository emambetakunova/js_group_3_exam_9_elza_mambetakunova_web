import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";

import ContactList from "../../containers/ContactList/ContactList";
import Spinner from "../../components/UI/Spinner/Spinner";

import {closeModal, deleteContact, fetchContacts, openModal} from "../../store/actions/contactAction";
import Modal from "../../components/UI/Modal/Modal";
import ContactData from "../ContactData/ContactData";


class Home extends Component {

    componentDidMount() {
        this.props.fetchContacts();
    }

    goToEdit = (id) => {
        this.props.history.push({
            pathname: '/contacts/' + id + '/edit'
        });
    };

    render() {
        let contacts = null;
        if (this.props.contacts) {
            contacts = Object.keys(this.props.contacts).map((conKey) => (
                <ContactList key={conKey}
                             contactName={this.props.contacts[conKey].contactName}
                             image={this.props.contacts[conKey].image}
                             open={() => this.props.openModal(conKey)}>
                </ContactList>
            ))
        }

        return (
            this.props.loading ?
                <Spinner/> :
                <Fragment>
                    <div className="HomePage">
                        <div className="Contacts">
                            {contacts}
                        </div>
                        <Modal
                            show={this.props.showModal}
                            close={this.props.closeModal}
                        >
                            {this.props.oneContact ?
                                <ContactData
                                    contactName={this.props.oneContact.contactName}
                                    image={this.props.oneContact.image}
                                    phone={this.props.oneContact.phone}
                                    email={this.props.oneContact.email}
                                    close={this.props.closeModal}
                                    goToEdit={() => this.goToEdit(this.props.oneContactId)}
                                    delete={() => this.props.deleteContact(this.props.oneContactId)}>
                                </ContactData>
                                : null
                            }
                        </Modal>
                    </div>
                </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        contacts: state.contacts,
        oneContact: state.oneContact,
        oneContactId: state.oneContactId,
        showModal: state.showModal,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchContacts: () => dispatch(fetchContacts()),
        deleteContact: (id) => dispatch(deleteContact(id)),
        openModal: (id) => dispatch(openModal(id)),
        closeModal: () => dispatch(closeModal()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);