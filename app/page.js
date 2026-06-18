"use client";
import Image from "next/image";
import { ContinueBtn } from "./_components/continueBtn";
import { RegisterSec1 } from "./_components/registerSec1";
import { useState } from "react";

export default function Home() {
  const [currentStep, setCurrentStep] = useState(1);
  return (
    <div className="flex h-163.75 w-120 rounded-lg drop-shadow-lg p-8 bg-[#FFFFFF] flex-col">
      <div className="h-96.25 w-full rounded-lg">
        <Image src="/icons/logo.svg" alt="Logo" width={60} height={60} />
        <p className="font-semibold font-sans text-[26px] [text-shadow:0px_4px_4px_rgba(0,0,0,0.25)] text-[#202124]">
          Join Us! 😎
        </p>
        <p className="text-[#8E8E8E] font-normal text-[18px]">
          Please provide all current information accurately.
        </p>
        {currentStep === 1 ? <RegisterSec1 /> : null}
      </div>
      {currentStep != 4 ? <ContinueBtn /> : null}
    </div>
  );
}
