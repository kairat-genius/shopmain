import axios from 'axios'
import {PRODUCT_LIST_GET} from "../../../Fetch/settings"

export const getProductList = (setData, filter, setTotalPages, setTotalCount, setMaxPrice) => {

    axios.get(`${PRODUCT_LIST_GET}?${filter}`)
    .then((response) => {
            const { results = [], count = 0, max_price = 0 } = response.data;
            setData(results);

              if (setTotalPages) {
                setTotalPages(Math.ceil(count / 5));
              }
    
              if (setTotalCount) {
                setTotalCount(count);
              }
        
              if (setMaxPrice) {
                setMaxPrice(max_price);
              }
              
    })
}
