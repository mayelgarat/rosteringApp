import { configureStore } from '@reduxjs/toolkit';
import AssignedDriversReducer from './reducers/assigned-drivers-reducer.js';
import DriversReducer from './reducers/drivers-reducer.js';
import TasksReducer from './reducers/tasks-reducer.js';

const store = configureStore({
  reducer: {
    AssignedDriversReducer,
    DriversReducer,
    TasksReducer,
  },
});

export default store;
