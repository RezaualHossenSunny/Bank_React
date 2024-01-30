import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Tennure({data,setData}) {
  // const [age, setAge] = React.useState('');
  const handleChange = (event) => {
  
    setData({
      ...data,
      loantrem:event.target.value

    })
    console.log(data);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Tennure</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={data.loantrem}
          label="Tennure"
          defaultValue={5}
          onChange={handleChange}
        >
          <MenuItem value={5}>5 year</MenuItem>
          <MenuItem value={10}>10 year</MenuItem>
          <MenuItem value={15}>15 year</MenuItem>
          <MenuItem value={20}>20 year</MenuItem>
          <MenuItem value={25}>25 year</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}