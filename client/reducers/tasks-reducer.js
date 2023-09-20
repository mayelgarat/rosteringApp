import { LOAD_TASKS } from '../actions/types';

const initialState = [];

const TasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_TASKS:
      const { tasks } = action.payload;

      return [...state, ...tasks];

    default:
      return state;
  }
};

export default TasksReducer;
