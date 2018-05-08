import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api';

function getFeatures() {
  const url = `${BASE_URL}/features`;
  return axios.get(url)
    .then(response => response.data)
    .catch(err => err);
}

export {getFeatures};
