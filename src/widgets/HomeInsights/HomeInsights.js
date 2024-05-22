import Image from "next/image";
import Link from "next/link";
import React from "react";

const HomeInsights = (props) => {
  return (
    <section className=" py-[50px]  xl:py-[158px] bg-[#fff]">
      <div className="container">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-2/6 w-full">
            <h2 className=" max-w-[286px]  lg:max-w-[545px] leading-[110%] xl:leading-[120px] mb-[32px] lg:mb-[60px] font-medium tracking-[-0.8px] lg:tracking-[-2px] !text-[40px] lg:!text-[60px] xl:!text-[100px] ">
              Latest From <i className="font-serief font-normal"> Insights</i>
            </h2>

            <Link
              href="https://www.google.com" target={"_blank"}
              className="btn btn-secondary tracking-[1.12px] leading-[17px] !text-[14px] font-medium px-[34px] py-[17px] !hidden lg:!inline-block transition-all !duration-[400ms]"
            >
              EXPLORE INSIGHTS
            </Link>
          </div>

          <div className="lg:w-4/6 w-full pl-0  lg:pl-[9px]   ">

            {props.data.map((insight,key)=>{  return(

                
            <Link href="https://www.google.com" target={"_blank"} key={key} className="group flex flex-col lg:flex-row gap-[17px] lg:gap-[62px] first:pt-0 lg:first:pt-[39px] pt-[32px] lg:pt-[39px] pb-[39px] border-b border-b-[#E1E1E1] first:border-t-[0px] lg:first:border-t first:border-t-[#E1E1E1]  ">
            <div className="lg:max-w-[307px] max-w-full w-full">
              <figure className="insightImg overflow-hidden">
                <Image src={insight.imgURL} className={'group-hover:scale-[1.08] transition-all !duration-[400ms]'} alt="insight" fill  quality={80} sizes="(max-width: 768px) 100vw, 20vw"	/>
              </figure>
            </div>

            <div className="flex flex-col justify-between items-start pt-[14px] flex-1">
              <span className="uppercase text-[#74899D] text-[12px] lg:text-[14px] tracking-[0.24px] lg:tracking-[0.28px] font-medium mb-[16px] lg:mb-0">
                {insight.blog}
              </span>

              <p className="!text-[20px] lg:!text-[16px] xl:!text-[24px] font-normal ttl leading-normal text-[#000000]  mb-[24px] lg:mb-0 line-clamp-2 line">
          {insight.title}
              </p>

              <div className=" group-hover:bg-secondary group-hover:text-white  py-[5px] px-[12px] lg:px-[19px] text-[14px]  xl:text-[18px] leading-normal rounded-[78px] border-[1px] border-[#D9D9D9] font-normal text-[#000] flex items-center justify-center transition-all !duration-[400ms]">
                {insight.btnttl}
              </div>
            </div>
          </Link>




            ) })}







          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeInsights;
