import pako from 'pako';

import { rarities } from '../constants';

import { roundNum } from '../utils';

export const getActiveTab = state => state.appState.activeTab;

export const getPlayStyle = state => state.appState.playStyle;

export const getEncodedState = state => state.encodedState;

export const getAncients = state => state.ancients.ancients;

export const isEditing = state => state.ancients.editing;

export const getHeroCosts = state => state.heroes.costs;

export const isGameStateSet = state => Boolean(state.gameState);

export const getDogcogLevel = state => state.heroes.dogcogLevel;

export const isRelicBonusChecked = state => state.heroes.relicsBonusChecked;

export const parseGameState = gameState => {
    return JSON.parse(pako.inflate(atob(gameState.substring(32)), { to: 'string' }));
};

const idleAncientBonusCallback = (levels, xyliqilLevel) => {
    const kMax = 25;
    let k = Math.max(15, kMax - Math.floor(levels / 10));
    let kDiff = kMax - k;
    let sum = (levels * k) - kDiff;

    while (k < kMax) {
        sum += (10 * kDiff);
        k++;
        kDiff--;
    }

    return sum + (sum * xyliqilLevel);
};

const solomonBonusCallback = (levels, ponyboyLevel = 23) => {
    let sum = 0;

    switch (true) {
        case levels <= 20:
            sum = levels * 5;
            break;
        case levels <= 40:
            sum = 20 + levels * 4;
            break;
        case levels <= 60:
            sum = 60 + levels * 3;
            break;
        case levels <= 80:
            sum = 120 + levels * 2;
            break;
        default:
            sum = 200 + levels;
            break;
    }

    return sum + (sum * ponyboyLevel);
};

const aggregateBonuses = relics => {
    return [].concat(...relics.map(r => r.bonuses))
        .reduce((agg, b) => {
            if (!agg[b.id]) {
                agg[b.id] = { ...b };
            } else {
                agg[b.id].level += b.level;
            }

            return agg;
        }, {});
};

const relicBonusCallbacks = {
    3: (relicLevels, totalLevels, xyliqilLevel, ponyboyLevel) => {
        const totalSolomonBonus = solomonBonusCallback(totalLevels, ponyboyLevel);
        const diffSolomonBonus = solomonBonusCallback((totalLevels - relicLevels), ponyboyLevel);

        return totalSolomonBonus - diffSolomonBonus;
    },
    4: (relicLevels, totalLevels, xyliqilLevel) => {
        const totalBonus = idleAncientBonusCallback(totalLevels, xyliqilLevel);
        const diffBonus = idleAncientBonusCallback((totalLevels - relicLevels), xyliqilLevel);

        return totalBonus - diffBonus;
    },
    5: (relicLevels, totalLevels, xyliqilLevel) => {
        const totalBonus = idleAncientBonusCallback(totalLevels, xyliqilLevel);
        const diffBonus = idleAncientBonusCallback((totalLevels - relicLevels), xyliqilLevel);

        return totalBonus - diffBonus;
    },
    8: levels => levels * 5,
    9: levels => levels * 50,
    10: levels => levels,
    11: (relicLevels, totalLevels) => {
        const totalBonus = 99 * (1 - Math.exp(-0.01 * totalLevels));
        const diffBonus = 99 * (1 - Math.exp(-0.01 * (totalLevels - relicLevels)));

        return totalBonus - diffBonus;
    },
    12: (relicLevels, totalLevels) => {
        const totalBonus = 100 * (1 - Math.exp(-0.0025 * totalLevels));
        const diffBonus = 100 * (1 - Math.exp(-0.0025 * (totalLevels - relicLevels)));

        return totalBonus - diffBonus;
    },
    13: (relicLevels, totalLevels) => {
        const totalBonus = 75 * (1 - Math.exp(-0.013 * totalLevels));
        const diffBonus = 75 * (1 - Math.exp(-0.013 * (totalLevels - relicLevels)));

        return totalBonus - diffBonus;
    },
    14: (relicLevels, totalLevels) => {
        const totalBonus = 9900 * (1 - Math.exp(-0.002 * totalLevels));
        const diffBonus = 9900 * (1 - Math.exp(-0.002 * (totalLevels - relicLevels)));

        return totalBonus - diffBonus;
    },
    15: levels => levels * 15,
    16: levels => levels * 11,
    17: (relicLevels, totalLevels) => {
        const totalBonus = 30 * (1 - Math.exp(-0.034 * totalLevels));
        const diffBonus = 30 * (1 - Math.exp(-0.034 * (totalLevels - relicLevels)));

        return totalBonus - diffBonus;
    },
    18: (relicLevels, totalLevels) => {
        const totalBonus = 50 * (1 - Math.exp(-0.02 * totalLevels));
        const diffBonus = 50 * (1 - Math.exp(-0.02 * (totalLevels - relicLevels)));

        return totalBonus - diffBonus;
    },
    19: levels => levels * 20,
    20: (relicLevels, totalLevels) => {
        const totalBonus = 75 * (1 - Math.exp(-0.026 * totalLevels));
        const diffBonus = 75 * (1 - Math.exp(-0.026 * (totalLevels - relicLevels)));

        return totalBonus - diffBonus;
    },
    21: (relicLevels, totalLevels) => {
        const totalBonus = 8 * (1 - Math.exp(-0.01 * totalLevels));
        const diffBonus = 8 * (1 - Math.exp(-0.01 * (totalLevels - relicLevels)));

        return totalBonus - diffBonus;
    },
    22: levels => levels * 2,
    23: levels => levels * 2,
    24: levels => levels * 2,
    25: levels => levels * 2,
    26: levels => levels * 2,
    27: levels => levels * 2,
    28: levels => levels * 2,
    29: levels => levels / 100,
    31: (relicLevels, totalLevels) => {
        const totalBonus = 100 * (1 - Math.exp(-0.01 * totalLevels));
        const diffBonus = 100 * (1 - Math.exp(-0.01 * (totalLevels - relicLevels)));

        return totalBonus - diffBonus;
    },
    32: levels => levels * 0,
};

