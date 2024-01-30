import { Grid } from "@mui/material"
import Navbar from "./Component/Navbar"
import Resulat from "./Component/Resulat"

import Tennure from "./Component/Tennure";
import Slectslider from "./Component/Slectslider";




function App() {
 

  return (
    <>
     <Navbar></Navbar>
     <Grid container spacing={5}>
<Grid item>

<Tennure/>
<Slectslider/>
</Grid>


<Grid item> 

<Resulat/>
</Grid>
     </Grid>
    </>
  )
}

export default App
