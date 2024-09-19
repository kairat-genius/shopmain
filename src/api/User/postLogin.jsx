import axios from 'axios'
import { toast } from "react-toastify";
import { USER_LOGIN} from "../../Fetch/settings"
import Cookies from 'js-cookie';

export const postLoginRequest = ({ email, password, navigate }) => {
    axios.post(USER_LOGIN, {
        email: email,
        password: password,
    }, {
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then((response) => {
        const { refresh, access } = response.data;
        const refreshExpiry = 7; 
        const accessExpiry = 30 / 1440;
        Cookies.set('refresh', refresh, { expires: refreshExpiry });
        Cookies.set('access', access, { expires: accessExpiry });
        navigate('/account');   
        toast.success('Пользователь успешно авторизован');

    })
    .catch(error => {
        if (error.response && error.response.data) {
            // Если сервер вернул ошибку с деталями
            const errorMessage = error.response.data.detail;
            if (errorMessage) {
                toast.error(errorMessage);  // Показать сообщение об ошибке
            }
        } else if (error.request) {
            toast.error('Произошла ошибка. Пожалуйста, попробуйте еще раз.');
        } else {
            toast.error('Произошла неизвестная ошибка.');
        }
    });
}