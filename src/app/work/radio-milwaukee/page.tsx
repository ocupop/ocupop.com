"use client";

import Image from "@/components/base/Image";
// import PortfolioHeader from "@/components/custom/PortfolioHeader";
import Lottie from "lottie-react";
import radioMark from "@/components/lotties/RadioMilwaukee_Mark.json"

export default function RadioMilwaukeePage() {
  return (
    <div>
      <div className="bg-[#F7F2DE] h-[calc(100vh-80px)] flex justify-center items-center p-16 relative overflow-hidden">
        <Image image="/assets/radio-milwaukee/hero-assets.svg" alt="" className="!max-w-5xl mx-auto relative z-10" />
        <div className="absolute w-full h-full  flex justify-center items-center">
          <div className="scale-[2]">
          <Lottie
            animationData={radioMark}
            loop={false}
            autoplay={true}
            initialSegment={[0, 50]}
          />
        </div>
        </div>
      </div>
      {/* <PortfolioHeader
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        client="Radio Milwaukee"
        hero={{
          foreground_image: "/assets/radio-milwaukee/portfolio_header_radio-milwaukee.svg",
          background_color: "#F7F1DB"
        }}
        tags={[
          { tag: "Strategy" },
          { tag: "Identity" },
          { tag: "illustration" },
          { tag: "Type Design" },
        ]}
      /> */}

      <div className="mx-auto max-w-9xl py-20 lg:py-28 px-4 sm:px-6 lg:px-10 grid md:grid-cols-2 lg:grid-cols-7 gap-8">
          <div className="lg:col-span-4">
            <h2 className="text-xl font-sans mb-4 uppercase">Radio Milwaukee</h2>
            <p className="text-4xl mb-2 font-serif">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
          </div>
        <div className="lg:col-span-3 flex items-center flex-col order-first md:order-last">
          <h3 className="text-base font-sans mb-4 uppercase">Services</h3>
            <div className="flex md:flex-col gap-4 md:gap-1 ">
              <span className="inline-block py-1 text-sm font-sans opacity-80">
                Strategy
              </span>
              <span className="inline-block py-1 text-sm font-sans opacity-80">
                Identity
              </span>
              <span className="inline-block py-1 text-sm font-sans opacity-80">
                Illustration
              </span>
              <span className="inline-block py-1 text-sm font-sans opacity-80">
                Type Design
              </span>
            </div>
        </div>
      </div>



      <div className="h-screen bg-[#1F2528] flex justify-center items-center">
        <Image image="/assets/radio-milwaukee/wordmark.svg"  alt="Radio Milwaukee logo" className="!max-w-2xl mx-auto"/>
      </div>
      <div className="bg-[#F7F2DE]">
        <div className="max-w-9xl p-20 mx-auto">
          <div className="grid grid-cols-3 mx-auto gap-32">
            <Image image="/assets/radio-milwaukee/illustration-shout.svg" alt="" className="!max-h-[300px] mx-auto" />
            <Image image="/assets/radio-milwaukee/illustration-spotlight.svg" alt="" className="!max-h-[300px] mx-auto" />
            <Image image="/assets/radio-milwaukee/illustration-handshake.svg" alt="" className="!max-h-[300px] mx-auto" />
          </div>
        </div>

      </div>
      <div className="h-screen bg-[#1F2528] flex justify-center items-center flex-col">
        <div>
          <Image image="/assets/radio-milwaukee/sidewalk-block.svg"  alt="" className="!max-w-2xl mx-auto"/>
          <div className="mt-16 max-w-96">
            <p className="text-lg text-white font-serif">Sidewalk Block. It isn’t the font they wanted, but it’s the font that they got.</p>
          </div>
        </div>
      </div>
      <div className="container max-w-9xl p-20">
      <div className="grid grid-cols-2 gap-16">
          <Image image="/assets/radio-milwaukee/typeface-example.png"  alt=""/>
          <Image image="/assets/radio-milwaukee/mke-words.png"  alt="" />
          <div className="col-span-2 rounded-lg overflow-hidden">
            <Image image="/assets/radio-milwaukee/StickerPoleMockup.jpg"  alt="" className=""/>
          </div>


      </div>
      </div>
    </div>
  );
}