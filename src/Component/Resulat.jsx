import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { Stack, Typography } from "@mui/material";

ChartJS.register(ArcElement, Tooltip, Legend);
const Resulat = ({data}) => {
 const {loantrem,loanamount,interrest,doenpayment,homevalu}=data;
const totalloanmount =loantrem *12;
const interestmont= interrest/100/12;

const montylypyment= (
  loanamount *
  interestmont *
  (1 + interestmont) ** totalloanmount) 
  /
  ((1+ interestmont) ** totalloanmount);
const totalintrestGenarate = montylypyment * totalloanmount - loanamount;
  const paichrtdata = {
    labels: [" Principal","Interrest" ],
    datasets: [
      {
        label: "Ratio principal and interest",
        data: [homevalu, totalintrestGenarate ],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
         
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
         
        ],
        borderWidth: 1,
      },
    ],
  };
  return(
    

  <Stack>
    <Typography variant="h5" textAlign='center'>
      Total Amount: ${montylypyment.toFixed(2)}
    </Typography>
    <div>
    <Pie data={paichrtdata} />
  </div>
  </Stack>
  
 
  ) 
};

export default Resulat;
