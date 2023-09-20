import { ASSIGN_DRIVER, TOGGLE_DRIVER } from './types';

export const assignDriver = (taskId, driverId) => {
  return {
    type: ASSIGN_DRIVER,
    payload: {
      taskId,
      driverId,
    },
  };
};
export const toggleDriver = (taskId, driverId, oldTaskId) => {
  return {
    type: TOGGLE_DRIVER,
    payload: {
      taskId,
      driverId,
      oldTaskId,
    },
  };
};
