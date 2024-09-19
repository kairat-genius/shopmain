import axios from "axios";
import { toast } from "react-toastify";
import { CAT_ADD_POST, accessToken } from "../../../Fetch/settings";

let toastId = null;

export const postCat = (productId, product, onAddToCart) => {
  axios
    .post(
      CAT_ADD_POST,
      {
        product_id: productId,
      },
      {
        headers: {
          'Authorization': `JWT ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    )
    .then((response) => {
      if (toastId) {
        toast.dismiss(toastId);
      }
      onAddToCart(product);
    })
    .catch((error) => {
      if (toastId) {
        toast.dismiss(toastId);
      }

      // Check if error is 401 Unauthorized
      if (error.response && error.response.status === 401) {
        toastId = toast.error(
          "Сессия истекла, пожалуйста, войдите в систему снова."
    
        );
      } else {
        toastId = toast.error("Не удалось добавить продукт в корзину");
      }
    });
};
