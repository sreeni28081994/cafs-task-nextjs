"use client";
import Image from "next/image";
import React, { useState,useEffect } from "react";
import NavLinks from "./NavLinks";
import MobileNav from "./MobileNav";
import Link from "next/link";
// import Style from "./Header.module.scss";
const MainHeader = () => {

   const [state, setstate] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 10) {
        setstate(true)
      } else {
      setstate(false)
      }
    });
  }, []);

  return (

    
    <header


      className={`header bg-transparent fixed top-0 left-0 w-full z-40 ${state==true ? 'active' : "" } `}   
    >
      <div className="container m-auto px-4">
        <div className="flex items-center justify-between py-4  ">
          <div className="logo text-white">

            <Link href='#' className="wrap max-w-[96.523px] w-full ">

              

              <figure className='logoImg w-[96.523px] '>
              <Image src={'/images/CAFS.svg'} width={100} height={29} alt={'CAFS'} loading={"eager"}/>


              </figure>

            </Link>


          </div>
          <div className="flex items-center leading-5 ">
            <NavLinks />
          </div>

          <MobileNav />

        </div>
      </div>
    </header>
  );
};

export default MainHeader;
