import axios from 'axios';
import { toast } from "react-toastify";
import { SUBSCRIPTION } from "../../Fetch/settings";

let toastId = null; 

export const postSubscription = (email) => {
    axios.post(SUBSCRIPTION, {
        email: email
    }, {
        headers: {
            'Content-Type': 'application/json',
        }
    })
    .then(() => {
        if (toastId) {
            toast.dismiss(toastId);
        }
        toastId = toast.success('Вы успешно подписались в рассылку');
    })
    .catch(() => {
        if (toastId) {
            toast.dismiss(toastId);
        }
        toastId = toast.error('Не удалось подписать вас в рассылку');
    });
};

