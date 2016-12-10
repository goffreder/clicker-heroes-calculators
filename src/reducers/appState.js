export const defaultState = {
    activeTab: 'relics',
    playStyle: 'idle',
};

const reducer = {
    LOAD_TAB: (state, action) => ({
        ...state,
        activeTab: action.payload.tab,
    }),
    SET_PLAY_STYLE: (state, action) => ({
        ...state,
        playStyle: action.payload.style,
    }),
};

export default (state = defaultState, action) => {
    if (typeof reducer[action.type] === 'undefined') return state;
    return reducer[action.type](state, action);
};
