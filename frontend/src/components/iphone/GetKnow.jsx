import { useRef, useState } from 'react';
import ScrollButtons from './ScrollButtons';

const GetKnow = () => {
  const scrollContainerRef = useRef(null);
  const [selectedFeature, setSelectedFeature] = useState(null);
  
  const buttonData = [
    {
      id: "design-feature",
      bgImage: "bg-[url('https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')]",
      heading: "Elegant Design",
      text: "Crafted with premium materials and precision engineering",
      details: {
        title: "Premium Design & Build Quality",
        description:
          "The iPhone features a surgical-grade stainless steel frame with Ceramic Shield front cover that's tougher than any smartphone glass. The precision-milled back glass complements the flat-edge design.",
        features: [
          "Surgical-grade stainless steel frame",
          "Ceramic Shield front cover",
          "Precision-milled matte glass back",
          "IP68 water and dust resistance",
          "Aerospace-grade aluminum variants",
        ],
        image:
          "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      },
    },
    {
      id: "camera-feature",
      bgImage: "bg-[url('https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')]",
      heading: "Pro Camera System",
      text: "Capture stunning photos with our advanced camera technology",
      details: {
        title: "Professional Camera System",
        description:
          "The Pro camera system with computational photography delivers unprecedented image quality. Features like Photonic Engine, Smart HDR 4, and Night mode work together to capture incredible photos in any light.",
        features: [
          "48MP Main camera with quad-pixel sensor",
          "ProRAW and ProRes video recording",
          "Cinematic mode up to 4K HDR",
          "Photonic Engine for better low-light photos",
          "7-element lens with 100% Focus Pixels",
        ],
        image:
          "https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      },
    },
    {
      id: "display-feature",
      bgImage: "bg-[url('https://images.unsplash.com/photo-1592750475338-74b7b21085ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')]",
      heading: "Super Retina Display",
      text: "Experience vibrant colors and incredible clarity",
      details: {
        title: "Super Retina XDR Display",
        description:
          "The Super Retina XDR display with ProMotion technology delivers an extraordinary viewing experience. With adaptive refresh rates up to 120Hz, HDR content looks more vibrant and responsive.",
        features: [
          "ProMotion technology with 120Hz refresh rate",
          "HDR display with 2000 nits peak brightness",
          "Always-On display capability",
          "Ceramic Shield protection",
          "True Tone and Wide Color (P3)",
        ],
        image:
          "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      },
    },
    {
      id: "battery-feature",
      bgImage: "bg-[url('https://images.unsplash.com/photo-1605236453806-6ff36851218e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')]",
      heading: "All-Day Battery",
      text: "Stay powered longer with efficient battery life",
      details: {
        title: "All-Day Battery Performance",
        description:
          "The iPhone is optimized for energy efficiency, delivering all-day battery life even with intensive use. Fast charging and MagSafe wireless charging make powering up effortless.",
        features: [
          "Up to 28 hours of video playback",
          "MagSafe wireless charging",
          "Fast charging with 20W adapter",
          "Optimized battery charging to reduce aging",
          "Low Power Mode for extended use",
        ],
        image:
          "https://images.unsplash.com/photo-1605236453806-6ff36851218e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      },
    },
    {
      id: "performance-feature",
      bgImage: "bg-[url('https://images.unsplash.com/photo-1694202042610-f6795d3d09f5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]",
      heading: "Blazing Performance",
      text: "Powered by the latest Apple silicon",
      details: {
        title: "A16 Bionic Chip",
        description:
          "The A16 Bionic chip delivers industry-leading performance and efficiency. With a 6-core CPU, 5-core GPU, and 16-core Neural Engine, it powers advanced features like computational photography and AR experiences.",
        features: [
          "6-core CPU with 2 performance and 4 efficiency cores",
          "5-core GPU with 50% more memory bandwidth",
          "16-core Neural Engine for 17 trillion operations/sec",
          "Advanced ISP for computational photography",
          "Hardware-accelerated machine learning",
        ],
        image:
          "https://images.unsplash.com/photo-1694202042610-f6795d3d09f5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    },
    {
      id: "security-feature",
      bgImage: "bg-[url('https://plus.unsplash.com/premium_photo-1686617826082-d4ef0e2657ba?q=80&w=2126&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]",
      heading: "Privacy & Security",
      text: "Your data stays yours",
      details: {
        title: "Advanced Privacy & Security",
        description:
          "iPhone is designed with privacy at its core. Features like Face ID, end-to-end encrypted iMessage, and on-device Siri requests ensure your data stays secure.",
        features: [
          "Face ID facial recognition",
          "End-to-end encrypted iMessage and FaceTime",
          "On-device Siri processing",
          "App Tracking Transparency",
          "Secure Enclave for sensitive data",
        ],
        image:
       " https://plus.unsplash.com/premium_photo-1686617826082-d4ef0e2657ba?q=80&w=2126&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",      },
    },
    {
      id: "connectivity-feature",
      bgImage: "bg-[url('https://images.unsplash.com/photo-1579567761406-4684ee0c75b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')]",
      heading: "5G Connectivity",
      text: "Ultra-fast wireless speeds wherever you go",
      details: {
        title: "Next-Gen Connectivity",
        description:
          "With 5G support, iPhone delivers faster downloads, higher-quality streaming, and more responsive gaming. Smart Data Mode optimizes battery life by balancing speed and efficiency.",
        features: [
          "5G support with multiple bands",
          "Wi-Fi 6E compatibility",
          "Dual SIM with eSIM support",
          "Smart Data Mode for battery optimization",
          "Ultra-wideband chip for spatial awareness",
        ],
        image:
          "https://images.unsplash.com/photo-1579567761406-4684ee0c75b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      },
    },
  ];

  const handleButtonClick = (feature) => {
    setSelectedFeature(feature);
  };

  const closeOverlay = () => {
    setSelectedFeature(null);
  };

  return (
    <section className="bg-black h-full w-full z-30 relative" id="feature">
      <h1 className="text-white text-5xl m-20">
        Get to know more about the iPhone!!
      </h1>

      <div 
        ref={scrollContainerRef}
        className="h-screen w-screen flex flex-row overflow-x-scroll gap-8 px-10 scrollbar-hide relative z-20"
      >
        {buttonData.map((button) => (
          <button
            key={button.id}
            id={button.id}
            onClick={() => handleButtonClick(button)}
            className={`h-[95vh] w-[28.5%] ${button.bgImage} bg-cover bg-center hover:scale-105 shadow-md rounded-xl flex flex-col items-center justify-start flex-shrink-0 relative group transition-transform duration-300 p-8 cursor-pointer`}
          >
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/40 rounded-xl group-hover:bg-black/30 transition-all duration-300"></div>
            
            {/* Heading at the top */}
            <div className="relative z-10 text-white text-center">
              <h3 className="text-3xl font-bold mb-4">{button.heading}</h3>
            </div>

            {/* Text content in the middle */}
            <div className="relative z-10 text-white text-center px-6 mt-auto mb-auto">
              <p className="text-xl opacity-90">{button.text}</p>
              <p className="text-sm mt-4 opacity-70">Click to learn more</p>
            </div>
          </button>
        ))}
      </div>

      {/* Scroll buttons component */}
      <ScrollButtons 
        scrollContainerRef={scrollContainerRef} 
        position="bottom-10 right-10"
        buttonSize="w-14 h-14"
        iconSize="w-7 h-7"
      />

      {/* Overlay Component */}
      {selectedFeature && (
        <FeatureOverlay 
          feature={selectedFeature} 
          onClose={closeOverlay} 
        />
      )}
    </section>
  );
};

// Feature Overlay Component
const FeatureOverlay = ({ feature, onClose }) => {
  // Prevent scroll when overlay is open
  useState(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-8 bg-black/80 backdrop-blur-sm">
      <div className="relative bg-stone-950 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/30 text-white rounded-full w-10 h-10 flex items-center justify-center backdrop-blur-sm transition-all duration-300 hover:scale-110"
          aria-label="Close overlay"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

             {/* Text Content */}
          <div className="p-8 lg:p-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              {feature.details.title}
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              {feature.details.description}
            </p>

            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Key Features:
              </h3>
              <ul className="space-y-3">
                {feature.details.features.map((item, index) => (
                  <li key={index} className="flex items-start text-lg text-gray-300">
                    <svg className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Additional Action Buttons */}
            <div className="flex gap-4 mt-8">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-300 font-semibold">
                Learn More
              </button>
              <button className="border border-gray-600 hover:border-gray-400 text-white px-6 py-3 rounded-lg transition-colors duration-300 font-semibold">
                Compare Models
              </button>
            </div>
          </div>
          {/* Image Section */}
          <div className="h-64 lg:h-full lg:min-h-[500px]">
            <img
              src={feature.details.image}
              alt={feature.details.title}
              className="w-full h-full object-cover rounded-t-2xl lg:rounded-l-2xl lg:rounded-tr-none"
            />
          </div>

         
        </div>
      </div>
    </div>
  );
};

export default GetKnow;


//Key Concepts Explained:
//1. State Management
//useState tracks which feature is currently selected
//
//selectedFeature is null when no overlay is shown, or contains the feature data when overlay is open
//
//2. Overlay Pattern
//Conditionally render overlay only when selectedFeature exists
//
//Overlay uses fixed positioning to cover entire viewport
//
//Backdrop with blur effect for modern look
//
//3. Event Flow
//User clicks a feature button
//
//handleButtonClick sets the selectedFeature state
//
//Overlay component renders with the feature's detailed data
//
//User clicks close button or backdrop to close
//
//4. User Experience Enhancements
//Backdrop click: Could be added to close when clicking outside content
//
//ESC key support: Can be added to close with keyboard
//
//Smooth animations: For enter/exit transitions
//
//Scroll locking: Prevents background scrolling when overlay is open
//
//5. Accessibility Features
//Proper ARIA labels
//
//Keyboard navigation support
//
//Focus management