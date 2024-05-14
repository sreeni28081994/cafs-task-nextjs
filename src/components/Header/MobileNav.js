"use client";

import { useState } from "react";
import Link from "next/link";
import headerNavLinks from "src/api/staticData/headerNavLinks";
import Style from "./Header.module.scss";
import Image from "next/image";
const MobileNav = () => {
  const [navShow, setNavShow] = useState(false);

  const onToggleNav = () => {
    setNavShow((status) => {
      if (status) {
        document.body.style.overflow = "auto";
      } else {
        // Prevent scrolling
        document.body.style.overflow = "hidden";
      }
      return !status;
    });
  };

  return (
    <>
      <button
        aria-label="Toggle Menu"
        onClick={onToggleNav}
        className={`xl:hidden ${Style.mobMenuBtn} anim_header`}
      >



<svg className={'svg'} width="38" height="15" viewBox="0 0 38 15" fill="#fff" xmlns="http://www.w3.org/2000/svg"><line x1="0.328125" y1="1.01025" x2="37.7346" y2="1.01025" stroke="#fff" strokeWidth="1.5"></line><line x1="0.328125" y1="13.8984" x2="37.7346" y2="13.8984" stroke="#fff" strokeWidth="1.5"></line></svg>

      </button>
      <div
        className={`fixed left-0 top-0 z-50 h-full w-full transform opacity-100 dark:opacity-[0.98] bg-white duration-300 ease-in-out dark:bg-gray-950 ${
          navShow ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className=" flex justify-between px-4 pr-1 py-5 bg-white">

          <div>
            <figure>
              <Image src="/images/logo-sm.svg" width={100} height={29} alt="logo" />
            </figure>
          </div>


          <button
            className="  h-8 w-8"
            aria-label="Toggle Menu"
            onClick={onToggleNav}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="text-gray-900 dark:text-gray-100"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        
      <div className={'flex flex-col justify-between fixed overflow-y-scroll bg-white  w-full '} style={{ height: 'calc(100vh - 72px)' }}>

        
      <nav className="">
          {headerNavLinks?.links?.map((link) => (
            <div key={link.title} className="py-[30px] border-b-[1px] border-b-[#D9D9D9] mx-4">
              <Link
                href={link.href}
                className=" text-[20px] font-medium tracking-widest text-gray-900 dark:text-gray-100"
                onClick={onToggleNav}
              >
                {link.title}
              </Link>
               </div>








          ))}


        </nav>


        <div className="mt-auto py-5 flex justify-center px-4">

<Link href={headerNavLinks?.btn?.url} className=" flex justify-center bg-[#000000] w-full text-white text-[14px] leading-[17px]  font-medium  py-[16px] px-[25px] border border-[#fff]  hover:bg-[#fff] hover:text-[#000]  hover:border-[#000000]  transition-[0.3s] ease-linear">  {headerNavLinks?.btn?.title}</Link>  




</div>


      </div>



      </div>
    </>
  );
};

export default MobileNav;
