import { render, screen } from '@testing-library/react';
import { Profiles } from './Profiles';
import { mocked } from 'jest-mock';
import { useProfiles } from './useProfiles';
import { profilesListUseQueryResultMock } from './testUtils';

jest.mock('./useProfiles');
const mockedUseProfiles = mocked(useProfiles);

beforeEach(() => {
  mockedUseProfiles.mockReturnValue(profilesListUseQueryResultMock);
});

describe('Profiles', () => {
  it('should render profiles', async () => {
    render(<Profiles />);
    const profileTitle = await screen.findByText('Profiles');
    expect(profileTitle).toBeVisible();
  });
});
