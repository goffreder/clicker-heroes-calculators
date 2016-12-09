import { rarities } from '../constants';

export const getActiveTab = state => state.appState.activeTab;

export const getPlayStyle = state => state.appState.playStyle;

export const getEncodedState = state => state.encodedState;

export const getAncients = state =>
    Object.keys(state.ancients.tiers).map(id => ({ ...state.ancients.tiers[id], id }));

export const isEditing = state => state.ancients.editing;

export const getHeroCosts = state => state.heroes.costs;

export const isGameStateSet = state => Boolean(state.gameState);

export const getDogcogLevel = state => state.heroes.dogcogLevel;

export const isRelicBonusChecked = state => state.heroes.relicsBonusChecked;

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

export const getRelics = state => {
    if (!state.gameState) {
        return [];
    }

    const items = state.gameState.items.items;
    const style = state.appState.playStyle;
    const ancients = state.ancients.tiers;

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

export const getDogcogRelicLevels = state => {
    if (!state.gameState) {
        return 0;
    }

    const items = state.gameState.items.items;
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
