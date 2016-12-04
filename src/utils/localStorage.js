import { LOCALSTORAGE_KEY } from '../constants';

export const clearState = () => {
    try {
        localStorage.removeItem(LOCALSTORAGE_KEY);
    } catch (err) {
        console.error(err);
    }
};

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem(LOCALSTORAGE_KEY);

        if (serializedState === null) {
            return undefined;
        }

        const unserializedState = JSON.parse(serializedState);

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
