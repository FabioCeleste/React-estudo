import { combineReducers } from 'redux';

import auth from './auth/reducer';
import list from './list/reducer';

export default combineReducers({
  auth,
  list,
});
