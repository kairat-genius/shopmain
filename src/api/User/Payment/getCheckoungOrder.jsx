import axios from 'axios'
import { toast } from "react-toastify";
import {CHECKOUT_ORDER_GET, accessToken} from "../../../Fetch/settings"

export const getCheckoungOrder = (setData, order_id, setUserData) => {

    axios.get(CHECKOUT_ORDER_GET(order_id), {
        headers: {
          'Authorization': `JWT ${accessToken}`
        }
      })
    .then((response) => {
        setData(response.data.product)
        setUserData(response.data)
    })

}

