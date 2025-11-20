import { useGSAP } from "@gsap/react";
import { useMediaQuery } from "react-responsive";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const HighlightsI=()=>{
    const isTablet=useMediaQuery({query:'(max-width:1024px)'});

    useGSAP(()=>{
        if(!isTablet){
            //creating a timeline for masking animation
            const tl=gsap.timeline({
                ScrollTrigger:{
                    trigger:'#showcase',
                    start:'top top',
                    end:'bottom top', //end when the end reaches the bottom of the section
                    scrub:true,
                    pin:true
                    
                }
            });
              //in smaller devices the mask will be on top and scrolling won't be allowed
             gsap.timeline.to('.mask img',{
                transform:'scale(1.1)'
            }).to('.content',{opacity:1,y:0,ease:'power1.in'});
         
        }    
    })

    return(
        <section id="showcase">
          <div className="media">
          <video src="/videos/iphone.mp4" autoPlay loop muted playsInline/>
          <div className="mask">
                <img src="/apple.svg"/>
            </div>
            </div> 
          
        </section>
        
    )
}
export default HighlightsI;