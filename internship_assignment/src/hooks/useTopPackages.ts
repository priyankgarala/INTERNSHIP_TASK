import { useQuery } from '@tanstack/react-query';
import API from '../utils/api';

export const useTopPackages = () => {
  return useQuery({
    queryKey: ['top-packages'],
    queryFn: async () => {
      const res = await API.get('/packages/top-selling');
      return res.data;
    },
  });
};
