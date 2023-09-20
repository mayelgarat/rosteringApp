import { ASSIGN_DRIVER, TOGGLE_DRIVER } from '../actions/types';

const initialState = {};

const AssignedDriversReducer = (state = initialState, action) => {
  switch (action.type) {
    case ASSIGN_DRIVER:
      return {
        ...state,
        [action.payload.taskId]: action.payload.driverId,
      };
    case TOGGLE_DRIVER:
      const { oldTaskId } = action.payload;
      const newState = { ...state };
      delete newState[oldTaskId];
      return {
        ...newState,
        [action.payload.taskId]: action.payload.driverId,
      };

    default:
      return state;
  }
};

export default AssignedDriversReducer;
