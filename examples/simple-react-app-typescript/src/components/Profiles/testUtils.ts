import { UseQueryResult } from '@tanstack/react-query';
import { Profile } from './types';
import { AxiosError } from 'axios';

export const profilesListMock = [
  {
    id: 'd177baf6-044a-5207-ae8f-bb8b2fb5a6eb',
    fullName: 'Sharita Hare',
    firstName: 'Sharita',
    lastName: 'Hare',
    gender: 'Male',
    birthday: 'Oct 24th, 1968',
    age: 54,
    avatar: 'https://api.adorable.io/avatars/200/Sharita-Hare',
    address: '9756 Hudson Court, Rockledge, FL 32955',
    zip: '32955',
    state: 'FL',
    phone: '(839) 529-5619',
    email: 'ic@jido.gs',
    twitter: '@podu',
    ssn: '258-71-2552'
  }
];

export const useQueryProfilesMock = {
  data: profilesListMock
} as UseQueryResult<Profile[], AxiosError>;

export const useQueryProfilesErrorMock = {
  error: {} as AxiosError
} as UseQueryResult<Profile[], AxiosError>;

export const useQueryProfilesLoadingMock = {
  isLoading: true
} as UseQueryResult<Profile[], AxiosError>;
