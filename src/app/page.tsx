"use client";

import { useState } from "react";
import Resume from "./ui/resume";
import StarsCanvas from "./ui/stars-canvas";
import {
  BriefcaseIcon,
  AcademicCapIcon,
  CalendarDaysIcon,
  CpuChipIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import Contact from "./ui/contact";
import ButtonContainer from "./ui/button-container";
import InfoContainer from "./ui/info-container";
import ExperienceRow from "./ui/experience-row";
import { education } from "./lib/utils/constants";
import Andreas from "./ui/andreas";

const Page = () => {
  const [isAnimationComplete, setIsAnimationComplete] =
    useState<boolean>(false);

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, scale: 0.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: "spring",
          bounce: 0.4,
          duration: 3.0,
          velocity: 0.4,
        }}
        onAnimationComplete={() => setIsAnimationComplete(true)}
      >
        <div className="text-offwhite mt-20 flex flex-wrap tracking-widest">
          <div className="mx-auto px-2 lg:w-1/3 w-full md:px-8">
            {isAnimationComplete && (
              <div className="flex">
                <div className="mx-auto w-full h-1/2">
                  <Andreas />
                </div>
              </div>
            )}
            <InfoContainer>
              <div className="pb-4 text-offwhite">
                <Contact />
              </div>
            </InfoContainer>

            <ButtonContainer />

            <div className="pt-5 hidden">
              <InfoContainer>
                <h1 className="pb-4 mx-autotext-center flex flex-row items-center content-center justify-center">
                  <CpuChipIcon className="w-6" />
                  <p className="ml-2 text-sm md:text-2xl">Technologies</p>
                </h1>
              </InfoContainer>
            </div>
          </div>

          <div className="w-full mx-auto lg:w-2/3 px-2 md:px-8 pt-10 lg:pt-0">
            <InfoContainer>
              <h1 className="pb-4 mx-auto text-center flex flex-row items-center content-center justify-center">
                <BriefcaseIcon className="w-6" />
                <p className="ml-2 text-sm md:text-2xl font-bold">
                  Work Experience
                </p>
              </h1>
              <Resume />
            </InfoContainer>
            <div className="mt-10 mb-6">
              <InfoContainer>
                <h1 className="pb-4 mx-auto text-offwhite text-center flex flex-row items-center content-center justify-center">
                  <AcademicCapIcon className="w-6" />
                  <p className="ml-2 text-sm md:text-2xl font-bold">
                    Education
                  </p>
                </h1>
                <ExperienceRow experience={education} />
              </InfoContainer>
            </div>
          </div>
        </div>
      </motion.div>

      <StarsCanvas />
    </div>
  );
};

export default Page;
