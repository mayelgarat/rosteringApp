import React, { useEffect, useState } from 'react';
import TaskDropdown from '../tasks/tasks-dropdown';
import { fetchDrivers } from '../../api/driversService';
import { LOAD_DRIVERS } from '../../actions/types';
import { useDispatch, useSelector } from 'react-redux';

import '../../styles/drivers-table.css';
import '../../styles/shared.css';

const DriverList = () => {
  const dispatch = useDispatch();
  const drivers = useSelector((state) => state.driversReducer);

  const [driversList, setDriversList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const drivers = await fetchDrivers();
      setDriversList(drivers);
      dispatch({
        type: LOAD_DRIVERS,
        payload: { drivers },
      });
    };
    if (!drivers) {
      fetchData();
    }
  }, [drivers]);

  return (
    <div className="driver-container">
      <h2 className="title">Drivers</h2>
      <table className="drivers-table">
        <thead>
          <tr>
            <th>Driver</th>
            <th>Driver Id</th>
            <th style={{ width: '100px' }}></th>
          </tr>
        </thead>
        <tbody>
          {driversList &&
            driversList.map((driver, i) => (
              <tr key={i}>
                <td>{driver.name}</td>
                <td>{driver.id}</td>
                <td>
                  <TaskDropdown driverId={driver.id} />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default DriverList;
