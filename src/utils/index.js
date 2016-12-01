import { LOCALSTORAGE_KEY } from '../constants';

export const getDogcogPercentage = (dogcogLevel) => {
    return 99 * (1 - Math.exp(-0.01 * dogcogLevel));
};

export const getHeroCost = (hero, dogcogLevel) => {
    const { baseCost, currentLevel, targetLevel } = hero;

    return (baseCost * (Math.pow(1.07, targetLevel) - Math.pow(1.07, currentLevel)) / 0.07) * (100 - getDogcogPercentage(dogcogLevel)) / 100;
};

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem(LOCALSTORAGE_KEY);

        if (serializedState === null) {
            return undefined;
        }

        const unserializedState = serializedState;

        if (unserializedState.version !== appData.version) {
            return undefined;
        }

        return unserializedState;
    } catch (err) {
        console.error(err);

        return undefined;
    }
};

export const saveState = state => {
    try {
        const serializedState = JSON.stringify(state);

        localStorage.setItem(LOCALSTORAGE_KEY, serializedState);
    } catch (err) {
        console.error(err);
    }
};
