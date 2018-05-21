import axios from 'axios';

export function getFamilies() {
  return function(dispatch) {
    axios.get('/api/families')
      .then(function(response) {
        dispatch({type: 'GET_FAMILIES', payload: response.data})
      })
      .catch(function(err) {
        dispatch({type: 'GET_FAMILIES_ERROR', payload: err})
      })
  }
}
