import { createStore, combineReducers } from 'redux';
import throttle from 'lodash/throttle';

// Reducers.
import preferences from './reducers/preferences';

const LOCAL_STORAGE_KEY = 'adalat-dance';
const LOCAL_STORAGE_VERSION = 1; // Increment to force wipe previous version clients local storage.

/**
 * Save state to local storage under LOCAL_STORAGE_KEY property.
 * @param {object} state
 */
const saveStateToLocalStorage = (state) => {
  const stateJSON = JSON.stringify(state);
  localStorage.setItem(LOCAL_STORAGE_KEY, stateJSON);
};

/**
 * Load state under LOCAL_STORAGE_KEY property from local storage.
 * If loading fails or has a previous version, wipe the local storage
 * state key value and return an empty object.
 * @returns {object}
 */
const loadStateFromLocalStorage = () => {
  try {
    const stateJSON = localStorage.getItem(LOCAL_STORAGE_KEY);
    const state = JSON.parse(stateJSON);

    // The previous state was found and is the correct version.
    if (state && state.LOCAL_STORAGE_VERSION === LOCAL_STORAGE_VERSION) {
      return state;
    }

    // The previous state was not found.
    return {};
  }

  // There was an error on parsing previous state.
  catch (error) {
    localStorage.removeItem(LOCAL_STORAGE_KEY);
    return {};
  }
};

const topLevelReducer = combineReducers({
  LOCAL_STORAGE_VERSION: () => LOCAL_STORAGE_VERSION,
  preferences

  // New reducers go above here.
});
const stateFromLocalStorage = loadStateFromLocalStorage();

const store = createStore(
  topLevelReducer,
  stateFromLocalStorage,
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
saveStateToLocalStorage(store.getState());

// Write new state to local storage on change throttled to at most once every 250 ms.
store.subscribe(
  throttle(() => {
    saveStateToLocalStorage(store.getState());
  }, 250)
);

export default store;
