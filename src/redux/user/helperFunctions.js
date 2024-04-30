import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../constant.js';
import {
  signInStart,
  signInSuccess,
  signInFailure,
  signoutSuccess,
  setLoggedIn // Add this action
} from './userSlice.js';
import { toast } from 'react-toastify';
const UserContext = createContext();
 
export const UserProvider = ({ children }) => {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.user.isLoggedIn); // Accessing isLoggedIn state from Redux store
 
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };
 
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      return dispatch(signInFailure('Please fill all the fields'));
    }
    try {
      dispatch(signInStart());
      const res = await axios.post(`${BASE_URL}/auth/signin`, formData);
      const data = res.data;
      console.log(data);
     
      if (res.status === 200) {
        localStorage.setItem('token', data.token);
 
        dispatch(signInSuccess(data));
        dispatch(setLoggedIn(true)); // Dispatch action to update isLoggedIn state in Redux
        if (data.isAdmin) {
          navigate('/admincategory');
        } else {
          navigate('/landingmain');
        }
      }
    } catch (error) {
        if (error.response) {
          if (error.response.status === 404) {
            console.error('Email does not exist:', error.response.data.message);
            dispatch(signInFailure(error.response.data.message));
          } else if (error.response.status === 500) {
            console.error('Internal Server Error:', error.response.data.message);
            dispatch(signInFailure('Internal Server Error'));
            toast.error(error.response.data.message);
          } else {
            console.error('Request failed:', error.response.data.message);
            dispatch(signInFailure(error.response.data.message));
          }
        } else {
          console.error('Request failed:', error.message);
          dispatch(signInFailure('Request failed'));
        }
      }
    };
 
  const handleLogout = async () => {
    try {
      const logoutResponse = await axios.post(`${BASE_URL}/user/logout`);
      if (logoutResponse.status === 200) {
        dispatch(signoutSuccess());
        dispatch(setLoggedIn(false)); // Dispatch action to update isLoggedIn state in Redux
        navigate('/login');
      } else {
        throw new Error('Logout failed');
      }
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };
 
  return (
    <UserContext.Provider value={{ handleChange, handleLogout, handleSubmit, isLoggedIn }}>
      {children}
    </UserContext.Provider>
  );
};
 
export const useFunc = () => useContext(UserContext);