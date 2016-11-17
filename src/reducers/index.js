import { combineReducers } from 'redux';

import heroes from './heroes';

const relicsCalculatorApp = combineReducers({
    active: (state = 'relics', action) => action.type === 'LOAD_TAB' ? action.payload.tab : state,
    gameState: (state = null, action) => action.type === 'LOAD_GAME_STATE' ? action.payload.state : state,
    encodedState: (state = '', action) => action.type === 'LOAD_GAME_STATE' ? action.payload.encodedState : state,
    heroes
});

export default relicsCalculatorApp;
