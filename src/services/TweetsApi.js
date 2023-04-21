import axios from 'axios';

const BASE_URL = 'https://64419945fadc69b8e087e3ed.mockapi.io';

axios.defaults.baseURL = BASE_URL;

export async function getUsers() {
  const response = await axios.get(`/users`);
  return response.data;
}

export async function updateUser(user) {
  const response = await axios.put(`/users/${user.id}`, user);
  return response.data;
}
