import { useNavigate } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import { useEffect } from "react";
import axios from "axios";

gsap.registerPlugin(SplitText);

const PaymentDone = () => {
  const navigate = useNavigate();

    useEffect(()=>{
        async()=>{
            try{
                const response=await axios.patch('http://localhost:3007/api//orderdone',{
                    withCredentials:true,
                });
                if(response){
                    alert('Order Successfull ✅');
                    navigate('/');
                }

            }catch(err){
                console.error('Update the order error in frontend',err);
            }
        }
    })

  useGSAP(() => {
    // Text animation
    const split = new SplitText(".success-text", {
      type: "words, chars",
    });

    gsap.from(split.chars, {
      y: 60,
      opacity: 0,
      stagger: 0.04,
      duration: 0.6,
      ease: "power3.out",
    });

    // Truck animation
    gsap.fromTo(
      ".truck",
      { x: "-120%" },
      {
        x: "120%",
        duration: 6,
        repeat: -1,
        ease: "linear",
      }
    );

    // Celebration confetti dots
    gsap.utils.toArray(".confetti").forEach((dot) => {
      gsap.fromTo(
        dot,
        {
          y: 0,
          opacity: 1,
          scale: 0.5,
        },
        {
          y: gsap.utils.random(-120, -200),
          x: gsap.utils.random(-150, 150),
          opacity: 0,
          scale: 1.2,
          duration: gsap.utils.random(1.2, 2),
          repeat: -1,
          delay: gsap.utils.random(0, 1),
          ease: "power1.out",
        }
      );
    });
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-green-50 overflow-hidden">

      {/* Celebration Confetti */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <span
            key={i}
            className="confetti absolute w-3 h-3 rounded-full bg-green-400"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: "40%",
            }}
          />
        ))}
      </div>

      {/* Success Message */}
      <h1 className="success-text text-4xl md:text-5xl font-bold text-green-700 text-center mb-4">
        Order Confirmed 🎉
      </h1>

      <p className="text-gray-600 text-center max-w-md mb-8">
        Your order has been successfully placed and will be delivered soon.
        Sit back, relax, and track your happiness 😄
      </p>

      {/* Truck Animation */}
      <div className="relative w-full h-24 overflow-hidden mb-10">
        <div className="truck text-6xl absolute left-0 bottom-0">
          🚚
        </div>
      </div>

      {/* CTA */}
      <button
        onClick={() => navigate("/")}
        className="px-8 py-3 bg-black text-white rounded-xl shadow hover:scale-105 transition"
      >
        Shop More 🛍️
      </button>
    </div>
  );
};

export default PaymentDone;
