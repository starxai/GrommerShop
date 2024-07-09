import React from "react";
import Rating from 'react-rating-stars-component';
const reactstarcomponent = async (value,onchange)=>{

    return(
        <Rating 
    count={5}
    size={40}
    activeColor="white"
    value={value}
    onchange={onchange}
        />
    )


}

export default reactstarcomponent
