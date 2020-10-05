import React, {useState} from 'react';
import {Paper, Typography, Box} from '@material-ui/core';
import {makeStyles} from "@material-ui/core/styles";

import styles from "./styles";
import {PatientInfoTable} from "../../components";

const useStyles = makeStyles(styles);

const PatientInfo = () => {
    const classes = useStyles();
    const [itemActive, setItemActive] = useState(false);

    return (
        <Paper
            variant="outlined"
            square
            className={`${classes.viewWrapper} ${itemActive ?? classes.viewWrapperActive}`}
        >
            <Typography variant="h2" className={classes.patientInfoTitle}>
                Информация о пациенте
            </Typography>

            <PatientInfoTable/>
        </Paper>
    );
};

export default PatientInfo;