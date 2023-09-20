import React, { useEffect, useState } from 'react';
import DriverDropdown from '../drivers/drivers-dropdown.jsx';
import { useDispatch, useSelector } from 'react-redux';

import { fetchTasks } from '../../api/tasksServices.js';
import { LOAD_TASKS } from '../../actions/types.jsx';

import '../../styles/tasks-table.css';
import '../../styles/shared.css';

const TasksList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasksReducer);
  const [tasksList, setTasksList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const tasks = await fetchTasks();
      setTasksList(tasks);
      dispatch({
        type: LOAD_TASKS,
        payload: { tasks },
      });
    };
    if (!tasks) {
      fetchData();
    }
  }, []);

  return (
    <div className="tasks-container">
      <h2 className="title">Assignment</h2>
      <table className="tasks-table">
        <thead>
          <tr>
            <th style={{ width: '250px' }}>Driver</th>
            <th>Task Id</th>
            <th>Day 1</th>
            <th>Day 2</th>
            <th>Day 3</th>
            <th>Day 4</th>
            <th>Day 5</th>
            <th>Day 6</th>
            <th>Day 7</th>
          </tr>
        </thead>
        <tbody>
          {tasksList &&
            tasksList.map((task, i) => {
              return (
                <tr key={i}>
                  <td>
                    <DriverDropdown taskId={task.lineDisplayId} />
                  </td>
                  <td>{task.lineDisplayId}</td>
                  {task.tasks.map(({ type }) => (
                    <td key={i}>{type}</td>
                  ))}
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default TasksList;
