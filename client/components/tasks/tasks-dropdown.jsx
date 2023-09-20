'use client';

import React, { useCallback } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { ASSIGN_DRIVER, TOGGLE_DRIVER } from '../../actions/types';
import Select from '../select';

const getTaskOptions = () => {
  const tasks = useSelector(({ TasksReducer }) => TasksReducer, shallowEqual);
  return tasks.map((task) => ({
    key: task?.lineDisplayId,
    value: task?.lineDisplayId,
  }));
};

const TasksDropdown = ({ driverId }) => {
  const options = getTaskOptions();
  const assignDriverState =
    useSelector((state) => state.AssignedDriversReducer, shallowEqual) || {};
  const dispatch = useDispatch();
  const onChange = useCallback((e) => {
    const tasksIds = Object.keys(assignDriverState);
    const driversIds = Object.values(assignDriverState);
    const assignDriverIdx = driversIds.findIndex(
      (driver) => driver === driverId,
    );
    const oldTaskId = tasksIds[assignDriverIdx];
    if (driversIds.includes(driverId)) {
      dispatch({
        type: TOGGLE_DRIVER,
        payload: { taskId: e.target.value, driverId, oldTaskId },
      });
    }
    if (!tasksIds.includes(e.target.value)) {
      dispatch({
        type: ASSIGN_DRIVER,
        payload: { taskId: e.target.value, driverId },
      });
    } else {
      alert('already assigned');
    }
  });
  const driversIds = Object.values(assignDriverState) ?? [];
  const driverIdx = driversIds.findIndex((id) => id === driverId);
  const tasksIds = Object.keys(assignDriverState);

  const taskId = tasksIds[driverIdx] ?? '';
  return (
    <Select
      options={options}
      value={taskId}
      onChange={onChange}
      label={taskId ? '' : 'Select'}
    />
  );
};

export default TasksDropdown;
