import {combineReducers} from 'redux';

import {familyReducer} from './familyReducer';

export default combineReducers({
  families: familyReducer
})
