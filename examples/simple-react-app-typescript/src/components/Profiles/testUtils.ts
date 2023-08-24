import { createUseQueryResultMock } from '../../testUtils/useQueryUtils';
import { Profile } from './types';

export const profilesListMock = [
  {
    id: 'c663e763-f3b4-5fb8-bcce-800fd5f684f9',
    fullName: 'Ann Hughes',
    firstName: 'Ann',
    lastName: 'Hughes',
    gender: 'Male',
    birthday: 'Aug 26th, 1974',
    age: 48,
    avatar: 'https://api.adorable.io/avatars/200/Ann-Hughes',
    address: '717 Tailwater St., Butler, PA 16001',
    zip: '16001',
    state: 'PA',
    phone: '(939) 233-9722',
    email: 'rekletdud@eccog.ro',
    twitter: '@duruf',
    ssn: '888-33-6221'
  }
];

export const profilesListUseQueryResultMock = createUseQueryResultMock<
  Profile[]
>({
  data: profilesListMock
});
