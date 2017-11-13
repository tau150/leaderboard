import { FETCH_LASTS_CAMPERS, FETCH_ALL_CAMPERS } from '../actions/index';
import _ from 'lodash';

export default function(state = [], action){

  switch(action.type){

    case FETCH_LASTS_CAMPERS:

        return _.mapKeys(action.payload.data, 'username');
        


    case FETCH_ALL_CAMPERS:

      return _.mapKeys(action.payload.data, 'username');

  }

  return state;
}
