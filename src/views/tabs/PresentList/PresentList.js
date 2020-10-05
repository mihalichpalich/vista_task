import React, {useState, useContext, useEffect} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Table, TableHead, TableRow, TableCell, TableBody} from "@material-ui/core";

import styles from "./styles";
import {PresentListTableItem} from "../../../components";
import {PatientsContext} from "../../../flux/context";

const useStyles = makeStyles(styles);

const PresentList = () => {
    const {presentList, makeViewActive, loadPatientInfo} = useContext(PatientsContext);
    const [selected, setSelected] = useState(null);
    const classes = useStyles();

    useEffect(() => {
       if (selected) {
           makeViewActive()
       }
    }, [selected]);

    const onSelect = (value, patientInfo) => {
        setSelected(value);
        loadPatientInfo(patientInfo)
    };

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
                    >Палата</TableCell>
                </TableRow>
            </TableHead>

            <TableBody>
                {presentList ?
                    (presentList.map((item, index) => (
                        <PresentListTableItem
                            key={index}
                            value={index}
                            selected={selected}
                            onSelect={onSelect}
                            item={item}
                        />
                    ))) : null
                }
            </TableBody>
        </Table>
    );
};

export default PresentList;