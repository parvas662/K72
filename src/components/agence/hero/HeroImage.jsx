 
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import {  ScrollTrigger } from "gsap/all";
import { useRef, useState } from "react";

import carl from "../../../assets/photos/Carl_480x640.jpg";
import CAMILLE from "../../../assets/photos/CAMILLE_480X640.jpg";
import ChantalG from "../../../assets/photos/ChantalG_480x640.jpg";
import Joel from "../../../assets/photos/joel_480x640.jpg";
import MEGGIE from "../../../assets/photos/MEGGIE_480x640.jpg";
import MEL from "../../../assets/photos/MEL_480x640.jpg";
import Michele from "../../../assets/photos/Michele_480x640.jpg";
import Olivier from "../../../assets/photos/Olivier_480x640.jpg";


const HeroImage = () => { 
  const imageArray = [carl, CAMILLE, ChantalG, Olivier, MEGGIE, MEL, Michele, Joel]
  const [image, setImage] = useState(imageArray[0]);
  const imageDivRef = useRef(null); 
  const containerDivRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger) 

   useGSAP(function () {  //usegsap hook aligns with react lifecycle, and its do animation cleanup by itself and better than useEffects.
    gsap.to(containerDivRef.current, {
      scrollTrigger:{
        trigger: imageDivRef.current,
        start:"top 20%", 
        end:"+=1200 top",
        scrub:1, 
        pin:true,
        markers:true,
        pinSpacing:true,
        pinReparent:true,
        
        anticipatePin:1,
        invalidateOnRefresh:true,
        onUpdate:(element)=>{ 
          const imageIndex = Math.floor(element.progress * (imageArray.length -1))
          console.log(imageIndex)
          setImage(imageArray[imageIndex])
       }
       },
      
    })
  })
  return (  
        <div ref={containerDivRef} className="absolute top-[9vw] left-[29vw] w-max rounded-3xl h-[265vh] ">
          <img src={image} ref={imageDivRef} 
            className="h-[44vh] w-[15vw]  rounded-3xl object-cover"></img>
        </div>  
  );
};


export default HeroImage; 