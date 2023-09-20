import api from './utils';

export const fetchTasks = async () => {
  try {
    const { data } = await api.get('/tasks');
    return data ?? [];
  } catch (error) {
    console.error('Error fetching tasks:', error);
  }
};
