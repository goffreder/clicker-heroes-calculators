import { combineReducers } from 'redux';

import appState from './appState';
import heroes from './heroes';
import ancients from './ancients';

const relicsCalculatorApp = combineReducers({
    version: () => appData.version,
    appState,
    gameState: (state = null, action) => action.type === 'LOAD_GAME_STATE' ? action.payload.state : state,
    encodedState: (state = '', action) => action.type === 'LOAD_GAME_STATE' ? action.payload.encodedState : state,
    heroes,
    ancients,
});

export default relicsCalculatorApp;
