import axiosInstance from '../config/axiosInstance';

const getLoginStatus = url => axiosInstance
  .get(url)
  .then(response => response)
  .catch(error => error);

export default getLoginStatus;
