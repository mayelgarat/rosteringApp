import { LOAD_DRIVERS } from './types';

export const loadDrivers = (drivers) => {
  return {
    type: LOAD_DRIVERS,
    payload: drivers,
  };
};
