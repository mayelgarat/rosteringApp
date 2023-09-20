'use client';

import React, { useCallback } from 'react';
import Head from 'next/head';

import { Provider } from 'react-redux';

import DriverList from '../components/drivers/drivers-table';
import TasksList from '../components/tasks/tasks-table';
import { MAIL } from '../components/utils/consts';
import store from '../store';

import './index.css';
import '../styles/drivers-table.css';

export default function Home() {
  const onHireMeClick = useCallback(() => {
    window.location.href = `mailto:${MAIL}?subject=Subject&body=message%20goes%20here`;
  });
  return (
    <Provider store={store}>
      <Head>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Comfortaa&display=swap');
          @import
          url('https://fonts.googleapis.com/css2?family=Comfortaa&family=Montserrat:wght@300&display=swap');
        </style>
        <title>Rostering</title>
      </Head>
      <div className="header">
        <h2 className="logo">Assign Driver</h2>
        <div>
          <button className="button" onClick={onHireMeClick}>
            Email me
          </button>
        </div>
      </div>
      <div className="main">
        <div className="main-app">
          <DriverList />
          <TasksList />
        </div>
      </div>
    </Provider>
  );
}
