export { loadState, saveState, clearState } from './localStorage';

export const getDogcogPercentage = (dogcogLevel) => {
    return 99 * (1 - Math.exp(-0.01 * dogcogLevel));
};

export const getHeroCost = (hero, dogcogLevel) => {
    const { baseCost, currentLevel, targetLevel } = hero;

    return (baseCost * (Math.pow(1.07, targetLevel) - Math.pow(1.07, currentLevel)) / 0.07) * (100 - getDogcogPercentage(dogcogLevel)) / 100;
};
