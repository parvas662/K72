import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { useLocation } from "react-router-dom";

const StairAnimation = (props) => { // props comming from app.jsx
    const locate = useLocation() //when page changes we'll get location.pathname 
    const stairRef = useRef(null); 
    const pageRef = useRef(null); 
    useGSAP(function () {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline()
            tl.to(stairRef.current, {
                display: ''
            })
            tl.from('.stair', {
                height: '0',
                stagger: {
                    amount: 0.2,
                    from: 'end'
                }
            })
            tl.to(".stair", {
                y: '100%',
                stagger: {
                    amount: 0.2,
                    from: 'end'
                }
            })
            tl.set(stairRef.current, {
                display: 'none'
            })
            tl.set(".stair", {
                y: '0%',
            })
            gsap.from(pageRef.current, { 
                opacity:0,  
                delay:1.4,
                });
            
        }, stairRef)
        return () => ctx.revert(); // cleanup
    }, [locate.pathname])

    return (
        <div className="">
            <div ref={stairRef} className="inset-0 flex fixed z-11 ">
                <div className="stair h-full w-1/4 bg-black"></div>
                <div className="stair h-full w-1/4 bg-black"></div>
                <div className="stair h-full w-1/4 bg-black"></div>
                <div className="stair h-full w-1/4 bg-black"></div>
                <div className="stair h-full w-1/4 bg-black"></div>
                <div className="stair h-full w-1/4 bg-black"></div>
            </div>
            <div ref={pageRef}>
                {props.children}
            </div>
        </div>
    );
};

export default StairAnimation;