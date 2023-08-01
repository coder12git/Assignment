import Image from "next/image";
import { Inter } from "next/font/google";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const divStyles = {
    width: "607px",
    height: "292px",
    margin: "0 auto",
  };
  const divStyle = {
    width: "259px",
    height: "37px",
    margin: "0 auto",
  };
  const buttonStyles = {
    width: "112px",
    height: "37px",
  };
  const buttonStyle = {
    width: "127px",
    height: "37px",
  };
  const divSty = {
    width: "1566px",
    height: "48px",
    marginTop: "200px",
  };
  const containerStyle = {
    backgroundImage: 'url("/gradient.png")', // Replace with the path to your image
    backgroundSize: "cover",
    backgroundPosition: "center",
    // Add other styles for the container as needed
  };
  // const carouselSettings = {
  //   dots: false,
  //   infinite: true,
  //   autoplay: true,
  //   autoplaySpeed: 2000, // Adjust the autoplay speed in milliseconds
  //   speed: 500,
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  // };

  return (
    <>
      <div className="pt-12 pb-12 pl-40 pr-40">
        <div className="flex border p-3 rounded-full gap-10 justify-between border-gray-800 hover:border-slate-400">
          <div className="pl-5 pt-2">
            <Image src="/image1.png" alt="logo" width={119} height={24} />
          </div>
          <div className="flex gap-20 pt-2">
            <div className="font-normal text-base text-[#FFFFFF] font-Poppins">
              products
            </div>
            <div className="font-normal text-base text-[#FFFFFF] font-Poppins">
              dao
            </div>
            <div className="font-normal text-base text-[#FFFFFF] font-Poppins">
              build
            </div>
            <div className="font-normal text-base text-[#FFFFFF] font-Poppins">
              docs
            </div>
          </div>
          <div className="pr-5 pt-2">
           <Link href='/auth/login'>
            <button className="font-Poppins font-bold text-sm text-center px-5 py-2 rounded-full bg-[#64AE9D] hover:bg-[#32A5D3] text-[#000000] border border-[#FFFFFF]">
              launch app
            </button>
            </Link>
          </div>
        </div>
      </div>

      <div style={divStyles} className="gap-40 pt-10 ">
        <div style={containerStyle} className="pt-20">
          <div className="text-center font-Poppins font-medium text-xs text-[#54C0A0]">
            JET PROTOCOL
          </div>
          <div className="text-center text-5xl font-Poppins leading-normal font-medium">
            the next generation of
          </div>
          <div className="text-center text-5xl font-semibold leading-normal font-Playfair italic">
            defi governance
          </div>
        </div>
        <div className="text-center text-xl font-extralight leading-relaxed tracking-wider">
          experience open source, transparent and efficient borrowing
        </div>
        <div className="text-center text-xl font-extralight leading-relaxed tracking-wider">
          and lending on solana.
        </div>
        <div className="flex gap-10 pt-8 pb-8" style={divStyle}>
          <div>
            <button
              style={buttonStyles}
              className="hover:bg-[#32A5D3] text-center font-bold text-sm text-[#000000] rounded-full border bg-[#64AE9D] border-[#FFFFFF]"
            >
              read docs
            </button>
          </div>
          <div>
            <button
              style={buttonStyle}
              className="hover:bg-white hover:text-black text-center font-bold text-sm text-[#FFFFFF] rounded-full border border-[#FFFFFF]"
            >
              how it works
            </button>
          </div>
        </div>
      </div>
      <div style={divSty} className="flex gap-24 opacity-60 ">
        {/* <Image 
        src='/image 16.png'
        alt="img"
        width={104}
        height={48}
        /> */}
        <Image src="/image 17.png" alt="img" width={130} height={48} />
        <Image src="/image 18.png" alt="img" width={89} height={48} />
        <Image src="/image 19.png" alt="img" width={93} height={48} />
        <Image src="/image 20.png" alt="img" width={93} height={48} />
        <Image src="/image 21.png" alt="img" width={140} height={48} />
        <Image src="/image 22.png" alt="img" width={90} height={48} />
        <Image src="/image 23.png" alt="img" width={44} height={48} />
        <Image src="/image 24.png" alt="img" width={79} height={48} />
        <Image src="/image 25.png" alt="img" width={104} height={48} />
        <Image src="/image 26.png" alt="img" width={75} height={48} />
        {/* <Image 
        src='/image 27.png'
        alt="img"
        width={93}
        height={48}
        /> */}
        {/* <Image 
        src='/image 28.png'
        alt="img"
        width={49}
        height={48}
        />
       <Image 
        src='/image 29.png'
        alt="img"
        width={67}
        height={48}
        /> */}
        {/* <Image 
        src='/Rectangle 12.png'
        alt="img"
        width={150}
        height={48}
        />
       <Image 
        src='/Rectangle 14.png'
        alt="img"
        width={150}
        height={48}
        /> */}
      </div>
    </>
  );
}
