'use client'

import { ReactLenis } from '@studio-freight/react-lenis'
import gsap from 'gsap'
import { useEffect, useRef } from 'react'



const LenisScroll = ({ children }) => {
    const lenisRef = useRef()


    //normnal hook
    // useEffect(() => {
    //     let requestID;
    //     function update(time) {
    //         lenisRef.current?.raf(time  * 0.8)
    //         requestID = requestAnimationFrame(update)
    //     }
    //     requestAnimationFrame(update);
    //     return () => cancelAnimationFrame(requestID)
    // })


    // connect with gsap ( if added )
    useEffect(() => {
        function update(time) { lenisRef.current?.raf(time * 1000) }
        gsap.ticker.add(update)
        return () => {
            gsap.ticker.remove(update)
        }
    })


    const options = {
        duration: 0.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: 'vertical',
        gestureDirection: 'vertical',
        smooth: true,
        mouseMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
        infinite: false,
    }


    return (
        <ReactLenis
            root
            ref={lenisRef}
            autoRaf={false}
            option={options}
        >
            {children}
        </ReactLenis>
    )
}

export default LenisScroll