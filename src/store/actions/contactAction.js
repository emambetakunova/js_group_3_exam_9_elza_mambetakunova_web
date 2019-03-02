import {
    CONTACT_FAILURE,
    CONTACT_REQUEST,
    CONTACT_SUCCESS,
    CONTACT_EDIT_SUCCESS,
    CONTACT_EDITED,
    CLOSE_MODAL, OPEN_MODAL
} from "./actionsTypes";
import axios from '../../axios-contact';

export const contactRequest = () => ({type: CONTACT_REQUEST});

export const contactSuccess = response => ({type: CONTACT_SUCCESS, response});

export const contactFailure = error => ({type: CONTACT_FAILURE, error});

export const contactEditSuccess = response => ({type: CONTACT_EDIT_SUCCESS, response});

export const contactEdited = () => ({type: CONTACT_EDITED});

export const openModal = (id) => ({type: OPEN_MODAL, id});

export const closeModal = () => ({type: CLOSE_MODAL});

export const fetchContacts = () => {
    return dispatch => {
        dispatch(contactRequest());
        axios.get('/contacts.json').then(response => {
            dispatch(contactSuccess(response.data));
        }, error => {
            dispatch(contactFailure());
        });
    }
};

export const deleteContact = (id) => {
    return dispatch => {
        dispatch(contactRequest());
        axios.delete('/contacts/' + id + '.json').then(() => {
            dispatch(fetchContacts());
        }, error => {
            dispatch(contactFailure());
        });
    }
};

export const addContact = (history, contact) => {
    axios.post('contacts.json', contact).then(() => {
            history.push('/')
        }
    );
};

export const goToEditContact = (id) => {
    return dispatch => {
        return axios.get('/contacts/' + id + '.json').then((response) => {
                dispatch(contactEditSuccess(response.data));
            },
            error => dispatch(contactFailure(error))
        );
    }
};

export const editContact = (id, history, contact) => {
    return dispatch => {
        axios.put('/contacts/' + id + '.json', contact).then(() => {
                dispatch(contactEdited());
                history.push('/')
            },
            error => dispatch(contactFailure(error))
        );
    }
};