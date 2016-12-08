import { rarities } from '../constants';

export const parseGameState = gameState => {
    const SPLITTER = 'Fe12NAfA3R6z4k0z';
    let temp = '';

    if (gameState.indexOf(SPLITTER) > 0) {
        gameState = gameState.split(SPLITTER)[0];

        for (let i = 0; i < gameState.length; i += 2) {
            temp += gameState[i];
        }

        return JSON.parse(atob(temp));
    }

    return null;
}

export const getRelics = (items, style, ancients) => {
    return Object.keys(items).map(k => {
        const item = items[k];
        let total = 0;

        let bonuses = [];
        let ancient = ancients[item.bonusType1];

        bonuses.push({
            ancient: ancient.label,
            level: item.bonus1Level,
            tooltip: `${ancient.baseValue} ${ancient.relicText}`,
        });
        total += item.bonus1Level * ancient.multipliers[style];

        if (item.bonusType2) {
            ancient = ancients[item.bonusType2];

            bonuses.push({
                ancient: ancient.label,
                level: item.bonus2Level,
                tooltip: `${ancient.baseValue} ${ancient.relicText}`,
            });
            total += item.bonus2Level * ancient.multipliers[style];
        }

        if (item.bonusType3) {
            ancient = ancients[item.bonusType3];

            bonuses.push({
                ancient: ancient.label,
                level: item.bonus3Level,
                tooltip: `${ancient.baseValue} ${ancient.relicText}`,
            });
            total += item.bonus3Level * ancient.multipliers[style];
        }

        if (item.bonusType4) {
            ancient = ancients[item.bonusType4];

            bonuses.push({
                ancient: ancient.label,
                level: item.bonus4Level,
                tooltip: `${ancient.baseValue} ${ancient.relicText}`,
            });
            total += item.bonus4Level * ancient.multipliers[style];
        }

        return {
            name: item.name,
            rarity: rarities[item.rarity],
            level: item.level,
            type: item.type,
            bonuses,
            total
        };
    }).sort((a, b) => b.total - a.total);
};

export const getDogcogRelicLevels = items => {
    let bonusLevels = 0;

    Object.keys(items).forEach(k => {
        const item = items[k];

        if (item.bonusType1 === 19) {
            bonusLevels += +item.bonus1Level
        }

        if (item.bonusType2 === 19) {
            bonusLevels += +item.bonus2Level
        }

        if (item.bonusType3 === 19) {
            bonusLevels += +item.bonus3Level
        }

        if (item.bonusType4 === 19) {
            bonusLevels += +item.bonus4Level
        }
    });

    return Math.floor(bonusLevels);
};
