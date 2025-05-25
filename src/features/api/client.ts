import axios from 'axios'
import { QueryClient } from '@tanstack/react-query';

export const axiosClient = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  headers: {
    Accept: 'application/json',
  },
})

export const queryClient = new QueryClient();