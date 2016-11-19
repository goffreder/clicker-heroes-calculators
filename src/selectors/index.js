import { rarities, ancients } from '../constants';

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

export const getRelics = (items, style) => {
    return Object.keys(items).map(k => {
        const item = items[k];
        let total = 0;

        let bonuses = [];

        bonuses.push({
            ancient: ancients[item.bonusType1].label,
            level: item.bonus1Level
        });
        total += item.bonus1Level * ancients[item.bonusType1].multipliers[style];

        if (item.bonusType2) {
            bonuses.push({
                ancient: ancients[item.bonusType2].label,
                level: item.bonus2Level
            });
            total += item.bonus2Level * ancients[item.bonusType2].multipliers[style];
        }

        if (item.bonusType3) {
            bonuses.push({
                ancient: ancients[item.bonusType3].label,
                level: item.bonus3Level
            });
            total += item.bonus3Level * ancients[item.bonusType3].multipliers[style];
        }

        if (item.bonusType4) {
            bonuses.push({
                ancient: ancients[item.bonusType4].label,
                level: item.bonus4Level
            });
            total += item.bonus4Level * ancients[item.bonusType4].multipliers[style];
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
