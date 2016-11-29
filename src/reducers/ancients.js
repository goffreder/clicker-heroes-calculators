const defaultState = {
    editing: false,
    tiers: {
        1: {
            label: 'Siyalatas',
            multipliers: {
                hybrid: 1,
                idle: 40
            }
        },
        2: {
            label: 'Fragsworth',
            multipliers: {
                hybrid: 1,
                idle: 1
            }
        },
        3: {
            label: 'Chronos',
            multipliers: {
                hybrid: 30,
                idle: 20
            }
        },
        4: {
            label: 'Chawedo',
            multipliers: {
                hybrid: 1,
                idle: 1
            }
        },
        5: {
            label: 'Revolc',
            multipliers: {
                hybrid: 40,
                idle: 60
            }
        },
        7: {
            label: 'Argaiv',
            multipliers: {
                hybrid: 1,
                idle: 40
            }
        },
        8: {
            label: 'Energon',
            multipliers: {
                hybrid: 10,
                idle: 1
            }
        },
        9: {
            label: 'Kleptos',
            multipliers: {
                hybrid: 15,
                idle: 1
            }
        },
        10: {
            label: 'Sniperino',
            multipliers: {
                hybrid: 60,
                idle: 1
            }
        },
        11: {
            label: 'Berserker',
            multipliers: {
                hybrid: 1,
                idle: 1
            }
        },
        12: {
            label: 'Hecatoncheir',
            multipliers: {
                hybrid: 10,
                idle: 1
            }
        },
        13: {
            label: 'Bubos',
            multipliers: {
                hybrid: 35,
                idle: 20
            }
        },
        14: {
            label: 'Morgulis',
            multipliers: {
                hybrid: 1,
                idle: 1
            }
        },
        15: {
            label: 'Bhaal',
            multipliers: {
                hybrid: 1,
                idle: 1
            }
        },
        16: {
            label: 'Dora',
            multipliers: {
                hybrid: 55,
                idle: 50
            }
        },
        17: {
            label: 'Atman',
            multipliers: {
                hybrid: 100,
                idle: 100
            }
        },
        18: {
            label: 'Fortuna',
            multipliers: {
                hybrid: 45,
                idle: 50
            }
        },
        19: {
            label: 'Dogcog',
            multipliers: {
                hybrid: 50,
                idle: 70
            }
        },
        21: {
            label: 'Mimzee',
            multipliers: {
                hybrid: 1,
                idle: 40
            }
        },
        22: {
            label: 'Mammon',
            multipliers: {
                hybrid: 1,
                idle: 50
            }
        },
        24: {
            label: 'Libertas',
            multipliers: {
                hybrid: 1,
                idle: 1
            }
        },
        25: {
            label: 'Solomon',
            multipliers: {
                hybrid: 1,
                idle: 80
            }
        },
        26: {
            label: 'Juggernaut',
            multipliers: {
                hybrid: 1,
                idle: 1
            }
        },
        27: {
            label: 'Kumawakamaru',
            multipliers: {
                hybrid: 100,
                idle: 100
            }
        },
        28: {
            label: 'Vaagur',
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
