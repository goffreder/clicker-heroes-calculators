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
        let ancient = ancients[item.bonusType1];

        bonuses.push({
            id: item.bonusType1,
            ancient: ancient.label,
            level: +item.bonus1Level,
        });
        total += item.bonus1Level * ancient.multipliers[style];

        if (item.bonusType2) {
            ancient = ancients[item.bonusType2];

            bonuses.push({
                id: item.bonusType2,
                ancient: ancient.label,
                level: +item.bonus2Level,
            });
            total += item.bonus2Level * ancient.multipliers[style];
        }

        if (item.bonusType3) {
            ancient = ancients[item.bonusType3];

            bonuses.push({
                id: item.bonusType3,
                ancient: ancient.label,
                level: +item.bonus3Level,
            });
            total += item.bonus3Level * ancient.multipliers[style];
        }

        if (item.bonusType4) {
            ancient = ancients[item.bonusType4];

            bonuses.push({
                id: item.bonusType4,
                ancient: ancient.label,
                level: +item.bonus4Level,
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

export const getRelicsBonuses = state => {
    return Object.values([].concat.apply([], getRelics(state).slice(0, 4).map(r => r.bonuses))
        .reduce((agg, b) => {
            if (!agg[b.id]) {
                agg[b.id] = b;
            } else {
                agg[b.id].level += b.level;
            }

            return agg;
        }, {}));
};

export const getDogcogRelicLevels = state => getRelicsBonuses(state).find(b => b.id === 19).level || 0;
