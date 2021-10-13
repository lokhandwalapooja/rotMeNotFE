import React from 'react'
import axios from 'axios';

export const BASE_URL = () => {
  let url;
  if (process.env.REACT_APP_ENV === 'development') {
    url = 'https://development.com/'
  }
  if (process.env.REACT_APP_ENV === 'staging') {
    url = 'https://stage.com/'
  }
  if (process.env.REACT_APP_ENV === 'production') {
    console.log("production if");
    url = 'https://production.com/'
  }
  return url;
};

const instance = axios.create({
  baseURL: BASE_URL(),
  headers: {
    post: {        // can be common or any other method
      header1: 'value1'
    }
  }
});

export default instance;