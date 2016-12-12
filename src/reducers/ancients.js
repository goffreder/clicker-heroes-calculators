import { allImages } from '../css/images';

const images = allImages.ancients;

const ancients = {
    3: {
        id: 3,
        label: 'Solomon',
        fullName: 'Solomon, Ancient of Wisdom',
        image: images.Solomon,
        relicBonusId: 25,
        relicText: '{}',
        relicBonusCallback: levels => 0,
        coefficients: {
            hybrid: 1,
            idle: 10,
        },
    },
    4: {
        id: 4,
        label: 'Libertas',
        fullName: 'Libertas, Ancient of Freedom',
        image: images.Libertas,
        relicBonusId: 24,
        relicText: '{}',
        relicBonusCallback: levels => 0,
        coefficients: {
            hybrid: 1,
            idle: 1,
        },
    },
    5: {
        id: 5,
        label: 'Siyalatas',
        fullName: 'Siyalatas, Ancient of Abandon',
        image: images.Siyalatas,
        relicBonusId: 1,
        relicText: '{}',
        relicBonusCallback: levels => 0,
        coefficients: {
            hybrid: 1,
            idle: 1,
        },
    },
    8: {
        id: 8,
        label: 'Mammon',
        fullName: 'Mammon, Ancient of Greed',
        image: images.Mammon,
        relicBonusId: 22,
        relicText: '+{}% Gold Dropped',
        relicBonusCallback: levels => levels * 5,
        coefficients: {
            hybrid: 1,
            idle: 1,
        },
    },
    9: {
        id: 9,
        label: 'Mimzee',
        fullName: 'Mimzee, Ancient of Riches',
        image: images.Mimzee,
        relicBonusId: 21,
        relicText: '+{}% Gold From Treasure Chests',
        relicBonusCallback: levels => levels * 50,
        coefficients: {
            hybrid: 1,
            idle: 1,
        },
    },
    11: {
        id: 11,
        label: 'Dogcog',
        fullName: 'Dogcog, Ancient of Thrift',
        image: images.Dogcog,
        relicBonusId: 19,
        relicText: '-{}% Hero Hiring and Level-Up cost',
        relicBonusCallback: (relicLevels, totalLevels) => {
            return 99 * (1 - Math.exp(-0.01 * totalLevels)) - 99 * (1 - Math.exp(-0.01 * (totalLevels - relicLevels)))
        },
        coefficients: {
            hybrid: 50,
            idle: 50,
        },
    },
    12: {
        id: 12,
        label: 'Fortuna',
        fullName: 'Fortuna, Ancient of Chance',
        image: images.Fortuna,
        relicBonusId: 18,
        relicText: '+{}% Change of 10% Gold',
        relicBonusCallback: (relicLevels, totalLevels) => {
            return 100 * (1 - Math.exp(-0.0025 * totalLevels)) - 100 * (1 - Math.exp(-0.0025 * (totalLevels - relicLevels)))
        },
        coefficients: {
            hybrid: 45,
            idle: 70,
        },
    },
    13: {
        id: 13,
        label: 'Atman',
        fullName: 'Atman, Ancient of Souls',
        image: images.Atman,
        relicBonusId: 17,
        relicText: '+{}% Chance of Primal Bosses',
        relicBonusCallback: (relicLevels, totalLevels) => {
            return 75 * (1 - Math.exp(-0.013 * totalLevels)) - 75 * (1 - Math.exp(-0.013 * (totalLevels - relicLevels)));
        },
        coefficients: {
            hybrid: 100,
            idle: 100,
        },
    },
    14: {
        id: 14,
        label: 'Dora',
        fullName: 'Dora, Ancient of Discovery',
        image: images.Dora,
        relicBonusId: 16,
        relicText: '{}',
        relicBonusCallback: levels => 0,
        coefficients: {
            hybrid: 55,
            idle: 70,
        },
    },
    15: {
        id: 15,
        label: 'Bhaal',
        fullName: 'Bhaal, Ancient of Murder',
        image: images.Bhaal,
        relicBonusId: 15,
        relicText: '{}',
        relicBonusCallback: levels => 0,
        coefficients: {
            hybrid: 1,
            idle: 1,
        },
    },
    16: {
        id: 16,
        label: 'Morgulis',
        fullName: 'Morgulis, Ancient of Death',
        image: images.Morgulis,
        relicBonusId: 14,
        relicText: '{}',
        relicBonusCallback: levels => 0,
        coefficients: {
            hybrid: 1,
            idle: 1,
        },
    },
    17: {
        id: 17,
        label: 'Chronos',
        fullName: 'Chronos, Ancient of Time',
        image: images.Chronos,
        relicBonusId: 3,
        relicText: '+{} seconds to Boss Fight timers',
        relicBonusCallback: (relicLevels, totalLevels) => {
            return 30 * (1 - Math.exp(-0.034 * totalLevels)) - 30 * (1 - Math.exp(-0.034 * (totalLevels - relicLevels)));
        },
        coefficients: {
            hybrid: 30,
            idle: 20,
        },
    },
    18: {
        id: 18,
        label: 'Bubos',
        fullName: 'Bubos, Ancient of Diseases',
        image: images.Bubos,
        relicBonusId: 13,
        relicText: '-{}% Boss Life',
        relicBonusCallback: (relicLevels, totalLevels) => {
            return 50 * (1 - Math.exp(-0.02 * totalLevels)) - 50 * (1 - Math.exp(-0.02 * (totalLevels - relicLevels)))
        },
        coefficients: {
            hybrid: 35,
            idle: 20,
        },
    },
    19: {
        id: 19,
        label: 'Fragsworth',
        fullName: 'Fragsworth, Ancient of Wrath',
        image: images.Fragsworth,
        relicBonusId: 2,
        relicText: '{}',
        relicBonusCallback: levels => 0,
        coefficients: {
            hybrid: 1,
            idle: 1,
        },
    },
    20: {
        id: 20,
        label: 'Vaagur',
        fullName: 'Vaagur, Ancient of Impatience',
        image: images.Vaagur,
        relicBonusId: 28,
        relicText: '-{}% skill cooldowns',
        relicBonusCallback: (relicLevels, totalLevels) => {
            return 75 * (1 - Math.exp(-0.026 * totalLevels)) - 75 * (1 - Math.exp(-0.026 * (totalLevels - relicLevels)))
        },
        coefficients: {
            hybrid: 25,
            idle: 20,
        },
    },
    21: {
        id: 21,
        label: 'Kumawakamaru',
        fullName: 'Kumawakamaru, Ancient of Shadows',
        image: images.Kumawakamaru,
        relicBonusId: 27,
        relicText: '-{} monsters required to advance to the next level',
        relicBonusCallback: (relicLevels, totalLevels) => {
            return 8 * (1 - Math.exp(-0.01 * totalLevels)) - 8 * (1 - Math.exp(-0.01 * (totalLevels - relicLevels)))
        },
        coefficients: {
            hybrid: 100,
            idle: 100,
        },
    },
    22: {
        id: 22,
        label: 'Chawedo',
        fullName: 'Chawedo, Ancient of Agitation',
        image: images.Chawedo,
        relicBonusId: 4,
        relicText: '+{} seconds to duration of Clickstorm',
        relicBonusCallback: levels => levels * 2,
        coefficients: {
            hybrid: 1,
            idle: 1,
        },
    },
    23: {
        id: 23,
        label: 'Hecatoncheir',
        fullName: 'Hecatoncheir, Ancient of Wallops',
        image: images.Hecatoncheir,
        relicBonusId: 12,
        relicText: '+{} seconds to duration of Super Clicks',
        relicBonusCallback: levels => levels * 2,
        coefficients: {
            hybrid: 10,
            idle: 1,
        },
    },
    24: {
        id: 24,
        label: 'Berserker',
        fullName: 'Berserker, Ancient of Rage',
        image: images.Berserker,
        relicBonusId: 11,
        relicText: '+{} seconds to duration of Powersurge',
        relicBonusCallback: levels => levels * 2,
        coefficients: {
            hybrid: 1,
            idle: 1,
        },
    },
    25: {
        id: 25,
        label: 'Sniperino',
        fullName: 'Sniperino, Ancient of Accuracy',
        image: images.Sniperino,
        relicBonusId: 10,
        relicText: '+{} seconds to duration of Lucky Strikes',
        relicBonusCallback: levels => levels * 2,
        coefficients: {
            hybrid: 60,
            idle: 1,
        },
    },
    26: {
        id: 26,
        label: 'Kleptos',
        fullName: 'Kleptos, Ancient of Thieves',
        image: images.Kleptos,
        relicBonusId: 9,
        relicText: '+{} seconds to duration of Golden Clicks',
        relicBonusCallback: levels => levels * 2,
        coefficients: {
            hybrid: 15,
            idle: 1,
        },
    },
    27: {
        id: 27,
        label: 'Energon',
        fullName: 'Energon, Anciet of Battery Life',
        image: images.Energon,
        relicBonusId: 8,
        relicText: '+{} seconds to duration of Metal Detector',
        relicBonusCallback: levels => levels * 2,
        coefficients: {
            hybrid: 10,
            idle: 1,
        },
    },
    28: {
        id: 28,
        label: 'Argaiv',
        fullName: 'Argaiv, Ancent of Enhancement',
        image: images.Argaiv,
        relicBonusId: 7,
        relicText: '{}',
        relicBonusCallback: levels => levels * 2,
        coefficients: {
            hybrid: 1,
            idle: 1,
        },
    },
    29: {
        id: 29,
        label: 'Juggernaut',
        fullName: 'Juggernaut, Ancient of Momentum',
        image: images.Juggernaut,
        relicBonusId: 26,
        relicText: '{}',
        relicBonusCallback: levels => 0,
        coefficients: {
            hybrid: 1,
            idle: 1,
        },
    },
    31: {
        id: 31,
        label: 'Revolc',
        fullName: 'Revolc, Ancient of Luck',
        image: images.Revolc,
        relicBonusId: 5,
        relicText: '+{}% Chance of double rubies from clickable treasures, when you get a ruby.',
        relicBonusCallback: (relicLevels, totalLevels) => {
            return 100 * (1 - Math.exp(-0.01 * totalLevels)) - 100 * (1 - Math.exp(-0.01 * (totalLevels - relicLevels)));
        },
        coefficients: {
            hybrid: 40,
            idle: 60,
        },
    },
    32: {
        id: 32,
        label: 'Nogardinit',
        fullName: 'Nogardinit, Ancient of Moderation',
        image: images.Nogardinit,
        relicBonusId: 0,
        relicText: '{}',
        relicBonusCallback: levels => 0,
        coefficients: {
            hybrid: 0,
            idle: 0,
        },
    },
};

const byRelicBonusId = Object.keys(ancients)
    .reduce((byRelicBonusId, ancientId) => ({ ...byRelicBonusId, [ancients[ancientId].relicBonusId]: ancientId }), {});

const defaultState = {
    editing: false,
    ancients,
    byRelicBonusId,
};

const reducer = {
    LOAD_GAME_STATE: (state, action) => {
        Object.keys(action.payload.state.ancients.ancients).forEach(ancientId => {
            ancients[ancientId].baseLevel = +action.payload.state.ancients.ancients[ancientId].level;
        });

        return state;
    },
    TOGGLE_EDIT_MODE: (state) => {
        return {
            ...state,
            editing: !state.editing
        };
    },
    SET_ANCIENT_COEFFICIENT: (state, action) => {
        return {
            ...state,
            ancients: {
                ...state.ancients,
                [action.payload.ancientId]: {
                    ...state.ancients[action.payload.ancientId],
                    coefficients: {
                        ...state.ancients[action.payload.ancientId].coefficients,
                        [action.payload.style]: action.payload.coefficient
                    }
                }
            }
        };
    }
};

export default(state = defaultState, action) => {
    if (typeof reducer[action.type] === 'undefined')
        return state;
    return reducer[action.type](state, action);
};
