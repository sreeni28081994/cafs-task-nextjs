"use client";

import React, { useRef } from "react";
import CardComponent from "@/components/CardCompoment";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
gsap.registerPlugin(ScrollTrigger);

const HomeFeatures = (props) => {

    const boxWrapRef = useRef(null);
    const containerRef = useRef(null);

  useGSAP(
    (self) => {
      // gsap code here...

      const boxes = boxWrapRef?.current;
      const container =containerRef?.current;

      const mediaQuery = window.matchMedia("(min-width: 1200px)");
      if (mediaQuery.matches) {

        const containerWidth = container.offsetWidth;
        const amounttoScroll = boxes.offsetWidth - containerWidth;

        const tween = gsap.to(boxes, {
          x: -amounttoScroll + "px",
          duration: 5,
          ease: "linear",
        });

        ScrollTrigger.create({
          trigger: ".pinsection",
          start: "5% 10%",
          end: "+=" + amounttoScroll,
          pin: ".pinsection",
          scrub: true,
          // markers: true,
          animation: tween,
          invalidateOnRefresh: true, // Invalidate on refresh to recalculate end value
        });
      }
    },
    { dependencies : [boxWrapRef?.current, containerRef?.current], scope:containerRef?.current }
  );

  return (
    <section className="bg-[#EEF5F9] xl:pt-[128px] py-[50px] xl:py-[114px] overflow-x-hidden featuresection">
      <div className="pinsection">
        <div className="container containerWidth" ref={containerRef}>
          <p className="!text-[16px] font-medium !xl-text-[18px]  tracking-[0.36px] leading-[110%] xl:leading-normal text-[#000]">
            What make us different
          </p>

          <div className="flex mt-[22px] items-end justify-between flex-col xl:flex-row">
            <div className=" w-full  xl:w-2/3 ">
              <h2 className="font-normal leading-[110%] tracking-[0px] xl:tracking-[-2px] !text-[40px] xl:text-[60px] xxl:!text-[100px]">
                Sculpting a Legacy in{" "}
                <i className="font-serief">Fine Catering</i>
              </h2>
            </div>

            <div className=" xxl:py-[24px] xxl:px-[18px] hidden xl:inline-block">
              <Link
                href="https://www.google.com"
                target={"_blank"}
                className="btn btn-secondary  leading-[17px] tracking-[1.12px] font-medium !text-[14px] px-[12px] py-[24px] w-[184px] h-[59px] !flex items-center justify-center"
              >
                EXPLORE
              </Link>
            </div>
          </div>

          <div className={"flex xl:ps-1.5 w-full "}>
            <div className="flex flex-wrap flex-1 xl:flex-nowrap  w-full xl:w-auto gap-y-8 mt-[34px] xl:mt-[60px] boxes lg:-mx-4 " ref={boxWrapRef}>
              {props.data.map((datas, index) => {
                return <CardComponent number={datas} key={index} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeFeatures;
