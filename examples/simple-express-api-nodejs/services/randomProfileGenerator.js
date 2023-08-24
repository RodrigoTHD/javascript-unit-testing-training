var randomProfile = require('random-profile-generator');

function randomProfiles(totalProfiles) {
  const profiles = [];
  for (let i = 0; i < totalProfiles; i++) {
    profiles.push(randomProfile.profile());
  }
  return profiles;
}

module.exports = randomProfiles;
