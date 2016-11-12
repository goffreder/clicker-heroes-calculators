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

const relicsCalculatorApp = combineReducers({
    active: (state = 'home', action) => action.type === 'LOAD_TAB' ? action.payload.tab : state,
    gameState: (state = null, action) => action.type === 'LOAD_GAME_STATE' ? action.payload.state : state,
});

export default relicsCalculatorApp;
