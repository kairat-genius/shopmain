import axios from 'axios';
import { toast } from 'react-toastify';
import { USER_RESET_PASSWORD } from '../../Fetch/settings';

export const postResetPassword = ({ email, navigate }) => {
  axios.post(USER_RESET_PASSWORD, { email }, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
  .then(() => {
    navigate('/account/login/#login');   
    toast.success('На вашу почту отправлено сообщение для сброса пароля');
  })
  .catch(error => {
    if (error.response && error.response.data) {
      const errorData = error.response.data;

      // Check for specific error messages
      if (errorData.email && Array.isArray(errorData.email)) {
        toast.error(errorData.email[0]); // Display the first error message for the email field
      } else {
        // Generic error message
        toast.error('Произошла ошибка. Пожалуйста, попробуйте еще раз.');
      }
    } else if (error.request) {
      toast.error('Произошла ошибка. Пожалуйста, попробуйте еще раз.');
    } else {
      toast.error('Произошла неизвестная ошибка.');
    }
  });
};