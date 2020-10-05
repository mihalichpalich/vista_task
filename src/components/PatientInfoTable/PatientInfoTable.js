import React from 'react';
import PropTypes from 'prop-types';
import {Table, TableBody, TableRow, TableCell} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

import styles from "./styles";
import {capitalizeFirstLetter, getAge} from "../../utils";

const useStyles = makeStyles(styles);

const PatientInfoTable = ({patientInfo}) => {
    const {firstName, lastName, patrName, birthDate, diagnosis} = patientInfo;
    const classes = useStyles();

    return (
        <Table>
            <TableBody>
                <TableRow className={classes.patientInfoItemTableRow}>
                    <TableCell
                        component="th"
                        className={`${classes.patientInfoItemTableCell} ${classes.patientInfoItemName}`}
                    >ФИО</TableCell>
                    <TableCell
                        className={`${classes.patientInfoItemTableCell} ${classes.patientInfoItemValue}`}
                    >{(firstName && lastName && patrName)
                        ? `${capitalizeFirstLetter(firstName)} ${capitalizeFirstLetter(lastName)} ${capitalizeFirstLetter(patrName)}`
                        : null}</TableCell>
                </TableRow>

                <TableRow className={classes.patientInfoItemTableRow}>
                    <TableCell
                        component="th"
                        className={`${classes.patientInfoItemTableCell} ${classes.patientInfoItemName}`}
                    >Возраст</TableCell>
                    <TableCell
                        className={`${classes.patientInfoItemTableCell} ${classes.patientInfoItemValue}`}
                    >{birthDate ? getAge(new Date(birthDate), new Date()) : null}</TableCell>
                </TableRow>

                <TableRow className={classes.patientInfoItemTableRow}>
                    <TableCell
                        component="th"
                        className={`${classes.patientInfoItemTableCell} ${classes.patientInfoItemName}`}
                    >Диагноз</TableCell>
                    <TableCell
                        className={`${classes.patientInfoItemTableCell} ${classes.patientInfoItemValue}`}
                    >{diagnosis ?? diagnosis}</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    );
};

PatientInfoTable.defaultProps = {
    patientInfo: {}
};

PatientInfoTable.propTypes = {
    patientInfo: PropTypes.object.isRequired
};

export default PatientInfoTable;