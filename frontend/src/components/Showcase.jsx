import { useGSAP } from "@gsap/react";
import { useMediaQuery } from "react-responsive"

const Showcase=()=>{
    const isTablet=useMediaQuery({query:'(max-width:1024 px)'});
    useGSAP(()=>{
        if(!isTablet){
            const timeline=gsap.timeline({
                scrollTrigger:{
                    //so we are building a scrolltrigger and it starts when  the top of screen reaches top of the section
                    //#this showcase section that we have been creating is the trigger for animation 
                    trigger:'#showcase',
                    start:'top top',
                    end:'bottom top', //end when bottom of screen reaches top of the section
                    scrub:true,
                    pin:true
                }
            });
            //in smaller devices the mask will be on top and scrolling won't be allowed
            timeline.to('.mask img',{
                transform:'scale(1.1)'
            }).to('content',{opacity:1,y:0,ease:'power1.in'});

        }
    },{isTablet})
    return(
        <section id="showacase">
            <div className="media">
                <video src="/videos/game.mp4" loop muted autoPlay playsInline/>
                <div className="mask">
                    <img src="/mask-logo.svg"/>
                </div>
            </div>
            <div className="content">
                <div className="wrapper">
                    <div className="lg:max-w-md">\
                        <h2>Rocket Chip</h2>
                        <div className="space-y-5 mt-7 pe-10">
                            <p>Introducing 
                                <span className="text-white">
                                    M4, the next generation of Apple Silicon
                                </span>
                                . M4 powers
                            </p>
                            <p>
                                It drives Apple Intelligence on iPad Pro, so you 
                            </p>
                            <p>
                            Apple Intelligence is the personal intelligence system that helps you write, express yourself and get things done effortlessly.   
                            </p>   
                            <p className="text-primary">Learn More about Apple Intel</p>                     
                        </div>
                    </div>
                    <div className="max-w-3xs space-y-14">
                        <div className="space-y-2">
                            <p>Up to</p>
                            <h3>4x faster</h3>
                            <p>pro rendering performance than M2</p>
                        </div>
                        <div className="space-y-2">
                            <p>Up to</p>
                            <h3>1.5x faster</h3>
                            <p>CPU performace than M2</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Showcase