import axios from 'axios';
import { toast } from 'react-toastify';
import { MENEGER_ORDER_POST, accessToken } from '../../../Fetch/settings';

export const postMenegerOrder = ({ telegram, vk, navigate}) => {
    const formData = {};

  if (telegram && telegram.trim()) {
    formData.telegram = telegram;
  }
  if (vk && vk.trim()) {
    formData.vk = vk;
  }
  return axios.post(MENEGER_ORDER_POST, formData, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `JWT ${accessToken}`,
    },
  })
  .then(response => {
    if (response.status === 201) {

      navigate(`/checkout/${response.data.order_id}`); 
    }
  })
  .catch(error => {
    if (error.response && error.response.data) {
      const errorData = error.response.data;

      if (errorData.detail) {
        toast.error(errorData.detail[0]); 
      } else {
        toast.error('Произошла ошибка. Пожалуйста, попробуйте еще раз.');
      }
    } else if (error.request) {
      toast.error('Ошибка сети. Пожалуйста, попробуйте еще раз.');
    } else {
      toast.error('Произошла неизвестная ошибка.');
    }
  });
};