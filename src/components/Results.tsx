"use client";

import React, { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import GalleryImage1 from "../assets/results/testing_mae.png";
import GalleryImage2 from "../assets/results/testing_mse.png";
import GalleryImage3 from "../assets/results/testing_rmse.png";
import GalleryImage4 from "../assets/results/testing_r_squared.png";

type GalleryImage = {
  image: StaticImageData;
  text: string;
};

type CardItem = {
  title: string;
  subtitle: string;
  description: string;
};

const Results: React.FC = () => {
  const [modalImage, setModalImage] = useState<StaticImageData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "";
  }, [isModalOpen]);

  const openModal = (image: StaticImageData, text: string) => {
    setModalImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setModalImage(null);
    setIsModalOpen(false);
  };

  const galleryImages: GalleryImage[] = [
    { image: GalleryImage1, text: "Description for Image 1" },
    { image: GalleryImage2, text: "Description for Image 2" },
    { image: GalleryImage3, text: "Description for Image 3" },
    { image: GalleryImage4, text: "Description for Image 4" },
  ];

  const cardItems: CardItem[] = [
    { title: "3.11", subtitle: "User Satisfaction", description: "Healthcare providers were generally satisfied with the system, particularly about its reliability and usability." },
    { title: "3.07", subtitle: "Perceived Impact", description: "Confirms that SOLACE has a 'High Impact' on enhancing patient monitoring and simplifying symptom tracking, and better patient-caregiver communication." },
    { title: "3.07", subtitle: "Healthcare Provider Acceptance", description: "Healthcare providers find the system to be acceptable in performance efficiency, usability, and ease of use." },
    { title: "3.79", subtitle: "System Developer Acceptance", description: "System developers find the system to be highly acceptable due to the user interface, functionality, and impact on palliative and hospice care settings." },
  ];

  return (
    <section id="results" className="container my-12 py-24 px-4 mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12 text-black">Results</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-stretch">
        {/* Left Column: Gallery and Text */}
        <div className="flex flex-col gap-8 bg-neutral-800 h-full rounded-2xl border overflow-hidden">
          {/* Gallery */}
          <div className="grid grid-cols-2">
            {galleryImages.map(({ image, text }, index) => (
              <div
                key={index}
                className="relative w-full h-40 overflow-hidden cursor-pointer shadow-md"
                onClick={() => openModal(image, text)}
              >
                <Image
                  src={image}
                  alt={`Gallery Image ${index + 1}`}
                  className="w-full h-full object-cover shadow-2xl"
                />
              </div>
            ))}
          </div>

          {/* Text */}
          <div className="flex flex-col gap-4 px-4 pb-8 text-white text-shadow-2xs">
            <p className="text-base lg:text-lg text-justify">
              Metrics (MAE, MSE, RMSE) typically increase due to greater uncertainty in long-term predictions. R2 shows the inability to capture the underlying patterns, but still provides assurance when making predictions.
            </p>
            <p className="text-base lg:text-lg text-justify">
              For most vital signs, particularly Temperature, SaO2, and Heart Rate, all metrics remain near zero, indicating high predictive accuracy across all horizons.
            </p>
          </div>
        </div>

        {/* Right Column: Cards */}
        <div className="grid grid-rows-4 gap-4 h-full">
          {cardItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col lg:flex-row items-start rounded-2xl gap-4 shadow-md p-4 text-white text-shadow-2xs h-full"
              style={{ background: "var(--purple-dark)" }}
            >
              {/* Title */}
              <div className="w-full lg:w-1/8 self-center lg:text-center mb-2 lg:mb-0 text-4xl font-bold">
                {item.title}
              </div>

              {/* Subtitle and Description */}
              <div className="w-full lg:w-7/8 flex flex-col gap-2 self-center">
                <p className="font-semibold text-xl">{item.subtitle}</p>
                <p className="">{item.description}</p>
              </div>
            </div>
          ))}
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

export default Results;
