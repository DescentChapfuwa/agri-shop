import React from 'react'
import { useState } from "react";
import { agroToolsList } from "../constants";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ChevronLeft,ChevronRight } from 'react-feather';
const Tools = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useGSAP(() => {
    gsap.fromTo("#title", { opacity: 0 }, { opacity: 1, duration: 1 });
    gsap.fromTo(
      ".tool img",
      { opacity: 0, xPercent: -100 },
      { xPercent: 0, opacity: 1, duration: 1, ease: "power1.inOut" },
    );
  }, [currentIndex]);

  const totalTools = agroToolsList.length;


  const gotoSlide = (index) => {
    const newIndex = (index + totalTools) % totalTools;

    setCurrentIndex(newIndex);
  };

  const getToolAt = (indexOffset) => {
    return agroToolsList[
      (currentIndex + indexOffset + totalTools) % totalTools
    ];
  };

  const currentTool = getToolAt(0);
  const prevTool = getToolAt(-1);
  const nextTool = getToolAt(1);

  return (
    <section id="agri-tools" aria-labelledby="tool-heading">
     
     <h2 className= "text-yellow-300 text-center  sm:text-3xl md:text-5xl xl:text-8xl font-modern-negra mb-5">
          TOO<span className="text-gray-600">LS</span>
        </h2>

      <div className="content">
        <div className="arrows">
          <button
            className="text-left"
            onClick={() => gotoSlide(currentIndex - 1)}
          >
            <span className='text-yellow-300'>{prevTool.name}</span>
            <ChevronLeft size={40} />
          </button>

          <button
            className="text-left"
            onClick={() => gotoSlide(currentIndex + 1)}
          >
            <span className='text-yellow-300'>{nextTool.name}</span>
            <ChevronRight size={40} />
          </button>
        </div>

        <div className="tool ">
          <img src={currentTool.image} alt="" className="object-contain rounded-4xl" />
        </div>

        <div className="recipe">
          
        </div>

        <div className="space-y-5 md:max-w-md text-left">
          <h2 className="md:text-5xl text-3xl font-serif text-yellow-300">
            {currentTool.name}
          </h2>
          <p className="md:text-lg pe-5 text-center font-bold">${currentTool.price}</p>
        </div>
      </div>
    </section>
  );
};

export default Tools;
