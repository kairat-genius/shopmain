import axios from 'axios'
import { toast } from "react-toastify";
import {PRODUCT_DETAIL} from "../../../Fetch/settings"

export const getProductDetail = (setData, slug, setError) => {

    axios.get(PRODUCT_DETAIL(slug))
    .then((response) => {
            setData(response.data);
    })
    .catch(error => {
        toast.error('Не удалось получить продукт')
        setError(error)
    })
}