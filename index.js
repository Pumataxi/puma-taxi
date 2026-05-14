import {AppRegistry} from 'react-native';
import App from './App'; // или твой главный компонент
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
