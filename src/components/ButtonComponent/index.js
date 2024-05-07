
"use client"
import React from "react";
const ButtonComponent = (props) => {
  const paddingClassName = `p-${props.padding}`;

  return (
    <div className='text-success-700 '>

   
      <a href="#"  className= {paddingClassName} >{props.btnName}</a>

    </div>
  );
};

export default ButtonComponent;
