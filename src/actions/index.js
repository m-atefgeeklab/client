import axios from 'axios';
import { FETCH_USER } from './types';

// Fetch user data from /user endpoint
export const fetchUser = () => async dispatch => {
  try {
    const res = await axios.get('https://juice-box-api.onrender.com/api/v1/auth/user');
    
    if (res.data.token) {
      // Store token in localStorage
      localStorage.setItem('token', res.data.token);

      // Dispatch user data
      dispatch({
        type: FETCH_USER,
        payload: res.data.token, // You can decode the token here if necessary
      });
    }
  } catch (err) {
    dispatch({ 
      type: FETCH_USER, 
      payload: false 
    });
  }
};
