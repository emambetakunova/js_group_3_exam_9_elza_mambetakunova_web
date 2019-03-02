import {
    CONTACT_FAILURE,
    CONTACT_REQUEST,
    CONTACT_SUCCESS,
    CONTACT_EDIT_SUCCESS,
    CONTACT_EDITED,
    CLOSE_MODAL, OPEN_MODAL
} from "../actions/actionsTypes";

const initialState = {
    contacts: [],
    oneContact: null,
    oneContactId: null,
    showModal: false,
    loading: false,
    error: false,
};

const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case CONTACT_REQUEST:
            return {
                ...state,
                loading: true
            };
        case CONTACT_SUCCESS:
            return {
                ...state,
                contacts: action.response,
                loading: false,
                showModal: false
            };
        case CONTACT_FAILURE:
            return {
                ...state,
                error: action.error
            };
        case CONTACT_EDITED:
            return {
                ...state,
                oneContact: null,
                showModal: false,
                error: action.error
            };
        case CONTACT_EDIT_SUCCESS:
            return {
                ...state,
                oneContact: action.response, loading: false
            };
        case OPEN_MODAL:
            return {
                ...state,
                showModal: true,
                oneContact: state.contacts[action.id],
                oneContactId: action.id
            };
        case CLOSE_MODAL:
            return {
                ...state,
                showModal: false
            };
        default:
            return state;
    }
};
export default contactReducer;