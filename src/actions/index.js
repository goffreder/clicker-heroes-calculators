import { createAction } from 'redux-actions';

export const loadTab = createAction('LOAD_TAB', tab => ({ tab }));

export const setPlayStyle = createAction('SET_PLAY_STYLE', style => ({ style }));

export const loadGameState = createAction('LOAD_GAME_STATE', (state, encodedState) => ({ state, encodedState }));

export const setDogcogLevel = createAction('SET_DOGCOG_LEVEL', level => ({ level }));

export const setHeroCurrentLevel = createAction('SET_HERO_CURRENT_LEVEL', (hero, value) => ({ hero, value }))

export const setHeroTargetLevel = createAction('SET_HERO_TARGET_LEVEL', (hero, value) => ({ hero, value }));
