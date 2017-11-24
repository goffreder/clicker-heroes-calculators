/* global appData */

import { combineReducers } from 'redux';

import appState from './appState';
import heroes from './heroes';
import ancients from './ancients';
import outsiders from './outsiders';

const relicsCalculatorApp = combineReducers({
    version: () => appData.version,
    appState,
    gameState: (state = null, action) => {
        return action.type === 'LOAD_GAME_STATE' ? action.payload.state : state;
    },
    encodedState: (state = '', action) => {
        return action.type === 'LOAD_GAME_STATE'
            ? action.payload.encodedState
            : state;
    },
    heroes,
    ancients,
    outsiders,
});

export default relicsCalculatorApp;
