import React, {useState, useEffect, useContext} from 'react';
import {Paper, Tabs, Tab} from '@material-ui/core';
import {makeStyles} from "@material-ui/core/styles";
import axios from 'axios';

import styles from "./styles";
import {PresentList, QuittingList} from "../index";
import {PatientsContext} from '../../flux/context';

const useStyles = makeStyles(styles);

const PatientsLists = () => {
    const {loadPresentList, loadQuittingList} = useContext(PatientsContext);
    const [selectedTab, setSelectedTab] = useState(0);
    const [presentListLength, setPresentListLength] = useState(0);
    const [quittingListLength, setQuittingListLength] = useState(0);
    let presentListLengthLabel = `присутствуют(${presentListLength})`;
    let quittingListLengthLabel = `выбывшие(${quittingListLength})`;
    const classes = useStyles();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const presentListRes = await axios.get('./api/presentList.json');
                const quittingListRes = await axios.get('./api/quittingList.json');

                loadPresentList(presentListRes.data);
                loadQuittingList(quittingListRes.data);

                setPresentListLength(presentListRes.data.length);
                setQuittingListLength(quittingListRes.data.length);
            } catch(e) {
                console.log(e)
            }
        };

        fetchData();
    }, [presentListLength, quittingListLength]);

    const handleChange = (e, newValue) => {
        setSelectedTab(newValue)
    };

    return (
        <Paper variant="outlined" square className={classes.viewWrapper}>
            <Tabs
                value={selectedTab}
                onChange={handleChange}
                classes={{
                    root: classes.viewTabContainer,
                    indicator: classes.viewTabIndicator
                }}
            >
                <Tab label={presentListLengthLabel}/>
                <Tab label={quittingListLengthLabel}/>
            </Tabs>
            {selectedTab === 0 && <PresentList/>}
            {selectedTab === 1 && <QuittingList/>}
        </Paper>
    );
};

export default PatientsLists;