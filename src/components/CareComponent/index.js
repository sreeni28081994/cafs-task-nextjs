
"use client"
import React,{useRef,useState,useEffect} from "react";
import CountUp from "react-countup";


import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const CareComponent = ({data}) => {
  const outerDiv =useRef(null)
  const counterDiv =useRef(null)
  const [isCounting,setCounting]=useState(false)

  useGSAP(
    (self)=>{

      const count = ()=>{

        setCounting(true)
      }

      ScrollTrigger.create({
        trigger: counterDiv.current ,
        start:"top bottom",
        onEnter: count
        
      });
  


    },{scope: outerDiv}
  )










  return (
    <div className='py-[35px] xl:py-0 w-full md:w-6/12 xl:w-3/12 ' ref={outerDiv}>
      <div className="flex items-start gap-[58px] sm:gap-[26px]  xl:gap-[19px] " ref={counterDiv}>
        
        <figure className='pt-[13px]'>
          
          <img src={data.url} alt="img" width={44} height={44} className='w-full h-full ' />
        </figure>
        <div className="flex flex-col gap-0  xl:gap-[5px]">
           <CountUp   start={0} end={isCounting ? data.number : 0} separator="" useEasing={false} duration={1} className='text-white text-[42px] xl:text-[48px] tracking-[0.84px] xl:tracking-[0.96px] ' /> 
            <span className='text-[#8C8C8C] text-[22px] xl:text-[24px] leading-[100%]'>{data.content}</span>
           
         
             
        </div>
      </div>
    </div>
  );
};

export default CareComponent;

           
           
           
