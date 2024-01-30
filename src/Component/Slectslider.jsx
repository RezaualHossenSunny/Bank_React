import React from 'react'
import Slidercomon from './Comon/Slidercomon'

const Slectslider = () => {
  return (
    <div>
        <Slidercomon defaultValue={3000} min={1000} max={10000} amount={3500 } unit="$" label={'hellow'}/>
       
    </div>
  )
}

export default Slectslider