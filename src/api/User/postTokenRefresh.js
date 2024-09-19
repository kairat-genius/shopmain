import { useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { USER_REFRESH_TOKEN } from '../../Fetch/settings.js';
import { toast } from 'react-toastify';

const useTokenRefresh = () => {
  useEffect(() => {
    const refreshToken = async () => {
      try {
        const refresh = Cookies.get('refresh');
        if (refresh) {
          const response = await axios.post(USER_REFRESH_TOKEN, { refresh });
          if (response.status === 200) {
            const { access } = response.data;
            Cookies.set('access', access, { expires: 30 / 1440 }); // Обновляем access токен
          } else {
            console.error('Ошибка при обновлении токена');
          }
        }
      } catch (error) {
        if (error.response && error.response.status === 401) {
          toast.error('Ваша сессия истекла. Пожалуйста, авторизуйтесь снова.');
          Cookies.remove('refresh');
          Cookies.remove('access');
        } else {
          console.error('Ошибка при обновлении токена:', error);
        }
      }
    };

    if (Cookies.get('refresh')) {
      refreshToken();
    }
  }, []);
};

export default useTokenRefresh;