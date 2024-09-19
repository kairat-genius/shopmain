import axios from 'axios';
import { toast } from 'react-toastify';
import { USER_RESET_PASSWORD_CHEK } from '../../Fetch/settings';

export const postValidResetPassword = ({ uid, token }) => {
  return axios.post(USER_RESET_PASSWORD_CHEK, { uid, token }, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
  .then(response => {
    if (response.status === 200) {
      return { valid: true };
    } else {
      return { valid: false };
    }
  })
  .catch(error => {
    if (error.response && error.response.data) {
      const errorData = error.response.data;

      if (errorData.email && Array.isArray(errorData.email)) {
        toast.error(errorData.email[0]); 
      } else {
        toast.error('Произошла ошибка. Пожалуйста, попробуйте еще раз.');
      }
    } else if (error.request) {
      toast.error('Произошла ошибка. Пожалуйста, попробуйте еще раз.');
    } else {
      toast.error('Произошла неизвестная ошибка.');
    }

    return { valid: false };
  });
};