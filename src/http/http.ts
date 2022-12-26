import axios from 'axios';

export const http = axios.create({
  baseURL: "https://newsapi.org/v2/everything",
  params: {
    "apiKey": "1bb71caf952c4edfb437649050929209"
  }
})