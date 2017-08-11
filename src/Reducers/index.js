import { combineReducers } from 'redux';

import NavReducer from './navReducer.js'
import userData from './userData';

export default function getRootReducer() {
  return combineReducers({
    nav: NavReducer,
    userData: userData
  })
}
