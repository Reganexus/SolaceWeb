"use client";

import Image from 'next/image';
import Mockup1 from '../assets/mockups/mockup1.png';
import PartnerImage1 from "../assets/authors/trf.png";
import PartnerImage2 from "../assets/authors/palcollab.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

export default function Banner() {
    return (
        <section
            id="banner"
            className="relative bg-cover bg-bottom bg-no-repeat p-0 m-0 text-white h-max"
            style={{ backgroundImage: 'url(/banner.png)' }}
        >
            <div className="container mx-auto px-4 py-24 flex flex-col-reverse lg:flex-row items-center lg:gap-12">
                {/* Left Column */}
                <div className="text-center lg:text-left lg:w-7/12 flex flex-col gap-4 py-6">
                    <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-shadow-md">
                        Get the SOLACE App
                    </h1>
                    <p className="text-base lg:text-lg leading-relaxed text-shadow-md text-justify">
                        Ready to revolutionize your mobile experience? Download the SOLACE app for Android and dive into a world of powerful features, intuitive design, and enhanced performance. Get started instantly with our secure APK download.
                    </p><a
                        href="/apk/solace.apk"
                        aria-label="Download SOLACE APK"
                        download
                        className="mt-4 px-6 py-3 bg-neutral-900 text-white rounded-md hover:bg-neutral-800 transition duration-300 font-medium w-max block text-center"
                        style={{ background: "var(--dark-neon)" }}
                    >
                        <span className="flex items-center justify-center font-bold gap-2">
                            <FontAwesomeIcon
                                icon={faDownload}
                                fontSize={24}
                                className="text-white"
                            />
                            Download APK
                        </span>
                    </a>

                    <p className='text-base lg:text-lg leading-relaxed text-shadow-md text-justify italic pt-8'>In collaboration with</p>
                    <div className="flex justify-center lg:justify-start mb-6 gap-4">
                        {[PartnerImage1, PartnerImage2].map((image, index) => (
                            <div key={index} className="flex justify-center">
                                <Image
                                    src={image}
                                    alt={`Partner ${index + 1}`}
                                    className="w-60 object-contain bg-white shadow-lg p-2"
                                    priority
                                />
                            </div>
                        ))}
                    </div>
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
