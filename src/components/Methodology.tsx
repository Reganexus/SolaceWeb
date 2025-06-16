"use client";

import React, { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import Research from "../assets/images/research_method.png";
import DataCollection from "../assets/images/data_collection.png";
import AIModel from "../assets/images/ai_model.png";
import Tools from "../assets/images/tools.png";
import SysDev from "../assets/images/sysdev.png";
import DataAnalysis from "../assets/images/data_analysis.png";
import DevProcess from "../assets/images/dev_process.png";
import SysArch from "../assets/images/sys_arch.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const Methodology = () => {
  const [modalImage, setModalImage] = useState<StaticImageData | null>(null);
  const [modalText, setModalText] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isModalOpen]);

  const openModal = (image: StaticImageData, text: string) => {
    setModalImage(image);
    setModalText(text);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setModalImage(null);
    setModalText(null);
    setIsModalOpen(false);
  };

  const data = [
    {
      text: "Research Methodology",
      subtext:
        "This study used Mixed Methods Approach to combine both quantitative and qualitative data collection and analysis. The quantitative data was collected through structured survey forms, while qualitative data was gathered through interviews and focus group discussions with healthcare professionals, caregivers, and patients.",
      imgSrc: Research,
    },
    {
      text: "Data Collection",
      subtext:
        "eICU dataset for training the AI Model & Structured Survey forms for Problem Identification and Evaluation. The survey forms were designed to gather insights from healthcare professionals, caregivers, and patients, ensuring a comprehensive understanding of the challenges and needs in palliative and hospice care.",
      imgSrc: DataCollection,
    },
    {
      text: "AI Model",
      subtext:
        "Extreme Gradient Boosting (XGBoost) to predict future symptom and vital sign flare-ups. XGBoost learns from every input. It compares the actual and predicted values to get the residual error to help adjust the XGBoost model to create more accurate predictions in the future.",
      imgSrc: AIModel,
    },
    {
      text: "Tools and Instruments",
      subtext:
        "Survey Questionnaires are based on ISO/IEC 25010:2023 Standards along with Technology Acceptance Model (TAM). XGBoost Model Prediction Accuracy is evaluated using Python.",
      imgSrc: Tools,
    },
    {
      text: "System Development",
      subtext:
        "Agile-Scrum Methodology was used to organize the software development lifecycle. Each sprint was planned to deliver specific features and improvements, ensuring continuous feedback and adaptation.",
      imgSrc: SysDev,
    },
    {
      text: "Data Analysis",
      subtext:
        "Evaluate XGBoost Model Using MAE (Mean Absolute Error), MSE (Mean Squared Error), RMSE (Root Mean Squared Error), and R2 (R-squared). Evaluate User Satisfaction, Perceived Benefits, and Acceptance through Descriptive Analysis (Quantitative) and Thematic Analysis (Qualitative).",
      imgSrc: DataAnalysis,
    },
    {
      text: "Development Process",
      subtext:
        "SOLACE was developed using Flutter for frontend and Python, Google Cloud, and FastAPI for backend. Firebase was used for authentication and database management. Figma and Photoshop were used for UI/UX design.",
      imgSrc: DevProcess,
    },
    {
      text: "System Architecture",
      subtext:
        "Users interact with the system by role. Each activity is bonded to the database, thus providing real-time data processing. The XGBoost model accesses the database to record and provide timely predictive interventions.",
      imgSrc: SysArch,
    },
  ];

  return (
    <section id="methodology" className="w-full bg-cover bg-center bg-no-repeat py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-black">Methodology</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {data.map((item, index) => (
            <div key={index} className="relative shadow-2xl border-b-neutral-900 rounded-2xl overflow-hidden transform transition duration-300 hover:scale-105" style={{ backgroundColor: "var(--dark-gray-200)" }}>
              <div className="relative w-full h-64 p-0">
                <Image
                  src={item.imgSrc}
                  alt={item.text}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover cursor-pointer"
                  onClick={() => openModal(item.imgSrc, `${item.text} - ${item.subtext}`)}
                />
              </div>
              <div className="p-4">
                <h3 className="text-2xl text-white text-shadow-2xs font-bold text-center">{item.text}</h3>
                <p className="text-base text-gray-100 text-shadow-2xs text-justify mt-2">{item.subtext}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && modalImage && modalText && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 h-[100vh]"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.95)" }}
        >
          <div className="relative container h-[100vh] w-full p-4 flex flex-col lg:flex-row items-center justify-center">
            {/* Image Section - 60% */}
            <div className="flex-[0.6] flex items-center justify-center h-full max-h-[80vh]">
              <Image
                src={modalImage}
                alt="Enlarged View"
                className="object-contain h-full w-auto rounded-lg"
              />
            </div>

            {/* Text Section - 40% */}
            <div className="flex-[0.4] flex flex-col justify-center px-4 mt-4 lg:mt-0 max-h-[20vh] overflow-y-auto">
              <p className="text-white text-base lg:text-lg text-justify leading-relaxed">
                {modalText}
              </p>
            </div>

            {/* Close Button */}
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

export default Methodology;
