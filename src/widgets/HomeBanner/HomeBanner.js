"use client"
import React, { useEffect, useLayoutEffect, useRef } from "react";
import parse from 'html-react-parser';
import {gsap} from "gsap";
import { useGSAP } from "@gsap/react";
import {ScrollTrigger} from "gsap/ScrollTrigger";


const HomeBanner = (props) => {

  const outerSection =useRef(null)


  useGSAP(

    (self)=>{

      const title1=self?.selector(".title1")
 
      gsap.set(title1,{
        opacity:0,
        y:100

      })

      const tl=gsap.timeline();
      tl.to(title1, {y:0,opacity:1,stagger:0.1,duration:0.6,});





      

 

    },{scope:outerSection}



  )




  return (
    <section data-widget="HomeBanner" className="bg-black relative h-screen " ref={outerSection}>

      <div className='absolute content-[" "] z-10 left-0 bottom-0 w-full h-full bg-gradient-to-t from-[#000] from-[5%] via-transparent to-[100%] title2 '>

      </div>


      <div className="absolute w-full h-full left-0 top-0  ">
        <video
          src="/images/cafsVideo.mp4"
          className="w-full h-full  object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/images/posterImg.webp"
        />
      </div>

      <div className="container flex relative z-20 h-full">
        <div className="flex items-end pb-[10vh] h-full">
          <h1 className=" h1  xxs:!text-[55px] font-medium  font-sans max-w-[1020px] leading-[101%] xl:leading-[105%] text-white tracking-[-1.3px]  xl:tracking-[-4px] ">
       

            {parse(props?.data?.title)}
          </h1>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
