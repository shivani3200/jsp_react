import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './index.css';
import store from '../src/redux/store/store'
import { Provider } from 'react-redux';
import ToolKitStore from './reduxToolkit/toolkitStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <Provider store={ToolKitStore}>
    <App />
    </Provider>
  </React.StrictMode>
);

