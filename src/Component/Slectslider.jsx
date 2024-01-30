import React from "react";
import Slidercomon from "./Comon/Slidercomon";

const Slectslider = () => {
  const bank_limit =10000;
  return (
    <div>
      <Slidercomon
        defaultValue={3000}
        min={1000}
        max={bank_limit}
        amount={3500}
        steps={100}
        unit="$"
        label={"Home Value"}
        onchange={(e) => console.log(e.target.value)}
      />

      <Slidercomon
        defaultValue={3000}
        min={1000}
        max={10000}
        amount={3500}
        steps={100}
        unit="$"
        label={"Down Pyment"}
        onchange={(e) => console.log(e.target.value)}
      />

      <Slidercomon
        defaultValue={3000}
        min={1000}
        max={10000}
        amount={3500}
        steps={100}
        unit="$"
        label={"Loan Amount"}
        onchange={(e) => console.log(e.target.value)}
      />

      <Slidercomon
        defaultValue={2}
        min={2}
        max={18}
        amount={2}
        steps={0.5}
        unit="%"
        label={"Interrest Rate"}
        onchange={(e) => console.log(e.target.value)}
      />
    </div>
  );
};

export default Slectslider;
