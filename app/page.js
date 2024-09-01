"use client";
import Image from "next/image";
import { Roboto_Condensed, Whisper } from "next/font/google";
import { FaComments, FaQuestion } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import { PiCoatHangerFill } from "react-icons/pi";
import "./globals.css";
import { Seymour_One } from "next/font/google";
import { useRef, useState, useEffect } from "react";

const inter = Whisper({ subsets: ["latin"], weight: ["400"] });
const interi = Seymour_One({ subsets: ["latin"], weight: ["400"] });

const useIsInView = (ref) => {
  const [isInView, setIsInView] = useState(false);
  const [isNearTop, setIsNearTop] = useState(false);
  const [isNearBottom, setIsNearBottom] = useState(false);
  const threshold = 5;

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const { top, bottom } = ref.current.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;

        const thresholdTop = -threshold;
        const thresholdBottom = windowHeight + threshold;

        setIsInView(top >= thresholdTop && bottom <= thresholdBottom);
        setIsNearTop(top < thresholdTop && bottom >= thresholdTop);
        setIsNearBottom(top <= thresholdBottom && bottom > thresholdBottom);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [ref, threshold]);

  return isInView || isNearTop || isNearBottom;
};

export default function Home() {
  const targetRef1 = useRef(null);
  const targetRef2 = useRef(null);
  const targetRef3 = useRef(null);
  const targetRef4 = useRef(null);
  const targetRef5 = useRef(null);
  const targetRef6 = useRef(null);
  const targetRef7 = useRef(null);

  const isInView1 = useIsInView(targetRef1);
  const isInView2 = useIsInView(targetRef2);
  const isInView3 = useIsInView(targetRef3);
  const isInView4 = useIsInView(targetRef4);
  const isInView5 = useIsInView(targetRef5);
  const isInView6 = useIsInView(targetRef6);
  const isInView7 = useIsInView(targetRef7);

  const scrollToTarget = (target) => {
    if (target.current) {
      const { top } = target.current.getBoundingClientRect();
      const scrollPosition = window.pageYOffset + top - 200;
      window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
    }
  };

  return (
    <div>
      <header className="z-40 h-20 w-full bg-slate-900 shadow-md flex flex-wrap items-center top-0 fixed">
        <div onClick={() => scrollToTarget(targetRef1)} className="p-2">
          <Image src={`/favicon.png`} alt='' className="w-36 h-16 cursor-pointer" width={140} height={60} />
        </div>
        <div className="flex-grow">
          <button onClick={() => scrollToTarget(targetRef2)} className="flex items-center p-4 w-full md:w-40 lg:w-48 hover:bg-slate-200 hover:text-gray-700 bg-slate-600 rounded-xl text-xl text-slate-300">
            <PiCoatHangerFill className="h-8 w-8" /><span className="ml-2">Samples</span>
          </button>
        </div>
        <div className="flex-grow">
          <button onClick={() => scrollToTarget(targetRef3)} className="flex items-center p-4 w-full md:w-40 lg:w-48 hover:bg-slate-200 hover:text-gray-700 bg-slate-600 rounded-xl text-xl text-slate-300">
            <FaComments className="h-8 w-8" /><span className="ml-2">Feedbacks</span>
          </button>
        </div>
        <div className="flex-grow">
          <button onClick={() => scrollToTarget(targetRef4)} className="flex items-center p-4 w-full md:w-40 lg:w-48 hover:bg-slate-200 hover:text-gray-700 bg-slate-600 rounded-xl text-xl text-slate-300">
            <FaQuestion className="h-8 w-8" /><span className="ml-2">FAQs</span>
          </button>
        </div>
        <div className="flex-grow">
          <button onClick={() => scrollToTarget(targetRef5)} className="flex items-center p-4 w-full md:w-40 lg:w-48 hover:bg-slate-200 hover:text-gray-700 bg-slate-600 rounded-xl text-xl text-slate-300">
            <MdAttachEmail className="h-8 w-8" /><span className="ml-2">Subscribe</span>
          </button>
        </div>
      </header>

      <main className="pt-20">
        <section className="text-center py-12">
          <div className="relative w-full max-w-6xl mx-auto">
            <h1 ref={targetRef1} className={`${inter.className} text-6xl md:text-8xl lg:text-9xl font-bold`}>Kindy Rands</h1>
            <h2 className={`${inter.className} text-3xl md:text-5xl lg:text-6xl font-bold mt-4`}>Empire</h2>
          </div>
        </section>

        <section className="w-full max-w-4xl mx-auto flex flex-col md:flex-row items-center my-12">
          <div className="bg-black w-32 h-32 rounded-full mb-4 md:mb-0 md:mr-8">
            <Image src={`/man1.jpg`} height={500} width={500} alt='' className="w-full h-full rounded-full cursor-pointer" />
          </div>
          <div className="text-lg">
            <p>Welcome to KindyRands online boutique. We offer top-notch clothing wears and accessories at affordable prices.</p>
          </div>
        </section>

        <section className="relative w-full max-w-6xl mx-auto my-12 flex flex-col items-center">
          <div className="relative flex justify-center w-full">
            <div className={`absolute w-40 h-52 bg-auto ${isInView1 ? 'left-36 rotate-12' : 'left-0 rotate-0'} ease-linear duration-300 transform shadow-lg`}>
              <Image src={`/casq.jpg`} height={500} width={500} alt='' className="w-full h-full cursor-pointer" />
            </div>
            <div ref={targetRef1} className={`absolute w-40 h-56 bg-blue-600 ${isInView1 ? '-top-8' : 'top-0'} ease-linear duration-700 z-20 shadow-lg`}>
              <Image src={`/shoes.jpg`} height={500} width={500} alt='' className="w-full h-full cursor-pointer" />
            </div>
            <div className={`absolute w-40 h-52 bg-yellow-600 ${isInView1 ? 'left-[-36rem] -rotate-12' : 'left-0 rotate-0'} ease-linear duration-300 transform shadow-lg`}>
              <Image src={`/tishirt.jpg`} height={500} width={500} alt='' className="w-full h-full cursor-pointer" />
            </div>
          </div>
        </section>

        <section ref={targetRef2} className="w-full max-w-6xl mx-auto flex flex-wrap gap-8 p-4 justify-center my-12">
          {[`/jacket wear.jpg`, `/tracksuite2.webp`, `/tracksuite wear.webp`, `/pants wear.webp`, `/shoes wear.jpg`, `/track.jpg`].map((src, index) => (
            <div key={index} className={`opacity-0 bg-green-900 h-64 w-52 rounded-lg transform transition-all ${isInView2 ? 'opacity-100 translate-y-0' : 'translate-y-12'} ease-linear duration-300`}>
              <Image src={src} alt='' height={500} width={500} className="w-full h-full cursor-pointer" />
            </div>
          ))}
        </section>

        <section ref={targetRef7} className="bg-black h-auto py-12">
          <div className={`w-full max-w-6xl mx-auto flex flex-wrap gap-8 p-4 justify-center ${!isInView7 ? 'opacity-0' : 'opacity-100'} ease-linear duration-500`}>
            {[
              { src: `/pink.webp`, title: 'Elegant suites' },
              { src: `/summer.jpg`, title: 'Summer dresses' },
              { src: `/winter.jpg`, title: 'Winter coats' }
            ].map((item, index) => (
              <div key={index} className="bg-green-900 h-64 w-52 rounded-lg transform transition-all ease-linear duration-300">
                <Image src={item.src} alt={item.title} height={500} width={500} className="w-full h-full cursor-pointer" />
                <h3 className="text-center text-white mt-2">{item.title}</h3>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
