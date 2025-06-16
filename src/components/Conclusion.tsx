"use client";

import React, { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import ConclusionImage1 from "../assets/authors/ruth.jpg";
import ConclusionImage2 from "../assets/images/sdg.png";

const Conclusion: React.FC = () => {
  const [modalImage, setModalImage] = useState<StaticImageData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "";
  }, [isModalOpen]);

  const openModal = (image: StaticImageData) => {
    setModalImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setModalImage(null);
    setIsModalOpen(false);
  };

  return (
    <section id="conclusion" className="container py-24 px-4 mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12 text-white text-shadow-2xs">
        Conclusion
      </h2>

      {/* Single Row with Two Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Left Column */}
        <div className="flex flex-col shadow-md rounded-2xl overflow-hidden">
          {/* Image */}
          <div
            className="relative w-full h-auto shadow-md cursor-pointer"
            onClick={() => openModal(ConclusionImage1)}
          >
            <Image
              src={ConclusionImage1}
              alt={"Ruth Foundation Founders"}
              className="object-cover h-80 shadow-lg"
            />
          </div>
          {/* Text */}
          <div className="bg-neutral-900/50 p-4 flex items-center justify-start text-base lg:text-lg leading-relaxed text-white text-justify text-shadow-2xs">
            <p>
              <strong>SOLACE</strong> effectively addressed the Ruth Foundation of the Philippines’ challenges in manual symptom monitoring and timely response by enhancing home-based caregiving, empowering decision-making with helpful predictions, and delivering real-time non-pharmacological interventions.
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col shadow-md rounded-2xl overflow-hidden">

          {/* Image */}
          <div
            className="relative h-full w-auto shadow-md cursor-pointer"
            onClick={() => openModal(ConclusionImage2)}
          >
            <Image
              src={ConclusionImage2}
              alt={"SDG"}
              className="object-cover object-top h-80 shadow-lg"
            />
          </div>
          {/* Text */}
          <div className="bg-neutral-900/50 p-4 flex items-center justify-start text-base lg:text-lg leading-relaxed text-white text-justify text-shadow-2xs">
            <p>
              The development and study of SOLACE have significantly contributed to the United Nations’ Sustainable Development Goals, particularly in the areas of Good Health and Well-being, Industry, Innovation, and Infrastructure, as well as Partnerships for the Goals.
            </p>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && modalImage && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 h-[100vh]"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.95)" }}
        >
          <div className="relative h-[100vh] w-full p-4 flex flex-col lg:flex-row items-center justify-center">
            <div className="flex-[0.6] flex items-center justify-center h-full max-h-[80vh]">
              <Image
                src={modalImage}
                alt="Enlarged View"
                className="object-contain h-full w-auto rounded-lg"
              />
            </div>
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 p-2 rounded-full"
            >
              <FontAwesomeIcon
                icon={faXmark}
                fontSize={32}
                className="text-white hover:text-neutral-500"
              />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Conclusion;
