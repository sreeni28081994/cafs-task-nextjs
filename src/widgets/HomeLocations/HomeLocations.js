"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const HomeLocations = (props) => {
  const [value, setvalue] = useState(0);

  function mouseEnter(index) {
    setvalue(index);

  }

  function scrollTop(){

    // Assuming you have a reference to the element
var element = document.getElementById('movetoTop');

// Get the bounding rectangle of the element
var rect = element.getBoundingClientRect();

// Get the top value
  var topValue = rect.top + window.scrollY;



    window.scrollTo({ top: topValue, behavior: "smooth" });
  }


  return (
    <section className="bg-[#131316]  pt-[50px] lg:pt-[130px] pb-[50px] lg:pb-[150px]  relative overflow-hidden " id={'movetoTop'}>
      <div className="absolute top-0 right-0 w-full xl:max-w-[750px] xxl:max-w-[735px]  xxxl:max-w-[880px] hidden xl:block">
        <div className="w-full h-full">
          <figure className='aspect-square relative'>
            <Image src="/images/map.jpg" alt="map" className='h-full' fill/>
          </figure>
        </div>

        <div className='absolute w-full h-full left-0 top-0 bottom-0'>


        {props.data.map((place, index) => {
          return (
       
              <div
                className="absolute w-[32px] h-[32px] cursor-pointer" key={index}
                style={{
                  top: `${place?.cordinate?.y}`,
                  left: `${place?.cordinate?.x}`,
                }}
              >
                <div className="max-w-[32.497px]   flex " onMouseEnter={() => mouseEnter(index)}
>
                  <figure className="starImg w-full">
                    <Image src="/images/star.svg" fill alt="star" />
                  </figure>
                </div>

                <div
                  className={`text-white tracking-[0.44px] !text-[22px]   z-30 absolute  translate-x-[-50%] ${place.isTop ? `bottom-[100%]` : `top-[100%]`}   `}
                  key={index}
                >
                  {index == value ? (
                    <div className="flex h-[86px] gap-[19px] bg-[#3B3B3B] relative z-20  ">
                      <div className="max-w-[86px]">
                        <figure className="aspect-square relative w-[86px]">
                          <Image
                            src={place.imgURL}
                            alt="img"
                            className="h-full object-cover"
                            fill
                          />
                        </figure>
                      </div>
                      <div className="flex flex-col justify-center min-w-[200px]">
                        <p className="!text-[18px] tracking-[0.36px] font-normal text-[#fff] leading-normal">
                          {place.location}
                        </p>
                        <Link
                          href="https://www.google.com" target={"_blank"}
                          className="text-[14px] leading-normal tracking-[0.28px] font-medium text-[#45B5F0]"
                        >
                          <u> {place.link.title}</u> 
                        </Link>
                      </div>
                    </div>
                  ) : (
                    <div className="hidden"> {place.location} </div>
                  )}
                </div>
              </div>
         
          );
        })}







        </div>

      </div>

      <div className="container">
        <div>
          <p className="text-white !text-[16px] xl:!text-[18px] tracking-[0.32px] xl:tracking-[0.36px] font-normal leading-normal">
            Our Locations
          </p>

          <div className="flex flex-col mt-[22px]">
            <div className=" max-w-[445px] lg:max-w-[550px] xl:max-w-[445px]  xxxl:max-w-[705px]">
              <h2 className=" leading-[110%] xl:leading-[90px]  xxxl:leading-[120px] !text-[40px] lg:!text-[60px]  xxxl:!text-[100px] text-white tracking-[-0.8px] lg:tracking-[-2px]  ">
                Based in India,   
                <i className="font-serief"> Serving the Globe</i>
              </h2>
            </div>

            <div className="mt-[48px] flex flex-wrap gap-[12px] lg:!gap-x-[14px] lg:!gap-y-[18px] max-w-full xl:max-w-[555px] ">
              {props.data.map((place, index) => (
                <button
                  className={`placebtn   text-white  hover:bg-[#3f3f3f] rounded-[78px] tracking-[0.44px] !text-[18px] lg:!text-[22px] py-[10px] px-[24px] border-[1px] border-[#3F3F3F]  ${index == value ? "bg-[#45B5F0]" :"" }`}
                  key={index} onClick={scrollTop}
                  onMouseUpCapture={() => mouseEnter(index)}
                >
                  {place.location}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeLocations;
