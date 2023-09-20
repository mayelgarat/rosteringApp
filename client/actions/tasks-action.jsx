import { LOAD_TASKS } from './types';

export const loadTasks = (drivers) => {
  return {
    type: LOAD_TASKS,
    payload: drivers,
  };
};
