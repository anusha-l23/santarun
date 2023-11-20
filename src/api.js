import axios from 'axios';

const httpClient = axios.create({
  baseURL: "http://localhost:3001/santarun",
  headers: {
    "Content-Type": "application/json"
  },
  withCredentials: true 
});

export default httpClient;