import React from 'react';
import Sugar from 'sugar';
import { Provider } from 'react-redux';
import Router from './router';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducer);



const Index = () => {
    Sugar.extend();
    return (
        <Provider store={store}>
            <Router />
        </Provider>
    );
};


export default Index; 