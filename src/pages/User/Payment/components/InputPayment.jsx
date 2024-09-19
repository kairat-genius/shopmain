import React from "react";

const InputPayment = ({placeholder, name, value, onChange}) => {
  return (
    <div
      className="_1mrl40q0 _1fragempf _1fragem4g _1fragem6t _1fragem3c _1fragempz _16s97g7f _16s97g7p _16s97g71j _16s97g71t"
      style={{
        "--_16s97g7a": "1fr",
        "--_16s97g7k": "minmax(0, 1fr)",
        "--_16s97g71e": "minmax(0, 1fr)",
        "--_16s97g71o": "minmax(0, 1fr)",
      }}
    >
      <div className="_7ozb2u2 _7ozb2u1 _1fragem3w _1fragem69 _1fragempf _1fragem3c _10vrn9p1 _10vrn9p0 _10vrn9p4 _7ozb2u4 _7ozb2u3 _1fragemr7">
        <div className="cektnc0 _1fragempf">
          <label
            id={`${name}-label`}
            htmlFor={name}
            className="cektnc3 cektnc1 _1fragemp5 _1fragemwg _1fragemvz _1fragemx7 _1fragemwu _1fragemwp _1fragemx3 _1fragemx4"
          >
            <span className="cektnc9">
              <span className="rermvf1 rermvf0 _1fragemnr _1fragemo1 _1fragem2i">
               {name}
              </span>
            </span>
          </label>
          <div className="_7ozb2u6 _7ozb2u5 _1fragempf _1fragem3c _1fragemrh _1fragemwu _1fragemwp _1fragemx3 _1fragemx6 _7ozb2uc _7ozb2ua _1fragemr7 _1fragemxc _7ozb2ul _7ozb2uh">
            <input
              id={name}
              name={name}
              placeholder={placeholder}
              type="text"
              value={value}
              aria-labelledby={`${name}-label`}
              autoComplete="billing email"
              autoFocus={true}
              className="_7ozb2uq _7ozb2up _1fragempf _1fragemx7 _1fragemsd _1fragemwf _7ozb2ur _7ozb2u12 _7ozb2u1h"
              onChange={onChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputPayment;
