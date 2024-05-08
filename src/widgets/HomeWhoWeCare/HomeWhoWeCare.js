"use client";
import React, { useEffect, useRef, useState } from "react";
import CareComponent from "@/components/CareComponent";
import Image from "next/image";
import { useLenis } from "@studio-freight/react-lenis";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MdClose } from 'react-icons/md';
import Link from "next/link";





const HomeWhoWeCare = (props) => {

  const bgAnimRef = useRef(null);
  const wrapper = useRef(null);


  useGSAP((self)=>{
    const bgAnim = bgAnimRef?.current;

    gsap.set(bgAnim,{"backgroundSize":"0%"})


    const animateBg = gsap.to(bgAnim,{"backgroundSize":"100%",duration:1,ease:"sine.inOut"})
        
    ScrollTrigger.create({
      trigger: bgAnim,
      start:"top bottom",
      end:"+=100%",
      animation: animateBg,
    });

  },{dependencies :[wrapper.current, bgAnimRef?.current], scope: wrapper?.current}



  )



  const [showModal, setShowModal] = useState(false);

  const lenis = useLenis();

  const handleclick = () => {
    setShowModal(true);
  };

  const handleClose = ()=>{
    setShowModal(false)
  }

  useEffect(() => {
    showModal ? lenis?.stop() : lenis?.start()
  }, [showModal, lenis]);

  return (
    <section data-widget="HomeWhoWeCare" className="bg-black" ref={wrapper}>
      <div className="container">
        <div className="flex justify-between flex-wrap  py-[16px]   xl:py-[90px] border-b border-b-[#FFFFFF33]">
          {props?.data.map((item, key) => {
            return <CareComponent data={item} key={key} />;
          })}
        </div>

        <div className=" py-[48px]  xl:py-[58px]">
          <p className="text-white mb-5 xl:mb-9  !text-[16px] xl:!text-[18px] tracking-[0.32px]  xl:tracking-[0.36px] ">
            Who we are
          </p>

          <h2
            className="bg-anim  text-[#fff]  !text-[32px] xl:!text-[45px] max-w-[1123px] !leading-[1.2] font-light title  [&>i]:tracking-[0px] bg-white  bg-[length:0%] bg-gradient-to-r from-[#45B5F0] to-[#ffffff] [&>i]:text-transparent bg-clip-text to-[70%] "
            style={{ backgroundSize: "100%" }}
            ref={bgAnimRef}
          >
            <i className="text-white font-serief font-normal mr-[7px]">
              {props.topicItalic}
            </i>
            {props.topic}
          </h2>

          <Link
            href="https://www.google.com" target={"_blank"} aria-label={"details"}
            className="md:flex gap-2 mt-[68px]  text-[16px] font-medium text-[#FFF] tracking-[0.32px] hidden hover:text-secondary transition-all duration-300 ease-in-out group "
          >
            KNOW MORE ABOUT US
            <Image src="/images/arrow.svg" className={'group-hover:translate-x-1 '}  width={26} height={14} alt="img" />{" "}
          </Link>
        </div>

        <div className="block lg:flex lg:gap-[40px] xl:gap-[63px] justify-end pt-0 lg:pt-[70px] pb-[48px] xl:pb-[138px] flex-col lg:flex-row">
          <div
            className="wrap max-w-full  lg:max-w-[197px] w-full cursor-pointer mb-[64px] xl:mb-[0] "
            onClick={handleclick}
          >
            <figure className="popupVideo">
              <video
                src="/images/popupVideo.mp4"
                loop
                autoPlay
                muted
                playsInline
              ></video>
            </figure>

            <div className="text-white flex items-center gap-3 mt-5">
              <Image
                src="/images/btnIcon.svg"
                width={28}
                height={28}
                alt="img"
              />
              <span className="text-[18px]">Watch our video</span>{" "}
            </div>

          </div>

          <div className="text-white max-w-full lg:max-w-[264px] l flex flex-col gap-4 mb-[36px] xl:mb-0">
            <p className="!text-[22px] font-normal  tracking-[0.44px] ">
              We Deliver
            </p>
            <p className=" text-[#B0B3BF] !text-[18px]  lg:!text-[16px] leading-[160%]">
              {props.deliver}
            </p>
          </div>

          <div className="text-white max-w-full lg:max-w-[264px] flex flex-col gap-4">
            <p className="!text-[22px] font-normal  tracking-[0.44px] ">
              We Ensure
            </p>
            <p className=" text-[#B0B3BF] !text-[18px]  lg:!text-[16px] leading-[160%]">
              {props.ensure}
            </p>
          </div>

          <div className="md:hidden w-full pt-10">
            <a
              className="btn btn-secondary w-full py-[14px] !text-[14px]"
              href="about-us"
            >
              KNOW MORE ABOUT US
            </a>
          </div>
        </div>
      </div>
      <div
        className={`fixed z-50 overflow-y-auto top-0 w-full h-full left-0 ${
          showModal ? "show" : "hidden"
        }`}
      >
        <div className={"flex w-full h-full justify-center items-center bg-[#00000069]"}>
          <div className={"max-w-[754px] w-full relative "}>
          <button className={`w-10 h-10 absolute right-0 top-0 bg-white font-bold text-black z-10 flex justify-center items-center  `} onClick={()=>handleClose()}> <MdClose size={24}/>   </button>

            <figure className="popupVideo">
              <video
                src="/images/popupVideo.mp4"
                loop
                autoPlay
                muted
                controls
              ></video>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeWhoWeCare;
