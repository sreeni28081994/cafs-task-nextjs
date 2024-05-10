
"use client"
import React,{useEffect,useRef} from "react";
import gsap from "gsap";
const CareComponent = ({data}) => {

  const counters = useRef(null)


  // useEffect(() => {
  //   console.log(counters.current +"counterssssssss")
  //   gsap.from(counters.current, {
  //     textContent: 1,
  //     duration: 3,
  //     snap: {
  //       textContent: 1,
  //     },
  //     ease: 'power4.out',
  //     stagger: {
  //       each: 1.0,
  //       onUpdate: function () {
  //         const currentValue = parseFloat(this.targets()[0].textContent);
  //         this.targets()[0].innerHTML = currentValue
  //           .toString()
  //           .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  //       },
  //     },
  //   });
  // }, []);




  return (
    <div className='py-[35px] xl:py-0 w-full md:w-6/12 xl:w-3/12 '>
      <div className="flex items-start gap-[58px] sm:gap-[26px]  xl:gap-[19px]">
        
        <figure className='pt-[13px]'>
          
          <img src={data.url} alt="img" width={44} height={44} className='w-full h-full ' />
        </figure>
        <div className="flex flex-col gap-0  xl:gap-[5px]">
          <span className='text-white text-[42px] xl:text-[48px] tracking-[0.84px] xl:tracking-[0.96px] ' ref={counters}>  {data.number} </span> <span className='text-[#8C8C8C] text-[22px] xl:text-[24px] leading-[100%]'>{data.content}</span>
        </div>
      </div>
    </div>
  );
};

export default CareComponent;
