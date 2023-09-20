import api from './utils';

export const fetchDrivers = async () => {
  try {
    const { data } = await api.get('/drivers');
    return data ?? [];
  } catch (error) {
    console.error('Error fetching drivers:', error);
  }
};
