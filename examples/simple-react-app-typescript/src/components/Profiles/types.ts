export type useProfilesProps = {
  total?: number;
};

export type Profile = {
  id: string;
  fullName: string;
  firstName: string;
  lastName: string;
  gender: 'Male|Female';
  birthday: string;
  age: number;
  avatar: string;
  address: string;
  zip: string;
  state: string;
  phone: string;
  email: string;
  twitter: string;
  ssn: string;
};
