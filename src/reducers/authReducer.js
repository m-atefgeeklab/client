import { FETCH_USER } from '../actions/types';
import { jwtDecode } from 'jwt-decode';

const authReducer = (state = null, action) => {
  switch (action.type) {
    case FETCH_USER:
      // Payload is already the decoded user data from the action, no need to decode here again
      return action.payload || false;
    default:
      return state;
  }
};

export default authReducer;
