import React from 'react'
import headerNavLinks from "@/api/staticData/headerNavLinks";
import Link from "next/link";

const NavLinks = () => {
    return (
        <>
            {headerNavLinks?.links?.map((link) => (
                <Link
                    key={link.title}
                    href={link.href}
                    className="hidden xl:block font-medium text-white text-[14px] tracking-[1.12px]  py-3 px-5 navitem hover:text-secondary transition-colors duration-300 "
                >
                      {link.title}
                </Link>
            ))}

          <Link href={headerNavLinks?.btn?.url} className=" hidden xl:block navBtn text-white text-[14px] leading-[17px]  font-medium  py-[16px] px-[25px] border border-[#fff] ml-4 hover:bg-[#fff] hover:text-[#000]  hover:border-[transparent]  transition-[0.3s] ease-linear">  {headerNavLinks?.btn?.title}</Link>  




        </>
    )
}

export default NavLinks