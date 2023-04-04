/** @format */

import axios from 'axios';

export const AxiosClient = () =>
  axios.create({
    headers: { Authorization: `Bearer ---`, apiKey: process.env.API_KEY },
  });
