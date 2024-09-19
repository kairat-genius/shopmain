import axios from 'axios'
import { toast } from "react-toastify";
import {CONTACT_GET} from "../../Fetch/settings"

export const getContact = (setData) => {

    axios.get(CONTACT_GET)
    .then((response) => {
        setData(response.data)
    })
    .catch(error => {
        toast.error('Не удалось получить Контакты')
    })
}