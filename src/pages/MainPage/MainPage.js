import React from 'react';
import {Box, Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

import {PatientInfo, PatientsLists} from "../../views";
import styles from './styles';

const useStyles = makeStyles(styles);

const MainPage = () => {
    const classes = useStyles();

    return (
        <Grid container direction="row" justify="center" className={classes.container}>
            <Grid item lg={6} className={classes.item}>
                <PatientInfo/>
            </Grid>

            <Grid item lg={6} className={classes.item}>
                <PatientsLists/>
            </Grid>
        </Grid>
    );
};

export default MainPage;