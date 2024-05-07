
"use client"
import React from "react";
const CardComponent = ({number}) => {
  return (

    <div className={'lg:px-4 xl:px-0 w-full lg:w-1/2 xl:me-5   xl:w-[767px]   shrink-0 '}>

    <div >

<div className='flex flex-col min-h-[454px] xl:min-h-[514px] bg-[#fff] justify-between px-[28px] xl:px-[48px] py-[30px] xl:pt-[72px] xl:pb-[40px] relative '>
        <div>
        <span className='!text-[40px]  xl:!text-[57.94px] text-[#45B5F0] tracking-[-1.159px] leading-[110%]'>{number.si}</span>
        </div>

        <div>

            <h4 className='max-w-[385px]  !text-[28px] xl:!text-[32px] leading-[120%] tracking-[-0.56px]  xl:tracking-[-0.64px] mb-[8px] xl:mb-[24px]'>{number.title}</h4>

            <p className='max-w-[430px] !text-[16px] xl:!text-[20px] leading-[150%] xl:leading-normal' >{number.subtitle}</p>



        </div>

        <div className=' w-[238.38px]  xl:w-[375px] mask absolute top-[28px] right-[40px] xl:top-[48px] xl:right-[43px]'>

          <figure className='featureimg '>
            <img src={number.imgURL} alt="img" />
          </figure>


        </div>




    </div>

    </div>
    </div>
  

  );
};

export default CardComponent;
