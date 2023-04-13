/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import FireworkSDK from 'react-native-firework-sdk';

AppRegistry.registerComponent(appName, () => App);

FireworkSDK.getInstance().init();
