/**
 * APPLICATION STATE
 *
 * {
 *      active:
 *
 *      gameState:
 *
 *      relics:
 * }
 */

import { combineReducers } from 'redux';

import heroes from './heroes';

const relicsCalculatorApp = combineReducers({
    active: (state = 'relics', action) => action.type === 'LOAD_TAB' ? action.payload.tab : state,
    gameState: (state = null, action) => action.type === 'LOAD_GAME_STATE' ? action.payload.state : state,
    heroes
});

export default relicsCalculatorApp;
