import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:3000' || 'https://catwiki-kannan-api.onrender.com'
});
