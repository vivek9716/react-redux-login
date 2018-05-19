import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
//import jwt from 'jsonwebtoken';
import { createStore, applyMiddleware, compose } from 'redux';
import setAuthorizationToken from './utils/setAuthorizationToken';
import rootReducer from './rootReducer';
import { setCurrentUser } from './actions/loginActions';


import Layout from './components/Layout';

const store = createStore (
	rootReducer,
	compose (
		applyMiddleware(thunk),
		//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
);
if (localStorage.jwtToken && localStorage.user_data) {
	setAuthorizationToken(localStorage.jwtToken);
	store.dispatch(setCurrentUser(localStorage.user_data));
}

ReactDom.render(
	<Provider store={store} >
		<BrowserRouter>
			<Layout />
		</BrowserRouter>
	</Provider>
	, document.getElementById('root'));