import axios from 'axios'
import { toast } from "react-toastify";
import {POPULAR_SERVICE_GET} from "../../Fetch/settings"
import "react-toastify/ReactToastify.css"
export const getPopularService = (setData) => {

    axios.get(POPULAR_SERVICE_GET)
    .then((response) => {
        setData(response.data)
    })
    .catch(error => {
        toast.error('Не удалось получить список популярных сервисов')
    })
}