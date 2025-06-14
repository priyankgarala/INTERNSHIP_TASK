import { useQuery } from '@tanstack/react-query';
import API from '../utils/api';

export const useDestinations = () => {
  return useQuery({
    queryKey: ['destinations'],
    queryFn: async () => {
      const res = await API.get('/destinations');
      return res.data;
    },
  });
};
