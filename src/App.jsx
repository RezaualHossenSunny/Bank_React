import { Container, Grid } from "@mui/material"
import Navbar from "./Component/Navbar"
import Resulat from "./Component/Resulat"

import Tennure from "./Component/Tennure";
import Slectslider from "./Component/Slectslider";




function App() {
 

  return (
    <>
     <Navbar></Navbar>
     <Container>
     <Grid container spacing={5}>
   
   <Grid item md={6}>
   
   
   <Slectslider/>
   <Tennure/>
   </Grid>
   
   
   <Grid item  md={6}> 
   
   <Resulat/>
   </Grid>
        </Grid>
     </Container>
    </>
  )
}

export default App
