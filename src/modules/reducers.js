import { combineReducers } from 'redux';
import { LOCATION_CHANGE } from 'react-router-redux';
import { init as initType } from './action-types';

const {PENDING, SUCCESS} = initType;

const initialRouterState = {
  location: null
};

const routing = (state = initialRouterState, action) => {
  if (action.type === LOCATION_CHANGE) {
    return Object.assign({}, state, {location: action.payload});
  }

  return state;
};

const initialState = {
  data: PENDING
};

const initReducer = (state = initialState, action) => {
  let newState;

  switch (action.type) {
    case PENDING:
      newState = Object.assign({}, state, {data: PENDING});
      break;
    case SUCCESS:
      newState = Object.assign({}, state, {data: SUCCESS});
      break;
  }

  return newState || state;
};

const rootReducer = combineReducers({
  init: initReducer,
  routing
});

export default rootReducer;
