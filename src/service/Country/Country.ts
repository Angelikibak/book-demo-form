import { restCountries } from '../index';

// Get All Countries
export const getCountries = () => {
  return restCountries
    .get('/all')
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(error);
    });
};
