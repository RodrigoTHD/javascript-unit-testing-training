import { getProfiles } from './getProfiles';

describe('getProfiles', () => {
  it('should return profiles', async () => {
    const result = await getProfiles();
    expect(result).toBe('some profiles');
  });
});
