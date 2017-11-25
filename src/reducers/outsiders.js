import { getoutsiderCallbacks } from '../selectors';

const outsiders = {
    1: {
        id: 1,
        label: 'Xyliqil',
        level: 0,
    },
    2: {
        id: 2,
        label: "Chor'gorloth",
        level: 0,
    },
    3: {
        id: 3,
        label: 'Phandoryss',
        level: 0,
    },
    5: {
        id: 5,
        label: 'Ponyboy',
        level: 0,
    },
    6: {
        id: 6,
        label: 'Borb',
        level: 0,
    },
    7: {
        id: 7,
        label: 'Rhageist',
        level: 0,
    },
    8: {
        id: 8,
        label: "K'Ariqua",
        level: 0,
    },
    9: {
        id: 9,
        label: 'Orphalas',
        level: 0,
    },
    10: {
        id: 10,
        label: 'Sen-Akhan',
        level: 0,
    },
};

const defaultState = {
    outsiders,
    totalAncientSouls: 0,
    spentAncientSouls: 0,
};

const reducer = {
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
};

export default (state = defaultState, action) => {
    if (typeof reducer[action.type] === 'undefined') {
        return state;
    }
    return reducer[action.type](state, action);
};
