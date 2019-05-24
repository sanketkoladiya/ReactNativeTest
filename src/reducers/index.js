
import { combineReducers } from 'redux';

import login from './login';

const appReducer = combineReducers({
  login
});

const initialState = {

}

const rootReducer = (state = initialState, action) => {

  let badTokenError = null;
  let noInternetError = null;
  let tokenExpired = null;
  let tokenNotConfirmed = null;
  if (action.error) {
    tokenExpired = action.error.find((error) => (error.status || '').toString() === '401');
    tokenNotConfirmed = action.error.find((error) => (error.status || '').toString() === '403');
    noInternetError = action.error.find((error) => (error.type || '').toString() === 'noInternet');
  }
  badTokenError = tokenExpired || tokenNotConfirmed;

  if (action.type === 'restoreState') {
    if (action.stateToRestore) {
      return {
        ...state,

        login: {
          ...state.login,
          ...action.stateToRestore.login,
        }
      };
    }
    return state;
  }
  return appReducer(state, action);
};

export default rootReducer;
