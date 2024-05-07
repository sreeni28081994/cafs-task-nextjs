"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const HomeServe = (props) => {
  const pinSection = useRef(null);

  useGSAP(
    (self) => {
      const mediaQuery = window.matchMedia("(min-width: 992px)");
      if (mediaQuery.matches) {
        let left_c = self.selector(".left-inner");
        let img = self.selector(".photo");
        let inner_div = self.selector(".innerdiv");
        let inner_divbase = self.selector(".innerdiv_base");

        gsap.set(inner_divbase, {
          opacity: 0,
        });

 

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: pinSection?.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 3,
            // markers: true,
            onLeave: () =>
              gsap.to([inner_div, inner_divbase], {
                opacity: 0,
                duration: 0.3,
              }),

            onEnter: () =>
              gsap.to([inner_div, inner_divbase], {
                opacity: 1,
                duration: 0.3,
              }),
            onEnterBack: () =>
              gsap.to([inner_div, inner_divbase], {
                opacity: 1,
                duration: 0.3,
              }),

            onLeaveBack: () =>
              gsap.to([inner_div, inner_divbase], {
                opacity: 0,
                duration: 0.3,
              }),
          },
        });

        tl.to(inner_div, {
          height: "100%",
        });

        img.forEach((element, i) => {
          if (i > 1) {
            gsap.set(element, {
              opacity: 0,
              scale:1.05
            });
          }
        });

        const Animate = (i) => {
          gsap.to(img[i - 1], {
            opacity: 1,
            scale:1,
            zIndex: i,
            duration: 0,
            ease:"linear"
          });
        };

        const revAnimate = (i) => {
          gsap.to(img[i - 1], {
            opacity: 0,
            scale:1.05,
            zIndex: i,
            duration: 0,
            ease:"linear"

          });
        };

        gsap.set(".photo:not(:first-child)", { opacity: 0 });

        left_c.forEach((element, i) => {
          ScrollTrigger.create({
            trigger: element,
            start: "top bottom",
            end: "bottom bottom",
            // markers: true,
            onEnter: () => Animate(i),
            onLeaveBack: () => revAnimate(i),
          });
        });
      }
    },
    { scope: pinSection }
  );

  return (
    <section className="    container relative base   " ref={pinSection}>
      <div
        className={
          "w-[3.15px] h-[114.36px] hidden xl:block fixed top-[50%] right-3 z-40 bg-[#DEDEDE] innerdiv_base "
        }
      >
        <div className={"w-full bg-[#000000] innerdiv"}></div>
      </div>

      <div className="servesection py-[50px] xl:py-[139px] ">
        <div className="flex justify-center lg:justify-between gap-0 lg:gap-[45px]">
          <div className="first leftcontent w-full lg:w-2/4">
            {props.data.map((serve, key) => {
              return (
                <div
                  className="flex  flex-col justify-center   pt-[0px] lg:h-[100vh] mb-[50px] last:mb-0 xl:mb-0 "
                  key={key}
                >
                  {serve.Serve ? (
                    <p className="!text-[18px] tracking-[0.36px] text-[#000] mb-5 ">
                      {" "}
                      We serve
                    </p>
                  ) : (
                    ""
                  )}

                  <div className="mb-8 lg:mb-10 left-inner">
                    <h2 className="leading-[110%]  xl:leading-[106%] font-medium tracking-[0] xl:tracking-[-2px] !text-[40px] lg:!text-[55px] xl:!text-[85px] xxl:!text-[100px]">
                      {serve.title1} <br className="hidden xl:block" />
                      <i className="font-serief font-normal tracking-[0px]">
                        {serve.title1_}
                      </i>
                    </h2>
                  </div>

                  <div className="relative  w-full    block lg:hidden  overflow-hidden ">
                    <figure className=" relative lg:absolute  left-0 top-0  serveFigure transition-all duration-300 opacity-100   ">
                      <Image
                        src={serve.imgURL}
                        alt="serveImg"
                        className="w-full h-full object-cover"
                        fill
                      />
                    </figure>
                  </div>

                  <div className="max-w-[530px] mt-[34px] lg:mt-0">
                    <p className="  !text-[16px]   xl:!text-[20px] leading-[150%]">
                      {serve.serveContent1}
                    </p>
                    <Link
                      href="https://www.google.com" target={"_blank"}
                      className="btn btn-outline-dark w-full sm:w-max mt-[30px] xl:mt-[43px] !text-[14px] font-medium leading-[17px] tracking-[1.12px] inline-block px-[34px] py-[17px] "
                    >
                      LEARN MORE
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="rightblock hidden lg:flex static lg:sticky h-[calc(100vh_-_160px)] top-[120px] items-center overflow-hidden   w-full lg:w-2/4">
            <div className="relative w-[637px] overflow-hidden">
              <figure className="serveFigure transition-all duration-300   ">
                <Image
                  src="/images/serveImg.jpg"
                  alt="serveImg"
                  className="w-full h-full object-cover"
                  fill
                />
              </figure>
              <figure className="relative lg:absolute  left-0 top-0 photo w-full h-full serveFigure transition-all duration-300    ">
                <Image
                  src="/images/serveimg2.jpg"
                  alt="serveImg"
                  className="w-full h-full object-cover"
                  fill
                />
              </figure>
              <figure className="relative lg:absolute  left-0 top-0 photo w-full h-full serveFigure transition-all duration-300 ">
                <Image
                  src="/images/serveimg3.jpg"
                  alt="serveImg"
                  className="w-full h-full object-cover"
                  fill
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeServe;
