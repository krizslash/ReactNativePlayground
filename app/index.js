import React from 'react';
import {AppRegistry} from 'react-native';
//import {wrapObjectInFunction} from './utils/transformer.util';
//import {Provider} from 'react-redux';
//import {initStore} from './state/store';
//import {initializeHTTPInterceptors} from './utils/http.util';
import AwesomeProject from './App.Container';
//import {setJSExceptionHandler} from 'react-native-exception-handler';
//import errorHandler from './utils/errorHandler.util';

const MyApp = () => (
  //<Provider store={store}>
    <AwesomeProject/>
  //</Provider>
);

export default MyApp;
//AppRegistry.registerComponent('myapp', wrapObjectInFunction(UbyApp));
//AppRegistry.registerComponent('AwesomeProject', () =>MyApp);
