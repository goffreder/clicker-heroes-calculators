import { combineReducers } from 'redux';

import heroes from './heroes';
import ancients from './ancients';

const relicsCalculatorApp = combineReducers({
    active: (state = 'relics', action) => action.type === 'LOAD_TAB' ? action.payload.tab : state,
    playStyle: (state = 'idle', action) => action.type === 'SET_PLAY_STYLE' ? action.payload.style : state,
    gameState: (state = null, action) => action.type === 'LOAD_GAME_STATE' ? action.payload.state : state,
    encodedState: (state = '', action) => action.type === 'LOAD_GAME_STATE' ? action.payload.encodedState : state,
    heroes,
    ancients,
});

export default relicsCalculatorApp;
