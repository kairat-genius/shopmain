import axios from 'axios';
import { toast } from "react-toastify";
import { USER_PROFILE_DOWNLOAD_FILE, accessToken } from "../../../Fetch/settings";

export const getProfileDownloadFile = (order_id, product_id) => {

  return axios.get(USER_PROFILE_DOWNLOAD_FILE(order_id, product_id), {
    headers: {
      'Authorization': `JWT ${accessToken}`,
    },

  })
  .catch((error) => {
    toast.error('Не удалось скачать файл');
    console.error('Ошибка при скачивании файла:', error);
  });
};
