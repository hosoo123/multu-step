"use client";
import Image from "next/image";
import { RegisterSec1 } from "./_features/registerSec1";
import { RegisterSec2 } from "./_features/registerSec2";
import { RegisterSec3 } from "./_features/registerSec3";
import { RegisterSec4 } from "./_features/registerSec4";
import { useState } from "react";

export default function Home() {
  const [currentStep, setCurrentStep] = useState(1);
  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };
  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <>
      {currentStep === 4 ? (
        <RegisterSec4 />
      ) : (
        <div className="flex h-163.75 w-120 rounded-lg drop-shadow-lg p-8 bg-[#FFFFFF] flex-col">
          <div className="h-96.25 w-full rounded-lg ">
            <Image src="/icons/logo.svg" alt="Logo" width={60} height={60} />
            <p className="font-semibold font-sans text-[26px] [text-shadow:0px_4px_4px_rgba(0,0,0,0.25)] text-[#202124]">
              Join Us! 😎
            </p>
            <p className="text-[#8E8E8E] mb-7 font-normal text-[18px]">
              Please provide all current information accurately.
            </p>
            <div>
              {" "}
              {currentStep === 1 ? (
                <RegisterSec1 handleNext={handleNext} />
              ) : null}
              {currentStep === 2 ? (
                <RegisterSec2 handleNext={handleNext} handleBack={handleBack} />
              ) : null}
              {currentStep === 3 ? (
                <RegisterSec3 handleBack={handleBack} handleNext={handleNext} />
              ) : null}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
