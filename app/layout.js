
import {Roboto_Condensed, Whisper } from "next/font/google";
import Image from "next/image";
import { FaComments , FaQuestion} from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import { PiCoatHangerFill } from "react-icons/pi";
import "./globals.css";



const inter = Whisper({ subsets: ["latin"] , weight : ["400"] });

const roboto = Roboto_Condensed({ subsets: ["latin"] , weight : ["400"] });


export const metadata = {
  title: "Clark Fushion",
  description: "Generated by djaouad",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.className} w-full h-full bg-slate-100`} >
        
      
      {children}</body>
    </html>
  );
}
