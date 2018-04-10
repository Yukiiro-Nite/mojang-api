/*
This interface was created using documentation here: http://wiki.vg/Mojang_API
 */

module.exports = {
  getStatus,
  getUUID,
  getUUIDs,
  getNames,
  getProfile,
  changeSkin,
  uploadSkin,
  resetSkin,
  getBlockedServers,
  getStatistics
};

const got = require('got');
const apiUrl = `https://api.mojang.com`;
const sessionUrl = `https://sessionserver.mojang.com`;

function getStatus() {
  console.log('getStatus is not yet implemented!');
  return Promise.reject('Not Implemented!');
}

function getUUID(username, time) {
  let url = `${apiUrl}/users/profiles/minecraft/${username}`;

  if(time) {
    url += `?at=${time}`;
  }

  return got(url, { json: true })
    .then(response => response.body);
}

function getUUIDs() {
  console.log('getUUIDs is not yet implemented!');
  return Promise.reject('Not Implemented!');
}

function getNames() {
  console.log('getNames is not yet implemented!');
  return Promise.reject('Not Implemented!');
}

function getProfile() {
  console.log('getProfile is not yet implemented!');
  return Promise.reject('Not Implemented!');
}

function changeSkin() {
  console.log('changeSkin is not yet implemented!');
  return Promise.reject('Not Implemented!');
}

function uploadSkin() {
  console.log('uploadSkin is not yet implemented!');
  return Promise.reject('Not Implemented!');
}

function resetSkin() {
  console.log('resetSkin is not yet implemented!');
  return Promise.reject('Not Implemented!');
}

function getBlockedServers() {
  console.log('getBlockedServers is not yet implemented!');
  return Promise.reject('Not Implemented!');
}

function getStatistics() {
  console.log('getStatistics is not yet implemented!');
  return Promise.reject('Not Implemented!');
}
