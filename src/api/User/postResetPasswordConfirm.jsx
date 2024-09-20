import axios from 'axios';
import { toast } from 'react-toastify';
import { USER_RESET_PASSWORD_CONFIRM } from '../../Fetch/settings';

export const postConfirmResetPassword = ({ uid, token, new_password }, navigate) => {
  return axios.post(USER_RESET_PASSWORD_CONFIRM, { uid, token, new_password }, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
  .then(response => {
    if (response.status === 200) {
      toast.success('Ваш пароль был успешно изменён')
      navigate('/account/login')
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