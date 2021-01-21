import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store.js';
import App from './container/App';
import { ThemeProvider } from 'styled-components'
import theme from './theme'

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        {/* <ThemeProvider theme={theme}> */}
            <App />
        {/* </ThemeProvider> */}
    </Provider>
    , document.getElementById("root"));
