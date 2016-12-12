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
    const { ancients, byRelicBonusId } = state.ancients;

    const relics = Object.keys(items).map(k => {
        const item = items[k];
        let total = 0;

        let bonuses = [];
        let ancient = ancients[byRelicBonusId[item.bonusType1]];

        bonuses.push({
            id: ancient.id,
            ancient: ancient.label,
            level: +item.bonus1Level,
        });
        total += item.bonus1Level * ancient.coefficients[style];

        if (item.bonusType2) {
            ancient = ancients[byRelicBonusId[item.bonusType2]];

            bonuses.push({
                id: ancient.id,
                ancient: ancient.label,
                level: +item.bonus2Level,
            });
            total += item.bonus2Level * ancient.coefficients[style];
        }

        if (item.bonusType3) {
            ancient = ancients[byRelicBonusId[item.bonusType3]];

            bonuses.push({
                id: ancient.id,
                ancient: ancient.label,
                level: +item.bonus3Level,
            });
            total += item.bonus3Level * ancient.coefficients[style];
        }

        if (item.bonusType4) {
            ancient = ancients[byRelicBonusId[item.bonusType4]];

            bonuses.push({
                id: ancient.id,
                ancient: ancient.label,
                level: +item.bonus4Level,
            });
            total += item.bonus4Level * ancient.coefficients[style];
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

    const aggBonuses = aggregateBonuses(relics.slice(0, 4));

    relics.forEach(r => {
        r.bonuses.forEach(b => {
            const ancient = ancients[b.id];
            const totalLevels = ancient.baseLevel + (aggBonuses[ancient.id] ? aggBonuses[ancient.id].level : 0);

            b.tooltip = ancient.relicText.replace('{}', roundNum(ancient.relicBonusCallback(b.level, totalLevels)))
        });
    });

    return relics;
};

const aggregateBonuses = relics => {
    return [].concat.apply([], relics.map(r => r.bonuses))
        .reduce((agg, b) => {
            if (!agg[b.id]) {
                agg[b.id] = { ...b };
            } else {
                agg[b.id].level += b.level;
            }

            return agg;
        }, {});
}

export const getRelicsBonuses = state => Object.values(aggregateBonuses(getRelics(state).slice(0, 4)));

export const getDogcogRelicLevels = state => getRelicsBonuses(state).find(b => b.id === 11).level || 0;
