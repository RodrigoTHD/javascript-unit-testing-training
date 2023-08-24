import { loadProfiles } from './loadProfiles';
import { getProfiles } from './getProfiles';

jest.mock('./getProfiles');

beforeEach(() => {
  getProfiles.mockReturnValue('rolf');
});

afterEach(() => {
  getProfiles.mockReset();
});

beforeAll(() => {});

afterAll(() => {});

describe('loadProfiles', () => {
  it.skip('should loadProfiles return profiles ', async () => {
    // act
    const result = await loadProfiles();
    // assert
    expect(result).toBe('rolf');
    expect(getProfiles).toHaveBeenCalledTimes(2);
  });

  it('should loadProfiles return profiles 2 ', async () => {
    // act
    const result = await loadProfiles();
    // assert
    expect(result).toBe('rolf');
    expect(getProfiles).toHaveBeenCalledTimes(2);
  });
});
