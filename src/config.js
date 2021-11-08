import React from 'react'
import axios from 'axios';

export const BASE_URL = () => {
  let url;
  if (process.env.REACT_APP_ENV === 'development') {
    url = 'http://localhost:3008/v1/'
  }
  if (process.env.REACT_APP_ENV === 'staging') {
    url = 'http://localhost:3008/v1/'
  }
  if (process.env.REACT_APP_ENV === 'production') {
    console.log("production if");
    url = 'http://localhost:3008/v1/'
    
  }
  return url;
};

const instance = axios.create({
  baseURL: BASE_URL()
});

export default instance;