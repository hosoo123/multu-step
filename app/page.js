"use client";
import Image from "next/image";
import { RegisterSec1 } from "./_features/registerSec1";
import { RegisterSec2 } from "./_features/registerSec2";
import { RegisterSec3 } from "./_features/registerSec3";
import { useState } from "react";

export default function Home() {
  const [currentStep, setCurrentStep] = useState(3);
  return (
    <div className="flex h-163.75 w-120 rounded-lg drop-shadow-lg p-8 bg-[#FFFFFF] flex-col">
      <div className="h-96.25 w-full rounded-lg ">
        <Image src="/icons/logo.svg" alt="Logo" width={60} height={60} />
        <p className="font-semibold font-sans text-[26px] [text-shadow:0px_4px_4px_rgba(0,0,0,0.25)] text-[#202124]">
          Join Us! 😎
        </p>
        <p className="text-[#8E8E8E] mb-7 font-normal text-[18px]">
          Please provide all current information accurately.
        </p>
        {currentStep === 1 ? <RegisterSec1 /> : null}
        {currentStep === 2 ? <RegisterSec2 /> : null}
        {currentStep === 3 ? <RegisterSec3 /> : null}
      </div>
    </div>
  );
}
