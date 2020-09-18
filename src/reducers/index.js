import formVisibleReducer from './form-visible-reducer';
import tapListReducer from './tap-list-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  masterTapList: tapListReducer
});

export default rootReducer;