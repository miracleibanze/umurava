import React from "react";
import Image from "next/image";

const PartnerLogos = () => {
  const logos = [
    { src: "/tori-logo.svg", alt: "TORI Logo" },
    { src: "/gdg-kigali-logo.svg", alt: "GDG Kigali Logo" },
    {
      src: "/education-collaborative-logo.svg",
      alt: "The Education Collaborative Logo",
    },
    { src: "/kepler-logo.svg", alt: "Kepler Logo" },
    { src: "/hiil-logo.svg", alt: "HIIL Logo" },
    { src: "/cib-logo.svg", alt: "CIB Logo" },
    { src: "/ared-logo.svg", alt: "ARED Logo" },
    { src: "/igihe-logo.svg", alt: "IGIHE Logo" },
    { src: "/viamo-logo.svg", alt: "Viamo Logo" },
    { src: "/kepler-logo.svg", alt: "Kepler Logo" }, // Duplicate for demonstration
    { src: "/laterite-logo.svg", alt: "Laterite Logo" },
    { src: "/sokofund-logo.svg", alt: "SokoFund Logo" },
  ];

  return (
    <section className="container mx-auto py-16 text-center">
      <h2 className="text-2xl font-semibold mb-8">
        Join a few Educational Institutions using Skills Challenges by Umurava
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        {logos.map((logo, index) => (
          <div key={index} className="flex justify-center items-center">
            <Image src={logo.src} alt={logo.alt} width={100} height={50} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PartnerLogos;
