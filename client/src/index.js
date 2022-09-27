import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import App from './App';
import Home from './Home';
import './index.css';

const store = createStore(reducers, compose(applyMiddleware(thunk)))



ReactDOM.render(
<Provider store={store}>
<Home />
</Provider>
, document.getElementById('root'));
