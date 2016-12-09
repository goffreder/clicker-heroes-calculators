const callbacks = {
    argaiv: l => 0,
    atman: l => 0,
    berserker: l => l * 2,
    bhaal: l => 0,
    bubos: l => 0,
    chawedo: l => l * 2,
    chronos: l => 0,
    dogcog: l => 0,
    dora: l => 0,
    energon: l => l * 2,
    fortuna: l => 0,
    fragsworth: l => 0,
    hecatoncheir: l => l * 2,
    juggernaut: l => 0,
    kleptos: l => l * 2,
    kumawakamaru: l => 0,
    libertas: l => 0,
    mammon: l => l * 5,
    mimzee: l => l * 50,
    morgulis: l => 0,
    revolc: l => 0,
    siyalatas: l => 0,
    sniperino: l => l * 2,
    solomon: l => 0,
    vaagur: l => 0,
};

const defaultState = {
    editing: false,
    tiers: {
        1: {
            label: 'Siyalatas',
            relicText: '{} test',
            baseValue: 0,
            multipliers: {
                hybrid: 1,
                idle: 40
            }
        },
        2: {
            label: 'Fragsworth',
            relicText: '{} test',
            baseValue: 0,
            multipliers: {
                hybrid: 1,
                idle: 1
            }
        },
        3: {
            label: 'Chronos',
            relicText: '{} test',
            baseValue: 0,
            multipliers: {
                hybrid: 30,
                idle: 20
            }
        },
        4: {
            label: 'Chawedo',
            relicText: '+{} seconds to duration of Clickstorm',
            baseValue: 2,
            multipliers: {
                hybrid: 1,
                idle: 1
            }
        },
        5: {
            label: 'Revolc',
            relicText: '{} test',
            baseValue: 0,
            multipliers: {
                hybrid: 40,
                idle: 60
            }
        },
        7: {
            label: 'Argaiv',
            relicText: '{} test',
            baseValue: 0,
            multipliers: {
                hybrid: 1,
                idle: 30
            }
        },
        8: {
            label: 'Energon',
            relicText: '+{} seconds to duration of Metal Detector',
            baseValue: 2,
            multipliers: {
                hybrid: 10,
                idle: 1
            }
        },
        9: {
            label: 'Kleptos',
            relicText: '+{} seconds to duration of Golden Clicks',
            baseValue: 2,
            multipliers: {
                hybrid: 15,
                idle: 1
            }
        },
        10: {
            label: 'Sniperino',
            relicText: '+{} seconds to duration of Lucky Strikes',
            baseValue: 2,
            multipliers: {
                hybrid: 60,
                idle: 1
            }
        },
        11: {
            label: 'Berserker',
            relicText: '+{} seconds to duration of Powersurge',
            baseValue: 2,
            multipliers: {
                hybrid: 1,
                idle: 1
            }
        },
        12: {
            label: 'Hecatoncheir',
            relicText: '+{} seconds to duration of Super Clicks',
            baseValue: 2,
            multipliers: {
                hybrid: 10,
                idle: 1
            }
        },
        13: {
            label: 'Bubos',
            relicText: '{} test',
            baseValue: 0,
            multipliers: {
                hybrid: 35,
                idle: 20
            }
        },
        14: {
            label: 'Morgulis',
            relicText: '{} test',
            baseValue: 0,
            multipliers: {
                hybrid: 1,
                idle: 1
            }
        },
        15: {
            label: 'Bhaal',
            relicText: '{} test',
            baseValue: 0,
            multipliers: {
                hybrid: 1,
                idle: 1
            }
        },
        16: {
            label: 'Dora',
            relicText: '{} test',
            baseValue: 0,
            multipliers: {
                hybrid: 55,
                idle: 70
            }
        },
        17: {
            label: 'Atman',
            relicText: '{} test',
            baseValue: 0,
            multipliers: {
                hybrid: 100,
                idle: 100
            }
        },
        18: {
            label: 'Fortuna',
            relicText: '{} test',
            baseValue: 0,
            multipliers: {
                hybrid: 45,
                idle: 70
            }
        },
        19: {
            label: 'Dogcog',
            relicText: '{} test',
            baseValue: 0,
            multipliers: {
                hybrid: 50,
                idle: 50
            }
        },
        21: {
            label: 'Mimzee',
            relicText: '+{}% Gold From Treasure Chests',
            baseValue: 50,
            multipliers: {
                hybrid: 1,
                idle: 60
            }
        },
        22: {
            label: 'Mammon',
            relicText: '+{}% Gold Dropped',
            baseValue: 5,
            multipliers: {
                hybrid: 1,
                idle: 70
            }
        },
        24: {
            label: 'Libertas',
            relicText: '{} test',
            baseValue: 0,
            multipliers: {
                hybrid: 1,
                idle: 1
            }
        },
        25: {
            label: 'Solomon',
            relicText: '{} test',
            baseValue: 0,
            multipliers: {
                hybrid: 1,
                idle: 90
            }
        },
        26: {
            label: 'Juggernaut',
            relicText: '{} test',
            baseValue: 0,
            multipliers: {
                hybrid: 1,
                idle: 1
            }
        },
        27: {
            label: 'Kumawakamaru',
            relicText: '{} test',
            baseValue: 0,
            multipliers: {
                hybrid: 100,
                idle: 100
            }
        },
        28: {
            label: 'Vaagur',
            relicText: '{} test',
            baseValue: 0,
            multipliers: {
                hybrid: 25,
                idle: 20
            }
        }
    }
};

const reducer = {
    TOGGLE_EDIT_MODE: (state) => {
        return {
            ...state,
            editing: !state.editing
        };
    },
    SET_ANCIENT_MULTIPLIER: (state, action) => {
        return {
            ...state,
            tiers: {
                ...state.tiers,
                [action.payload.ancientId]: {
                    ...state.tiers[action.payload.ancientId],
                    multipliers: {
                        ...state.tiers[action.payload.ancientId].multipliers,
                        [action.payload.style]: action.payload.multiplier
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
