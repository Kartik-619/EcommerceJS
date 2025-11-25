import { Link } from "react-router-dom";

const Essentials = () => {
  return (
    <section className="min-h-screen w-full bg-black px-6 py-10">
      <h1 className="text-white text-5xl md:text-7xl font-semibold mb-6">
        iPhone essentials.
      </h1>

      <Link to="#" className="text-blue-400 underline mb-10 inline-block">
        All iPhone accessories
      </Link>

      {/* Responsive card container */}
      <div className="flex flex-col md:flex-row gap-10 w-full">
        
        {/* CARD 1 */}
        <Link
          to="#"
          className="relative w-full md:w-1/2 h-[60vh] md:h-[80vh] rounded-xl overflow-hidden bg-stone-800 group transform transition-all duration-300 hover:scale-105"
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all duration-300"></div>

          {/* Heading */}
          <div className="absolute top-6 left-0 right-0 text-center z-10 text-white">
            <h3 className="text-2xl md:text-3xl font-bold">iPhone accessories</h3>
          </div>

          {/* Text content */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-6 z-10">
            <p className="text-lg md:text-xl opacity-90 text-center">
              Protect and personalise your iPhone with colourful cases, 
              straps and more.
            </p>
            <p className="text-sm mt-4 opacity-70">Click to learn more</p>
          </div>
        </Link>

        {/* CARD 2 */}
        <Link
          to="#"
          className="relative w-full md:w-1/2 h-[60vh] md:h-[80vh] rounded-xl overflow-hidden bg-stone-800 group transform transition-all duration-300 hover:scale-105"
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all duration-300"></div>

          {/* Heading */}
          <div className="absolute top-6 left-0 right-0 text-center z-10 text-white">
            <h3 className="text-2xl md:text-3xl font-bold">AirTags</h3>
          </div>

          {/* Text */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-6 z-10">
            <p className="text-lg md:text-xl opacity-90 text-center">
              Keep track of your essentials with AirTags and premium accessories.
            </p>
            <p className="text-sm mt-4 opacity-70">Click to learn more</p>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Essentials;
