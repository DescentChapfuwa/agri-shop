"use client";

import React from "react";
import { useState } from "react";
import { fertilizerLists } from "../constants";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Fertilizers = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useGSAP(() => {
    gsap.fromTo("#title", { opacity: 0 }, { opacity: 1, duration: 1 });
    gsap.fromTo(
      ".cocktail img",
      { opacity: 0, xPercent: -100 },
      { xPercent: 0, opacity: 1, duration: 1, ease: "power1.inOut" },
    );
    gsap.fromTo(
      ".details h2",
      { yPercent: 100, opacity: 0 },
      { yPercent: 0, opacity: 100, ease: "power1.inOut" },
    );
    gsap.fromTo(
      ".details p ",
      { yPercent: 100, opacity: 0 },
      { yPercent: 0, opacity: 100, ease: "power1.inOut" },
    );
  }, [currentIndex]);

  const totalCocktails = fertilizerLists.length;


  const gotoSlide = (index) => {
    const newIndex = (index + totalCocktails) % totalCocktails;

    setCurrentIndex(newIndex);
  };

  const getCocktailAt = (indexOffset) => {
    return fertilizerLists[
      (currentIndex + indexOffset + totalCocktails) % totalCocktails
    ];
  };

  const currentCocktail = getCocktailAt(0);
  const prevCocktail = getCocktailAt(-1);
  const nextCocktail = getCocktailAt(1);

  return (
    <section id="fertilizers" aria-labelledby="fertilizer-heading">
     
         <h2 className= "text-yellow-300 text-center sm:text-3xl md:text-5xl xl:text-8xl font-modern-negra mb-5">
          FERT<span className="text-gray-600">LIZERS</span>
        </h2>

      <nav className="grid md:grid-cols-4 grid-cols-2 md:gap-20 gap-10 sm:mb-32 mb-20 relative z-10 md:max-w-6xl md:mx-auto  text-white;" aria-label="Fertilizers Navigation">
        {fertilizerLists.map((cocktail, index) => {
          const isActive = index === currentIndex;

          return (
            <button
              key={cocktail.id}
              className={`${
                isActive
                  ? "text-white border-white p-2 font-modern-negra text-2xl"
                  : "text-white/50  border-white/50 p-2 font-modern-negra text-2xl"
              }`}
              onClick={() => gotoSlide(index)}
            >
              {cocktail.name}
            </button>
          );
        })}
      </nav>

      <div className="content">
        <div className="arrows">
          <button
            className="text-left text-yellow-300"
            onClick={() => gotoSlide(currentIndex - 1)}
          >
            <span>{prevCocktail.name}</span>
            <img
              src="/images/right-arrow.png"
              aria-hidden="true"
              alt="right-arrow"
            />
          </button>

          <button
            className="text-left text-yellow-300"
            onClick={() => gotoSlide(currentIndex - 1)}
          >
            <span>{nextCocktail.name}</span>
            <img
              src="/images/left-arrow.png"
              aria-hidden="true"
              alt="left-arrow"
            />
          </button>
        </div>

        <div className="cocktail">
          <img src={currentCocktail.image} alt="" className="object-contain" />
        </div>


        <div className="space-y-5 md:max-w-md text-left">
          <h2 className="md:text-5xl text-3xl font-serif text-center">
            {currentCocktail.title}
          </h2>
          <p className="md:text-lg pe-5">{currentCocktail.description}</p>
        </div>
      </div>
    </section>
  );
};

export default Fertilizers;
