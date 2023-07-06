import axios from 'axios';

// Axios instance Created
export const restCountries = axios.create({
  baseURL: 'https://restcountries.com/v3.1',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});
