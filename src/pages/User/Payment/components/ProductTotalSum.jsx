import { React } from "react";
import { formatPrice } from "../../../../hooks/formatPrice.js";
const ProductTotalSum = ({totalsum}) => {
  return (
    <section className="_1fragem2i _1fragempf">
      <div className="nfgb6p1 _1fragemwh">
        <h4 id="MoneyLine-Heading0" className="n8k95w1 n8k95w0 _1fragempf n8k95w5">
          Общая стоимость
        </h4>
      </div>
      <div role="table" aria-labelledby="MoneyLine-Heading0" className="nfgb6p0">
        <div
          role="row"
          className="_1x41w3p1 _1x41w3p0 _1fragem3c _1fragemq8 _1x41w3p5"
        >
          <div role="rowheader" className="_1x41w3p7">
            <span className="_19gi7yt0 _19gi7yt10 _19gi7ytz _1fragemrs _19gi7yt2">
              Всего
            </span>
          </div>
          <div role="cell" className="_1x41w3p8">
            <div className="_5uqybw0 _1fragempf _1fragem2s _1fragem8w">
              <div className="_5uqybw2 _5uqybw1 _1fragem2s _1fragemol _1fragem46 _1fragem6j _1fragemq7 _1fragem8w">
              
                <strong
                  translate="no"
                  className="_19gi7yt0 _19gi7yt12 _19gi7yt11 _1fragemrt _19gi7yt2 notranslate"
                >
                  {formatPrice(totalsum)} ₽
                </strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductTotalSum;
