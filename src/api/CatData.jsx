import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:3000' || "https://image-uploader-zv1t.onrender.com"
});
