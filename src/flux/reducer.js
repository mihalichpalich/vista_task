import {actions} from "./actions";

export const reducer = (state, action) => {
    switch (action.type) {
        case actions.LOAD_PRESENT_LIST:
            return {
                ...state,
                presentList: action.data
            };
        case actions.LOAD_QUITTING_LIST:
            return {
                ...state,
                quittingList: action.data
            };
        case actions.LOAD_PATIENT_INFO:
            return {
                ...state,
                patientInfo: action.data
            };
        case actions.MAKE_VIEW_ACTIVE:
            return {
                ...state,
                viewActive: true
            };
        default:
            return state
    }
};