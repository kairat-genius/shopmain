import axios from 'axios'
import {CAT_GET_COUNT, accessToken} from "../../../Fetch/settings"

export const getCartCount = (setCount) => {
    if (!accessToken) {
        return; 
    }
    axios.get(CAT_GET_COUNT, {
        headers: {
            'Authorization': `JWT ${accessToken}`
        }
    })
    .then((response) => {
        setCount(response.data.count)
  
    })
}



