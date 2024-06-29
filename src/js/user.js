import fetchData, { httpGet } from './http';

export function loadUser(id) {
  const data = httpGet(`http://server:8080/users/${id}`);
  return JSON.parse(data);
}

// eslint-disable-next-line no-unused-vars
// export function saveUser(user) {
//   throw new Error('Unimplemented');
// }

export function getLevel(userId) {
  const response = fetchData(`https://server/user/${userId}`);
  if (response.status === 'ok') {
    return `Ваш текущий уровень: ${response.level}`;
  }
  return 'Информация об уровне временно недоступна';
}
