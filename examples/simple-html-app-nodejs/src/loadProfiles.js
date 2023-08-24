import { getProfiles } from './getProfiles';

export async function loadProfiles() {
  await getProfiles();
  return await getProfiles();
}
