import { FC } from 'react';
import { useProfiles } from './useProfiles';
import './Profiles.css';

export const Profiles: FC = () => {
  const { data, isLoading, error } = useProfiles({
    total: 10
  });

  if (error) {
    return <h2>Error when getting profiles</h2>;
  }
  if (isLoading) {
    return <h2>{'Getting the profiles...'}</h2>;
  }
  return (
    <div>
      <h2>Profiles</h2>
      <ul>
        {data?.map(profile => (
          <li>{profile.fullName}</li>
        ))}
      </ul>
    </div>
  );
};
