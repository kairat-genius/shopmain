import axios from "axios";
import { toast } from "react-toastify";
import { PRODUCT_SIMILAR_POST } from "../../../Fetch/settings";

export const postProductSimilar = (setData, category, productId) => {
  axios
    .post(
      PRODUCT_SIMILAR_POST,
      {
        category: category,
        product_id: productId,
      },
      {
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    )
    .then((response) => {
      setData(response.data);
    })
    .catch((error) => {
      console.error("Ошибка при получении похожих продуктов:", error);
      toast.error("Не удалось получить список похожих продуктов");
    });
};
