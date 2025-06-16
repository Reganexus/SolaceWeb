"use client";

import React, { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import RecommendationImage1 from "../assets/images/recommendation.jpg";

const Recommendations: React.FC = () => {
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
    <section id="recommendations" className="container px-4 mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12 text-white text-shadow-2xs">
        Recommendations
      </h2>

      {/* Two-Column Layout */}
      <div className="flex flex-col lg:flex-row rounded-2xl overflow-hidden shadow-md">
        {/* Left Column: Text */}
        <div className="flex-[1] bg-neutral-900/50 p-4 flex items-center justify-start text-base lg:text-lg leading-relaxed text-white text-justify text-shadow-2xs">
          <p>
            Although the results are promising, there is still room for improvement. Enhancing the AI model with more comprehensive datasets and hybrid modeling approaches could significantly boost its performance. Additionally, integrating wearable devices for real-time data input and deploying SOLACE in home-based palliative and hospice care institutions affiliated with the Ruth Foundation are crucial steps to unlock its full potential.
          </p>
        </div>

        {/* Right Column: Image */}
        <div
          className="flex-[2] relative w-full h-auto shadow-md cursor-pointer"
          onClick={() => openModal(RecommendationImage1)}
        >
          <Image
            src={RecommendationImage1}
            alt={"Ruth Foundation Founders"}
            className="object-cover h-90 shadow-lg"
          />
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

export default Recommendations;
