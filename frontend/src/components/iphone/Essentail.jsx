import { Link } from "react-router-dom"

const Essentails=()=>{
    return(
        <section className="h-screen w-screen bg-black">
            <h1 className="text-white text-7xl">iPhone essentials.</h1>
            <Link to={<></>}><p>All Iphone accessories</p></Link>
        <div className="h-[90vh] flex flex-row w-full">
            <button className="w-[40vw] h-[80vh] hover:scale-105 bg-stone-950">
                {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/40 rounded-xl group-hover:bg-black/30 transition-all duration-300"></div>
            
            {/* Heading at the top */}
            <div className="relative z-10 text-white text-center">
              <h3 className="text-3xl font-bold mb-4">iPhone accessories</h3>
            </div>

            {/* Text content in the middle */}
            <div className="relative z-10 text-white text-center px-6 mt-auto mb-auto">
              <p className="text-xl opacity-90">Protect and personalise your iPhone with fresh accessories like colourful cases, the all-new Crossbody Strap and more.</p>
              <p className="text-sm mt-4 opacity-70">Click to learn more</p>
            </div>
            </button>
            <button className="w-[40vw] h-[80vh] hover:scale-105 bg-stone-950">
                {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/40 rounded-xl group-hover:bg-black/30 transition-all duration-300"></div>
            
            {/* Heading at the top */}
            <div className="relative z-10 text-white text-center">
              <h3 className="text-3xl font-bold mb-4">Air Tags</h3>
            </div>

            {/* Text content in the middle */}
            <div className="relative z-10 text-white text-center px-6 mt-auto mb-auto">
              <p className="text-xl opacity-90">Protect and personalise your iPhone with fresh accessories like colourful cases, the all-new Crossbody Strap and more.</p>
              <p className="text-sm mt-4 opacity-70">Click to learn more</p>
            </div>
            </button>
        </div>
        
        </section>
    )
}
export default Essentails;