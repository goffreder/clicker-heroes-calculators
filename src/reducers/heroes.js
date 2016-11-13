const defaultState = {
    dogcogLevel: 0,
    costs: {
        cid: { currentLevel: 0, targetLevel: 1000 },
        treebeast: { currentLevel: 0, targetLevel: 1000 },
        ivan: { currentLevel: 0, targetLevel: 1000 },
        brittany: { currentLevel: 0, targetLevel: 1000 },
        fisherman: { currentLevel: 0, targetLevel: 1000 },
        betty: { currentLevel: 0, targetLevel: 1000 },
        samurai: { currentLevel: 0, targetLevel: 1000 },
        leon: { currentLevel: 0, targetLevel: 1000 },
        forest: { currentLevel: 0, targetLevel: 1000 },
        alexa: { currentLevel: 0, targetLevel: 1000 },
        natalia: { currentLevel: 0, targetLevel: 1000 },
        mercedes: { currentLevel: 0, targetLevel: 1000 },
        bobby: { currentLevel: 0, targetLevel: 1000 },
        broyle: { currentLevel: 0, targetLevel: 1000 },
        george: { currentLevel: 0, targetLevel: 1000 },
        midas: { currentLevel: 0, targetLevel: 1000 },
        referi: { currentLevel: 0, targetLevel: 1000 },
        abaddon: { currentLevel: 0, targetLevel: 1000 },
        mazhu: { currentLevel: 0, targetLevel: 1000 },
        amenhotep: { currentLevel: 0, targetLevel: 1000 },
        beastlord: { currentLevel: 0, targetLevel: 1000 },
        athena: { currentLevel: 0, targetLevel: 1000 },
        aphrodite: { currentLevel: 0, targetLevel: 1000 },
        shinatobe: { currentLevel: 0, targetLevel: 1000 },
        grant: { currentLevel: 0, targetLevel: 1000 },
        frostleaf: { currentLevel: 0, targetLevel: 1000 },
        dreadKnight: { currentLevel: 0, targetLevel: 1000 },
        atlas: { currentLevel: 0, targetLevel: 1000 },
        terra: { currentLevel: 0, targetLevel: 1000 },
        phtalo: { currentLevel: 0, targetLevel: 1000 },
        orntchya: { currentLevel: 0, targetLevel: 1000 },
        lillin: { currentLevel: 0, targetLevel: 1000 },
        cadmia: { currentLevel: 0, targetLevel: 1000 },
        alabaster: { currentLevel: 0, targetLevel: 1000 },
        astraea: { currentLevel: 0, targetLevel: 1000 },
        chiron: { currentLevel: 0, targetLevel: 1000 },
        moloch: { currentLevel: 0, targetLevel: 1000 },
        bomberMax: { currentLevel: 0, targetLevel: 1000 },
        gog: { currentLevel: 0, targetLevel: 1000 },
        wepwawet: { currentLevel: 0, targetLevel: 1000 },
        tsuchi: { currentLevel: 0, targetLevel: 1000 },
        skogur: { currentLevel: 0, targetLevel: 1000 },
        moeru: { currentLevel: 0, targetLevel: 1000 },
        zilar: { currentLevel: 0, targetLevel: 1000 },
        madzi: { currentLevel: 0, targetLevel: 1000 },
    },
};

const reducer = {
    LOAD_GAME_STATE: (state, action) => {
        const dogcog = action.payload.state.ancients.ancients['11'];

        return {
            ...state,
            dogcogLevel: dogcog ? dogcog.level : 0
        };
    },
    SET_DOGCOG_LEVEL: (state, action) => {
        return {
            ...state,
            dogcogLevel: action.payload.level
        };
    },
    SET_HERO_CURRENT_LEVEL: (state, action) => {
        return {
            ...state,
            costs: {
                ...state.costs,
                [action.payload.hero]: {
                    ...state.costs[action.payload.hero],
                    currentLevel: action.payload.value
                }
            }
        };
    },
    SET_HERO_TARGET_LEVEL: (state, action) => {
        return {
            ...state,
            costs: {
                ...state.costs,
                [action.payload.hero]: {
                    ...state.costs[action.payload.hero],
                    targetLevel: action.payload.value
                }
            }
        };
    }
};

export default (state = defaultState, action) => {
    if (typeof reducer[action.type] === 'undefined') return state;
    return reducer[action.type](state, action);
};
