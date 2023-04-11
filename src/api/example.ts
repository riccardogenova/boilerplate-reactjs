/** @format */

import { AxiosClient } from '../utils/utlityCreateAxiosClient';

interface Props {
  title: string;
  body: string;
  userId: number;
}

export const getExample = async () => {
  const { data } = await AxiosClient()
    .get('https://jsonplaceholder.typicode.com/posts')
    .then(response => response)
    .catch(error => error);
  return data;
};

export const postExample = ({ title, body, userId }: Props) => {
  AxiosClient().post('https://jsonplaceholder.typicode.com/posts', {
    title,
    body,
    userId,
  });
};
