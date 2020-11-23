import { registerRootComponent } from 'expo';
import React from 'react';

import App from './App';
import {Provider} from 'react-redux';
import configureStore from "./store";

const store=configureStore();
const StoreProvider=()=>
    <Provider store={store}>
        <App />
    </Provider>

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
registerRootComponent(StoreProvider);
