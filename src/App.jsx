import { Container, Grid } from "@mui/material"
import Navbar from "./Component/Navbar"
import Resulat from "./Component/Resulat"

import Tennure from "./Component/Tennure";
import Slectslider from "./Component/Slectslider";
import { useState } from "react";




function App() {
 const [data,setData]=useState({
  homevalu:3000,
  doenpayment:3000 * 0.2,
  loanamount:3000  * 0.8,
  loantrem:5,
  interrest:5,
 })
 console.log(data);

  return (
    <>
     <Navbar></Navbar>
     <Container>
     <Grid container spacing={5}>
   
   <Grid item md={6}>
   
   
   <Slectslider data={data} setData={setData}/>
   <Tennure data={data} setData={setData}/>
   </Grid>
   
   
   <Grid item  md={6}> 
   
   <Resulat  data={data} setData={setData} />
   </Grid>
        </Grid>
     </Container>
    </>
  )
}

export default App
