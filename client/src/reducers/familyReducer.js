export function familyReducer(state={families:[]}, action) {
  switch(action.type) {
    case 'GET_FAMILIES':
    return {families:[...state, ...action.payload]}
    break;
  }
  return state;
}
