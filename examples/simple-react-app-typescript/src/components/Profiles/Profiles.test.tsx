import { render, screen } from '@testing-library/react';
import { Profiles } from './Profiles';
import { useProfiles } from './useProfiles';
import { mocked } from 'jest-mock';
import {
  profilesListMock,
  useQueryProfilesErrorMock,
  useQueryProfilesLoadingMock,
  useQueryProfilesMock
} from './testUtils';

jest.mock('./useProfiles');
const mockedUseProfiles = mocked(useProfiles);

describe('Profiles', () => {
  it('should render profiles', () => {
    mockedUseProfiles.mockReturnValue(useQueryProfilesMock);

    render(<Profiles />);

    expect(screen.getByText(profilesListMock[0].fullName)).toBeInTheDocument();
  });

  it('should render profiles title', () => {
    mockedUseProfiles.mockReturnValue(useQueryProfilesMock);

    render(<Profiles />);

    expect(screen.getByText('Profiles')).toBeInTheDocument();
  });

  it('should render error', () => {
    mockedUseProfiles.mockReturnValue(useQueryProfilesErrorMock);

    render(<Profiles />);

    expect(screen.getByText('Error when getting profiles')).toBeVisible();
  });

  it('should render with loading menssage', () => {
    mockedUseProfiles.mockReturnValue(useQueryProfilesLoadingMock);

    render(<Profiles />);

    expect(screen.getByText('Getting the profiles...')).toBeVisible();
  });
});
