"use client";

import Image from 'next/image';
import Intro from '../assets/images/problem.png';

export default function Introduction() {
  return (
    <section id="introduction" className="container mx-auto my-12 p-2">
      <div className="flex flex-col lg:flex-row items-center gap-8">
        {/* Right Column (Image) */}
        <div className="lg:w-5/12 flex justify-center">
          <Image
            src={Intro}
            alt="SOLACE Intro"
            priority
            className="w-full max-w-sm lg:max-w-none object-contain"
          />
        </div>

        {/* Left Column (Text) */}
        <div className="lg:w-7/12 p-2">
          <h2 className="text-4xl font-bold text-center lg:text-left mb-6">
            Introduction
          </h2>
          <p className="text-base lg:text-lg leading-relaxed text-justify mb-4">
            Palliative and hospice care in the Philippines face significant challenges, with only
            <strong className="text-primary font-bold"> 10% </strong>
            of hospitals providing these essential services and a critical shortage of trained professionals.
          </p>
          <p className="text-base lg:text-lg leading-relaxed text-justify mb-4">
            As a pioneer in home-based palliative and hospice care, the <strong className="text-primary font-bold">Ruth Foundation contends with workforce limitations and an urgent need for advanced tools </strong>
            to deliver consistent, personalized care.
          </p>
          <p className="text-base lg:text-lg leading-relaxed text-justify mb-4">
            To address these pressing issues,<strong className="text-accent font-bold"> SOLACE was developed </strong>in collaboration with The Ruth Foundation, introducing real-time symptom monitoring powered by AI integration to revolutionize patient monitoring and elevate the standard of care.
          </p>
        </div>
      </div>
    </section>
  );
}
