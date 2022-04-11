/**
 * @format
 */
import React from 'react'
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { store } from './app/reduxModal/store';

const AppRedux = () => {
    return <Provider store={store}>
        <App />
    </Provider>
}

AppRegistry.registerComponent(appName, () => AppRedux);
