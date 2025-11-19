import { useGSAP } from "@gsap/react";
import { performanceImages, performanceImgPositions } from "../constants";
import { useRef } from "react";
import { useMediaQuery } from 'react-responsive'; // Note: This import is duplicated (may cause warning)
import gsap from "gsap";

// Define the Performance component
const Performance = () => {
  // Detect if the screen width is mobile size (<=1024px)
  const isMobile = useMediaQuery({ query: '(max-width:1024px)' });

  // Create a reference to the section element for ScrollTrigger targeting
  const sectionRef = useRef(null);

  // Use GSAP integration with React to set up animations on mount and update
  useGSAP(() => {
    // Animate text: fade in and move up when entering viewport
    gsap.fromTo(
      ".content p", // Select the paragraph inside .content
      { opacity: 0, y: 10 }, // Initial state: invisible and slightly below
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: '.content p', // Element that triggers the animation
          start: "top bottom",   // Start when top of element hits bottom of viewport
          end: 'top center',     // End when top of element reaches center of viewport
          scrub: true,           // Smoothly sync animation with scroll
          invalidateOnRefresh: true, // Re-calculate positions on window resize/refresh
        },
      }
    );

    // Skip image animation on mobile devices
    if (isMobile) return;

    // Create a GSAP timeline for sequencing image animations
    const tl = gsap.timeline({
      defaults: { ease: "power1.inOut", duration: 2, overwrite: "auto" },
      scrollTrigger: {
        trigger: sectionRef.current, // Use the section as scroll trigger
        start: "top bottom",         // Start when top of section hits bottom of viewport
        end: "bottom top",           // End when bottom of section leaves top of viewport
        scrub: 1,                    // Sync animation smoothly with scroll (1 second delay)
        invalidateOnRefresh: true,   // Recompute on refresh/resizing
      }
    });

    // Loop through each defined image position
    performanceImgPositions.forEach((pos) => {
      // Skip animation for image with id "p5"
      if (pos.id === "p5") return;

      // Initially hide the element and set vertical offset
      gsap.set(`.${pos.id}`, { y: 100, autoAlpha: 0 });

      // Define target properties for animation
      const toVars = { y: 0, autoAlpha: 1 };

      // Conditionally apply horizontal and vertical positioning styles
      if (pos.left !== undefined) toVars.left = `${pos.left}%`;
      if (pos.right !== undefined) toVars.right = `${pos.right}%`;
      if (pos.bottom !== undefined) toVars.bottom = `${pos.bottom}%`;
      // Note: likely typo here – should be `transform`, not `transfrom`
      if (pos.transform !== undefined) toVars.transform = `${pos.transform}%`;

      // Animate this image into view at time 0 in the timeline
      tl.to(`.${pos.id}`, toVars, 0);
    });

    // Cleanup function to prevent memory leaks
    return () => {
      if (tl.scrollTrigger) tl.scrollTrigger.kill(); // Remove scroll trigger
      tl.kill(); // Kill the timeline
    };
  },{scope:sectionRef, dependencies:[isMobile]});

  // Render the JSX for the Performance section
  return (
    <section id="performance" ref={sectionRef}>
      {/* Main heading */}
      <h2>Next-level graphics performance. Game On</h2>

      {/* Wrapper for images positioned via CSS/classes */}
      <div className="wrapper">
        {performanceImages.map(({ id, src }) => (
          // Render each image with dynamic class and source
          <img key={id} className={id} src={src} alt={id} />
        ))}
      </div>

      {/* Content paragraph with highlighted text */}
      <div className="content">
        <p>
          Run graphics-intensive workflows with a responsiveness that keeps up with your imagination. The M4 family of chips features a GPU with a second-generation hardware accelerated by engine that renders images faster, so{' '}
          <span className="text-white">
            gaming feels more immersive and realistic than ever.
          </span>{' '}
          Dynamic Caching optimizes fast on-chip memory to dramatically increase average GPU utilization+ driving a huge performance boost for the most demanding pro apps and games.
        </p>
      </div>
    </section>
  );
};

// Export the component as default
export default Performance;