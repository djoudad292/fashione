"use client"
import Image from "next/image";
import {Roboto_Condensed, Whisper } from "next/font/google";
import { FaComments , FaQuestion} from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import { PiCoatHangerFill } from "react-icons/pi";
import "./globals.css";

import {  Seymour_One } from "next/font/google";
import { useRef , useState , useEffect } from "react";
const inter = Whisper({ subsets: ["latin"] , weight : ["400"] });
const interi = Seymour_One({ subsets: ["latin"] , weight : ["400"] });

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

        // Calculate the threshold distance from the viewport
        const thresholdTop = -threshold;
        const thresholdBottom = windowHeight + threshold;

        // Check if the element is in or near the viewport
        setIsInView(top >= thresholdTop && bottom <= thresholdBottom);
        setIsNearTop(top < thresholdTop && bottom >= thresholdTop);
        setIsNearBottom(top <= thresholdBottom && bottom > thresholdBottom);
      }
    };

    // Initial check when component mounts
    handleScroll();

    // Listen for scroll events
    window.addEventListener('scroll', handleScroll);

    // Cleanup
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
  const isInView1 = useIsInView(targetRef1 );
  const isInView2 = useIsInView(targetRef2 );
  const isInView3 = useIsInView(targetRef3 );
  const isInView4 = useIsInView(targetRef4 );
  const isInView5 = useIsInView(targetRef5 );
  const isInView6 = useIsInView(targetRef6 );
  const isInView7 = useIsInView(targetRef7 );
  
  const scrollToTarget = (target, ) => {
    if (target.current) {
      const { top } = target.current.getBoundingClientRect();
      const scrollPosition = window.pageYOffset + top - 200;
      window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
    }
  };
  
  return (
    <div>
    <header className=" z-40  h-[7rem] w-full bg-slate-900 shadow-md shadow-black flex flex-wrap gap-10 items-center top-0 fixed ">
        <div onClick={() => scrollToTarget(targetRef1)}><Image src={`/favicon.png`} alt='' className=" w-46 h-24 mx-7 cursor-pointer" width={140} height={60} /></div>
        
        <div><button onClick={() => scrollToTarget(targetRef2)} className=" flex justify-between p-7 w-[12rem] h-[4rem] hover:bg-slate-200 hover:text-gray-700 bg-slate-600 rounded-xl text-[20px] text-slate-300 items-center "><PiCoatHangerFill className=" h-10 w-10"/><>Samples</></button></div>
        <div><button onClick={() => scrollToTarget(targetRef3)} className=" flex justify-between p-7 w-[12rem] h-[4rem] hover:bg-slate-200 hover:text-gray-700 bg-slate-600 rounded-xl text-[20px] text-slate-300 items-center "><FaComments className=" h-10 w-10"/><>Feedbacks</></button></div>
        <div><button onClick={() => scrollToTarget(targetRef4)} className=" flex justify-between p-7 w-[12rem] h-[4rem] hover:bg-slate-200 hover:text-gray-700 bg-slate-600 rounded-xl text-[20px] text-slate-300 items-center "><FaQuestion className=" h-10 w-10"/><>FAQs</></button></div>
        <div><button onClick={() => scrollToTarget(targetRef5)} className=" flex justify-between p-7 w-[12rem] h-[4rem] hover:bg-slate-200 hover:text-gray-700 bg-slate-600 rounded-xl text-[20px] text-slate-300 items-center "><MdAttachEmail className=" h-10 w-10"/><>Subscribe</></button></div>


      </header>
  <center>
      <div  className="w-[70rem] h-[10rem] ">
        <div className="  inset-0 te ">
          <div className=" sticky text-[24rem]"></div>
          <div>
            
            <h1 ref={targetRef1} className={`${inter.className}  mt-44 text-[12rem] font-bold `}  >Kindy Rands</h1>
          </div>
        </div>
        <div  className=" flex flex-row-reverse">
          <div>
            <h2 className={ `${inter.className} text-[4rem]   duration-300  delay-200 font-bold`}>Empire</h2>
          </div>
        </div>
      </div>
      <div className="w-[50rem] flex  h-28 mt-[19rem]">
        <div className="bg-black w-16 h-16 rounded-full m-2"><Image src={`/man1.jpg`} height={500} width={500} alt='' className=" w-full h-full rounded-full  cursor-pointer" /></div>
        <div className="mt-3 whitespace-normal  w-[45rem] "><p className=" mt-1 text-lg">
Wellcome to KindyRands online boutique we offer top notch clothing wears and accesories at affordable prices</p></div>
      </div>
      <div  >
      <div className="flex justify-center    mt-32 w-full">
      <div className=" bg-black relative mr-[16rem]">
  <div className={`bg-auto w-[15rem] h-[20rem] absolute top-0 ${isInView1 && `left-[15rem] rotate-[15deg]`} left-11 ease-linear delay-50 duration-300 transform  shadow-lg shadow-black`} ><Image src={`/casq.jpg`} height={500} width={500} alt='' className=" w-full h-full  cursor-pointer" /></div>
  <div ref={targetRef1} className={`bg-blue-600 w-[15rem] h-[21rem] absolute ${isInView1 && `-top-8`} ease-linear duration-700 left-0 z-20 shadow-lg shadow-black`}><Image src={`/shoes.jpg`} height={500} width={500} alt='' className=" w-full h-full  cursor-pointer" /></div>
  <div   className={`bg-yellow-600 w-[15rem] h-[20rem] absolute top-0 ${isInView1 && `left-[-15rem] -rotate-[15deg]`} -left-11 ease-linear delay-50 duration-300 transform  shadow-lg shadow-black  `}><Image src={`/tishirt.jpg`} height={500} width={500} alt='' className=" w-full h-full  cursor-pointer" /></div>
</div></div>
<div ref={targetRef2}  className=" h-[50rem] w-[100rem] mt-[30rem] flex flex-wrap gap-44 p-16 justify-center">
<div className={`opacity-0 bg-green-900 h-[25rem] w-[21rem] rounded-lg translate-y-52 ${(isInView2) &&`opacity-100`} ${isInView2 && `-translate-y-0`} delay-700 ease-linear duration-300 `}> <Image src={`/jacket wear.jpg`}  alt='' height={500} width={500}  className=" w-full h-full  cursor-pointer" /></div>
<div className={`opacity-0 bg-green-900 h-[25rem] w-[21rem] rounded-lg translate-y-52 ${(isInView2) &&`opacity-100`} ${isInView2 && `-translate-y-0`} delay-700 ease-linear duration-300 `}> <Image src={`/tracksuite2.webp`} alt='' height={500} width={500}  className=" w-full h-full  cursor-pointer" /></div>
<div className={`opacity-0 bg-green-900 h-[25rem] w-[21rem] rounded-lg translate-y-52 ${(isInView2) &&`opacity-100`} ${isInView2 && `-translate-y-0`} delay-700 ease-linear duration-300 `}> <Image src={`/tracksuite wear.webp`}    height={500} width={500}  alt='' className=" w-full h-full  cursor-pointer" /></div>
<div className={`opacity-0 bg-green-900 h-[25rem] w-[21rem] rounded-lg translate-y-52 ${(isInView2) &&`opacity-100`} ${isInView2 && `-translate-y-0`} delay-1000 ease-linear duration-300 `}><Image src={`/pants wear.webp`} alt=''  height={500} width={500}  className=" w-full h-full  cursor-pointer" /></div>
<div className={`opacity-0 bg-green-900 h-[25rem] w-[21rem] rounded-lg translate-y-52 ${(isInView2) &&`opacity-100`} ${isInView2 && `-translate-y-0`} delay-1000 ease-linear duration-300 `}><Image src={`/shoes wear.jpg`} alt=''   height={500} width={500}  className=" w-full h-full  cursor-pointer" /></div>
<div className={`opacity-0 bg-green-900 h-[25rem] w-[21rem] rounded-lg translate-y-52 ${(isInView2) &&`opacity-100`} ${isInView2 && `-translate-y-0`} delay-1000 ease-linear duration-300 `}><Image src={`/track.jpg`} alt=''        height={500} width={500}  className=" w-full h-full  cursor-pointer" /></div>
</div>
</div>
<div ref={targetRef7}  className=" bg-black h-[175rem] mt-[35rem]">
<div  className={`${!isInView7 && `opacity-0`} ease-linear duration-500 delay-150 h-[50rem] w-[110rem] mt-[30rem] flex flex-wrap gap-44 p-16 justify-center`}>
<div className=" h-[32rem] w-[24rem]"><div className={`bg-green-900 ${!isInView7 && `-translate-x-40`} ease-linear duration-300 delay-150 h-[25rem] w-[21rem] rounded-3xl ml-6`}> <Image height={500} width={500} src={`/pink.webp`} alt='' className=" w-full h-full  cursor-pointer" /></div><div className=" text-3xl mt-10 mr-28 text-white">Elegant suites</div></div>
<div className=" h-[32rem] w-[28rem]"><div className={`bg-green-900 ${!isInView7 && `-translate-x-40`} ease-linear duration-300 delay-150 h-[25rem] w-[21rem] rounded-3xl ml-10`}><Image height={500} width={500} src={`/summer.jpg`} alt='' className=" w-full h-full  cursor-pointer" /></div><div className=" text-3xl mt-10 mr-20 text-white">Summer dresses</div></div>
<div className=" h-[32rem] w-[28rem]"><div className={`bg-green-900 ${!isInView7 && `-translate-x-40`} ease-linear duration-300 delay-150 h-[25rem] w-[21rem] rounded-3xl ml-10`}><Image height={500} width={500} src={`/winter.jpg`} alt='' className=" w-full h-full  cursor-pointer" /></div><div className=" text-3xl mt-10 mr-20 text-white">Winter coats</div></div>

</div>
<div ref={targetRef3} className={`w-[33rem] ${!isInView3 && `opacity-0`} ease-linear duration-300 delay-150 text-white text-5xl whitespace-normal`}><p>Clothes Tailored to suite your tastes</p></div>
<div className=" h-[50rem] w-[110rem] mt-[10rem] flex flex-wrap gap-16 p-16 justify-center">
<div className={`${!isInView3 && `translate-x-60 translate-y-60 opacity-5`} opacity-100 ease-linear delay-300 duration-300 h-[36rem] w-[27rem]   border-4  border-white shadow-lg shadow-slate-200 p-4 rounded-3xl `}><div className="w-full inline-flex"><div className="bg-white w-16 h-16 rounded-full m-2 text-lg"><Image height={500} width={500} src={`/man2.webp`} alt='' className=" w-full h-full rounded-full  cursor-pointer" /></div></div><div className=" text-white h-[19rem] w-[24rem] whitespace-normal text-3xl mt-6">Great quality, fast shipping, excellent customer service. Will shop again!</div><div className=" text-[25px] mt-1 mr-28 text-white ">hugo humer</div></div>
<div className={`${!isInView3 && `translate-x-60 translate-y-60 opacity-5`} opacity-100 ease-linear delay-300 duration-300 h-[36rem] w-[27rem]   border-4 border-white  shadow-lg shadow-slate-200 p-4 rounded-3xl `}><div className="w-full inline-flex"><div className="bg-white w-16 h-16 rounded-full m-2 text-lg"><Image height={500} width={500} src={`/woman1.jpg`} alt='' className=" w-full h-full rounded-full  cursor-pointer" /></div></div><div className=" text-white h-[19rem] w-[24rem] whitespace-normal text-3xl mt-6">Amazing products, quick delivery, and fantastic service. Highly recommend!</div><div className=" text-[25px] mt-1 mr-28 text-white ">Elezabith rogers</div></div>
<div className={`${!isInView3 && `translate-x-60 translate-y-60 opacity-5`} opacity-100 ease-linear delay-300 duration-300 h-[36rem] w-[27rem]   border-4 border-white  shadow-lg shadow-slate-200 p-4 rounded-3xl `}><div className="w-full inline-flex"><div className="bg-white w-16 h-16 rounded-full m-2 text-lg"><Image height={500} width={500} src={`/man3.webp`} alt='' className=" w-full h-full rounded-full  cursor-pointer" /></div></div><div className=" text-white h-[19rem] w-[24rem] whitespace-normal text-3xl mt-6">Outstanding experience! Top-notch products and lightning-fast delivery. A definite repeat customer!</div><div className=" text-[25px] mt-1 mr-28 text-white ">Drake Jr </div></div>

</div>
<div ref={targetRef4} className="text-white text-[5rem] w-5/6 inline-flex px-20 mt-44 font-bold"><h2>Fashion FAQs</h2></div>
<div className="w-5/6   flex flex-wrap gap-28 mt-[10rem] p-2 ">
<div className="  w-[45rem] h-[10rem]"> <div className={` font-semibold w-full h-[4rem] text-3xl text-white   inline-flex`}> What is your return policy ?</div> <div className={`  w-full h-[4rem] text-2xl  ${isInView4 ? 'opacity-100 translate-x-0' : '-translate-x-96 opacity-0'} duration-300 ease-linear delay-300  text-white inline-flex`}> 30-day window, unworn items, full refund or exchange.</div> </div>
<div className="  w-[45rem] h-[10rem]"> <div className={` font-semibold w-full h-[4rem] text-3xl text-white   inline-flex`}>How can I track my order ?</div> <div className={`  w-full h-[4rem] text-2xl  ${isInView4 ? 'opacity-100 translate-x-0' : '-translate-x-96 opacity-0'} duration-300 ease-linear delay-300  text-white inline-flex`}>Log in, navigate to order tracking section for updates .</div> </div>
<div className="  w-[45rem] h-[10rem]"> <div className={` font-semibold w-full h-[4rem] text-3xl text-white   inline-flex`}>How can I contact customer support ?</div> <div className={`  w-full h-[4rem] text-2xl  ${isInView4 ? 'opacity-100 translate-x-0' : '-translate-x-96 opacity-0'} duration-300 ease-linear delay-300  text-white inline-flex`}>Reach out via email or phone for assistance .</div> </div>
<div className="  w-[45rem] h-[10rem]"> <div className={` font-semibold w-full h-[4rem] text-3xl text-white   inline-flex`}>What payment methods do you accept?</div> <div className={`  w-full h-[4rem] text-2xl  ${isInView4 ? 'opacity-100 translate-x-0' : '-translate-x-96 opacity-0'} duration-300 ease-linear delay-300  text-white inline-flex`}>We accept major credit cards, PayPal, and bank transfers .</div> </div>
</div>
</div>

<div ref={targetRef6} className="h-[60rem] w-full flex gap-20 justify-center pt-36">
<div className={`h-[45rem] w-[33rem] ${!isInView6 && `-rotate-12` } bg-neutral-600 rounded-3xl ease-linear duration-1000 delay-300`}><Image height={500} width={500} src={`/clark.avif`} alt='' className=" w-full h-full  cursor-pointer" /></div>
<div className={`${interi.className} h-[45rem] w-[65rem]  rounded-3xl text-[12rem] flex flex-col justify-center items-center`}><div className={`${!isInView6 && ` opacity-5 scale-0`} ease-linear duration-300 delay-150` }>Clark</div> <div ><div class="relative"><h1 className={`${!isInView6 && ` opacity-5 scale-0`} font-bold relative ease-linear duration-300 delay-300` }>Fashion</h1><div class="absolute top-40 bg-slate-100 left-0 w-full h-[1.1rem]  z-10"></div></div></div></div>

</div>
<div ref={targetRef5} className={`w-full ${!isInView5 && ` opacity-0 `} ease-linear duration-700 delay-200 h-[70rem] bg-black pt-24 text-white`}>
<div className={`text-5xl ${!isInView5 && ` translate-y-20 `} ease-linear duration-1000 delay-150 text-bold translate-y-5`}>Closet transformation awaits !</div>
<div className="text-semibold mt-12 text-lg whitespace-normal w-[40rem]">Register now for exclusive offers and surprises. Its like adding a touch of stylish magic to your wardrobe journey.</div>
<div className="mt-[10rem] flex w-[43rem] h-[4rem] justify-between"><input type="email" className=" bg-gray-700 rounded-2xl p-1 h-full w-[30rem] text-xl pl-2" placeholder="name@email.com"/><div><button className=" w-40 bg-white h-full rounded-2xl text-black hover:bg-slate-800 hover:text-gray-300 hover:text-[2.5 rem ] text-xl">Subscribe</button></div></div>
<div className="w-5/6 h-[25rem]  mt-[10rem] flex justify-between">
<div className="h-full w-[17rem]  flex flex-col gap-6 ">
  <div className="  w-full h-10 text bold text-[2rem] mb-3 text-left">Explore</div>
  <div className="  w-full h-10   text-lg text-left">tops</div>
  <div className="  w-full h-10  text-left">bottoms</div>
  <div className="  w-full h-10  text-left">accesiores</div>
</div>
<div className="h-full w-[17rem]  flex flex-col gap-6 ">
  <div className="  w-full h-10 text bold text-[2rem] mb-3 text-left">Contacts</div>
  <div className="  w-full h-10  text-lg text-left">email</div>
  <div className="  w-full h-10  text-left">phone</div>
  <div className="  w-full h-10  text-left">Store</div>
</div>
<div className="h-full w-[17rem]  flex flex-col gap-6 ">
  <div className="  w-full h-10 text bold text-[2rem] mb-3 text-left">Company</div>
  <div className="  w-full h-10   text-lg text-left">about</div>
  <div className="  w-full h-10  text-left">blog</div>
  <div className="  w-full h-10  text-left">careers</div>
</div>
</div>
</div>


    </center>
    </div>
  );
}