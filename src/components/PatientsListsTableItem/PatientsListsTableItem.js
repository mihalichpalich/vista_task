import React, {useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {TableCell, TableRow} from "@material-ui/core";

import styles from "./styles";

const useStyles = makeStyles(styles);

const PatientsListsTableItem = ({selected, onChange, value}) => {
    const classes = useStyles();

    return (
        <TableRow
            onClick={() => onChange(value)}
            className={`${value === selected ? classes.patienceListRowActive : null}`}
        >
            <TableCell
                className={
                    `${classes.patienceListTableCell} 
                    ${value === selected ? classes.patienceListTableCellActive : null}`
                }
            >1</TableCell>
            <TableCell className={classes.patienceListTableCell}>Николай Федырыч</TableCell>
            <TableCell className={classes.patienceListTableCell}>10</TableCell>
        </TableRow>
    );
};

export default PatientsListsTableItem;