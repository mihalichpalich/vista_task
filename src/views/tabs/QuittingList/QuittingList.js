import React, {useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Table, TableHead, TableRow, TableCell, TableBody} from "@material-ui/core";

import styles from "./styles";
import {PatientsListsTableItem} from "../../../components";

const useStyles = makeStyles(styles);

const PresentList = () => {
    const classes = useStyles();
    const [selected, setSelected] = useState(null);

    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell
                        className={`${classes.patienceListTableCell} ${classes.patienceListHeaderTableCell}`}
                    >№ ИБ</TableCell>
                    <TableCell
                        className={`${classes.patienceListTableCell} ${classes.patienceListHeaderTableCell}`}
                    >ФИО</TableCell>
                    <TableCell
                        className={`${classes.patienceListTableCell} ${classes.patienceListHeaderTableCell}`}
                    >Причина выбытия</TableCell>
                </TableRow>
            </TableHead>

            <TableBody>
                <PatientsListsTableItem value="0" selected={selected} onChange={setSelected}/>
                <PatientsListsTableItem value="1" selected={selected} onChange={setSelected}/>
                <PatientsListsTableItem value="2" selected={selected} onChange={setSelected}/>
                <PatientsListsTableItem value="3" selected={selected} onChange={setSelected}/>
                <PatientsListsTableItem value="4" selected={selected} onChange={setSelected}/>
                <PatientsListsTableItem value="5" selected={selected} onChange={setSelected}/>
                <PatientsListsTableItem value="6" selected={selected} onChange={setSelected}/>
                <PatientsListsTableItem value="7" selected={selected} onChange={setSelected}/>
            </TableBody>
        </Table>
    );
};

export default PresentList;