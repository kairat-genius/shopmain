import axios from 'axios'; 
import { toast } from "react-toastify";
import { USER_REGISTER } from "../../Fetch/settings";
import Cookies from 'js-cookie';

export const registrationRequest = ({ login, email, password, navigate }) => {
    axios.post(USER_REGISTER, {
        login: login,
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
        toast.success('Пользователь успешно создан');
        setTimeout(() => {
            window.location.reload();
        }, 2000); 
       
    })
    .catch(error => {
        if (error.response && error.response.data) {
            // Обрабатываем ошибки валидации с сервера
            const errors = error.response.data;
            
            if (errors.email) {
                toast.error(errors.email[0]);
            }
            
            if (errors.password) {
                toast.error(errors.password[0]);
            }
        } else if (error.request) {
            toast.error('Произошла ошибка. Пожалуйста, попробуйте еще раз.');
        } else {
            toast.error('Произошла неизвестная ошибка.');
        }
    });
}
