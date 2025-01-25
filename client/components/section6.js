import React from "react";

const SkillsChallengesSection = () => {
  return (
    <section className="container mx-auto py-16">
      <div className="flex flex-col sm:flex-row">
        <div className="w-full sm:w-2/3">
          <h2 className="text-2xl font-bold mb-4">
            Skills Challenges Program is built on the Umurava Talent Marketplace
            Platform
          </h2>
          <p>
            A Project-based Learning Solution aimed at providing young and
            senior talents with an opportunity to showcase their skills to
            real-world projects and challenges from our partner companies and
            organizations.
          </p>
          <p>
            Umurava Skills Challenges enables young talents to build a portfolio
            and experience that increases their readiness to access job
            opportunities and projects.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md mt-4">
            Get Started
          </button>
        </div>
        <div className="w-full sm:w-1/3 mt-4 sm:mt-0">
          <img
            src="/marketplace-mockup.png"
            alt="Umurava Talent Marketplace"
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default SkillsChallengesSection;
