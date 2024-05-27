"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import NavLinks from "./NavLinks";
import MobileNav from "./MobileNav";
import Link from "next/link";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const MainHeader = () => {
  const outerSection = useRef(null);
  const [isMenuActive, setIsMenuActive] = useState(false);
  useGSAP(
    (self) => {
      const header = self?.selector(".anim_header");

      const tl1 = gsap.timeline();
      tl1.to(header, { marginTop: 0, opacity: 1, duration: 0.6, delay: 0.1 });
    },
    { scope: outerSection }
  );
  const [state, setstate] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window?.scrollY > 50  && !document.querySelector(".services:hover") &&  !document.querySelector(".megamenu:hover")  )   {
        setstate(true);
      } else {
        setstate(false);
      }
    });
  }, []);

  return (
    <header
      ref={outerSection}
      className={`header bg-transparent fixed top-0 left-0 w-full z-40 
      ${ state == true ? "active " : " " }
      ${isMenuActive ? "menu-active" : ""}
       `}
    >

      <div className="container m-auto px-4">
        <div className="flex items-center justify-between py-4  ">
          <div className="logo text-white anim_header ">
            <Link href="/" className="wrap max-w-[96.523px] w-full ">
              <figure className="logoImg w-[96.523px] ">
                <Image
                  src={"/images/CAFS.svg"}
                  width={100}
                  height={29}
                  alt={"CAFS"}
                  loading={"eager"}
                />
              </figure>
            </Link>
          </div>

          <div className="flex items-center leading-5  anim_header ">
            <NavLinks setIsMenuActive={setIsMenuActive}/>
          </div>



          <MobileNav  />
        </div>
      </div>
    </header>
  );
};

export default MainHeader;