export const getRelics = state => {
    if (!state.gameState) {
        return [];
    }

    const items = state.gameState.items.items;
    const style = state.appState.playStyle;
    const { ancients, byRelicBonusId, xyliqilLevel, ponyboyLevel } = state.ancients;

    const relics = Object.keys(items).map(k => {
        const item = items[k];
        let total = 0;

        let bonuses = [];
        let ancient = ancients[byRelicBonusId[item.bonusType1]];

        bonuses.push({
            id: ancient.id,
            ancient: ancient.label,
            ancientFullName: ancient.fullName,
            ancientCoefficient: ancient.coefficients[style],
            level: Number(item.bonus1Level),
        });
        total += item.bonus1Level * ancient.coefficients[style];

        if (item.bonusType2) {
            ancient = ancients[byRelicBonusId[item.bonusType2]];

            bonuses.push({
                id: ancient.id,
                ancient: ancient.label,
                ancientFullName: ancient.fullName,
                ancientCoefficient: ancient.coefficients[style],
                level: Number(item.bonus2Level),
            });
            total += item.bonus2Level * ancient.coefficients[style];
        }

        if (item.bonusType3) {
            ancient = ancients[byRelicBonusId[item.bonusType3]];

            bonuses.push({
                id: ancient.id,
                ancient: ancient.label,
                ancientFullName: ancient.fullName,
                ancientCoefficient: ancient.coefficients[style],
                level: Number(item.bonus3Level),
            });
            total += item.bonus3Level * ancient.coefficients[style];
        }

        if (item.bonusType4) {
            ancient = ancients[byRelicBonusId[item.bonusType4]];

            bonuses.push({
                id: ancient.id,
                ancient: ancient.label,
                ancientFullName: ancient.fullName,
                ancientCoefficient: ancient.coefficients[style],
                level: Number(item.bonus4Level),
            });
            total += item.bonus4Level * ancient.coefficients[style];
        }

        return {
            name: item.name,
            rarity: rarities[item.rarity],
            level: item.level,
            type: item.type,
            bonuses,
            total,
        };
    }).sort((a, b) => b.total - a.total);

    const aggBonuses = aggregateBonuses(relics.slice(0, 4));

    relics.forEach(r => {
        r.bonuses.forEach(b => {
            const ancient = ancients[b.id];
            const ancientBonuses = aggBonuses[ancient.id];
            const totalLevels = ancient.baseLevel + (ancientBonuses ? ancientBonuses.level : 0);

            b.tooltip = ancient.relicText.replace(
                '{}',
                roundNum(relicBonusCallbacks[b.id](
                    b.level,
                    totalLevels,
                    xyliqilLevel,
                    ponyboyLevel)
                )
            );
        });
    });

    return relics;
};

export const getRelicsBonuses = state => {
    return Object.values(aggregateBonuses(getRelics(state).slice(0, 4)));
};

export const getDogcogRelicLevels = state => {
    const dogcogRelic = getRelicsBonuses(state).find(b => b.id === 11);

    return dogcogRelic ? Math.floor(dogcogRelic.level) : 0;
};

export const getMercenaries = state => {
    if (!state.gameState) {
        return [];
    }
    const hirelings = state.gameState.mercenaries.mercenaries;
    const mercs = Object.keys(hirelings).map(k => {
        const hireling = hirelings[k];
        return hireling;
    });
    return mercs;
};
