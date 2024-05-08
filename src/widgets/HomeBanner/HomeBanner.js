import React from "react";
import parse from 'html-react-parser';

const HomeBanner = (props) => {

  return (
    <section data-widget="HomeBanner" className="bg-black relative h-[100vh]">

      <div className='absolute content-[" "] z-10 left-0 bottom-0 w-full h-full bg-gradient-to-t from-[#000] from-[5%] via-transparent to-[100%]  '>

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
          <h1 className=" !text-[65px] sm:!text-[85px]  lg:!text-[120px]   xxxl:!text-[200px] font-medium  font-sans max-w-[1020px] leading-[101%] xl:leading-[105%] text-white tracking-[-1.3px]  xl:tracking-[-4px] ">
       

            {parse(props?.data?.title)}
          </h1>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
