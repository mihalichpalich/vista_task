import React from 'react';
import {Table, TableBody, TableRow, TableCell} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

import styles from "./styles";

const useStyles = makeStyles(styles);

const PatientInfoTable = () => {
    const classes = useStyles();

    return (
        <Table>
            <TableBody>
                <TableRow>
                    <TableCell
                        component="th"
                        className={`${classes.patientInfoItemTableCell} ${classes.patientInfoItemName}`}
                    >ФИО</TableCell>
                    <TableCell
                        className={`${classes.patientInfoItemTableCell} ${classes.patientInfoItemValue}`}
                    >Николай Федырыч</TableCell>
                </TableRow>

                <TableRow>
                    <TableCell
                        component="th"
                        className={`${classes.patientInfoItemTableCell} ${classes.patientInfoItemName}`}
                    >Возраст</TableCell>
                    <TableCell
                        className={`${classes.patientInfoItemTableCell} ${classes.patientInfoItemValue}`}
                    >63</TableCell>
                </TableRow>

                <TableRow>
                    <TableCell
                        component="th"
                        className={`${classes.patientInfoItemTableCell} ${classes.patientInfoItemName}`}
                    >Диагноз</TableCell>
                    <TableCell
                        className={`${classes.patientInfoItemTableCell} ${classes.patientInfoItemValue}`}
                    >спид</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    );
};

export default PatientInfoTable;