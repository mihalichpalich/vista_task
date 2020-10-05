import React, {useReducer} from 'react';

import {PatientsContext} from "./context";
import {reducer} from "./reducer";
import {actions} from "./actions";

const initialState = {
    presentList: [],
    quittingList: [],
    patientInfo: {},
    viewActive: false
};

export const Provider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const value = {
        presentList: state.presentList,
        quittingList: state.quittingList,
        patientInfo: state.patientInfo,
        viewActive: state.viewActive,
        loadPresentList: data => {dispatch({type: actions.LOAD_PRESENT_LIST, data})},
        loadQuittingList: data => {dispatch({type: actions.LOAD_QUITTING_LIST, data})},
        loadPatientInfo: data => {dispatch({type: actions.LOAD_PATIENT_INFO, data})},
        makeViewActive: () => {dispatch({type: actions.MAKE_VIEW_ACTIVE})}
    };

    return (
        <PatientsContext.Provider value={value}>
            {children}
        </PatientsContext.Provider>
    )
};