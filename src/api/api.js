import axios from 'axios';

const BASE_URL = 'https://64b93b7979b7c9def6c0c894.mockapi.io';
const CONTACTS_ENDPOINT = '/contacts';

export const fetchContacts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}${CONTACTS_ENDPOINT}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const addContact = async contact => {
  try {
    const response = await axios.post(
      `${BASE_URL}${CONTACTS_ENDPOINT}`,
      contact
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteContact = async contactId => {
  try {
    const response = await axios.delete(
      `${BASE_URL}${CONTACTS_ENDPOINT}/${contactId}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
