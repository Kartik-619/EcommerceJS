import { useGSAP } from "@gsap/react";
import { useMediaQuery } from "react-responsive";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";

// Register plugins
gsap.registerPlugin(ScrollTrigger);

const HighlightsI = () => {
  const isTablet = useMediaQuery({ maxWidth: 1024 });
  const showcaseRef = useRef(null);
  const animationCreated = useRef(false);

  useGSAP(
    () => {
      // Skip if tablet or animation already created
      if (isTablet || animationCreated.current) return;

      const showcaseElement = showcaseRef.current;
      if (!showcaseElement) return;

      console.log("ScrollTrigger enabled", ScrollTrigger);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: showcaseElement,
          start: "top top",
          end: "bottom+=200%",
          scrub: true,
          pin: true,
          invalidateOnRefresh: true,
          anticipatePin: true,
          markers: false,
        },
      });

      // Animate mask (logo)
      tl.to(".mask img", {
        scale: 1.5,
        ease: "power1.inOut",
        duration: 2,
      })
        .to(
          ".content",
          {
            opacity: 1,
            y: -20,
            ease: "power1.out",
            duration: 1.5,
          },
          "-=1"
        );

      animationCreated.current = true;

      // Cleanup function
      return () => {
        if (tl.scrollTrigger) {
          tl.scrollTrigger.kill();
        }
      };
    },
    {
      dependencies: [isTablet],
    }
  );

  // Reset animation when dependencies change
  useEffect(() => {
    animationCreated.current = false;
  }, [isTablet]);

  return (
    <section
      ref={showcaseRef}
      id="showcase"
      className="relative h-screen w-full overflow-hidden bg-black text-white"
    >
      {/* Background Video */}
      <div className="absolute inset-0 h-full w-full">
        <video
          src="/videos/iphone.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="h-full w-full object-cover"
          onError={(e) => {
            console.error("Video failed to load", e);
            // Optional: Add fallback image here
            const videoElement = e.target;
            videoElement.style.display = 'none';
          }}
        />
        
        {/* Dark overlay for better contrast */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Center Apple Logo */}
      <div className="mask absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <img
          src="/apple.svg"
          alt="Apple Logo"
          className="w-32 h-32 lg:w-48 lg:h-48 opacity-90"
          onError={(e) => {
            console.error("Logo failed to load");
            const imgElement = e.target;
            imgElement.style.display = 'none';
          }}
        />
      </div>

      {/* Content Section */}
      <div className="content absolute inset-0 flex items-center justify-center z-20 opacity-0 pointer-events-none">
        <div className="wrapper container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl">
          {/* Left Text Content */}
          <div className="lg:max-w-md text-center lg:text-left mb-10 lg:mb-0">
            <h2 className="text-4xl lg:text-6xl font-bold mb-7">Rocket Chip</h2>
            <div className="space-y-5 pe-0 lg:pe-10">
              <p className="text-lg lg:text-xl leading-relaxed">
                Introducing{" "}
                <span className="text-white font-semibold">
                  M4, the next generation of Apple Silicon
                </span>
                . M4 powers the most advanced iPad Pro ever.
              </p>
              <p className="text-lg lg:text-xl leading-relaxed">
                It drives Apple Intelligence on iPad Pro, so you can accomplish more with intuitive new capabilities.
              </p>
              <p className="text-lg lg:text-xl leading-relaxed">
                Apple Intelligence is the personal intelligence system that helps you write, express yourself and get things done effortlessly.
              </p>
              <p className="text-blue-400 text-lg lg:text-xl font-semibold mt-6 hover:text-blue-300 transition-colors cursor-pointer">
                Learn More about Apple Intelligence →
              </p>
            </div>
          </div>

          {/* Right Stats */}
          <div className="max-w-xs lg:max-w-sm space-y-14 text-center lg:text-left">
            <div className="space-y-2">
              <p className="text-lg lg:text-xl text-gray-300">Up to</p>
              <h3 className="text-3xl lg:text-5xl font-bold">4x faster</h3>
              <p className="text-lg lg:text-xl text-gray-300">pro rendering performance than M2</p>
            </div>
            <div className="space-y-2">
              <p className="text-lg lg:text-xl text-gray-300">Up to</p>
              <h3 className="text-3xl lg:text-5xl font-bold">1.5x faster</h3>
              <p className="text-lg lg:text-xl text-gray-300">CPU performance than M2</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighlightsI;