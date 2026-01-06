import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import SplitText from 'gsap/SplitText';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

gsap.registerPlugin(SplitText);

const PaymentSimulation = () => {
  const navigate = useNavigate();

  useGSAP(() => {
    const split = new SplitText(".split", { type: "words, chars" });

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.from(split.chars, {
      duration: 0.8,
      y: 100,
      autoAlpha: 0,
      stagger: 0.05
    });

    tl.to(split.words, {
      color: "#16a34a",
      duration: 0.8,
      stagger: 0.2
    }, "+=0.5");

    return () => {
      split.revert(); // cleanup
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/paymentdone');
    }, 4000); // realistic processing time

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="w-full h-full flex items-center justify-center bg-white rounded-xl shadow">
      <h3 className="split text-5xl font-semibold text-green-500">
        Processing Payment...
      </h3>
    </div>
  );
};

export default PaymentSimulation;
