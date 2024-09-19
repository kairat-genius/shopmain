import axios from 'axios'
import { toast } from "react-toastify";
import {PARTNER_GET} from "../../Fetch/settings"

export const getPartners = (setData) => {

    axios.get(PARTNER_GET)
    .then((response) => {
        setData(response.data)
    })
    .catch(error => {
        toast.error('Не удалось получить список партнеров')
    })
}