import {combineReducers} from 'redux';
import {CHANGE_LANGUAGE} from '../AcctionType';

const showname = (state = 'Name', action) => {
  if (action.type == 'Arun') {
    return 'Arun';
  } else {
    return 'Sharma';
  }
};

const shownames = (state = 'Name', action) => {
    if (action.type == 'Arun') {
      return 'Arund';
    } else {
      return 'Sharma1';
    }
  };
  
export const rootReducer = combineReducers({
  showname,shownames
});
