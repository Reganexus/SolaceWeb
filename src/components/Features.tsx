"use client";

import Image from "next/image";
import FeatureImage1 from "../assets/mockups/patient_tracking.png";
import FeatureImage2 from "../assets/mockups/dashboard.png";
import FeatureImage3 from "../assets/mockups/intervention.png";
import FeatureImage4 from "../assets/mockups/notifications.png";
import FeatureImage5 from "../assets/mockups/additional_features.png";

export default function Features() {
    const features = [
        {
            id: 1,
            title: "Patient Tracking",
            description:
                "Collects vital signs and symptom inputs from the patient. Vital signs are obtained through manual input, while symptom assessments are collected using sliders. A summary of the tracking input is displayed to ensure data validity and accuracy.",
            image: FeatureImage1,
        },
        {
            id: 2,
            title: "Real-time Dashboard",
            description:
                "Provides a comprehensive view of predicted critical vitals, analysis of symptom tracking, and tracking history.",
            image: FeatureImage2,
        },
        {
            id: 3,
            title: "Real-time Intervention",
            description:
                "Generates non-pharmacological interventions and steps from the detected symptoms of the patient based off the patient tracking module.",
            image: FeatureImage3,
        },
        {
            id: 4,
            title: "Real-time Alerts and Notifications",
            description:
                "Provides real-time communication between healthcare providers about the patient's status and activities.",
            image: FeatureImage4,
        },
        {
            id: 5,
            title: "Other Features",
            description:
                "SOLACE includes additional features such as Note Taking, Patient Scheduling, Task Assignment, and Medicine Prescription to enhance the overall healthcare management experience.",
            image: FeatureImage5,
        },
    ];

    return (
        <section
            id="features"
            className="relative bg-cover bg-bottom bg-no-repeat text-white h-max py-24"
            style={{ backgroundImage: 'url(/banner2.png)' }}
        >
            <div className="container mx-auto py-24 px-4">
                <h2 className="text-4xl font-bold text-center mb-12 text-white text-shadow-2xs">Main Features</h2>
                <div className="grid gap-12">
                    {features.map((feature, index) => (
                        <div
                            key={feature.id}
                            className={`flex flex-col lg:flex-row ${index % 2 == 0 ? "lg:flex-row-reverse" : ""
                                } items-center gap-6`}
                        >
                            {/* Image Section */}
                            <div className="flex-1">
                                <Image
                                    src={feature.image}
                                    alt={feature.title}
                                    className="w-full max-h-[40rem] object-contain rounded-lg"
                                    priority
                                />
                            </div>

                            {/* Text Section */}
                            <div className="flex-1 lg:text-start text-center text-white text-shadow-2xs">
                                <h3 className="lg:text-3xl text-2xl font-bold mb-4">{feature.title}</h3>
                                <p className="lg:text-xl text-base text-justify leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
