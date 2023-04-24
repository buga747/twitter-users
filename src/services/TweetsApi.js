import axios from 'axios';

const BASE_URL = 'https://64419945fadc69b8e087e3ed.mockapi.io';
const CARDS_LIMIT = 3;

axios.defaults.baseURL = BASE_URL;

export async function fetchAllUsers() {
  const response = await axios.get(`/users`);
  return response.data;
}

export const fetchUsers = async (page, controllerSignal) => {
  const response = await axios.get(`/users`, {
    params: {
      page,
      limit: CARDS_LIMIT,
    },
  });

  return response.data;
};

export async function updateUser(user) {
  const response = await axios.put(`/users/${user.id}`, user);
  return response.data;
}
