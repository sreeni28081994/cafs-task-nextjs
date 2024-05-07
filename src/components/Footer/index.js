"use client";

import React from "react";
import { Accordion } from "flowbite-react";

import FooterNavLinks from "@/api/staticData/FooterNavLinks";
import Link from "next/link";
import Image from "next/image";
const Footer = (props) => {

  
  return (
    <footer className="bg-[#25272A] text-white pt-[62px] lg:pt-[133px] overflow-x-hidden">
      <div className="container">
        <div className="flex flex-col lg:flex-row justify-between pb-[35px] lg:pb-[87px] border-b border-[#e0e0e01a] ">
          <div className=" pt-0 lg:pt-[22px] mb-[32px] lg:mb-0 ">
            <p className="  !text-[48px] lg:!text-[60px] leading-[82.26px] tracking-[1.1px]  text-transparent bg-clip-text  bg-gradient-to-r from-white to-secondary [&>i]:tracking-[0.96px] lg:[&>i]:tracking-[1.2px] [&>i>u]:bg-gradient-to-r [&>i>u]:from-[#D0ECFB] [&>i>u]:to-[#8CD1F6] lg:[&>br]:hidden  ">
              <i className="    mr-[16px] leading-[82.26px]  font-serief">
                <u className=' relative bg-clip-text after:content-[" "] after:absolute after:left-0 after:bottom-0 after:w-full after:h-1 after:bg-[image:inherit]'>
                  {" "}
                  Connect
                </u>
              </i>
              with us
            </p>
          </div>

          <div className="  lg:max-w-[414px] w-full">
            <h5 className="!text-[18px]  lg:!text-[20px]  ttl tracking-[0.36px] lg:tracking-[0.4px] text-white font-serief mb-5 font-normal">
              Newsletter Subscription
            </h5>

            <div className="relative h-[48px]    ">
              <input
                type="text"
                className="w-full px-[23px] py-[14px] h-full bg-[#D9D9D917] outline-none shadow-none pr-[125px] focus:[box-shadow:none] border-none "
                placeholder="Email Address"
              />

              {/* <input class="w-full bg-[#D9D9D917] outline-none shadow-none px-5 lg:px-6 py-3 tracking-[-0.3px] leading-[1] " placeholder="Email Address" autocomplete="off" type="email" id="formBasicEmail" name="email" value=""/> */}

              <Link
                href=""
                className="btn absolute top-0 right-0 bg-secondary text-white h-full w-[114px] !text-[14px] font-medium tracking-[0.28px] !p-0 !flex justify-center items-center hover:bg-[#0ca2f0] "
              >
                SUBMIT
              </Link>
            </div>
          </div>
        </div>

        <div className="block lg:hidden text-white">
          <Accordion className={"border-none accordion-custom-arrow"}>
            <Accordion.Panel>
            <div className={`border-b border-[#e0e0e01a]`}>
              <Accordion.Title
               
                theme={{
                  heading: "text-[#fff] !text-[20px] tracking-[0.44px] font-serief",
                  base:" text-start w-full relative after:transition-transform before:transition-transform after:w-5 after:h-0.5 after:absolute after:top-2/4 after:-translate-y-[2/4] after:bg-secondary before:w-5 before:h-0.5 before:absolute before:top-2/4 before:-translate-y-[2/4] before:bg-secondary before:rotate-[90deg] before:right-0 after:right-0",
                  open:{
                    on: "before:scale-x-0 ",
                    off :"before:scale-x-100 "
                  },
                  arrow:{
                    base :"hidden"
                  }
                }}
                className={" px-0 py-[26px] "}
              >
                {FooterNavLinks.quicklinks.title}
              </Accordion.Title>

              <Accordion.Content className={"px-0 py-0"}>
                {FooterNavLinks.quicklinks.links.map((quicklink, key) => (
                  <li
                    key={key}
                    className="text-[#fff] hover:text-[#fff] tracking-[0.36px] mb-[34px] list-none text-[18px] font-light"
                  >
                    <Link href="#"> {quicklink.title}</Link>
                  </li>
                ))}{" "}
              </Accordion.Content>
              </div>
            </Accordion.Panel>

            <Accordion.Panel >
            <div className={`border-b border-[#e0e0e01a]`}>
              <Accordion.Title
            theme={{
              heading: "text-[#fff] !text-[20px] tracking-[0.44px] font-serief",
              base:" text-start w-full relative after:transition-transform before:transition-transform after:w-5 after:h-0.5 after:absolute after:top-2/4 after:-translate-y-[2/4] after:bg-secondary before:w-5 before:h-0.5 before:absolute before:top-2/4 before:-translate-y-[2/4] before:bg-secondary before:rotate-[90deg] before:right-0 after:right-0",
              open:{
                on: "before:scale-x-0 ",
                off :"before:scale-x-100 "
              },
              arrow:{
                base :"hidden"
              }
            }}
                className={" px-0 py-[26px]"}
              >
                {FooterNavLinks.services.title}
              </Accordion.Title>
              <Accordion.Content className={"px-0 py-0"}>
                {FooterNavLinks.services.links.map((quicklink, key) => (
                  <li
                    key={key}
                    className="text-[#fff] hover:text-[#fff] tracking-[0.36px] mb-[34px] list-none text-[18px] font-light"
                  >
                    <Link href="#"> {quicklink.title}</Link>
                  </li>
                ))}{" "}
              </Accordion.Content>
                </div>
            </Accordion.Panel>

            <Accordion.Panel >
            <div className={`border-b border-[#e0e0e01a]`}>

              <Accordion.Title
            theme={{
              heading: "text-[#fff] !text-[20px] tracking-[0.44px] font-serief",
              base:" text-start w-full relative after:transition-transform before:transition-transform after:w-5 after:h-0.5 after:absolute after:top-2/4 after:-translate-y-[2/4] after:bg-secondary before:w-5 before:h-0.5 before:absolute before:top-2/4 before:-translate-y-[2/4] before:bg-secondary before:rotate-[90deg] before:right-0 after:right-0",
              open:{
                on: "before:scale-x-0 ",
                off :"before:scale-x-100 "
              },
              arrow:{
                base :"hidden"
              }
            }}
                className={" px-0  py-[26px] "}
              >
                {FooterNavLinks.locations.title}
              </Accordion.Title>
              <Accordion.Content className={"px-0 py-0"}>
                {FooterNavLinks.locations.links.map((quicklink, key) => (
                  <li
                    key={key}
                    className="text-[#fff] hover:text-[#fff] tracking-[0.36px] mb-[34px] list-none text-[18px] font-light"
                  >
                    <Link href="#"> {quicklink.title}</Link>
                  </li>
                ))}{" "}
              </Accordion.Content>

              </div>
            </Accordion.Panel>

            <Accordion.Panel>
            <div className={`border-b border-[#e0e0e01a]`}>

              <Accordion.Title
              theme={{
                heading: "text-[#fff] !text-[20px] tracking-[0.44px] font-serief",
                base:" text-start w-full relative after:transition-transform before:transition-transform after:w-5 after:h-0.5 after:absolute after:top-2/4 after:-translate-y-[2/4] after:bg-secondary before:w-5 before:h-0.5 before:absolute before:top-2/4 before:-translate-y-[2/4] before:bg-secondary before:rotate-[90deg] before:right-0 after:right-0",
                open:{
                  on: "before:scale-x-0 ",
                  off :"before:scale-x-100 "
                },
                arrow:{
                  base :"hidden"
                }
              }}
                className={" px-0  py-[26px] "}
              >
                {FooterNavLinks.others.title}
              </Accordion.Title>
              <Accordion.Content className={"px-0 py-0"}>
                {FooterNavLinks.others.links.map((quicklink, key) => (
                  <li
                    key={key}
                    className="text-[#fff] hover:text-[#fff] tracking-[0.36px] mb-[34px] list-none text-[18px] font-light"
                  >
                    <Link href="#"> {quicklink.title}</Link>
                  </li>
                ))}{" "}
              </Accordion.Content>
              </div>
            </Accordion.Panel>
          </Accordion>
        </div>

        <div className="lg:flex justify-between pt-[95px]  hidden ">
          <div className="flex justify-between lg:gap-[35px] xl:gap-[82px] ">
            <div>
              <p className="font-serief mb-7 !text-[20px]">Quick Links</p>

              <ul>
                {FooterNavLinks.quicklinks.links.map((quicklink, key) => (
                  <li
                    key={key}
                    className="text-[32px] font-light mb-[22px] leading-[100%] hover:text-[#C9C9C9]"
                  >
                    <Link href="styleguide"> {quicklink.title}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-[32px]">
              <div>
                <p className="font-serief !text-[20px] mb-7 ">Services</p>

                <ul>
                  {FooterNavLinks.services.links.map((service, key) => (
                    <li
                      key={key}
                      className="text-[#C9C9C9] hover:text-[#fff] tracking-[0.32px] mb-[13px]"
                    >
                      {" "}
                      <Link href="#">{service.title} </Link>{" "}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="font-serief !text-[20px] mb-7">Other</p>

                <ul>
                  {FooterNavLinks.others.links.map((other, key) => (
                    <li
                      key={key}
                      className="mb-[15px] text-[#C9C9C9] hover:text-[#fff]"
                    >
                      {" "}
                      <Link href="#"> {other.title}</Link>{" "}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <div className="ml-[31px]">
                <p className="font-serief !text-[20px] mb-7">Locations</p>

                <ul>
                  {FooterNavLinks.locations.links.map((location, key) => (
                    <li
                      key={key}
                      className="mb-[15px] text-[#C9C9C9] hover:text-[#fff]"
                    >
                      {" "}
                      <Link href="#">{location.title} </Link>{" "}
                    </li>
                  ))}

                  <li className="text-[#C9C9C9] hover:text-[#fff]">
                    <Link href="#">
                      {" "}
                      <u className="text-underline-offset">+3 More</u>
                    </Link>{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <div className="mr-[68px] pt-2">
              <p className="!text-[20px] mb-6">Connect with us</p>

              <div className="flex flex-col gap-[45px]">
                <div>
                  <span className="mb-[5px] inline-block text-[14px]">
                    Phone
                  </span>{" "}
                  <br />
                  <Link
                    href="tel:+911800123445"
                    className="tracking-[0.36px] text-[18px] hover:text-secondary"
                  >
                    +91 1800 1234 45
                  </Link>
                </div>

                <div>
                  <span className="mb-3 inline-block text-[14px]">
                    Write to us
                  </span>{" "}
                  <br></br>
                  <Link
                    href="mailto:info@cafs.in"
                    className="tracking-[0.36px] text-[18px] hover:text-secondary"
                  >
                    info@cafs.in
                  </Link>
                </div>

                <div>
                  <span className="mb-3 inline-block text-[14px]">
                    Follow us
                  </span>

                  <div className="flex gap-[36px]">
                    <Link href="#">
                      <figure>
                        <svg
                          width="10"
                          height="18"
                          viewBox="0 0 10 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="group"
                        >
                          <path
                            className="group-hover:fill-secondary"
                            d="M3.46648 9.82822V17.2972H6.78666V9.82751H9.26193L9.7329 6.73821H6.78666V4.73392C6.78666 3.88829 7.19743 3.06391 8.51687 3.06391H9.85755V0.433537C9.85755 0.433537 8.64081 0.224609 7.47931 0.224609C5.0522 0.224609 3.46648 1.70481 3.46648 4.38334V6.7375H0.769531V9.82822H3.46648Z"
                            fill="#D9D9D9"
                          />
                        </svg>
                      </figure>
                    </Link>
                    <Link href="#">
                      <figure>
                        <svg
                          width="20"
                          height="19"
                          viewBox="0 0 20 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="group"
                        >
                          <path
                            className="group-hover:fill-secondary"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M6.19986 0.173677C7.1694 0.129442 7.47844 0.119141 9.94714 0.119141C12.4165 0.119141 12.7249 0.130048 13.6938 0.173677C14.6616 0.217913 15.3233 0.372434 15.9014 0.596035C16.5076 0.824398 17.0569 1.18214 17.5108 1.64436C17.9732 2.09842 18.3309 2.64787 18.5591 3.2544C18.7839 3.8325 18.9378 4.4936 18.9821 5.46133C19.0263 6.43087 19.0366 6.73992 19.0366 9.20862C19.0366 11.6773 19.0263 11.9864 18.9821 12.9559C18.9378 13.9236 18.7839 14.5847 18.5597 15.1628C18.3314 15.7691 17.9736 16.3183 17.5114 16.7723C17.0569 17.2352 16.5073 17.5928 15.9014 17.8206C15.3233 18.0454 14.6622 18.1993 13.6944 18.2436C12.7249 18.2878 12.4158 18.2981 9.94714 18.2981C7.47844 18.2981 7.1694 18.2878 6.19986 18.2436C5.23213 18.1993 4.57102 18.0454 3.99293 17.8212C3.38667 17.5928 2.83745 17.2351 2.38349 16.7729C1.92053 16.3184 1.56301 15.7688 1.33517 15.1628C1.11035 14.5847 0.956438 13.9236 0.912203 12.9559C0.867967 11.9864 0.857666 11.6779 0.857666 9.20862C0.857666 6.73931 0.868573 6.43087 0.912203 5.46194C0.956438 4.49421 1.11096 3.8325 1.33456 3.2544C1.56292 2.64813 1.92066 2.09891 2.38288 1.64496C2.83735 1.182 3.38696 0.824484 3.99293 0.596641C4.57102 0.371828 5.23213 0.217913 6.19986 0.173677ZM13.6205 1.80978C12.6619 1.76615 12.374 1.75706 9.94714 1.75706C7.52025 1.75706 7.23242 1.76615 6.27378 1.80978C5.38786 1.85038 4.90673 1.99824 4.58617 2.12307C4.19133 2.26848 3.83413 2.50061 3.54088 2.80235C3.22335 3.12049 3.02581 3.42347 2.86159 3.84764C2.73616 4.1682 2.58891 4.64934 2.54831 5.53526C2.50468 6.49389 2.49559 6.78173 2.49559 9.20862C2.49559 11.6355 2.50468 11.9233 2.54831 12.882C2.58891 13.7679 2.73676 14.249 2.86159 14.5696C3.0071 14.9644 3.23922 15.3216 3.54088 15.6149C3.83417 15.9166 4.19136 16.1487 4.58617 16.2942C4.90673 16.4196 5.38786 16.5669 6.27378 16.6075C7.23242 16.6511 7.51965 16.6602 9.94714 16.6602C12.3746 16.6602 12.6619 16.6511 13.6205 16.6075C14.5064 16.5669 14.9876 16.419 15.3081 16.2942C15.703 16.1488 16.0602 15.9166 16.3534 15.6149C16.6551 15.3216 16.8872 14.9644 17.0327 14.5696C17.1581 14.249 17.3054 13.7679 17.346 12.882C17.3896 11.9233 17.3987 11.6355 17.3987 9.20862C17.3987 6.78173 17.3896 6.49389 17.346 5.53526C17.3054 4.64934 17.1575 4.1682 17.0327 3.84764C16.8685 3.42347 16.6715 3.12049 16.3534 2.80235C16.0353 2.48483 15.7323 2.28728 15.3081 2.12307C14.9876 1.99763 14.5064 1.85038 13.6205 1.80978ZM8.78645 12.0107C9.15441 12.1631 9.54879 12.2415 9.94707 12.2415C10.7514 12.2415 11.5229 11.922 12.0916 11.3532C12.6604 10.7845 12.9799 10.0131 12.9799 9.20869C12.9799 8.40433 12.6604 7.63291 12.0916 7.06414C11.5229 6.49537 10.7514 6.17584 9.94707 6.17584C9.54879 6.17584 9.15441 6.25428 8.78645 6.4067C8.41848 6.55911 8.08414 6.78251 7.80252 7.06414C7.52089 7.34577 7.29749 7.68011 7.14508 8.04807C6.99266 8.41603 6.91422 8.81041 6.91422 9.20869C6.91422 9.60697 6.99266 10.0014 7.14508 10.3693C7.29749 10.7373 7.52089 11.0716 7.80252 11.3532C8.08414 11.6349 8.41848 11.8583 8.78645 12.0107ZM6.64347 5.9051C7.51964 5.02893 8.70798 4.5367 9.94707 4.5367C11.1862 4.5367 12.3745 5.02893 13.2507 5.9051C14.1268 6.78126 14.6191 7.9696 14.6191 9.20869C14.6191 10.4478 14.1268 11.6361 13.2507 12.5123C12.3745 13.3885 11.1862 13.8807 9.94707 13.8807C8.70798 13.8807 7.51964 13.3885 6.64347 12.5123C5.76731 11.6361 5.27508 10.4478 5.27508 9.20869C5.27508 7.9696 5.76731 6.78126 6.64347 5.9051ZM15.6548 5.23277C15.8619 5.02566 15.9782 4.74476 15.9782 4.45187C15.9782 4.15897 15.8619 3.87807 15.6548 3.67096C15.4477 3.46385 15.1668 3.34749 14.8739 3.34749C14.581 3.34749 14.3001 3.46385 14.093 3.67096C13.8859 3.87807 13.7695 4.15897 13.7695 4.45187C13.7695 4.74476 13.8859 5.02566 14.093 5.23277C14.3001 5.43988 14.581 5.55624 14.8739 5.55624C15.1668 5.55624 15.4477 5.43988 15.6548 5.23277Z"
                            fill="white"
                          />
                        </svg>
                      </figure>
                    </Link>
                    <Link href="#">
                      <figure>
                        <svg
                          width="20"
                          height="19"
                          viewBox="0 0 20 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="group"
                        >
                          <path
                            className="group-hover:fill-secondary"
                            d="M4.09336 2.07218C4.09309 2.6101 3.87913 3.12587 3.49855 3.50604C3.11797 3.88621 2.60193 4.09964 2.06398 4.09937C1.52602 4.0991 1.0102 3.88516 0.63 3.50461C0.249797 3.12405 0.0363524 2.60807 0.0366213 2.07016C0.0368903 1.53224 0.250851 1.01647 0.631434 0.636298C1.01202 0.256127 1.52805 0.0427 2.06601 0.042969C2.60396 0.043238 3.11978 0.257181 3.49998 0.637732C3.88019 1.01828 4.09363 1.53427 4.09336 2.07218ZM4.15421 5.60125H0.0974724V18.2978H4.15421V5.60125ZM10.5639 5.60125H6.52741V18.2978H10.5233V11.6351C10.5233 7.92354 15.361 7.57875 15.361 11.6351V18.2978H19.367V10.256C19.367 3.99897 12.2068 4.23222 10.5233 7.30494L10.5639 5.60125Z"
                            fill="white"
                          />
                        </svg>
                      </figure>
                    </Link>
                    <Link href="#">
                      <figure>
                        <svg
                          width="23"
                          height="17"
                          viewBox="0 0 23 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="group"
                        >
                          <path
                            className="group-hover:fill-secondary"
                            d="M9.22124 11.8716L14.9655 8.55155L9.22124 5.23146V11.8716ZM22.0157 3.20621C22.1596 3.72636 22.2592 4.42358 22.3256 5.30893C22.4031 6.19429 22.4363 6.95791 22.4363 7.62192L22.5027 8.55155C22.5027 10.9752 22.3256 12.757 22.0157 13.8969C21.739 14.8929 21.0971 15.5348 20.101 15.8115C19.5808 15.9553 18.6289 16.0549 17.168 16.1213C15.7291 16.1988 14.4121 16.232 13.1946 16.232L11.4348 16.2984C6.79738 16.2984 3.90866 16.1213 2.76867 15.8115C1.77256 15.5348 1.13063 14.8929 0.85393 13.8969C0.710047 13.3767 0.610437 12.6795 0.544029 11.7942C0.466554 10.9088 0.433351 10.1452 0.433351 9.48117L0.366943 8.55155C0.366943 6.12789 0.544029 4.34611 0.85393 3.20621C1.13063 2.21019 1.77256 1.56831 2.76867 1.29163C3.28886 1.14776 4.2407 1.04816 5.70166 0.981758C7.14048 0.90429 8.45756 0.871089 9.67502 0.871089L11.4348 0.804688C16.0723 0.804688 18.961 0.981759 20.101 1.29163C21.0971 1.56831 21.739 2.21019 22.0157 3.20621Z"
                            fill="white"
                          />
                        </svg>
                      </figure>
                    </Link>
                    <Link href="#">
                      <figure>
                        <svg
                          width="19"
                          height="17"
                          viewBox="0 0 19 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="group"
                        >
                          <path
                            className="group-hover:fill-secondary"
                            d="M14.7068 -0.00390625H17.4724L11.4304 6.90113L18.5384 16.2973H12.9721L8.61302 10.5986L3.62526 16.2973H0.857998L7.32051 8.91161L0.502686 -0.00390625H6.20859L10.1488 5.20496L14.7052 -0.00390625H14.7068ZM13.7362 14.6421H15.2687L5.37674 1.56436H3.73227L13.7362 14.6421Z"
                            fill="white"
                          />
                        </svg>
                      </figure>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row  justify-between pb-[45px] pt-[40px] lg:pt-[155px] items-center lg:items-start">
          <div className="flex items-center gap-[36px] pb-[40px] lg:hidden">
            <Link href="https://www.google.com" target={"_blank"}>
              <figure>
                <Image width={9} height={17} src="/images/fb.svg" alt="logo" />
              </figure>
            </Link>
            <Link href="#">
              <figure>
                <Image width={18} height={18}  src="/images/insta.svg" alt="logo" />
              </figure>
            </Link>
            <Link href="#">
              <figure>
                <Image width={19} height={18}   src="/images/linkedin.svg" alt="logo" />
              </figure>
            </Link>
            <Link href="#">
              <figure>
                <Image width={22} height={15}  src="/images/youtube.svg" alt="logo" />
              </figure>
            </Link>
          </div>

          <p className="!text-[14px] tracking-[0.28px] pb-[13px] ">
            © 2024 CAFS. All rights reserved
          </p>

          <p className="!text-[14px] tracking-[0.28px] ">
            Designed by{" "}
            <Link href="#">
              {" "}
              <u className="text-underline-offset hover:text-secondary">
                Webandcrafts
              </u>{" "}
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
