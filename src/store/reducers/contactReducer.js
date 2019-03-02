import {CONTACT_FAILURE, CONTACT_REQUEST, CONTACT_SUCCESS, CONTACT_EDIT_SUCCESS, CONTACT_EDITED} from "../actions/actionsTypes";

const initialState = {
    contacts: [],
    oneContact: null,
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
                loading: false
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
                error: action.error
            };
        case CONTACT_EDIT_SUCCESS:
            return {
                ...state,
                oneContact: action.response, loading: false
            };
        default:
            return state;
    }
};
export default contactReducer;