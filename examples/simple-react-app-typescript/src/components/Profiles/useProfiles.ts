import { useQuery } from '@tanstack/react-query';
import { Profile, useProfilesProps } from './types';
import axios, { AxiosError } from 'axios';

export const useProfiles = (props?: useProfilesProps) => {
  const { total } = props || {};

  return useQuery<Profile[], AxiosError>({
    queryKey: ['profiles'],
    queryFn: ({ signal }) =>
      axios
        .get('http://localhost:8000/profiles', {
          signal,
          params: {
            total
          }
        })
        .then(res => res.data)
  });
};
