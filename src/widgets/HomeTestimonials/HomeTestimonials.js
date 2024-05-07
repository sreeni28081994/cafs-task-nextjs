"use client";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/pagination"; // Import pagination CSS
import { useLenis } from "@studio-freight/react-lenis";
import { MdClose } from 'react-icons/md';





// import required modules
import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
  FreeMode,
  Thumbs,
} from "swiper/modules";
import Image from "next/image";

const HomeTestimonials = (props) => {


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
  }, [showModal]);






  const swiperref = useRef(null);



  useEffect(() => {
    // // Get the delay value from the swiper
    const delay = swiperref?.current?.swiper?.params?.autoplay?.delay || 0;
  }, []);

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>


      <section className="xl:py-[126px] py-[50px] bg-[#FAFAFA]">

      <div
        className={`fixed z-50 overflow-y-auto top-0 w-full h-full left-0 ${
          showModal ? "show" : "hidden"
        }`}
        id="modal"
      >
        <div className={"flex w-full h-full justify-center items-center bg-[#00000069] "}>
          <div className={"max-w-[754px] w-full relative"}>
          <button className={`w-10 h-10 absolute right-0 top-0 bg-white font-bold text-black z-10 flex justify-center items-center  `} onClick={()=>handleClose()}> <MdClose size={24}/>   </button>

            <figure className="popupVideo">
              <video
                src="/images/testimonialVideo.mp4"
                loop
                autoPlay
                muted
                controls
              ></video>
            </figure>
          </div>
        </div>
      </div>



        <div className="container relative">
          <h6 className=" !text-[18px] font-medium mb-8 text-[#000]">
            Our Happy Customers
          </h6>

          <div className="flex flex-col lg:flex-row w-full">
            <div className={"w-full  lg:w-4/12"}>
              <Swiper
                cssMode={true}
                loop={true}
                autoplay={{
                  delay: 3500,
                  disableOnInteraction: false,
                }}
                navigation={{
                  prevEl: ".btn-prev",
                  nextEl: ".btn-next",
                  disabledClass: "opacity-50",
                }}
                thumbs={{ swiper: thumbsSwiper }}
                mousewheel={true}
                keyboard={true}
                modules={[
                  Navigation,
                  Mousewheel,
                  Keyboard,
                  Autoplay,
                  FreeMode,
                  Thumbs,
                ]}
                ref={swiperref}
                className="testimonialSwiper"
              >
                {props.data.map((slide, key) => {
                  return (
                    <SwiperSlide key={key}>
                      <div className="flex flex-col lg:flex-row relative  ">
                        <div className="w-full ">
                          <div className=" max-w-full lg:max-w-[343px] w-full">
                          <div className={`relative ${slide.isVideo ? "cursor-pointer" : ''}`} onClick={slide.isVideo ? handleclick : null}>
                              <figure className="testimonialimg ">
                                <Image
                                  src={slide.imgURL}
                                  fill
                                  alt="testimonial"
                                />
                              </figure>

                              <div className="absolute bottom-0 left-0 h-[2.62px] transition-all progress bg-[#000000]"></div>
                            </div>

                            <h4 className=" !text-[24px] lg:!text-[28px] font-normal tracking-[0.48px] lg:tracking-[0.56px] leading-normal font-serief mt-[22px] lg:mt-10">
                              {" "}
                              <i> {slide.name}</i>
                            </h4>
                            <p className="!text-[14px] tracking-[0.28px] text-[#000] mt-[12px] lg:mt-[3px]">
                              {slide.position}
                            </p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>

            <div className={"w-full  lg:w-8/12 "}>
              <Swiper
                cssMode={true}
                onSwiper={setThumbsSwiper}
                freeMode={true}
                loop={true}
                autoplay={{
                  delay: 3500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,

                  el: ".bullet",
                  renderBullet: function (index, className) {
                    return (
                      `<span className="bg-[#000000] w-2 h-2 rounded-full inline-block ${className}"></span>`
                    );
                  },
                  bulletActiveClass: "!opacity-100",

                }}
                mousewheel={true}
                keyboard={true}
                modules={[
                  Navigation,
                  Pagination,
                  Mousewheel,
                  Keyboard,
                  Autoplay,
                  FreeMode,
                  Thumbs,
                ]}
                className="testimonialSwiper h-full"
              >
                <div className="wrap flex items-end w-full left-0 bottom-0  justify-between static mt-[18px] lg:mt-0   lg:absolute px-0 lg:px-[42px] z-20">
                  <div className=" bullet flex gap-6"></div>

                  <div className={"lg:flex gap-[18.5px]  hidden  "}>
                    <button className="btn-prev transition-all duration-300 group">
                      <svg
                        width="86"
                        height="51"
                        viewBox="0 0 86 51"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="1.21875"
                          y="1.17188"
                          width="83.1562"
                          height="48.5"
                          rx="24.25"
                          stroke="black"
                          strokeWidth="1.5"
                        />

                        <g className="group-hover:-translate-x-1 transition-all duration-300">
                          <path
                            d="M58.9219 25.4219L26.6719 25.4219"
                            stroke="black"
                            strokeWidth="1.5"
                            strokeLinecap="square"
                          />
                          <path
                            d="M33.3906 18.3906V20.0469C33.3906 23.0154 30.9842 25.4219 28.0156 25.4219H26.6719"
                            stroke="black"
                            strokeWidth="1.5"
                            strokeLinecap="square"
                          />
                          <path
                            d="M33.3906 32.4531V30.7969C33.3906 27.8283 30.9842 25.4219 28.0156 25.4219H26.6719"
                            stroke="black"
                            strokeWidth="1.5"
                            strokeLinecap="square"
                          />
                        </g>
                      </svg>
                    </button>

                    <button className={"btn-next group"}>
                      <svg
                        width="86"
                        height="51"
                        viewBox="0 0 86 51"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="84.5313"
                          y="49.6328"
                          width="83.1562"
                          height="48.5"
                          rx="24.25"
                          transform="rotate(-180 84.5313 49.6328)"
                          stroke="black"
                          strokeWidth="1.5"
                        />
                        <g className="group-hover:translate-x-1 transition-all duration-300">
                          <path
                            d="M26.8281 25.3828L59.0781 25.3828"
                            stroke="black"
                            strokeWidth="1.5"
                            strokeLinecap="square"
                          />
                          <path
                            d="M52.3594 32.4141L52.3594 30.7578C52.3594 27.7893 54.7658 25.3828 57.7344 25.3828L59.0781 25.3828"
                            stroke="black"
                            strokeWidth="1.5"
                            strokeLinecap="square"
                          />
                          <path
                            d="M52.3594 18.3516L52.3594 20.0078C52.3594 22.9763 54.7658 25.3828 57.7344 25.3828L59.0781 25.3828"
                            stroke="black"
                            strokeWidth="1.5"
                            strokeLinecap="square"
                          />
                        </g>
                      </svg>
                    </button>
                  </div>
                </div>

                {props.data.map((slide, key) => {
                  return (
                    <SwiperSlide key={key}>
                      <div className="flex flex-col h-full  px-0 lg:px-[42px]   ">
                        <div className="w-full    relative ">
                          <p className=" !text-[20px] lg:!text-[26px]   xxl:!text-[32px] para leading-[140%] xxl:leading-[48px] pt-[32px] lg:pt-0">
                            {slide.message}
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeTestimonials;
