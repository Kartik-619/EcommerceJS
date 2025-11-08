import useMacbookStore from "../store"
import clsx from 'clsx';
//clsx is a tiny utility for constructing className strings conditionally. It's often used in React to toggle CSS classes based on props or state.


const ProductViewer=()=>{
    //we are destructuring the state obj hook created in zustand
    const {color,scale,setColor,setScale}=useMacbookStore();
    return(
     <section id="product-viewer">
        <h2>Take a closer look.</h2>
        <div className="controls">
        <p className="info">MacBook Pro 26 "in Silver /Space Black</p>
        <div className="flex-center gap-5 mt-5">
            <div className="color-control">
                <div
                onClick={()=>setColor('#adb5bd')}
                className={clsx('bg-neutral-300',color=== '#adb5bd' && 'active')}/>
                <div onClick={()=>setColor('#2e2c2e')}
                className={clsx('bg-neutral-900',color=== '#2e2c2e' && 'active')}/>
            </div>
            <div 
                onClick={()=>{setScale(0.06)}}
                className={clsx('size-control',scale===0.07 ? 'bg-white text-black' :'bg-transparent text-white')}>
                <div><p>14*</p></div>
                <div><p>16*</p></div>
            </div>
        </div>

        </div>
     </section>
    )
}
export default ProductViewer