import { PresentationControls } from "@react-three/drei";
import { useRef } from "react"
import MacbookModel16 from "../models/Macbook-16";
import MacbookModel14 from "../models/Macbook-14";
const ANIMATION_DURATION=1;
const OFFSET_DISTANCE=5;

const fadeMeshes=(group,opacity)=>{
    if(!group) return;
    group.traverse((child)=>{
        if(child.isMesh){
            child.material.transparent=true;
            gsap.to(child.material,{opacity,duration:ANIMATION_DURATION});

        }
    })}

const moveGroup=(group,x)=>{
    if(!group) return;


}
const ModelSwitcher=({prop,isMobile})=>{
    const smallMacbookRef=useRef();
    const largeMacbookRef=useRef();
    const controlsConfig={
        snap:true,//snap back on same position on release
        speed:1,
        zoom:1,
        config:{mass:1,tension:0,friction:26},//add physics feature to the model
        //polar:[-Math.PI,Math.PI] allows you to look below the model( into the bottom side)
        azimuth:[-Infinity,Infinity] //rotate in forizontal direction and come back at samae pont
    }
    const showLargeMacbook=scale===0.08||scale===0.05;
    useGSAP(()=>{
       if(showLargeMacbook){ 
        moveGroup(smallMacbookRef.current,-OFFSET_DISTANCE);
        moveGroup(largeMacbookRef.current,0);
        fadeMeshes(smallMacbookRef.current,0);
        fadeMeshes(largeMacbookRef.current,1);
    }else{
        moveGroup(smallMacbookRef.current,0);
        moveGroup(largeMacbookRef.current,OFFSET_DISTANCE);
        fadeMeshes(smallMacbookRef.current,1);
        fadeMeshes(largeMacbookRef.current,0);
    }
    },[scale]);
    return(
        <>
        <PresentationControls  {...controlsConfig}>
            <group ref={largeMacbookRef}>
            <MacbookModel16 scale={isMobile?0.05 : 0.08}/>
            </group>
        </PresentationControls>
        <PresentationControls  {...controlsConfig}>
            <group ref={smallMacbookRef}>
            <MacbookModel14 scale={isMobile?0.03 : 0.06}/>
            </group>
        </PresentationControls>
        </>
    )
}
export default ModelSwitcher