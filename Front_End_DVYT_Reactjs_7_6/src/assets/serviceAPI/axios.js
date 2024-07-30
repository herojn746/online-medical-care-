import axios from "axios";

const instance = axios.create({
  baseURL: 'http://levi123-001-site1.ktempurl.com' 
});

// Add a response interceptor
instance.interceptors.response.use(function (response) {
  return response.data;
}, function (error) {
  if (error && error.response && error.response.status === 400) {
    console.log("Bad request: ", error.response.data);
    // Hiển thị thông báo lỗi cho người dùng
  }
  return Promise.reject(error);
});

export default instance;
