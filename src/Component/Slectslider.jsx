import React from "react";
import Slidercomon from "./Comon/Slidercomon";

const Slectslider = ({data,setData}) => {
  const bank_limit =10000;
  console.log(data);
  return (
    <div>
      <Slidercomon
        defaultValue={data.homevalu}
        min={1000}
        max={bank_limit}
        value={data.homevalu}
        amount={data.homevalu}
        steps={100}
        unit="$"
        label={"Home Value"}
        onchange={(e,value) => setData({
          ...data,homevalu:value,
          doenpayment: value  * 0.2,
          loanamount: value  * 0.8,
        })}
      />

      <Slidercomon
        defaultValue={data.doenpayment}
        min={0}
        max={data.homevalu}
        amount={data.doenpayment}
        value={data.doenpayment}
        steps={100}
        unit="$"
        label={"Down Pyment"}
        onchange={(e,value) => setData({
          ...data,
          doenpayment:value,
          loanamount: data.homevalu-value
        })}
      />

      <Slidercomon
        defaultValue={data.loanamount}
        min={0}
        max={data.homevalu}
        amount={data.loanamount}
        value={data.loanamount}
        steps={100}
        unit="$"
        label={"Loan Amount"}
        onchange={(e,value) => setData({
          ...data,
          loanamount:value,
          doenpayment: data.homevalu -value,
        })}
      />

      <Slidercomon
        defaultValue={data.interrest}
        min={2}
        max={18}
        amount={data.interrest}
        value={data.interrest}
        steps={0.5}
        unit="%"
        label={"Interrest Rate"}
        onchange={(e,value) => setData({
           ...data,
           interrest:value
        })}
      />
    </div>
  );
};

export default Slectslider;
