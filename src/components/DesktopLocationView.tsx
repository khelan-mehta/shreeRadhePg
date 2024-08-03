"use client";
import { useEffect, useRef } from "react";
import lottie from "lottie-web";
import Footer from "@/components/Footer";
import DesktopView from "@/components/views/desktopView";
import MobileView from "@/components/views/mobileView";
import Image from "next/image";
import { MapPin } from "lucide-react";

export default function DesktopLocationView() {
  const animationContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: animationContainer.current!,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "/mapFinal.json",
    });
  }, []);

  return (
    <div className="flex flex-col overflow-y-hidden">
      {/* Lottie Animation Container */}
      <div
        ref={animationContainer}
        className="mt-[-1180px] absolute ml-[-300px] z-[-1] w-[80%]" // Adjust size here
      />
      <div className="flex absolute right-10 h-[13vh]   bg-white justify-center items-center w-[50vw] px-2 rounded-lg border-dashed border-2 border-primary">
        <div className="flex w-[15%] self-center justify-center items-center">
          <MapPin />
        </div>
        <div className="flex flex-col  self-center text-black z-[1] w-[100%] items-center justify-center h-[12vh] bg-white text-[16px] font-bold ">
          Godrej Garden City, located in Gota, Ahmedabad, Gujarat 380060
        </div>
      </div>
      <div className="flex absolute mt-[130px] right-10 h-[13vh]   bg-white justify-center items-center w-[50vw] px-2 rounded-lg border-dashed border-2 border-primary">
        <div className="flex w-[15%] self-center justify-center items-center">
          <MapPin />
        </div>
        <div className="flex flex-col  self-center text-black z-[1] w-[100%] items-center justify-center h-[12vh] bg-white text-[16px] font-bold ">
          Abhilash Appartments, located in Gota, Ahmedabad, Gujarat 380060
        </div>
      </div>
      <div className="flex absolute mt-[260px] right-10 h-[13vh]   bg-white justify-center items-center w-[50vw] px-2 rounded-lg border-dashed border-2 border-primary">
        <div className="flex w-[15%] self-center justify-center items-center">
          <MapPin />
        </div>
        <div className="flex flex-col  self-center text-black z-[1] w-[100%] items-center justify-center h-[12vh] bg-white text-[16px] font-bold ">
          Godrej Garden City, located in Gota, Ahmedabad, Gujarat 380060
        </div>
      </div>

      {/* Footer */}
      <div className="mt-[500px] z-[10]">
        <Footer />
      </div>
    </div>
  );
}
