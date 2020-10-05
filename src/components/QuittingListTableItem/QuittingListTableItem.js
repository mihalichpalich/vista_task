import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {TableCell, TableRow} from "@material-ui/core";

import styles from "./styles";
import {capitalizeFirstLetter} from "../../utils";

const useStyles = makeStyles(styles);

const QuittingListTableItem = ({selected, onSelect, value, item}) => {
    const classes = useStyles();
    const {historyNumber, firstName, lastName, patrName, cause, birthDate, diagnosis} = item;
    const patientInfo = {firstName, lastName, patrName, birthDate, diagnosis};

    return (
        <TableRow
            onClick={() => onSelect(value, patientInfo)}
            className={`${value === selected ? classes.patienceListRowActive : null}`}
        >
            <TableCell
                className={
                    `${classes.patienceListTableCell} 
                    ${value === selected ? classes.patienceListTableCellActive : null}`
                }
            >{historyNumber}</TableCell>
            <TableCell className={classes.patienceListTableCell}>
                {`${capitalizeFirstLetter(firstName)} ${capitalizeFirstLetter(lastName)} ${capitalizeFirstLetter(patrName)}`}
            </TableCell>
            <TableCell className={classes.patienceListTableCell}>{cause}</TableCell>
        </TableRow>
    );
};

export default QuittingListTableItem;