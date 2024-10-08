import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client'; // Corrected import
import { Provider } from 'react-redux';
import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import reduxThunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
