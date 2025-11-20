const HeroI = () => {
    return (
      <section 
        id="hero" 
        className="h-screen w-full bg-black flex flex-col items-center justify-center gap-6 text-center"
      >
        <h1 className="text-5xl font-bold text-white">Iphone</h1>
        
        <div>
          <img 
            src="apple.png" 
            alt="apple logo" 
            className="w-75 h-auto object-contain"
          />
        </div>
        
        <div>
          <h2 className="text-3xl text-gray-200 font-light">Explore the line-up.</h2>
        </div>
      </section>
    );
  };
  
  export default HeroI;