import React from 'react';
import AppRoutes from './src/navigation/AppRoutes';
import {Provider} from "react-redux"
import { rootReducer } from './src/redux/reducer/rootReducer';
import {createStore} from 'redux';

const App = () => {
  return (
  <Provider store={createStore(rootReducer)}>
  <AppRoutes />
  </Provider>
  )
};

export default App;
