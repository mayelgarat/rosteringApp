'use client';

import React, { useCallback } from 'react';
import { ASSIGN_DRIVER } from '../../actions/types';
import Select from '../select';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

const getDriverOptions = () => {
  const drivers = useSelector((state) => state.DriversReducer, shallowEqual);
  return drivers.map((driver) => ({ key: driver?.id, value: driver?.name }));
};

const DriverDropdown = ({ taskId }) => {
  const options = getDriverOptions();
  const assignDriverState =
    useSelector(
      ({ AssignedDriversReducer }) => AssignedDriversReducer,
      shallowEqual,
    ) || {};
  const dispatch = useDispatch();
  const onChange = useCallback((e) => {
    const driversIds = Object.values(assignDriverState);
    if (!driversIds.includes(e.target.value)) {
      dispatch({
        type: ASSIGN_DRIVER,
        payload: { taskId, driverId: e.target.value },
      });
    } else {
      alert('already assigned');
    }
  });
  const tasksIds = Object.keys(assignDriverState) || [];
  const taskIdx = tasksIds.findIndex((id) => id === taskId);
  const driversIds = Object.values(assignDriverState);
  const driveId = driversIds[taskIdx] || '';

  return (
    <Select
      options={options}
      value={driveId}
      onChange={onChange}
      label={driveId ? '' : '+ Driver'}
    />
  );
};

export default DriverDropdown;
