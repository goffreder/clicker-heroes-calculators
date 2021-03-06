import { getoutsiderCallbacks } from '../selectors';

import { allImages } from '../css/images';

const images = allImages.outsiders;

const outsiders = {
    1: {
        id: 1,
        label: 'Xyliqil',
        image: images.Xyliqil,
        level: 0,
    },
    2: {
        id: 2,
        label: "Chor'gorloth",
        image: images.Chorgorloth,
        level: 0,
    },
    3: {
        id: 3,
        label: 'Phandoryss',
        image: images.Phandoryss,
        level: 0,
    },
    5: {
        id: 5,
        label: 'Ponyboy',
        image: images.Ponyboy,
        level: 0,
    },
    6: {
        id: 6,
        label: 'Borb',
        image: images.Borb,
        level: 0,
    },
    7: {
        id: 7,
        label: 'Rhageist',
        image: images.Rhageist,
        level: 0,
    },
    8: {
        id: 8,
        label: "K'Ariqua",
        image: images.KAriqua,
        level: 0,
    },
    9: {
        id: 9,
        label: 'Orphalas',
        image: images.Orphalas,
        level: 0,
    },
    10: {
        id: 10,
        label: 'Sen-Akhan',
        image: images.SenAkhan,
        level: 0,
    },
};

const defaultState = {
    outsiders,
    totalAncientSouls: 0,
    spentAncientSouls: 0,
    highlighted: 0,
};

const reducer = {
    LOAD_GAME_STATE: (state, { payload }) => {
        const updatedOutsiders = {};

        Object.values(payload.state.outsiders.outsiders).forEach(o => {
            if (outsiders[o.id]) {
                updatedOutsiders[o.id] = {
                    ...outsiders[o.id],
                    level: o.level,
                };
            }
        });

        return {
            ...state,
            outsiders: updatedOutsiders,
            totalAncientSouls: payload.state.ancientSoulsTotal,
            spentAncientSouls:
                payload.state.ancientSoulsTotal - payload.state.ancientSouls,
        };
    },
    SET_ANCIENT_SOULS: (state, { payload }) => {
        return {
            ...state,
            totalAncientSouls: payload.souls,
        };
    },
    ADD_OUTSIDER_LEVELS: (state, { payload }) => {
        const outsiderCallbacks = getoutsiderCallbacks();
        const oldLevel = state.outsiders[payload.id].level;
        const newLevel = oldLevel + payload.levels;
        const oldTotalSpentSouls = state.spentAncientSouls;
        const oldOutsiderSpentSouls = outsiderCallbacks[
            payload.id
        ].costForLevel(oldLevel);
        const newOutsiderSpentSouls = outsiderCallbacks[
            payload.id
        ].costForLevel(newLevel);
        const diffSpentSouls = newOutsiderSpentSouls - oldOutsiderSpentSouls;
        const newTotalSpentSouls = oldTotalSpentSouls + diffSpentSouls;

        return {
            ...state,
            outsiders: {
                ...state.outsiders,
                [payload.id]: {
                    ...state.outsiders[payload.id],
                    level: newLevel,
                },
            },
            spentAncientSouls: newTotalSpentSouls,
        };
    },
    SUB_OUTSIDER_LEVELS: (state, { payload }) => {
        const outsiderCallbacks = getoutsiderCallbacks();
        const oldLevel = state.outsiders[payload.id].level;
        const newLevel = oldLevel - payload.levels;
        const oldTotalSpentSouls = state.spentAncientSouls;
        const oldOutsiderSpentSouls = outsiderCallbacks[
            payload.id
        ].costForLevel(oldLevel);
        const newOutsiderSpentSouls = outsiderCallbacks[
            payload.id
        ].costForLevel(newLevel);
        const diffSpentSouls = newOutsiderSpentSouls - oldOutsiderSpentSouls;
        const newTotalSpentSouls = oldTotalSpentSouls + diffSpentSouls;

        return {
            ...state,
            outsiders: {
                ...state.outsiders,
                [payload.id]: {
                    ...state.outsiders[payload.id],
                    level: newLevel,
                },
            },
            spentAncientSouls: newTotalSpentSouls,
        };
    },
    HIGHLIGHT_OUTSIDER: (state, { payload }) => {
        return {
            ...state,
            highlighted: payload.id,
        };
    },
};

export default (state = defaultState, action) => {
    if (typeof reducer[action.type] === 'undefined') {
        return state;
    }
    return reducer[action.type](state, action);
};
