import { combineReducers } from 'redux';
import CampersReducer from './reducer_campers';

const rootReducer = combineReducers({
  campers: CampersReducer
});

export default rootReducer;
