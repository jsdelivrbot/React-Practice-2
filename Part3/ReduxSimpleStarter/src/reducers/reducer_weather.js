import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch(action.type) {
  case FETCH_WEATHER:
    return state.concat([action.payload.data]);  // not mutating state - returning a new instance of state
    // return [ action.payload.data, ...state ]; //... take entries inside of this array and put in other array
  }

  return state;
}
