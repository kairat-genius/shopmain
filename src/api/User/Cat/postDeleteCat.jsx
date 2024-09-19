import axios from 'axios';
import { toast } from "react-toastify";
import { CAT_DELETE_POST, accessToken } from "../../../Fetch/settings";

let toastId = null; 

export const postDeleteCat = (productId) => {
    axios.post(CAT_DELETE_POST, {
        product_id: productId
    }, {
        headers: {
            'Authorization': `JWT ${accessToken}`,
            'Content-Type': 'application/json',
        }
    })
    .then(() => {
        if (toastId) {
            toast.dismiss(toastId);
        }
        toastId = toast.success('Товар Удален из корзины');
    })
    .catch(() => {
        if (toastId) {
            toast.dismiss(toastId);
        }
        toastId = toast.error('Не удалось удалить продукт из корзины');
    });
};


