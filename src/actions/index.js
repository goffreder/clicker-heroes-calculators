import { createAction } from 'redux-actions';

export const loadTab = createAction('LOAD_TAB', tab => ({ tab }));

export const loadGameState = createAction('LOAD_GAME_STATE', state => ({ state }));
