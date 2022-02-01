// All of the reducers we write will go here
import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';

export default combineReducers({
  user: userReducer,
});
