import axios from 'axios';

const api = axios.create({
  baseURL:'http://still-hamlet-22083.herokuapp.com'
})

export default api;