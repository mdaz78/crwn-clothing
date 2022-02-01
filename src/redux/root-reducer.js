// All of the reducers we write will go here
import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';

export default combineReducers({
  user: userReducer,
  cart: cartReducer,
});
