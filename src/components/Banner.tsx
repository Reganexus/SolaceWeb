"use client";

import Image from 'next/image';
import Mockup1 from '../assets/mockups/mockup1.png';

export default function Banner() {
    const scrollToSection = (id: string) => {
        const targetElement = document.getElementById(id);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
            console.warn(`Element with id "${id}" not found.`);
        }
    };

    return (
        <section
            id="banner"
            className="relative bg-cover bg-bottom bg-no-repeat text-white h-max"
            style={{ backgroundImage: 'url(/banner.png)' }}
        >
            <div className="container mx-auto px-4 py-24 flex flex-col-reverse lg:flex-row items-center lg:gap-12">
                {/* Left Column */}
                <div className="text-center lg:text-left lg:w-7/12 flex flex-col gap-4 py-6">
                    <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-shadow-md">
                        SOLACE
                    </h1>
                    <h4 className="text-base lg:text-2xl italic font-medium text-shadow-md">
                        Bridging the gap in Palliative and Hospice Care
                    </h4>
                    <p className="text-base lg:text-lg leading-relaxed text-shadow-md text-justify">
                        This intelligent app goes beyond simple monitoring, providing healthcare providers
                        and caregivers with real-time predictions of patient vital signs and symptom progression.
                        Enable timely interventions, leading to improved patient outcomes and reduced complications.
                    </p>
                    <button
                        className="mt-4 px-6 py-2 bg-neutral-900 text-white lg:self-start self-center rounded-md hover:bg-neutral-800 transition duration-300 font-medium focus:outline-none w-max"
                        onClick={() => scrollToSection('introduction')}
                    >
                        Learn More
                    </button>
                </div>

                {/* Right Column */}
                <div className="flex justify-center lg:w-5/12">
                    <Image
                        src={Mockup1}
                        alt="SOLACE Mockup"
                        priority
                        className="w-full max-w-sm lg:max-w-none object-contain"
                    />
                </div>
            </div>
        </section>
    );
}
