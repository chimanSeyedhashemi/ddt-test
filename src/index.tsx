import React from 'react';
import ReactDOM from 'react-dom';
import "./style/style.scss"
import {App} from './component/app/App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { persistor, Store2 } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.render(
  <Provider store={Store2}>
  <PersistGate loading={null} persistor={persistor}> 
        <App/>
   </PersistGate>
   </Provider>
,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
