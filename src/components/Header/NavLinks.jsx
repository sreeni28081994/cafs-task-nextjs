"use client";

import React, { useState } from "react";
import headerNavLinks from "@/api/staticData/headerNavLinks";
import Link from "next/link";
import Image from "next/image";

const NavLinks = () => {
  const [showMenu, setMenu] = useState(null);
  const [content, setContent] = useState(0);

  const showMenuHandler = (key) => {
    if (key === 1 ) { // Assuming "Services" is at index 1
      setMenu(true);
      document.querySelector(".header").classList.add("menu-active");
    }


  };

  const hideMenuHandler = () => {
    setTimeout(() => {
      if (!document.querySelector(".megamenu:hover") && !document.querySelector(".services:hover")) {
        setMenu(null);
        document.querySelector(".header").classList.remove("menu-active");
      }
    }, 100);
  };

  const showContent = (key) => {
    setContent(key);
  };

  const handleHover = (index) => {
    console.log(index, "index hover");
  };

  return (
    <>
      <ul className={"flex"}>
        {headerNavLinks?.links?.map((link, key) => (
          <li
            key={key}
            onMouseEnter={() => showMenuHandler(key)}
            onMouseLeave={hideMenuHandler}
            className={`hidden xl:block font-medium cursor-pointer text-white text-[14px] tracking-[1.12px] py-3 px-5 navitem hover:text-secondary transition-colors duration-300 relative ${key === 1 ? "services before:content-[''] before:w-full before:h-[140%] before:absolute before:left-0" : ""}`}
          >
            <Link href={link.href} className=" " id={link.id}>
              {link.title}
            </Link>
            {link?.submenu?.length > 0 && showMenu && (
              <div
                className={"megamenu w-screen min-h-[336px] bg-[#fff] fixed top-[84px] left-0 py-[86px] box-shadow cursor-default"}
                onMouseEnter={() => setMenu(true)}
                onMouseLeave={hideMenuHandler}
              >
                <div className="container">
                  <div className="menu-wrapper flex">
                    <div className={"w-2/6 border-r-[#E9E9E9] border-r-[1px]"}>
                      <ul className={'fade-up'}>
                        {link.submenu.map((items, index) => (
                          <li
                            key={index}
                            onMouseEnter={() => showContent(index)}
                            className={`text-[28px] ${content === index ? 'text-secondary' : 'text-[#000]'} hover:text-secondary font-sans pb-7 leading-normal transition-colors duration-300`}
                          >
                            <Link
                              href={items.href || "/"}
                              onMouseEnter={() => handleHover(index)}
                            >
                              {items.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className={"w-4/6 ml-[90px]"}>
                      <div>
                        {link.submenu.map((items, index) => (
                          index === content && (
                            <div className="flex justify-between fade-up" key={index}>
                              <div className={"max-w-[367px] flex flex-col gap-5"}>
                                <h5 className={'!text-[22px] tracking-[0.1px] text-[#000000] transition-colors duration-300'}>{items.title}</h5>
                                <p className={'!text-[14px] leading-[21px] font-sans text-[#666] font-normal tracking-[0.01px]'}>{items.content}</p>
                                <Link href="#" className={'!text-[14px] font-sans font-medium transition-colors duration-300 tracking-[0.28px] text-[#000] hover:text-secondary'}>KNOW MORE</Link>
                              </div>
                              <div className={"w-[321px]"}>
                                <figure className={"menuimg"}>
                                  <Image src={items.imgURL} alt={"img"} fill quality={80} sizes="(max-width: 991px) 30vw, 20vw"></Image>
                                </figure>
                              </div>
                            </div>
                          )
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
      <Link
        href={`/`}
        className="hidden xl:block navBtn text-white text-[14px] leading-[17px] font-medium py-[16px] px-[25px] border border-[#fff] ml-4 hover:bg-[#fff] hover:text-[#000] relative hover:border-[transparent] transition-[0.3s] ease-linear"
      >
        {headerNavLinks?.btn?.title}
      </Link>
    </>
  );
};

export default NavLinks;
