"use client";

import Image from "next/image";
import AdvocacyImage from "../assets/authors/ruth2.jpg";
import AuthorImage1 from "../assets/authors/vinas.png";
import AuthorImage2 from "../assets/authors/tacda.jpg";
import AuthorImage3 from "../assets/authors/roxas.jpg";
import AuthorImage4 from "../assets/authors/peren.png";
import PartnerImage1 from "../assets/authors/trf.png";
import PartnerImage2 from "../assets/authors/palcollab.png";

export default function AdvocacyAndAuthors() {
  const authors = [
    {
      image: AuthorImage1,
      name: "Renzo Viñas",
      role: "Project Lead, Frontend Developer, UI/UX",
    },
    {
      image: AuthorImage2,
      name: "Earl Tacda",
      role: "Backend Developer, AI Engineer",
    },
    {
      image: AuthorImage3,
      name: "Cassandra Roxas",
      role: "Data Analyst, Database Manager",
    },
    {
      image: AuthorImage4,
      name: "Dr. Jerian Peren",
      role: "Thesis Adviser",
    },
  ];

  return (
    <section id="advocacy-authors" className="container my-12 py-24 px-4 mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Advocacy Section */}
        <div className="flex flex-col items-center lg:items-start bg-neutral-800 text-white text-shadow-2xs rounded-2xl">
          <div className="relative w-full max-h-[30rem] rounded-lg overflow-hidden">
            <Image
              src={AdvocacyImage}
              alt="Advocacy"
              className="w-full h-full object-cover"
              priority
            />
          </div>
          <div className="mt-8 text-center lg:text-left pb-12 px-4">
            <h2 className="text-4xl font-bold mb-6">Advocacy</h2>
            <p className="text-base lg:text-lg leading-relaxed text-justify">
              By bridging the gap in palliative and hospice care, SOLACE, together
              with The Ruth Foundation, seeks to improve the patient monitoring to
              provide the utmost care the end-of-life patients deserve.
            </p>
          </div>
        </div>

        {/* Authors Section */}
        <div>
          <h2 className="text-4xl font-bold lg:text-start text-center mb-8">Authors & Partners</h2>
          <p className="text-base lg:text-lg leading-relaxed text-justify mb-8">
            This project is a collaborative effort by the following individuals and organizations, 
            who have dedicated their expertise to enhance palliative and hospice care through innovative solutions.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 items-center">
            {authors.map((author, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-start text-center h-full"
              >
                <div className="flex flex-col items-center">
                  <Image
                    src={author.image}
                    alt={author.name}
                    className="rounded-full w-56 object-cover border border-black border-opacity-50"
                  />
                  <h3 className="mt-4 text-base lg:text-lg font-semibold">{author.name}</h3>
                  <p className="text-sm text-gray-600">{author.role}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Partners */}
          <p className="text-center text-base mt-12">In partnership with</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8 items-center">
            {[PartnerImage1, PartnerImage2].map((image, index) => (
              <div key={index} className="flex justify-center">
                <Image
                  src={image}
                  alt={`Partner ${index + 1}`}
                  className="w-100 object-contain"
                  priority
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
