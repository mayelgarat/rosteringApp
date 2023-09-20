import { LOAD_DRIVERS } from '../actions/types';

const initialState = [];

const DriversReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_DRIVERS:
      const { drivers } = action.payload;

      return [...state, ...drivers];

    default:
      return state;
  }
};

export default DriversReducer;
