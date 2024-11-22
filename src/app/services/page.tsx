'use client'

import React from "react";
// import { motion } from "framer-motion";

export default function ServicesPage() {
  return (
    <div className="relative">
      {/* First section */}
      <section className="w-screen h-[80vh] z-20 fixed top-0 bg-purple-200">
        <div className="container flex justify-center items-center h-[80vh] bg-white/50 p-18 mx-auto">
          <h1 className="text-black text-5xl">section 1</h1>
        </div>
      </section>

      {/* spacer section */}
      <section className=" w-full h-[80vh] z-20 relative">
      </section>

      {/* Wrapper div to create scroll space */}
      <div className="h-[200vh] relative">
        {/* Pink overlay section */}
        <div
          className="sticky top-0 h-auto w-full bg-pink-600 text-black rounded-3xl z-30 flex items-center justify-center"
        >

          <section className="bg-green-700 h-[250vh]">
            <h1 className="text-black text-5xl">parallax section</h1>
          </section>
        </div>
      </div>

{/* spacer section */}
      <section className=" w-full h-screen z-20 relative">
      </section>

      {/* Last section */}
      <div className="fixed bottom-0 w-full h-[200vh]">
        <section className="w-full h-screen z-20  bg-purple-500">
          <div className="container flex justify-center items-center h-full bg-white/50 p-18 mx-auto">
            <h1 className="text-black text-5xl">section 3</h1>
          </div>
        </section>
        <section className="w-full h-screen z-20 bg-purple-500">
          <div className="container flex justify-center items-center h-full bg-white/50 p-18 mx-auto">
            <h1 className="text-black text-5xl">section 4</h1>
          </div>
        </section>
      </div>

    </div>
  );
}