import { allImages } from '../css/images';

const images = allImages.ancients;

const ancients = {
    // 3: {
    //     id: 3,
    //     label: 'Solomon',
    //     fullName: 'Solomon, Ancient of Wisdom',
    //     image: images.Solomon,
    //     baseLevel: 0,
    //     relicBonusId: 25,
    //     relicText: '+{}% Primal Hero Souls',
    //     coefficients: {
    //         hybrid: 1,
    //         idle: 10,
    //     },
    // },
    4: {
        id: 4,
        label: 'Libertas',
        fullName: 'Libertas, Ancient of Freedom',
        image: images.Libertas,
        baseLevel: 0,
        relicBonusId: 24,
        relicText: '+{}% Gold gained from monsters when idle (no clicks for 60 seconds)',
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
        baseLevel: 0,
        relicBonusId: 1,
        relicText: '+{}% DPS when idle (no clicks for 60 seconds)',
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
        baseLevel: 0,
        relicBonusId: 22,
        relicText: '+{}% Gold Dropped',
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
        baseLevel: 0,
        relicBonusId: 21,
        relicText: '+{}% Gold From Treasure Chests',
        coefficients: {
            hybrid: 1,
            idle: 1,
        },
    },
    10: {
        id: 10,
        label: 'Pluto',
        fullName: 'Pluto, Ancient of Wealth',
        image: images.Pluto,
        baseLevel: 0,
        relicBonusId: 20,
        relicText: '+{}% Gold from Golden Clicks',
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
        baseLevel: 0,
        relicBonusId: 19,
        relicText: '-{}% Hero Hiring and Level-Up cost',
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
        baseLevel: 0,
        relicBonusId: 18,
        relicText: '+{}% Chance of 10% Gold',
        coefficients: {
            hybrid: 45,
            idle: 50,
        },
    },
    13: {
        id: 13,
        label: 'Atman',
        fullName: 'Atman, Ancient of Souls',
        image: images.Atman,
        baseLevel: 0,
        relicBonusId: 17,
        relicText: '+{}% Chance of Primal Bosses',
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
        baseLevel: 0,
        relicBonusId: 16,
        relicText: '+{}% more Treasure Chests',
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
        baseLevel: 0,
        relicBonusId: 15,
        relicText: '+{}% damage to Critical Clicks',
        coefficients: {
            hybrid: 1,
            idle: 0,
        },
    },
    16: {
        id: 16,
        label: 'Morgulis',
        fullName: 'Morgulis, Ancient of Death',
        image: images.Morgulis,
        baseLevel: 0,
        relicBonusId: 14,
        relicText: '+{}% to Hero Soul DPS (additive)',
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
        baseLevel: 0,
        relicBonusId: 3,
        relicText: '+{} seconds to Boss Fight timers',
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
        baseLevel: 0,
        relicBonusId: 13,
        relicText: '-{} Monsters Worth of Boss Life (minimum 5 monsters)',
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
        baseLevel: 0,
        relicBonusId: 2,
        relicText: '+{}% Click Damage',
        coefficients: {
            hybrid: 1,
            idle: 0,
        },
    },
    20: {
        id: 20,
        label: 'Vaagur',
        fullName: 'Vaagur, Ancient of Impatience',
        image: images.Vaagur,
        baseLevel: 0,
        relicBonusId: 28,
        relicText: '-{}% skill cooldowns',
        coefficients: {
            hybrid: 25,
            idle: 0,
        },
    },
    21: {
        id: 21,
        label: 'Kumawakamaru',
        fullName: 'Kumawakamaru, Ancient of Shadows',
        image: images.Kumawakamaru,
        baseLevel: 0,
        relicBonusId: 27,
        relicText: '-{} monsters required to advance to the next zone (minimum 2 monsters per zone)',
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
        baseLevel: 0,
        relicBonusId: 4,
        relicText: '+{} seconds to duration of Clickstorm',
        coefficients: {
            hybrid: 1,
            idle: 0,
        },
    },
    23: {
        id: 23,
        label: 'Hecatoncheir',
        fullName: 'Hecatoncheir, Ancient of Wallops',
        image: images.Hecatoncheir,
        baseLevel: 0,
        relicBonusId: 12,
        relicText: '+{} seconds to duration of Super Clicks',
        coefficients: {
            hybrid: 10,
            idle: 0,
        },
    },
    24: {
        id: 24,
        label: 'Berserker',
        fullName: 'Berserker, Ancient of Rage',
        image: images.Berserker,
        baseLevel: 0,
        relicBonusId: 11,
        relicText: '+{} seconds to duration of Powersurge',
        coefficients: {
            hybrid: 1,
            idle: 0,
        },
    },
    25: {
        id: 25,
        label: 'Sniperino',
        fullName: 'Sniperino, Ancient of Accuracy',
        image: images.Sniperino,
        baseLevel: 0,
        relicBonusId: 10,
        relicText: '+{} seconds to duration of Lucky Strikes',
        coefficients: {
            hybrid: 30,
            idle: 0,
        },
    },
    26: {
        id: 26,
        label: 'Kleptos',
        fullName: 'Kleptos, Ancient of Thieves',
        image: images.Kleptos,
        baseLevel: 0,
        relicBonusId: 9,
        relicText: '+{} seconds to duration of Golden Clicks',
        coefficients: {
            hybrid: 60,
            idle: 0,
        },
    },
    27: {
        id: 27,
        label: 'Energon',
        fullName: 'Energon, Anciet of Battery Life',
        image: images.Energon,
        baseLevel: 0,
        relicBonusId: 8,
        relicText: '+{} seconds to duration of Metal Detector',
        coefficients: {
            hybrid: 10,
            idle: 0,
        },
    },
    28: {
        id: 28,
        label: 'Argaiv',
        fullName: 'Argaiv, Ancent of Enhancement',
        image: images.Argaiv,
        baseLevel: 0,
        relicBonusId: 7,
        relicText: '+{}% to Gilded damage bonus (per Gild)',
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
        baseLevel: 0,
        relicBonusId: 26,
        relicText: '+{}% DPS per click combo (active clicking)',
        coefficients: {
            hybrid: 1,
            idle: 0,
        },
    },
    31: {
        id: 31,
        label: 'Revolc',
        fullName: 'Revolc, Ancient of Luck',
        image: images.Revolc,
        baseLevel: 0,
        relicBonusId: 5,
        relicText: '+{}% Chance of double rubies from clickable treasures, when you get a ruby.',
        coefficients: {
            hybrid: 40,
            idle: 30,
        },
    },
    32: {
        id: 32,
        label: 'Nogardnit',
        fullName: 'Nogardnit, Ancient of Moderation',
        image: images.Nogardnit,
        baseLevel: 0,
        relicBonusId: 0,
        relicText: '{}',
        coefficients: {
            hybrid: 0,
            idle: 10,
        },
    },
};

const byRelicBonusId = Object.keys(ancients)
    .reduce((relicsObj, ancientId) => {
        return { ...relicsObj, [ancients[ancientId].relicBonusId]: ancientId };
    }, {});

const defaultState = {
    editing: false,
    ancients,
    byRelicBonusId,
    ponyboyLevel: 0,
    xyliqilLevel: 0,
};

const reducer = {
    LOAD_GAME_STATE: (state, action) => {
        const payloadAncients = action.payload.state.ancients.ancients;

        Object.keys(payloadAncients).forEach(ancientId => {
            ancients[ancientId].baseLevel = Number(payloadAncients[ancientId].level);
        });

        return {
            ...state,
            ponyboyLevel: action.payload.state.outsiders.outsiders[5].level,
            xyliqilLevel: action.payload.state.outsiders.outsiders[1].level,
        };
    },
    TOGGLE_EDIT_MODE: (state) => {
        return {
            ...state,
            editing: !state.editing,
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
                        [action.payload.style]: action.payload.coefficient,
                    },
                },
            },
        };
    },
};

export default(state = defaultState, action) => {
    if (typeof reducer[action.type] === 'undefined') {
        return state;
    }
    return reducer[action.type](state, action);
};
