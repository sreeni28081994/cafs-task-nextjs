
"use client"
import React from "react";
const CareComponent = ({data}) => {
  return (
    <div className='py-[35px] xl:py-0 w-full md:w-6/12 xl:w-3/12 '>
      <div className="flex items-start gap-[58px] sm:gap-[26px]  xl:gap-[19px]">
        
        <figure className='pt-[13px]'>
          
          <img src={data.url} alt="img" className='w-full h-full ' />
        </figure>
        <div className="flex flex-col gap-0  xl:gap-[5px]">
          <span className='text-white text-[42px] xl:text-[48px] tracking-[0.84px] xl:tracking-[0.96px] '>{data.number} </span> <span className='text-[#8C8C8C] text-[22px] xl:text-[24px] leading-[100%]'>{data.content}</span>
        </div>
      </div>
    </div>
  );
};

export default CareComponent;
