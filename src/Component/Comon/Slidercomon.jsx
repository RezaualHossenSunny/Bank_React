import React from "react";
import Slider from "@mui/material/Slider";
import { Stack, Typography } from "@mui/material";
const Slidercomon = ({ defaultValue, min, max, amount, label, unit ,steps,value ,onchange}) => {
  return (
<Stack my={1.5}>
<Stack gap={1}>
   <Typography variant="subtitle2">{label}</Typography>
   <Typography variant="h5">{unit} {amount}</Typography>
   
</Stack>
<Slider
      min={min}
      max={max}
      defaultValue={defaultValue}
      aria-label="Default"
      valueLabelDisplay="auto"
      value={value}
      onChange={onchange}
      marks
      step={steps}
    />
<Stack direction='row' justifyContent='space-between'>
  <Typography variant="caption" color='text.secondary'>{unit} {min}</Typography>
  <Typography variant="caption" color='text.secondary'>{unit} {max}</Typography>
</Stack>


</Stack>
  );
};

export default Slidercomon;
