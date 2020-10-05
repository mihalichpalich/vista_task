import React, {useState} from 'react';
import {Paper, Tabs, Tab} from '@material-ui/core';
import {makeStyles} from "@material-ui/core/styles";

import styles from "./styles";
import {PresentList, QuittingList} from "../index";

const useStyles = makeStyles(styles);

const PatientsLists = () => {
    const classes = useStyles();
    const [selectedTab, setSelectedTab] = useState(0);

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
                <Tab label="присутствуют(11)"/>
                <Tab label="выбывшие(11)"/>
            </Tabs>
            {selectedTab === 0 && <PresentList/>}
            {selectedTab === 1 && <QuittingList/>}
        </Paper>
    );
};

export default PatientsLists;