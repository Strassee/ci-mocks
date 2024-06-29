import { loadUser, getLevel } from '../user';
import fetchData, { httpGet } from '../http';

jest.mock('../http');

beforeEach(() => {
  jest.resetAllMocks();
});

test('should call loadUser once', () => {
  httpGet.mockReturnValue(JSON.stringify({}));

  const response = loadUser(1);
  expect(response).toEqual({});
  expect(httpGet).toHaveBeenCalledWith('http://server:8080/users/1');
});

test('getLevel User error', () => {
  fetchData.mockReturnValue(new Error('Mock this!'));
  const response = getLevel(1);
  expect(response).toBe('Информация об уровне временно недоступна');
  expect(fetchData).toHaveBeenCalledWith('https://server/user/1');
});

test('getLevel User no error', () => {
  fetchData.mockReturnValue({ status: 'ok' });
  const response = getLevel(1);
  expect(response).toMatch(/Ваш текущий уровень:/);
  expect(fetchData).toHaveBeenCalledWith('https://server/user/1');
});
