import { React, useEffect, useState } from "react";
import { getCheckoungOrder } from "../../../../api/User/Payment/getCheckoungOrder.jsx";
import { formatPrice } from "../../../../hooks/formatPrice.js";
import { accessToken } from "../../../../Fetch/settings.js";
import { useParams } from "react-router-dom";
const ChekOrderProduct = ({setUserData}) => {
    const [data, setData] = useState([]);
    const { order_id } = useParams(); // Получаем border_id из URL
  
    useEffect(() => {
      if (accessToken && order_id) { // Убедимся, что у нас есть accessToken и border_id
        getCheckoungOrder(setData, order_id, setUserData); // Передаем border_id в getCheckoungOrder
      }
    }, [order_id]);

   


  return (
    <div className="_1ip0g651 _1ip0g650 _1fragempf _1fragem4q _1fragem73 _1fragem3c">
      <section className="_1fragem2i _1fragempf">
        <div className="_6zbcq53t _1fragemwh">
          <h4 id="ResourceList0" className="n8k95w1 n8k95w0 _1fragempf n8k95w5">
            Корзина
          </h4>
        </div>
        <div
          role="table"
          aria-labelledby="ResourceList0"
          className="_6zbcq55 _6zbcq54 _1fragem2s _1fragemrj _6zbcq56"
        >
          {data.map((product) => (
          <div
          key={product.id}
            role="row"
            className="_6zbcq524 _6zbcq523 _1fragem2s _1fragem2d _6zbcq52b"
          >
            <div
              role="cell"
              className="_6zbcq53s _6zbcq53r _1fragem2s _1fragemrj _6zbcq53m _6zbcq53j _1fragem8w"
            >
              <div
                className="_1m6j2n32 _1m6j2n31 _1fragempf _1fragemxh _1m6j2n35 _1m6j2n33"
                style={{"--_1m6j2n30": "1"}}
              >
                <div
                  className="_1h3po421 _1h3po423 _1h3po422 _1fragempf"
                  style={{"--_1h3po420": "1"}}
                >
                    <img
                      src={product.img}
                      alt={product.name}
                      className="_1h3po424 _1h3po427 _1h3po425 _1fragem2i _1fragemog _1fragemaf _1fragem9v _1fragemaz _1fragem9b _1fragemcs _1fragemc3 _1fragemdh _1fragembe _1fragemov _1m6j2n33"
                    />
                </div>
              </div>
            </div>
            <div
              role="cell"
              className="_6zbcq53s _6zbcq53r _1fragem2s _1fragemrj _6zbcq53n _6zbcq53k _1fragem8h _6zbcq53p _1fragemrm"
            >
              <div className="_1fragem2i _1fragempf dDm6x">
                <p className="_1x52f9s1 _1x52f9s0 _1fragempf _1x52f9sv _1x52f9su _1fragemrq">
                  {product.name}
                </p>
                <div className="_1ip0g651 _1ip0g650 _1fragempf _1fragem5z _1fragem8c _1fragem3c"></div>
              </div>
            </div>
            
            <div
              role="cell"
              className="_6zbcq53s _6zbcq53r _1fragem2s _1fragemrj _6zbcq53m _6zbcq53j _1fragem8w"
            >
              <div
                className="_197l2oft _1fragemrj _1fragemqa _1fragem2s _1fragem8h _1fragempf _16s97g741 Byb5s"
                style={{"--_16s97g73w": "6.4rem"}}
              >
                <span
                  translate="no"
                  className="_19gi7yt0 _19gi7ytw _19gi7ytv _1fragemrq notranslate"
                >
                  {formatPrice(product.price)} {product.currency}
                </span>
              </div>
            </div>
          </div>
          ))}
          
        </div>

      </section>
    </div>
  );
};

export default ChekOrderProduct;
