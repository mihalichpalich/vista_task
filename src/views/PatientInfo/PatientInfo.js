import React, {useContext} from 'react';
import {Paper, Typography} from '@material-ui/core';
import {makeStyles} from "@material-ui/core/styles";

import styles from "./styles";
import {PatientInfoTable} from "../../components";
import {PatientsContext} from "../../flux/context";

const useStyles = makeStyles(styles);

const PatientInfo = () => {
    const {viewActive, patientInfo} = useContext(PatientsContext);
    const classes = useStyles();

    return (
        <Paper
            variant="outlined"
            square
            className={`${classes.viewWrapper} ${viewActive ? classes.viewWrapperActive : null}`}
        >
            <Typography variant="h2" className={classes.patientInfoTitle}>
                Информация о пациенте
            </Typography>

            <PatientInfoTable patientInfo={patientInfo}/>
        </Paper>
    );
};

export default PatientInfo;