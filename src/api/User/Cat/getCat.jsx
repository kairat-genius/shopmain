import axios from 'axios';
import { CAT_GET, accessToken } from "../../../Fetch/settings";

export const getCat = (setData, setTotalSum, setError) => {
  axios.get(CAT_GET, {
    headers: {
      'Authorization': `JWT ${accessToken}`
    }
  })
  .then((response) => {
    setData(response.data.products);
    setTotalSum(response.data.total_sum);
  })
  .catch((error) => {
    // Проверяем наличие response в ошибке
    if (error.response) {
      setError({
        status: error.response.status,
        message: error.response.data.message || 'Произошла ошибка'
      });
    } else {
      setError({ message: 'Ошибка сети. Попробуйте позже.' });
    }
  });
};