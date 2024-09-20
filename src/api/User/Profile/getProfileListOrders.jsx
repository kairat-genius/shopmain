import axios from 'axios'
import {USER_PROFILE_LIST_ORDERS, accessToken} from "../../../Fetch/settings"

export const getProfileListOrders= (setData) => {

    axios.get(USER_PROFILE_LIST_ORDERS, {
        headers: {
            'Authorization': `JWT ${accessToken}`
        }
    })
    .then((response) => {
        setData(response.data)
    })
    
}
