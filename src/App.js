import 'bootstrap/dist/css/bootstrap.min.css';
import './css/starter-template.css';

import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import { Provider } from 'react-redux';
import throttle from 'lodash.throttle';

import { loadState, saveState } from './utils';

import reducer from './reducers';

import Main from './containers/Main';

const initialState = loadState() || {};

const store = process.env.NODE_ENV === 'production'
    ? createStore(reducer, initialState)
    : createStore(reducer, initialState, applyMiddleware(createLogger()));

store.subscribe(throttle(() => {
    saveState(store.getState());
}, 1000));

ReactDOM.render(
    <Provider store={store}>
        <Main />
    </Provider>,
    document.getElementById('app')
);
