import axios from 'axios'
import { toast } from "react-toastify";
import {FQA_GET} from "../../Fetch/settings"

export const getFQA = (setData) => {

    axios.get(FQA_GET)
    .then((response) => {
        setData(response.data)
    })
    .catch(error => {
        toast.error('Не удалось получить список часто задаваемых вопросов')
    })
}