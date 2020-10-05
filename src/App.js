import React from 'react';
import {CssBaseline} from "@material-ui/core";

import MainPage from "./pages/MainPage/MainPage";
import {Provider} from "./flux/provider";

const App = () => {
    return (
        <Provider>
            <CssBaseline>
                <MainPage/>
            </CssBaseline>
        </Provider>
    );
};

export default App;
