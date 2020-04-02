/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'
import App from './src/Routes'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
